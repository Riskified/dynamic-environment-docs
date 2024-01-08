---
sidebar_label: 'Extensions'
sidebar_position: 3
---

# Extensions

Extensions are a way to make local modifications to resources without having to constantly struggle
with merge conflicts when pulling from upstream. The idea is to keep your custom code in a separate
function (located in the `extensions` folder) where there would almost never be updates in upstream.

An example of needing extensions would be to add custom labels to a deployment that does not exist
in the deployment we are cloning. The procedure is documented in
the [extension package doc file][extgodoc].

:::note

If you are building your own operator make sure
you [modify the image name in the manifests](../getting-started/installation.md) to match your
registry.

:::

Extensions are currently implemented only for Deployments but could be added to other resources
types in the future.

[extgodoc]: https://github.com/Riskified/dynamic-environment/blob/main/extensions/doc.go