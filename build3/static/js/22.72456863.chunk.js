(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22,41],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(4),r=a(2),i=a(1);function c(e,t){Object(i.a)(2,arguments);var a=Object(r.a)(e),c=Object(n.a)(t);if(isNaN(c))return new Date(NaN);if(!c)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+c+1,0);var l=s.getDate();return o>=l?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(4),r=a(101),i=a(1);function c(e,t){Object(i.a)(2,arguments);var a=Object(n.a)(t);return Object(r.a)(e,-a)}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(71),r=a(108),i=a(2),c=a(1),o=a(4);function s(e,t){if(Object(c.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(o.a)(t.years):0,s="months"in t?Object(o.a)(t.months):0,l="weeks"in t?Object(o.a)(t.weeks):0,d="days"in t?Object(o.a)(t.days):0,u="hours"in t?Object(o.a)(t.hours):0,m="minutes"in t?Object(o.a)(t.minutes):0,b="seconds"in t?Object(o.a)(t.seconds):0,f=Object(r.a)(Object(i.a)(e),s+12*a),O=Object(n.a)(f,d+7*l),j=m+60*u,h=b+60*j,p=1e3*h,g=new Date(O.getTime()-p);return g}},245:function(e,t,a){"use strict";a.r(t);var n=a(140),r=a(89),i=a(0),c=a.n(i),o=a(98),s=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},l=a(13),d=a(119),u=a(33),m=a(93),b=a(90),f=a.n(b),O=a(54),j=a(123),h=a(92),p=a.n(h),g=a(300),y=a(265),v=a(264),E=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(25),a.e(40)]).then(a.bind(null,270))})),N=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,271))})),C=Object(i.lazy)((function(){return a.e(18).then(a.bind(null,272))})),k=Object(i.lazy)((function(){return Promise.all([a.e(24),a.e(42)]).then(a.bind(null,273))}));t.default=c.a.memo((function(e){var t=e.stateCode,a=e.timeseries,o=e.pendency,b=e.date,h=e.regionHighlighted,p=e.setRegionHighlighted,w=e.anchor,x=e.setAnchor,T=e.expandTable,M=Object(g.a)().t,S=Object(y.a)("timeseriesLookback",l.w.BEGINNING),H=Object(r.a)(S,2),P=H[0],D=(H[1],Object(v.a)("chartType","total")),R=Object(r.a)(D,2),J=R[0],z=(R[1],Object(i.useRef)()),I=Object(d.a)(z,{once:!0}),U=Object(i.useMemo)((function(){var e;return(null===a||void 0===a||null===(e=a[h.stateCode])||void 0===e?void 0:e.districts)?{stateCode:h.stateCode,districtName:h.districtName}:{stateCode:h.stateCode,districtName:null}}),[a,h.stateCode,h.districtName]),Y=Object(i.useMemo)((function(){var e,t,n,r;return U.districtName?null===a||void 0===a||null===(e=a[U.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(n=t[U.districtName])||void 0===n?void 0:n.dates:null===a||void 0===a||null===(r=a[U.stateCode])||void 0===r?void 0:r.dates}),[a,U.stateCode,U.districtName]),B=Object(i.useMemo)((function(){var e,t,a,n;return U.districtName?null===o||void 0===o||null===(e=o[U.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[U.districtName])||void 0===a?void 0:a.pendency:null===o||void 0===o||null===(n=o[U.stateCode])||void 0===n?void 0:n.pendency}),[o,U.stateCode,U.districtName]),G=Object(i.useMemo)((function(){var e=Object.keys(a||{}).filter((function(e){return e!==t})).sort((function(e,t){return l.r[e].localeCompare(l.r[t])})).map((function(e){return{stateCode:e,districtName:null}})),r=Object.keys(a||{}).reduce((function(e,t){var r;return[].concat(Object(n.a)(e),Object(n.a)(Object.keys((null===a||void 0===a||null===(r=a[t])||void 0===r?void 0:r.districts)||{}).reduce((function(e,a){return[].concat(Object(n.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:t,districtName:null}].concat(Object(n.a)(e),Object(n.a)(r))}),[a,t]),K=Object(i.useMemo)((function(){return G.find((function(e){return e.stateCode===h.stateCode&&e.districtName===h.districtName}))?G:[].concat(Object(n.a)(G),[{stateCode:h.stateCode,districtName:h.districtName}])}),[h.stateCode,h.districtName,G]),W=Object(i.useMemo)((function(){var e=b||Object(u.h)(),t=Object.keys(Y||{}).filter((function(t){return t<=e}));if(P===l.w.TWO_WEEKS){var a=Object(O.a)(Object(j.a)(Object(u.k)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=a}))}if(P===l.w.MONTH){var n=Object(O.a)(Object(j.a)(Object(u.k)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=n}))}return t}),[Y,b,P]),q=Object(i.useMemo)((function(){b||Object(u.h)();return Object.keys(B||{})}),[B,b,P]),A=Object(i.useCallback)((function(e){var t=e.target;p(JSON.parse(t.value))}),[p]),F=Object(i.useCallback)((function(){p({stateCode:t,districtName:null})}),[t,p]),L=Object(i.useState)("line"),_=Object(r.a)(L,2);return _[0],_[1],c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===w},{expanded:T}),style:{display:"mapexplorer"===w?"none":""},ref:z},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===w}),onClick:x&&x.bind(this,"timeseries"===w?null:"timeseries")}),c.a.createElement("h1",null,M("Registration, Pendency and Disposal of 66A cases")),K&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(U),onChange:A},K.filter((function(e){return l.r[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?M(e.districtName):M(l.r[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:F},c.a.createElement(m.g,null)))),I&&c.a.createElement(i.Suspense,{fallback:c.a.createElement(s,null)},c.a.createElement(E,Object.assign({timeseries:Y,regionHighlighted:U},{dates:W,chartType:J}))),c.a.createElement(i.Suspense,{fallback:c.a.createElement(s,null)},c.a.createElement(N,Object.assign({timeseries:Y,regionHighlighted:U},{dates:W,chartType:J}))),!I&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement(i.Suspense,{fallback:c.a.createElement(s,null)},c.a.createElement(k,Object.assign({timeseries:B,regionHighlighted:U},{pendency_years:q,chartType:J}))),c.a.createElement("h1",{style:{color:"#6c757d"}},M("Case load (Year on Year)")),Y&&c.a.createElement(i.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(C,Object.assign({timeseries:Y,regionHighlighted:U},{dates:W,chartType:J}))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!p()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!p()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!p()(t.date,e.date)&&(!!p()(t.anchor,e.anchor)&&!!p()(t.expandTable,e.expandTable))))))}))},98:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,o=e.children,s=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,b=e.rtl,f=e.speed,O=e.style,j=e.title,h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=u||Math.random().toString(36).substring(6),g=p+"-diff",y=p+"-animated-diff",v=p+"-aria",E=b?{transform:"scaleX(-1)"}:null,N="0; "+m+"; 1",C=f+"s";return Object(n.createElement)("svg",r({"aria-labelledby":v,role:"img",style:r(r({},O),E)},h),j?Object(n.createElement)("title",{id:v},j):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+g+")",style:{fill:"url("+c+"#"+y+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:g},o),Object(n.createElement)("linearGradient",{id:y},Object(n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(n.createElement)(i,r({},e)):Object(n.createElement)(o,r({},e))},o=function(e){return Object(n.createElement)(c,r({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=22.72456863.chunk.js.map