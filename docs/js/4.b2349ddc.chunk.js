(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[4],{102:function(e,t,a){"use strict";a.r(t);var n=a(61),c=a.n(n),o=a(62),l=a(14),i=a(13),r=a(0),u=a.n(r),s=a(3),d=a(54),m=a(55),f=a(56),b=a(4),v=a(70),h=a(59),_=a(69),E=a(64),g=a(60),p=a(68),O=a(67),j=a(57),y=a(85),w=a.n(y),N=function(e){var t=e.mdtext,a=e.defaultActive,n=e.onCateClick,c=e.onGetTitle,o=Object(j.a)(e,["mdtext","defaultActive","onCateClick","onGetTitle"]),l=Object(g.a)().scrollTop,s=Object(r.useRef)(!0),f=Object(r.useState)(!1),b=Object(i.a)(f,2),v=b[0],h=b[1],_=Object(r.useState)([]),E=Object(i.a)(_,2),p=E[0],y=E[1],N=Object(r.useState)(""),k=Object(i.a)(N,2),x=k[0],C=k[1],S=Object(r.useState)(""),B=Object(i.a)(S,2),I=B[0],L=B[1],T=Object(r.useState)([]),R=Object(i.a)(T,2),A=R[0],D=R[1];Object(r.useEffect)((function(){I&&(document.title+="|".concat(I),null===c||void 0===c||c(I))}),[I]),Object(r.useEffect)((function(){a&&C(a)}),[]),Object(r.useEffect)((function(){V()}),[x]),Object(r.useEffect)((function(){M()}),[]),Object(r.useEffect)((function(){document.body.style.overflowY=v?"hidden":"auto"}),[v]),Object(r.useEffect)((function(){D(function e(t){var a=[];return t.forEach((function(t){var n;(null===t||void 0===t||null===(n=t.child)||void 0===n?void 0:n.length)?a.push.apply(a,[t].concat(Object(O.a)(e(t.child)))):a.push(t)})),a}(p))}),[p]),Object(r.useEffect)((function(){s.current&&F()}),[l]);var F=function(){try{A.forEach((function(e){var t=document.getElementById(e.id);t&&(t.getBoundingClientRect().top<0&&C(e.id))}))}catch(e){console.error(e)}},M=function(){var e=[],a=[],n=t.slice(t.indexOf("\n"),t.length);L(t.slice(1,t.indexOf("\n"))),n.split("\n## ").forEach((function(t){var n=t.substring(0,t.indexOf("\n")).trim(),c=t.split("\n### ");c.shift();var o=[];c.forEach((function(e){var t=e.substring(0,e.indexOf("\n")).trim();o.push({id:t,header:"catelog-".concat(t),label:t})}));var l={id:n,header:"catelog-".concat(n),label:n,child:[]};e.push(n),o.length>0&&(l.child=o,e=e.concat(o.map((function(e){return e.id})))),a.push(l)})),y((function(){return a.filter((function(e){return Boolean(e.id)}))}))},V=function(){var e=document.getElementById("catelog-".concat(x));null===e||void 0===e||e.scrollIntoView(),null===n||void 0===n||n(x)},Y=function(e){var t;null===(t=document.querySelector("#md-note"))||void 0===t||t.classList[e]("blur")},q=Object(r.useCallback)((function(e){var t="".concat(w.a["cate-item"]," ").concat(x===e.id?w.a.active:"");return u.a.createElement("div",{"data-id":e.id,id:e.header,className:t,onClick:function(){return function(e){var t=document.getElementById(e.id);null===t||void 0===t||t.scrollIntoView(),s.current=!1,Y("remove"),C(e.id),null===n||void 0===n||n(e.id),setTimeout((function(){h(!1),s.current=!0}),0)}(e)}},e.label)}),[x]),H=Object(r.useMemo)((function(){return v?w.a["cate-show"]:""}),[v]);return u.a.createElement("div",{id:"catalog",className:w.a.catalog},u.a.createElement(d.a,{className:"btn",icon:m.h,onClick:function(){Y("add"),setTimeout((function(){return h(!0)}),0)}}),u.a.createElement("div",{className:w.a.bg,style:{display:v?"block":"none"}}),u.a.createElement("div",{className:"".concat(w.a.catelist," ").concat(H),onClick:function(e){return e.stopPropagation()}},v&&u.a.createElement("span",{className:w.a.close,onClick:function(){h(!1),Y("remove")}},u.a.createElement(d.a,{icon:m.d})),u.a.createElement("section",{className:w.a.head,title:I},"\u76ee\u5f55: ",I),u.a.createElement("section",{className:w.a["cate-content"]},p.length>0?p.map((function(e){var t,a;return u.a.createElement("ul",{key:e.id},q(e),e.child&&(null===(t=e.child)||void 0===t?void 0:t.length)>0&&(null===(a=e.child)||void 0===a?void 0:a.map((function(e){return u.a.createElement("ul",{key:e.id},q(e))}))))})):u.a.createElement((function(){return u.a.createElement("div",{className:w.a.desc},u.a.createElement("p",null,"\u4e00\u7ea7\u6807\u9898'#'\u4e3a\u6587\u7ae0\u540d\uff0c"),u.a.createElement("p",null,"\u4e8c\u7ea7\u6807\u9898'##'\u4e3a\u4e00\u7ea7\u76ee\u5f55\uff0c"),u.a.createElement("p",null,"\u4e09\u7ea7\u6807\u9898'###'\u4e3a\u4e09\u7ea7\u76ee\u5f55"))}),null))),o.children)},k=a(79),x=a.n(k),C=a(9),S=a.n(C),B=a(83),I=a.n(B),L=function(e){var t=e.show,a=e.src,n=e.alt,c=e.onClose;return Object(r.useEffect)((function(){var e=document.querySelector("#md-note"),a=document.querySelector("#catalog");return t?(e.classList.add("blur"),a.classList.add("blur"),document.body.style.overflowY="hidden"):(e.classList.remove("blur"),a.classList.remove("blur"),document.body.style.overflowY=""),function(){e.classList.remove("blur"),a.classList.remove("blur"),document.body.style.overflowY=""}}),[t]),S.a.createPortal(u.a.createElement(u.a.Fragment,null,t&&u.a.createElement("section",{className:I.a["pic-preview"]},u.a.createElement("div",{className:I.a.content},u.a.createElement("button",{className:"btn ".concat(I.a.close),onClick:c},"X"),u.a.createElement("div",{className:I.a["img-content"]},a?u.a.createElement("img",{src:a,alt:n}):u.a.createElement("span",{className:I.a.loading},"\u6b63\u5728\u751f\u6210\u622a\u56fe\u3002\u3002\u3002")),u.a.createElement("div",{className:I.a.text},"\u5bfc\u51fa\u56fe\u7247\u9884\u89c8\uff0c\u53f3\u952e\u53e6\u5b58/\u957f\u6309\u4fdd\u5b58\uff01")))),document.body)};t.default=function(){Object(f.a)((function(e){return[e.theme]})).theme;var e=Object(h.a)((function(e){return[e.getNoteById,e.updateNoteById,e.fetchNoteById]})),t=e.getNoteById,a=e.updateNoteById,n=e.fetchNoteById,O=Object(s.useParams)(),j=O.tag,y=O.tid,w=Object(s.useHistory)(),k=Object(s.useLocation)(),C=Object(g.a)().scrollTop,S=Object(f.a)((function(e){return[e.stickyRightStyle]})).stickyRightStyle,B=Object(r.useState)(!1),I=Object(i.a)(B,2),T=I[0],R=I[1],A=Object(r.useState)(""),D=Object(i.a)(A,2),F=D[0],M=D[1],V=Object(r.useState)(),Y=Object(i.a)(V,2),q=Y[0],H=Y[1],P=Object(r.useState)(!1),X=Object(i.a)(P,2),G=X[0],K=X[1],J=Object(r.useState)(),z=Object(i.a)(J,2),Q=z[0],U=z[1],W=Object(r.useState)({show:!1,src:"",alt:"",onClose:function(){ee((function(e){return Object(l.a)({},e,{show:!1})}))}}),Z=Object(i.a)(W,2),$=Z[0],ee=Z[1];Object(r.useEffect)((function(){te()}),[]),Object(r.useEffect)((function(){ce()}),[C]);var te=function(){var e=Object(o.a)(c.a.mark((function e(){var o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(o=t(y))||void 0===o?void 0:o.data)){e.next=4;break}return H(o.data),e.abrupt("return");case 4:return e.prev=4,e.next=7,n(j,y);case 7:if(0!==(null===(l=e.sent)||void 0===l?void 0:l.code)){e.next=15;break}if(!l.data.substring(0,20).includes("<!DOCTYPE html>")){e.next=11;break}return e.abrupt("return");case 11:a(y,l.data),H(l.data),e.next=18;break;case 15:console.log("\u6570\u636e\u6ca1\u6709\u4e86\uff01"),H(""),R(!0);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=document.querySelectorAll("#md-note .md-img");Array.from(e).forEach((function(e){e.onclick=function(){window.open(e.src)}}))},ne=function(e){if(e){var t=document.getElementById(e);null===t||void 0===t||t.scrollIntoView(),U(e)}},ce=function(){K((function(){return C>window.innerHeight}))};return u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{className:x.a.header},u.a.createElement("div",{className:"center-content"},u.a.createElement(d.a,{icon:m.c,className:x.a.back,title:"\u8fd4\u56de\u9996\u9875",onClick:function(){w.push("/")}}),u.a.createElement("span",{className:x.a.title,title:"\u6587\u7ae0\u6807\u9898"},"\xa0",F))),u.a.createElement("main",{className:"center-content ".concat(x.a["note-detail"])},q?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{mdtext:q,onMdRendered:function(){var e=k.hash.substr(1,k.hash.length);setTimeout((function(){ne(decodeURI(e)),ae()}),0)}}),u.a.createElement(L,$),u.a.createElement(_.a,null,u.a.createElement(N,{mdtext:q,defaultActive:Q,onCateClick:function(e){w.replace({pathname:k.pathname,hash:e})},onGetTitle:function(e){M(e)}}))):!T&&u.a.createElement(b.a,null),T&&u.a.createElement((function(){return u.a.createElement("div",{className:x.a["article-404"]},"\u6587\u7ae0\u4e0d\u89c1\u4e86\u3002\u3002\u3002")}),null),G&&u.a.createElement(v.a,{position:S})))}},79:function(e,t,a){e.exports={"note-detail":"note-detail_note-detail__300Me","article-404":"note-detail_article-404__o-fL3",header:"note-detail_header__w4hse",title:"note-detail_title__-MHTr",back:"note-detail_back__1cf7y"}},83:function(e,t,a){e.exports={"pic-preview":"index_pic-preview__1b7eL",content:"index_content__NRfaT",close:"index_close__28ht6",loading:"index_loading__gupw7","img-content":"index_img-content__3wpFr",text:"index_text__teOB-"}},85:function(e,t,a){e.exports={catalog:"mdCatalog_catalog__3r75B",bg:"mdCatalog_bg__3VFDw",catelist:"mdCatalog_catelist__VMStr",close:"mdCatalog_close__1gQeK",head:"mdCatalog_head__3D1zK",desc:"mdCatalog_desc__2yoDB","cate-content":"mdCatalog_cate-content__2W5XA","cate-item":"mdCatalog_cate-item__3f3Dt",active:"mdCatalog_active__KtXHX","cate-show":"mdCatalog_cate-show__vLLRv"}}}]);