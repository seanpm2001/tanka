const __vite__fileDeps=["_astro/ui-core.DKfyvmld.js","_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js";class w extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",s=>this.closeOnEscape(s))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",w);class S extends HTMLElement{_current=this.querySelector('a[aria-current="true"]');minH=parseInt(this.dataset.minH||"2",10);maxH=parseInt(this.dataset.maxH||"3",10);set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}constructor(){super();const e=[...this.querySelectorAll("a")],s=t=>{if(t instanceof HTMLHeadingElement){if(t.id==="_top")return!0;const l=t.tagName[1];if(l){const n=parseInt(l,10);if(n>=this.minH&&n<=this.maxH)return!0}}return!1},o=t=>{if(!t)return null;const l=t;for(;t;){if(s(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const n=o(t);if(n)return n}return o(l.parentElement)},d=t=>{for(const{isIntersecting:l,target:n}of t){if(!l)continue;const m=o(n);if(!m)continue;const h=e.find(f=>f.hash==="#"+encodeURIComponent(m.id));if(h){this.current=h;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const c=()=>{i&&i.disconnect(),i=new IntersectionObserver(d,{rootMargin:this.getRootMargin()}),a.forEach(t=>i.observe(t))};c();const u=window.requestIdleCallback||(t=>setTimeout(t,1));let g;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(g),g=setTimeout(()=>u(c),200)})}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,s=this.querySelector("summary")?.getBoundingClientRect().height||0,o=e+s+32,d=o+53,a=document.documentElement.clientHeight;return`-${o}px 0% ${d-a}px`}}customElements.define("starlight-toc",S);class L extends S{set current(e){super.current=e;const s=this.querySelector(".display-current");s&&(s.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const s=()=>{e.open=!1};e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",s)}),window.addEventListener("click",o=>{e.contains(o.target)||s()}),window.addEventListener("keydown",o=>{if(o.key==="Escape"&&e.open){const d=e.contains(document.activeElement);if(s(),d){const a=e.querySelector("summary");a&&a.focus()}}})}}customElements.define("mobile-starlight-toc",L);const T="modulepreload",k=function(r){return"/"+r},E={},x=function(e,s,o){let d=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");d=Promise.all(s.map(c=>{if(c=k(c),c in E)return;E[c]=!0;const u=c.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const t=document.createElement("link");if(t.rel=u?"stylesheet":T,u||(t.as="script",t.crossOrigin=""),t.href=c,i&&t.setAttribute("nonce",i),document.head.appendChild(t),u)return new Promise((l,n)=>{t.addEventListener("load",l),t.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${c}`)))})}))}return d.then(()=>e()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})};class C extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),s=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),d=this.querySelector(".dialog-frame"),a=n=>{("href"in(n.target||{})||document.body.contains(n.target)&&!d.contains(n.target))&&c()},i=n=>{o.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),n?.stopPropagation(),window.addEventListener("click",a)},c=()=>o.close();e.addEventListener("click",i),e.disabled=!1,s.addEventListener("click",c),o.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",n=>{const m=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(n.metaKey===!0||n.ctrlKey===!0)&&n.key==="k"?(o.open?c():i(),n.preventDefault()):n.key==="/"&&!o.open&&!m&&(i(),n.preventDefault())});let u={};try{u=JSON.parse(this.dataset.translations||"{}")}catch{}const l=this.dataset.stripTrailingSlash!==void 0?n=>n.replace(/(.)\/(#.*)?$/,"$1$2"):n=>n;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(m=>setTimeout(m,1)))(async()=>{const{PagefindUI:m}=await x(async()=>{const{PagefindUI:h}=await import("./ui-core.DKfyvmld.js");return{PagefindUI:h}},__vite__mapDeps([0,1]));new m({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:u,showSubResults:!0,processResult:h=>{h.url=l(h.url),h.sub_results=h.sub_results.map(f=>(f.url=l(f.url),f))}})})})}}customElements.define("site-search",C);class q extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=s.currentTarget.value)})}}customElements.define("starlight-lang-select",q);const y="starlight-theme",v=r=>r==="auto"||r==="dark"||r==="light"?r:"auto",b=()=>v(typeof localStorage<"u"&&localStorage.getItem(y));function H(r){typeof localStorage<"u"&&localStorage.setItem(y,r==="light"||r==="dark"?r:"")}const M=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(r){StarlightThemeProvider.updatePickers(r),document.documentElement.dataset.theme=r==="auto"?M():r,H(r)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{b()==="auto"&&p("auto")});class I extends HTMLElement{constructor(){super(),p(b()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(v(e.currentTarget.value))})}}customElements.define("starlight-theme-select",I);export{x as _};
