(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[18],{107:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d}));var r=Array.prototype.slice,i=function(t){return t};function o(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function c(t){return function(e){return+t(e)}}function s(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function u(){return!this.__axis}function l(t,e){var n=[],l=null,f=null,d=6,h=6,v=3,p=1===t||4===t?-1:1,b=4===t||2===t?"x":"y",g=1===t||3===t?o:a;function m(r){var o=null==l?e.ticks?e.ticks.apply(e,n):e.domain():l,a=null==f?e.tickFormat?e.tickFormat.apply(e,n):i:f,m=Math.max(d,0)+v,y=e.range(),O=+y[0]+.5,x=+y[y.length-1]+.5,E=(e.bandwidth?s:c)(e.copy()),k=r.selection?r.selection():r,j=k.selectAll(".domain").data([null]),w=k.selectAll(".tick").data(o,e).order(),T=w.exit(),z=w.enter().append("g").attr("class","tick"),S=w.select("line"),B=w.select("text");j=j.merge(j.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(z),S=S.merge(z.append("line").attr("stroke","currentColor").attr(b+"2",p*d)),B=B.merge(z.append("text").attr("fill","currentColor").attr(b,p*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==k&&(j=j.transition(r),w=w.transition(r),S=S.transition(r),B=B.transition(r),T=T.transition(r).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=E(t))?g(t):this.getAttribute("transform")})),z.attr("opacity",1e-6).attr("transform",(function(t){var e=this.parentNode.__axis;return g(e&&isFinite(e=e(t))?e:E(t))}))),T.remove(),j.attr("d",4===t||2==t?h?"M"+p*h+","+O+"H0.5V"+x+"H"+p*h:"M0.5,"+O+"V"+x:h?"M"+O+","+p*h+"V0.5H"+x+"V"+p*h:"M"+O+",0.5H"+x),w.attr("opacity",1).attr("transform",(function(t){return g(E(t))})),S.attr(b+"2",p*d),B.attr(b,p*m).text(a),k.filter(u).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),k.each((function(){this.__axis=E}))}return m.scale=function(t){return arguments.length?(e=t,m):e},m.ticks=function(){return n=r.call(arguments),m},m.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),m):n.slice()},m.tickValues=function(t){return arguments.length?(l=null==t?null:r.call(t),m):l&&l.slice()},m.tickFormat=function(t){return arguments.length?(f=t,m):f},m.tickSize=function(t){return arguments.length?(d=h=+t,m):d},m.tickSizeInner=function(t){return arguments.length?(d=+t,m):d},m.tickSizeOuter=function(t){return arguments.length?(h=+t,m):h},m.tickPadding=function(t){return arguments.length?(v=+t,m):v},m}function f(t){return l(2,t)}function d(t){return l(3,t)}},119:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(93);function i(t,e){var n;if(void 0===e){var i,o=Object(r.a)(t);try{for(o.s();!(i=o.n()).done;){var a=i.value;null!=a&&(n>a||void 0===n&&a>=a)&&(n=a)}}catch(f){o.e(f)}finally{o.f()}}else{var c,s=-1,u=Object(r.a)(t);try{for(u.s();!(c=u.n()).done;){var l=c.value;null!=(l=e(l,++s,t))&&(n>l||void 0===n&&l>=l)&&(n=l)}}catch(f){u.e(f)}finally{u.f()}}return n}},127:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(80),i=n(128),o=n(0),a=function(t){var e=Object(o.useState)(null),n=Object(r.a)(e,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){var e=t.current,n=new i.a((function(t,e){t.forEach((function(t,e){c(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),a}},128:function(t,e,n){"use strict";n.d(e,"a",(function(){return X}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,c=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),s=function(t){return t instanceof SVGElement&&"getBBox"in t},u=function(t){if(s(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||t.getClientRects().length)},l=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},f="undefined"!==typeof window?window:{},d=new WeakMap,h=/auto|scroll/,v=/^tb|vertical/,p=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),b=function(t){return parseFloat(t||"0")},g=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},m=Object.freeze({devicePixelContentBoxSize:g(),borderBoxSize:g(),contentBoxSize:g(),contentRect:new c(0,0,0,0)}),y=function(t,e){if(void 0===e&&(e=!1),d.has(t)&&!e)return d.get(t);if(u(t))return d.set(t,m),m;var n=getComputedStyle(t),r=s(t)&&t.ownerSVGElement&&t.getBBox(),i=!p&&"border-box"===n.boxSizing,o=v.test(n.writingMode||""),a=!r&&h.test(n.overflowY||""),l=!r&&h.test(n.overflowX||""),f=r?0:b(n.paddingTop),y=r?0:b(n.paddingRight),O=r?0:b(n.paddingBottom),x=r?0:b(n.paddingLeft),E=r?0:b(n.borderTopWidth),k=r?0:b(n.borderRightWidth),j=r?0:b(n.borderBottomWidth),w=x+y,T=f+O,z=(r?0:b(n.borderLeftWidth))+k,S=E+j,B=l?t.offsetHeight-S-t.clientHeight:0,R=a?t.offsetWidth-z-t.clientWidth:0,N=i?w+z:0,C=i?T+S:0,M=r?r.width:b(n.width)-N-R,A=r?r.height:b(n.height)-C-B,F=M+w+R+z,V=A+T+B+S,_=Object.freeze({devicePixelContentBoxSize:g(Math.round(M*devicePixelRatio),Math.round(A*devicePixelRatio),o),borderBoxSize:g(F,V,o),contentBoxSize:g(M,A,o),contentRect:new c(x,f,M,A)});return d.set(t,_),_},O=function(t,e,n){var i=y(t,n),o=i.borderBoxSize,a=i.contentBoxSize,c=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return c;case r.BORDER_BOX:return o;default:return a}},x=function(t){var e=y(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},E=function(t){if(u(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},k=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new x(e.target),i=E(e.target);r.push(n),e.lastReportedSize=O(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},j=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(E(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},w=function(){var t=0;for(j(t);i.some((function(t){return t.activeTargets.length>0}));)t=k(),j(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},T=[],z=function(t){if(!a){var e=0,n=document.createTextNode("");new MutationObserver((function(){return T.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),a=function(){n.textContent=""+(e?e--:e++)}}T.push(t),a()},S=0,B={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],N=function(t){return void 0===t&&(t=0),Date.now()+t},C=!1,M=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!C){C=!0;var n,r=N(t);n=function(){var n=!1;try{n=w()}finally{if(C=!1,t=r-N(),!S)return;n?e.run(1e3):t>0?e.run(t):e.start()}},z((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,B)};document.body?e():f.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(e){return f.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(e){return f.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),A=function(t){!S&&t>0&&M.start(),!(S+=t)&&M.stop()},F=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=O(this.target,this.observedBox,!0);return t=this.target,s(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),V=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},_=new WeakMap,P=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},D=function(){function t(){}return t.connect=function(t,e){var n=new V(t,e);_.set(t,n)},t.observe=function(t,e,n){var r=_.get(t),o=0===r.observationTargets.length;P(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new F(e,n&&n.box)),A(1),M.schedule())},t.unobserve=function(t,e){var n=_.get(t),r=P(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),A(-1))},t.disconnect=function(t){var e=this,n=_.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),X=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");D.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");D.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");D.unobserve(this,t)},t.prototype.disconnect=function(){D.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},251:function(t,e,n){"use strict";n.r(e);var r=n(80),i=n(12),o=n(127),a=n(31),c=n(81),s=n.n(c),u=n(177),l=n(119),f=n(178),d=n(107),h=n(125),v=n(242),p=n(129),b=n(141),g=function(t){var e=function(){for(var t,e=b.b;t=e.sourceEvent;)e=t;return e}();return e.changedTouches&&(e=e.changedTouches[0]),function(t,e){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}(t,e)},m=n(222),y=n(248),O=n(228),x=(n(106),n(61)),E=n(62),k=n(83),j=n.n(k),w=n(0),T=n.n(w),z=n(259),S=15,B=35,R=25,N=25;e.default=T.a.memo((function(t){var e=t.timeseries,n=t.dates,c=t.chartType,b=Object(z.a)().t,k=Object(w.useRef)([]),j=Object(w.useRef)(),C=Object(o.a)(j),M=Object(w.useState)(),A=Object(r.a)(M,2),F=A[0],V=A[1];Object(w.useEffect)((function(){V(n[n.length-1])}),[n]);var _=Object(w.useCallback)((function(){var t=n.length,e=(C||j.current.getBoundingClientRect()).width-B-N;return Math.min(4,e/(1.25*t))}),[n.length,C]);Object(w.useEffect)((function(){var t=n.length,r=C||j.current.getBoundingClientRect(),o=r.width,s=r.height,b=o-B,x=s-R,E=_(),w=Object(v.a)().clamp(!0).domain(t?[Object(a.k)(n[0]),Object(a.k)(n[t-1])]:[]).range([N,b]),T=o<480?4:7,z=function(t){return t.attr("class","x-axis").call(Object(d.a)(w).ticks(T).tickFormat((function(t){return Object(a.c)(t,"yyyy")})))},M=function(t,e){t.attr("class","x-axis2").call(Object(d.a)(w).tickValues([]).tickSize(0)).select(".domain").style("transform","translateY(".concat(e(0),"px)")),e(0)!==x?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},A=function(t,e){return t.attr("class","y-axis").call(Object(d.b)(e).ticks(4,"0~s").tickPadding(4))};function F(){var t=g(this)[0],e=w.invert(t);if(!isNaN(e)){var r=(0,Object(u.a)((function(t){return Object(a.k)(t)})).left)(n,e,1),i=n[r-1],o=n[r];V(e-Object(a.k)(i)<Object(a.k)(o)-e?i:o)}}function P(){V(n[t-1])}k.current.forEach((function(r,o){var s=Object(m.a)(r),u=s.transition().duration(i.b),d=i.x[o],v=Object(p.a)().clamp(!0).domain([1.1*Math.min(0,Object(l.a)(n,(function(t){return Object(a.i)(e[t],c,d)}))),Math.max(1,1.2*Object(f.a)(n,(function(t){return Object(a.i)(e[t],c,d)})))]).nice(4).range([x,S]),g=i.s[d].color;if(s.select(".x-axis").style("transform","translateY(".concat(x,"px)")).transition(u).call(z),s.select(".x-axis2").transition(u).call(M,v),s.select(".y-axis").style("transform","translateX(".concat(b,"px)")).transition(u).call(A,v),s.selectAll("circle").data(n,(function(t){return t})).join((function(t){return t.append("circle").attr("fill",g).attr("stroke",g).attr("cy",x).attr("cx",(function(t){return w(Object(a.k)(t))}))})).transition(u).attr("r",E/2).attr("cx",(function(t){return w(Object(a.k)(t))})).attr("cy",(function(t){return v(Object(a.i)(e[t],c,d))})),"total"===c){s.selectAll(".stem").transition(u).attr("y1",v(0)).attr("y2",v(0)).remove();var k,j=Object(y.a)().curve(O.a).x((function(t){return w(Object(a.k)(t))})).y((function(t){return v(Object(a.i)(e[t],c,d))}));s.selectAll(".trend").data(t?[n]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke",g+"50").attr("stroke-width",4).attr("d",j).attr("stroke-dasharray",(function(){return k=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",k).transition(u).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition(u).attrTween("d",(function(t){var e=Object(m.a)(this).attr("d"),n=j(t);return Object(h.interpolatePath)(e,n)}))}))}else s.selectAll(".trend").remove(),s.selectAll(".stem").data(n,(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("stroke-width",E).attr("x1",(function(t){return w(Object(a.k)(t))})).attr("y1",x).attr("x2",(function(t){return w(Object(a.k)(t))})).attr("y2",x)})).transition(u).attr("stroke-width",E).attr("x1",(function(t){return w(Object(a.k)(t))})).attr("y1",v(0)).attr("x2",(function(t){return w(Object(a.k)(t))})).attr("y2",(function(t){return v(Object(a.i)(e[t],c,d))}));s.selectAll("*").attr("pointer-events","none"),s.on("mousemove",F).on("touchmove",F).on("mouseout",P).on("touchend",P)}))}),[c,C,_,e,n]),Object(w.useEffect)((function(){var t=_();k.current.forEach((function(e){Object(m.a)(e).selectAll("circle").attr("r",(function(e){return e===F?t:t/2}))}))}),[F,_]);var P=Object(w.useCallback)((function(t){if(F){var n=Object(a.i)(null===e||void 0===e?void 0:e[F],"delta",t);if("total"===c)return n;var r=Object(x.a)(Object(E.a)(Object(a.k)(F),1),{representation:"date"});return n-Object(a.i)(null===e||void 0===e?void 0:e[r],"delta",t)}}),[e,F,c]),D=Object(w.useMemo)((function(){var t=[];return[0,0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]);return T.a.createElement(T.a.Fragment,null,T.a.createElement("div",{className:"Timeseries"},i.x.map((function(t,n){var r=P(t,n),o=i.s[t];return T.a.createElement("div",{key:t,className:s()("svg-parent fadeInUp","is-".concat(t)),ref:j,style:D[n]},F&&T.a.createElement("div",{className:s()("stats","is-".concat(t))},T.a.createElement("h5",{className:"title"},b(Object(a.a)(o.displayName))),T.a.createElement("h5",{className:"title"},Object(a.c)(F,"yyyy")),T.a.createElement("div",{className:"stats-bottom"},T.a.createElement("h2",null,Object(a.e)(Object(a.i)(null===e||void 0===e?void 0:e[F],c,t),"short"!==o.format?o.format:"int",t)),T.a.createElement("h6",null,"".concat(r>0?"+":"").concat(Object(a.e)(r,"short"!==o.format?o.format:"int",t))))),T.a.createElement("svg",{ref:function(t){k.current[n]=t},preserveAspectRatio:"xMidYMid meet"},T.a.createElement("g",{className:"x-axis"}),T.a.createElement("g",{className:"x-axis2"}),T.a.createElement("g",{className:"y-axis"})))}))))}),(function(t,e){return!!j()(e.chartType,t.chartType)&&(!!j()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!j()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&!!j()(e.dates,t.dates)))}))}}]);
//# sourceMappingURL=18.256c3944.chunk.js.map