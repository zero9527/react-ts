webpackJsonp([1],{57:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),a=(t.n(l),t(62)),i=t.n(a),o=l.useState,r=l.useEffect,c=l.useMemo;n.default=function(){var e=o(!1),n=e[0],t=e[1],a=o([""]),u=a[0],s=a[1],b=o([{type:"",label:"0"}]),p=b[0],m=b[1],y=o(0),_=y[0],d=y[1],f=o(!1),x=f[0],g=f[1],h=o("\u7b80\u6613\u8ba1\u7b97\u5668\u63d0\u793a"),k=h[0],E=h[1],v=["0","1","2","3","4","5","6","7","8","9"];function N(e){void 0===e&&(e=!0);var n=p.findIndex(function(e){return"number"!==e.type}),t=[p.slice(0,n).map(function(e){return e.label}),p.slice(n+1,p.length).map(function(e){return e.label})],l=p.slice(n,n+1)[0],a="",i=t[0].reduce(function(e,n){return e+""+n},""),o=t[1].reduce(function(e,n){return e+""+n},"");return"add"===l.type&&(a=+i+ +o),"minus"===l.type&&(a=+i-+o),"mul"===l.type&&(a=+i*+o),"divide"===l.type&&(a=+i/+o),"residue"===l.type&&(a=+i%+o),d(+a),s([Date.now()+""]),e&&m([{type:"number",label:a+""}]),{type:"number",label:a+""}}return r(function(){E("\u7b80\u6613\u8ba1\u7b97\u5668\u63d0\u793a")},[]),c(function(){console.log("show: ",JSON.stringify(p))},[p]),l.createElement("div",{className:i.a.caculator},l.createElement("section",{className:i.a.display},l.createElement("div",{className:i.a.title},l.createElement("span",null,"\u7b80\u6613\u8ba1\u7b97\u5668"),l.createElement("span",{onClick:function(){return t(!0)}},"\u5386\u53f2\u7eaa\u5f55")),l.createElement("div",{className:i.a["number-block"]},p.map(function(e,n){return l.createElement("span",{key:n,className:"number"===e.type?i.a.number:i.a.char},e.label)})),l.createElement("div",{className:i.a.result},_),l.createElement("div",{className:i.a.textinfo},k)),n&&l.createElement("section",{className:i.a.history},l.createElement("div",{className:i.a["history-content"]},JSON.stringify(u),l.createElement("div",{className:i.a.close,onClick:function(){return t(!1)}},"\u5173\u95ed"))),l.createElement("section",{className:i.a["num-content"]},[[{type:"residue",label:"%"},{type:"sqrt",label:"\u221a"},{type:"square",label:"x\xb2"},{type:"fraction-of",label:"\xb9/x"}],[{type:"CE",label:"CE"},{type:"C",label:"C"},{type:"DELETE",label:"DELETE"},{type:"divide",label:"\xf7"}],[{type:"number",label:"7"},{type:"number",label:"8"},{type:"number",label:"9"},{type:"mul",label:"x"}],[{type:"number",label:"4"},{type:"number",label:"5"},{type:"number",label:"6"},{type:"minus",label:"-"}],[{type:"number",label:"1"},{type:"number",label:"2"},{type:"number",label:"3"},{type:"add",label:"+"}],[{type:"pm",label:"\xb1"},{type:"number",label:"0"},{type:"number",label:"."},{type:"equal",label:"="}]].map(function(e,n){return l.createElement("div",{className:i.a["num-block"],key:n},e.map(function(e,n){return l.createElement("span",{key:n,className:i.a["btn-item"]+" "+(v.includes(e.label)?i.a["num-item"]:""),onClick:function(){return function(e){var n=p;if("sqrt"===e.type&&""!==p[0].label&&(d(Math.sqrt(+p[0].label)),m([{type:"",label:""+Math.sqrt(+p[0].label)}])),"square"===e.type&&""!==p[0].label&&(d(+p[0].label*+p[0].label),m([{type:"",label:""+ +p[0].label*+p[0].label}])),"fraction-of"===e.type&&""!==p[0].label&&(d(1/+p[0].label),m([{type:"",label:""+1/+p[0].label}])),["add","minus","mul","divide","residue"].includes(e.type)&&"number"===n[0].type)if("number"!==n[p.length-1].type)n[p.length-1]=e,m(n.slice());else if(n.find(function(e){return"number"!==e.type})){var t=N();m([t,e])}else"."===n[p.length-1].label?(n.pop(),m(n.slice())):(n.push(e),m(p.slice()));if("C"===e.type&&(n.length=0,d(0),m([{type:"",label:"0"}])),"DELETE"===e.type&&(n.length>1?n.pop():n=[{type:"",label:"0"}],m(n.slice())),"number"===e.type){if(x)return d(+e.label),m([e]),void g(!1);"0"===n[0].label?n[0]=e:n.push(e),m(n.slice()),n.find(function(e){return"number"!==e.type})&&"number"===n[p.length-1].type&&N(!1)}"equal"===e.type&&(N(),g(!0))}(e)}},e.label)}))})))}},62:function(e,n,t){var l=t(63);"string"===typeof l&&(l=[[e.i,l,""]]);var a={hmr:!0,transform:void 0};t(53)(l,a);l.locals&&(e.exports=l.locals)},63:function(e,n,t){(n=e.exports=t(52)(void 0)).push([e.i,".caculator__1DngpO {\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  color: #2b2b2b;\n  background: #fafafa; }\n\n.display__16vX4P {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 8px;\n  text-align: right;\n  font-size: 22px; }\n  .display__16vX4P .title__24hPgW {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 6px;\n    margin-bottom: 20px;\n    font-size: 18px; }\n  .display__16vX4P .number-block__2JzyMn {\n    padding: 0 6px;\n    background: #fff; }\n    .display__16vX4P .number-block__2JzyMn .number__uq7p15 {\n      display: inline-block; }\n    .display__16vX4P .number-block__2JzyMn .char__DdMdM6 {\n      margin: 0 2px; }\n  .display__16vX4P .result__3YWEcH {\n    padding: 0 6px;\n    padding-top: 20px;\n    color: #888;\n    background: #fff; }\n  .display__16vX4P .textinfo__7akZ0L {\n    padding: 6px;\n    color: #999;\n    font-size: 14px;\n    text-align: left; }\n\n.history__1Oyyy6 {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 10; }\n  .history__1Oyyy6 .history-content__3W5iVk {\n    width: 90%;\n    max-height: 80%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    padding: 10px;\n    background: #fff; }\n    .history__1Oyyy6 .history-content__3W5iVk .close__1TXiA5 {\n      display: inline-block;\n      position: absolute;\n      bottom: -20px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      padding: 10px;\n      text-align: center;\n      background: #fff; }\n\n.num-content__2EUxaQ {\n  background: #fff; }\n  .num-content__2EUxaQ .num-block__oRueSE {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n    .num-content__2EUxaQ .num-block__oRueSE .btn-item__2606Hb {\n      -ms-flex: 1 1;\n          flex: 1 1;\n      padding: 16px 0;\n      text-align: center;\n      font-size: 20px;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      border-top: 1px solid #eee;\n      background: #fafafa; }\n      .num-content__2EUxaQ .num-block__oRueSE .btn-item__2606Hb:not(:last-of-type) {\n        border-right: 1px solid #eee; }\n      .num-content__2EUxaQ .num-block__oRueSE .btn-item__2606Hb:active {\n        background: lightcyan; }\n    .num-content__2EUxaQ .num-block__oRueSE .num-item__3myDPg {\n      background: #fff; }\n",""]),n.locals={caculator:"caculator__1DngpO",display:"display__16vX4P",title:"title__24hPgW","number-block":"number-block__2JzyMn",number:"number__uq7p15",char:"char__DdMdM6",result:"result__3YWEcH",textinfo:"textinfo__7akZ0L",history:"history__1Oyyy6","history-content":"history-content__3W5iVk",close:"close__1TXiA5","num-content":"num-content__2EUxaQ","num-block":"num-block__oRueSE","btn-item":"btn-item__2606Hb","num-item":"num-item__3myDPg"}}});
//# sourceMappingURL=1.2a33dd1c.chunk.js.map