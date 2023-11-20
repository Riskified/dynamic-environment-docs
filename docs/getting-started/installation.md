---
sidebar_label: 'Installation'
sidebar_position: 2
---

# Installation

Assuming you've successfully set up your environment, following the guidelines provided on
the [requirements page](requirements.md), you can proceed to generate manifests and deploy the
controller:

### Deployment via Kustomize

1. Edit the `$REPOSITORY_ROOT/config/manager/manager.yaml` file and set the `image` field to the
   current version (see below example of defining the image as an environment variable):

```yaml
# ...
spec:
  # ...
  template:
    # ...
    spec:
      # ...
      containers:
        # ...
        image: ghcr.io/Riskified/dynamic-environment:TAG
```

You can further customize the deployment by adjusting the following settings:

* [_VersionLabel_](../references/custom-settings.md#versionlabel-and-defaultversion)
* [_DefaultVersion_](../references/custom-settings.md#versionlabel-and-defaultversion)
* [
  _--remove-labels_](../references/custom-settings.md#labels-to-remove-when-creating-overriding-deployments)

These settings can be changed in the `config/manager/manager.yaml` file:

```yaml
# ...
spec:
  # ...
  template:
    # ...
    spec:
      # ...
      containers:
        # ...
        args:
          - --leader-elect
          - --version-label
          - version <-- this should be replaced to change the label
          - --default-version
          - shared <-- this should be replaced to change the default version
        # Uncomment the lines below (and modify as needed) to specify labels to be removed (comma-separated list)
        #- --remove-labels
        #- argocd.argoproj.io/instance
```

Once you have configured everything, deploy the controller using the following command:

```shell
make deploy
# or with image as environment varible
make deploy IMG="ghcr.io/Riskified/dynamic-environment:TAG"
```

### Deploy via Helm

Helm uses a `values.yaml` file (`helm/dynamic-environment/values.yaml`) with predefined values
that you can override. At the very least, ensure you correctly set up the image details:

```yaml title=values.yaml
[ ... ]
image:
  repository: ghcr.io/Riskified/dynamic-environment
  tag: TAG
  pullPolicy: IfNotPresent
  [ ... ]
```

For more extensive customization, refer to the comments in the values file and compare them to
the [custom settings](../references/custom-settings.md) for in-depth details.

Once you've finished making your edits, execute the following command (from within the `helm`
directory):

```shell
# you can edit this command to set values or specify alternative settings file
helm install dynamic-environment-operator .
```