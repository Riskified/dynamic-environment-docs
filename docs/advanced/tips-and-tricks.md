---
sidebar_label: 'Tips and Tricks'
---

# Tips and Tricks

This document contains some advanced tips and tricks for _DynamicEnvironment_.

## SourceLabels Propagation

While it's not the responsibility of this operator to propagate source-labels we do offer the option
to add specific source-labels to the deployments we create. See the `podLabels` field in
the [CRD Subset reference](../references/crd.md#subset).

Note however that you can not trust this mechanism to carry the source labels through the entire
services path. Consider the following flow:

![service-with-non-linear-overrides](../assets/img/source-labels.svg)

If we want to control the routing via source-labels we encounter a problem

1. The client sends a request with valid source-labels to `Service A` (reaching `Test Version`
   because of source-labels).
2. _Service A_'s `Test Version` sends a request to `Service B` with source-labels but because we do
   not duplicate `Service B` it reaches the production `Service B`.
3. Our testing flow requires us to get to the `Test Version` when we send request to _Service C_,
   however, since `Service B` is the production one it does not contain the required source-labels
   and we will never reach the `Test Version` of _Service C_ in this flow.

To solve this problem we can override `Service B` (without any modifications - just add
source-labels). This way we can reach the entire flow of our app.

