---
sidebar_label: 'Requirements'
sidebar_position: 1
---

# Requirements

_DynamicEnvironment_ is distributed as a docker image. Since we're under heavy development make sure
you read the [release notes][releases] of the version you're installing to make sure there are no
extra requirements. Currently, you will also need the source code for generating the manifests /
helm charts.

:::note

Throughout this tutorial we assume docker, kubernetes, and Istio knowledge (e.g. we do not explain
docker image names and registry setup).

:::

:::warning

If you're upgrading your version of _DynamicEnvironment_ make sure you read all
the [release notes][releases] up to the version you're updating to - there could be breaking
changes.

:::

### Build Requirements

As mentioned above you'll need the source code to generate the required deployment manifests. To set
up a build environment follow the requirements and instructions in the [repository's readme](#)
file (obviously, make sure you check out the tag corresponding to the version you're deploying).

### Runtime Requirements

This controller requires recent versions of both _Kubernetes_ and _Istio_ to run. Check the [
_Supported Versions_](../supported-versions.md) for tested versions. Note that other versions may
also work but requires testing.

[releases]: #