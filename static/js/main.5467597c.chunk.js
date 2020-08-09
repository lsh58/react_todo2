(this.webpackJsonpreact_todo2=this.webpackJsonpreact_todo2||[]).push([[0],{18:function(n,e,t){n.exports=t(26)},23:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(10),c=t.n(o),i=(t(23),t(11)),u=t(2),l=t(3),d=t(12);function f(){var n=Object(l.a)(["\n   width: 90%;\n  "]);return f=function(){return n},n}function s(){var n=Object(l.a)(["\n  width: 60%;\n  height: 90vh;\n  min-height: 638px;\n  margin: 0 auto; /* \ud398\uc774\uc9c0 \uc911\uc559\uc5d0 \ub098\ud0c0\ub098\ub3c4\ub85d \uc124\uc815 */\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n  ","\n"]);return s=function(){return n},n}var m=Object(d.a)({lgDesktop:"1350px",mdDesktop:"1150px",tablet:"960px",smTablet:"740px",mobile:"600px"}),p=u.c.div(s(),m.lessThan("tablet")(f()));var b=function(n){var e=n.children;return a.a.createElement(p,null,e)},v=t(4),x=t(5),g=[{id:1,text:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",done:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1\ud558\uae30",done:!0},{id:3,text:"Context \ub9cc\ub4e4\uae30",done:!1},{id:4,text:"\uae30\ub2a5 \uad6c\ud604\ud558\uae30",done:!1}];function h(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(x.a)(Object(x.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));case"EDIT":return n.map((function(n){return n.id===e.id?Object(x.a)(Object(x.a)({},n),{},{text:e.value}):n}));default:throw new Error("Unhandled action type: ".concat(e.type))}}var E=Object(r.createContext)(),O=Object(r.createContext)(),j=Object(r.createContext)(),w=Object(r.createContext)();function y(n){var e=n.children,t=Object(r.useReducer)(h,g),o=Object(v.a)(t,2),c=o[0],i=o[1],u=Object(r.useRef)(5),l=Object(r.useState)("ALL"),d=Object(v.a)(l,2),f=d[0],s=d[1];return a.a.createElement(E.Provider,{value:c},a.a.createElement(O.Provider,{value:i},a.a.createElement(j.Provider,{value:u},a.a.createElement(w.Provider,{value:[f,s]},e))))}function k(){return Object(r.useContext)(E)}function C(){return Object(r.useContext)(O)}function D(){return Object(r.useContext)(w)}function R(){var n=Object(l.a)(["\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  h1 {\n    font-size: 3.5rem;\n    color: #20c997;\n    font-family: 'Noto Sans KR', sans-serif;\n    font-weight: 100;\n  }\n  .day {\n    color: #20c997;\n    font-size: 1rem;\n    font-weight: 400;\n    margin-top: -40px;\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 1.2rem;\n    font-weight: 400;\n    margin-top: 10px;\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n"]);return R=function(){return n},n}var S=u.c.div(R());var L=function(){var n=k().filter((function(n){return!n.done})),e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleDateString("ko-KR",{weekday:"long"});return a.a.createElement(S,null,a.a.createElement("h1",null,"Todo"),a.a.createElement("div",{className:"day"},t," ",r),a.a.createElement("div",{className:"tasks-left"},'" \ud560 \uc77c\uc774 ',n.length,' \uac1c \ub0a8\uc558\uc2b5\ub2c8\ub2e4. "'))};function T(){var n=Object(l.a)(["\n  width: 100%;\n  margin: 15px auto; /* \ud398\uc774\uc9c0 \uc911\uc559\uc5d0 \ub098\ud0c0\ub098\ub3c4\ub85d \uc124\uc815 */\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  span {\n    padding: 1px 7px;\n    font-family: 'Noto Sans KR', sans-serif;\n    font-size: 1rem;\n    font-weight: bold;\n    margin-right: 10px;\n    color: white;\n    cursor: pointer;\n    letter-spacing: 0.02rem;\n  }\n  span.select {\n    background: #20c997;\n    border-radius: 5px;\n    color: #333333;\n    font-weight: bold;\n  }\n"]);return T=function(){return n},n}var z=u.c.div(T());var N=function(){var n=Object(r.useRef)(null),e=D(),t=Object(v.a)(e,2),o=t[0],c=t[1];function i(e){e.preventDefault();for(var t=0;t<n.current.children.length;t++)n.current.children[t].classList.remove("select");e.target.classList.add("select"),console.log(o)}return a.a.createElement(z,{ref:n},a.a.createElement("span",{className:"select",onClick:function(n){c("ALL"),i(n)}},"\uc804\uccb4\ubaa9\ub85d"),a.a.createElement("span",{onClick:function(n){c("TODO"),i(n)}},"\ub0a8\uc740\ubaa9\ub85d"),a.a.createElement("span",{onClick:function(n){c("DONE"),i(n)}},"\uc644\ub8cc\ubaa9\ub85d"))},K=t(17),A=t(16);function G(){var n=Object(l.a)(["\n      color: #adb5bd;\n    "]);return G=function(){return n},n}function P(){var n=Object(l.a)(["\n  width: 100%;\n  flex: 1;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #212529;\n  outline-style: none;\n  border: none;\n  ","\n"]);return P=function(){return n},n}function F(){var n=Object(l.a)(["\n  flex: 1;\n"]);return F=function(){return n},n}function I(){var n=Object(l.a)(["\n      border: 1px solid #20c997;\n      color: #20c997;\n    "]);return I=function(){return n},n}function M(){var n=Object(l.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n  border: 1px solid #212529;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  margin-right: 15px;\n  cursor: pointer;\n  ","\n"]);return M=function(){return n},n}function B(){var n=Object(l.a)(["\n  width: 100%;\n  background: none;\n  margin: 0 auto 5px;\n  display: flex;\n  align-items: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]);return B=function(){return n},n}function J(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  color: #212529;\n  font-size: 1rem;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n"]);return J=function(){return n},n}var U=u.c.div(J()),V=u.c.div(B()),W=u.c.div(M(),(function(n){return n.done&&Object(u.b)(I())})),_=u.c.form(F()),$=u.c.input(P(),(function(n){return n.done&&Object(u.b)(G())}));var q=a.a.memo((function(n){var e=n.id,t=n.done,o=n.text,c=Object(r.useState)(""),i=Object(v.a)(c,2),u=i[0],l=i[1],d=Object(r.useState)(!1),f=Object(v.a)(d,2),s=f[0],m=f[1],p=C();return a.a.createElement(V,null,a.a.createElement(W,{done:t,onClick:function(){return p({type:"TOGGLE",id:e})}},t&&a.a.createElement(A.a,null)),!1===s?a.a.createElement($,{done:t,value:o,onClick:function(n){n.preventDefault(),m(!0),l(n.target.value)}}):a.a.createElement(_,{onSubmit:function(n){n.preventDefault(),p({type:"EDIT",id:e,value:u}),m(!1),l("")}},a.a.createElement($,{autoFocus:!0,done:t,value:u,onChange:function(n){return l(n.target.value)}})),a.a.createElement(U,{onClick:function(){return p({type:"REMOVE",id:e})}},a.a.createElement(K.a,null)))}));function H(){var n=Object(l.a)(["\n  width: 100%;\n  margin: 0 auto;\n  background: white;\n  border-radius: 5px;\n  overflow-y: auto;\n"]);return H=function(){return n},n}var Q=u.c.div(H());var X=function(){var n=k(),e=D(),t=Object(v.a)(e,1)[0];switch(t){case"ALL":return a.a.createElement(Q,null,n.map((function(n){return a.a.createElement(q,{key:n.id,id:n.id,text:n.text,done:n.done})})));case"TODO":return a.a.createElement(Q,null,n.map((function(n){return!1===n.done?a.a.createElement(q,{key:n.id,id:n.id,text:n.text,done:n.done}):""})));case"DONE":return a.a.createElement(Q,null,n.map((function(n){return!0===n.done?a.a.createElement(q,{key:n.id,id:n.id,text:n.text,done:n.done}):""})));default:throw new Error("Unhandled mode: ".concat(t))}};function Y(){var n=Object(l.a)(["\n  padding: 12px;\n  width: 100%;\n  margin-top: 20px;\n  outline: none;\n  font-size: 1rem;\n  box-sizing: border-box;\n  border: 1px solid white;\n  border-radius: 5px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n"]);return Y=function(){return n},n}function Z(){var n=Object(l.a)(["\n  width: 100%;\n  margin: 0 auto;\n"]);return Z=function(){return n},n}var nn=u.c.form(Z()),en=u.c.input(Y());var tn=a.a.memo((function(){var n=Object(r.useState)(""),e=Object(v.a)(n,2),t=e[0],o=e[1],c=C(),i=Object(r.useContext)(j);return a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,{onSubmit:function(n){n.preventDefault(),c({type:"CREATE",todo:{id:i.current,text:t,done:!1}}),o(""),i.current+=1}},a.a.createElement(en,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",onChange:function(n){return o(n.target.value)},value:t})))}));function rn(){var n=Object(i.a)(["\n  body {\n    background: #333333;\n  }\n"]);return rn=function(){return n},n}var an=Object(u.a)(rn());var on=function(){return a.a.createElement(y,null,a.a.createElement(an,null),a.a.createElement(b,null,a.a.createElement(L,null),a.a.createElement(tn,null),a.a.createElement(N,null),a.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(on,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5467597c.chunk.js.map