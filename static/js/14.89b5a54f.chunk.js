(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14,40],{110:function(e,t,n){"use strict";var r=n(19),a=n(98),i=n(12),o=n(31),c=n(85),l=n(81),s=n.n(l),u=n(83),d=n.n(u),f=n(88),m=n(0),b=n.n(m),g=n(259),v=n(180);t.a=b.a.memo((function(e){var t=e.handleSort,n=e.sortData,l=e.setSortData,u=e.statistic,d=Object(g.a)().t,m=Object(v.a)((function(){n.sortColumn===u&&l(Object(f.a)(n,(function(e){e.delta=!n.delta})))}),{isPreventDefault:!1});return b.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,u)},m),n.sortColumn===u&&b.a.createElement("div",{className:s()("sort-icon",Object(r.a)({invert:n.isAscending},"is-".concat(u),n.delta))},b.a.createElement(c.c,{size:10})),b.a.createElement("div",null,d(Object(o.l)(i.s[u].displayName))),"other"===u&&b.a.createElement(a.a,{data:"Migrated cases or non-COVID deaths"},b.a.createElement(c.f,{size:14})))}),(function(e,t){return!!d()(e.sortData,t.sortData)}))},121:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(92);t.a=function(){var e=window.innerWidth,t=e>769?448:e;return a.a.createElement("div",{className:"TableLoader"},a.a.createElement(i.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},a.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),a.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),a.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))}},122:function(e,t,n){"use strict";n(80),n(12),n(85),n(81),n(0)},123:function(e,t,n){var r=n(124),a=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return r(e,a),e}},124:function(e,t){e.exports=function(e,t){var n=0,r={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var a=r[n.id];a&&(delete r[n.id],n.error?a[1](Object.assign(Error(n.error.message),n.error)):a[0](n.result))}else{var i=document.createEvent("Event");i.initEvent(n.method,!1,!1),i.data=n.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var a=arguments;return new Promise((function(i,o){var c=++n;r[c]=[i,o],e.postMessage({type:"RPC",id:c,method:t,params:[].slice.call(a)})}))}}))}},180:function(e,t,n){"use strict";var r=n(0),a=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()};t.a=function(e,t){var n=void 0===t?{}:t,i=n.isPreventDefault,o=void 0===i||i,c=n.delay,l=void 0===c?300:c,s=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useCallback)((function(t){o&&t.target&&(t.target.addEventListener("touchend",a,{passive:!1}),u.current=t.target),s.current=setTimeout((function(){return e(t)}),l)}),[e,l]),f=Object(r.useCallback)((function(){s.current&&clearTimeout(s.current),o&&u.current&&u.current.removeEventListener("touchend",a)}),[]);return{onMouseDown:function(e){return d(e)},onTouchStart:function(e){return d(e)},onMouseUp:f,onMouseLeave:f,onTouchEnd:f}}},227:function(e,t,n){"use strict";n.r(t);var r=n(80),a=n(110),i=n(121),o=(n(122),n(97)),c=n(12),l=n(31),s=n(85),u=n(81),d=n.n(u),f=n(83),m=n.n(f),b=n(88),g=n(0),v=n.n(g),p=n(259),h=n(84),O=n(220),j=n(123),y=n.n(j),E=Object(g.lazy)((function(){return n.e(6).then(n.bind(null,151))}));t.default=v.a.memo((function(e){var t=this,n=(e.stateCode,e.data),u=e.regionHighlighted,f=e.setRegionHighlighted,m=e.expandTable,j=(e.setExpandTable,Object(p.a)().t),C=Object(O.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),x=Object(r.a)(C,2),k=x[0],T=x[1],w=Object(g.useCallback)((function(e){k.sortColumn!==e?T(Object(b.a)(k,(function(t){t.sortColumn=e}))):T(Object(b.a)(k,(function(e){e.isAscending=!k.isAscending})))}),[k,T]),S=(Object(h.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:h.b.wobbly}),Object(g.useState)()),N=Object(r.a)(S,2),D=N[0],P=N[1],H=Object(g.useState)("States"),R=Object(r.a)(H,2),M=R[0],A=R[1],L=Object(g.useState)(!1),U=Object(r.a)(L,2),z=U[0],I=(U[1],Object(g.useState)(!1)),q=Object(r.a)(I,2),B=q[0],J=(q[1],Object(g.useCallback)((function(e,t){if("regionName"!==k.sortColumn){var r=Object(l.i)((null===D||void 0===D?void 0:D[e])||n[e],k.delta?"delta":"total",k.sortColumn,z),a=Object(l.i)((null===D||void 0===D?void 0:D[t])||n[t],k.delta?"delta":"total",k.sortColumn,z);return k.isAscending?r-a:a-r}var i,o,s=(null===D||void 0===D||null===(i=D[e])||void 0===i?void 0:i.districtName)||c.r[e],u=(null===D||void 0===D||null===(o=D[t])||void 0===o?void 0:o.districtName)||c.r[t];return k.isAscending?s.localeCompare(u):u.localeCompare(s)}),[D,z,k.delta,k.isAscending,k.sortColumn,n]));Object(g.useCallback)((function(){A((function(e){return"States"===e?"Districts":"States"}))}),[]),Object(g.useEffect)((function(){var e=y()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(P(t.data),e.terminate())}))}),[M,n]),Object(h.f)(B,null,{from:o.h,enter:o.g,leave:o.h});var K=m?c.v:c.u;return v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"table-container"},v.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(K.length+1,", auto)")}},v.a.createElement("div",{className:"row heading"},v.a.createElement("div",{className:"cell heading",onClick:w.bind(this,"regionName")},v.a.createElement("div",null,j("States"===M?"State/UT":"District")),"regionName"===k.sortColumn&&v.a.createElement("div",{className:d()("sort-icon",{invert:k.isAscending})},v.a.createElement(s.c,{size:10}))),K.map((function(e){return v.a.createElement(a.a,Object.assign({key:e},{statistic:e,sortData:k,setSortData:T},{handleSort:w.bind(t,e)}))}))),"States"===M&&Object.keys(n).filter((function(e){return"TT"!==e&&!(e===c.y&&z)})).sort((function(e,t){return J(e,t)})).map((function(e){return v.a.createElement(E,Object.assign({key:e,data:n[e]},{stateCode:e,isPerMillion:z,regionHighlighted:u,setRegionHighlighted:f,expandTable:m}))})),"Districts"===M&&!D&&v.a.createElement(i.a,null),"Districts"===M&&D&&Object.keys(D).sort((function(e,t){return J(e,t)})).slice(0,c.c).map((function(e){return v.a.createElement(E,Object.assign({key:e,data:D[e],districtName:D[e].districtName},{isPerMillion:z,regionHighlighted:u,setRegionHighlighted:f,expandTable:m}))})),v.a.createElement(E,Object.assign({key:"TT",data:n.TT,stateCode:"TT"},{isPerMillion:z,regionHighlighted:u,setRegionHighlighted:f,expandTable:m})))))}),(function(e,t){var n,r,a,i;return!!m()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(r=t.regionHighlighted)||void 0===r?void 0:r.districtName)&&(!!m()(null===(a=e.regionHighlighted)||void 0===a?void 0:a.stateCode,null===(i=t.regionHighlighted)||void 0===i?void 0:i.stateCode)&&(!!m()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!m()(e.expandTable,t.expandTable)))}))},83:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!==a--;)if(!Object.prototype.hasOwnProperty.call(n,i[a]))return!1;for(a=r;0!==a--;){var o=i[a];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}},92:function(e,t,n){"use strict";var r=n(0),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,n=e.backgroundColor,i=e.backgroundOpacity,o=e.baseUrl,c=e.children,l=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,f=e.interval,m=e.rtl,b=e.speed,g=e.style,v=e.title,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),h=d||Math.random().toString(36).substring(6),O=h+"-diff",j=h+"-animated-diff",y=h+"-aria",E=m?{transform:"scaleX(-1)"}:null,C="0; "+f+"; 1",x=b+"s";return Object(r.createElement)("svg",a({"aria-labelledby":y,role:"img",style:a(a({},g),E)},p),v?Object(r.createElement)("title",{id:y},v):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+O+")",style:{fill:"url("+o+"#"+j+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:O},c),Object(r.createElement)("linearGradient",{id:j},Object(r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:x,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:x,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:x,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var o=function(e){return e.children?Object(r.createElement)(i,a({},e)):Object(r.createElement)(c,a({},e))},c=function(e){return Object(r.createElement)(o,a({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=o},98:function(e,t,n){"use strict";var r=n(80),a=n(97),i=n(0),o=n.n(i),c=n(84);t.a=function(e){var t=e.data,n=e.children,l=Object(i.useState)(!1),s=Object(r.a)(l,2),u=s[0],d=s[1],f=Object(c.f)(u,null,{from:a.j,enter:a.i,leave:a.j,config:{mass:1,tension:210,friction:20}}),m=Object(i.useCallback)((function(e){return e.stopPropagation()}),[]);return o.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1),onClick:m.bind(void 0)},n,f.map((function(e){var n=e.item,r=e.key,a=e.props;return n?o.a.createElement(c.a.div,{key:r,style:a},o.a.createElement("div",{className:"message"},o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):o.a.createElement(c.a.div,{key:r})})))}}}]);
//# sourceMappingURL=14.89b5a54f.chunk.js.map