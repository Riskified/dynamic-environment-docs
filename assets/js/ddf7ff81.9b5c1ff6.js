"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[337],{7705:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(5893),s=i(1151);const o={sidebar_label:"Installation",sidebar_position:2},l="Installation",r={id:"getting-started/installation",title:"Installation",description:"Assuming you've successfully set up your environment, following the guidelines provided on",source:"@site/versioned_docs/version-0.1.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/dynamic-environment-docs/0.1.0/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/Riskified/dynamic-environment-docs/edit/main/versioned_docs/version-0.1.0/getting-started/installation.md",tags:[],version:"0.1.0",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/dynamic-environment-docs/0.1.0/getting-started/requirements"},next:{title:"Running Sample",permalink:"/dynamic-environment-docs/0.1.0/getting-started/running"}},a={},d=[{value:"Deployment via Kustomize",id:"deployment-via-kustomize",level:3},{value:"Deploy via Helm",id:"deploy-via-helm",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Assuming you've successfully set up your environment, following the guidelines provided on\nthe ",(0,t.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/getting-started/requirements",children:"requirements page"}),", you can proceed to generate manifests and deploy the\ncontroller:"]}),"\n",(0,t.jsx)(n.h3,{id:"deployment-via-kustomize",children:"Deployment via Kustomize"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Edit the ",(0,t.jsx)(n.code,{children:"$REPOSITORY_ROOT/config/manager/manager.yaml"})," file and set the ",(0,t.jsx)(n.code,{children:"image"})," field to the\ncurrent version (see below example of defining the image as an environment variable):"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\nspec:\n  # ...\n  template:\n    # ...\n    spec:\n      # ...\n      containers:\n        # ...\n        image: ghcr.io/Riskified/dynamic-environment:TAG\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can further customize the deployment by adjusting the following settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/references/custom-settings#versionlabel-and-defaultversion",children:(0,t.jsx)(n.em,{children:"VersionLabel"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/references/custom-settings#versionlabel-and-defaultversion",children:(0,t.jsx)(n.em,{children:"DefaultVersion"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/references/custom-settings#labels-to-remove-when-creating-overriding-deployments",children:(0,t.jsx)(n.em,{children:"--remove-labels"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These settings can be changed in the ",(0,t.jsx)(n.code,{children:"config/manager/manager.yaml"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\nspec:\n  # ...\n  template:\n    # ...\n    spec:\n      # ...\n      containers:\n        # ...\n        args:\n          - --leader-elect\n          - --version-label\n          - version <-- this should be replaced to change the label\n          - --default-version\n          - shared <-- this should be replaced to change the default version\n        # Uncomment the lines below (and modify as needed) to specify labels to be removed (comma-separated list)\n        #- --remove-labels\n        #- argocd.argoproj.io/instance\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once you have configured everything, deploy the controller using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'make deploy\n# or with image as environment varible\nmake deploy IMG="ghcr.io/Riskified/dynamic-environment:TAG"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-via-helm",children:"Deploy via Helm"}),"\n",(0,t.jsxs)(n.p,{children:["Helm uses a ",(0,t.jsx)(n.code,{children:"values.yaml"})," file (",(0,t.jsx)(n.code,{children:"helm/dynamic-environment/values.yaml"}),") with predefined values\nyou can override. At the very least, ensure you correctly set up the image details:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title=values.yaml",children:"[ ... ]\nimage:\n  repository: ghcr.io/Riskified/dynamic-environment\n  tag: TAG\n  pullPolicy: IfNotPresent\n  [ ... ]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more extensive customization, refer to the comments in the values file and compare them to\nthe ",(0,t.jsx)(n.a,{href:"/dynamic-environment-docs/0.1.0/references/custom-settings",children:"custom settings"})," for in-depth details."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you've finished making your edits, execute the following command (from within the ",(0,t.jsx)(n.code,{children:"helm"}),"\ndirectory):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# you can edit this command to set values or specify alternative settings file\nhelm install dynamic-environment-operator .\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);