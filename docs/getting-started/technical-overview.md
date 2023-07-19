---
sidebar_label: 'Technical Overview'
---

# Technical Overview

Dynamic Environment uses [_Istio_][istio]'s mesh capabilities to launch custom version of a
deployment and adds spacial routing based on HTTP request headers or source labels. We achieve this
by using the following steps:

## Basic Elements

### Subsets

* We identify the deployment based on the _namespace_ / _name_ supplied in the _DynamicEnv_ manifest
  and then we clone it using the [provided overrides](../references/crd.md#subset) (with minor
  updates - e.g. set version, etc).
* We are identifying the service that use this deployment (so we'll have the service hostname). A
  deployment might have more than one service pointing to it. We'll soon support this (for now we
  only support single service for deployment).
* We identify the [_Destination Rule_][DR] that handles this service hostname (see previous bullet)
  for the default version and we clone it for this custom version.
* We scroll through all the [Virtual Services][VS] in the namespace and identify the ones that use
  the default destination rule. We then create custom routes in each of the virtual service that
  points to the new service using the provided [IstioMatch](../references/crd.md#istiomatch).

:::info

We also suppot [Delegate Virtual Service][delegate].

:::

:::caution

Currently we only support a single service for each deployment. This will be changed soon. Remember
to update docs (and bullet above) and it's updated!

:::

### Consumers

Consumers are spacial case of [subsets](#subsets) that doesn't get network in. because of this we
only clone the deployment like in the subsets but this is as far as we go.

### Cleanup

When deleting a dynamic environment we delete all the new resources we created and remote the custom
routes from all the _Virtual Services_ we modified.

### Status Explained

TODO...

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

### How virtualServices are handled.

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
