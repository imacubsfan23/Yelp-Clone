(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,c,t){},24:function(e,c,t){},31:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),a=t(16),i=t.n(a),r=t(8),l=(t(22),t(23),t(10)),j=t(2),o=(t(24),t(1)),u=function(e){var c=e.business;if(c)return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"row col-6",children:Object(o.jsx)("img",{className:"photo",src:c.image_url,alt:c.name})}),Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsx)("h1",{children:c.name}),Object(o.jsx)(r.b,{to:"/business/"+c.alias,children:"More Info"})]})]})})};function h(e){return e.list?Object(o.jsx)("div",{className:"container",children:e.list.slice(0,5).map((function(e){return Object(o.jsx)(u,{business:e},e.id)}))}):"Type something"}var d=function(){var e=s.a.useState(null),c=Object(l.a)(e,2),t=c[0],n=c[1],a=Object(j.f)().alias;return s.a.useEffect((function(){fetch("/api/business/".concat(a)).then((function(e){return e.json()})).then((function(e){return n(e.message)})).catch((function(e){return console.log(e)}))}),[a]),t?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{children:t.name}),Object(o.jsx)("div",{className:"row col-6",children:Object(o.jsx)("img",{className:"photo",src:t.image_url,alt:t.name})}),Object(o.jsxs)("div",{className:"col-6",children:[Object(o.jsxs)("h2",{children:["Rating: ",t.rating]}),Object(o.jsxs)("h3",{children:["Address: ","".concat(t.location.display_address)]}),Object(o.jsxs)("h4",{children:["Phone #: ",t.display_phone]}),Object(o.jsx)("a",{href:t.url,children:"Visit Yelp Page"})]})]})}):"Loading..."},b=function(){var e=Object(n.useState)(""),c=Object(l.a)(e,2),t=c[0],a=c[1],i=s.a.useState(null),r=Object(l.a)(i,2),u=r[0],b=r[1];return s.a.useEffect((function(){fetch("/api/".concat(t)).then((function(e){return e.json()})).then((function(e){return b(e.message)})).catch((function(e){return console.log(e)}))}),[t]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsxs)(j.a,{exact:!0,path:"/",children:[Object(o.jsx)("input",{type:"text",placeholder:"Search in Naperville, IL",value:t||"",onChange:function(e){return a(e.target.value)}}),Object(o.jsx)(h,{list:u})]}),Object(o.jsx)(j.a,{path:"/business/:alias",children:Object(o.jsx)(d,{query:"burger"})})]})})};var O=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(b,{})})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(O,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.94cf6fbd.chunk.js.map