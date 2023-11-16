---
sidebar_label: 'Requirements'
sidebar_position: 1
---

# Requirements

_DynamicEnvironment_ is distributed as a Docker image. Since we are actively developing the project,
it is essential to review the [release notes][releases] for the specific version you intend to
install to ensure there are no additional requirements. Additionally, you will need access to the
source code for generating deployment manifests and Helm charts.

:::note

Throughout this tutorial, we assume that you have a basic understanding of Docker, Kubernetes, and
Istio, including concepts like Docker image names and registry setup.

:::

:::warning

If you are upgrading your instance of _DynamicEnvironment_, it's crucial to carefully read all
the [release notes][releases] leading up to the version you are updating to, as there might be
significant changes that require attention.

:::

### Build Requirements

As mentioned earlier, you will require access to the source code to generate the necessary
deployment manifests. To set up a build environment, please refer to the requirements and
instructions outlined in the [repository's README][readme]. Ensure that you check out the tag
corresponding to the version you intend to deploy.

### Runtime Requirements

For this controller to operate smoothly, you need recent versions of both _Kubernetes_ and _Istio_.
Consult the [_Supported Versions_](../references/supported-versions.md) documentation for
information on tested versions. Keep in mind that while other versions may work, they should undergo
testing to ensure compatibility.

[releases]: https://github.com/Riskified/dynamic-environment/releases/latest/

[readme]: https://github.com/Riskified/dynamic-environment/