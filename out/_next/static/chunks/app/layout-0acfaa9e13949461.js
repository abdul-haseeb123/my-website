(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9906:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(719),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:d="",children:c,...h},m)=>(0,n.createElement)("svg",{ref:m,...s,width:o,height:o,stroke:r,strokeWidth:a?24*Number(l)/Number(o):l,className:["lucide",`lucide-${i(e)}`,d].join(" "),...h},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},6766:function(e,t,r){"use strict";r.d(t,{F:function(){return d},f:function(){return c}});var n=r(719);let s=["light","dark"],i="(prefers-color-scheme: dark)",o="undefined"==typeof window,l=(0,n.createContext)(void 0),a={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,n.useContext)(l))&&void 0!==e?e:a},c=e=>(0,n.useContext)(l)?n.createElement(n.Fragment,null,e.children):n.createElement(m,e),h=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:o=!0,storageKey:a="theme",themes:d=h,defaultTheme:c=r?"system":"light",attribute:m="data-theme",value:p,children:y,nonce:g})=>{let[k,x]=(0,n.useState)(()=>f(a,c)),[P,j]=(0,n.useState)(()=>f(a)),w=p?Object.values(p):d,$=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=b());let i=p?p[n]:n,l=t?v():null,a=document.documentElement;if("class"===m?(a.classList.remove(...w),i&&a.classList.add(i)):i?a.setAttribute(m,i):a.removeAttribute(m),o){let e=s.includes(c)?c:null,t=s.includes(n)?n:e;a.style.colorScheme=t}null==l||l()},[]),S=(0,n.useCallback)(e=>{x(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),C=(0,n.useCallback)(t=>{j(b(t)),"system"===k&&r&&!e&&$("system")},[k,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(i);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,n.useEffect)(()=>{let e=e=>{e.key===a&&S(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,n.useEffect)(()=>{$(null!=e?e:k)},[e,k]);let M=(0,n.useMemo)(()=>({theme:k,setTheme:S,forcedTheme:e,resolvedTheme:"system"===k?P:k,themes:r?[...d,"system"]:d,systemTheme:r?P:void 0}),[k,S,e,P,r,d]);return n.createElement(l.Provider,{value:M},n.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:o,storageKey:a,themes:d,defaultTheme:c,attribute:m,value:p,children:y,attrs:w,nonce:g}),y)},u=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:o,enableColorScheme:l,defaultTheme:a,value:d,attrs:c,nonce:h})=>{let m="system"===a,u="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=l?s.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,n=!0)=>{let i=d?d[e]:e,o=t?e+"|| ''":`'${i}'`,a="";return l&&n&&!t&&s.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===r?a+=t||i?`c.add(${o})`:"null":i&&(a+=`d[s](n,${o})`),a},b=e?`!function(){${u}${v(e)}}()`:o?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${v(d?"x[e]":"e",!0)}}${m?"":"else{"+v(a,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${v(d?"x[e]":"e",!0)}}else{${v(a,!1,!1)};}${f}}catch(t){}}();`;return n.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:b}})},()=>!0),f=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},407:function(e,t,r){Promise.resolve().then(r.bind(r,5533)),Promise.resolve().then(r.t.bind(r,5917,23)),Promise.resolve().then(r.bind(r,2262)),Promise.resolve().then(r.bind(r,9519)),Promise.resolve().then(r.bind(r,2803)),Promise.resolve().then(r.bind(r,3997)),Promise.resolve().then(r.bind(r,8238)),Promise.resolve().then(r.bind(r,8502)),Promise.resolve().then(r.bind(r,7342)),Promise.resolve().then(r.bind(r,3630)),Promise.resolve().then(r.bind(r,9108)),Promise.resolve().then(r.bind(r,558)),Promise.resolve().then(r.bind(r,2225)),Promise.resolve().then(r.bind(r,8626)),Promise.resolve().then(r.bind(r,8794)),Promise.resolve().then(r.bind(r,7609)),Promise.resolve().then(r.bind(r,4287)),Promise.resolve().then(r.bind(r,5946)),Promise.resolve().then(r.bind(r,197)),Promise.resolve().then(r.bind(r,6623)),Promise.resolve().then(r.bind(r,7638)),Promise.resolve().then(r.bind(r,2650)),Promise.resolve().then(r.bind(r,7405)),Promise.resolve().then(r.bind(r,3309)),Promise.resolve().then(r.bind(r,2508)),Promise.resolve().then(r.bind(r,8612)),Promise.resolve().then(r.bind(r,48)),Promise.resolve().then(r.bind(r,1710)),Promise.resolve().then(r.bind(r,7603)),Promise.resolve().then(r.bind(r,8176)),Promise.resolve().then(r.bind(r,2536)),Promise.resolve().then(r.bind(r,2027)),Promise.resolve().then(r.bind(r,3721)),Promise.resolve().then(r.t.bind(r,3729,23)),Promise.resolve().then(r.t.bind(r,1954,23)),Promise.resolve().then(r.t.bind(r,4626,23))},5533:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(8038),s=r(2784),i=r(9825),o=r(9999),l=r(7544),a=r(1891),d=r(18),c=r(1255),h=r(618),m=r(2846),u=r.n(m),f=r(5332),v=r(719),b=r(83),p=r(6766),y=r(1815),g=r(9906);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let k=(0,g.Z)("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]),x=(0,g.Z)("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);function P(){let[e,t]=(0,v.useState)(!1),{theme:r,setTheme:s}=(0,p.F)();return((0,v.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsx)(y.A,{onClick:function(){"light"==r&&s("dark"),"dark"==r&&s("light")},isIconOnly:!0,variant:"flat",className:"bg-transparent",disableRipple:!0,children:"light"==r?(0,n.jsx)(k,{color:"#0ea5e9"}):(0,n.jsx)(x,{color:"#0ea5e9"})}):null}/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let j=(0,g.Z)("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);r(2103);let w=[{title:"Lessons",href:"/lessons"},{title:"Blogs",href:"/blogs"},{title:"MCQs",href:"/mcqs"},{title:"About Us",href:"/about"}];function $(){let e=(0,f.usePathname)(),[t,r]=(0,v.useState)(!1);return(0,n.jsxs)(s.R,{shouldHideOnScroll:!0,onMenuOpenChange:r,isBordered:!0,children:[(0,n.jsx)(i.U,{justify:"center",children:(0,n.jsxs)(o.H,{as:u(),href:"/",children:[(0,n.jsx)(j,{color:"#38bdf8",size:35}),(0,n.jsx)("p",{className:"text-pink-500 font-bold text-2xl",children:"College Chemistry"})]})}),(0,n.jsxs)(i.U,{className:"hidden sm:flex gap-4",justify:"end",children:[(0,n.jsx)(l.k,{isActive:"/"==e,children:(0,n.jsx)(a.O,{className:"/"==e&&"text-pink-500 font-bold",href:"/",color:"/"!=e&&"foreground",as:u(),"aria-current":"/"==e&&"page",children:"Home"})}),w.map(t=>(0,n.jsx)(l.k,{isActive:e.startsWith(t.href),children:(0,n.jsx)(a.O,{className:e.startsWith(t.href)&&"text-pink-500 font-bold",href:t.href,color:!e.startsWith(t.href)&&"foreground",as:u(),"aria-current":e.startsWith(t.href)&&"page",children:t.title})},t.title)),(0,n.jsx)(P,{})]}),(0,n.jsxs)(i.U,{className:"flex sm:hidden",justify:"end",children:[(0,n.jsx)(P,{}),(0,n.jsx)(d.L,{"aria-label":t?"Close menu":"Open menu",className:"sm:hidden"})]}),(0,n.jsxs)(c.$,{children:[(0,n.jsx)(h.h,{isActive:"/"==e,children:(0,n.jsx)(a.O,{className:(0,b.cn)("w-full",{"text-pink-500 font-bold":"/"==e}),href:"/",color:"/"!=e&&"foreground",as:u(),"aria-current":"/"==e&&"page",size:"lg",children:"Home"})}),w.map(t=>(0,n.jsx)(h.h,{isActive:e.startsWith(t.href),children:(0,n.jsx)(a.O,{className:(0,b.cn)("w-full",{"text-pink-500 font-bold":e.startsWith(t.href)}),href:t.href,color:!e.startsWith(t.href)&&"foreground",as:u(),"aria-current":e.startsWith(t.href)&&"page",size:"lg",children:t.title})},t.title))]})]})}},2262:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return c}});var n=r(8038),s=r(7096),i=r(5939),o=r(499),l=({children:e,locale:t="en-US",navigate:r,...l})=>{let a=e;return r&&(a=(0,n.jsx)(i.pG,{navigate:r,children:a})),(0,n.jsx)(s.bd,{locale:t,children:(0,n.jsx)(o.N3,{...l,children:a})})},a=r(6766),d=r(5332);function c(e){let{children:t}=e,r=(0,d.useRouter)();return(0,n.jsx)(l,{navigate:r.push,children:(0,n.jsx)(a.f,{attribute:"class",defaultTheme:"dark",children:t})})}},5836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return d}});let n=r(7295),s=r(5097),i=r(1226),o=r(3729),l=n._(r(3374)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/my-website/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=o.Image},5917:function(){},4626:function(e){e.exports={style:{fontFamily:"'__Inter_ac60ce', '__Inter_Fallback_ac60ce'",fontStyle:"normal"},className:"__className_ac60ce"}},2103:function(e,t,r){e.exports=r(5836)},2846:function(e,t,r){e.exports=r(1954)},5332:function(e,t,r){e.exports=r(1906)}},function(e){e.O(0,[489,498,954,729,120,543,744],function(){return e(e.s=407)}),_N_E=e.O()}]);