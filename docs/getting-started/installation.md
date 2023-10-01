---
sidebar_label: 'Installation'
sidebar_position: 2
---

# Installation

Provided you have your environment setup (per the [requirements page](requirements.md)), you can
generate manifests and deploy the controller:

### Deploy using Kustomize

Edit `$REPOSITORY_ROOT/config/manager/manager.yaml` and set `image` to the current version:

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
        image: riskified/dynamicenv:TAG
```

More custom settings that could be set:

* [_VersionLabel_](../references/custom-settings.md#versionlabel-and-defaultversion)
* [_DefaultVersion_](../references/custom-settings.md#versionlabel-and-defaultversion)
* [
  _--remove-labels_](../references/custom-settings.md#labels-to-remove-when-creating-overriding-deployments)

Both settings above could be changed in `config/manager/manager.yaml`:

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
          - version <-- this should be replaced for changing the label
          - --default-version
          - shared <-- this should be replaced for changing the default version
        # uncomment below (and edit to your liking) to specify labels to be removed (comma separated list)
        #- --remove-labels
        #- argocd.argoproj.io/instance
```

Once all is configured you can deploy the controller using:

```shell
make deploy
```

### Deploy using Helm

Helm has a `value.yaml` file (`helm/dynamic-environment/values.yaml`) with values you should
override. At the minimum you need to setup the image details correctly:

```yaml title=values.yaml
[ ... ]
image:
  repository: riskified/dynamicenv
  tag: TAG
  pullPolicy: IfNotPresent
  [ ... ]
```

For further customization you should check the comments in the values file and compare them
to [custom settings](../references/custom-settings.md) (for more details).

Once you're done editing run (within the `helm` directory):

```shell
# you can edit this command to set values or specify alternative settings file
helm install dynamic-environment-operator .
```