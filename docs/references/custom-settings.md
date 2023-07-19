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

### Labels to Remove (when creating overriding deployments)

When we are creating a custom version of a _Deployment_, we sometimes want to remove one or more
labels from the duplicated deployment. This might be a label that is used by 3rd party tool (
e.g. `argocd.argoproj.io/instance` or anything else that might interfere with your workflow).

This is configurable globally per controller installation:

* When deploying using _Kustomize_ check the commented out `--remove-labels` (plus the parameter in
  the next line) - you can add more labels to remove by adding to the list - Check out
  the [installation page](../getting-started/installation.md#deploy-using-kustomize) for details.
* When deploying [using Helm](../getting-started/installation.md#deploy-using-helm) check
  the `labelsToRemove` setting.

[DR]: https://istio.io/latest/docs/reference/config/networking/destination-rule/