(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(7),i=c.n(s),r=c(2),l=c(8),j=c(4),o=c(0),d=function(e){var t=e.status,c=e.updateChances,n=e.chance,s=[{name:"Small Wish",content:"5 Minutes Massage"},{name:"Small Wish",content:"10 Minutes Massage"},{name:"Small Wish",content:"15 Minutes Massage"},{name:"Small Wish",content:"30 Minutes Massage"},{name:"Big Wish",content:"Whole Body Massage"},{name:"Big Wish",content:"Wash Hair For You"},{name:"Big Wish",content:"ggg"},{name:"Super Big Wish",content:"hhh"},{name:"Super Big Wish",content:"Twice One Day"},{name:"Untimate JackPot",content:"A Real Wish"}],i=Object(a.useState)(s),d=Object(r.a)(i,2),b=d[0],u=d[1],h=Object(a.useState)({name:"",flip:!1,content:""}),m=Object(r.a)(h,2),O=m[0],f=m[1],x=Object(a.useState)([]),p=Object(r.a)(x,2),g=p[0],_=p[1],v=Object(a.useState)(!1),N=Object(r.a)(v,2),M=N[0],S=N[1];var W=function(){!O.flip&&t&&function(){var e=b,t=e.splice(Math.floor(Math.random()*e.length),1),a={name:t[0].name,flip:!0,content:t[0].content};c(),u(e),f(a)}()};Object(a.useEffect)((function(){O.name&&_([].concat(Object(l.a)(g),[O]))}),[O]),Object(a.useEffect)((function(){t||(f(Object(j.a)(Object(j.a)({},O),{},{name:"",flip:!1,content:""})),u(s),_([]),S(!1))}),[t]);var C=null===g||void 0===g?void 0:g.map((function(e,t){return Object(o.jsxs)("div",{className:"card-list__picked",children:[Object(o.jsx)("h6",{children:e.name}),Object(o.jsx)("p",{children:e.content})]},t)}));return Object(o.jsxs)("div",{className:"game-board__content",children:[Object(o.jsx)("div",{className:"card-body ".concat(M?"card-list":""),children:M?C:function(e){var c=e.flip&&t?"card--flipped":"";return Object(o.jsxs)("div",{className:"card ".concat(c),onClick:W,children:[Object(o.jsx)("div",{className:"card__face card__face--front"}),Object(o.jsx)("div",{className:"card__face card__face--back",children:Object(o.jsxs)("div",{className:"card__content",children:[Object(o.jsx)("h4",{children:O.name}),Object(o.jsx)("p",{children:O.content})]})})]})}(O)}),Object(o.jsx)("button",{onClick:function(){f(Object(j.a)(Object(j.a)({},O),{},{name:"",flip:!1,content:""}))},className:"card-stats__button",type:"button",disabled:!O.flip||n<=0||!t,children:"Next Card"}),Object(o.jsx)("button",{onClick:function(){return S(!0)},className:"card-stats__button",type:"button",disabled:!O.flip||n>0||M,children:"Check My Wish"})]})},b=function(e){var t=e.status,c=e.updateChances,a=e.chance;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"game-instruction",children:Object(o.jsx)("h3",{className:"game-instruction__header",children:"Instruction: - Just Flip ME"})}),Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(d,{status:t,updateChances:c,chance:a})})]})},u=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(5),i=Object(r.a)(s,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){c||j(5)}),[c]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"game-stats",children:[Object(o.jsxs)("div",{className:"game-stats__score",children:[Object(o.jsx)("div",{className:"game-stats__score--label",children:"Cards Left:"}),Object(o.jsx)("div",{className:"game-stats__score--value",children:l})]}),Object(o.jsx)("button",{onClick:function(){n(!c)},className:"game-stats__button",type:"button",children:c?"Reset Game":"Start Game"})]}),Object(o.jsx)(b,{status:c,updateChances:function(){j(l-1)},chance:l})]})};c(14);var h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"game-title",children:"Wish Cards"}),Object(o.jsx)(u,{})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3642c515.chunk.js.map