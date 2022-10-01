"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9120],{3905:(e,t,l)=>{l.d(t,{Zo:()=>a,kt:()=>m});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},a=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),d=u(l),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return l?n.createElement(f,o(o({ref:t},a),{},{components:l})):n.createElement(f,o({ref:t},a))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},8352:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=l(7462),r=(l(7294),l(3905));const i={slug:"vellum-first"},o="\u7528Houdini \u521b\u5efa\u7b2c\u4e00\u4e2a\u8f6f\u4f53\u6a21\u62df",s={unversionedId:"Houdini/vellum-first/vellum-first",id:"Houdini/vellum-first/vellum-first",title:"\u7528Houdini \u521b\u5efa\u7b2c\u4e00\u4e2a\u8f6f\u4f53\u6a21\u62df",description:"Houdni\u4e4b\u4e2d\u7684vellum\u662f\u5229\u7528PBD\u6765\u8fdb\u884c\u4eff\u771f\u7684\u5de5\u5177\u5305\u3002\u53ef\u4ee5\u4eff\u771f\u5e03\u6599\u3001\u6d41\u4f53\u3001\u8f6f\u4f53\u3001\u5934\u53d1\u7b49\u3002\u6211\u4eec\u9996\u5148\u4ecb\u7ecd\u6700\u7b80\u5355\u7684\u8f6f\u4f53\u4eff\u771f\u3002",source:"@site/docs/Houdini/vellum-first/vellum-first.md",sourceDirName:"Houdini/vellum-first",slug:"/Houdini/vellum-first/vellum-first",permalink:"/Houdini/vellum-first/vellum-first",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/docs/Houdini/vellum-first/vellum-first.md",tags:[],version:"current",frontMatter:{slug:"vellum-first"},sidebar:"tutorialSidebar",next:{title:"OpenVDB\u7684\u5b89\u88c5\u4e0e\u7b2c\u4e00\u4e2ademo",permalink:"/OpenVDB/first-openvdb"}},p={},u=[{value:"step1: \u521b\u5efa\u4e00\u4e2ageo\u8282\u70b9\uff0c\u5e76\u8fdb\u5165geo\u8282\u70b9",id:"step1-\u521b\u5efa\u4e00\u4e2ageo\u8282\u70b9\u5e76\u8fdb\u5165geo\u8282\u70b9",level:2},{value:"step2: \u521b\u5efa\u4e00\u4e2a\u7403\u4f53\uff0c\u7136\u540e\u6539\u53d8\u5176primitive type \u4e3apolygon",id:"step2-\u521b\u5efa\u4e00\u4e2a\u7403\u4f53\u7136\u540e\u6539\u53d8\u5176primitive-type-\u4e3apolygon",level:2},{value:"step3: \u521b\u5efavellum configure ballon\u548c vellum solver",id:"step3-\u521b\u5efavellum-configure-ballon\u548c-vellum-solver",level:2},{value:"step4: \u4e3asolver\u8bbe\u7f6e\u5730\u677f\u78b0\u649e",id:"step4-\u4e3asolver\u8bbe\u7f6e\u5730\u677f\u78b0\u649e",level:2},{value:"play",id:"play",level:2},{value:"\u6700\u7ec8\u6548\u679c",id:"\u6700\u7ec8\u6548\u679c",level:2}],a={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7528houdini-\u521b\u5efa\u7b2c\u4e00\u4e2a\u8f6f\u4f53\u6a21\u62df"},"\u7528Houdini \u521b\u5efa\u7b2c\u4e00\u4e2a\u8f6f\u4f53\u6a21\u62df"),(0,r.kt)("p",null,"Houdni\u4e4b\u4e2d\u7684vellum\u662f\u5229\u7528PBD\u6765\u8fdb\u884c\u4eff\u771f\u7684\u5de5\u5177\u5305\u3002\u53ef\u4ee5\u4eff\u771f\u5e03\u6599\u3001\u6d41\u4f53\u3001\u8f6f\u4f53\u3001\u5934\u53d1\u7b49\u3002\u6211\u4eec\u9996\u5148\u4ecb\u7ecd\u6700\u7b80\u5355\u7684\u8f6f\u4f53\u4eff\u771f\u3002"),(0,r.kt)("h2",{id:"step1-\u521b\u5efa\u4e00\u4e2ageo\u8282\u70b9\u5e76\u8fdb\u5165geo\u8282\u70b9"},"step1: \u521b\u5efa\u4e00\u4e2ageo\u8282\u70b9\uff0c\u5e76\u8fdb\u5165geo\u8282\u70b9"),(0,r.kt)("p",null,"\u521b\u5efa\u8282\u70b9"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(7178).Z,width:"3840",height:"2080"})),(0,r.kt)("p",null,"\u7136\u540e\u53cc\u51fb\u8fdb\u5165geo"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(9393).Z,width:"3840",height:"2035"})),(0,r.kt)("h2",{id:"step2-\u521b\u5efa\u4e00\u4e2a\u7403\u4f53\u7136\u540e\u6539\u53d8\u5176primitive-type-\u4e3apolygon"},"step2: \u521b\u5efa\u4e00\u4e2a\u7403\u4f53\uff0c\u7136\u540e\u6539\u53d8\u5176primitive type \u4e3apolygon"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(7445).Z,width:"3840",height:"2035"})),(0,r.kt)("p",null,"\u5c06\u5176\u5927\u5c0f\u6539\u5c0f0.1\u500d\uff0c\u7136\u540e\u5411\u4e0a\u5e73\u79fb0.5"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(4190).Z,width:"1222",height:"1451"})),(0,r.kt)("h2",{id:"step3-\u521b\u5efavellum-configure-ballon\u548c-vellum-solver"},"step3: \u521b\u5efavellum configure ballon\u548c vellum solver"),(0,r.kt)("p",null,"\u521b\u5efaconfig ballon(\u8fd9\u662fhoudini\u9884\u5148\u914d\u7f6e\u597d\u7684\u8bbe\u7f6e\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2aexample)"),(0,r.kt)("p",null,"\u7136\u540e\u521b\u5efavellum solver\u5e76\u5c06\u5176\u8fde\u63a5"),(0,r.kt)("p",null,"\u6ce8\u610f\u628asphere\u4e5f\u8fde\u63a5\u597d\u3002\u6700\u540e\u8282\u70b9\u5982\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(2266).Z,width:"3840",height:"2035"})),(0,r.kt)("h2",{id:"step4-\u4e3asolver\u8bbe\u7f6e\u5730\u677f\u78b0\u649e"},"step4: \u4e3asolver\u8bbe\u7f6e\u5730\u677f\u78b0\u649e"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(7246).Z,width:"3835",height:"1993"})),(0,r.kt)("h2",{id:"play"},"play"),(0,r.kt)("p",null,"\u70b9\u51fb\u5de6\u4e0b\u89d2\u7684play"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(8739).Z,width:"3840",height:"2039"})),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9\u51fbReal time toggle, \u5426\u5219\u4f1a\u6309\u7167\u6a21\u62df\u901f\u5ea6\u6765\u8fd0\u884c\uff0c\u8fd9\u5c31\u4f1a\u592a\u5feb\uff0c\u770b\u8d77\u6765\u4e0d\u65b9\u4fbf\u3002"),(0,r.kt)("h2",{id:"\u6700\u7ec8\u6548\u679c"},"\u6700\u7ec8\u6548\u679c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8f6f\u4f53"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(6117).Z,width:"812",height:"467"})))}c.isMDXComponent=!0},7178:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-17-56-052ba83cdc640dd4f0997bed5397fff3.png"},9393:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-18-36-abf7469a3803603996ea5e8c59b824d4.png"},7445:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-19-35-784910b21acf1a8e1a599a042340872c.png"},4190:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-20-37-aeb9184bf532868a142687877b2f603d.png"},2266:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-26-30-4efd16bfd3e86b9a12153c896c461918.png"},7246:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-29-06-25b97da31141ec9349c9fd701331f87b.png"},8739:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-30-20-60d68bb5a989cdcdb2f1365fdbef8780.png"},6117:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/2022-09-18-23-33-29-f6dc8d14e816414c3ed206bfbd5f2d51.png"}}]);