(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[5],{254:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(19),i=n(80),c=n(12),o=n(0),l=n.n(o),u=n(92),s=function(e){var t=e.width,n=e.statistic,a=window.innerWidth;t||(t=a>769?480:a);var r=(a>769?.9:1)*t/.885,i=42+c.f+r;return l.a.createElement(u.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,backgroundColor:c.s[n].color},l.a.createElement("circle",{cx:.4*t,cy:i/2,r:"5"}),l.a.createElement("circle",{cx:.5*t,cy:i/2,r:"5"}),l.a.createElement("circle",{cx:.6*t,cy:i/2,r:"5"}))},d=n(31),p=n(81),f=n.n(p),m=n(83),h=n.n(m),v=n(88),b=n(259),O=n(5),g=n(84),y=n(20),E=n.n(y);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},C={xy:[0,0],swiping:!1,eventData:void 0,start:void 0};function T(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function S(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",a),document.addEventListener("mouseup",c));var r=t.touches?t.touches[0]:t,i=T([r.clientX,r.clientY],n.rotationAngle);return j({},e,C,{eventData:{initial:[].concat(i),first:!0},xy:i,start:t.timeStamp||0})}))},a=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var a=t.touches?t.touches[0]:t,r=T([a.clientX,a.clientY],n.rotationAngle),i=r[0],c=r[1],o=e.xy[0]-i,l=e.xy[1]-c,u=Math.abs(o),s=Math.abs(l),d=(t.timeStamp||0)-e.start,p=Math.sqrt(u*u+s*s)/(d||1);if(u<n.delta&&s<n.delta&&!e.swiping)return e;var f=function(e,t,n,a){return e>t?n>0?"Left":"Right":a>0?"Up":"Down"}(u,s,o,l),m=j({},e.eventData,{event:t,absX:u,absY:s,deltaX:o,deltaY:l,velocity:p,dir:f});n.onSwiping&&n.onSwiping(m);var h=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+f])&&(h=!0),h&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),j({},e,{eventData:j({},m,{first:!1}),swiping:!0})}))},r=function(t){e((function(e,n){var a;return e.swiping&&(a=j({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(a),n["onSwiped"+a.dir]&&n["onSwiped"+a.dir](a)),j({},e,C,{eventData:a})}))},i=function(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",c)},c=function(e){i(),r(e)},o=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",a],["touchend",r]];return t.forEach((function(t){var n=t[0],a=t[1];return e.addEventListener(n,a)})),function(){return t.forEach((function(t){var n=t[0],a=t[1];return e.removeEventListener(n,a)}))}}},l={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var a={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),a.cleanUpTouch=null),n.trackTouch&&t&&(a.cleanUpTouch=o(t)),j({},e,{el:t},a)}))}};return t.trackMouse&&(l.onMouseDown=n),[l,o]}function x(e,t,n){var a={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),a.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(a.cleanUpTouch=n(e.el)),j({},e,a)}var k=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=j({},C,{type:"class"}),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.className,n=e.style,a=e.nodeName,r=void 0===a?"div":a,i=e.innerRef,c=e.children,o=e.trackMouse,u=S(this._set,{trackMouse:o}),s=u[0],d=u[1];this.transientState=x(this.transientState,this.props,d);var p=i?function(e){return i(e),s.ref(e)}:s.ref;return l.a.createElement(r,j({},s,{className:t,style:n,ref:p}),c)},a}(l.a.PureComponent);k.propTypes={onSwiped:E.a.func,onSwiping:E.a.func,onSwipedUp:E.a.func,onSwipedRight:E.a.func,onSwipedDown:E.a.func,onSwipedLeft:E.a.func,delta:E.a.number,preventDefaultTouchmoveEvent:E.a.bool,nodeName:E.a.string,trackMouse:E.a.bool,trackTouch:E.a.bool,innerRef:E.a.func,rotationAngle:E.a.number},k.defaultProps=w;var M=n(250),N=Object(o.lazy)((function(){return Promise.all([n.e(2),n.e(0),n.e(10),n.e(29)]).then(n.bind(null,261))}));t.default=l.a.memo((function(e){var t,n=e.stateCode,u=void 0===n?"TT":n,p=e.data,m=e.mapStatistic,h=e.setMapStatistic,y=e.regionHighlighted,E=e.setRegionHighlighted,T=e.anchor,k=(e.setAnchor,e.expandTable),R=Object(b.a)().t,U=Object(o.useRef)(),L=Object(M.a)().width,D=Object(o.useState)(c.g[u].mapType===c.h.COUNTRY?c.i.STATES:c.i.DISTRICTS),P=Object(i.a)(D,2),H=P[0],I=P[1],B=Object(o.useState)((c.g[u].mapType,c.h.COUNTRY,c.j.CHOROPLETH)),A=Object(i.a)(B,2),_=A[0],Y=A[1],X=c.g[u].mapType===c.h.COUNTRY?p:Object(r.a)({},u,p[u]),q=Object(o.useMemo)((function(){var e,t,n=(y.districtName?null===(e=p[y.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[y.districtName]:p[y.stateCode])||{};return Object(v.a)(n,(function(e){e.name=y.districtName||c.r[y.stateCode]}))}),[p,y.stateCode,y.districtName]),z=(Object(o.useCallback)((function(e){switch(e){case c.j.CHOROPLETH:return void Y(c.j.CHOROPLETH);case c.j.BUBBLES:return void Y(c.j.BUBBLES);default:return}}),[Y]),Object(o.useCallback)((function(){var e=H===c.i.DISTRICTS?c.i.STATES:c.i.DISTRICTS;e===c.i.STATES&&E({stateCode:y.stateCode,districtName:null}),I(e)}),[H,E,y.stateCode]),Object(o.useMemo)((function(){return l.a.createElement("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"}))}),[]),Object(o.useMemo)((function(){return l.a.createElement("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),l.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),l.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),l.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"}))}),[]),Object(O.g)()),V=Object(o.useRef)();Object(o.useEffect)((function(){"#MapExplorer"===z.location.hash&&V.current.scrollIntoView()}),[z]);var W=Object(o.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),J=Object(g.c)({total:Object(d.i)(q,"total",m),config:Object(a.a)({tension:250},c.o)}),K=function(e){var t=e.trackMouse,n=l.a.useRef(j({},C,{type:"hook"})),a=l.a.useRef();a.current=j({},w,e);var r=l.a.useMemo((function(){return S((function(e){return n.current=e(n.current,a.current)}),{trackMouse:t})}),[t]),i=r[0],c=r[1];return n.current=x(n.current,a.current,c),i}({onSwipedRight:function(){var e=c.n.indexOf(m),t=e>0?e-1:c.n.length-1;h(c.n[t])},onSwipedLeft:function(){var e=c.n.indexOf(m),t=e<c.n.length-1?e+1:0;h(c.n[t])}}),G=c.s[m];return l.a.createElement("div",{className:f()("MapExplorer",{stickied:"mapexplorer"===T},{hidden:T&&(!k||L<769)&&"mapexplorer"!==T})},l.a.createElement("div",{className:"panel",ref:V},l.a.createElement("div",{className:"panel-left fadeInUp",style:W[0]},l.a.createElement("h2",{className:f()(m)},R(q.name),q.name===c.z&&" [".concat(R(c.r[y.stateCode]),"]")),y.stateCode&&l.a.createElement("h1",{className:f()("district",m)},l.a.createElement(g.a.div,null,J.total.interpolate((function(e){return Object(d.e)(e,"short"!==G.format?G.format:"int",m)}))),l.a.createElement("span",null,R(Object(d.a)(G.displayName)))))),l.a.createElement("div",Object.assign({ref:U,className:"fadeInUp",style:W[3]},K),m&&l.a.createElement(o.Suspense,{fallback:l.a.createElement(s,Object.assign({className:"map-loader"},{width:null===(t=U.current)||void 0===t?void 0:t.clientWidth,statistic:m}))},l.a.createElement(N,Object.assign({mapCode:u,mapView:H,mapViz:_},{data:X},{regionHighlighted:y,setRegionHighlighted:E},{statistic:m})))))}),(function(e,t){var n,a,r,i,c,o,l,u,s,d;return!!h()(e.stateCode,t.stateCode)&&(!!h()(e.regionHighlighted,t.regionHighlighted)&&(!!h()(e.mapStatistic,t.mapStatistic)&&(!!h()(e.anchor,t.anchor)&&(!!h()(e.expandTable,t.expandTable)&&(!!h()(null===(n=e.data)||void 0===n||null===(a=n.TT)||void 0===a||null===(r=a.meta)||void 0===r?void 0:r.last_updated,null===(i=t.data)||void 0===i||null===(c=i.TT)||void 0===c||null===(o=c.meta)||void 0===o?void 0:o.last_updated)&&!!h()(null===(l=e.data)||void 0===l||null===(u=l.TT)||void 0===u?void 0:u.total,null===(s=t.data)||void 0===s||null===(d=s.TT)||void 0===d?void 0:d.total))))))}))},92:function(e,t,n){"use strict";var a=n(0),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,o=e.children,l=e.foregroundColor,u=e.foregroundOpacity,s=e.gradientRatio,d=e.uniqueKey,p=e.interval,f=e.rtl,m=e.speed,h=e.style,v=e.title,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),O=d||Math.random().toString(36).substring(6),g=O+"-diff",y=O+"-animated-diff",E=O+"-aria",j=f?{transform:"scaleX(-1)"}:null,w="0; "+p+"; 1",C=m+"s";return Object(a.createElement)("svg",r({"aria-labelledby":E,role:"img",style:r(r({},h),j)},b),v?Object(a.createElement)("title",{id:E},v):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+g+")",style:{fill:"url("+c+"#"+y+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:g},o),Object(a.createElement)("linearGradient",{id:y},Object(a.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:w,dur:C,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:u},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:w,dur:C,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:w,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(a.createElement)(i,r({},e)):Object(a.createElement)(o,r({},e))},o=function(e){return Object(a.createElement)(c,r({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=5.b900b8d2.chunk.js.map