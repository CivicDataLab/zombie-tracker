(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[32,35],{241:function(e,t,n){"use strict";n.r(t);var r=n(34),o=n(20),i=n(89),a=n(13),c=n(0),u=n.n(c),l=n(98),s=function(e){var t=e.width,n=e.statistic,r=window.innerWidth;t||(t=r>769?480:r);var o=(r>769?.9:1)*t/.885,i=42+a.e+o;return u.a.createElement(l.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,backgroundColor:a.r[n].color},u.a.createElement("circle",{cx:.4*t,cy:i/2,r:"5"}),u.a.createElement("circle",{cx:.5*t,cy:i/2,r:"5"}),u.a.createElement("circle",{cx:.6*t,cy:i/2,r:"5"}))},f=n(33),d=n(90),p=n.n(d),h=n(92),v=n.n(h),m=n(95),y=n(295),b=n(5),O=n(94),g=n(21),w=n.n(g);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},S={xy:[0,0],swiping:!1,eventData:void 0,start:void 0};function P(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function C(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",r),document.addEventListener("mouseup",a));var o=t.touches?t.touches[0]:t,i=P([o.clientX,o.clientY],n.rotationAngle);return j({},e,S,{eventData:{initial:[].concat(i),first:!0},xy:i,start:t.timeStamp||0})}))},r=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,o=P([r.clientX,r.clientY],n.rotationAngle),i=o[0],a=o[1],c=e.xy[0]-i,u=e.xy[1]-a,l=Math.abs(c),s=Math.abs(u),f=(t.timeStamp||0)-e.start,d=Math.sqrt(l*l+s*s)/(f||1);if(l<n.delta&&s<n.delta&&!e.swiping)return e;var p=function(e,t,n,r){return e>t?n>0?"Left":"Right":r>0?"Up":"Down"}(l,s,c,u),h=j({},e.eventData,{event:t,absX:l,absY:s,deltaX:c,deltaY:u,velocity:d,dir:p});n.onSwiping&&n.onSwiping(h);var v=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+p])&&(v=!0),v&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),j({},e,{eventData:j({},h,{first:!1}),swiping:!0})}))},o=function(t){e((function(e,n){var r;return e.swiping&&(r=j({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),j({},e,S,{eventData:r})}))},i=function(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)},a=function(e){i(),o(e)},c=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",r],["touchend",o]];return t.forEach((function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)})),function(){return t.forEach((function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)}))}}},u={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=c(t)),j({},e,{el:t},r)}))}};return t.trackMouse&&(u.onMouseDown=n),[u,c]}function T(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),j({},e,r)}var x=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=j({},S,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,o=void 0===r?"div":r,i=e.innerRef,a=e.children,c=e.trackMouse,l=C(this._set,{trackMouse:c}),s=l[0],f=l[1];this.transientState=T(this.transientState,this.props,f);var d=i?function(e){return i(e),s.ref(e)}:s.ref;return u.a.createElement(o,j({},s,{className:t,style:n,ref:d}),a)},r}(u.a.PureComponent);x.propTypes={onSwiped:w.a.func,onSwiping:w.a.func,onSwipedUp:w.a.func,onSwipedRight:w.a.func,onSwipedDown:w.a.func,onSwipedLeft:w.a.func,delta:w.a.number,preventDefaultTouchmoveEvent:w.a.bool,nodeName:w.a.string,trackMouse:w.a.bool,trackTouch:w.a.bool,innerRef:w.a.func,rotationAngle:w.a.number},x.defaultProps=E;var k=n(288),M=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(13),n.e(36)]).then(n.bind(null,297))}));t.default=u.a.memo((function(e){var t,n=e.stateCode,l=void 0===n?"TT":n,d=e.data,h=e.mapStatistic,v=e.setMapStatistic,g=e.regionHighlighted,w=e.setRegionHighlighted,P=e.anchor,x=(e.setAnchor,e.expandTable),A=(Object(y.a)().t,Object(c.useRef)()),D=Object(k.a)().width,R=Object(c.useState)(a.f[l].mapType===a.g.COUNTRY?a.h.STATES:a.h.DISTRICTS),N=Object(i.a)(R,2),U=N[0],L=N[1],_=Object(c.useState)((a.f[l].mapType,a.g.COUNTRY,a.i.CHOROPLETH)),I=Object(i.a)(_,2),H=I[0],B=I[1],z=a.f[l].mapType===a.g.COUNTRY?d:Object(o.a)({},l,d[l]),W=Object(c.useMemo)((function(){var e,t,n=(g.districtName?null===(e=d[g.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[g.districtName]:d[g.stateCode])||{};return Object(m.a)(n,(function(e){e.name=g.districtName||a.q[g.stateCode]}))}),[d,g.stateCode,g.districtName]),F=(Object(c.useCallback)((function(e){switch(e){case a.i.CHOROPLETH:return void B(a.i.CHOROPLETH);case a.i.BUBBLES:return void B(a.i.BUBBLES);default:return}}),[B]),Object(c.useCallback)((function(){var e=U===a.h.DISTRICTS?a.h.STATES:a.h.DISTRICTS;a.h.STATES,L(e)}),[U,w,g.stateCode]),Object(c.useMemo)((function(){return u.a.createElement("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"}))}),[]),Object(c.useMemo)((function(){return u.a.createElement("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),u.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),u.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),u.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),u.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),u.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"}))}),[]),Object(b.g)()),K=Object(c.useRef)();Object(c.useEffect)((function(){"#MapExplorer"===F.location.hash&&K.current.scrollIntoView()}),[F]);var Y=Object(c.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),X=(Object(O.c)({total:Object(f.i)(W,"total",h),config:Object(r.a)({tension:250},a.n)}),function(e){var t=e.trackMouse,n=u.a.useRef(j({},S,{type:"hook"})),r=u.a.useRef();r.current=j({},E,e);var o=u.a.useMemo((function(){return C((function(e){return n.current=e(n.current,r.current)}),{trackMouse:t})}),[t]),i=o[0],a=o[1];return n.current=T(n.current,r.current,a),i}({onSwipedRight:function(){var e=a.m.indexOf(h),t=e>0?e-1:a.m.length-1;v(a.m[t])},onSwipedLeft:function(){var e=a.m.indexOf(h),t=e<a.m.length-1?e+1:0;v(a.m[t])}}));return a.r[h],u.a.createElement("div",{className:p()("MapExplorer",{stickied:"mapexplorer"===P},{hidden:P&&(!x||D<769)&&"mapexplorer"!==P})},u.a.createElement("div",Object.assign({ref:A,className:"fadeInUp",style:Y[3]},X),h&&u.a.createElement(c.Suspense,{fallback:u.a.createElement(s,Object.assign({className:"map-loader"},{width:null===(t=A.current)||void 0===t?void 0:t.clientWidth,statistic:h}))},u.a.createElement(M,Object.assign({mapCode:l,mapView:U,mapViz:H},{data:z},{regionHighlighted:g,setRegionHighlighted:w},{statistic:h})))))}),(function(e,t){var n,r,o,i,a,c,u,l,s,f;return!!v()(e.stateCode,t.stateCode)&&(!!v()(e.regionHighlighted,t.regionHighlighted)&&(!!v()(e.mapStatistic,t.mapStatistic)&&(!!v()(e.anchor,t.anchor)&&(!!v()(e.expandTable,t.expandTable)&&(!!v()(null===(n=e.data)||void 0===n||null===(r=n.TT)||void 0===r||null===(o=r.meta)||void 0===o?void 0:o.last_updated,null===(i=t.data)||void 0===i||null===(a=i.TT)||void 0===a||null===(c=a.meta)||void 0===c?void 0:c.last_updated)&&!!v()(null===(u=e.data)||void 0===u||null===(l=u.TT)||void 0===l?void 0:l.total,null===(s=t.data)||void 0===s||null===(f=s.TT)||void 0===f?void 0:f.total))))))}))},95:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[K]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[F]||!!e.constructor[F]||d(e)||p(e))}function a(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:Y)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function u(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,n){var r=c(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return H&&e instanceof Map}function p(e){return B&&e instanceof Set}function h(e){return e.o||e.t}function v(e){if(Array.isArray(e))return e.slice();var t=X(e);delete t[K];for(var n=Y(t),r=0;r<n.length;r++){var o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function m(e,t){b(e)||o(e)||!i(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=y),Object.freeze(e),t&&a(e,(function(e,t){return m(t,!0)}),!0))}function y(){r(2)}function b(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=q[e];return t||r(19,e),t}function g(){return _}function w(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){E(e),e.p.forEach(P),e.p=null}function E(e){e===_&&(_=e.l)}function S(e){return _={p:[],l:_,h:e,m:!0,_:0}}function P(e){var t=e[K];0===t.i||1===t.i?t.j():t.g=!0}function C(e,t){t._=t.p.length;var n=t.p[0],o=void 0!==e&&e!==n;return t.h.O||O("ES5").S(t,e,o),o?(n[K].P&&(j(t),r(4)),i(e)&&(e=T(t,e),t.l||k(t,e)),t.u&&O("Patches").M(n[K],e,t.u,t.s)):e=T(t,n,[]),j(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function T(e,t,n){if(b(t))return t;var r=t[K];if(!r)return a(t,(function(o,i){return x(e,r,t,o,i,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return k(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=v(r.k):r.o;a(o,(function(t,i){return x(e,r,o,t,i,n)})),k(e,o,!1),n&&e.u&&O("Patches").R(r,n,e.u,e.s)}return r.o}function x(e,t,n,r,a,c){if(o(a)){var l=T(e,a,c&&t&&3!==t.i&&!u(t.D,r)?c.concat(r):void 0);if(s(n,r,l),!o(l))return;e.m=!1}if(i(a)&&!b(a)){if(!e.h.N&&e._<1)return;T(e,a),t&&t.A.l||k(e,a)}}function k(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&m(t,n)}function M(e,t){var n=e[K];return(n?h(n):e)[t]}function A(e){e.P||(e.P=!0,e.l&&A(e.l))}function D(e){e.o||(e.o=v(e.t))}function R(e,t,n){var r=d(t)?O("MapSet").T(t,n):p(t)?O("MapSet").F(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:g(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,i=J;n&&(o=[r],i=V);var a=Proxy.revocable(o,i),c=a.revoke,u=a.proxy;return r.k=u,r.j=c,u}(t,n):O("ES5").J(t,n);return(n?n.A:g()).p.push(r),r}function N(e){return o(e)||r(22,e),function e(t){if(!i(t))return t;var n,r=t[K],o=c(t);if(r){if(!r.P&&(r.i<4||!O("ES5").K(r)))return r.t;r.I=!0,n=U(t,o),r.I=!1}else n=U(t,o);return a(n,(function(t,o){r&&l(r.t,t)===o||s(n,t,e(o))})),3===o?new Set(n):n}(e)}function U(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return v(e)}var L,_,I="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,B="undefined"!=typeof Set,z="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=I?Symbol("immer-nothing"):((L={})["immer-nothing"]=!0,L),F=I?Symbol("immer-draftable"):"__$immer_draftable",K=I?Symbol("immer-state"):"__$immer_state",Y=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),X=Object.getOwnPropertyDescriptors||function(e){var t={};return Y(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},q={},J={get:function(e,t){if(t===K)return e;var n=h(e);if(!u(n,t))return function(e,t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var o,i=Object.getOwnPropertyDescriptor(r,n);if(i)return"value"in i?i.value:null===(o=i.get)||void 0===o?void 0:o.call(e.k);r=Object.getPrototypeOf(r)}}(e,n,t);var r=n[t];return e.I||!i(r)?r:r===M(e.t,t)?(D(e),e.o[t]=R(e.A.h,r,e)):r},has:function(e,t){return t in h(e)},ownKeys:function(e){return Reflect.ownKeys(h(e))},set:function(e,t,n){if(e.D[t]=!0,!e.P){if(f(n,M(h(e),t))&&void 0!==n)return!0;D(e),A(e)}return e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==M(e.t,t)||t in e.t?(e.D[t]=!1,D(e),A(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=h(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},V={};a(J,(function(e,t){V[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),V.deleteProperty=function(e,t){return J.deleteProperty.call(this,e[0],t)},V.set=function(e,t,n){return J.set.call(this,e[0],t,n,e[0])};var $=new(function(){function e(e){this.O=z,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var o=t;t=e;var a=this;return function(e){var n=this;void 0===e&&(e=o);for(var r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];return a.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(i))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),i(e)){var u=S(this),l=R(this,e,void 0),s=!0;try{c=t(l),s=!1}finally{s?j(u):E(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return w(u,n),C(e,u)}),(function(e){throw j(u),e})):(w(u,n),C(c,u))}if(!e||"object"!=typeof e){if((c=t(e))===W)return;return void 0===c&&(c=e),this.N&&m(c,!0),c}r(21,e)},t.produceWithPatches=function(e,t){var n,r,o=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return o.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){i(e)||r(8),o(e)&&(e=N(e));var t=S(this),n=R(this,e,void 0);return n[K].C=!0,E(t),n},t.finishDraft=function(e,t){var n=(e&&e[K]).A;return w(n,t),C(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!z&&r(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=O("Patches").$;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}()),G=$.produce;$.produceWithPatches.bind($),$.setAutoFreeze.bind($),$.setUseProxies.bind($),$.applyPatches.bind($),$.createDraft.bind($),$.finishDraft.bind($);t.a=G},98:function(e,t,n){"use strict";var r=n(0),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,a=e.baseUrl,c=e.children,u=e.foregroundColor,l=e.foregroundOpacity,s=e.gradientRatio,f=e.uniqueKey,d=e.interval,p=e.rtl,h=e.speed,v=e.style,m=e.title,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),b=f||Math.random().toString(36).substring(6),O=b+"-diff",g=b+"-animated-diff",w=b+"-aria",j=p?{transform:"scaleX(-1)"}:null,E="0; "+d+"; 1",S=h+"s";return Object(r.createElement)("svg",o({"aria-labelledby":w,role:"img",style:o(o({},v),j)},y),m?Object(r.createElement)("title",{id:w},m):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+O+")",style:{fill:"url("+a+"#"+g+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:O},c),Object(r.createElement)("linearGradient",{id:g},Object(r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:E,dur:S,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:E,dur:S,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:E,dur:S,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(i,o({},e)):Object(r.createElement)(c,o({},e))},c=function(e){return Object(r.createElement)(a,o({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a}}]);
//# sourceMappingURL=32.0268b38c.chunk.js.map