(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{104:function(t,n,e){"use strict";function r(){}e.d(n,"a",(function(){return r}))},115:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(94),i=e(90),o=Symbol("implicit");function a(){var t=new Map,n=[],e=[],c=o;function u(r){var i=r+"",a=t.get(i);if(!a){if(c!==o)return c;t.set(i,a=n.push(r))}return e[(a-1)%e.length]}return u.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;var i,o=Object(r.a)(e);try{for(o.s();!(i=o.n()).done;){var a=i.value,c=a+"";t.has(c)||t.set(c,n.push(a))}}catch(f){o.e(f)}finally{o.f()}return u},u.range=function(t){return arguments.length?(e=Array.from(t),u):e.slice()},u.unknown=function(t){return arguments.length?(c=t,u):c},u.copy=function(){return a(n,e).unknown(c)},i.b.apply(u,arguments),u}},119:function(t,n,e){"use strict";n.a=function(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}},138:function(t,n,e){t.exports=e(177)},139:function(t,n,e){"use strict";function r(t,n){t&&o.hasOwnProperty(t.type)&&o[t.type](t,n)}var i={Feature:function(t,n){r(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,i=-1,o=e.length;++i<o;)r(e[i].geometry,n)}},o={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){a(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)a(e[r],n,0)},Polygon:function(t,n){c(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)c(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,i=-1,o=e.length;++i<o;)r(e[i],n)}};function a(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function c(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)a(t[e],n,1);n.polygonEnd()}n.a=function(t,n){t&&i.hasOwnProperty(t.type)?i[t.type](t,n):r(t,n)}},140:function(t,n,e){"use strict";var r=e(104),i=1/0,o=i,a=-i,c=a,u={point:function(t,n){t<i&&(i=t);t>a&&(a=t);n<o&&(o=n);n>c&&(c=n)},lineStart:r.a,lineEnd:r.a,polygonStart:r.a,polygonEnd:r.a,result:function(){var t=[[i,o],[a,c]];return a=c=-(o=i=1/0),t}};n.a=u},141:function(t,n,e){"use strict";n.a=function(t){return t}},168:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(81),i=e(169),o=e(90),a=e(115);function c(){var t,n,e=Object(a.a)().unknown(void 0),u=e.domain,f=e.range,s=0,l=1,h=!1,d=0,p=0,v=.5;function b(){var e=u().length,r=l<s,o=r?l:s,a=r?s:l;t=(a-o)/Math.max(1,e-d+2*p),h&&(t=Math.floor(t)),o+=(a-o-t*(e-d))*v,n=t*(1-d),h&&(o=Math.round(o),n=Math.round(n));var c=Object(i.a)(e).map((function(n){return o+t*n}));return f(r?c.reverse():c)}return delete e.unknown,e.domain=function(t){return arguments.length?(u(t),b()):u()},e.range=function(t){var n,e;return arguments.length?(n=t,e=Object(r.a)(n,2),s=e[0],l=e[1],s=+s,l=+l,b()):[s,l]},e.rangeRound=function(t){var n,e;return n=t,e=Object(r.a)(n,2),s=e[0],l=e[1],s=+s,l=+l,h=!0,b()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(h=!!t,b()):h},e.padding=function(t){return arguments.length?(d=Math.min(1,p=+t),b()):d},e.paddingInner=function(t){return arguments.length?(d=Math.min(1,t),b()):d},e.paddingOuter=function(t){return arguments.length?(p=+t,b()):p},e.align=function(t){return arguments.length?(v=Math.max(0,Math.min(1,t)),b()):v},e.copy=function(){return c(u(),[s,l]).round(h).paddingInner(d).paddingOuter(p).align(v)},o.b.apply(b(),arguments)}},169:function(t,n,e){"use strict";n.a=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}},177:function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,n,e,r){var i=n&&n.prototype instanceof s?n:s,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=function(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return j()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=m(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=u(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,a),o}function u(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var f={};function s(){}function l(){}function h(){}var d={};d[i]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(M([])));v&&v!==n&&e.call(v,i)&&(d=v);var b=h.prototype=s.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function y(t,n){var r;this._invoke=function(i,o){function a(){return new n((function(r,a){!function r(i,o,a,c){var f=u(t[i],t,o);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"===typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(f.arg)}(i,o,r,a)}))}return r=r?r.then(a,a):a()}}function m(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,m(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function w(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function x(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function M(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return l.prototype=b.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===l||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new y(c(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),b[a]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),u=e.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;x(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:M(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},178:function(t,n,e){"use strict";function r(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(f){return void e(f)}c.done?n(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var a=t.apply(n,e);function c(t){r(a,i,o,c,u,"next",t)}function u(t){r(a,i,o,c,u,"throw",t)}c(void 0)}))}}e.d(n,"a",(function(){return i}))},179:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return l}));var r=e(121),i=e(99),o=e(90);function a(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function c(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function u(t){return t<0?-t*t:t*t}function f(t){var n=t(i.c,i.c),e=1;function o(){return 1===e?t(i.c,i.c):.5===e?t(c,u):t(a(e),a(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,o()):e},Object(r.b)(n)}function s(){var t=f(Object(i.d)());return t.copy=function(){return Object(i.a)(t,s()).exponent(t.exponent())},o.b.apply(t,arguments),t}function l(){return s.apply(null,arguments).exponent(.5)}},195:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return f}));var r=function(t){return t},i=function(t){if(null==t)return r;var n,e,i=t.scale[0],o=t.scale[1],a=t.translate[0],c=t.translate[1];return function(t,r){r||(n=e=0);var u=2,f=t.length,s=new Array(f);for(s[0]=(n+=t[0])*i+a,s[1]=(e+=t[1])*o+c;u<f;)s[u]=t[u],++u;return s}},o=function(t,n){return"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map((function(n){return a(t,n)}))}:a(t,n)};function a(t,n){var e=n.id,r=n.bbox,i=null==n.properties?{}:n.properties,o=c(t,n);return null==e&&null==r?{type:"Feature",properties:i,geometry:o}:null==r?{type:"Feature",id:e,properties:i,geometry:o}:{type:"Feature",id:e,bbox:r,properties:i,geometry:o}}function c(t,n){var e=i(t.transform),r=t.arcs;function o(t,n){n.length&&n.pop();for(var i=r[t<0?~t:t],o=0,a=i.length;o<a;++o)n.push(e(i[o],o));t<0&&function(t,n){for(var e,r=t.length,i=r-n;i<--r;)e=t[i],t[i++]=t[r],t[r]=e}(n,a)}function a(t){return e(t)}function c(t){for(var n=[],e=0,r=t.length;e<r;++e)o(t[e],n);return n.length<2&&n.push(n[0]),n}function u(t){for(var n=c(t);n.length<4;)n.push(n[0]);return n}function f(t){return t.map(u)}return function t(n){var e,r=n.type;switch(r){case"GeometryCollection":return{type:r,geometries:n.geometries.map(t)};case"Point":e=a(n.coordinates);break;case"MultiPoint":e=n.coordinates.map(a);break;case"LineString":e=c(n.arcs);break;case"MultiLineString":e=n.arcs.map(c);break;case"Polygon":e=f(n.arcs);break;case"MultiPolygon":e=n.arcs.map(f);break;default:return null}return{type:r,coordinates:e}}(n)}var u=function(t,n){var e={},r={},i={},o=[],a=-1;function c(t,n){for(var r in t){var i=t[r];delete n[i.start],delete i.start,delete i.end,i.forEach((function(t){e[t<0?~t:t]=1})),o.push(i)}}return n.forEach((function(e,r){var i,o=t.arcs[e<0?~e:e];o.length<3&&!o[1][0]&&!o[1][1]&&(i=n[++a],n[a]=e,n[r]=i)})),n.forEach((function(n){var e,o,a=function(n){var e,r=t.arcs[n<0?~n:n],i=r[0];t.transform?(e=[0,0],r.forEach((function(t){e[0]+=t[0],e[1]+=t[1]}))):e=r[r.length-1];return n<0?[e,i]:[i,e]}(n),c=a[0],u=a[1];if(e=i[c])if(delete i[e.end],e.push(n),e.end=u,o=r[u]){delete r[o.start];var f=o===e?e:e.concat(o);r[f.start=e.start]=i[f.end=o.end]=f}else r[e.start]=i[e.end]=e;else if(e=r[u])if(delete r[e.start],e.unshift(n),e.start=c,o=i[c]){delete i[o.end];var s=o===e?e:o.concat(e);r[s.start=o.start]=i[s.end=e.end]=s}else r[e.start]=i[e.end]=e;else r[(e=[n]).start=c]=i[e.end=u]=e})),c(i,r),c(r,i),n.forEach((function(t){e[t<0?~t:t]||o.push([t])})),o},f=function(t){return c(t,s.apply(this,arguments))};function s(t,n,e){var r,i,o;if(arguments.length>1)r=l(t,n,e);else for(i=0,r=new Array(o=t.arcs.length);i<o;++i)r[i]=i;return{type:"MultiLineString",arcs:u(t,r)}}function l(t,n,e){var r,i=[],o=[];function a(t){var n=t<0?~t:t;(o[n]||(o[n]=[])).push({i:t,g:r})}function c(t){t.forEach(a)}function u(t){t.forEach(c)}return function t(n){switch(r=n,n.type){case"GeometryCollection":n.geometries.forEach(t);break;case"LineString":c(n.arcs);break;case"MultiLineString":case"Polygon":u(n.arcs);break;case"MultiPolygon":!function(t){t.forEach(u)}(n.arcs)}}(n),o.forEach(null==e?function(t){i.push(t[0].i)}:function(t){e(t[0].g,t[t.length-1].g)&&i.push(t[0].i)}),i}var h=new ArrayBuffer(16);new Float64Array(h),new Uint32Array(h);Math.PI,Math.abs,Math.atan2,Math.cos,Math.sin},221:function(t,n,e){"use strict";n.a=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e}},222:function(t,n,e){"use strict";var r=e(97),i=e(98),o=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r.a);n.a=Object(i.a)(o)},223:function(t,n,e){"use strict";var r=e(97),i=e(98),o=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r.a);n.a=Object(i.a)(o)},224:function(t,n,e){"use strict";var r=e(97),i=e(98),o=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r.a);n.a=Object(i.a)(o)},225:function(t,n,e){"use strict";var r=e(97),i=e(98),o=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r.a);n.a=Object(i.a)(o)},226:function(t,n,e){"use strict";var r=e(97),i=e(98),o=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r.a);n.a=Object(i.a)(o)},227:function(t,n,e){"use strict";var r=e(97),i=e(98),o=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r.a);n.a=Object(i.a)(o)},228:function(t,n,e){"use strict";function r(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);if(204!==t.status&&205!==t.status)return t.json()}n.a=function(t,n){return fetch(t,n).then(r)}},232:function(t,n,e){"use strict";var r=e(93),i=e(104);function o(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}var a=function(t,n,e,i,a){var u,f,s=[],l=[];if(t.forEach((function(t){if(!((n=t.length-1)<=0)){var n,e,i,c,f=t[0],h=t[n];if(i=f,c=h,Object(r.a)(i[0]-c[0])<r.d&&Object(r.a)(i[1]-c[1])<r.d){if(!f[2]&&!h[2]){for(a.lineStart(),u=0;u<n;++u)a.point((f=t[u])[0],f[1]);return void a.lineEnd()}h[0]+=2*r.d}s.push(e=new o(f,t,null,!0)),l.push(e.o=new o(f,null,e,!1)),s.push(e=new o(h,t,null,!1)),l.push(e.o=new o(h,null,e,!0))}})),s.length){for(l.sort(n),c(s),c(l),u=0,f=l.length;u<f;++u)l[u].e=e=!e;for(var h,d,p=s[0];;){for(var v=p,b=!0;v.v;)if((v=v.n)===p)return;h=v.z,a.lineStart();do{if(v.v=v.o.v=!0,v.e){if(b)for(u=0,f=h.length;u<f;++u)a.point((d=h[u])[0],d[1]);else i(v.x,v.n.x,1,a);v=v.n}else{if(b)for(h=v.p.z,u=h.length-1;u>=0;--u)a.point((d=h[u])[0],d[1]);else i(v.x,v.p.x,-1,a);v=v.p}h=(v=v.o).z,b=!b}while(!v.v);a.lineEnd()}}};function c(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}var u=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN};var f=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return u(n(t),e)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}(u);f.right,f.left;var s=Array.prototype;s.slice,s.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function l(t,n,e,o){function c(r,i){return t<=r&&r<=e&&n<=i&&i<=o}function u(r,i,a,c){var u=0,s=0;if(null==r||(u=f(r,a))!==(s=f(i,a))||l(r,i)<0^a>0)do{c.point(0===u||3===u?t:e,u>1?o:n)}while((u=(u+a+4)%4)!==s);else c.point(i[0],i[1])}function f(i,o){return Object(r.a)(i[0]-t)<r.d?o>0?0:3:Object(r.a)(i[0]-e)<r.d?o>0?2:1:Object(r.a)(i[1]-n)<r.d?o>0?1:0:o>0?3:2}function s(t,n){return l(t.x,n.x)}function l(t,n){var e=f(t,1),r=f(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(r){var f,l,h,d,p,v,b,g,y,m,w,x=r,E=function(){var t,n=[];return{point:function(n,e,r){t.push([n,e,r])},lineStart:function(){n.push(t=[])},lineEnd:i.a,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}(),M={point:j,lineStart:function(){M.point=O,l&&l.push(h=[]);m=!0,y=!1,b=g=NaN},lineEnd:function(){f&&(O(d,p),v&&y&&E.rejoin(),f.push(E.result()));M.point=j,y&&x.lineEnd()},polygonStart:function(){x=E,f=[],l=[],w=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,r=l.length;e<r;++e)for(var i,a,c=l[e],u=1,f=c.length,s=c[0],h=s[0],d=s[1];u<f;++u)i=h,a=d,s=c[u],h=s[0],d=s[1],a<=o?d>o&&(h-i)*(o-a)>(d-a)*(t-i)&&++n:d<=o&&(h-i)*(o-a)<(d-a)*(t-i)&&--n;return n}(),e=w&&n,i=(f=function(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}(f)).length;(e||i)&&(r.polygonStart(),e&&(r.lineStart(),u(null,null,1,r),r.lineEnd()),i&&a(f,s,n,u,r),r.polygonEnd());x=r,f=l=h=null}};function j(t,n){c(t,n)&&x.point(t,n)}function O(r,i){var a=c(r,i);if(l&&h.push([r,i]),m)d=r,p=i,v=a,m=!1,a&&(x.lineStart(),x.point(r,i));else if(a&&y)x.point(r,i);else{var u=[b=Math.max(-1e9,Math.min(1e9,b)),g=Math.max(-1e9,Math.min(1e9,g))],f=[r=Math.max(-1e9,Math.min(1e9,r)),i=Math.max(-1e9,Math.min(1e9,i))];!function(t,n,e,r,i,o){var a,c=t[0],u=t[1],f=0,s=1,l=n[0]-c,h=n[1]-u;if(a=e-c,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-c,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-u,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-u,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=c+f*l,t[1]=u+f*h),s<1&&(n[0]=c+s*l,n[1]=u+s*h),!0}}}}}(u,f,t,n,e,o)?a&&(x.lineStart(),x.point(r,i),w=!1):(y||(x.lineStart(),x.point(u[0],u[1])),x.point(f[0],f[1]),a||x.lineEnd(),w=!1)}b=r,g=i,y=a}return M}}var h=e(141);function d(t){return function(n){var e=new p;for(var r in t)e[r]=t[r];return e.stream=n,e}}function p(){}p.prototype={constructor:p,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var v=e(139),b=e(140);function g(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Object(v.a)(e,t.stream(b.a)),n(b.a.result()),null!=r&&t.clipExtent(r),t}function y(t,n,e){return g(t,(function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,c=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,c])}),e)}n.a=function(){var t,n,e,i,o,a,c,u=1,f=0,s=0,p=1,v=1,b=0,m=null,w=1,x=1,E=d({point:function(t,n){var e=O([t,n]);this.stream.point(e[0],e[1])}}),M=h.a;function j(){return w=u*p,x=u*v,a=c=null,O}function O(e){var r=e[0]*w,i=e[1]*x;if(b){var o=i*t-r*n;r=r*t+i*n,i=o}return[r+f,i+s]}return O.invert=function(e){var r=e[0]-f,i=e[1]-s;if(b){var o=i*t+r*n;r=r*t-i*n,i=o}return[r/w,i/x]},O.stream=function(t){return a&&c===t?a:a=E(M(c=t))},O.postclip=function(t){return arguments.length?(M=t,m=e=i=o=null,j()):M},O.clipExtent=function(t){return arguments.length?(M=null==t?(m=e=i=o=null,h.a):l(m=+t[0][0],e=+t[0][1],i=+t[1][0],o=+t[1][1]),j()):null==m?null:[[m,e],[i,o]]},O.scale=function(t){return arguments.length?(u=+t,j()):u},O.translate=function(t){return arguments.length?(f=+t[0],s=+t[1],j()):[f,s]},O.angle=function(e){return arguments.length?(b=e%360*r.e,n=Object(r.f)(b),t=Object(r.b)(b),j()):b*r.c},O.reflectX=function(t){return arguments.length?(p=t?-1:1,j()):p<0},O.reflectY=function(t){return arguments.length?(v=t?-1:1,j()):v<0},O.fitExtent=function(t,n){return y(O,t,n)},O.fitSize=function(t,n){return function(t,n,e){return y(t,[[0,0],n],e)}(O,t,n)},O.fitWidth=function(t,n){return function(t,n,e){return g(t,(function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])}),e)}(O,t,n)},O.fitHeight=function(t,n){return function(t,n,e){return g(t,(function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])}),e)}(O,t,n)},O}},235:function(t,n,e){"use strict";var r=e(141),i=e(139),o=function(){return new a};function a(){this.reset()}a.prototype={constructor:a,reset:function(){this.s=this.t=0},add:function(t){u(c,t,this.t),u(this,c.s,this.s),this.s?this.t+=c.t:this.s=c.t},valueOf:function(){return this.s}};var c=new a;function u(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var f,s,l,h,d=e(93),p=e(104),v=o(),b=o(),g={point:p.a,lineStart:p.a,lineEnd:p.a,polygonStart:function(){g.lineStart=y,g.lineEnd=x},polygonEnd:function(){g.lineStart=g.lineEnd=g.point=p.a,v.add(Object(d.a)(b)),b.reset()},result:function(){var t=v/2;return v.reset(),t}};function y(){g.point=m}function m(t,n){g.point=w,f=l=t,s=h=n}function w(t,n){b.add(h*t-l*n),l=t,h=n}function x(){w(f,s)}var E,M,j,O,_=g,S=e(140),k=0,L=0,N=0,P=0,A=0,F=0,G=0,R=0,T=0,q={point:I,lineStart:z,lineEnd:J,polygonStart:function(){q.lineStart=B,q.lineEnd=H},polygonEnd:function(){q.point=I,q.lineStart=z,q.lineEnd=J},result:function(){var t=T?[G/T,R/T]:F?[P/F,A/F]:N?[k/N,L/N]:[NaN,NaN];return k=L=N=P=A=F=G=R=T=0,t}};function I(t,n){k+=t,L+=n,++N}function z(){q.point=C}function C(t,n){q.point=Y,I(j=t,O=n)}function Y(t,n){var e=t-j,r=n-O,i=Object(d.g)(e*e+r*r);P+=i*(j+t)/2,A+=i*(O+n)/2,F+=i,I(j=t,O=n)}function J(){q.point=I}function B(){q.point=U}function H(){W(E,M)}function U(t,n){q.point=W,I(E=j=t,M=O=n)}function W(t,n){var e=t-j,r=n-O,i=Object(d.g)(e*e+r*r);P+=i*(j+t)/2,A+=i*(O+n)/2,F+=i,G+=(i=O*t-j*n)*(j+t),R+=i*(O+n),T+=3*i,I(j=t,O=n)}var X=q;function Z(t){this._context=t}Z.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,d.h)}},result:p.a};var D,K,Q,V,$,tt=o(),nt={point:p.a,lineStart:function(){nt.point=et},lineEnd:function(){D&&rt(K,Q),nt.point=p.a},polygonStart:function(){D=!0},polygonEnd:function(){D=null},result:function(){var t=+tt;return tt.reset(),t}};function et(t,n){nt.point=rt,K=V=t,Q=$=n}function rt(t,n){V-=t,$-=n,tt.add(Object(d.g)(V*V+$*$)),V=t,$=n}var it=nt;function ot(){this._string=[]}function at(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}ot.prototype={_radius:4.5,_circle:at(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=at(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}};n.a=function(t,n){var e,o,a=4.5;function c(t){return t&&("function"===typeof a&&o.pointRadius(+a.apply(this,arguments)),Object(i.a)(t,e(o))),o.result()}return c.area=function(t){return Object(i.a)(t,e(_)),_.result()},c.measure=function(t){return Object(i.a)(t,e(it)),it.result()},c.bounds=function(t){return Object(i.a)(t,e(S.a)),S.a.result()},c.centroid=function(t){return Object(i.a)(t,e(X)),X.result()},c.projection=function(n){return arguments.length?(e=null==n?(t=null,r.a):(t=n).stream,c):t},c.context=function(t){return arguments.length?(o=null==t?(n=null,new ot):new Z(n=t),"function"!==typeof a&&o.pointRadius(a),c):n},c.pointRadius=function(t){return arguments.length?(a="function"===typeof t?t:(o.pointRadius(+t),+t),c):a},c.projection(t).context(n)}},248:function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e(172),i=e(134),o=e(117);function a(t,n,e){var r=t[n];t[n]=t[e],t[e]=r}var c=e(138),u=e.n(c),f=e(94),s=u.a.mark(l);function l(t,n){var e,r,i,o,a,c,l;return u.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(void 0!==n){u.next=21;break}e=Object(f.a)(t),u.prev=2,e.s();case 4:if((r=e.n()).done){u.next=11;break}if(!(null!=(i=r.value)&&(i=+i)>=i)){u.next=9;break}return u.next=9,i;case 9:u.next=4;break;case 11:u.next=16;break;case 13:u.prev=13,u.t0=u.catch(2),e.e(u.t0);case 16:return u.prev=16,e.f(),u.finish(16);case 19:u.next=40;break;case 21:o=-1,a=Object(f.a)(t),u.prev=23,a.s();case 25:if((c=a.n()).done){u.next=32;break}if(l=c.value,!(null!=(l=n(l,++o,t))&&(l=+l)>=l)){u.next=30;break}return u.next=30,l;case 30:u.next=25;break;case 32:u.next=37;break;case 34:u.prev=34,u.t1=u.catch(23),a.e(u.t1);case 37:return u.prev=37,a.f(),u.finish(37);case 40:case"end":return u.stop()}}),s,null,[[2,13,16,19],[23,34,37,40]])}function h(t,n,e){if(c=(t=Float64Array.from(l(t,e))).length){if((n=+n)<=0||c<2)return Object(i.a)(t);if(n>=1)return Object(r.a)(t);var c,u=(c-1)*n,f=Math.floor(u),s=Object(r.a)(function t(n,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length-1,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.a;i>r;){if(i-r>600){var u=i-r+1,f=e-r+1,s=Math.log(u),l=.5*Math.exp(2*s/3),h=.5*Math.sqrt(s*l*(u-l)/u)*(f-u/2<0?-1:1),d=Math.max(r,Math.floor(e-f*l/u+h)),p=Math.min(i,Math.floor(e+(u-f)*l/u+h));t(n,e,d,p,c)}var v=n[e],b=r,g=i;for(a(n,r,e),c(n[i],v)>0&&a(n,r,i);b<g;){for(a(n,b,g),++b,--g;c(n[b],v)<0;)++b;for(;c(n[g],v)>0;)--g}0===c(n[r],v)?a(n,r,g):a(n,++g,i),g<=e&&(r=g+1),e<=g&&(i=g-1)}return n}(t,f).subarray(0,f+1));return s+(Object(i.a)(t.subarray(f+1))-s)*(u-f)}}},254:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e(81),i=e(240),o=e(217),a=e(99),c=e(90),u=e(121);e(176);e(179);function f(){var t,n,e,c,u,f=0,s=1,l=a.c,h=!1;function d(n){return isNaN(n=+n)?u:l(0===e?.5:(n=(c(n)-t)*e,h?Math.max(0,Math.min(1,n)):n))}function p(t){return function(n){var e,i,o,a;return arguments.length?(e=n,o=(i=Object(r.a)(e,2))[0],a=i[1],l=t(o,a),d):[l(0),l(1)]}}return d.domain=function(i){var o,a;return arguments.length?(o=i,a=Object(r.a)(o,2),f=a[0],s=a[1],t=c(f=+f),n=c(s=+s),e=t===n?0:1/(n-t),d):[f,s]},d.clamp=function(t){return arguments.length?(h=!!t,d):h},d.interpolator=function(t){return arguments.length?(l=t,d):l},d.range=p(i.a),d.rangeRound=p(o.a),d.unknown=function(t){return arguments.length?(u=t,d):u},function(r){return c=r,t=r(f),n=r(s),e=t===n?0:1/(n-t),d}}function s(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function l(){var t=Object(u.b)(f()(a.c));return t.copy=function(){return s(t,l())},c.a.apply(t,arguments)}},93:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"h",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"e",(function(){return c})),e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return f})),e.d(n,"f",(function(){return s})),e.d(n,"g",(function(){return l}));var r=1e-6,i=Math.PI,o=2*i,a=180/i,c=i/180,u=Math.abs,f=(Math.atan,Math.atan2,Math.cos),s=(Math.ceil,Math.exp,Math.floor,Math.log,Math.pow,Math.sin),l=(Math.sign,Math.sqrt);Math.tan},97:function(t,n,e){"use strict";n.a=function(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}},98:function(t,n,e){"use strict";var r=e(198);n.a=function(t){return Object(r.b)(t[t.length-1])}}}]);
//# sourceMappingURL=10.fc01ef30.chunk.js.map