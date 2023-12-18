(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"3kBX":function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return l})),n.d(a,"default",(function(){return N}));var t=n("wx14"),s=n("Ff2n"),m=(n("q1tI"),n("7ljp")),p=n("hhGP"),c=n("Z+0r");n("qKvR");const b=["components"],l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/tutorial/k-lib.mdx"}});const r={_frontmatter:l},i=p.a;function N(e){let{components:a}=e,n=Object(s.a)(e,b);return Object(m.b)(i,Object(t.a)({},r,n,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"kubernetes-library"},"Kubernetes library"),Object(m.b)("p",null,"The last section has shown that using a library for creating Kubernetes objects\ncan drastically simplify the code you need to write. However, there is a huge\namount of different kinds of objects and the Kubernetes API is evolving (and\nthus changing) quite rapidly."),Object(m.b)("p",null,"Writing and maintaining such a library could be a full-time job on it's own.\nLuckily, it is possible to generate such a library from the Kubernetes OpenAPI\nspecification! Even better, it has already been done for you."),Object(m.b)("h2",{id:"k8s-libsonnet"},"k8s-libsonnet"),Object(m.b)("p",null,"The library is called ",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," (replacing the discontinued ",Object(m.b)("inlineCode",{parentName:"p"},"ksonnet-lib"),"),\ncurrently available at ",Object(m.b)("a",{parentName:"p",href:"https://github.com/jsonnet-libs/k8s-libsonnet"},"https://github.com/jsonnet-libs/k8s-libsonnet"),"."),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Note"),": The ",Object(m.b)("inlineCode",{parentName:"p"},"ksonnet")," project has been abandoned, the library is not maintained\nanymore. However, the community backed by Grafana Labs has picked up on this with\nthe ",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," library.")),Object(m.b)("p",null,"As ",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," has broken compatibility in a few places with ",Object(m.b)("inlineCode",{parentName:"p"},"ksonnet-lib")," (for good\nreason), we have instrumented the widely used ",Object(m.b)("inlineCode",{parentName:"p"},"ksonnet-util")," library with a\ncompatibility layer to improve the developer and user experience:\n",Object(m.b)("a",{parentName:"p",href:"https://github.com/grafana/jsonnet-libs/tree/master/ksonnet-util"},"https://github.com/grafana/jsonnet-libs/tree/master/ksonnet-util")),Object(m.b)("p",null,"If you do not have any strong reasons against it, just adopt the wrapper as\nwell, it will ease your work. Many of the original ",Object(m.b)("inlineCode",{parentName:"p"},"ksonnet-util")," enhancements\nhave already made their way into ",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet"),"."),Object(m.b)("p",null,"The docs for ",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," library can be found here:\n",Object(m.b)("a",{parentName:"p",href:"https://jsonnet-libs.github.io/k8s-libsonnet/"},"https://jsonnet-libs.github.io/k8s-libsonnet/")),Object(m.b)("h2",{id:"installation"},"Installation"),Object(m.b)("p",null,"Like every other external library, ",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," can be installed using\n",Object(m.b)("inlineCode",{parentName:"p"},"jsonnet-bundler"),".\nHowever, Tanka already ",Object(m.b)("strong",{parentName:"p"},"did this for you")," during ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-978/tutorial/jsonnet#creating-a-new-project"},"project\ncreation (",Object(m.b)("inlineCode",{parentName:"a"},"tk init"),")"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ tk init")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  └─ jb install github.com/jsonnet-libs/k8s-libsonnet/1.21@main github.com/grafana/jsonnet-libs/ksonnet-util")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})))),Object(m.b)("p",null,"This created the following structure in ",Object(m.b)("inlineCode",{parentName:"p"},"/vendor"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"vendor")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"├── github.com")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│   ├── grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│   │   └── jsonnet-libs")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│   │       └── ksonnet-util")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│   │           ├── ...")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│   │           └── kausal.libsonnet "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Grafana's wrapper")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│   └── jsonnet-libs")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│       └── k8s-libsonnet")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│           └── 1.21")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│               ├── ...")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"│               └── main.libsonnet   "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# k8s-libsonnet entrypoint")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"├── 1.21 -"),Object(m.b)("span",{parentName:"span",className:"mtk12"},">"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," github.com/jsonnet-libs/k8s-libsonnet/1.21")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"└── ksonnet-util -"),Object(m.b)("span",{parentName:"span",className:"mtk12"},">"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," github.com/grafana/jsonnet-libs/ksonnet-util")))),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Info"),": The ",Object(m.b)("inlineCode",{parentName:"p"},"vendor/")," is the location for external libraries, while ",Object(m.b)("inlineCode",{parentName:"p"},"lib/"),"\ncan be used for your own ones. Check ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-978/libraries/import-paths"},"import paths"),"\nfor more information.")),Object(m.b)("h4",{id:"aliasing"},"Aliasing"),Object(m.b)("p",null,"Because of how ",Object(m.b)("inlineCode",{parentName:"p"},"jb")," works, the library can be imported as\n",Object(m.b)("inlineCode",{parentName:"p"},"github.com/jsonnet-libs/k8s-libsonnet/1.21/main.libsonnet"),".  Most external\nlibraries (including our wrapper) expect it as a simple ",Object(m.b)("inlineCode",{parentName:"p"},"k.libsonnet")," (without\nthe package prefix)."),Object(m.b)("p",null,"To support both, Tanka automatically created an alias file for you:\n",Object(m.b)("inlineCode",{parentName:"p"},"/lib/k.libsonnet")," that just imports the actual library, exposing it under this\nalternative name as well."),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"More information"),":\nThis works, because ",Object(m.b)("inlineCode",{parentName:"p"},"import")," behaves like copy-pasting. So the contents of\n",Object(m.b)("inlineCode",{parentName:"p"},"k8s-libsonnet/1.21"),' are "copied" into our new file, making them behave exactly the\nsame.')),Object(m.b)("h2",{id:"using-it"},"Using it"),Object(m.b)("p",null,"First we need to import it in ",Object(m.b)("inlineCode",{parentName:"p"},"main.jsonnet"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"diff"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk10"},' local k = import "kubernetes.libsonnet";')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk6"},' local k = import "github.com/grafana/jsonnet-libs/ksonnet-util/kausal.libsonnet";')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},'  local grafana = import "grafana.jsonnet";')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},'  local prometheus = import "prometheus.jsonnet";')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  { /* ... */ }")))),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Note"),": ",Object(m.b)("inlineCode",{parentName:"p"},"ksonnet-util")," imports literal ",Object(m.b)("inlineCode",{parentName:"p"},"k.libsonnet"),", so ",Object(m.b)("a",{parentName:"p",href:"#aliasing"},"aliasing")," is\na must here. This works, because ",Object(m.b)("inlineCode",{parentName:"p"},"/lib")," and ",Object(m.b)("inlineCode",{parentName:"p"},"/vendor")," are automatically searched\nfor libraries, and ",Object(m.b)("inlineCode",{parentName:"p"},"k.libsonnet")," can be found in ",Object(m.b)("inlineCode",{parentName:"p"},"/lib")," due to aforementioned\naliasing.")),Object(m.b)("p",null,"Now that we have installed the correct version, let's use it in\n",Object(m.b)("inlineCode",{parentName:"p"},"/environments/default/grafana.jsonnet")," instead of our own helper:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"github.com/grafana/jsonnet-libs/ksonnet-util/kausal.libsonnet"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// use locals to extract the parts we need")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," deploy "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.apps.v1.deployment,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," container "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.core.v1.container,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," port "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.core.v1.containerPort,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," service "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.core.v1.service,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// defining the objects:")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// deployment constructor: name, replicas, containers")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"deployment:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," deploy."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(name=$._config.grafana.name, replicas="),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", containers=[")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// container constructor")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      container."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"($._config.grafana.name, "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"grafana/grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},")")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      + container."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"withPorts"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"( "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// add ports to the container")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"          [port."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"ui"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", $._config.grafana.port)] "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// port constructor")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        ),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    ]),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// instead of using a service constructor, our wrapper provides")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// a handy helper to automatically generate a service for a Deployment")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"service:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.util.serv.util."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"serviceFor"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(self.deployment)")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"             "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," service.mixin.spec."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"withType"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"NodePort"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("h2",{id:"full-example"},"Full example"),Object(m.b)("p",null,"Now that creating the individual objects does not take more than 5 lines, we can\nmerge it all back into a single file (",Object(m.b)("inlineCode",{parentName:"p"},"main.jsonnet"),") and take a look at the\nwhole picture:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"github.com/grafana/jsonnet-libs/ksonnet-util/kausal.libsonnet"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk7"},"_config::"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"port:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"3000"),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"name:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"prometheus:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"port:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"9090"),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"name:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"prometheus"')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," deployment "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.apps.v1.deployment,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," container "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.core.v1.container,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," port "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.core.v1.containerPort,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," service "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.core.v1.service,")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"prometheus:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"deployment:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," deployment."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      name=$._config.prometheus.name, replicas="),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1"),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      containers=[")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        container."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"($._config.prometheus.name, "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"prom/prometheus"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},")")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        + container."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"withPorts"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"([port."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"api"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", $._config.prometheus.port)]),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      ],")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    ),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"service:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," k.util."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"serviceFor"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(self.deployment),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"deployment:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," deployment."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      name=$._config.grafana.name, replicas="),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1"),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      containers=[")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        container."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"($._config.grafana.name, "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"grafana/grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},")")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        + container."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"withPorts"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"([port."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"ui"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", $._config.grafana.port)]),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      ],")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    ),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"service:")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      k.util."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"serviceFor"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"(self.deployment)")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," service.mixin.spec."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"withType"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"NodePort"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},"),")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"That's a pretty big improvement, considering how verbose and error-prone it was\nbefore!"),Object(m.b)(c.a,{prev:"/tutorial/abstraction",next:"/tutorial/environments",mdxType:"TutorialButtons"}),Object(m.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==N&&N&&N===Object(N)&&Object.isExtensible(N)&&!Object.prototype.hasOwnProperty.call(N,"__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/tutorial/k-lib.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-tutorial-k-lib-mdx-a9017ee9e2bfb8aea76c.js.map