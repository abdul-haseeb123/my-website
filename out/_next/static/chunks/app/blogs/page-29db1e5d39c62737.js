(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{9279:function(e,r,n){Promise.resolve().then(n.bind(n,7472)),Promise.resolve().then(n.bind(n,9519)),Promise.resolve().then(n.bind(n,2803)),Promise.resolve().then(n.bind(n,3997)),Promise.resolve().then(n.bind(n,8238)),Promise.resolve().then(n.bind(n,8502)),Promise.resolve().then(n.bind(n,7342)),Promise.resolve().then(n.bind(n,3630)),Promise.resolve().then(n.bind(n,9108)),Promise.resolve().then(n.bind(n,558)),Promise.resolve().then(n.bind(n,2225)),Promise.resolve().then(n.bind(n,8626)),Promise.resolve().then(n.bind(n,8794)),Promise.resolve().then(n.bind(n,7609)),Promise.resolve().then(n.bind(n,4287)),Promise.resolve().then(n.bind(n,5946)),Promise.resolve().then(n.bind(n,197)),Promise.resolve().then(n.bind(n,6623)),Promise.resolve().then(n.bind(n,7638)),Promise.resolve().then(n.bind(n,2650)),Promise.resolve().then(n.bind(n,7405)),Promise.resolve().then(n.bind(n,3309)),Promise.resolve().then(n.bind(n,2508)),Promise.resolve().then(n.bind(n,8612)),Promise.resolve().then(n.bind(n,48)),Promise.resolve().then(n.bind(n,1710)),Promise.resolve().then(n.bind(n,7603)),Promise.resolve().then(n.bind(n,8176)),Promise.resolve().then(n.bind(n,2536)),Promise.resolve().then(n.bind(n,2027)),Promise.resolve().then(n.bind(n,3721)),Promise.resolve().then(n.t.bind(n,3729,23)),Promise.resolve().then(n.t.bind(n,4632,23))},7472:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return s}});var t=n(8038),u=n(719),i=n(1815),o=n(1954),c=n(1353);function s(e){let{total:r}=e,[n,s]=(0,u.useState)(2),l=(0,o.useRouter)(),a=(0,o.usePathname)(),[f]=(0,c.Nr)(n,500);return(0,u.useEffect)(()=>{f&&2!==n?l.push("".concat(a,"?limit=").concat(f)):l.push(a)},[f,l]),(0,t.jsx)("div",{className:"container mx-auto flex justify-center py-5",children:(0,t.jsx)(i.A,{color:"primary",onClick:()=>{n>=r||s(e=>e+2)},className:n>=r&&"hidden dark:text-white",children:"Load More"})})}},1954:function(e,r,n){e.exports=n(1906)},1353:function(e,r,n){"use strict";n.d(r,{Nr:function(){return o}});var t=n(719);function u(e,r){return e===r}function i(e,r){return r}function o(e,r,n){var o=n&&n.equalityFn||u,c=(0,t.useReducer)(i,e),s=c[0],l=c[1],a=function(e,r,n){var u=this,i=(0,t.useRef)(null),o=(0,t.useRef)(0),c=(0,t.useRef)(null),s=(0,t.useRef)([]),l=(0,t.useRef)(),a=(0,t.useRef)(),f=(0,t.useRef)(e),d=(0,t.useRef)(!0);f.current=e;var m="undefined"!=typeof window,h=!r&&0!==r&&m;if("function"!=typeof e)throw TypeError("Expected a function");r=+r||0;var v=!!(n=n||{}).leading,b=!("trailing"in n)||!!n.trailing,P="maxWait"in n,p="debounceOnServer"in n&&!!n.debounceOnServer,R=P?Math.max(+n.maxWait||0,r):null;return(0,t.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,t.useMemo)(function(){var e=function(e){var r=s.current,n=l.current;return s.current=l.current=null,o.current=e,a.current=f.current.apply(n,r)},n=function(e,r){h&&cancelAnimationFrame(c.current),c.current=h?requestAnimationFrame(e):setTimeout(e,r)},t=function(e){if(!d.current)return!1;var n=e-i.current;return!i.current||n>=r||n<0||P&&e-o.current>=R},x=function(r){return c.current=null,b&&s.current?e(r):(s.current=l.current=null,a.current)},w=function e(){var u=Date.now();if(t(u))return x(u);if(d.current){var c=r-(u-i.current);n(e,P?Math.min(c,R-(u-o.current)):c)}},y=function(){if(m||p){var f=Date.now(),h=t(f);if(s.current=[].slice.call(arguments),l.current=u,i.current=f,h){if(!c.current&&d.current)return o.current=i.current,n(w,r),v?e(i.current):a.current;if(P)return n(w,r),e(i.current)}return c.current||n(w,r),a.current}};return y.cancel=function(){c.current&&(h?cancelAnimationFrame(c.current):clearTimeout(c.current)),o.current=0,s.current=i.current=l.current=c.current=null},y.isPending=function(){return!!c.current},y.flush=function(){return c.current?x(Date.now()):a.current},y},[v,P,r,R,b,h,m,p])}((0,t.useCallback)(function(e){return l(e)},[l]),r,n),f=(0,t.useRef)(e);return o(f.current,e)||(a(e),f.current=e),[s,a]}}},function(e){e.O(0,[489,498,954,729,120,543,744],function(){return e(e.s=9279)}),_N_E=e.O()}]);