(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){},124:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n(69),i=n.n(a),r=(n(79),n(26)),o=n(3),j=n(14),l=(n(80),n(1)),u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),o=i[0],u=i[1];return Object(l.jsx)("div",{className:"join-container",children:Object(l.jsxs)("div",{className:"join-box",children:[Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{htmlFor:"input-name",className:"input-label",children:"Name"}),Object(l.jsx)("input",{id:"input-name",type:"text",className:"input",onChange:function(e){c(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{htmlFor:"input-room",className:"input-label",children:"Room"}),Object(l.jsx)("input",{id:"input-room",type:"text",className:"input",onChange:function(e){u(e.target.value)}})]}),Object(l.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(l.jsx)("buttom",{className:"sign-in",type:"submit",children:"Sign In"})})]})})},m=n(74),b=(n(86),n(71)),O=n.n(b),d=n(72),x=n.n(d),h=(n(121),n(42)),p=n(27),f=function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infobar",children:[Object(l.jsxs)("div",{className:"left-inner-container",children:[Object(l.jsx)(h.a,{className:"online-icon",icon:p.a,alt:"online icon"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"right-inner-container",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)(h.a,{className:"close-icon",icon:p.b,alt:"close icon"})})})]})},g=(n(124),n(73)),N=n.n(g),v=(n(146),n(43)),y=n.n(v),S=function(e){var t=e.message,n=t.user,c=t.text,s=!1,a=e.name.trim().toLowerCase();return n===a&&(s=!0),s?Object(l.jsxs)("div",{className:"messageContainer end",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:a}),Object(l.jsx)("div",{className:"messageBox blue",children:Object(l.jsx)("p",{className:"messageText white",children:y.a.emojify(c)})})]}):Object(l.jsxs)("div",{className:"messageContainer start",children:[Object(l.jsx)("div",{className:"messageBox light",children:Object(l.jsx)("p",{className:"messageText dark",children:y.a.emojify(c)})}),Object(l.jsx)("p",{className:"sentText pl-10",children:n})]})},C=function(e){var t=e.messages,n=e.name;return Object(l.jsx)(N.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(S,{message:e,name:n})},t)}))})},k=(n(147),function(e){var t=e.message,n=e.setMessage,c=e.sendMessage;return Object(l.jsxs)("form",{action:"",className:"form",children:[Object(l.jsx)("input",{type:"text",className:"input",placeholder:"Type a message...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null}}),Object(l.jsx)("button",{className:"submit",onClick:function(e){c(e)},children:"Send"})]})}),M=function(e){var t=e.location,n=Object(s.useState)(""),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(s.useState)(""),u=Object(j.a)(o,2),b=u[0],d=u[1],h=Object(s.useState)([]),p=Object(j.a)(h,2),g=p[0],N=p[1],v=Object(s.useState)([]),y=Object(j.a)(v,2),S=y[0],M=y[1],T="https://chat-app-diego-germiniani.herokuapp.com/";Object(s.useEffect)((function(){var e=O.a.parse(t.search),n=e.name,s=e.room;c=x()(T),r(n),d(s),c.emit("join",{name:n,room:s},(function(e){return e?alert(e):null}))}),[T,t.search]),Object(s.useEffect)((function(){c.on("message",(function(e){M([].concat(Object(m.a)(S),[e]))}))}),[S]);return console.log(g,S),Object(l.jsx)("div",{className:"chat-container",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(f,{room:b}),Object(l.jsx)(C,{messages:S,name:i}),Object(l.jsx)(k,{message:g,setMessage:N,sendMessage:function(e){e.preventDefault(),g&&c.emit("sendMessage",g,(function(){return N("")}))}})]})})},T=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/chat",exact:!0,component:M})]})})};i.a.render(Object(l.jsx)(T,{}),document.querySelector("#root"))},79:function(e,t,n){},80:function(e,t,n){},86:function(e,t,n){}},[[149,1,2]]]);
//# sourceMappingURL=main.7abf05d1.chunk.js.map