(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[6],{246:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(19),i=n(81),c=n(7),o=n(0),l=n.n(o),s=n(95),u=function(e){var t=e.width,n=e.statistic,a=window.innerWidth;t||(t=a>769?480:a);var r=(a>769?.9:1)*t/.885,i=42+c.g+r;return l.a.createElement(s.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,backgroundColor:c.t[n].color},l.a.createElement("circle",{cx:.4*t,cy:i/2,r:"5"}),l.a.createElement("circle",{cx:.5*t,cy:i/2,r:"5"}),l.a.createElement("circle",{cx:.6*t,cy:i/2,r:"5"}))},d=n(31),p=n(88),m=n(82),h=n.n(m),f=n(85),v=n.n(f),b=n(92),g=n(251),O=n(5),y=n(84),E=n(20),C=n.n(E);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},T={xy:[0,0],swiping:!1,eventData:void 0,start:void 0};function k(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function S(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",a),document.addEventListener("mouseup",c));var r=t.touches?t.touches[0]:t,i=k([r.clientX,r.clientY],n.rotationAngle);return j({},e,T,{eventData:{initial:[].concat(i),first:!0},xy:i,start:t.timeStamp||0})}))},a=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var a=t.touches?t.touches[0]:t,r=k([a.clientX,a.clientY],n.rotationAngle),i=r[0],c=r[1],o=e.xy[0]-i,l=e.xy[1]-c,s=Math.abs(o),u=Math.abs(l),d=(t.timeStamp||0)-e.start,p=Math.sqrt(s*s+u*u)/(d||1);if(s<n.delta&&u<n.delta&&!e.swiping)return e;var m=function(e,t,n,a){return e>t?n>0?"Left":"Right":a>0?"Up":"Down"}(s,u,o,l),h=j({},e.eventData,{event:t,absX:s,absY:u,deltaX:o,deltaY:l,velocity:p,dir:m});n.onSwiping&&n.onSwiping(h);var f=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+m])&&(f=!0),f&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),j({},e,{eventData:j({},h,{first:!1}),swiping:!0})}))},r=function(t){e((function(e,n){var a;return e.swiping&&(a=j({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(a),n["onSwiped"+a.dir]&&n["onSwiped"+a.dir](a)),j({},e,T,{eventData:a})}))},i=function(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",c)},c=function(e){i(),r(e)},o=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",a],["touchend",r]];return t.forEach((function(t){var n=t[0],a=t[1];return e.addEventListener(n,a)})),function(){return t.forEach((function(t){var n=t[0],a=t[1];return e.removeEventListener(n,a)}))}}},l={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var a={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),a.cleanUpTouch=null),n.trackTouch&&t&&(a.cleanUpTouch=o(t)),j({},e,{el:t},a)}))}};return t.trackMouse&&(l.onMouseDown=n),[l,o]}function x(e,t,n){var a={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),a.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(a.cleanUpTouch=n(e.el)),j({},e,a)}var N=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=j({},T,{type:"class"}),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.className,n=e.style,a=e.nodeName,r=void 0===a?"div":a,i=e.innerRef,c=e.children,o=e.trackMouse,s=S(this._set,{trackMouse:o}),u=s[0],d=s[1];this.transientState=x(this.transientState,this.props,d);var p=i?function(e){return i(e),u.ref(e)}:u.ref;return l.a.createElement(r,j({},u,{className:t,style:n,ref:p}),c)},a}(l.a.PureComponent);N.propTypes={onSwiped:C.a.func,onSwiping:C.a.func,onSwipedUp:C.a.func,onSwipedRight:C.a.func,onSwipedDown:C.a.func,onSwipedLeft:C.a.func,delta:C.a.number,preventDefaultTouchmoveEvent:C.a.bool,nodeName:C.a.string,trackMouse:C.a.bool,trackTouch:C.a.bool,innerRef:C.a.func,rotationAngle:C.a.number},N.defaultProps=w;var U=n(242),M=Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(10),n.e(24)]).then(n.bind(null,253))}));t.default=l.a.memo((function(e){var t,n=this,s=e.stateCode,m=void 0===s?"TT":s,f=e.data,v=e.mapStatistic,E=e.setMapStatistic,C=e.regionHighlighted,k=e.setRegionHighlighted,N=e.anchor,R=(e.setAnchor,e.expandTable),L=Object(g.a)().t,B=Object(o.useRef)(),D=Object(U.a)().width,I=Object(o.useState)(c.j.DISTRICTS),P=Object(i.a)(I,2),H=P[0],A=P[1],_=Object(o.useState)(c.h[m].mapType===c.i.COUNTRY?c.k.BUBBLES:c.k.CHOROPLETH),Y=Object(i.a)(_,2),X=Y[0],q=Y[1],V=c.h[m],W=V.mapType===c.i.COUNTRY?f:Object(r.a)({},m,f[m]),z=Object(o.useMemo)((function(){var e,t,n=(C.districtName?null===(e=f[C.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[C.districtName]:f[C.stateCode])||{};return Object(b.a)(n,(function(e){e.name=C.districtName||c.s[C.stateCode]}))}),[f,C.stateCode,C.districtName]),J=Object(o.useCallback)((function(e){switch(e){case c.k.CHOROPLETH:return void q(c.k.CHOROPLETH);case c.k.BUBBLES:return void q(c.k.BUBBLES);default:return}}),[q]),K=Object(o.useCallback)((function(){var e=H===c.j.DISTRICTS?c.j.STATES:c.j.DISTRICTS;e===c.j.STATES&&k({stateCode:C.stateCode,districtName:null}),A(e)}),[H,k,C.stateCode]),F=Object(o.useMemo)((function(){return l.a.createElement("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"}))}),[]),G=Object(o.useMemo)((function(){return l.a.createElement("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),l.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),l.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"}))}),[]),Z=Object(O.g)(),Q=Object(o.useRef)();Object(o.useEffect)((function(){"#MapExplorer"===Z.location.hash&&Q.current.scrollIntoView()}),[Z]);var $=Object(o.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),ee=Object(y.c)({total:Object(d.h)(z,"total",v),config:Object(a.a)({tension:250},c.p)}),te=function(e){var t=e.trackMouse,n=l.a.useRef(j({},T,{type:"hook"})),a=l.a.useRef();a.current=j({},w,e);var r=l.a.useMemo((function(){return S((function(e){return n.current=e(n.current,a.current)}),{trackMouse:t})}),[t]),i=r[0],c=r[1];return n.current=x(n.current,a.current,c),i}({onSwipedRight:function(){var e=c.o.indexOf(v),t=e>0?e-1:c.o.length-1;E(c.o[t])},onSwipedLeft:function(){var e=c.o.indexOf(v),t=e<c.o.length-1?e+1:0;E(c.o[t])}}),ne=c.t[v];return l.a.createElement("div",{className:h()("MapExplorer",{stickied:"mapexplorer"===N},{hidden:N&&(!R||D<769)&&"mapexplorer"!==N})},l.a.createElement("div",{className:"panel",ref:Q},l.a.createElement("div",{className:"panel-left fadeInUp",style:$[0]},l.a.createElement("h2",{className:h()(v)},L(z.name),z.name===c.C&&" [".concat(L(c.s[C.stateCode]),"]")),C.stateCode&&l.a.createElement("h1",{className:h()("district",v)},l.a.createElement(y.a.div,null,ee.total.interpolate((function(e){return Object(d.e)(e,"short"!==ne.format?ne.format:"int",v)}))),l.a.createElement("span",null,L(Object(d.a)(ne.displayName))))),l.a.createElement("div",{className:h()("panel-right","is-".concat(v))},l.a.createElement("div",{className:"switch-type"},l.a.createElement("div",{className:h()("choropleth fadeInUp",{"is-highlighted":X===c.k.CHOROPLETH}),onClick:J.bind(this,c.k.CHOROPLETH),style:$[1]},F),l.a.createElement("div",{className:h()("bubble fadeInUp",{"is-highlighted":X===c.k.BUBBLES}),onClick:J.bind(this,c.k.BUBBLES),style:$[2]},G),V.mapType===c.i.COUNTRY&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:h()("boundary fadeInUp",{"is-highlighted":H===c.j.DISTRICTS}),onClick:K.bind(this),style:$[3]},l.a.createElement(p.l,null))),V.mapType===c.i.STATE&&l.a.createElement("div",{className:"back fadeInUp",onClick:function(){Z.push("/#MapExplorer")},style:$[4]},l.a.createElement(p.b,null))),(R||D<769)&&l.a.createElement("div",{className:"switch-statistic fadeInUp",style:$[5]},c.o.map((function(e){return l.a.createElement("div",{key:e,className:h()("statistic-option","is-".concat(e),{"is-highlighted":v===e}),onClick:E.bind(n,e)},l.a.createElement(p.d,null))}))))),l.a.createElement("div",Object.assign({ref:B,className:"fadeInUp",style:$[3]},te),v&&l.a.createElement(o.Suspense,{fallback:l.a.createElement(u,Object.assign({className:"map-loader"},{width:null===(t=B.current)||void 0===t?void 0:t.clientWidth,statistic:v}))},l.a.createElement(M,Object.assign({mapCode:m,mapView:H,mapViz:X},{data:W},{regionHighlighted:C,setRegionHighlighted:k},{statistic:v})))))}),(function(e,t){var n,a,r,i,c,o,l,s,u,d;return!!v()(e.stateCode,t.stateCode)&&(!!v()(e.regionHighlighted,t.regionHighlighted)&&(!!v()(e.mapStatistic,t.mapStatistic)&&(!!v()(e.anchor,t.anchor)&&(!!v()(e.expandTable,t.expandTable)&&(!!v()(null===(n=e.data)||void 0===n||null===(a=n.TT)||void 0===a||null===(r=a.meta)||void 0===r?void 0:r.last_updated,null===(i=t.data)||void 0===i||null===(c=i.TT)||void 0===c||null===(o=c.meta)||void 0===o?void 0:o.last_updated)&&!!v()(null===(l=e.data)||void 0===l||null===(s=l.TT)||void 0===s?void 0:s.total,null===(u=t.data)||void 0===u||null===(d=u.TT)||void 0===d?void 0:d.total))))))}))},95:function(e,t,n){"use strict";var a=n(0),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,o=e.children,l=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,p=e.interval,m=e.rtl,h=e.speed,f=e.style,v=e.title,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=d||Math.random().toString(36).substring(6),O=g+"-diff",y=g+"-animated-diff",E=g+"-aria",C=m?{transform:"scaleX(-1)"}:null,j="0; "+p+"; 1",w=h+"s";return Object(a.createElement)("svg",r({"aria-labelledby":E,role:"img",style:r(r({},f),C)},b),v?Object(a.createElement)("title",{id:E},v):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+O+")",style:{fill:"url("+c+"#"+y+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:O},o),Object(a.createElement)("linearGradient",{id:y},Object(a.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:j,dur:w,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:j,dur:w,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:j,dur:w,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(a.createElement)(i,r({},e)):Object(a.createElement)(o,r({},e))},o=function(e){return Object(a.createElement)(c,r({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=6.bc390d22.chunk.js.map