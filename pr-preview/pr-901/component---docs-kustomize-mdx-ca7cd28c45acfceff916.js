(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{uQoz:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return r}));var s=t("wx14"),n=t("Ff2n"),m=(t("q1tI"),t("7ljp")),c=t("hhGP");t("qKvR");const l=["components"],p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/kustomize.mdx"}});const i={_frontmatter:p},o=c.a;function r(e){let{components:a}=e,t=Object(n.a)(e,l);return Object(m.b)(o,Object(s.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"kustomize-support"},"Kustomize Support"),Object(m.b)("p",null,Object(m.b)("a",{parentName:"p",href:"https://kustomize.io"},"Kustomize")," provides a solution for customizing Kubernetes\nmanifests in YAML."),Object(m.b)("p",null,"Even though Grafana Tanka uses the ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-901/jsonnet/overview"},"Jsonnet language")," for\nresource definition, you can still consume kustomizations, as described below."),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Warning:")," Keep in mind this feature is considered EXPERIMENTAL")),Object(m.b)("h2",{id:"consuming-a-kustomization-from-jsonnet"},"Consuming a Kustomization from Jsonnet"),Object(m.b)("p",null,"Kustomize support is provided using the\n",Object(m.b)("a",{parentName:"p",href:"https://github.com/grafana/jsonnet-libs/tree/master/tanka-util"},Object(m.b)("inlineCode",{parentName:"a"},"github.com/grafana/jsonnet-libs/tanka-util")),"\nlibrary.  Install it with:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"jb install github.com/grafana/jsonnet-libs/tanka-util")))),Object(m.b)("p",null,"The following example shows how to extract the individual resources of the\n",Object(m.b)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2/tree/main/manifests/bases/source-controller"},Object(m.b)("inlineCode",{parentName:"a"},"flux2/source-controller")),"\nkustomization:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'github.com/grafana/jsonnet-libs/tanka-util/main.libsonnet'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," kustomize "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka.kustomize."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk9"},"std.thisFile"),Object(m.b)("span",{parentName:"span",className:"mtk1"},");")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"source_controller:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," kustomize."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"build"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(path="),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'flux2'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},")")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Kustomize takes a kustomization manifest as input. Go on an create this file\n",Object(m.b)("inlineCode",{parentName:"p"},"flux2/kustomization.yaml")," relative to above jsonnet:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"yaml"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"apiVersion"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"kustomize.config.k8s.io/v1beta1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"kind"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Kustomization")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"resources"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"https://github.com/fluxcd/flux2/archive/v0.4.3.zip//flux2-0.4.3/manifests/bases/source-controller")))),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Important:")," You MUST include the ",Object(m.b)("inlineCode",{parentName:"p"},".new(std.thisFile)")," part in the import.\nThis is what tells Tanka where you actually call ",Object(m.b)("inlineCode",{parentName:"p"},"kustomize.build()")," from, so\nit can find your kustomization manifest.")),Object(m.b)("br",null),Object(m.b)("p",null,"Once invoked, the ",Object(m.b)("inlineCode",{parentName:"p"},"$.source_controller")," key holds the individual resources of\nthe kustomization as a regular Jsonnet object that looks roughly like so:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'custom_resource_definition_buckets.source.toolkit.fluxcd.io'"),Object(m.b)("span",{parentName:"span",className:"mtk12"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'custom_resource_definition_gitrepositories.source.toolkit.fluxcd.io'"),Object(m.b)("span",{parentName:"span",className:"mtk12"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'custom_resource_definition_helmcharts.source.toolkit.fluxcd.io'"),Object(m.b)("span",{parentName:"span",className:"mtk12"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'custom_resource_definition_helmrepositories.source.toolkit.fluxcd.io'"),Object(m.b)("span",{parentName:"span",className:"mtk12"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"deployment_source_controller:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"service_source_controller:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Above can be ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-901/tutorial/environments#patching"},"manipulated")," in the same way as\nany other Jsonnet data."),Object(m.b)("h2",{id:"working-with-kustomize"},"Working with Kustomize"),Object(m.b)("p",null,"Tanka, like Jsonnet, is hermetic. It ",Object(m.b)("strong",{parentName:"p"},"always yields the same resources")," when\nthe project is strictly self-contained."),Object(m.b)("p",null,"Kustomize however has the ability to pull\n",Object(m.b)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/resource/"},"resources"),"\nfrom different sources at runtime, which violates above requirement. This is\nalso apparent in the example above."),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Important:")," Due to the nature of Kustomize, it is not feasible to ensure\nhermetic and reproducible kustomize builds from within Tanka. Beware of that\nwhen using Kustomize.")),Object(m.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(m.b)("h3",{id:"kustomize-executable-missing"},"Kustomize executable missing"),Object(m.b)("p",null,"Kustomize support in Tanka requires the ",Object(m.b)("inlineCode",{parentName:"p"},"kustomize")," binary installed on your\nsystem and available on the ",Object(m.b)("inlineCode",{parentName:"p"},"$PATH"),". If Kustomize is not installed, you will see\nthis error message:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},'evaluating jsonnet: RUNTIME ERROR: Expanding Kustomize: exec: "kustomize": executable file not found in $PATH'))),Object(m.b)("p",null,"To solve this, you need to\n",Object(m.b)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/installation/kustomize/"},"install Kustomize"),".\nIf you cannot install it system-wide, you can point Tanka at your executable\nusing ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-901/env-vars#tanka_kustomize_path"},Object(m.b)("inlineCode",{parentName:"a"},"TANKA_KUSTOMIZE_PATH"))),Object(m.b)("h3",{id:"optscalledfrom-unset"},"opts.calledFrom unset"),Object(m.b)("p",null,"This occurs, when Tanka was not told where it ",Object(m.b)("inlineCode",{parentName:"p"},"kustomize.build()")," was invoked\nfrom. This most likely means you didn't call ",Object(m.b)("inlineCode",{parentName:"p"},"new(std.thisFile)")," when importing ",Object(m.b)("inlineCode",{parentName:"p"},"tanka-util"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"github.com/grafana/jsonnet-libs/tanka-util/main.libsonnet"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka.helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk9"},"std.thisFile"),Object(m.b)("span",{parentName:"span",className:"mtk1"},");")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"                       ↑ This is important")))),Object(m.b)("h3",{id:"failed-to-find-kustomization"},"Failed to find kustomization"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},"helmTemplate: Failed to find a kustomization at 'flux2': No such file or directory."),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},"helmTemplate: Failed to find a kustomization at '/home/user/stuff/tanka/environments/default/flux2': No such file or directory."))),Object(m.b)("p",null,"Tanka failed to locate your kustomization on the filesystem. It looked at the\nrelative path you provided in ",Object(m.b)("inlineCode",{parentName:"p"},"kustomize.build()"),", starting from the directory\nof the file you called ",Object(m.b)("inlineCode",{parentName:"p"},"kustomize.build()")," from."),Object(m.b)("p",null,"Please check there is actually a valid kustomization at this place."),Object(m.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!Object.prototype.hasOwnProperty.call(r,"__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/kustomize.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-kustomize-mdx-ca7cd28c45acfceff916.js.map