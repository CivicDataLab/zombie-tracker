(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[35],{236:function(e,t,r){"use strict";r.r(t);var a=r(127),i=r(89),n=r(0),c=r.n(n),o=r(99),l=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},s=r(13),d=r(118),u=r(33),m=r(94),b=r(90),f=r.n(b),O=r(54),p=r(115),h=r(93),g=r.n(h),j=r(289),v=r(256),y=r(255),E=Object(n.lazy)((function(){return Promise.all([r.e(2),r.e(24)]).then(r.bind(null,282))}));t.default=c.a.memo((function(e){var t=e.stateCode,r=e.timeseries,o=e.date,b=e.regionHighlighted,h=e.setRegionHighlighted,g=e.anchor,C=e.setAnchor,N=e.expandTable,k=Object(j.a)().t,x=Object(v.a)("timeseriesLookback",s.v.BEGINNING),w=Object(i.a)(x,2),T=w[0],S=(w[1],Object(y.a)("chartType","total")),H=Object(i.a)(S,2),P=H[0],M=(H[1],Object(n.useRef)()),q=Object(d.a)(M,{once:!0}),R=Object(n.useMemo)((function(){var e;return(null===r||void 0===r||null===(e=r[b.stateCode])||void 0===e?void 0:e.districts)?{stateCode:b.stateCode,districtName:b.districtName}:{stateCode:b.stateCode,districtName:null}}),[r,b.stateCode,b.districtName]),J=Object(n.useMemo)((function(){var e,t,a,i;return R.districtName?null===r||void 0===r||null===(e=r[R.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[R.districtName])||void 0===a?void 0:a.dates:null===r||void 0===r||null===(i=r[R.stateCode])||void 0===i?void 0:i.dates}),[r,R.stateCode,R.districtName]),I=Object(n.useMemo)((function(){var e=Object.keys(r||{}).filter((function(e){return e!==t})).sort((function(e,t){return s.q[e].localeCompare(s.q[t])})).map((function(e){return{stateCode:e,districtName:null}})),i=Object.keys(r||{}).reduce((function(e,t){var i;return[].concat(Object(a.a)(e),Object(a.a)(Object.keys((null===r||void 0===r||null===(i=r[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,r){return[].concat(Object(a.a)(e),[{stateCode:t,districtName:r}])}),[])))}),[]);return[{stateCode:t,districtName:null}].concat(Object(a.a)(e),Object(a.a)(i))}),[r,t]),U=Object(n.useMemo)((function(){return I.find((function(e){return e.stateCode===b.stateCode&&e.districtName===b.districtName}))?I:[].concat(Object(a.a)(I),[{stateCode:b.stateCode,districtName:b.districtName}])}),[b.stateCode,b.districtName,I]),B=Object(n.useMemo)((function(){var e=o||Object(u.h)(),t=Object.keys(J||{}).filter((function(t){return t<=e}));if(T===s.v.TWO_WEEKS){var r=Object(O.a)(Object(p.a)(Object(u.k)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=r}))}if(T===s.v.MONTH){var a=Object(O.a)(Object(p.a)(Object(u.k)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=a}))}return t}),[J,o,T]),G=Object(n.useCallback)((function(e){var t=e.target;h(JSON.parse(t.value))}),[h]),K=Object(n.useCallback)((function(){h({stateCode:t,districtName:null})}),[t,h]);return c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===g},{expanded:N}),style:{display:"mapexplorer"===g?"none":""},ref:M},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===g}),onClick:C&&C.bind(this,"timeseries"===g?null:"timeseries")},c.a.createElement(m.g,null)),c.a.createElement("h1",null,k("Spread Trends"))),U&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(R),onChange:G},U.filter((function(e){return s.q[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?k(e.districtName):k(s.q[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:K},c.a.createElement(m.h,null))),q&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(l,null)},c.a.createElement(E,Object.assign({timeseries:J,regionHighlighted:R},{dates:B,chartType:P}))),!q&&c.a.createElement("div",{style:{height:"50rem"}}))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&(!!g()(t.anchor,e.anchor)&&!!g()(t.expandTable,e.expandTable))))))}))},99:function(e,t,r){"use strict";var a=r(0),i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,r=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,o=e.children,l=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,b=e.rtl,f=e.speed,O=e.style,p=e.title,h=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(r[a[i]]=e[a[i]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),j=g+"-diff",v=g+"-animated-diff",y=g+"-aria",E=b?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",N=f+"s";return Object(a.createElement)("svg",i({"aria-labelledby":y,role:"img",style:i(i({},O),E)},h),p?Object(a.createElement)("title",{id:y},p):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+j+")",style:{fill:"url("+c+"#"+v+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:j},o),Object(a.createElement)("linearGradient",{id:v},Object(a.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:n},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:n},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(a.createElement)(n,i({},e)):Object(a.createElement)(o,i({},e))},o=function(e){return Object(a.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=35.b7d24ffc.chunk.js.map