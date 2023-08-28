---
sidebar_label: 'Requirements'
sidebar_position: 1
---

This operator is currently under heavy development and things are moving fast. Because of that it's
distributed in source form - that is, you have to download and build the operator from source. below
are the runtime and build requirements.

There are git tags that represent stable_(ish)_ checkpoints so it's possible to track
changes. Every tag includes a changelog with a list of changes and breaking changes.

### Build Requirements

To setup a build environment follow the requirementsa and instructions in
the [repository's readme](#) file.

### Runtime Requirements

This controller requires recent versions of both _Kubernetes_ and _Istio_ to run. Check the [
_Supported Versions_](../supported-versions.md) for tested versions. Note that other versions may
also work but requires testing.
