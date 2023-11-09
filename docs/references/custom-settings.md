---
sidebar_label: 'Custom Settings'
sidebar_position: 1
---

# Custom Settings

This page provides an overview of custom settings that can be applied to your manifest or Helm chart before deploying.

### _VersionLabel_ and _DefaultVersion_

To create a custom subset [_Destination Rule_][DR], it's essential to identify the *default* version of the application. This identification is crucial for duplicating the appropriate _Destination Rule_. This is achieved through two settings:

* _VersionLabel_ - This label signifies the version of the application (default: `version`). It should maintain consistency across all _deployments_ and _destination rules_. This setting can only be configured globally.
* _DefaultVersion_ - This setting designates the value of the _VersionLabel_ that identifies the **default version** (default: `shared`). It can be set individually for each subset when a global default version is not applicable. Refer to the `defaultVersion` field in the [subset documentation](./crd.md#subset) for details.

### Labels to Remove (when creating overriding deployments)

In scenarios where you are creating a custom version of a _Deployment_, there might be a need to eliminate specific labels from the duplicated deployment. This could be a label used by third-party tools (e.g., `argocd.argoproj.io/instance`) or any other label that could potentially interfere with your workflow.

This removal process is configurable on a global scale for the entire controller installation:

* When deploying using _Kustomize_, you can customize the labels to remove by modifying the `--remove-labels` flag (and the corresponding parameter). Additional labels can be added to the list as needed. Detailed instructions are available on the [installation page](../getting-started/installation.md#deploy-using-kustomize).
* When deploying via [Helm](../getting-started/installation.md#deploy-using-helm), you can specify the `labelsToRemove` setting.

[DR]: https://istio.io/latest/docs/reference/config/networking/destination-rule/