(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7Pa4":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("Ff2n"),o=(a("q1tI"),a("7ljp")),i=a("hhGP");a("qKvR");const l=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!Object.prototype.hasOwnProperty.call(s,"__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/libraries/overriding.md"}});const c={_frontmatter:s},m=i.a;function b(e){let{components:t}=e,a=Object(r.a)(e,l);return Object(o.b)(m,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"overriding-vendor"},"Overriding vendor"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"vendor")," directory is immutable in its nature. You can't and should never\nmodify any files inside of it, ",Object(o.b)("inlineCode",{parentName:"p"},"jb")," will revert those changes on the next run anyway."),Object(o.b)("p",null,"Nevertheless, it can sometimes become required to add changes there, e.g. if an\nupstream library contains a bug that needs to be fixed immediately, without\nwaiting for the upstream maintainer to review it."),Object(o.b)("h2",{id:"shadowing"},"Shadowing"),Object(o.b)("p",null,"Because ",Object(o.b)("a",{parentName:"p",href:"/pr-preview/pr-1019/libraries/import-paths"},"import paths")," are ranked in Tanka, you can use\na technique called shadowing: By putting a file with the exact same name in a\nhigher ranked path, Tanka will prefer that file instead of the original in\n",Object(o.b)("inlineCode",{parentName:"p"},"vendor"),", which has the lowest possible rank of 1."),Object(o.b)("p",null,"For example, if ",Object(o.b)("inlineCode",{parentName:"p"},"/vendor/foo/bar.libsonnet")," contained an error, you could create\n",Object(o.b)("inlineCode",{parentName:"p"},"/lib/foo/bar.libsonnet")," and fix it there."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Tip:")," Instead of copying the file to the new location and making the edits,\nuse an absolute import and ",Object(o.b)("a",{parentName:"p",href:"/pr-preview/pr-1019/tutorial/environments#patching"},"patching"),":"),Object(o.b)("pre",{parentName:"blockquote",className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(o.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk3 mtki"},"// in /lib/foo/bar.libsonnet:")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"("),Object(o.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(o.b)("span",{parentName:"span",className:"mtk1"}," "),Object(o.b)("span",{parentName:"span",className:"mtk6"},'"../../vendor/foo/bar.libsonnet"'),Object(o.b)("span",{parentName:"span",className:"mtk1"},") "),Object(o.b)("span",{parentName:"span",className:"mtk12"},"+"),Object(o.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(o.b)("span",{parentName:"span",className:"mtk10"},"foo+:"),Object(o.b)("span",{parentName:"span",className:"mtk1"}," {")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(o.b)("span",{parentName:"span",className:"mtk10"},"bar:"),Object(o.b)("span",{parentName:"span",className:"mtk1"}," "),Object(o.b)("span",{parentName:"span",className:"mtk6"},'"fixed"')),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"  }")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"}"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Important:")," If the file you override is not the one you directly import,\nbut instead imported by another file first, the override will only occur if\nthe placement of the file is alongside your ",Object(o.b)("inlineCode",{parentName:"p"},"main.libsonnet"),".  This is due to\nthe logic behind the Jsonnet importer.  Example:  We import\n",Object(o.b)("inlineCode",{parentName:"p"},"abc/main.libsonnet")," located in ",Object(o.b)("inlineCode",{parentName:"p"},"vendor/abc"),".  Because Jsonnet first looks if\nfiles are locally present before considering the ",Object(o.b)("a",{parentName:"p",href:"/pr-preview/pr-1019/libraries/import-paths"},"import\npaths"),", you need to make sure your override is\nactually picked up. In our example, you'd need to copy the ",Object(o.b)("inlineCode",{parentName:"p"},"main.libsonnet"),"\ninto ",Object(o.b)("inlineCode",{parentName:"p"},"lib/abc")," as well.")),Object(o.b)("h2",{id:"per-environment"},"Per environment"),Object(o.b)("p",null,"Another common case is overriding the entire ",Object(o.b)("inlineCode",{parentName:"p"},"vendor")," bundle per environment."),Object(o.b)("p",null,"This is handy, when you for example want to test a change of an upstream\nlibrary which is used in many environments (including ",Object(o.b)("inlineCode",{parentName:"p"},"prod"),") in a single one,\nwithout affecting all the others."),Object(o.b)("p",null,"For this, Tanka lets you have a separate ",Object(o.b)("inlineCode",{parentName:"p"},"vendor"),", ",Object(o.b)("inlineCode",{parentName:"p"},"jsonnetfile.json")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"jsonnetfile.lock.json")," per environment. To do so:"),Object(o.b)("h4",{id:"create-tkrcyaml"},"Create ",Object(o.b)("inlineCode",{parentName:"h4"},"tkrc.yaml")),Object(o.b)("p",null,"Tanka normally uses the ",Object(o.b)("inlineCode",{parentName:"p"},"jsonnetfile.json")," from your project to find its root.\nAs we are going to create another one of that down the tree in the next step, we\nneed another marker for ",Object(o.b)("inlineCode",{parentName:"p"},"<rootDir>"),"."),Object(o.b)("p",null,"For that, create an empty file called ",Object(o.b)("inlineCode",{parentName:"p"},"tkrc.yaml")," in your project's root,\nalongside the original ",Object(o.b)("inlineCode",{parentName:"p"},"jsonnetfile.json"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Info"),": While the name suggests that ",Object(o.b)("inlineCode",{parentName:"p"},"tkrc.yaml")," could be used for setting\nparameters, this is not the case yet.",Object(o.b)("br",{parentName:"p"}),"\n","It might however be repurposed later, in case we need such functionality")),Object(o.b)("h4",{id:"add-a-vendor-to-your-environment"},"Add a ",Object(o.b)("inlineCode",{parentName:"h4"},"vendor")," to your environment"),Object(o.b)("p",null,"In your environments folder (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"/environments/default"),"):"),Object(o.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(o.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk3 mtki"},"# init jsonnet bundler (creates jsonnetfile.json)")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"$ jb init")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk3 mtki"},"# install the updated dependency")),"\n",Object(o.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(o.b)("span",{parentName:"span",className:"mtk1"},"$ jb install github.com/foo/bar@v2")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Tip"),": You don't need to install everything into the new ",Object(o.b)("inlineCode",{parentName:"p"},"vendor/"),", as\npackages not present there can still be imported from the global ",Object(o.b)("inlineCode",{parentName:"p"},"/vendor"),".")),Object(o.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/libraries/overriding.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-libraries-overriding-md-c3a0e9d43bea5bab713f.js.map