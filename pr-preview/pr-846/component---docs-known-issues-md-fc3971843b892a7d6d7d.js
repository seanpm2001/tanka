(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+sT5":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("BIGe"),s=(n("qKvR"),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/known-issues.md"}});var m={_frontmatter:l},c=i.a;function b(e){var t=e.components,n=Object(r.a)(e,s);return Object(o.b)(c,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"known-issues"},"Known Issues"),Object(o.b)("p",null,"Below is a list of common errors and how to address them."),Object(o.b)("h3",{id:"evaluating-jsonnet-runtime-error-undefined-external-variable-__ksonnetcomponents"},"Evaluating jsonnet: RUNTIME ERROR: Undefined external variable: ","_","_","ksonnet/components"),Object(o.b)("p",null,"When migrating from ",Object(o.b)("inlineCode",{parentName:"p"},"ksonnet"),", this error might occur, because Tanka does not\nprovide the global ",Object(o.b)("inlineCode",{parentName:"p"},"__ksonnet")," variable, nor does it strictly have the concept\nof components.\nYou will need to use the plain Jsonnet ",Object(o.b)("inlineCode",{parentName:"p"},"import")," feature instead. Note that this\nrequires your code to be inside of one of the\n",Object(o.b)("a",{parentName:"p",href:"directory-structure/#import-paths"},"import paths"),"."),Object(o.b)("h3",{id:"evaluating-jsonnet-runtime-error-couldnt-open-import-klibsonnet-no-match-locally-or-in-the-jsonnet-library-paths"},'Evaluating jsonnet: RUNTIME ERROR: couldn\'t open import "k.libsonnet": no match locally or in the Jsonnet library paths'),Object(o.b)("p",null,"This error can occur when the ",Object(o.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," kubernetes libraries are missing in the\nimport paths. While ",Object(o.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," used to magically include them, Tanka follows a\nmore explicit approach and requires you to install them using ",Object(o.b)("inlineCode",{parentName:"p"},"jb"),":"),Object(o.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(o.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"$ jb install github.com/jsonnet-libs/k8s-libsonnet/1.21@main")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"$ "),Object(o.b)("span",{parentName:"span",className:"mtk9"},"echo"),Object(o.b)("span",{parentName:"span",className:"mtk1"}," "),Object(o.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(o.b)("span",{parentName:"span",className:"mtk6"},"import 'github.com/jsonnet-libs/k8s-libsonnet/1.21/main.libsonnet'"),Object(o.b)("span",{parentName:"span",className:"mtk5"},'"'),Object(o.b)("span",{parentName:"span",className:"mtk1"}," "),Object(o.b)("span",{parentName:"span",className:"mtk12"},">"),Object(o.b)("span",{parentName:"span",className:"mtk1"}," lib/k.libsonnet")))),Object(o.b)("p",null,"This does 2 things:"),Object(o.b)("p",null,"1) It installs the ",Object(o.b)("inlineCode",{parentName:"p"},"k8s-libsonnet")," library (in ",Object(o.b)("inlineCode",{parentName:"p"},"vendor/github.com/jsonnet-libs/k8s-libsonnet/1.21/"),").\nYou can replace the ",Object(o.b)("inlineCode",{parentName:"p"},"1.21")," matching the Kubernetes version you want to run against."),Object(o.b)("p",null,"2) It makes an alias for libraries importing ",Object(o.b)("inlineCode",{parentName:"p"},"k.libsonnet")," directly. See\n",Object(o.b)("a",{parentName:"p",href:"https://tanka.dev/tutorial/k-lib#aliasing"},"https://tanka.dev/tutorial/k-lib#aliasing")," for the alias rationale."),Object(o.b)("h3",{id:"unexpected-diff-if-the-same-port-number-is-used-for-udp-and-tcp"},"Unexpected diff if the same port number is used for UDP and TCP"),Object(o.b)("p",null,"A\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/39188"},"long-standing bug in ",Object(o.b)("inlineCode",{parentName:"a"},"kubectl")),"\nresults in an incorrect diff output if the same port number is used multiple\ntimes in differently named ports, which commonly happens if a port is specified\nusing both protocols, ",Object(o.b)("inlineCode",{parentName:"p"},"tcp")," and ",Object(o.b)("inlineCode",{parentName:"p"},"udp"),". Nevertheless, ",Object(o.b)("inlineCode",{parentName:"p"},"tk apply")," will still work\ncorrectly."),Object(o.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/known-issues.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-known-issues-md-fc3971843b892a7d6d7d.js.map