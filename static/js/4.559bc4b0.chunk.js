(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[4],{110:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return h}));var r=Array.prototype.slice,i=function(t){return t};function o(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function s(t){return function(e){return+t(e)}}function c(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function u(){return!this.__axis}function f(t,e){var n=[],f=null,l=null,h=6,d=6,v=3,p=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",b=1===t||3===t?o:a;function m(r){var o=null==f?e.ticks?e.ticks.apply(e,n):e.domain():f,a=null==l?e.tickFormat?e.tickFormat.apply(e,n):i:l,m=Math.max(h,0)+v,x=e.range(),y=+x[0]+.5,w=+x[x.length-1]+.5,E=(e.bandwidth?c:s)(e.copy()),z=r.selection?r.selection():r,T=z.selectAll(".domain").data([null]),k=z.selectAll(".tick").data(o,e).order(),O=k.exit(),S=k.enter().append("g").attr("class","tick"),M=k.select("line"),B=k.select("text");T=T.merge(T.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(S),M=M.merge(S.append("line").attr("stroke","currentColor").attr(g+"2",p*h)),B=B.merge(S.append("text").attr("fill","currentColor").attr(g,p*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==z&&(T=T.transition(r),k=k.transition(r),M=M.transition(r),B=B.transition(r),O=O.transition(r).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=E(t))?b(t):this.getAttribute("transform")})),S.attr("opacity",1e-6).attr("transform",(function(t){var e=this.parentNode.__axis;return b(e&&isFinite(e=e(t))?e:E(t))}))),O.remove(),T.attr("d",4===t||2==t?d?"M"+p*d+","+y+"H0.5V"+w+"H"+p*d:"M0.5,"+y+"V"+w:d?"M"+y+","+p*d+"V0.5H"+w+"V"+p*d:"M"+y+",0.5H"+w),k.attr("opacity",1).attr("transform",(function(t){return b(E(t))})),M.attr(g+"2",p*h),B.attr(g,p*m).text(a),z.filter(u).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),z.each((function(){this.__axis=E}))}return m.scale=function(t){return arguments.length?(e=t,m):e},m.ticks=function(){return n=r.call(arguments),m},m.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),m):n.slice()},m.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),m):f&&f.slice()},m.tickFormat=function(t){return arguments.length?(l=t,m):l},m.tickSize=function(t){return arguments.length?(h=d=+t,m):h},m.tickSizeInner=function(t){return arguments.length?(h=+t,m):h},m.tickSizeOuter=function(t){return arguments.length?(d=+t,m):d},m.tickPadding=function(t){return arguments.length?(v=+t,m):v},m}function l(t){return f(2,t)}function h(t){return f(3,t)}},134:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(94);function i(t,e){var n;if(void 0===e){var i,o=Object(r.a)(t);try{for(o.s();!(i=o.n()).done;){var a=i.value;null!=a&&(n>a||void 0===n&&a>=a)&&(n=a)}}catch(l){o.e(l)}finally{o.f()}}else{var s,c=-1,u=Object(r.a)(t);try{for(u.s();!(s=u.n()).done;){var f=s.value;null!=(f=e(f,++c,t))&&(n>f||void 0===n&&f>=f)&&(n=f)}}catch(l){u.e(l)}finally{u.f()}}return n}},144:function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,s=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),c=function(t){return t instanceof SVGElement&&"getBBox"in t},u=function(t){if(c(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||t.getClientRects().length)},f=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},l="undefined"!==typeof window?window:{},h=new WeakMap,d=/auto|scroll/,v=/^tb|vertical/,p=/msie|trident/i.test(l.navigator&&l.navigator.userAgent),g=function(t){return parseFloat(t||"0")},b=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},m=Object.freeze({devicePixelContentBoxSize:b(),borderBoxSize:b(),contentBoxSize:b(),contentRect:new s(0,0,0,0)}),x=function(t,e){if(void 0===e&&(e=!1),h.has(t)&&!e)return h.get(t);if(u(t))return h.set(t,m),m;var n=getComputedStyle(t),r=c(t)&&t.ownerSVGElement&&t.getBBox(),i=!p&&"border-box"===n.boxSizing,o=v.test(n.writingMode||""),a=!r&&d.test(n.overflowY||""),f=!r&&d.test(n.overflowX||""),l=r?0:g(n.paddingTop),x=r?0:g(n.paddingRight),y=r?0:g(n.paddingBottom),w=r?0:g(n.paddingLeft),E=r?0:g(n.borderTopWidth),z=r?0:g(n.borderRightWidth),T=r?0:g(n.borderBottomWidth),k=w+x,O=l+y,S=(r?0:g(n.borderLeftWidth))+z,M=E+T,B=f?t.offsetHeight-M-t.clientHeight:0,R=a?t.offsetWidth-S-t.clientWidth:0,C=i?k+S:0,F=i?O+M:0,N=r?r.width:g(n.width)-C-R,_=r?r.height:g(n.height)-F-B,A=N+k+R+S,j=_+O+B+M,D=Object.freeze({devicePixelContentBoxSize:b(Math.round(N*devicePixelRatio),Math.round(_*devicePixelRatio),o),borderBoxSize:b(A,j,o),contentBoxSize:b(N,_,o),contentRect:new s(w,l,N,_)});return h.set(t,D),D},y=function(t,e,n){var i=x(t,n),o=i.borderBoxSize,a=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return s;case r.BORDER_BOX:return o;default:return a}},w=function(t){var e=x(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},E=function(t){if(u(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},z=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new w(e.target),i=E(e.target);r.push(n),e.lastReportedSize=y(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},T=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(E(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},k=function(){var t=0;for(T(t);i.some((function(t){return t.activeTargets.length>0}));)t=z(),T(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},O=[],S=function(t){if(!a){var e=0,n=document.createTextNode("");new MutationObserver((function(){return O.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),a=function(){n.textContent=""+(e?e--:e++)}}O.push(t),a()},M=0,B={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],C=function(t){return void 0===t&&(t=0),Date.now()+t},F=!1,N=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!F){F=!0;var n,r=C(t);n=function(){var n=!1;try{n=k()}finally{if(F=!1,t=r-C(),!M)return;n?e.run(1e3):t>0?e.run(t):e.start()}},S((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,B)};document.body?e():l.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(e){return l.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(e){return l.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),_=function(t){!M&&t>0&&N.start(),!(M+=t)&&N.stop()},A=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=y(this.target,this.observedBox,!0);return t=this.target,c(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),j=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},D=new WeakMap,V=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},P=function(){function t(){}return t.connect=function(t,e){var n=new j(t,e);D.set(t,n)},t.observe=function(t,e,n){var r=D.get(t),o=0===r.observationTargets.length;V(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new A(e,n&&n.box)),_(1),N.schedule())},t.unobserve=function(t,e){var n=D.get(t),r=V(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),_(-1))},t.disconnect=function(t){var e=this,n=D.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),I=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");P.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");P.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");P.unobserve(this,t)},t.prototype.disconnect=function(){P.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},176:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return p}));var r=n(216),i=n(234),o=n(119),a=n(99),s=n(90);function c(t){return Math.log(t)}function u(t){return Math.exp(t)}function f(t){return-Math.log(-t)}function l(t){return-Math.exp(-t)}function h(t){return isFinite(t)?+("1e"+t):t<0?0:t}function d(t){return function(e){return-t(-e)}}function v(t){var e,n,a=t(c,u),s=a.domain,v=10;function p(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(e){return Math.log(e)/t})}(v),n=function(t){return 10===t?h:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}}(v),s()[0]<0?(e=d(e),n=d(n),t(f,l)):t(c,u),a}return a.base=function(t){return arguments.length?(v=+t,p()):v},a.domain=function(t){return arguments.length?(s(t),p()):s()},a.ticks=function(t){var i,o=s(),a=o[0],c=o[o.length-1];(i=c<a)&&(h=a,a=c,c=h);var u,f,l,h=e(a),d=e(c),p=null==t?10:+t,g=[];if(!(v%1)&&d-h<p){if(h=Math.floor(h),d=Math.ceil(d),a>0){for(;h<=d;++h)for(f=1,u=n(h);f<v;++f)if(!((l=u*f)<a)){if(l>c)break;g.push(l)}}else for(;h<=d;++h)for(f=v-1,u=n(h);f>=1;--f)if(!((l=u*f)<a)){if(l>c)break;g.push(l)}2*g.length<p&&(g=Object(r.a)(a,c,p))}else g=Object(r.a)(h,d,Math.min(d-h,p)).map(n);return i?g.reverse():g},a.tickFormat=function(t,r){if(null==r&&(r=10===v?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var o=Math.max(1,v*t/a.ticks().length);return function(t){var i=t/n(Math.round(e(t)));return i*v<v-.5&&(i*=v),i<=o?r(t):""}},a.nice=function(){return s(Object(o.a)(s(),{floor:function(t){return n(Math.floor(e(t)))},ceil:function(t){return n(Math.ceil(e(t)))}}))},a}function p(){var t=v(Object(a.d)()).domain([1,10]);return t.copy=function(){return Object(a.a)(t,p()).base(t.base())},s.b.apply(t,arguments),t}}}]);
//# sourceMappingURL=4.559bc4b0.chunk.js.map