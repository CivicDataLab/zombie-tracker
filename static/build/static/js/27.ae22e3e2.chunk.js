(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[27,47],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(4),r=a(2),c=a(1);function i(e,t){Object(c.a)(2,arguments);var a=Object(r.a)(e),i=Object(n.a)(t);if(isNaN(i))return new Date(NaN);if(!i)return a;var s=a.getDate(),o=new Date(a.getTime());o.setMonth(a.getMonth()+i+1,0);var u=o.getDate();return s>=u?o:(a.setFullYear(o.getFullYear(),o.getMonth(),s),a)}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(4),r=a(101),c=a(1);function i(e,t){Object(c.a)(2,arguments);var a=Object(n.a)(t);return Object(r.a)(e,-a)}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(71),r=a(108),c=a(2),i=a(1),s=a(4);function o(e,t){if(Object(i.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(s.a)(t.years):0,o="months"in t?Object(s.a)(t.months):0,u="weeks"in t?Object(s.a)(t.weeks):0,l="days"in t?Object(s.a)(t.days):0,d="hours"in t?Object(s.a)(t.hours):0,b="minutes"in t?Object(s.a)(t.minutes):0,D="seconds"in t?Object(s.a)(t.seconds):0,h=Object(r.a)(Object(c.a)(e),o+12*a),j=Object(n.a)(h,l+7*u),g=b+60*d,O=D+60*g,m=1e3*O,f=new Date(j.getTime()-m);return f}},213:function(e,t,a){"use strict";a.r(t);var n=a(89),r=(a(167),a(168),a(0)),c=a.n(r),i=a(41),s=a(120),o=a.n(s),u=a(169);t.default=c.a.memo((function(e){e.data;var t=e.setData,a=e.message,s=e.setMessage,l=Object(r.useState)(!1),d=Object(n.a)(l,2),b=d[0],D=d[1],h=Object(r.useState)([{startDate:new Date,endDate:Object(i.a)(new Date,7),key:"selection"}]),j=Object(n.a)(h,2),g=j[0],O=j[1];return c.a.createElement("div",null,c.a.createElement("div",{style:{textAlign:"left"}},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){D(!b)},style:a.includes("other")?{background:"#111352",color:"#A7E3E7",minWidth:"11rem",height:"40px",borderRadius:"5px"}:{minWidth:"11rem",height:"40px",borderRadius:"5px"}}," ",a.includes("other")?g[0].startDate.toDateString()+" ~ "+g[0].endDate.toDateString():"Period Picker")),b?c.a.createElement(u.DateRangePicker,{onChange:function(e){O([e.selection]);var n="http://35.154.207.72/main/data_66a_cases/"+(e.selection.startDate.getDate()+"-"+(e.selection.startDate.getMonth()+1)+"-"+e.selection.startDate.getFullYear())+"/"+(e.selection.endDate.getDate()+"-"+(e.selection.endDate.getMonth()+1)+"-"+e.selection.endDate.getFullYear())+"/";o.a.ajax({url:n,dataType:"json",async:!1,success:function(e){t(e)},error:function(e,t,a){alert("No Data")}}),s("other"==a?"other1":"other")},minDate:Object(i.a)(new Date(2009,9,27),0),maxDate:Object(i.a)(new Date(2020,1,15),0),showSelectionPreview:!0,moveRangeOnFirstSelection:!1,months:1,ranges:g,direction:"vertical",scroll:{enabled:!0}}):c.a.createElement("div",null))}))}}]);
//# sourceMappingURL=27.ae22e3e2.chunk.js.map