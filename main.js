/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={59:function(t){t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var r=e.querySelector("img"),a=!1;null===r&&(r=document.createElement("img"),a=!0),t&&e.getAttribute("data-iesrc")&&(r.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(r.alt=e.getAttribute("data-alt")),a&&e.append(r)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var o=e.children,i=void 0,n=0;n<=o.length-1;n++)(i=o[n].getAttribute("data-src"))&&(o[n].src=i);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var d=",";if(e.getAttribute("data-background-delimiter")&&(d=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(d).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var u=e.getAttribute("data-background-image-set").split(d),g=u[0].substr(0,u[0].indexOf(" "))||u[0];g=-1===g.indexOf("url(")?"url("+g+")":g,1===u.length?e.style.backgroundImage=g:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+g+"; background-image: -webkit-image-set("+u+"); background-image: image-set("+u+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function r(t){t.setAttribute("data-loaded",!0)}var a=function(t){return"true"===t.getAttribute("data-loaded")},o=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var t,i,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=Object.assign({},e,d),g=u.root,s=u.rootMargin,c=u.threshold,l=u.load,b=u.loaded,f=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(f=new IntersectionObserver((t=l,i=b,function(e,o){e.forEach((function(e){(0<e.intersectionRatio||e.isIntersecting)&&(o.unobserve(e.target),a(e.target)||(t(e.target),r(e.target),i(e.target)))}))}),{root:g,rootMargin:s,threshold:c}));for(var v,A=o(n,g),m=0;m<A.length;m++)(v=A[m]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=o(n,g),e=0;e<t.length;e++)a(t[e])||(f?f.observe(t[e]):(l(t[e]),r(t[e]),b(t[e])))},triggerLoad:function(t){a(t)||(l(t),r(t),b(t))},observer:f}}}()},750:(t,e,r)=>{"use strict";r.r(e)}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,r),i.exports}r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t,e=(t=r(59))&&t.__esModule?t:{default:t};r(750),window.onload=function(){(0,e.default)(".lozad",{rootMargin:"40px 0px",loaded:function(t){t.classList.add("loaded")}}).observe()}})()})();
//# sourceMappingURL=main.js.map