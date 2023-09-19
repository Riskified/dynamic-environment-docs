---
sidebar_label: 'Overview'
sidebar_position: 1
slug: /
---

# Overview

DynamicEnv is a Kubernetes operator designed to empower developers by facilitating the creation of
on-demand environments. It allows developers to seamlessly launch different versions of specific
services within the same cluster. This approach offers a more efficient and cost-effective solution
for testing and development compared to the traditional method of spinning up the entire
architecture for each iteration. DynamicEnv leverages the mesh functionalities provided by
[_Istio_][istio] to accomplish this task.

Consider the following service description:

![sample service graph](./assets/img/overview-sample.svg)

This is a service that consists of the following elements:

* Front-end
* Backend (deployment is named `my-namespace/backend`)
* Database

Regular traffic goes through the _front-end_ to the _backend_ and to the database.

When we want to test a new version of the backend we can create a new manifest as follows:

```yaml
apiVersion: riskified.com/v1alpha1
kind: DynamicEnv
metadata:
  name: dynamicenv-sample
spec:
  istioMatches:
    - headers:
        user:
          exact: test-user
  subsets:
    - name: backend
      namespace: my-namespace
      containers:
        - containerName: backend
          image: backend-image:test-version
```

_DynamicEnv_ initiates the deployment of an additional backend (the "Tested Version" in the diagram)
featuring the version that requires testing. It directs all incoming traffic with a "user" header
set to "test-user" towards this newly launched backend.

To enable testing, a test client can authenticate as `test-user.` Subsequently, requests originating
from the front-end and containing a `user` header with the value `front-end` will be directed to the
test backend [^1]. This ensures that requests are routed to the appropriate backend while
maintaining connectivity with the upstream database.

[^1]: alternatively, send a request directly to the backend with header `user=test-user`.

[istio]: https://istio.io/