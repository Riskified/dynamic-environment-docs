"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{8566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(5893),s=t(1151);const o={sidebar_label:"Custom Settings",sidebar_position:1},r="Custom Settings",a={id:"references/custom-settings",title:"Custom Settings",description:"This page provides an overview of custom settings that can be applied to your manifest or Helm chart",source:"@site/versioned_docs/version-0.1.0/references/custom-settings.md",sourceDirName:"references",slug:"/references/custom-settings",permalink:"/dynamic-environment-docs/0.1.0/references/custom-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/Riskified/dynamic-environment-docs/edit/main/versioned_docs/version-0.1.0/references/custom-settings.md",tags:[],version:"0.1.0",sidebarPosition:1,frontMatter:{sidebar_label:"Custom Settings",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/dynamic-environment-docs/0.1.0/advanced/extensions"},next:{title:"DynamicEnv CRD Reference",permalink:"/dynamic-environment-docs/0.1.0/references/crd"}},l={},d=[{value:"<em>VersionLabel</em> and <em>DefaultVersion</em>",id:"versionlabel-and-defaultversion",level:3},{value:"Labels to Remove (when creating overriding deployments)",id:"labels-to-remove-when-creating-overriding-deployments",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"custom-settings",children:"Custom Settings"}),"\n",(0,i.jsx)(n.p,{children:"This page provides an overview of custom settings that can be applied to your manifest or Helm chart\nbefore deploying."}),"\n",(0,i.jsxs)(n.h3,{id:"versionlabel-and-defaultversion",children:[(0,i.jsx)(n.em,{children:"VersionLabel"})," and ",(0,i.jsx)(n.em,{children:"DefaultVersion"})]}),"\n",(0,i.jsxs)(n.p,{children:["To create a custom subset ",(0,i.jsx)(n.a,{href:"https://istio.io/latest/docs/reference/config/networking/destination-rule/",children:(0,i.jsx)(n.em,{children:"Destination Rule"})}),", it's essential to identify the ",(0,i.jsx)(n.em,{children:"default"})," version\nof the application. This identification is crucial for duplicating the appropriate ",(0,i.jsx)(n.em,{children:"Destination\nRule"}),". This is achieved through two settings:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"VersionLabel"})," - This label signifies the version of the application (default: ",(0,i.jsx)(n.code,{children:"version"}),"). It\nshould maintain consistency across all ",(0,i.jsx)(n.em,{children:"deployments"})," and ",(0,i.jsx)(n.em,{children:"destination rules"}),". This setting can\nonly be configured globally."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"DefaultVersion"})," - This setting designates the value of the ",(0,i.jsx)(n.em,{children:"VersionLabel"})," that identifies the\n",(0,i.jsx)(n.strong,{children:"default version"})," (default: ",(0,i.jsx)(n.code,{children:"shared"}),"). It can be set individually for each subset when a global\ndefault version is not applicable. Refer to the ",(0,i.jsx)(n.code,{children:"defaultVersion"})," field in\nthe ",(0,i.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/references/crd#subset",children:"subset documentation"})," for details."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"labels-to-remove-when-creating-overriding-deployments",children:"Labels to Remove (when creating overriding deployments)"}),"\n",(0,i.jsxs)(n.p,{children:["In scenarios where you are creating a custom version of a ",(0,i.jsx)(n.em,{children:"Deployment"}),", there might be a need to\neliminate specific labels from the duplicated deployment. This could be a label used by third-party\ntools (e.g., ",(0,i.jsx)(n.code,{children:"argocd.argoproj.io/instance"}),") or any other label that could potentially interfere with\nyour workflow."]}),"\n",(0,i.jsx)(n.p,{children:"This removal process is configurable on a global scale for the entire controller installation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When deploying using ",(0,i.jsx)(n.em,{children:"Kustomize"}),", you can customize the labels to remove by modifying\nthe ",(0,i.jsx)(n.code,{children:"--remove-labels"})," flag (and the corresponding parameter). Additional labels can be added to\nthe list as needed. Detailed instructions are available on\nthe ",(0,i.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/getting-started/installation#deployment-via-kustomize",children:"installation page"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When deploying via ",(0,i.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/getting-started/installation#deploy-via-helm",children:"Helm"}),", you can specify\nthe ",(0,i.jsx)(n.code,{children:"labelsToRemove"})," setting."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);