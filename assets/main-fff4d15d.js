import{d as w,r as E,o as v,c as h,a as r,t as x,b as i,e as l,p as H,f as I,w as W,v as R,g as u,h as N,V as O,K as T,X as U,H as D,u as K,i as M,j as k,k as q,R as F,l as V,m as Z,n as G,q as J,s as X,x as Q,y as Y,S as ee,z as te,A as ae,B as re,N as de,C as oe,D as ne}from"../7a6cd4ff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(a){if(a.ep)return;a.ep=!0;const d=o(a);fetch(a.href,d)}})();const se="modulepreload",le=function(e){return"/vite-app-demo/"+e},L={},C=function(t,o,n){if(!o||o.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(o.map(d=>{if(d=le(d),d in L)return;L[d]=!0;const s=d.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!n)for(let p=a.length-1;p>=0;p--){const m=a[p];if(m.href===d&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${c}`))return;const g=document.createElement("link");if(g.rel=s?"stylesheet":se,s||(g.as="script",g.crossOrigin=""),g.href=d,document.head.appendChild(g),s)return new Promise((p,m)=>{g.addEventListener("load",p),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>t())};function ie(e={}){const{immediate:t=!1,onNeedRefresh:o,onOfflineReady:n,onRegistered:a,onRegisteredSW:d,onRegisterError:s}=e;let c,b;const g=async(m=!0)=>{await b};async function p(){if("serviceWorker"in navigator){const{Workbox:m}=await C(()=>import("../a7b12eab.js"),[]);c=new m("/vite-app-demo/sw.js",{scope:"/vite-app-demo/",type:"classic"}),c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),c.addEventListener("installed",f=>{f.isUpdate||n?.()}),c.register({immediate:t}).then(f=>{d?d("/vite-app-demo/sw.js",f):a?.(f)}).catch(f=>{s?.(f)})}}return b=p(),g}const ge={"en-US":{lang:e=>{const{normalize:t}=e;return t(["English"])},message:{Home:e=>{const{normalize:t}=e;return t(["Home"])},About:e=>{const{normalize:t}=e;return t(["About"])}}},"zh-TW":{lang:e=>{const{normalize:t}=e;return t(["繁體中文"])},message:{Home:e=>{const{normalize:t}=e;return t(["首頁"])},About:e=>{const{normalize:t}=e;return t(["關於"])}}}},ce={class:"counter"},ve=w({__name:"EventCounter",props:{init:{}},setup(e){const o=E(e.init||0);return(n,a)=>(v(),h("div",ce,[r("div",null,"Counter 2: "+x(o.value),1),r("button",{type:"button",onClick:a[0]||(a[0]=d=>o.value+=1)},"Inc"),r("button",{type:"button",onClick:a[1]||(a[1]=d=>o.value-=1)},"Dec")]))}});const y=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o},$=y(ve,[["__scopeId","data-v-cd6f7eb0"]]),fe={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ue=r("path",{fill:"currentColor",d:"M26 4.01H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2Zm0 2v4H6v-4Zm-20 20v-14h20v14Z"},null,-1),he=r("path",{fill:"currentColor",d:"m10.76 16.18l2.82 2.83l-2.82 2.83l1.41 1.41l4.24-4.24l-4.24-4.24l-1.41 1.41z"},null,-1),pe=[ue,he];function me(e,t){return v(),h("svg",fe,pe)}const xe={name:"carbon-terminal",render:me},z=e=>(H("data-v-c9fad159"),e=e(),I(),e),we={class:"menu xs:invisible xs:w-0 xs:hidden w-fit"},be=z(()=>r("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),ye=z(()=>r("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),_e=z(()=>r("span",{class:"bg-gray-900 dark:bg-white"},null,-1)),ke=z(()=>r("br",null,null,-1)),ze=w({__name:"MenuIndex",setup(e){function t(){document.getElementsByClassName("menu")[0].style.getPropertyValue("width")==="5rem"?document.getElementsByClassName("menu")[0].style.setProperty("width","fit-content"):document.getElementsByClassName("menu")[0].style.setProperty("width","5rem")}return(o,n)=>{const a=xe;return v(),h("div",we,[r("div",{class:"menu-bar"},[i(" Menu "),r("label",{for:"check"},[r("input",{id:"check",type:"checkbox",onClick:t}),be,ye,_e])]),ke,l(a),i(" 作者外出取材... ======= ")])}}});const Ce=y(ze,[["__scopeId","data-v-c9fad159"]]),_=e=>(H("data-v-d72f127f"),e=e(),I(),e),Me={class:"border-b"},Le={class:"px-1 py-2.5"},Be={class:"flex flex-row"},Ee=_(()=>r("div",{class:"xs:hidden flex-1"},null,-1)),He={class:"flex-1"},Ie=_(()=>r("option",{value:"zh-TW"},"繁體中文",-1)),Ve=_(()=>r("option",{value:"en-US"},"English",-1)),$e=[Ie,Ve],Ae=_(()=>r("svg",{id:"theme-toggle-dark-icon",class:"hidden h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1)),Se=_(()=>r("svg",{id:"theme-toggle-light-icon",class:"hidden h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"})],-1)),Pe=[Ae,Se],je=N('<br data-v-d72f127f><div class="inline-block text-center" data-v-d72f127f><button id="drawer-button" class="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" data-v-d72f127f> Show navigation </button></div><div id="drawer-navigation" class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label" data-v-d72f127f><h5 id="drawer-navigation-label" class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400" data-v-d72f127f> Menu </h5><button id="drawer-hide-button" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-v-d72f127f><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="sr-only" data-v-d72f127f>Close menu</span></button><div class="overflow-y-auto py-4" data-v-d72f127f><ul class="space-y-2" data-v-d72f127f><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" data-v-d72f127f></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" data-v-d72f127f></path></svg><span class="ml-3" data-v-d72f127f>Dashboard</span></a></li><li data-v-d72f127f><button type="button" class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap text-left" data-v-d72f127f>E-commerce</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d72f127f></path></svg></button><ul id="dropdown-example" class="hidden space-y-2 py-2" data-v-d72f127f><li data-v-d72f127f><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f>Products</a></li><li data-v-d72f127f><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f>Billing</a></li><li data-v-d72f127f><a href="#" class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f>Invoice</a></li></ul></li><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-d72f127f>Kanban</span><span class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300" data-v-d72f127f>Pro</span></a></li><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" data-v-d72f127f></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-d72f127f>Inbox</span><span class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300" data-v-d72f127f>3</span></a></li><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-d72f127f>Users</span></a></li><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-d72f127f>Products</span></a></li><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-d72f127f>Sign In</span></a></li><li data-v-d72f127f><a href="#" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" data-v-d72f127f><svg aria-hidden="true" class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-d72f127f>Sign Up</span></a></li></ul></div></div><div class="xs:invisible xs:w-0 xs:hidden inline text-center" data-v-d72f127f><button class="mb-2 mr-2 overflow-y-auto rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example" data-v-d72f127f> Show top drawer </button></div><div id="drawer-top-example" class="fixed inset-x-0 top-0 z-40 w-full -translate-y-full bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-top-label" data-v-d72f127f><h5 id="drawer-top-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400" data-v-d72f127f><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-d72f127f></path></svg> Top drawer </h5><button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-v-d72f127f><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="sr-only" data-v-d72f127f>Close menu</span></button><p class="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400" data-v-d72f127f> Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline hover:no-underline dark:text-blue-500" data-v-d72f127f>limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. </p><a href="#" class="mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" data-v-d72f127f>Learn more</a><a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-v-d72f127f>Get access <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d72f127f></path></svg></a></div><div class="xs:invisible xs:w-0 xs:hidden inline text-center" data-v-d72f127f><button class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" data-v-d72f127f> Show right drawer </button></div><div id="drawer-right-example" class="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label" data-v-d72f127f><h5 id="drawer-right-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400" data-v-d72f127f><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-v-d72f127f></path></svg> Right drawer </h5><button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-v-d72f127f><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d72f127f></path></svg><span class="sr-only" data-v-d72f127f>Close menu</span></button><p class="mb-6 text-sm text-gray-500 dark:text-gray-400" data-v-d72f127f> Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline hover:no-underline dark:text-blue-500" data-v-d72f127f>limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. </p><div class="grid grid-cols-2 gap-4" data-v-d72f127f><a href="#" class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" data-v-d72f127f>Learn more</a><a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-v-d72f127f>Get access <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d72f127f></path></svg></a></div></div><div class="inline text-center" data-v-d72f127f><button class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="bottom" data-drawer-edge="true" data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe" data-v-d72f127f> Show swipeable drawer </button></div><div id="drawer-swipe" class="fixed inset-x-0 bottom-[60px] z-40 w-full translate-y-full overflow-y-auto rounded-t-lg border-t border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-swipe-label" data-v-d72f127f><div class="cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe" data-v-d72f127f><span class="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-lg bg-gray-300 dark:bg-gray-600" data-v-d72f127f></span><h5 id="drawer-swipe-label" class="inline-flex items-center text-base text-gray-500 dark:text-gray-400" data-v-d72f127f><svg class="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" data-v-d72f127f></path></svg> Add widget </h5></div><div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4" data-v-d72f127f><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" data-v-d72f127f></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Chart </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Table </div></div><div class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" data-v-d72f127f></path></svg></div><div class="hidden text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Ticket </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" data-v-d72f127f></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> List </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" data-v-d72f127f></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Price </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Users </div></div><div class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Task </div></div><div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600" data-v-d72f127f><div class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500" data-v-d72f127f><svg class="inline h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-d72f127f><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" data-v-d72f127f></path></svg></div><div class="text-center font-medium text-gray-500 dark:text-gray-400" data-v-d72f127f> Custom </div></div></div></div>',9),We="red",Re=!1,Ne=w({__name:"HeaderIndex",setup(e){const t=n=>{A.global.locale.value=n.target.value};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.getElementById("theme-toggle-light-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-dark-icon")?.classList.add("hidden")):(document.getElementById("theme-toggle-dark-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-light-icon")?.classList.add("hidden"))});const o=()=>{document.documentElement.classList.contains("dark")?(document.getElementById("theme-toggle-dark-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-light-icon")?.classList.add("hidden"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.documentElement.style.background="linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/vite-app-demo/lightbg.jpg') no-repeat center center",document.documentElement.style.backgroundSize="cover"):(document.getElementById("theme-toggle-light-icon")?.classList.remove("hidden"),document.getElementById("theme-toggle-dark-icon")?.classList.add("hidden"),document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.documentElement.style.background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/vite-app-demo/darkbg.jpg') no-repeat center center",document.documentElement.style.backgroundSize="cover")};return(n,a)=>{const d=T,s=U,c=D,b=O;return v(),h("div",Me,[r("nav",Le,[r("div",Be,[Ee,r("p",He,x(n.$t("message.Home"))+" | "+x(n.$t("message.About"))+"  ",1),W(r("select",{"onUpdate:modelValue":a[0]||(a[0]=g=>n.$i18n.locale=g),"aria-label":"languages",class:"dark:bg-gray-700",onBlur:t},$e,544),[[R,n.$i18n.locale]]),l(b,{theme:We,class:""},{default:u(()=>[l(c,{text:"Click me"},{default:u(()=>[l(s,null,{default:u(()=>[l(d,{class:"bg-primary-200 text-primary-700",hover:Re},{default:u(()=>[i("Item #1")]),_:1}),l(d,{class:"bg-primary-200 text-primary-700"},{default:u(()=>[i("Item #2")]),_:1}),l(d,{class:"bg-primary-200 text-primary-700"},{default:u(()=>[i("Item #3")]),_:1})]),_:1})]),_:1})]),_:1}),r("button",{id:"theme-toggle",type:"button",class:"mx-2 animate-pulse rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":"darkMode",onClick:o},Pe)]),je])])}}});const Oe=y(Ne,[["__scopeId","data-v-d72f127f"]]),Te={class:"markdown-body"},Ue=r("h1",{id:"my-page",tabindex:"-1"},"My Page",-1),De=r("p",null,[i("There I was, there I was … in the jungle. Then I started hearing this ticking sound and I realized it was some sort of "),r("em",null,"counter"),i("?")],-1),Ke=r("p",null,[i("I looked a bit closer and realized I could "),r("strong",null,"press"),i(" this counter and it would change! What is this magic?")],-1),qe=r("h1",{id:"hello-world",tabindex:"-1"},"Hello World",-1),Fe=r("h1",{id:"wow-this-is-amazing!",tabindex:"-1"},"Wow this is Amazing!",-1),B=w({__name:"index",setup(e,{expose:t}){const o={name:"My Cool App name",title:"My Cool App title",description:"MyCoolApp description",tags:"the site's tagline",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"My Cool App title"},{name:"twitter:title",content:"My Cool App title"},{property:"og:description",content:"MyCoolApp description"},{name:"twitter:description",content:"MyCoolApp description"}],test:"test"};return t({frontmatter:o}),K({title:"My Cool App title",meta:[{name:"description",content:"Hello World"},{property:"og:title",content:"My Cool App title"},{name:"twitter:title",content:"My Cool App title"},{property:"og:description",content:"MyCoolApp description"},{name:"twitter:description",content:"MyCoolApp description"}]}),(a,d)=>{const s=M("EventCounter"),c=M("router-link");return v(),h("div",Te,[Ue,De,l(s,{init:5}),Ke,qe,r("p",null,"This is "+x(o.name)+" "+x(o),1),Fe,r("p",null,x(o.name),1),l(s),l(c,{to:"/vite-app-demo/"},{default:u(()=>[i("Home")]),_:1})])}}});const Ze={class:"content"},Ge={key:0},Je=6,Xe=w({__name:"ContentIndex",setup(e){const t=E();return(o,n)=>{const a=F;return v(),h("div",Ze,[i(" Content "),l($,{init:Je}),i(" ==================1 "),l(k(B),{class:"prose lg:prose-xl dark:prose-invert"}),i(" ==================2 "),l(a,null,{default:u(({Component:d})=>[(v(),V(Z(d),{ref_key:"current",ref:t},null,512))]),_:1}),i(" ==================3 "),k(t)?(v(),h("div",Ge," accessing frontmatter from outside via expose API: "+x(k(t).frontmatter),1)):q("",!0),i(" ==================4 "),l(k(B),{style:{padding:"20px 40px"}})])}}});const Qe=y(Xe,[["__scopeId","data-v-13203f05"]]),Ye={class:"layout"},et={class:"from-primary-500/70 to-secondary-500/70 dark:from-tertiary-500/70 dark:to-quaternary-500/70 bg-gradient-to-r"},tt={class:"layout-content mb-16"},at={class:"layout-menu"},rt=w({__name:"LayoutIndex",setup(e){return(t,o)=>(v(),h("div",Ye,[r("div",et,[l(Oe)]),r("div",tt,[r("div",at,[l(Ce)]),l(Qe)])]))}});const dt=y(rt,[["__scopeId","data-v-905ffb7e"]]),ot=w({__name:"App",setup(e){return(t,o)=>(v(),V(dt,{class:"boder-gray-200 text-gray-900 dark:text-white"}))}}),nt=[{component:()=>C(()=>import("../7b98c0d2.js"),["7b98c0d2.js","7a6cd4ff.js","assets/HomePage-e3b0c442.css"]),name:"home",path:"/vite-app-demo/"},{component:()=>C(()=>import("../e2e3e6b7.js"),["e2e3e6b7.js","7a6cd4ff.js","assets/HomePage-e3b0c442.css"]),name:"about",path:"/vite-app-demo/about"}],A=G({legacy:!1,mode:"composition",globalInjection:!0,locale:"zh-TW",fallbackLocale:"en-US",messages:ge});J([X({name:"My Awesome Website"}),Q()]);ie({immediate:!0});const S=Y();S.use(ee({host:"https://example.com",title:"My awesome site"},()=>{const e=P.currentRoute.value;return{path:e.path,...e.meta}}));const st=te(),P=ae({history:re(),routes:nt});de.configure({easing:"ease",speed:1200}).start().done();oe(ot).use(A).use(S).use(st).use(P).component("EventCounter",$).mount("#app");const j=document.getElementById("drawer-button"),lt=document.querySelector("#drawer-hide-button"),it={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!0,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",onHide:()=>{console.log("drawer is hidden")},onShow:()=>{console.log("drawer is shown")},onToggle:()=>{console.log("drawer has been toggled")}},gt=new ne(j,it);lt?.addEventListener("click",()=>{gt.hide(),j?.classList.remove("-translate-x-full")});export{y as _};
