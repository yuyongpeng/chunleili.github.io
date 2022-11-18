"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=o(r),u=p,g=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return r?n.createElement(g,l(l({ref:t},f),{},{components:r})):n.createElement(g,l({ref:t},f))}));function u(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var o=2;o<a;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var n=r(7462),p=(r(7294),r(3905));const a={},l="\u4f7f\u7528ffmpeg \u5c06 \u56fe\u7247\u5e8f\u5217\u8f6c\u89c6\u9891\u6216\u8005GIF",i={unversionedId:"ffmpeg/pic2video",id:"ffmpeg/pic2video",title:"\u4f7f\u7528ffmpeg \u5c06 \u56fe\u7247\u5e8f\u5217\u8f6c\u89c6\u9891\u6216\u8005GIF",description:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3a\u89c6\u9891",source:"@site/docs/ffmpeg/pic2video.md",sourceDirName:"ffmpeg",slug:"/ffmpeg/pic2video",permalink:"/ffmpeg/pic2video",draft:!1,editUrl:"https://github.com/chunleili/chunleili.github.io/tree/master/docs/ffmpeg/pic2video.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528ffmpeg\u5feb\u901f\u526a\u8f91\u89c6\u9891",permalink:"/ffmpeg/cut-video"},next:{title:"git\u6062\u590d\u5355\u4e2a\u6587\u4ef6",permalink:"/git/git\u6062\u590d\u5355\u4e2a\u6587\u4ef6"}},c={},o=[{value:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3a\u89c6\u9891",id:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3a\u89c6\u9891",level:2},{value:"\u89c6\u9891\u8f6c\u6362\u4e3aGIF",id:"\u89c6\u9891\u8f6c\u6362\u4e3agif",level:2},{value:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3aGIF",id:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3agif",level:2},{value:"\u89c6\u9891\u8f6c\u6362\u4e3a\u56fe\u7247\u5e8f\u5217",id:"\u89c6\u9891\u8f6c\u6362\u4e3a\u56fe\u7247\u5e8f\u5217",level:2},{value:"\u67e5\u770b\u56fe\u7247/\u89c6\u9891\u5e27\u7387\u5206\u8fa8\u7387\u7b49\u4fe1\u606f",id:"\u67e5\u770b\u56fe\u7247\u89c6\u9891\u5e27\u7387\u5206\u8fa8\u7387\u7b49\u4fe1\u606f",level:2},{value:"\u4f7f\u7528shutter encoder\u8f6c\u6362\u56fe\u7247\u5e8f\u5217\u4e3a\u89c6\u9891",id:"\u4f7f\u7528shutter-encoder\u8f6c\u6362\u56fe\u7247\u5e8f\u5217\u4e3a\u89c6\u9891",level:2}],f={toc:o};function m(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u4f7f\u7528ffmpeg-\u5c06-\u56fe\u7247\u5e8f\u5217\u8f6c\u89c6\u9891\u6216\u8005gif"},"\u4f7f\u7528ffmpeg \u5c06 \u56fe\u7247\u5e8f\u5217\u8f6c\u89c6\u9891\u6216\u8005GIF"),(0,p.kt)("h2",{id:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3a\u89c6\u9891"},"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3a\u89c6\u9891"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -f image2 -i ./tmp/%04d.png movie.mp4\n")),(0,p.kt)("h2",{id:"\u89c6\u9891\u8f6c\u6362\u4e3agif"},"\u89c6\u9891\u8f6c\u6362\u4e3aGIF"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i test.mp4 test.gif\n")),(0,p.kt)("h2",{id:"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3agif"},"\u56fe\u7247\u5e8f\u5217\u8f6c\u6362\u4e3aGIF"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -f image2 -r 25 -i ./temp/%04d.png ./images/demo.gif\n")),(0,p.kt)("p",null,"-r \u8c03\u6574\u5e27\u7387\n-i\u8868\u793a\u8f93\u5165\u6587\u4ef6\n-y\u8868\u793a\u8986\u76d6\u539f\u6709\u6587\u4ef6\n-f \u8868\u793aformat"),(0,p.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u5c3a\u5bf8\u592a\u5927\uff0c\u53ef\u4ee5\u8003\u8651\u589e\u52a0scale\u53c2\u6570\uff0c\u5148\u8981\u7528-vf\uff08visual filter)\u6765\u8bbe\u7f6e\u6ee4\u6ce2\u5668"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"ffmpeg -i ./temp/%04d.png -vf fps=20,scale=480:-1 demo.gif\n")),(0,p.kt)("p",null,"\u8fd8\u53ef\u4ee5\u91c7\u7528H264\u7f16\u7801\u683c\u5f0f\uff0c\u8fd9\u4f1a\u4f7f\u4f53\u79ef\u5c0f\u5f88\u591a\uff08\u53c2\u8003\uff1a ",(0,p.kt)("a",{parentName:"p",href:"https://avpres.net/FFmpeg/sq_H264"},"https://avpres.net/FFmpeg/sq_H264"),"\uff09"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ffmpeg -f image2  -start_number 50  -i  .\\render.%04d.jpg -c:v libx264  -preset veryslow  -crf 18 -pix_fmt yuv420p movie.mp4\n")),(0,p.kt)("h2",{id:"\u89c6\u9891\u8f6c\u6362\u4e3a\u56fe\u7247\u5e8f\u5217"},"\u89c6\u9891\u8f6c\u6362\u4e3a\u56fe\u7247\u5e8f\u5217"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"ffmpeg -i test.mp4 -r 30-f image2 test_%d.jpeg\n")),(0,p.kt)("h2",{id:"\u67e5\u770b\u56fe\u7247\u89c6\u9891\u5e27\u7387\u5206\u8fa8\u7387\u7b49\u4fe1\u606f"},"\u67e5\u770b\u56fe\u7247/\u89c6\u9891\u5e27\u7387\u5206\u8fa8\u7387\u7b49\u4fe1\u606f"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"ffprobe .\\images\\demo.gif\n")),(0,p.kt)("p",null,"\u8f93\u51fa\n",(0,p.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/1187ba0f207845f8833b2fe8259be7f6.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5206\u522b\u662f\u6587\u4ef6\u540d\uff0c\u65f6\u957f\uff0c\u5206\u8fa8\u7387\u548c\u5e27\u7387"),(0,p.kt)("h2",{id:"\u4f7f\u7528shutter-encoder\u8f6c\u6362\u56fe\u7247\u5e8f\u5217\u4e3a\u89c6\u9891"},"\u4f7f\u7528shutter encoder\u8f6c\u6362\u56fe\u7247\u5e8f\u5217\u4e3a\u89c6\u9891"),(0,p.kt)("p",null,"shutter encoder\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u4ee5ffmpeg\u4e3a\u57fa\u7840\u7684\u8f6f\u4ef6\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u6bd4\u8f83\u7b80\u5355"),(0,p.kt)("p",null,"\u9996\u5148\u628a\u56fe\u7247\u5e8f\u5217\u62d6\u62fd\u5230\u7a97\u53e3"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/9ffa67770b954198ad63a1f1d1a190f7.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,p.kt)("p",null,"\u7136\u540e\u9009\u62e9\u7f16\u7801\u683c\u5f0f\u4e3aH264\uff0c\u8f93\u51fa\u683c\u5f0f\u4e3amp4"),(0,p.kt)("p",null,"\u52fe\u9009\u56fe\u50cf\u5e8f\u5217"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a3a55699dd86467182b30fce809633ce.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,p.kt)("p",null,"\u6700\u540e\u70b9\u51fb\u542f\u52a8\u529f\u80fd\u5373\u53ef"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/dd79f5cf73b342c0bcd8e2c55efab949.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}m.isMDXComponent=!0}}]);