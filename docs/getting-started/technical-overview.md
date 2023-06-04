---
sidebar_label: 'Technical Overview'
---

# Technical Overview

Dynamic Environment uses [_Istio_][istio]'s mesh capabilities to launch custom version of a
deployment and adds spacial routing based on HTTP request headers or source labels. We achieve this
by using the following steps:

### Subsets

* We identify the deployment based on the _namespace_ / _name_ supplied in the _DynamicEnv_ manifest
  and then we clone it using the [provided overrides](../references/crd.md#subset) (with minor
  updates - e.g. set version, etc).
* We are identifying the service that use this deployment (so we'll have the service hostname).
* We identify the [_Destination Rule_][DR] that handles this service hostname (see previous bullet)
  for the default version and we clone it for this custom version.
* We scroll through all the [Virtual Services][VS] in the namespace and identify the ones that use
  the default destination rule. We then create custom routes in each of the virtual service that
  points to the new service using the provided [IstioMatch](../references/crd.md#istiomatch).

:::info

We also suppot [Delegate Virtual Service][delegate].

:::

:::caution

Currently we only support a single service for each deployment.

:::

### Consumers

Consumers are spacial case of [subsets](#subsets) that doesn't get network in. because of this we
only clone the deployment like in the subsets but this is as far as we go.

### Cleanup

When deleting a dynamic environment we delete all the new resources we created and remote the custom
routes from all the _Virtual Services_ we modified.

### Status Explained

TODO...

[istio]: https://istio.io/
[DR]: https://istio.io/latest/docs/reference/config/networking/destination-rule/
[VS]: https://istio.io/latest/docs/reference/config/networking/virtual-service/
[delegate]: https://istio.io/latest/docs/reference/config/networking/virtual-service/#Delegate
