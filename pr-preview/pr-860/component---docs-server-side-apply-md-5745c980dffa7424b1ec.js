(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"BC+V":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t("wx14"),r=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("BIGe"),o=(t("qKvR"),["components"]),s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!Object.prototype.hasOwnProperty.call(s,"__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/server-side-apply.md"}});var c={_frontmatter:s},m=l.a;function p(e){var a=e.components,t=Object(r.a)(e,o);return Object(i.b)(m,Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"server-side-apply"},"Server-Side Apply"),Object(i.b)("p",null,"Tanka supports\n",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/server-side-apply/"},"server-side apply"),",\nwhich requires at least Kubernetes 1.16+, and was promoted to stable status in 1.22."),Object(i.b)("p",null,"To enable server-side diff in tanka, add the following field to ",Object(i.b)("inlineCode",{parentName:"p"},"spec.json"),":"),Object(i.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"diff"},Object(i.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},'  "spec": {')),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk5"},"+"),Object(i.b)("span",{parentName:"span",className:"mtk6"},'    "applyStrategy": "server",')),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"  }")),"\n",Object(i.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(i.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(i.b)("p",null,"This also has the effect of changing the default ",Object(i.b)("a",{parentName:"p",href:"/pr-preview/pr-860/diff-strategy"},"diff strategy"),"\nto ",Object(i.b)("inlineCode",{parentName:"p"},"server"),", but this can be overridden via command line flags or ",Object(i.b)("inlineCode",{parentName:"p"},"spec.json"),"."),Object(i.b)("p",null,"While server-side apply doesn't have any effect on the resources being applied\nand is intended to be a general in-place upgrade to client-side apply, there are\ndifferences in how fields are managed that can make converting existing cluster\nresources a non-trival change."),Object(i.b)("p",null,"Identifying and fixing these changes are beyond the scope of this guide, but\nmany can be found before an apply by using the ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," or ",Object(i.b)("inlineCode",{parentName:"p"},"server"),"\n",Object(i.b)("a",{parentName:"p",href:"/pr-preview/pr-860/diff-strategy"},"diff strategy"),"."),Object(i.b)("h2",{id:"field-conflicts"},"Field conflicts"),Object(i.b)("p",null,"As part of the changes, you may encounter error messages which\nrecommend the use of the ",Object(i.b)("inlineCode",{parentName:"p"},"--force-conflicts")," flag. Using ",Object(i.b)("inlineCode",{parentName:"p"},"tk apply --force"),"\nin server-side mode will enable that flag for kubectl instead of\n",Object(i.b)("inlineCode",{parentName:"p"},"kubectl --force"),", which no longer has any effect in server-side mode."),Object(i.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/server-side-apply.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-server-side-apply-md-5745c980dffa7424b1ec.js.map