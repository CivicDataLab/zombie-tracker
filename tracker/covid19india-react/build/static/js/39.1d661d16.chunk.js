(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[39],{165:function(e,t,a){"use strict";var n=a(0),c=a(105),r=["mousedown","touchstart"];t.a=function(e,t,a){void 0===a&&(a=r);var o=Object(n.useRef)(t);Object(n.useEffect)((function(){o.current=t}),[t]),Object(n.useEffect)((function(){for(var t=function(t){var a=e.current;a&&!a.contains(t.target)&&o.current(t)},n=0,r=a;n<r.length;n++){var s=r[n];Object(c.c)(document,s,t)}return function(){for(var e=0,n=a;e<n.length;e++){var r=n[e];Object(c.b)(document,r,t)}}}),[a,e])}},181:function(e,t,a){"use strict";a.r(t);var n=a(89),c=a(13),r=a(0),o=a.n(r),s=a(300),i=a(5),l=a(94),u=a(165),d=function(e){var t=e.stateCode,a=e.trail,d=Object(r.useState)(!1),f=Object(n.a)(d,2),m=f[0],p=f[1],v=Object(r.useRef)(),b=Object(i.g)(),j=Object(s.a)().t;Object(u.a)(v,(function(){p(!1)}));var O=Object(l.f)(m,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),y=Object(r.useCallback)((function(e){p(!1),b.push("/state/".concat(e))}),[b]);return o.a.createElement("div",{className:"StateDropdown",ref:v},o.a.createElement(l.a.h1,{className:"state-name fadeInUp",style:a,onClick:p.bind(void 0,!m)},j(c.r[t])),O.map((function(e){var a=e.item,n=e.key,r=e.props;return a?o.a.createElement(l.a.div,{className:"dropdown",style:r,key:n},Object.keys(c.f).filter((function(e){return"TT"!==e&&e!==t})).sort((function(e,t){return c.r[e].localeCompare(c.r[t])})).map((function(e){return o.a.createElement("h1",{key:e,className:"item",onClick:y.bind(void 0,e)},j(c.r[e]))}))):o.a.createElement(l.a.div,{key:t,style:r})})),m&&o.a.createElement("div",{className:"backdrop"}))},f=a(33);t.default=o.a.memo((function(e){var t,a=e.data,n=e.stateCode,i=(Object(s.a)().t,Object(r.useMemo)((function(){var e=[];return[0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(250*a,"ms")}),null})),e}),[]));return Object(l.c)({total:Object(f.i)(a,"total","tested"),config:c.o}),o.a.createElement("div",{className:"StateHeader"},o.a.createElement("div",{className:"header-left"},o.a.createElement(d,Object.assign({stateCode:n},{hyperlink:!1,trail:i[0]})),(null===a||void 0===a||null===(t=a.meta)||void 0===t?void 0:t.last_updated)&&o.a.createElement("h5",{className:"fadeInUp",style:i[1]},"Last Updated on ".concat(Object(f.c)(a.meta.last_updated,"dd MMM, p")," IST"))))}))}}]);
//# sourceMappingURL=39.1d661d16.chunk.js.map