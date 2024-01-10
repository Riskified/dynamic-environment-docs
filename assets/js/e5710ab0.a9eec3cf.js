"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[193],{1789:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var n=r(5893),i=r(1151);const t={},d="DynamicEnv CRD Reference",c={id:"references/crd",title:"DynamicEnv CRD Reference",description:"Packages",source:"@site/versioned_docs/version-0.1.0/references/crd.md",sourceDirName:"references",slug:"/references/crd",permalink:"/dynamic-environment-docs/references/crd",draft:!1,unlisted:!1,editUrl:"https://github.com/Riskified/dynamic-environment-docs/edit/main/versioned_docs/version-0.1.0/references/crd.md",tags:[],version:"0.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Settings",permalink:"/dynamic-environment-docs/references/custom-settings"},next:{title:"Supported Versions",permalink:"/dynamic-environment-docs/references/supported-versions"}},l={},h=[{value:"Packages",id:"packages",level:2},{value:"riskified.com/v1alpha1",id:"riskifiedcomv1alpha1",level:2},{value:"Resource Types",id:"resource-types",level:3},{value:"ConsumerStatus",id:"consumerstatus",level:4},{value:"ContainerOverrides",id:"containeroverrides",level:4},{value:"DynamicEnv",id:"dynamicenv",level:4},{value:"DynamicEnvSpec",id:"dynamicenvspec",level:4},{value:"DynamicEnvStatus",id:"dynamicenvstatus",level:4},{value:"IstioMatch",id:"istiomatch",level:4},{value:"ResourceStatus",id:"resourcestatus",level:4},{value:"StatusError",id:"statuserror",level:4},{value:"StringMatch",id:"stringmatch",level:4},{value:"Subset",id:"subset",level:4},{value:"SubsetErrors",id:"subseterrors",level:4},{value:"SubsetStatus",id:"subsetstatus",level:4}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"dynamicenv-crd-reference",children:"DynamicEnv CRD Reference"}),"\n",(0,n.jsx)(s.h2,{id:"packages",children:"Packages"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#riskifiedcomv1alpha1",children:"riskified.com/v1alpha1"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"riskifiedcomv1alpha1",children:"riskified.com/v1alpha1"}),"\n",(0,n.jsx)(s.p,{children:"Package v1alpha1 contains API Schema definitions for the riskified v1alpha1 API group"}),"\n",(0,n.jsx)(s.h3,{id:"resource-types",children:"Resource Types"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenv",children:"DynamicEnv"})}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"consumerstatus",children:"ConsumerStatus"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenvstatus",children:"DynamicEnvStatus"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"name"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"The name of the resource"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"namespace"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"The namespace where the resource is created"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"status"})," ",(0,n.jsx)(s.em,{children:"LifeCycleStatus"})]}),(0,n.jsx)(s.td,{children:"The life cycle status of the resource"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"hash"})," ",(0,n.jsx)(s.em,{children:"integer"})]}),(0,n.jsx)(s.td,{children:"Hash of the current consumer - for internal use"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"errors"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#statuserror",children:"StatusError"})," array"]})]}),(0,n.jsx)(s.td,{children:"List of errors related to the consumer"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"containeroverrides",children:"ContainerOverrides"}),"\n",(0,n.jsx)(s.p,{children:"Defines the details of the container on which changes need to be made and the relevant overrides"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#subset",children:"Subset"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"containerName"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"Container name to override in multiple containers' environment. If not specified we will use the first container."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"image"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"Docker image name overridden to the desired subset The Docker image found in the original deployment is used if this is not provided."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"command"})," ",(0,n.jsx)(s.em,{children:"string array"})]}),(0,n.jsx)(s.td,{children:"Entrypoint array overridden to the desired subset The docker image's ENTRYPOINT is used if this is not provided."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"env"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#envvar-v1-core",children:"EnvVar"})," array"]})]}),(0,n.jsx)(s.td,{children:"Additional environment variable to the given deployment"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"dynamicenv",children:"DynamicEnv"}),"\n",(0,n.jsx)(s.p,{children:"DynamicEnv is the Schema for the dynamicenvs API"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"apiVersion"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"riskified.com/v1alpha1"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"kind"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"DynamicEnv"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"metadata"})," ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#objectmeta-v1-meta",children:"ObjectMeta"})})]}),(0,n.jsxs)(s.td,{children:["Refer to Kubernetes API documentation for fields of ",(0,n.jsx)(s.code,{children:"metadata"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"spec"})," ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"#dynamicenvspec",children:"DynamicEnvSpec"})})]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"status"})," ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"#dynamicenvstatus",children:"DynamicEnvStatus"})})]}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"dynamicenvspec",children:"DynamicEnvSpec"}),"\n",(0,n.jsx)(s.p,{children:"DynamicEnvSpec defines the desired state of DynamicEnv"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenv",children:"DynamicEnv"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"istioMatches"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#istiomatch",children:"IstioMatch"})," array"]})]}),(0,n.jsx)(s.td,{children:"A list of matchers (partly corresponds to IstioMatch). Each match will have a rule of its own (merged with existing rules) ordered by their order here."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"subsets"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#subset",children:"Subset"})," array"]})]}),(0,n.jsx)(s.td,{children:"Who should participate in the given dynamic environment"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"consumers"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#subset",children:"Subset"})," array"]})]}),(0,n.jsx)(s.td,{children:"Consumers are like subsets but for deployments that do not open a service but connect to external resources for their work (e.g, offline workers). They are equivalent to subsets in the sense that they launch overriding deployments with custom image and/or settings. However, since they are only consumers no virtual service or destination route will be pointing to them."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"dynamicenvstatus",children:"DynamicEnvStatus"}),"\n",(0,n.jsx)(s.p,{children:"DynamicEnvStatus defines the observed state of DynamicEnv"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenv",children:"DynamicEnv"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"subsetsStatus"})," ",(0,n.jsxs)(s.em,{children:["object (keys",":string",", values:",(0,n.jsx)(s.a,{href:"#subsetstatus",children:"SubsetStatus"}),")"]})]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"consumersStatus"})," ",(0,n.jsxs)(s.em,{children:["object (keys",":string",", values:",(0,n.jsx)(s.a,{href:"#consumerstatus",children:"ConsumerStatus"}),")"]})]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"state"})," ",(0,n.jsx)(s.em,{children:"GlobalReadyStatus"})]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"totalCount"})," ",(0,n.jsx)(s.em,{children:"integer"})]}),(0,n.jsx)(s.td,{children:"desired subsets and consumers count"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"totalReady"})," ",(0,n.jsx)(s.em,{children:"integer"})]}),(0,n.jsx)(s.td,{children:"number of available subsets and consumers"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"istiomatch",children:"IstioMatch"}),"\n",(0,n.jsx)(s.p,{children:"specifies a set of criterion to be met in order for the rule to be applied to the HTTP request This\nfield is immutable after creation."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenvspec",children:"DynamicEnvSpec"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"headers"})," ",(0,n.jsxs)(s.em,{children:["object (keys",":string",", values:",(0,n.jsx)(s.a,{href:"#stringmatch",children:"StringMatch"}),")"]})]}),(0,n.jsxs)(s.td,{children:["Header values are case-sensitive and formatted as follows:",(0,n.jsx)("br",{})," - ",(0,n.jsx)(s.code,{children:'exact: "value"'})," for exact string match",(0,n.jsx)("br",{})," - ",(0,n.jsx)(s.code,{children:'prefix: "value"'})," for prefix-based match",(0,n.jsx)("br",{})," - ",(0,n.jsx)(s.code,{children:'regex: "value"'})," for RE2 style regex-based match (",(0,n.jsx)(s.a,{href:"https://github.com/google/re2/wiki/Syntax",children:"https://github.com/google/re2/wiki/Syntax"}),")."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"sourceLabels"})," ",(0,n.jsxs)(s.em,{children:["object (keys",":string",", values",":string",")"]})]}),(0,n.jsx)(s.td,{children:"One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"resourcestatus",children:"ResourceStatus"}),"\n",(0,n.jsx)(s.p,{children:"ResourceStatus shows the status of each item created/edited by DynamicEnv"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#consumerstatus",children:"ConsumerStatus"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#subsetstatus",children:"SubsetStatus"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"name"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"The name of the resource"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"namespace"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"The namespace where the resource is created"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"status"})," ",(0,n.jsx)(s.em,{children:"LifeCycleStatus"})]}),(0,n.jsx)(s.td,{children:"The life cycle status of the resource"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"statuserror",children:"StatusError"}),"\n",(0,n.jsxs)(s.p,{children:["StatusError shows an error we want to display in the status with the last time it happened. This\n",(0,n.jsx)(s.em,{children:"does not"})," have to be the only time it happened. The idea is that a list of errors should only\ncontain single occurrence of an error (just the last)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#consumerstatus",children:"ConsumerStatus"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#subseterrors",children:"SubsetErrors"})}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"stringmatch",children:"StringMatch"}),"\n",(0,n.jsx)(s.p,{children:"Describes how to match a given string in HTTP headers. Match is case-sensitive. one and only one of\nthe fields needs to be defined (oneof)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#istiomatch",children:"IstioMatch"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"exact"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"prefix"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"regex"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"subset",children:"Subset"}),"\n",(0,n.jsx)(s.p,{children:"Subsets defines how to generate subsets from existing Deployments"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenvspec",children:"DynamicEnvSpec"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"name"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"Deployment name (without namespace)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"namespace"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"Namespace where the deployment is deployed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"podLabels"})," ",(0,n.jsxs)(s.em,{children:["object (keys",":string",", values",":string",")"]})]}),(0,n.jsxs)(s.td,{children:["Labels to add to the pods of the deployment launched by this subset. Could be used in conjunction with 'SourceLabels' in the ",(0,n.jsx)(s.code,{children:"IstioMatches"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"replicas"})," ",(0,n.jsx)(s.em,{children:"integer"})]}),(0,n.jsxs)(s.td,{children:["Number of deployment replicas. Default is 1. Note: 0 is ",(0,n.jsx)(s.em,{children:"invalid"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"containers"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#containeroverrides",children:"ContainerOverrides"})," array"]})]}),(0,n.jsx)(s.td,{children:"A list of container overrides (at least one of Containers or InitContainers must not be empty)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"initContainers"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#containeroverrides",children:"ContainerOverrides"})," array"]})]}),(0,n.jsx)(s.td,{children:"A list of init container overrides (at least one of Containers or InitContainers must not be empty)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"defaultVersion"})," ",(0,n.jsx)(s.em,{children:"string"})]}),(0,n.jsx)(s.td,{children:"Default version for this subset (if different then the global default version). This is the version that will get the default route."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"subseterrors",children:"SubsetErrors"}),"\n",(0,n.jsx)(s.p,{children:"SubsetErrors contains all global errors related to set subset."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#subsetstatus",children:"SubsetStatus"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"deployment"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#statuserror",children:"StatusError"})," array"]})]}),(0,n.jsx)(s.td,{children:"Subset's deployment global errors."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"destinationRule"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#statuserror",children:"StatusError"})," array"]})]}),(0,n.jsx)(s.td,{children:"Subset's destination-rule global errors."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"virtualServices"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#statuserror",children:"StatusError"})," array"]})]}),(0,n.jsx)(s.td,{children:"Subset's virtual-services global errors."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"subset"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#statuserror",children:"StatusError"})," array"]})]}),(0,n.jsx)(s.td,{children:"Errors related to subset but not to any of the launched resources"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"subsetstatus",children:"SubsetStatus"}),"\n",(0,n.jsx)(s.p,{children:"SubsetStatus Contains aggregation of all resources status connected to set subset."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Appears in:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#dynamicenvstatus",children:"DynamicEnvStatus"})}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"deployment"})," ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"#resourcestatus",children:"ResourceStatus"})})]}),(0,n.jsx)(s.td,{children:"Status of the deployment that belongs to the subset"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"destinationRules"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#resourcestatus",children:"ResourceStatus"})," array"]})]}),(0,n.jsx)(s.td,{children:"Status of the destination-rule that belongs to the subset"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"virtualServices"})," ",(0,n.jsxs)(s.em,{children:[(0,n.jsx)(s.a,{href:"#resourcestatus",children:"ResourceStatus"})," array"]})]}),(0,n.jsx)(s.td,{children:"Status of the virtual-service that belongs to the subset"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"subsetErrors"})," ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"#subseterrors",children:"SubsetErrors"})})]}),(0,n.jsx)(s.td,{children:"A list of global errors related to subset resources"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"hash"})," ",(0,n.jsx)(s.em,{children:"integer"})]}),(0,n.jsx)(s.td,{children:"Hash of the current subset - for internal use"})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>d});var n=r(7294);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);