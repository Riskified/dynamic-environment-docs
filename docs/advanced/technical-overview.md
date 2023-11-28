---
sidebar_label: 'Technical Overview'
sidebar_position: 1
---

# Technical Overview

Dynamic Environment leverages [_Istio_][istio]'s mesh capabilities to launch custom versions of
deployments and adds special routing based on HTTP request headers or source labels.

## Base Elements

We use the following steps to set up a _DynamicEnvironment_:

### Terminology

In addition to the fundamental elements described below, here are some key terms used throughout
this section to prevent confusion:

* _service-host_: This is the hostname (short or fully qualified) used to access a service.
* _DynamicEnv_: This is the type (_Kind_) of the custom resource.

### IstioMatches

IstioMatches corresponds to a subset of [Istio's HTTPMatchRequest][match] (specifically _headers_
and _source labels_). Currently, _DynamicEnvironment_ IstioMatches are translated to
HTTPMatchRequest as follows:

* All headers are grouped into a single HTTPMatchRequest.
* All source labels are grouped into a single HTTPMatchRequest.

So, if you have the following IstioMatches object:

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

This will produce the following _VirtualService_ HTTP matches:

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

_DynamicEnvironment_ does not provide provisions to forward headers or source labels. It's the
tested application's responsibility to forward headers if needed.

:::

### Subsets

Subsets are named after _Istio_'s subsets, but they are not identical; they are conceptually
similar (representing a subset of service endpoints corresponding to a specific custom version).

* We identify the deployment we want to override based on the _namespace_ / _name_ provided in the
  _DynamicEnv_ manifest. We then clone it using
  the [provided overrides](../references/crd.md#subset) (with minor updates, e.g., setting the
  version).
* We identify the services that use this deployment, so we have a list of service-hosts that point
  to the said deployment (there could be more than a single service).
* For each of the service-hosts, we identify the [_Destination Rule_][DR] that handles the default
  version. We clone it using the custom version.
* The handling of virtual services is explained in [this section](#how-virtualservices-are-handled).

:::warning

Be sure to read the [virtual services](#how-virtualservices-are-handled) section below. It contains
important information regarding our handling of virtual services, including limitations.
:::

### Consumers

Consumers are a special case of [subsets](#subsets) that do not receive traffic. They are a
convenient tool for creating a worker that uses a new version, possibly to connect to new services.
Since they do not accept traffic, we only clone the deployment (similar to subsets) without creating
a _DestinationRule_ and _VirtualService_.

### Cleanup

When deleting a dynamic environment, we remove all the new resources we created and eliminate the
custom routes from all the Virtual Services we modified. This is done with the help
of [finalizers][]. The deletion task is synchronous and returns only after everything is cleaned up.

:::note

Since we use finalizers, the same limitations that apply to deleting any resource with finalizers
also apply here.

:::

### Status Explained

The [status][] is used for both conveying the status of the resource and for the internal management
of resources.

The most significant fields for understanding the status of a _DynamicEnv_ resource are:

* `state`: This field shows the calculated summary of all resources managed by this resource, such
  as _running_, _processing_, or _degraded_.
* `totalCount` and `totalReady`: These fields display the total number of subsets / consumers in
  this resource and how many of them are ready.

For troubleshooting, you can delve deeper into each of the _subsets_ or _consumers_ statuses. Here
is a partial example of a healthy subset (subset names are uniquely generated based on the original
deployment name and namespace):

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

For deployments with multiple service-hosts (more than a single service pointing to a single
deployment), there could be a situation where a specific service-host does not have an active
_DestinationRule_ or _VirtualService_. We do not treat this as an error as long as the service is
accessible from at least one service-host.

:::

The following example shows a subset in which one of the service-host's _DestinationRule_ is
missing. Note the `ignored-missing-destination-rule` status on one of the _DestinationRule_'s status
fields (The state is still `running` because one service-host - `details` - is accessible):

```yaml
[ ... ]
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

The next example shows a subset that has two services. One has a missing _DestinationRule_ for one
of the service-hosts, and the other has a missing _VirtualService_ on the other service-host. This
causes the subset to be identified as `degraded` because the service is not accessible via any of
the service-hosts (note the error in the `subsetErrors` section and
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

To get a quick status overview of all deployed _DynamicEnvironment_ resources, you can run the
following command:

```shell
HOME ➤ kubectl get de
NAME                     STATUS   DESIRED   CURRENT   AGE
dynamicenv-sample        ready    3         3         3h17m
dynamicenv-simple-test   ready    1         1         12s
```

This output shows that all subsets/consumers of each resource are ready.

The [status][] page contains full details for all fields.

## Workflows, Events, etc

### Getting Notified About Modifications in Resources We Control

When we create a new _DynamicEnv_ custom resource, it triggers a [reconcile loop][reconcile-loop].
Every time there's an event related to this specific manifest, the reconcile loop is triggered. This
means that every time we update the manifest, the reconcile loop will run. However, this is not the
only event that triggers the loop. We create and modify various resources (Deployments,
DestinationRules, and VirtualServices), and we want to get notified whenever they are modified
(e.g., deleted by mistake).

Since we are not limited to a specific namespace when creating/updating resources, we cannot "own"
this resource. We have to use other means to get notified when something has changed.

We use [event handlers][event-handlers] for this purpose. This occurs in the form of an annotation
added to the resource. This annotation (`riskified.com/dynamic-environment`) triggers the configured
reconcile loop when it is not empty.

While this behavior is behind the scenes and should not concern you, it's essential to keep in mind
the following:

* If we modify a resource created by _Dynamic Environment_ (Deployment/DestinationRule) without
  updating the _DynamicEnv_ resource, these changes will likely be deleted (or may even cause an
  unknown error).
* If you see the above annotation in your resources (e.g., virtual services - these are not created
  by us but they are updated), you'll know why.

### How Virtual Services Are Handled

Unlike the other resources we manage, [Virtual services][VS] are not created by the operator. When
we identify the service-hosts that point to the deployment specified in the _DynamicEnvironment_'s
subset, we loop through all the virtual services to find the ones that handle these service-hosts.
We also handle [delegates][delegate]. Once identified, we manipulate each of these virtual services
to contain HTTP routes corresponding to our custom version. We also add an annotation to set the
virtual service to receive notifications whenever this virtual service is updated.

:::warning

Currently, we have a limitation, as we do not support virtual services that handle more than one
service-host from the list of identified service-hosts. For example, if our deployment can be
accessed by both `myservice` and `myservice-metrics`, and there is a single _VirtualService_ that
handles both of these service-hosts, we would only add a route for the service-host that was
processed first and ignore the second.

:::

Upon deletion of the _DynamicEnvironment_, we also clean up our routes from all the virtual
services.

[istio]: https://istio.io/

[DR]: https://istio.io/latest/docs/reference/config/networking/destination-rule/

[VS]: https://istio.io/latest/docs/reference/config/networking/virtual-service/

[delegate]: https://istio.io/latest/docs/reference/config/networking/virtual-service/#Delegate

[reconcile-loop]: https://sdk.operatorframework.io/docs/building-operators/golang/tutorial/#reconcile-loop

[event-handlers]: https://pkg.go.dev/sigs.k8s.io/controller-runtime/pkg/handler@v0.14.5#EventHandler

[finalizers]: https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/

[status]: ../references/crd.md#dynamicenvstatus

[match]: https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPMatchRequest