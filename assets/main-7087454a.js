import{d as y,r as M,o as x,c as w,a,t as f,b as W,e as h,f as c,F as B,g as q,p as U,h as F,w as b,R as A,u as G,i as K,j as H,k as Z,v as J,l as Q,m as X,n as Y,q as ee,s as te,x as ae,G as re,y as oe,z as ne,A as se,B as le,C as ie,D as de,E as ce,H as ge,S as ue,I as he,J as pe,N as V,K as me,L as ve}from"../3487a06c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const xe="modulepreload",be=function(e){return"/vite-app-demo/"+e},I={},v=function(t,s,l){if(!s||s.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=be(r),r in I)return;I[r]=!0;const n=r.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!l)for(let u=o.length-1;u>=0;u--){const g=o[u];if(g.href===r&&(!n||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":xe,n||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),n)return new Promise((u,g)=>{i.addEventListener("load",u),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};function we(e={}){const{immediate:t=!1,onNeedRefresh:s,onOfflineReady:l,onRegistered:o,onRegisteredSW:r,onRegisterError:n}=e;let d,p;const i=async(g=!0)=>{await p};async function u(){if("serviceWorker"in navigator){const{Workbox:g}=await v(()=>import("../a7b12eab.js"),[]);d=new g("/vite-app-demo/sw.js",{scope:"/vite-app-demo/",type:"classic"}),d.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),d.addEventListener("installed",m=>{m.isUpdate||l?.()}),d.register({immediate:t}).then(m=>{r?r("/vite-app-demo/sw.js",m):o?.(m)}).catch(m=>{n?.(m)})}}return p=u(),i}const C={"en-US":{lang:e=>{const{normalize:t}=e;return t(["English"])},message:{Home:e=>{const{normalize:t}=e;return t(["Home"])},About:e=>{const{normalize:t}=e;return t(["About"])}}},"zh-TW":{lang:e=>{const{normalize:t}=e;return t(["繁體中文"])},message:{Home:e=>{const{normalize:t}=e;return t(["首頁"])},About:e=>{const{normalize:t}=e;return t(["關於"])}}}},ye={class:"counter"},fe=y({__name:"EventCounter",props:{init:{}},setup(e){const s=M(e.init||0);return(l,o)=>(x(),w("div",ye,[a("div",null,"Counter: "+f(s.value),1),a("button",{type:"button",onClick:o[0]||(o[0]=r=>s.value+=1)},"Inc"),a("button",{type:"button",onClick:o[1]||(o[1]=r=>s.value-=1)},"Dec")]))}});const _=(e,t)=>{const s=e.__vccOpts||e;for(const[l,o]of t)s[l]=o;return s},E=_(fe,[["__scopeId","data-v-4f199a07"]]),L=[{path:"/vite-app-demo",children:[{path:"AboutPage",name:"/vite-app-demo/AboutPage",component:()=>v(()=>import("../feed2dc8.js"),["feed2dc8.js","3487a06c.js","assets/HomePage-e3b0c442.css"])},{path:"HomePage",name:"/vite-app-demo/HomePage",component:()=>v(()=>import("../a23a2bfc.js"),["a23a2bfc.js","3487a06c.js","assets/HomePage-e3b0c442.css"])}]}];function _e(e){const{extendRoutes:t}=e;return W(Object.assign(e,{routes:typeof t=="function"?t(L):L}))}const ke={LayoutIndex:()=>v(()=>Promise.resolve().then(()=>yt),void 0),"Content/ContentIndex":()=>v(()=>Promise.resolve().then(()=>pt),void 0),"Header/HeaderIndex":()=>v(()=>import("../00f7b0ce.js"),["00f7b0ce.js","3487a06c.js"]),"Menu/MenuIndex":()=>v(()=>Promise.resolve().then(()=>De),void 0)};function ze(e){return e.map(t=>({path:t.path,meta:t.meta,component:ke[t.meta?.layout||"LayoutIndex"],children:t.path==="/"?[t]:[{...t,path:""}]}))}const Me=()=>v(()=>import("../a23a2bfc.js"),["a23a2bfc.js","3487a06c.js","assets/HomePage-e3b0c442.css"]),Ce=()=>v(()=>import("../feed2dc8.js"),["feed2dc8.js","3487a06c.js","assets/HomePage-e3b0c442.css"]),Ee=[{name:"HomePage",path:"/HomePage",component:Me,props:!0},{name:"AboutPage",path:"/AboutPage",component:Ce,props:!0}],Ie={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Le=a("path",{fill:"currentColor",d:"M26 4.01H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2Zm0 2v4H6v-4Zm-20 20v-14h20v14Z"},null,-1),Be=a("path",{fill:"currentColor",d:"m10.76 16.18l2.82 2.83l-2.82 2.83l1.41 1.41l4.24-4.24l-4.24-4.24l-1.41 1.41z"},null,-1),Ae=[Le,Be];function He(e,t){return x(),w("svg",Ie,Ae)}const Ve={name:"carbon-terminal",render:He},k=e=>(U("data-v-1476aa7e"),e=e(),F(),e),Pe={class:"menu xs:invisible xs:w-0 xs:hidden w-fit"},Se=k(()=>a("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),$e=k(()=>a("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),Oe=k(()=>a("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),Re=k(()=>a("br",null,null,-1)),Te=["href","onClick"],je=y({__name:"MenuIndex",setup(e){let t=window.matchMedia("(max-width: 932px)");function s(){document.getElementById("check")?.getAttribute("checked")==="null"?(document.getElementsByClassName("menu")[0].style.width="10rem",document.getElementById("check")?.setAttribute("checked","true")):document.getElementById("check")?.getAttribute("checked")==="true"?(document.getElementsByClassName("menu")[0].style.width="fit-content",document.getElementById("check")?.setAttribute("checked","fit")):(document.getElementsByClassName("menu")[0].style.width="10rem",document.getElementById("check")?.setAttribute("checked","true"))}t.onchange=o=>{o.matches?document.getElementsByClassName("menu")[0].style.width="0rem":document.getElementById("check")?.getAttribute("checked")==="true"?(document.getElementById("check")?.click(),document.getElementsByClassName("menu")[0].style.width="fit-content",document.getElementById("check")?.setAttribute("checked","fit")):document.getElementsByClassName("menu")[0].style.width="fit-content"};const l=[{id:1,name:C?.Home,url:"/vite-app-demo/HomePage"},{id:2,name:C?.About,url:"/vite-app-demo/AboutPage"}];return(o,r)=>{const n=Ve,d=A;return x(),w("div",Pe,[a("div",{class:"menu-bar"},[h(" Menu "),a("label",{for:"check"},[a("input",{id:"check",type:"checkbox",onClick:s}),Se,$e,Oe])]),Re,c(n),a("ul",null,[(x(),w(B,null,q(l,p=>a("li",{key:p.id},[c(d,{to:p.url},{default:b(({href:i,route:u,navigate:g})=>[a("a",{href:i,onClick:g},[a("span",null,f(o.$t("message."+u.fullPath.slice(15,-4))),1)],8,Te)]),_:2},1032,["to"])])),64))])])}}});const P=_(je,[["__scopeId","data-v-1476aa7e"]]),De=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),Ne={class:"dark:text-white"},We={class:"border-b"},qe={class:"px-1 py-2.5"},Ue={class:"flex flex-row"},Fe=a("div",{class:"xs:hidden flex-1"},null,-1),Ge=a("option",{value:"zh-TW"},"繁體中文",-1),Ke=a("option",{value:"en-US"},"English",-1),Ze=[Ge,Ke],Je=a("svg",{id:"theme-toggle-dark-icon",class:"hidden h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),Qe=a("svg",{id:"theme-toggle-light-icon",class:"hidden h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"})],-1),Xe=[Je,Qe],Ye=Q('<br><div class="inline-block text-center"><button id="drawer-button" class="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"> Show navigation </button></div><div id="drawer-navigation" class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label"><h5 id="drawer-navigation-label" class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"> Menu </h5><button id="drawer-hide-button" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><div class="overflow-y-auto py-4"><ul class="space-y-2"><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg><span class="ml-3">Dashboard</span></a></li><li><button type="button" class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap text-left">E-commerce</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><ul id="dropdown-example" class="hidden space-y-2 py-2"><li><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a></li><li><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a></li><li><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a></li></ul></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Kanban</span><span class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Inbox</span><span class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">3</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Users</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Products</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Sign In</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span></a></li></ul></div></div><div class="xs:invisible xs:w-0 xs:hidden inline text-center"><button class="mb-2 mr-2 overflow-y-auto rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example"> Show top drawer </button></div><div id="drawer-top-example" class="fixed inset-x-0 top-0 z-40 w-full -translate-y-full bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-top-label"><h5 id="drawer-top-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> Top drawer </h5><button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><p class="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400"> Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline hover:no-underline dark:text-blue-500">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. </p><a href="#" class="mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Learn more</a><a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get access <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div><div class="xs:invisible xs:w-0 xs:hidden inline text-center"><button class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example"> Show right drawer </button></div><div id="drawer-right-example" class="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label"><h5 id="drawer-right-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> Right drawer </h5><button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><p class="mb-6 text-sm text-gray-500 dark:text-gray-400"> Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline hover:no-underline dark:text-blue-500">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. </p><div class="grid grid-cols-2 gap-4"><a href="#" class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Learn more</a><a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get access <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div><div class="inline text-center"><button class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="bottom" data-drawer-edge="true" data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe"> Show swipeable drawer </button></div><div id="drawer-swipe" class="fixed inset-x-0 bottom-[60px] z-40 w-full translate-y-full overflow-y-auto rounded-t-lg border-t border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-swipe-label"><div class="cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe"><span class="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-lg bg-gray-300 dark:bg-gray-600"></span><h5 id="drawer-swipe-label" class="inline-flex items-center text-base text-gray-500 dark:text-gray-400"><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg> Add widget </h5></div><div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4"><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Chart </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Table </div></div><div class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path></svg></div><div class="hidden text-center font-medium text-gray-500 dark:text-gray-400"> Ticket </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> List </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Price </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Users </div></div><div class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Task </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Custom </div></div></div></div>',9),et="red",tt=!1,at=y({__name:"HeaderIndex",setup(e){const t=r=>{O.global.locale.value=r.target.value};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.getElementById("theme-toggle-light-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-dark-icon")?.classList.add("hidden")):(document.getElementById("theme-toggle-dark-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-light-icon")?.classList.add("hidden"))});const s=()=>{document.documentElement.classList.contains("dark")?(document.getElementById("theme-toggle-dark-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-light-icon")?.classList.add("hidden"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.documentElement.style.background="linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/vite-app-demo/lightbg.jpg') no-repeat center center",document.documentElement.style.backgroundSize="cover"):(document.getElementById("theme-toggle-light-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-dark-icon")?.classList.add("hidden"),document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.documentElement.style.background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/vite-app-demo/darkbg.jpg') no-repeat center center",document.documentElement.style.backgroundSize="cover")},{coords:l}=G({enableHighAccuracy:!0}),o=M();return K(()=>{setTimeout(()=>{const r=M(!0);function n(){return new Date().getHours().toString()}function d({url:u,params:g}){const m=Object.keys(g).map(z=>`${z}=${g[z]}`).join("&"),D=`${u}?${m}`,{data:N}=X(D,{refetch:r}).get();o.value=Y(()=>{try{return JSON.parse(N.value).hourly.us_aqi[n()]}catch{return null}})}let p,i;i=n(),p=i,setInterval(()=>{i=n(),p!=i&&(p=i,d({url:"https://air-quality-api.open-meteo.com/v1/air-quality",params:{latitude:l.value.latitude,longitude:l.value.longitude,hourly:"us_aqi",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}}))},1e3),d({url:"https://air-quality-api.open-meteo.com/v1/air-quality",params:{latitude:l.value.latitude,longitude:l.value.longitude,hourly:"us_aqi",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}})},4500)}),(r,n)=>{const d=te,p=ae,i=re,u=ee;return x(),w(B,null,[a("div",Ne,"AQI: "+f(H(o)),1),a("div",We,[a("nav",qe,[a("div",Ue,[Fe,Z(a("select",{"onUpdate:modelValue":n[0]||(n[0]=g=>r.$i18n.locale=g),"aria-label":"languages",class:"dark:bg-gray-700",onBlur:t},Ze,544),[[J,r.$i18n.locale]]),c(u,{theme:et,class:""},{default:b(()=>[c(i,{text:"Click me"},{default:b(()=>[c(p,null,{default:b(()=>[c(d,{class:"bg-primary-200 text-primary-700",hover:tt},{default:b(()=>[h("Item #1")]),_:1}),c(d,{class:"bg-primary-200 text-primary-700"},{default:b(()=>[h("Item #2")]),_:1}),c(d,{class:"bg-primary-200 text-primary-700"},{default:b(()=>[h("Item #3")]),_:1})]),_:1})]),_:1})]),_:1}),a("button",{id:"theme-toggle",type:"button",class:"mx-2 animate-pulse rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":"darkMode",onClick:s},Xe)]),Ye])])],64)}}}),rt={class:"markdown-body"},ot=a("h1",{id:"my-page",tabindex:"-1"},"My Page",-1),nt=a("p",null,[h("There I was, there I was … in the jungle. Then I started hearing this ticking sound and I realized it was some sort of"),a("br"),a("em",null,"counter"),h("?")],-1),st=a("p",null,[h("I looked a bit closer and realized I could "),a("strong",null,"press"),h(" this counter and it would change! What is this magic?")],-1),lt=a("h1",{id:"hello-world",tabindex:"-1"},"Hello World",-1),it=a("br",null,null,-1),dt=a("h1",{id:"wow-this-is-amazing!",tabindex:"-1"},"Wow this is Amazing!",-1),ct={__name:"index",setup(e,{expose:t}){const s={name:"My Cool App name",title:"My Cool App title",description:"MyCoolApp description",tags:"the site's tagline",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"My Cool App title"},{name:"twitter:title",content:"My Cool App title"},{property:"og:description",content:"MyCoolApp description"},{name:"twitter:description",content:"MyCoolApp description"}],test:"test"};return t({frontmatter:s}),oe({title:"My Cool App title",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"My Cool App title"},{name:"twitter:title",content:"My Cool App title"},{property:"og:description",content:"MyCoolApp description"},{name:"twitter:description",content:"MyCoolApp description"}]}),(o,r)=>{const n=E,d=A;return x(),w("div",rt,[ot,nt,c(n,{init:5}),st,lt,a("p",null,[h("This is "+f(s.name),1),it,h(" frontmatter: "+f(s))]),dt,c(d,{to:"/vite-app-demo/"},{default:b(()=>[h("Home")]),_:1})])}}},gt={class:"content"},ut=6,ht=y({__name:"ContentIndex",setup(e){return(t,s)=>{const l=ne;return x(),w("div",gt,[h(" Content "),a("section",null,[c(l)]),c(E,{init:ut}),h(" ==================1 "),c(H(ct),{class:"prose lg:prose-xl dark:prose-invert prose-h1:text-[cadetblue] px-10 py-5"})])}}});const S=_(ht,[["__scopeId","data-v-85da10f9"]]),pt=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),mt={class:"layout"},vt={class:"from-primary-500/70 to-secondary-500/70 dark:from-tertiary-500/70 dark:to-quaternary-500/70 bg-gradient-to-r"},xt={class:"layout-content mb-16"},bt={class:"layout-menu"},wt=y({__name:"LayoutIndex",setup(e){return(t,s)=>(x(),w("div",mt,[a("div",vt,[c(at)]),a("div",xt,[a("div",bt,[c(P)]),c(S)])]))}});const $=_(wt,[["__scopeId","data-v-905ffb7e"]]),yt=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),ft=y({__name:"App",setup(e){return se([le({name:"My Awesome Website"}),ie()]),(t,s)=>(x(),de($,{class:"boder-gray-200 text-gray-900 dark:text-white"}))}}),O=ce({legacy:!1,mode:"composition",globalInjection:!0,locale:"zh-TW",fallbackLocale:"en-US",messages:C});we({immediate:!0});const R=ge();R.use(ue({host:"https://gn00029914.github.io",title:"My awesome site"},()=>{const e=T.currentRoute.value;return{path:e.path,...e.meta}}));const _t=he(),T=_e({history:pe(),extendRoutes:e=>(e.push({component:()=>v(()=>import("../a23a2bfc.js"),["a23a2bfc.js","3487a06c.js","assets/HomePage-e3b0c442.css"]),name:"home",path:"/vite-app-demo/"},{component:()=>v(()=>import("../feed2dc8.js"),["feed2dc8.js","3487a06c.js","assets/HomePage-e3b0c442.css"]),name:"about",path:"/vite-app-demo/about"}),ze(Ee),e)});V.configure({easing:"ease",speed:1200,showSpinner:!window.matchMedia("(prefers-reduced-motion: reduce)").matches}).start();me(ft).use(O).use(R).use(_t).use(T).component("EventCounter",E).mount("#app");V.done();const j=document.getElementById("drawer-button"),kt=document.querySelector("#drawer-hide-button"),zt={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!0,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",onHide:()=>{console.log("drawer is hidden")},onShow:()=>{console.log("drawer is shown")},onToggle:()=>{console.log("drawer has been toggled")}},Mt=new ve(j,zt);kt?.addEventListener("click",()=>{Mt.hide(),j?.classList.remove("-translate-x-full")});export{_,at as a};
