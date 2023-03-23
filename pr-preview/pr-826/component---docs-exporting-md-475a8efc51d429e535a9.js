(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AXtd:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return m})),t.d(a,"default",(function(){return p}));var n=t("wx14"),s=t("zLVn"),l=(t("q1tI"),t("7ljp")),r=t("BIGe"),i=(t("qKvR"),["components"]),m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/exporting.md"}});var c={_frontmatter:m},o=r.a;function p(e){var a=e.components,t=Object(s.a)(e,i);return Object(l.b)(o,Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"exporting-as-yaml"},"Exporting as YAML"),Object(l.b)("p",null,"Tanka provides you with a day-to-day workflow for working with Kubernetes clusters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tk show")," for quickly checking the YAML representation looks good"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tk diff")," to ensure your changes will behave like they should"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tk apply")," makes it happen")),Object(l.b)("p",null,"However sometimes it can be required to integrate with other tooling that does\nonly support ",Object(l.b)("inlineCode",{parentName:"p"},".yaml")," files."),Object(l.b)("p",null,"For that case, ",Object(l.b)("inlineCode",{parentName:"p"},"tk export")," can be used:"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk3 mtki"},"#           <outputDir> <environment>")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(l.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(l.b)("span",{parentName:"span",className:"mtk1"}," promtail/   environments/promtail")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," The arguments flipped in v0.14.0, the ",Object(l.b)("inlineCode",{parentName:"p"},"<outputDir>")," comes first now.")),Object(l.b)("p",null,"This will create a separate ",Object(l.b)("inlineCode",{parentName:"p"},".yaml")," file for each Kubernetes resource included in your Jsonnet."),Object(l.b)("h2",{id:"filenames"},"Filenames"),Object(l.b)("p",null,"Tanka by default uses the following pattern:"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk5"},"${"),Object(l.b)("span",{parentName:"span",className:"mtk8"},"apiVersion"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"}"),Object(l.b)("span",{parentName:"span",className:"mtk1"},"."),Object(l.b)("span",{parentName:"span",className:"mtk5"},"${"),Object(l.b)("span",{parentName:"span",className:"mtk8"},"kind"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"}"),Object(l.b)("span",{parentName:"span",className:"mtk1"},"-"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"${"),Object(l.b)("span",{parentName:"span",className:"mtk8"},"metadata.name"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"}"),Object(l.b)("span",{parentName:"span",className:"mtk1"},".yaml")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk3 mtki"},"# examples:")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"apps-v1.Deployment-distributor.yaml")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"v1.ConfigMap-loki.yaml")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"v1.Service-ingester.yaml")))),Object(l.b)("p",null,"If that does not fit your need, you can provide your own pattern using the ",Object(l.b)("inlineCode",{parentName:"p"},"--format")," flag:"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"tk "),Object(l.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(l.b)("span",{parentName:"span",className:"mtk1"}," promtail environments/promtail --format="),Object(l.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(l.b)("span",{parentName:"span",className:"mtk6"},"{{.metadata.labels.app}}-{{.metadata.name}}-{{.kind}}"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"'")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The syntax is Go ",Object(l.b)("inlineCode",{parentName:"p"},"text/template"),". See ",Object(l.b)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"https://pkg.go.dev/text/template"),"\nfor reference.")),Object(l.b)("p",null,"This would include the label named ",Object(l.b)("inlineCode",{parentName:"p"},"app"),", the ",Object(l.b)("inlineCode",{parentName:"p"},"name")," and ",Object(l.b)("inlineCode",{parentName:"p"},"kind")," of the resource:"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-distributor-Deployment"),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-loki-ConfigMap"),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-ingester-Service"))),Object(l.b)("p",null,"You can optionally use the template function ",Object(l.b)("inlineCode",{parentName:"p"},"lower")," for lower-casing fields, e.g. in the above example"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"... --format="),Object(l.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(l.b)("span",{parentName:"span",className:"mtk6"},"{{.metadata.labels.app}}-{{.metadata.name}}-{{.kind | lower}}"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"'")))),Object(l.b)("p",null,"would yield"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},"loki-distributor-deployment"))),Object(l.b)("p",null,"etc."),Object(l.b)("p",null,"You can also use a different file extension by providing ",Object(l.b)("inlineCode",{parentName:"p"},"--extension='yml'"),", for example."),Object(l.b)("h2",{id:"multiple-environments"},"Multiple environments"),Object(l.b)("p",null,"Tanka can also export multiple inline environments, as showcased in ",Object(l.b)("a",{parentName:"p",href:"/pr-preview/pr-826/inline-environments#use-case-consistent-inline-environments"},"Use case: consistent inline\nenvironments"),". This follows the same\nprinciples as describe before with the addition that you can also refer to Environment specific data through the ",Object(l.b)("inlineCode",{parentName:"p"},"env"),"\nkeyword."),Object(l.b)("p",null,"For example an export might refer to data from the Environment spec:"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Format based on environment {{env.<...>}}")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(l.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(l.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/dev/ \\")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"  --format "),Object(l.b)("span",{parentName:"span",className:"mtk5"},"'"),Object(l.b)("span",{parentName:"span",className:"mtk6"},"{{env.metadata.labels.cluster}}/{{env.spec.namespace}}//{{.kind}}-{{.metadata.name}}"),Object(l.b)("span",{parentName:"span",className:"mtk5"},"'")))),Object(l.b)("p",null,"Even more advanced use cases allow you to export multiple environments in a single execution:"),Object(l.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(l.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Export multiple environments")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(l.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(l.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/dev/ environments/qa/")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Recursive export")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(l.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(l.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/ --recursive")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Recursive export with labelSelector")),"\n",Object(l.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(l.b)("span",{parentName:"span",className:"mtk1"},"$ tk "),Object(l.b)("span",{parentName:"span",className:"mtk12"},"export"),Object(l.b)("span",{parentName:"span",className:"mtk1"}," exportDir environments/ -r -l team=infra")))),Object(l.b)("h2",{id:"performance-features"},"Performance features"),Object(l.b)("p",null,"When exporting a large amount of environments, jsonnet evaluation can become a bottleneck. To speed up the process, Tanka provides a few optional features."),Object(l.b)("h3",{id:"partial-export-in-a-gitops-context"},"Partial export (in a GitOps context)"),Object(l.b)("p",null,"Given multiple environments, one may want to only export the environments that were modified since the last export. This is enabled by passing both the ",Object(l.b)("inlineCode",{parentName:"p"},"--merge-strategy=replace-envs")," flags."),Object(l.b)("p",null,"When these flags are passed, Tanka will:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Delete the manifests that were previously exported by the environments that are being exported. This is done by looking at the ",Object(l.b)("inlineCode",{parentName:"li"},"manifest.json")," file that is generated by Tanka when exporting. The related entries are also removed from the ",Object(l.b)("inlineCode",{parentName:"li"},"manifest.json")," file."),Object(l.b)("li",{parentName:"ol"},"Generate the manifests for the targeted environments into the output directory."),Object(l.b)("li",{parentName:"ol"},"Add in the new manifests entries into the ",Object(l.b)("inlineCode",{parentName:"li"},"manifest.json")," file and re-export it.")),Object(l.b)("h3",{id:"using-a-memory-ballast"},"Using a memory ballast"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Read ",Object(l.b)("a",{parentName:"em",href:"https://blog.twitch.tv/en/2019/04/10/go-memory-ballast-how-i-learnt-to-stop-worrying-and-love-the-heap/"},"this blog post")," for more information about memory ballasts.")),Object(l.b)("p",null,"For large environments that load lots of data into memory on evaluation, a memory ballast can dramatically improve performance. This feature is exposed through the ",Object(l.b)("inlineCode",{parentName:"p"},"--mem-ballast-size-bytes")," flag on the export command."),Object(l.b)("p",null,"Anecdotally (Grafana Labs), environments that took around a minute to load were able to load in around 45 secs with a ballast of 5GB (",Object(l.b)("inlineCode",{parentName:"p"},"--mem-ballast-size-bytes=5368709120"),"). Decreasing the ballast size resulted in negative impact on performance, and increasing it more did not result in any noticeable impact."),Object(l.b)("h3",{id:"caching"},"Caching"),Object(l.b)("p",null,"Tanka can also cache the results of the export. This is useful if you often export the same files and want to avoid recomputing them. The cache key is calculated from the main file and all of its transitive imports, so any change to any file possibly used in an environment will invalidate the cache."),Object(l.b)("p",null,"This is configured by two flags:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--cache-path"),": The local filesystem path where the cache will be stored. The cache is a flat directory of json files (one per environment)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--cache-envs"),": If exporting multiple environments, this flag can be used to specify, with regexes, which environments to cache. If not specified, all environments are cached.")),Object(l.b)("p",null,"Notes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Using the cache might be slower than evaluating jsonnet directy. It is only recommended for environments that are very CPU intensive to evaluate."),Object(l.b)("li",{parentName:"ul"},"To use object storage, you can point the ",Object(l.b)("inlineCode",{parentName:"li"},"--cache-path")," to a FUSE mount, such as ",Object(l.b)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse"},Object(l.b)("inlineCode",{parentName:"a"},"s3fs")))),Object(l.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/exporting.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-exporting-md-475a8efc51d429e535a9.js.map