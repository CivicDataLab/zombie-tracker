/*! For license information please see 24.d86f9343.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24],{144:function(e,n,t){"use strict";var r=t(0),a=t(90),o=["mousedown","touchstart"];n.a=function(e,n,t){void 0===t&&(t=o);var i=Object(r.useRef)(n);Object(r.useEffect)((function(){i.current=n}),[n]),Object(r.useEffect)((function(){for(var n=function(n){var t=e.current;t&&!t.contains(n.target)&&i.current(n)},r=0,o=t;r<o.length;r++){var c=o[r];Object(a.c)(document,c,n)}return function(){for(var e=0,r=t;e<r.length;e++){var o=r[e];Object(a.b)(document,o,n)}}}),[t,e])}},257:function(e,n,t){"use strict";t.r(n);var r=t(97),a=t(134),o=t(81),i=t.n(o),c=t(0),l=t.n(c),u=t(20),s=t.n(u);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function v(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=Object(c.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,a=e.size,o=void 0===a?24:a,i=v(e,["color","size"]);return l.a.createElement("svg",f({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.a.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),l.a.createElement("polyline",{points:"5 12 12 5 19 12"}))}));p.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},p.displayName="ArrowUp";var g=p,d=t(258),b=t(84),h=t(144);n.default=l.a.memo((function(e){var n,t=this,o=e.showLanguageSwitcher,u=e.setShowLanguageSwitcher,s=Object(d.a)().i18n,f=Object.keys(a).includes(null===s||void 0===s?void 0:s.language)?null===s||void 0===s?void 0:s.language:null===s||void 0===s||null===(n=s.options)||void 0===n?void 0:n.fallbackLng[0],v=Object(b.f)(o,null,{from:r.b,enter:r.a,leave:r.b,config:{mass:1,tension:100,friction:15}}),p=Object(c.useRef)();Object(h.a)(p,(function(){u(!1)}));var m=Object(c.useCallback)((function(e){s&&s.changeLanguage(e)}),[s]);return v.map((function(e){var n=e.item,r=e.key,o=e.props;return n?l.a.createElement(b.a.div,{key:r,className:"LanguageSwitcher",style:o,ref:p},l.a.createElement("h3",null,"We speak the following languages"),l.a.createElement("div",{className:"languages"},Object.keys(a).map((function(e){return l.a.createElement("div",{key:e,className:i()("language",{"is-highlighted":f===e}),onClick:m.bind(t,e)},l.a.createElement("span",null,a[e]))}))),l.a.createElement("div",{className:"close-button",onClick:u.bind(t,!1)},l.a.createElement(g,{width:16}))):l.a.createElement(b.a.div,{key:r})}))}))},81:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=24.d86f9343.chunk.js.map