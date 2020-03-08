(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[6],{102:function(e,t,n){e.exports={"md-toolbar":"md-toolbar_md-toolbar__1BCyJ","tool-item":"md-toolbar_tool-item__3eKQA",codebg:"md-toolbar_codebg__1irCR"}},103:function(e,t,n){e.exports={editor:"mdEditor_editor__2Mi5a",fullscreen:"mdEditor_fullscreen__2rarV",content:"mdEditor_content__2PQBD","edit-preview":"mdEditor_edit-preview__zp7KK"}},109:function(e,t,n){"use strict";n.r(t);var a=n(67),r=n.n(a),o=n(68),c=n(63),i=n(0),u=n.n(i),s=n(7),d=n(64),l=n(65),m=n(96),p=(n(97),n(98),n(66)),f=n(73),v=n(99),b=n(100),h=n(104),g=n(101),O=n(105),j=n(102),w=n.n(j),E=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(h.a)(this,Object(g.a)(t).call(this,e))).toolHandler=function(e){n.props.onToolbarClick(e)},n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=[{key:"undo",value:"undo",label:"UnDo",icon:l.j},{key:"redo",value:"redo",label:"ReDo",icon:l.g}];return u.a.createElement("div",{className:w.a["md-toolbar"]},t.map((function(t){return u.a.createElement("div",{key:t.key,className:w.a["tool-item"],onClick:function(){return e.toolHandler(t)},title:t.label},t.icon?u.a.createElement(d.a,{icon:t.icon}):u.a.createElement("span",{className:"code"===t.key?w.a.codebg:""},t.label))})))}}]),t}(u.a.Component),_=n(103),k=n.n(_);t.default=function(){var e=Object(s.h)(),t=Object(s.e)(),n=Object(p.a)(),a=n.getNoteById,v=n.updateNoteById,b=n.fetchNoteById,h=Object(i.useRef)(),g=Object(i.useRef)(""),O=Object(i.useState)(""),j=Object(c.a)(O,2),w=j[0],_=j[1],y=Object(i.useState)(""),x=Object(c.a)(y,2),N=x[0],R=x[1],D=Object(i.useState)(0),C=Object(c.a)(D,2),M=C[0],S=C[1],B=Object(i.useState)(!1),I=Object(c.a)(B,2),L=I[0],F=I[1];Object(i.useEffect)((function(){e.path.includes("/md-editor/")&&T()}),[]);var T=function(){var t=Object(o.a)(r.a.mark((function t(){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=a(e.params.id))){t.next=6;break}_(n.data),R(n.data),t.next=14;break;case 6:return t.next=8,b(e.params.id);case 8:if(!(o=t.sent)){t.next=14;break}if(!o.substring(0,20).includes("<!DOCTYPE html>")){t.next=12;break}return t.abrupt("return");case 12:_(o),R(o);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),H=function(){var e=document.documentElement;L?document.exitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullscreen?e.mozRequestFullscreen():e.eequestFullscreen(),F(!L)},P=function(){var n="",a=e.params.id||h.current;n=e.params.id?"/detail/".concat(a):"/",t.push(n)},q=Object(i.useCallback)((function(){return u.a.createElement("h4",{className:"border-1px-bottom title"},u.a.createElement("span",{onClick:P},u.a.createElement(d.a,{icon:l.b,className:"back"}),"/note-add"===e.path?"\u65b0\u589e":"\u7f16\u8f91"),u.a.createElement("span",{className:k.a.fullscreen,title:L?"\u9000\u51fa\u5168\u5c4f":"\u5168\u5c4f",onClick:H},L?u.a.createElement(d.a,{icon:l.d}):u.a.createElement(d.a,{icon:l.e})))}),[L]),Y={height:"".concat(window.innerHeight-92,"px")};return u.a.createElement("div",{className:k.a.editor},q(),u.a.createElement("section",{className:k.a.content,style:Y},u.a.createElement(m.UnControlled,{value:w,options:{tabSize:2},onChange:function(t,n,a){h.current||(h.current=t),e.params.id||g.current||(g.current="".concat(Date.now())),v(e.params.id||g.current,a),R(a)},onScroll:function(e,t){S(t.top/t.height)}}),u.a.createElement(f.a,{isEdit:!0,mdtext:N,scrollTopRate:M,className:k.a["edit-preview"]})),u.a.createElement(E,{onToolbarClick:function(e){var t,n,a,r;switch(console.log("toolItem: ",e),e.key){case"undo":null===(t=h.current)||void 0===t||t.undo();break;case"redo":null===(n=h.current)||void 0===n||n.redo();break;case"link":null===(a=h.current)||void 0===a||a.redo();break;case"pic":null===(r=h.current)||void 0===r||r.redo()}}}))}},66:function(e,t,n){"use strict";var a=n(67),r=n.n(a),o=n(68),c=n(70),i=n(63),u=n(0),s=n(69);var d=n(17),l=n(13),m=n.n(l),p={testApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("/api/file/getFile",{params:e,data:{showLoading:!0}})},getDemo1Md:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/demo1.md",{data:Object(d.a)({},e)})},getReactHookMd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/React-Hook.md",{data:Object(d.a)({},e)})},getPromiseMd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/promise_This_is.md",{data:Object(d.a)({},e,{showLoading:!0})})},getCalendarMd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/uni-app_calendar.md",{data:Object(d.a)({},e)})},updateFile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m.a.post("/api/file/updateFile",e)}},f=n(18),v={0:0,"24h":864e5,"7day":6048e5},b=[{id:"",date:"",desc:"",data:""}];t.a=Object(s.createModel)((function(){var e=Object(u.useState)("".concat(Date.now())),t=Object(i.a)(e,2),a=t[0],s=t[1],d=Object(u.useState)(!1),l=Object(i.a)(d,2),m=l[0],h=l[1],g=Object(u.useRef)(function(e){var t=e.type,n=void 0===t?"localStorage":t,a=e.cacheKey,r=e.version,o=r;return{cacheKey:a,localVersion:o,getData:function(){var e=window[n].getItem(a);return e?JSON.parse(e).data:null},setData:function(e){var t={version:o,data:e};window[n].setItem(a,JSON.stringify(t))},updateVersion:function(e){o=e;var t=window[n].getItem(a);(t?JSON.parse(t).version:r)!==o&&window[n].removeItem(a)},clear:function(){window[n].removeItem(a)}}}({cacheKey:"note-list",version:a})),O=Object(u.useState)(g.current.getData()||b),j=Object(i.a)(O,2),w=j[0],E=j[1];Object(u.useEffect)((function(){var e;_(),""===(null===(e=w[0])||void 0===e?void 0:e.id)&&(h(!0),n.e(9).then(n.bind(null,106)).then((function(e){var t=e.default;k(function(e){var t=[].concat(Object(c.a)(w),Object(c.a)(e)),n=[];return t.forEach((function(e){e.id&&!n.some((function(t){return t.id===e.id}))&&n.push(e)})),n}(t)),h(!1)})))}),[]),Object(u.useEffect)((function(){w&&g.current.setData(w)}),[w]);var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"24h";Number(a)+v[e]<=Date.now()&&(console.log("\u6e05\u7f13\u5b58"),s("".concat(Date.now())),k([]),g.current.updateVersion("".concat(Date.now())));var t=g.current.getData();t&&k(t)},k=function(e){var t=y(e);E((function(){return t}))},y=function e(t){if(t.length<=1)return t;var n=t.shift(),a=[],r=[];return t.forEach((function(e){var t=new Date(n.date).getTime();new Date(e.date).getTime()<=t?a.push(e):r.push(e)})),e(r).concat(n).concat(e(a))},x=function(e){return e.includes("\n")?e.substring(0,e.indexOf("\n")):e};return{loading:m,noteList:w,getNoteList:function(){return w},getNoteById:function(e){_();var t=null===w||void 0===w?void 0:w.find((function(t){return t.id===e}));return t||null},updateNoteById:function(e,t){e||(e="".concat(Date.now())),E((function(n){var a=n.findIndex((function(t){return t.id===e})),r=Object(f.a)({timeStamp:Date.now(),splitChar:"/"});return a<0?n.push({id:e,data:t,date:r,desc:x(t)}):n[a]={id:e,data:t,date:r,desc:x(t)},y(n).map((function(e){return e}))}))},updateNoteList:k,fetchNoteById:function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=["getDemo1Md","getReactHookMd","getPromiseMd","getCalendarMd"],t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,p[n[t]]();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3),console.error("fetch error: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),clearCache:function(){g.current.clear()}}}))},72:function(e,t,n){e.exports={"md-container":"md-preview_md-container__2Tzsp","md-content":"md-preview_md-content__2evkh","md-detail":"md-preview_md-detail__1p4w4","md-preview":"md-preview_md-preview__UbiTg",drag:"md-preview_drag__3Yxhl"}},73:function(e,t,n){"use strict";var a=n(63),r=n(0),o=n.n(r),c=n(74),i=n.n(c),u=n(75),s=n.n(u),d=n(76),l=n.n(d),m=n(77),p=n.n(m),f=n(78),v=n.n(f),b=(n(79),n(17)),h=n(71),g=function(e){var t=e.className,n=void 0===t?"":t,c=e.onPosChange,i=(Object(h.a)(e,["className","onPosChange"]),Object(r.useRef)()),u=Object(r.useState)({posX:0,posY:0,posRight:10,posBottom:80}),s=Object(a.a)(u,2),d=s[0],l=s[1];Object(r.useEffect)((function(){return m(),function(){var e,t;null===(e=i.current)||void 0===e||e.removeEventListener("touchstart",p,{passive:!1}),null===(t=i.current)||void 0===t||t.removeEventListener("touchmove",f,{passive:!1})}}));var m=function(){var e,t;i.current=document.querySelector(".".concat(n)),null===(e=i.current)||void 0===e||e.addEventListener("touchstart",p,{passive:!1}),null===(t=i.current)||void 0===t||t.addEventListener("touchmove",f,{passive:!1})},p=function(e){e.preventDefault(),e.stopPropagation();var t=e.touches[0],n=t.pageX,a=t.pageY;l(Object(b.a)({},d,{posX:n,posY:a}))},f=function(e){e.preventDefault(),e.stopPropagation(),v(e)},v=function(e){var t=d.posX,n=d.posY,a=d.posRight,r=d.posBottom,o=e.touches[0],i=o.pageX,u=o.pageY,s=0,m=0;i>20&&i<window.innerWidth-20&&(s=i-t<0?a+Math.abs(i-t):a-Math.abs(i-t)),u>20&&u<window.innerHeight-20&&(m=u-n<0?r+Math.abs(u-n):r-Math.abs(u-n)),(i<=20||i>=window.innerWidth-20)&&(s=a),(u<=20||u>=window.innerHeight-20)&&(m=r),m=Math.round(m),s=Math.round(s),l({posX:i,posY:u,posBottom:m,posRight:s}),c({posBottom:m,posRight:s})};return o.a.createElement("div",{className:"btn ".concat(n)})},O=n(72),j=n.n(O);t.a=o.a.memo((function(e){var t=e.isEdit,n=e.mdtext,c=e.className,u=e.scrollTopRate,d=e.onMdRendered,m=Object(r.useRef)(),f=Object(r.useState)(!0),b=Object(a.a)(f,2),h=b[0],O=b[1],w=Object(r.useState)({posBottom:50,posRight:10}),E=Object(a.a)(w,2),_=E[0],k=E[1];Object(r.useEffect)((function(){u&&(m.current=document.querySelector(".".concat(j.a["md-content"])),m.current&&(m.current.scrollTop=m.current.scrollHeight*u))}),[u]);var y=Object(r.useMemo)((function(){return"".concat(j.a["md-container"]," ").concat(t?j.a["md-preview"]:j.a["md-detail"]," ").concat(c||"")}),[t,c]),x=Object(r.useMemo)((function(){var e="".concat(_.posBottom,"px"),n="".concat(_.posRight,"px");return t?{marginBottom:e,marginRight:n}:{}}),[t,_.posBottom,_.posRight]);return o.a.createElement("div",{className:y,style:x},t&&h&&o.a.createElement(g,{className:j.a.drag,onPosChange:function(e){var t=e.posBottom,n=e.posRight;k({posBottom:t,posRight:n})}}),(!t||h)&&o.a.createElement("section",{"data-text":t&&"\u9884\u89c8",className:j.a["md-content"],id:"md-content",dangerouslySetInnerHTML:{__html:i()(n,(function(){var e=new i.a.Renderer;e.heading=function(e,t){return"<h".concat(t,' class="heading-h').concat(t,'" id="').concat(e,'" title="').concat(e,'">').concat(e,"</h").concat(t,">")},e.link=function(e,t,n){return'<a href="'.concat(e,'" title="').concat(t,'" target="_blank">').concat(n,"</a>")},e.image=function(e,t,n){return'<img src="'.concat(e,'" title="').concat(t||n,'" alt="').concat(n,'" style="max-height: 700px; display: inherit; margin: auto;" />')},i.a.setOptions({renderer:e,highlight:function(e){return s.a.registerLanguage("javascript",l.a),s.a.registerLanguage("less",p.a),s.a.registerLanguage("xml",v.a),s.a.highlightAuto(e).value},langPrefix:"",pedantic:!1,gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1})}(),void(null===d||void 0===d||d())))}}),t&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{textAlign:"right"}},o.a.createElement("button",{className:"btn",onClick:function(){O(!h)}},h?"\u5173\u95ed\u9884\u89c8":"\u663e\u793a\u9884\u89c8"))))}),(function(e,t){return!t.isEdit||!Object.keys(t).some((function(n){return t[n]!==e[n]}))}))}}]);