---
sidebar_label: 'Technical Overview'
---

# Technical Overview

Dynamic Environment uses [_Istio_][istio]'s mesh capabilities to launch custom version of a
deployment and adds spacial routing based on HTTP request headers or source labels.

## Base Elements

We use the following steps to initialize a _DynamicEnvironment_:

### IstioMatches

IstioMatches corresponds to a small subset of [Istio's HTTPMatchRequest][match] (only _headers_ and
_source labels_). Currently the _DynamicEnvironment_ IstioMatches is translated to HTTPMatchRequest
as follows:

* All headers are grouped into a single HTTPMatchRequest
* All source-labels are grouped into a single HTTPMatchRequest

So if you consider the following IstioMatches object:

```yaml
[ ... ]
spec:
  istioMatches:
    - headers:
        end-user:
    - sourceLabels:
        end-user: json
  [ ... ]
```

Will produce the following _VirtualService_ http matches:

```yaml
[ ... ]
spec:
  http:
    - match:
        - headers:
            end-user:
              prefix: jason
      route:
        - destination:
            [ ... ]
    - match:
        - sourceLabels:
            end-user: json
      route:
        - destination:
            [ ... ]
    - route:
        - destination:
            [ ... ]
  [ ... ]
```

:::note

_DynamicEnvironment_ does not contain provisions to forward headers or source labels. It's the
responsibility of the tested application to forward headers if required.

:::

### Subsets

* We identify the deployment we want to override based on the _namespace_ / _name_ supplied in the
  _DynamicEnv_ manifest and then we clone it using the [provided
  overrides](../references/crd.md#subset) (with minor updates - e.g. set version, etc).
* We identify the services that use this deployment so we'll have a list of hostnames that points to
  set deployment (there could be more then a single service).
* For each of the hostnames (see above) we identify the [_Destination Rule_][DR] that handles the
  default version and we clone it using the custom version.
* We scroll through all the [Virtual Services][VS] in the namespace and identify the ones that use
  the default destination rule. We then create custom routes in each of the virtual service that
  points to the new service using the provided [IstioMatch](../references/crd.md#istiomatch).

:::info

We also suppot [Delegate Virtual Service][delegate] - these are processed as pointers to the virtual
service that handles the routing. Note that delegates has various limitations and these limitations
also apply here.

:::

### Consumers

Consumers are spacial case of [subsets](#subsets) that doesn't get traffic in. It's a convenience
helper for creating a worker that uses a new version (possibly to connect to new services). Because
it does not accept traffic we only clone the deployment (same as with subsets) without creating
_DestinationRule_ and _VirtualService_.

### Cleanup

When deleting a dynamic environment we delete all the new resources we created and remove the custom
routes from all the _Virtual Services_ we modified. This is performed with the help
of [finalizers][]. The deletion task is performed synchronously - it returns only once everything is
cleaned up.

:::note

Since we use finalizers the same limitations as deleting any resource with finalizers apply here
also.

:::

### Status Explained

The [status][] is used for both conveying the status of the resource and for internal management of
resources.

The most important fields for understanding the status of a _DynamicEnv_ resource are:

* `state`: displays the calculated summary of all resources handled by this resource - _running_,
  _processing_, _degraded_.
* `totalCount` and `totalReady`: Displays the total number of subsets / consumers in this resource
  and how many of them are ready.

For troubleshooting you can look deeper into each of the _subsets_ or _consumers_ statuses. Here is
a (partial) sample of healthy subset (subset names are uniquely generated based on the original
deployment name and namespace).

```yaml
subsetsStatus:
  details-default-dynamicenv-status-updates:
    deployment:
      name: details-default-dynamicenv-status-updates
      namespace: status-updates
      status: running
    destinationRule:
      - name: details-default-dynamicenv-status-updates
        namespace: status-updates
        status: running
    virtualServices:
      - name: details
        namespace: status-updates
        status: running
```

:::info

For deployment with multiple hostnames (more than a single service that points to set deployment)
there could be a situation that specific hostname does not have an active _DestinationRule_ or
_VirtualService_. We do not treat this as error as long as the service is accessible from at least
single hostname.

:::

Here is an example of a subset where one of the hostname's _DestinationRule_ is missing. Note
the `ignored-missing-destination-rule` status on one of the _DestinatoinRule_'s status fields (The state is
still `running` because one hostname - `details` - is accessible):

```yaml
[...]
status:
  state: ready
  subsetsStatus:
    details-default-dynamicenv-multiple-services-per-deploym:
      deployment:
        name: details-default-dynamicenv-multiple-services-per-deploym
        namespace: multiple-services-per-deployment
        status: running
      destinationRules:
        - name: details-default-dynamicenv-multiple-services-per-deploym-details
          namespace: multiple-services-per-deployment
          status: running
        - name: details-default-dynamicenv-multiple-services-per-deploym-details-alt
          namespace: multiple-services-per-deployment
          status: ignored-missing-destination-rule
      virtualServices:
        - name: details
          namespace: multiple-services-per-deployment
          status: running
  totalCount: 1
  totalReady: 1
```

This next example is of a subset that has two services but there is a missing _DestinationRule_ on
one of the hostnames and a missing _VirtualService_ on the other hostname. This causes the subset to
be identified as `degraded` (note the error in the `subsetErrors` section and
the `ignored-missing-destination-rule` status on one of the destination rules):

```yaml
[ ... ]
status:
  state: degraded
  subsetsStatus:
    details-default-dynamicenv-multiple-services-scenarios-n:
      deployment:
        name: details-default-dynamicenv-multiple-services-scenarios-n
        namespace: multiple-services-scenarios-no-working-single-host
        status: running
      destinationRules:
        - name: details-default-dynamicenv-multiple-services-scenarios-n-details
          namespace: multiple-services-scenarios-no-working-single-host
          status: ignored-missing-destination-rule
        - name: details-default-dynamicenv-multiple-services-scenarios-n-details-alt
          namespace: multiple-services-scenarios-no-working-single-host
          status: running
      subsetErrors:
        subset:
          - error: Couldn't find common active service hostname across DestinationRules
              and VirtualServices
      virtualServices:
        - name: details
          namespace: multiple-services-scenarios-no-working-single-host
          status: running
  totalCount: 1
  totalReady: 0
```

And finally, for a quick status of all deployed _DynamicEnvironment_ resources you can run:

```shell
HOME ➤ kubectl get de
NAME                     STATUS   DESIRED   CURRENT   AGE
dynamicenv-sample        ready    3         3         3h17m
dynamicenv-simple-test   ready    1         1         12s
```

You can see that all subsets/consumers of each resource are ready.

The [status][] page contains full details for all fields.

## Workflows, Events, etc

### Getting notified about modifications in resources we control

When we create a new _Dynamic Environment_ custom resource it triggers
a [reconcile loop][reconcile-loop]. Every time there's an event related to this specific manifest
the reconcile loop is triggered. This means that every time we update the manifest the reconcile
loop will run. However, this is not the only event that triggers the loop. We create and modify
various resources (Deployments, DestinationRules and VirtualServices) and we want to get notified
whenever they are modified (e.g. deleted by mistake). Since we are not limited to specific namespace
when creating / updating resources we can not *own* this resource. We have to use other means to get
notified when something has changed. We are using [event handlers][event-handlers] for this purpose.
This happens in a form of annotation added to the resource. This
annotation (`riskified.com/dynamic-environment`) if not empty, triggers configured reconcile loop.

While this behaviour is behind the scenes and we should not really care about it we should pay
attention to the following:

* If we modify a resource created by _Dynamic Environment_ (Deployment / DestinationRule) not via
  updating the _DynamicEnv_ resource these changes will probably get deleted (or even worse, it will
  cause an unknown error).
* If you see the annotation above in your resources (e.g. virtual services - these are not created
  by us but they are updated) you'll know why.

### How virtualServices are handled

:::warning

This section is just a placeholder. It will be written once we implement support for multiple
services per service name.

:::

[Virtual services][VS] are not created by the operator. When we identify the service hostname(s) the
original deployment is connected to, we loop through all the virtual services searching for ones
that handle our service. If this service is a [delegate][] we are searching in the virtual service
that this delegate points to. When we finalize the list of affected virtual services, we iterate
through it's routes and when we identify a route that's related to our service we add an updated
route (with our matchers) just in front of this route. These routes are also identified by unique
names so we could identify them easily when deleting the routes.

TO BE CONTINUED...

[istio]: https://istio.io/

[DR]: https://istio.io/latest/docs/reference/config/networking/destination-rule/

[VS]: https://istio.io/latest/docs/reference/config/networking/virtual-service/

[delegate]: https://istio.io/latest/docs/reference/config/networking/virtual-service/#Delegate

[reconcile-loop]: https://sdk.operatorframework.io/docs/building-operators/golang/tutorial/#reconcile-loop

[event-handlers]: https://pkg.go.dev/sigs.k8s.io/controller-runtime/pkg/handler@v0.14.5#EventHandler

[finalizers]: https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/

[status]: ../references/crd.md#dynamicenvstatus

[match]: https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPMatchRequest