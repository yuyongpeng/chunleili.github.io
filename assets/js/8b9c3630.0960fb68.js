"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(r),f=n,d=h["".concat(l,".").concat(f)]||h[f]||s[f]||a;return r?i.createElement(d,c(c({ref:t},u),{},{components:r})):i.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<a;p++)c[p]=r[p];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={},c="\u3010taichi\u3011\u5173\u4e8eSPH_Taichi\u7684\u63a2\u7d22\u4e0e\u5c1d\u8bd5",o={unversionedId:"taichi/SPH_Taichi/SPH_Taichi",id:"taichi/SPH_Taichi/SPH_Taichi",title:"\u3010taichi\u3011\u5173\u4e8eSPH_Taichi\u7684\u63a2\u7d22\u4e0e\u5c1d\u8bd5",description:"\u8fd9\u662f\u592a\u6781\u5b9e\u4e60\u751f\u5f20\u94ed\u777f\u540c\u5b66\u505a\u7684SPH\u592a\u6781\u5e93\u3002\u8bf7\u770b",source:"@site/docs/taichi/SPH_Taichi/SPH_Taichi.md",sourceDirName:"taichi/SPH_Taichi",slug:"/taichi/SPH_Taichi/",permalink:"/taichi/SPH_Taichi/",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/taichi/SPH_Taichi/SPH_Taichi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c92\u5b50\u683c\u5f0f\u5e93partio\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528",permalink:"/partio/partio-intro"},next:{title:"read-json",permalink:"/taichi/SPH_Taichi/read-json"}},l={},p=[{value:"\u5b89\u88c5\u95ee\u9898",id:"\u5b89\u88c5\u95ee\u9898",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"taichi\u5173\u4e8esph_taichi\u7684\u63a2\u7d22\u4e0e\u5c1d\u8bd5"},"\u3010taichi\u3011\u5173\u4e8eSPH_Taichi\u7684\u63a2\u7d22\u4e0e\u5c1d\u8bd5"),(0,n.kt)("p",null,"\u8fd9\u662f\u592a\u6781\u5b9e\u4e60\u751f\u5f20\u94ed\u777f\u540c\u5b66\u505a\u7684SPH\u592a\u6781\u5e93\u3002\u8bf7\u770b"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1mg411y7i9?p=10&vd_source=e15eb8f98a9dde1c9cc874314025b575"},"https://www.bilibili.com/video/BV1mg411y7i9?p=10&vd_source=e15eb8f98a9dde1c9cc874314025b575")),(0,n.kt)("p",null,"\u662f\u4f5c\u8005\u7684\u8bb2\u89e3\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u6765\u63a2\u7d22\u4e00\u4e0b\u8fd9\u4e2a\u5e93\u3002"),(0,n.kt)("p",null,"\u8fd9\u53ea\u662f\u4e2a\u7b14\u8bb0\uff0c\u5199\u5f97\u4f1a\u6bd4\u8f83\u7ec6\u788e\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88c5\u95ee\u9898"},"\u5b89\u88c5\u95ee\u9898"),(0,n.kt)("p",null,"\u9664\u4e86requirements\u91cc\u9762\u7684\u5b89\u88c5\uff0c\u8fd8\u8981\u5b89\u88c5\u4e00\u4e9b\u5e93\u3002\u5176\u4e2dpyglet\u5982\u679c\u5b89\u88c5\u4e0d\u6b63\u786e\u7248\u672c\u4f1a\u62a5\u9519\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pyglet==1.5.27\n")))}s.isMDXComponent=!0}}]);