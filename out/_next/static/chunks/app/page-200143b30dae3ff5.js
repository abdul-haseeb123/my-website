(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9906:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(719),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,s.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:d="",children:u,...m},h)=>(0,s.createElement)("svg",{ref:h,...i,width:o,height:o,stroke:r,strokeWidth:a?24*Number(l)/Number(o):l,className:["lucide",`lucide-${n(e)}`,d].join(" "),...m},[...t.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(u)?u:[u]]));return r.displayName=`${e}`,r}},7996:function(e,t,r){Promise.resolve().then(r.bind(r,5133)),Promise.resolve().then(r.bind(r,9519)),Promise.resolve().then(r.bind(r,2803)),Promise.resolve().then(r.bind(r,3997)),Promise.resolve().then(r.bind(r,8238)),Promise.resolve().then(r.bind(r,8502)),Promise.resolve().then(r.bind(r,7342)),Promise.resolve().then(r.bind(r,3630)),Promise.resolve().then(r.bind(r,9108)),Promise.resolve().then(r.bind(r,558)),Promise.resolve().then(r.bind(r,2225)),Promise.resolve().then(r.bind(r,8626)),Promise.resolve().then(r.bind(r,8794)),Promise.resolve().then(r.bind(r,7609)),Promise.resolve().then(r.bind(r,4287)),Promise.resolve().then(r.bind(r,5946)),Promise.resolve().then(r.bind(r,197)),Promise.resolve().then(r.bind(r,6623)),Promise.resolve().then(r.bind(r,7638)),Promise.resolve().then(r.bind(r,2650)),Promise.resolve().then(r.bind(r,7405)),Promise.resolve().then(r.bind(r,3309)),Promise.resolve().then(r.bind(r,2508)),Promise.resolve().then(r.bind(r,8612)),Promise.resolve().then(r.bind(r,48)),Promise.resolve().then(r.bind(r,1710)),Promise.resolve().then(r.bind(r,7603)),Promise.resolve().then(r.bind(r,8176)),Promise.resolve().then(r.bind(r,2536)),Promise.resolve().then(r.bind(r,2027)),Promise.resolve().then(r.bind(r,3721)),Promise.resolve().then(r.t.bind(r,3729,23)),Promise.resolve().then(r.bind(r,7078))},5133:function(e,t,r){"use strict";r.r(t),r.d(t,{DisplayBlogs:function(){return p},default:function(){return P}});var s=r(8038),i=r(6009),n=r(7556),o=r(1473),l=r(1676),a=r(1815),d=r(9906);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,d.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),m=(0,d.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var h=r(2103),c=r.n(h),b=r(2846),f=r.n(b),v=r(83),g=r(719);function P(e){let{blog:t,className:r=""}=e;return(0,s.jsxs)(i.w,{className:(0,v.cn)("   max-w-[300px]  hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out",r),shadow:"sm",radius:"sm",as:f(),href:"/blogs/"+t.attributes.slug,children:[(0,s.jsx)(n.u,{className:"p-0 flex-col items-start",children:(0,s.jsx)(o.J,{alt:"Card background",className:"w-[300px] h-[220px] object-cover rounded-small",src:"http://localhost:1337"+t.attributes.cover.data.attributes.formats.small.url,width:t.attributes.cover.data.attributes.formats.small.width,height:t.attributes.cover.data.attributes.formats.small.height,as:c()})}),(0,s.jsx)(l.G,{className:"overflow-visible  flex flex-col gap-4 ",children:(0,s.jsx)("h4",{className:"font-bold text-large",children:t.attributes.title})})]})}function p(e){let{blogs:t,className:r=""}=e,[i,n]=(0,g.useState)(3),[o,l]=(0,g.useState)(0);return(0,g.useEffect)(()=>{let e=()=>{let e=window.innerWidth;n(e<640?1:e<768?2:3)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(a.A,{onClick:()=>{o-i>=0&&l(o-i)},isDisabled:0==o,className:"bg-pink-500",isIconOnly:!0,radius:"full",children:(0,s.jsx)(u,{color:"#ffffff"})}),(0,s.jsx)("div",{className:"flex gap-4",children:t.slice(o,o+i).map(e=>(0,s.jsx)(P,{blog:e},e.attributes.title+e.attributes.description))}),(0,s.jsx)(a.A,{onClick:()=>{o+i<t.length&&l(o+i)},className:"bg-pink-500",isIconOnly:!0,radius:"full",isDisabled:o+i>=t.length,children:(0,s.jsx)(m,{color:"#ffffff"})})]})}},5836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return d}});let s=r(7295),i=r(5097),n=r(1226),o=r(3729),l=s._(r(3374)),a=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/my-website/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=o.Image},7078:function(e,t,r){"use strict";r.r(t),t.default={src:"/my-website/_next/static/media/chemistry-lab-animate.9b1bad29.svg",height:500,width:750,blurWidth:0,blurHeight:0}},2103:function(e,t,r){e.exports=r(5836)},2846:function(e,t,r){e.exports=r(1954)}},function(e){e.O(0,[489,498,954,729,120,543,744],function(){return e(e.s=7996)}),_N_E=e.O()}]);