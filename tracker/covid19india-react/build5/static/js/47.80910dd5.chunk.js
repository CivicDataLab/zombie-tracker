(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[47],{213:function(e,t,a){"use strict";a.r(t);var n=a(89),s=(a(167),a(168),a(0)),c=a.n(s),o=a(41),i=a(120),r=a.n(i),l=a(169);t.default=c.a.memo((function(e){e.data;var t=e.setData,a=e.message,i=e.setMessage,D=Object(s.useState)(!1),d=Object(n.a)(D,2),u=d[0],m=d[1],g=Object(s.useState)([{startDate:new Date,endDate:Object(o.a)(new Date,7),key:"selection"}]),b=Object(n.a)(g,2),h=b[0],v=b[1];return c.a.createElement("div",null,c.a.createElement("div",{style:{textAlign:"center",marginBottom:"1rem"}},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){m(!u)},style:{borderRadius:"20px"}}," ",h[0].startDate.toDateString()," ~ ",h[0].endDate.toDateString()," ")),u?c.a.createElement(l.DateRangePicker,{onChange:function(e){v([e.selection]);var n="http://35.154.207.72/main/data_66a_cases/"+(e.selection.startDate.getDate()+"-"+(e.selection.startDate.getMonth()+1)+"-"+e.selection.startDate.getFullYear())+"/"+(e.selection.endDate.getDate()+"-"+(e.selection.endDate.getMonth()+1)+"-"+e.selection.endDate.getFullYear())+"/";r.a.ajax({url:n,dataType:"json",async:!1,success:function(e){t(e)},error:function(e,t,a){alert("No Data")}}),i("other"==a?"other1":"other")},minDate:Object(o.a)(new Date(2006,1,1),0),maxDate:Object(o.a)(new Date(2020,12,31),0),showSelectionPreview:!0,moveRangeOnFirstSelection:!1,months:1,ranges:h,direction:"vertical",scroll:{enabled:!0}}):c.a.createElement("div",null))}))}}]);
//# sourceMappingURL=47.80910dd5.chunk.js.map