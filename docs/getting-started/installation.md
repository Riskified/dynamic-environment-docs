---
sidebar_label: 'Installation'
sidebar_position: 2
---

# Installation

Provided you have your environment setup (per the [requirements page](requirements.md)), you can
build and deploy the controller:

### Build and publish a _Docker_ image of the controller:

* Edit the project's `Makefile` and set the `IMG` variable to the correct name.

      # For example (around line 50 of the makefile)
      IMG ?= my-company/dynamicenv:latest

* Build and push the image:

      make docker-build docker-push

### Deploy using Kustomize

You have to configure the same image as specified in the `Makefile`.
Edit `$REPOSITORY_ROOT/config/manager/manager.yaml` and set `image` to the value specified above:

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
        image: my-company/dynamicent:latest
```

More custom settings that could be set:

* [_VersionLabel_](../references/custom-settings.md#versionlabel-and-defaultversion)
* [_DefaultVersion_](../references/custom-settings.md#versionlabel-and-defaultversion)
* [_--remove-labels_](../references/custom-settings.md#labels-to-remove-when-creating-overriding-deployments)

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

Helm has a `value.yaml` file (`helm/dynamic-environment/values.yaml`) with values you can override.
You can check the comments in the file and compare them
to [custom settings](../references/custom-settings.md) (for more details). Edit to your needs and
run (within the `helm` directory):

```shell
# you can edit this command to set values or specify alternative settings file
helm install dynamic-environment-operator .
```