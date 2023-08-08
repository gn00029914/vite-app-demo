import{d as f,r as k,o as v,c as y,a as r,t as b,b as W,e as g,f as d,p as N,g as U,u as q,h as F,i as _,w as K,v as Z,j as w,F as G,k as J,l as Q,m as X,z as Y,H as ee,R as te,P as ae,n as re,q as E,s as oe,x as ne,y as B,A as se,B as le,C as ie,D as de,E as ce,G as ge,S as ue,I as he,J as pe,N as me,K as ve,L as xe}from"../39ab9a0c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const we="modulepreload",be=function(t){return"/vite-app-demo/"+t},L={},m=function(e,s,l){if(!s||s.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(s.map(a=>{if(a=be(a),a in L)return;L[a]=!0;const n=a.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(!!l)for(let h=o.length-1;h>=0;h--){const u=o[h];if(u.href===a&&(!n||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":we,n||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),n)return new Promise((h,u)=>{i.addEventListener("load",h),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a})};function ye(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:l,onRegistered:o,onRegisteredSW:a,onRegisterError:n}=t;let c,x;const i=async(u=!0)=>{await x};async function h(){if("serviceWorker"in navigator){const{Workbox:u}=await m(()=>import("../a7b12eab.js"),[]);c=new u("/vite-app-demo/sw.js",{scope:"/vite-app-demo/",type:"classic"}),c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),c.addEventListener("installed",p=>{p.isUpdate||l?.()}),c.register({immediate:e}).then(p=>{a?a("/vite-app-demo/sw.js",p):o?.(p)}).catch(p=>{n?.(p)})}}return x=h(),i}const fe={"en-US":{lang:t=>{const{normalize:e}=t;return e(["English"])},message:{Home:t=>{const{normalize:e}=t;return e(["Home"])},About:t=>{const{normalize:e}=t;return e(["About"])}}},"zh-TW":{lang:t=>{const{normalize:e}=t;return e(["繁體中文"])},message:{Home:t=>{const{normalize:e}=t;return e(["首頁"])},About:t=>{const{normalize:e}=t;return e(["關於"])}}}},_e={class:"counter"},ke=f({__name:"EventCounter",props:{init:{}},setup(t){const s=k(t.init||0);return(l,o)=>(v(),y("div",_e,[r("div",null,"Counter 2: "+b(s.value),1),r("button",{type:"button",onClick:o[0]||(o[0]=a=>s.value+=1)},"Inc"),r("button",{type:"button",onClick:o[1]||(o[1]=a=>s.value-=1)},"Dec")]))}});const z=(t,e)=>{const s=t.__vccOpts||t;for(const[l,o]of e)s[l]=o;return s},V=z(ke,[["__scopeId","data-v-cd6f7eb0"]]),I=[{path:"/vite-app-demo",children:[{path:"AboutPage",name:"/vite-app-demo/AboutPage",component:()=>m(()=>import("../705fc060.js"),["705fc060.js","39ab9a0c.js","assets/HomePage-e3b0c442.css"])},{path:"HomePage",name:"/vite-app-demo/HomePage",component:()=>m(()=>import("../2bb7bf26.js"),["2bb7bf26.js","39ab9a0c.js","assets/HomePage-e3b0c442.css"])}]}];function ze(t){const{extendRoutes:e}=t;return W(Object.assign(t,{routes:typeof e=="function"?e(I):I}))}const Me={LayoutIndex:()=>m(()=>Promise.resolve().then(()=>ft),void 0),"Content/ContentIndex":()=>m(()=>Promise.resolve().then(()=>mt),void 0),"Header/HeaderIndex":()=>m(()=>import("../c39d9cbe.js"),["c39d9cbe.js","39ab9a0c.js"]),"Menu/MenuIndex":()=>m(()=>Promise.resolve().then(()=>We),void 0)};function Ce(t){return t.map(e=>({path:e.path,meta:e.meta,component:Me[e.meta?.layout||"LayoutIndex"],children:e.path==="/"?[e]:[{...e,path:""}]}))}const Ee=()=>m(()=>import("../2bb7bf26.js"),["2bb7bf26.js","39ab9a0c.js","assets/HomePage-e3b0c442.css"]),Le=()=>m(()=>import("../705fc060.js"),["705fc060.js","39ab9a0c.js","assets/HomePage-e3b0c442.css"]),Ie=[{name:"HomePage",path:"/HomePage",component:Ee,props:!0},{name:"AboutPage",path:"/AboutPage",component:Le,props:!0}],He={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Be=r("path",{fill:"currentColor",d:"M26 4.01H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2Zm0 2v4H6v-4Zm-20 20v-14h20v14Z"},null,-1),Ve=r("path",{fill:"currentColor",d:"m10.76 16.18l2.82 2.83l-2.82 2.83l1.41 1.41l4.24-4.24l-4.24-4.24l-1.41 1.41z"},null,-1),Ae=[Be,Ve];function Pe(t,e){return v(),y("svg",He,Ae)}const Se={name:"carbon-terminal",render:Pe},M=t=>(N("data-v-c9fad159"),t=t(),U(),t),$e={class:"menu xs:invisible xs:w-0 xs:hidden w-fit"},Oe=M(()=>r("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),Re=M(()=>r("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),Te=M(()=>r("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),je=M(()=>r("br",null,null,-1)),De=f({__name:"MenuIndex",setup(t){function e(){document.getElementsByClassName("menu")[0].style.getPropertyValue("width")==="5rem"?document.getElementsByClassName("menu")[0].style.setProperty("width","fit-content"):document.getElementsByClassName("menu")[0].style.setProperty("width","5rem")}return(s,l)=>{const o=Se;return v(),y("div",$e,[r("div",{class:"menu-bar"},[g(" Menu "),r("label",{for:"check"},[r("input",{id:"check",type:"checkbox",onClick:e}),Oe,Re,Te])]),je,d(o),g(" 作者外出取材... ======= ")])}}});const A=z(De,[["__scopeId","data-v-c9fad159"]]),We=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),Ne={class:"dark:text-white"},Ue={class:"border-b"},qe={class:"px-1 py-2.5"},Fe={class:"flex flex-row"},Ke=r("div",{class:"xs:hidden flex-1"},null,-1),Ze={class:"flex-1"},Ge=r("option",{value:"zh-TW"},"繁體中文",-1),Je=r("option",{value:"en-US"},"English",-1),Qe=[Ge,Je],Xe=r("svg",{id:"theme-toggle-dark-icon",class:"hidden h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),Ye=r("svg",{id:"theme-toggle-light-icon",class:"hidden h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"})],-1),et=[Xe,Ye],tt=J('<br><div class="inline-block text-center"><button id="drawer-button" class="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"> Show navigation </button></div><div id="drawer-navigation" class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label"><h5 id="drawer-navigation-label" class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"> Menu </h5><button id="drawer-hide-button" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><div class="overflow-y-auto py-4"><ul class="space-y-2"><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg><span class="ml-3">Dashboard</span></a></li><li><button type="button" class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap text-left">E-commerce</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><ul id="dropdown-example" class="hidden space-y-2 py-2"><li><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a></li><li><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a></li><li><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a></li></ul></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Kanban</span><span class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Inbox</span><span class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">3</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Users</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Products</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Sign In</span></a></li><li><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg><span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span></a></li></ul></div></div><div class="xs:invisible xs:w-0 xs:hidden inline text-center"><button class="mb-2 mr-2 overflow-y-auto rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example"> Show top drawer </button></div><div id="drawer-top-example" class="fixed inset-x-0 top-0 z-40 w-full -translate-y-full bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-top-label"><h5 id="drawer-top-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> Top drawer </h5><button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><p class="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400"> Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline hover:no-underline dark:text-blue-500">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. </p><a href="#" class="mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Learn more</a><a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get access <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div><div class="xs:invisible xs:w-0 xs:hidden inline text-center"><button class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example"> Show right drawer </button></div><div id="drawer-right-example" class="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label"><h5 id="drawer-right-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> Right drawer </h5><button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><p class="mb-6 text-sm text-gray-500 dark:text-gray-400"> Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline hover:no-underline dark:text-blue-500">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. </p><div class="grid grid-cols-2 gap-4"><a href="#" class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Learn more</a><a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get access <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div><div class="inline text-center"><button class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="bottom" data-drawer-edge="true" data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe"> Show swipeable drawer </button></div><div id="drawer-swipe" class="fixed inset-x-0 bottom-[60px] z-40 w-full translate-y-full overflow-y-auto rounded-t-lg border-t border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-swipe-label"><div class="cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe"><span class="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-lg bg-gray-300 dark:bg-gray-600"></span><h5 id="drawer-swipe-label" class="inline-flex items-center text-base text-gray-500 dark:text-gray-400"><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg> Add widget </h5></div><div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4"><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Chart </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Table </div></div><div class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path></svg></div><div class="hidden text-center font-medium text-gray-500 dark:text-gray-400"> Ticket </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> List </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Price </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Users </div></div><div class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Task </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400"> Custom </div></div></div></div>',9),at="red",rt=!1,ot=f({__name:"HeaderIndex",setup(t){const e=a=>{$.global.locale.value=a.target.value};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.getElementById("theme-toggle-light-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-dark-icon")?.classList.add("hidden")):(document.getElementById("theme-toggle-dark-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-light-icon")?.classList.add("hidden"))});const s=()=>{document.documentElement.classList.contains("dark")?(document.getElementById("theme-toggle-dark-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-light-icon")?.classList.add("hidden"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.documentElement.style.background="linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/vite-app-demo/lightbg.jpg') no-repeat center center",document.documentElement.style.backgroundSize="cover"):(document.getElementById("theme-toggle-light-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-dark-icon")?.classList.add("hidden"),document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.documentElement.style.background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/vite-app-demo/darkbg.jpg') no-repeat center center",document.documentElement.style.backgroundSize="cover")},{coords:l}=q({enableHighAccuracy:!0}),o=k();return F(()=>{setTimeout(()=>{const a=k(!0);function n(){return new Date().getHours().toString()}function c({url:h,params:u}){const p=Object.keys(u).map(C=>`${C}=${u[C]}`).join("&"),j=`${h}?${p}`,{data:D}=Q(j,{refetch:a}).get();o.value=X(()=>{try{return JSON.parse(D.value).hourly.us_aqi[n()]}catch{return null}})}let x,i;i=n(),x=i,setInterval(()=>{i=n(),x!=i&&(x=i,c({url:"https://air-quality-api.open-meteo.com/v1/air-quality",params:{latitude:l.value.latitude,longitude:l.value.longitude,hourly:"us_aqi",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}}))},1e3),c({url:"https://air-quality-api.open-meteo.com/v1/air-quality",params:{latitude:l.value.latitude,longitude:l.value.longitude,hourly:"us_aqi",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}})},4500)}),(a,n)=>{const c=ee,x=te,i=ae,h=Y;return v(),y(G,null,[r("div",Ne,"AQI: "+b(_(o)),1),r("div",Ue,[r("nav",qe,[r("div",Fe,[Ke,r("p",Ze,b(a.$t("message.Home"))+" | "+b(a.$t("message.About"))+"  ",1),K(r("select",{"onUpdate:modelValue":n[0]||(n[0]=u=>a.$i18n.locale=u),"aria-label":"languages",class:"dark:bg-gray-700",onBlur:e},Qe,544),[[Z,a.$i18n.locale]]),d(h,{theme:at,class:""},{default:w(()=>[d(i,{text:"Click me"},{default:w(()=>[d(x,null,{default:w(()=>[d(c,{class:"bg-primary-200 text-primary-700",hover:rt},{default:w(()=>[g("Item #1")]),_:1}),d(c,{class:"bg-primary-200 text-primary-700"},{default:w(()=>[g("Item #2")]),_:1}),d(c,{class:"bg-primary-200 text-primary-700"},{default:w(()=>[g("Item #3")]),_:1})]),_:1})]),_:1})]),_:1}),r("button",{id:"theme-toggle",type:"button",class:"mx-2 animate-pulse rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":"darkMode",onClick:s},et)]),tt])])],64)}}}),nt={class:"markdown-body"},st=r("h1",{id:"my-page",tabindex:"-1"},"My Page",-1),lt=r("p",null,[g("There I was, there I was … in the jungle. Then I started hearing this ticking sound and I realized it was some sort of "),r("em",null,"counter"),g("?")],-1),it=r("p",null,[g("I looked a bit closer and realized I could "),r("strong",null,"press"),g(" this counter and it would change! What is this magic?")],-1),dt=r("h1",{id:"hello-world",tabindex:"-1"},"Hello World",-1),ct=r("h1",{id:"wow-this-is-amazing!",tabindex:"-1"},"Wow this is Amazing!",-1),H=f({__name:"index",setup(t,{expose:e}){const s={name:"My Cool App name",title:"My Cool App title",description:"MyCoolApp description",tags:"the site's tagline",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"My Cool App title"},{name:"twitter:title",content:"My Cool App title"},{property:"og:description",content:"MyCoolApp description"},{name:"twitter:description",content:"MyCoolApp description"}],test:"test"};return e({frontmatter:s}),re({title:"My Cool App title",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"My Cool App title"},{name:"twitter:title",content:"My Cool App title"},{property:"og:description",content:"MyCoolApp description"},{name:"twitter:description",content:"MyCoolApp description"}]}),(o,a)=>{const n=E("EventCounter"),c=E("router-link");return v(),y("div",nt,[st,lt,d(n,{init:5}),it,dt,r("p",null,"This is "+b(s.name)+" "+b(s),1),ct,r("p",null,b(s.name),1),d(n),d(c,{to:"/vite-app-demo/"},{default:w(()=>[g("Home")]),_:1})])}}});const gt={class:"content"},ut={key:0},ht=6,pt=f({__name:"ContentIndex",setup(t){const e=k();return(s,l)=>{const o=ne;return v(),y("div",gt,[g(" Content "),d(V,{init:ht}),g(" ==================1 "),d(_(H),{class:"prose lg:prose-xl dark:prose-invert"}),g(" ==================2 "),d(o,null,{default:w(({Component:a})=>[(v(),B(se(a),{ref_key:"current",ref:e},null,512))]),_:1}),g(" ==================3 "),_(e)?(v(),y("div",ut," accessing frontmatter from outside via expose API: "+b(_(e).frontmatter),1)):oe("",!0),g(" ==================4 "),d(_(H),{style:{padding:"20px 40px"}})])}}});const P=z(pt,[["__scopeId","data-v-13203f05"]]),mt=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),vt={class:"layout"},xt={class:"from-primary-500/70 to-secondary-500/70 dark:from-tertiary-500/70 dark:to-quaternary-500/70 bg-gradient-to-r"},wt={class:"layout-content mb-16"},bt={class:"layout-menu"},yt=f({__name:"LayoutIndex",setup(t){return(e,s)=>(v(),y("div",vt,[r("div",xt,[d(ot)]),r("div",wt,[r("div",bt,[d(A)]),d(P)])]))}});const S=z(yt,[["__scopeId","data-v-905ffb7e"]]),ft=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),_t=f({__name:"App",setup(t){return(e,s)=>(v(),B(S,{class:"boder-gray-200 text-gray-900 dark:text-white"}))}}),$=le({legacy:!1,mode:"composition",globalInjection:!0,locale:"zh-TW",fallbackLocale:"en-US",messages:fe});ie([de({name:"My Awesome Website"}),ce()]);ye({immediate:!0});const O=ge();O.use(ue({host:"https://example.com",title:"My awesome site"},()=>{const t=R.currentRoute.value;return{path:t.path,...t.meta}}));const kt=he(),R=ze({history:pe(),extendRoutes:t=>(t.push({component:()=>m(()=>import("../2bb7bf26.js"),["2bb7bf26.js","39ab9a0c.js","assets/HomePage-e3b0c442.css"]),name:"home",path:"/vite-app-demo/"},{component:()=>m(()=>import("../705fc060.js"),["705fc060.js","39ab9a0c.js","assets/HomePage-e3b0c442.css"]),name:"about",path:"/vite-app-demo/about"}),Ce(Ie),t)});me.configure({easing:"ease",speed:1200,showSpinner:!window.matchMedia("(prefers-reduced-motion: reduce)").matches}).start().done();ve(_t).use($).use(O).use(kt).use(R).component("EventCounter",V).mount("#app");const T=document.getElementById("drawer-button"),zt=document.querySelector("#drawer-hide-button"),Mt={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!0,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",onHide:()=>{console.log("drawer is hidden")},onShow:()=>{console.log("drawer is shown")},onToggle:()=>{console.log("drawer has been toggled")}},Ct=new xe(T,Mt);zt?.addEventListener("click",()=>{Ct.hide(),T?.classList.remove("-translate-x-full")});export{z as _,ot as a};
