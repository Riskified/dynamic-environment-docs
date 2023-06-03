---
sidebar_label: 'Custom Settings'
sidebar_position: 1
---

# Custom Settings

This page describe some custom settings you can apply to your manifest / helm chart before
deployment.

### _VersionLabel_ and _DefaultVersion_

In order to create a [_Destination Rule_][DR] for custom subset we need to identify the *default*
version of the application so we will know which _Destination Rule_ to duplicate. For this we use
two settings:

* _VersionLabel_ - The label that indicates the version of the application (default: `version`).
  This label should be consistent across _deployments_ and _destination rules_. This setting could
  only be set globally.
* _DefaultVersion_ - The value of the _VersionLabel_ that identify the **default version** (
  default: `shared`). This setting could be set per subset (e.g, when you don't have a global
  default version) - see `default-version` in [subset](./crd.md#subset).

[DR]: https://istio.io/latest/docs/reference/config/networking/destination-rule/