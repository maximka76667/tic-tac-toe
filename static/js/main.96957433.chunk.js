(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(14),i=n.n(r),s=(n(21),n(7)),l=n(2),u=n(1);var o=function(e){var t=e.handleClick,n=e.turn,c=e.cells,r=e.lines;function i(){if("O"===n){for(var e=0;e<r.length;e++){var a=Object(s.a)(r[e],3),i=a[0],l=a[1],u=a[2];if(c[i]&&c[i]===c[l]&&!c[u])return t(u);if(c[l]&&c[l]===c[u]&&!c[i])return t(i);if(c[i]&&c[i]===c[u]&&!c[l])return t(l)}return function(e){t(e)}(function(){var e;do{e=Math.floor(9*Math.random())}while(c.includes("")&&c[e]);return e}())}}return a.a.useEffect((function(){i()}),[c]),Object(u.jsx)(u.Fragment,{})};var j=function(e){return Object(u.jsx)("button",{className:"cell",onClick:e.onClick,children:e.value})};var f=function(e){var t=Object(l.f)(),n=a.a.useState(Array(9).fill("")),c=Object(s.a)(n,2),r=c[0],i=c[1],f=a.a.useState(""),b=Object(s.a)(f,2),d=b[0],h=b[1],m=a.a.useState(""),O=Object(s.a)(m,2),x=O[0],v=O[1],g=a.a.useState(!1),N=Object(s.a)(g,2),p=N[0],k=N[1],C=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function _(e){if(!(r[e]||p||P())){y();var t=r.slice();t[e]=d,i(t),function(e){if("X"===e)return h("O");if("O"===e)h("X")}(d)}}function y(){P()?F(w()):!function(){for(var e=0;e<r.length;e++)if(!r[e])return!1;return!0}()?v("Turn: "+d):F("draw")}function P(){return""!==w()}function w(){for(var e=0;e<C.length;e++){var t=Object(s.a)(C[e],3),n=t[0],c=t[1],a=t[2];if(r[n]&&r[n]===r[c]&&r[n]===r[a])return r[n]}return""}function F(e){return console.log("Game Over!"),h(""),k(!0),v("draw"===e?"Draw!":"Winner: "+e)}function S(){i(Array(9).fill("")),k(!1),h("X"),v("")}return a.a.useEffect((function(){y()}),[r]),a.a.useEffect((function(){S()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:x}),Object(u.jsx)("div",{className:"board",children:Array(9).fill("").map((function(e,t){return Object(u.jsx)(j,{onClick:function(){return _(t)},value:r[t]},t)}))}),e.isPlayWithBot&&Object(u.jsx)(o,{handleClick:_,cells:r,lines:C,turn:d}),Object(u.jsx)("button",{className:"reset-button",onClick:S,children:"Reset"}),Object(u.jsx)("button",{className:"menu-button",onClick:function(){t.push("/")},children:"Menu"})]})},b=n(9);var d=function(){return Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("h1",{className:"menu__heading",children:"Tic Tac Toe"}),Object(u.jsx)("div",{className:"menu__game-mode",children:Object(u.jsx)(b.b,{className:"menu__game-mode-link",to:"/single",children:"1 Player"})}),Object(u.jsx)("div",{className:"menu__game-mode",children:Object(u.jsx)(b.b,{className:"menu__game-mode-link",to:"/multi",children:"2 Players"})})]})};var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("main",{className:"content",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",exact:!0,children:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{path:"/single",children:Object(u.jsx)("div",{className:"game",children:Object(u.jsx)(f,{isPlayWithBot:!0})})}),Object(u.jsx)(l.a,{path:"/multi",children:Object(u.jsx)("div",{className:"game",children:Object(u.jsx)(f,{isPlayWithBot:!1})})})]})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(h,{})})}),document.getElementById("root")),m()}},[[31,1,2]]]);
//# sourceMappingURL=main.96957433.chunk.js.map