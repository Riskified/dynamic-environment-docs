"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_label:"Technical Overview",sidebar_position:1},r="Technical Overview",o={unversionedId:"advanced/technical-overview",id:"version-0.1.0/advanced/technical-overview",title:"Technical Overview",description:"Dynamic Environment leverages Istio's mesh capabilities to launch custom versions of",source:"@site/versioned_docs/version-0.1.0/advanced/technical-overview.md",sourceDirName:"advanced",slug:"/advanced/technical-overview",permalink:"/dynamic-environment-docs/advanced/technical-overview",draft:!1,editUrl:"https://github.com/Riskified/dynamic-environment-docs/edit/main/versioned_docs/version-0.1.0/advanced/technical-overview.md",tags:[],version:"0.1.0",sidebarPosition:1,frontMatter:{sidebar_label:"Technical Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Running Sample",permalink:"/dynamic-environment-docs/getting-started/running"},next:{title:"Tips and Tricks",permalink:"/dynamic-environment-docs/advanced/tips-and-tricks"}},l={},c=[{value:"Base Elements",id:"base-elements",level:2},{value:"Terminology",id:"terminology",level:3},{value:"IstioMatches",id:"istiomatches",level:3},{value:"Subsets",id:"subsets",level:3},{value:"Consumers",id:"consumers",level:3},{value:"Cleanup",id:"cleanup",level:3},{value:"Status Explained",id:"status-explained",level:3},{value:"Workflows, Events, etc",id:"workflows-events-etc",level:2},{value:"Getting Notified About Modifications in Resources We Control",id:"getting-notified-about-modifications-in-resources-we-control",level:3},{value:"How Virtual Services Are Handled",id:"how-virtual-services-are-handled",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"technical-overview"},"Technical Overview"),(0,i.kt)("p",null,"Dynamic Environment leverages ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/"},(0,i.kt)("em",{parentName:"a"},"Istio")),"'s mesh capabilities to launch custom versions of\ndeployments and adds special routing based on HTTP request headers or source labels."),(0,i.kt)("h2",{id:"base-elements"},"Base Elements"),(0,i.kt)("p",null,"We use the following steps to set up a ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment"),":"),(0,i.kt)("h3",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"In addition to the fundamental elements described below, here are some key terms used throughout\nthis section to prevent confusion:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"service-host"),": This is the hostname (short or fully qualified) used to access a service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"DynamicEnv"),": This is the type (",(0,i.kt)("em",{parentName:"li"},"Kind"),") of the custom resource.")),(0,i.kt)("h3",{id:"istiomatches"},"IstioMatches"),(0,i.kt)("p",null,"IstioMatches corresponds to a subset of ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPMatchRequest"},"Istio's HTTPMatchRequest")," (specifically ",(0,i.kt)("em",{parentName:"p"},"headers"),"\nand ",(0,i.kt)("em",{parentName:"p"},"source labels"),"). Currently, ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment")," IstioMatches are translated to\nHTTPMatchRequest as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All headers are grouped into a single HTTPMatchRequest."),(0,i.kt)("li",{parentName:"ul"},"All source labels are grouped into a single HTTPMatchRequest.")),(0,i.kt)("p",null,"So, if you have the following IstioMatches object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[ ... ]\nspec:\n  istioMatches:\n    - headers:\n        end-user:\n    - sourceLabels:\n        end-user: json\n  [ ... ]\n")),(0,i.kt)("p",null,"This will produce the following ",(0,i.kt)("em",{parentName:"p"},"VirtualService")," HTTP matches:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[ ... ]\nspec:\n  http:\n    - match:\n        - headers:\n            end-user:\n              prefix: jason\n      route:\n        - destination:\n            [ ... ]\n    - match:\n        - sourceLabels:\n            end-user: json\n      route:\n        - destination:\n            [ ... ]\n    - route:\n        - destination:\n            [ ... ]\n  [ ... ]\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment")," does not provide provisions to forward headers or source labels. It's the\ntested application's responsibility to forward headers if needed.")),(0,i.kt)("h3",{id:"subsets"},"Subsets"),(0,i.kt)("p",null,"Subsets are named after ",(0,i.kt)("em",{parentName:"p"},"Istio"),"'s subsets, but they are not identical; they are conceptually\nsimilar (representing a subset of service endpoints corresponding to a specific custom version)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We identify the deployment we want to override based on the ",(0,i.kt)("em",{parentName:"li"},"namespace")," / ",(0,i.kt)("em",{parentName:"li"},"name")," provided in the\n",(0,i.kt)("em",{parentName:"li"},"DynamicEnv")," manifest. We then clone it using\nthe ",(0,i.kt)("a",{parentName:"li",href:"/dynamic-environment-docs/references/crd#subset"},"provided overrides")," (with minor updates, e.g., setting the\nversion)."),(0,i.kt)("li",{parentName:"ul"},"We identify the services that use this deployment, so we have a list of service-hosts that point\nto the said deployment (there could be more than a single service)."),(0,i.kt)("li",{parentName:"ul"},"For each of the service-hosts, we identify the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/reference/config/networking/destination-rule/"},(0,i.kt)("em",{parentName:"a"},"Destination Rule"))," that handles the default\nversion. We clone it using the custom version."),(0,i.kt)("li",{parentName:"ul"},"The handling of virtual services is explained in ",(0,i.kt)("a",{parentName:"li",href:"#how-virtualservices-are-handled"},"this section"),".")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be sure to read the ",(0,i.kt)("a",{parentName:"p",href:"#how-virtualservices-are-handled"},"virtual services")," section below. It contains\nimportant information regarding our handling of virtual services, including limitations.")),(0,i.kt)("h3",{id:"consumers"},"Consumers"),(0,i.kt)("p",null,"Consumers are a special case of ",(0,i.kt)("a",{parentName:"p",href:"#subsets"},"subsets")," that do not receive traffic. They are a\nconvenient tool for creating a worker that uses a new version, possibly to connect to new services.\nSince they do not accept traffic, we only clone the deployment (similar to subsets) without creating\na ",(0,i.kt)("em",{parentName:"p"},"DestinationRule")," and ",(0,i.kt)("em",{parentName:"p"},"VirtualService"),"."),(0,i.kt)("h3",{id:"cleanup"},"Cleanup"),(0,i.kt)("p",null,"When deleting a dynamic environment, we remove all the new resources we created and eliminate the\ncustom routes from all the Virtual Services we modified. This is done with the help\nof ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/"},"finalizers"),". The deletion task is synchronous and returns only after everything is cleaned up."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Since we use finalizers, the same limitations that apply to deleting any resource with finalizers\nalso apply here.")),(0,i.kt)("h3",{id:"status-explained"},"Status Explained"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dynamic-environment-docs/references/crd#dynamicenvstatus"},"status")," is used for both conveying the status of the resource and for the internal management\nof resources."),(0,i.kt)("p",null,"The most significant fields for understanding the status of a ",(0,i.kt)("em",{parentName:"p"},"DynamicEnv")," resource are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),": This field shows the calculated summary of all resources managed by this resource, such\nas ",(0,i.kt)("em",{parentName:"li"},"running"),", ",(0,i.kt)("em",{parentName:"li"},"processing"),", or ",(0,i.kt)("em",{parentName:"li"},"degraded"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"totalCount")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"totalReady"),": These fields display the total number of subsets / consumers in\nthis resource and how many of them are ready.")),(0,i.kt)("p",null,"For troubleshooting, you can delve deeper into each of the ",(0,i.kt)("em",{parentName:"p"},"subsets")," or ",(0,i.kt)("em",{parentName:"p"},"consumers")," statuses. Here\nis a partial example of a healthy subset (subset names are uniquely generated based on the original\ndeployment name and namespace):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"subsetsStatus:\n  details-default-dynamicenv-status-updates:\n    deployment:\n      name: details-default-dynamicenv-status-updates\n      namespace: status-updates\n      status: running\n    destinationRule:\n      - name: details-default-dynamicenv-status-updates\n        namespace: status-updates\n        status: running\n    virtualServices:\n      - name: details\n        namespace: status-updates\n        status: running\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For deployments with multiple service-hosts (more than a single service pointing to a single\ndeployment), there could be a situation where a specific service-host does not have an active\n",(0,i.kt)("em",{parentName:"p"},"DestinationRule")," or ",(0,i.kt)("em",{parentName:"p"},"VirtualService"),". We do not treat this as an error as long as the service is\naccessible from at least one service-host.")),(0,i.kt)("p",null,"The following example shows a subset in which one of the service-host's ",(0,i.kt)("em",{parentName:"p"},"DestinationRule")," is\nmissing. Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignored-missing-destination-rule")," status on one of the ",(0,i.kt)("em",{parentName:"p"},"DestinationRule"),"'s status\nfields (The state is still ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," because one service-host - ",(0,i.kt)("inlineCode",{parentName:"p"},"details")," - is accessible):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[ ... ]\nstatus:\n  state: ready\n  subsetsStatus:\n    details-default-dynamicenv-multiple-services-per-deploym:\n      deployment:\n        name: details-default-dynamicenv-multiple-services-per-deploym\n        namespace: multiple-services-per-deployment\n        status: running\n      destinationRules:\n        - name: details-default-dynamicenv-multiple-services-per-deploym-details\n          namespace: multiple-services-per-deployment\n          status: running\n        - name: details-default-dynamicenv-multiple-services-per-deploym-details-alt\n          namespace: multiple-services-per-deployment\n          status: ignored-missing-destination-rule\n      virtualServices:\n        - name: details\n          namespace: multiple-services-per-deployment\n          status: running\n  totalCount: 1\n  totalReady: 1\n")),(0,i.kt)("p",null,"The next example shows a subset that has two services. One has a missing ",(0,i.kt)("em",{parentName:"p"},"DestinationRule")," for one\nof the service-hosts, and the other has a missing ",(0,i.kt)("em",{parentName:"p"},"VirtualService")," on the other service-host. This\ncauses the subset to be identified as ",(0,i.kt)("inlineCode",{parentName:"p"},"degraded")," because the service is not accessible via any of\nthe service-hosts (note the error in the ",(0,i.kt)("inlineCode",{parentName:"p"},"subsetErrors")," section and\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"ignored-missing-destination-rule")," status on one of the destination rules):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[ ... ]\nstatus:\n  state: degraded\n  subsetsStatus:\n    details-default-dynamicenv-multiple-services-scenarios-n:\n      deployment:\n        name: details-default-dynamicenv-multiple-services-scenarios-n\n        namespace: multiple-services-scenarios-no-working-single-host\n        status: running\n      destinationRules:\n        - name: details-default-dynamicenv-multiple-services-scenarios-n-details\n          namespace: multiple-services-scenarios-no-working-single-host\n          status: ignored-missing-destination-rule\n        - name: details-default-dynamicenv-multiple-services-scenarios-n-details-alt\n          namespace: multiple-services-scenarios-no-working-single-host\n          status: running\n      subsetErrors:\n        subset:\n          - error: Couldn't find common active service hostname across DestinationRules\n              and VirtualServices\n      virtualServices:\n        - name: details\n          namespace: multiple-services-scenarios-no-working-single-host\n          status: running\n  totalCount: 1\n  totalReady: 0\n")),(0,i.kt)("p",null,"To get a quick status overview of all deployed ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment")," resources, you can run the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HOME \u27a4 kubectl get de\nNAME                     STATUS   DESIRED   CURRENT   AGE\ndynamicenv-sample        ready    3         3         3h17m\ndynamicenv-simple-test   ready    1         1         12s\n")),(0,i.kt)("p",null,"This output shows that all subsets/consumers of each resource are ready."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dynamic-environment-docs/references/crd#dynamicenvstatus"},"status")," page contains full details for all fields."),(0,i.kt)("h2",{id:"workflows-events-etc"},"Workflows, Events, etc"),(0,i.kt)("h3",{id:"getting-notified-about-modifications-in-resources-we-control"},"Getting Notified About Modifications in Resources We Control"),(0,i.kt)("p",null,"When we create a new ",(0,i.kt)("em",{parentName:"p"},"DynamicEnv")," custom resource, it triggers a ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.operatorframework.io/docs/building-operators/golang/tutorial/#reconcile-loop"},"reconcile loop"),".\nEvery time there's an event related to this specific manifest, the reconcile loop is triggered. This\nmeans that every time we update the manifest, the reconcile loop will run. However, this is not the\nonly event that triggers the loop. We create and modify various resources (Deployments,\nDestinationRules, and VirtualServices), and we want to get notified whenever they are modified\n(e.g., deleted by mistake)."),(0,i.kt)("p",null,'Since we are not limited to a specific namespace when creating/updating resources, we cannot "own"\nthis resource. We have to use other means to get notified when something has changed.'),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/sigs.k8s.io/controller-runtime/pkg/handler@v0.14.5#EventHandler"},"event handlers")," for this purpose. This occurs in the form of an annotation\nadded to the resource. This annotation (",(0,i.kt)("inlineCode",{parentName:"p"},"riskified.com/dynamic-environment"),") triggers the configured\nreconcile loop when it is not empty."),(0,i.kt)("p",null,"While this behavior is behind the scenes and should not concern you, it's essential to keep in mind\nthe following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If we modify a resource created by ",(0,i.kt)("em",{parentName:"li"},"Dynamic Environment")," (Deployment/DestinationRule) without\nupdating the ",(0,i.kt)("em",{parentName:"li"},"DynamicEnv")," resource, these changes will likely be deleted (or may even cause an\nunknown error)."),(0,i.kt)("li",{parentName:"ul"},"If you see the above annotation in your resources (e.g., virtual services - these are not created\nby us but they are updated), you'll know why.")),(0,i.kt)("h3",{id:"how-virtual-services-are-handled"},"How Virtual Services Are Handled"),(0,i.kt)("p",null,"Unlike the other resources we manage, ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/"},"Virtual services")," are not created by the operator. When\nwe identify the service-hosts that point to the deployment specified in the ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment"),"'s\nsubset, we loop through all the virtual services to find the ones that handle these service-hosts.\nWe also handle ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/#Delegate"},"delegates"),". Once identified, we manipulate each of these virtual services\nto contain HTTP routes corresponding to our custom version. We also add an annotation to set the\nvirtual service to receive notifications whenever this virtual service is updated."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Currently, we have a limitation, as we do not support virtual services that handle more than one\nservice-host from the list of identified service-hosts. For example, if our deployment can be\naccessed by both ",(0,i.kt)("inlineCode",{parentName:"p"},"myservice")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"myservice-metrics"),", and there is a single ",(0,i.kt)("em",{parentName:"p"},"VirtualService")," that\nhandles both of these service-hosts, we would only add a route for the service-host that was\nprocessed first and ignore the second.")),(0,i.kt)("p",null,"Upon deletion of the ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment"),", we also clean up our routes from all the virtual\nservices."))}m.isMDXComponent=!0}}]);