---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Overview

_Dynamic Environment_ is a kubernetes controller that enables service developers to launch
alternative versions of selected services while using the default services for the ones we don't
want to override. This allows using faster and cheaper environment for testing / development than
having to launch the entire architecture for every test. In order to perform this task _Dynamic
Environment_ uses the mesh capabilities of [_Istio_][istio].

The [Running](./getting-started/running.md) page shows a simple example to make things clearer.

[istio]: https://istio.io/