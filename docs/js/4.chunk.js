(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[4],{104:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(76);var a=function(t){var e,n=t.name,o=t.maxLength,i=void 0===o?5:o,a=t.store,u=void 0===a?window:a,c=t.children,s="__keep_alive_cache__",l="function"===typeof c;Object(r.useEffect)((function(){l||console.warn('children\u4f20\u9012\u51fd\u6570\uff0c\u5982:\n <KeepAlive name="list">{(props) => <List {...props} />}</KeepAlive>')}),[]);var f=function(t,e,r){var o=u[s].findIndex((function(t){return t.name===n}));-1!==o?u[s].splice(o,1,{name:n,cache:t,scrollTop:e,state:r}):u[s].unshift({name:n,cache:t,scrollTop:e,state:r}),u[s].length>i&&u[s].pop()},m=function(){return u[s]||(u[s]=[]),u[s].find((function(t){return t.name===n}))||null},p={beforeRouteLeave:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;f((function(){return c(p)}),t,e)},scrollRestore:function(){var t=m();return(null===t||void 0===t?void 0:t.scrollTop)||null},stateRestore:function(){var t=m();return(null===t||void 0===t?void 0:t.state)||null},deleteCache:function(){var t=u[s].findIndex((function(t){return t.name===n}));-1!==t&&(u[s].splice(t,1),console.log("deleteCache-name: ".concat(n)))},getKeepAlive:function(){return m()}};return null!==(e=function(){u[s]||(u[s]=[]);var t=u[s].find((function(t){return t.name===n}));return(null===t||void 0===t?void 0:t.cache())||null}())&&void 0!==e?e:l&&c(p)},u=n(11),c=n(28),s=n(7),l=n(69),f=n(18),m=n(72),p=n(3),h=n(81),d=n.n(h),v=function(){var t=Object(u.a)((function(t){return[t.theme,t.setTheme]})),e=t.theme,n=t.setTheme;return o.a.createElement("span",null,[{text:"\u767d\u5170",color:"blue"},{text:"\u6697\u591c",color:"dark"},{text:"\u6a58\u6a59",color:"orange"},{text:"\u5c0f\u7ea2",color:"red"},{text:"\u6d45\u7eff",color:"green"},{text:"\u5a9a\u7d2b",color:"purple"}].map((function(t){return o.a.createElement("span",{key:t.color,className:"".concat(d.a.color," ").concat(t.color===e?d.a.theme:""),onClick:function(){return e=t.color,void n(e);var e}},t.text,"\xa0")})))},w=n(17),g=n(5),E=n.n(g),y=n(66),_=n(67),b=n(85),O=n.n(b),T=function(t){var e=t.visible,n=t.title,i=t.wrapperClassName,a=t.maskCloseable,u=void 0===a||a,c=t.onClose,s=t.children;Object(w.a)(t,["visible","title","wrapperClassName","maskCloseable","onClose","children"]);Object(r.useEffect)((function(){if(e?(l("add"),document.body.style.overflowY="hidden"):(l("remove"),document.body.style.overflowY=""),u){var t=function t(){setTimeout((function(){return c()}),0),window.removeEventListener("click",t)};e?window.addEventListener("click",t):window.removeEventListener("click",t)}return function(){l("remove"),document.body.style.overflowY=""}}),[e]);var l=function(t){var e;null===(e=document.querySelector("#md-note"))||void 0===e||e.classList[t]("blur")},f="".concat(O.a.content," ").concat(e?O.a.show:"");return e?E.a.createPortal(o.a.createElement((function(){return o.a.createElement("div",{className:O.a.modal},o.a.createElement("div",{className:"".concat(O.a.wrapper," ").concat(i||""),onClick:function(t){return t.stopPropagation()}},o.a.createElement("section",{className:O.a.title},o.a.createElement("span",null,n),o.a.createElement(y.a,{className:O.a.close,icon:_.j,onClick:c})),o.a.createElement("section",{className:f},s)))}),null),document.body):null},P=n(80),N=n.n(P),A=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=Object(r.useState)(!1),i=Object(p.a)(n,2),a=i[0],u=i[1],c=Object(r.useState)(!1),s=Object(p.a)(c,2),f=s[0],m=s[1],h=Object(l.a)((function(t){return[t.clearCache,t.noteList,t.updateNoteList]})),d=h.clearCache,w=h.noteList,g=h.updateNoteList,E=function(t){var e,n=null===(e=t.target.files)||void 0===e?void 0:e[0],r=new FileReader;r.readAsText(n),r.onload=function(t){var e,n=null===(e=t.target)||void 0===e?void 0:e.result;try{var r=JSON.parse(n||"");if(!r||0===r.length||!Array.isArray(r))return;var o=r[0];Object.keys(o).some((function(t){return!o[t]}))||g(r)}catch(i){console.error("\u5bfc\u5165\u6587\u4ef6\u5931\u8d25\uff01",i),alert("\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e\uff01")}}};return o.a.createElement("div",{className:N.a["home-tools"]},o.a.createElement(v,null),o.a.createElement(T,{visible:a,title:"\u8bbe\u7f6e",wrapperClassName:N.a.wrapper,onClose:function(){return u(!1)}},o.a.createElement("section",{className:N.a.content},o.a.createElement("div",{className:N.a.item,onClick:function(t){t.stopPropagation(),d(),setTimeout((function(){alert("\u7f13\u5b58\u6e05\u7406\u6210\u529f\uff01"),u(!1)}),0)}},"\u6e05\u7f13\u5b58"),o.a.createElement("div",{className:N.a.item,onClick:function(e){if(e.stopPropagation(),!f){m(!0);var n=window.URL,r=new Blob([JSON.stringify(w)],{type:"application/json"});t.current.href=n.createObjectURL(r),setTimeout((function(){t.current.click(),m(!1),u(!1)}),0)}}},o.a.createElement("a",{ref:t,href:"href",download:"md-note\u5907\u4efd.json",hidden:!0}),"\u5bfc\u51fa\u5230\u6587\u4ef6(*.josn) ",f?"...":""),o.a.createElement("div",{className:N.a.item,onClick:function(t){var n,r;t.stopPropagation(),null===(n=e.current)||void 0===n||n.addEventListener("change",E),null===(r=e.current)||void 0===r||r.click()}},o.a.createElement("input",{ref:e,type:"file",accept:"application/json",hidden:!0}),"\u4ece\u6587\u4ef6\u5bfc\u5165(*.json)"))))},j=n(74),S=n(77),L=n.n(S),k=function(t){var e,n=Object(l.a)(),i=n.loading,a=n.noteList,c=Object(f.a)().scrollTop,p=Object(u.a)((function(t){return[t.stickyRightStyle]})).stickyRightStyle;Object(r.useEffect)((function(){h()}),[]);var h=function(){var e=t.scrollRestore();setTimeout((function(){document.body.scrollTop=e||0,document.documentElement.scrollTop=e||0}),0)},d=function(){t.beforeRouteLeave(c,{})},v=Object(r.useMemo)((function(){return c>window.innerHeight}),[c]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{className:L.a.header},o.a.createElement("div",{className:"center-content content"},o.a.createElement("div",null,"MD-NOTE",o.a.createElement("span",{className:L.a.desc},"\uff1a\u4e00\u4e2a\u4f7f\u7528 markdown \u7684\u7b80\u6613\u535a\u5ba2")),o.a.createElement(A,null))),o.a.createElement("main",{className:"center-content ".concat(L.a["note-list"])},o.a.createElement("section",{id:i?L.a.skeleton:"",className:L.a.container},(null===a||void 0===a?void 0:a.length)>0?o.a.createElement(o.a.Fragment,null,null===a||void 0===a||null===(e=a.map)||void 0===e?void 0:e.call(a,(function(t){return o.a.createElement(s.Link,{to:"/detail/".concat(t.tag,"/").concat(t.name),className:"link ".concat(L.a.item),key:"".concat(t.tag,"-").concat(t.name),onClick:d},o.a.createElement("div",{className:L.a.title},t.title),o.a.createElement("div",{className:L.a.desc},o.a.createElement("span",{className:L.a.tag},"\u6807\u7b7e\uff1a",o.a.createElement("span",null,t.tag)),o.a.createElement("span",{className:L.a.time},"\u521b\u5efa\u65f6\u95f4\uff1a",t.create_time)))})),o.a.createElement((function(){return o.a.createElement("div",{className:L.a["reach-bottom"]},o.a.createElement("span",null,"\u5230\u5e95\u4e86"))}),null)):o.a.createElement("div",null,"\u6ca1\u6709\u6570\u636e")),v&&o.a.createElement(j.a,{position:p})))};Object(i.a)({name:"@vue-mf/calendar",app:function(){return window.System.import("@vue-mf/calendar")},activeWhen:function(t){return"#/"===t.hash},customProps:{}}),Object(i.b)();e.default=function(){var t=Object(u.a)((function(t){return[t.setIsMobile,t.setRightPanelVisible]})),e=t.setIsMobile,n=t.setRightPanelVisible;return Object(r.useEffect)((function(){var t=c.a.test(window.navigator.userAgent);return e(t),n(!0),function(){n(!1)}}),[]),o.a.createElement(a,{name:"list"},(function(t){return o.a.createElement(k,t)}))}},76:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Pt})),n.d(e,"b",(function(){return Ct}));var r=Object.freeze({__proto__:null,get start(){return Ct},get ensureJQuerySupport(){return pt},get setBootstrapMaxTime(){return z},get setMountMaxTime(){return H},get setUnmountMaxTime(){return V},get setUnloadMaxTime(){return Q},get registerApplication(){return Pt},get getMountedApps(){return bt},get getAppStatus(){return Tt},get unloadApplication(){return At},get checkActivityFunctions(){return Nt},get getAppNames(){return Ot},get pathToActiveWhen(){return Lt},get navigateToUrl(){return ot},get triggerAppChange(){return xt},get addErrorHandler(){return l},get removeErrorHandler(){return f},get mountRootParcel(){return K},get NOT_LOADED(){return h},get LOADING_SOURCE_CODE(){return d},get NOT_BOOTSTRAPPED(){return v},get BOOTSTRAPPING(){return w},get NOT_MOUNTED(){return g},get MOUNTING(){return E},get UPDATING(){return _},get LOAD_ERROR(){return O},get MOUNTED(){return y},get UNMOUNTING(){return b},get SKIP_BECAUSE_BROKEN(){return T}});function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{}).CustomEvent,u=function(){try{var t=new a("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?a:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n},c=[];function s(t,e,n){var r=p(t,e,n);c.length?c.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function l(t){if("function"!=typeof t)throw Error(m(28,!1));c.push(t)}function f(t){if("function"!=typeof t)throw Error(m(29,!1));var e=!1;return c=c.filter((function(n){var r=n===t;return e=e||r,!r})),e}function m(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(e?e+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function p(t,e,n){var r,o="".concat(S(e)," '").concat(A(e),"' died in status ").concat(e.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(m(30,!1,e.status,A(e)));try{r=Error(o+JSON.stringify(t))}catch(e){r=t}}return r.appOrParcelName=A(e),e.status=n,r}var h="NOT_LOADED",d="LOADING_SOURCE_CODE",v="NOT_BOOTSTRAPPED",w="BOOTSTRAPPING",g="NOT_MOUNTED",E="MOUNTING",y="MOUNTED",_="UPDATING",b="UNMOUNTING",O="LOAD_ERROR",T="SKIP_BECAUSE_BROKEN";function P(t){return t.status===y}function N(t){try{return t.activeWhen(window.location)}catch(o){return s(o,t,T),!1}}function A(t){return t.name}function j(t){return Boolean(t.unmountThisParcel)}function S(t){return j(t)?"parcel":"application"}function L(){for(var t=arguments.length-1;t>0;t--)for(var e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function k(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function R(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!k(e,(function(t){return"function"!=typeof t}))));var e}function x(t,e){var n=t[e]||[];0===(n=Array.isArray(n)?n:[n]).length&&(n=[function(){return Promise.resolve()}]);var r=S(t),o=A(t);return function(t){return n.reduce((function(n,i,a){return n.then((function(){var n=i(t);return D(n)?n:Promise.reject(m(15,!1,r,o,e,a))}))}),Promise.resolve())}}function D(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function M(t,e){return Promise.resolve().then((function(){return t.status!==v?t:(t.status=w,Y(t,"bootstrap").then((function(){return t.status=g,t})).catch((function(n){if(e)throw p(n,t,T);return s(n,t,T),t})))}))}function U(t,e){return Promise.resolve().then((function(){if(t.status!==y)return t;t.status=b;var n=Object.keys(t.parcels).map((function(e){return t.parcels[e].unmountThisParcel()}));return Promise.all(n).then(r,(function(n){return r().then((function(){var r=Error(n.message);if(e)throw p(r,t,T);s(r,t,T)}))})).then((function(){return t}));function r(){return Y(t,"unmount").then((function(){t.status=g})).catch((function(n){if(e)throw p(n,t,T);s(n,t,T)}))}}))}var C=!1,I=!1;function B(t,e){return Promise.resolve().then((function(){return t.status!==g?t:(C||(window.dispatchEvent(new u("single-spa:before-first-mount")),C=!0),Y(t,"mount").then((function(){return t.status=y,I||(window.dispatchEvent(new u("single-spa:first-mount")),I=!0),t})).catch((function(n){return t.status=y,U(t,!0).then(r,r);function r(){if(e)throw p(n,t,T);return s(n,t,T),t}})))}))}var G=0,W={parcels:{}};function K(){return J.apply(W,arguments)}function J(t,e){var n=this;if(!t||"object"!==o(t)&&"function"!=typeof t)throw Error(m(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(m(3,!1,o(t.name)));if("object"!==o(e))throw Error(m(4,!1,name,o(e)));if(!e.domElement)throw Error(m(5,!1,name));var r,i=G++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:a?d:v,customProps:e,parentName:A(n),unmountThisParcel:function(){if(c.status!==y)throw Error(m(6,!1,name,c.status));return U(c,!0).then((function(t){return c.parentName&&delete n.parcels[c.id],t})).then((function(t){return l(t),t})).catch((function(t){throw c.status=T,f(t),t}))}};n.parcels[i]=c;var s=u();if(!s||"function"!=typeof s.then)throw Error(m(7,!1));var l,f,h=(s=s.then((function(t){if(!t)throw Error(m(8,!1));var e=t.name||"parcel-".concat(i);if(!R(t.bootstrap))throw Error(m(9,!1,e));if(!R(t.mount))throw Error(m(10,!1,e));if(!R(t.unmount))throw Error(m(11,!1,e));if(t.update&&!R(t.update))throw Error(m(12,!1,e));var n=x(t,"bootstrap"),o=x(t,"mount"),a=x(t,"unmount");c.status=v,c.name=e,c.bootstrap=n,c.mount=o,c.unmount=a,c.timeouts=X(t.timeouts),t.update&&(c.update=x(t,"update"),r.update=function(t){return c.customProps=t,$(function(t){return Promise.resolve().then((function(){if(t.status!==y)throw Error(m(32,!1,A(t)));return t.status=_,Y(t,"update").then((function(){return t.status=y,t})).catch((function(e){throw p(e,t,T)}))}))}(c))})}))).then((function(){return M(c,!0)})),w=h.then((function(){return B(c,!0)})),E=new Promise((function(t,e){l=t,f=e}));return r={mount:function(){return $(Promise.resolve().then((function(){if(c.status!==g)throw Error(m(13,!1,name,c.status));return n.parcels[i]=c,B(c)})))},unmount:function(){return $(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:$(s),bootstrapPromise:$(h),mountPromise:$(w),unmountPromise:$(E)}}function $(t){return t.then((function(){return null}))}function F(t){var e=A(t),n="function"==typeof t.customProps?t.customProps(e,window.location):t.customProps;("object"!==o(n)||null===n||Array.isArray(n))&&(n={},console.warn(m(40,!1),e,n));var i=L({},n,{name:e,mountParcel:J.bind(t),singleSpa:r});return j(t)&&(i.unmountSelf=t.unmountThisParcel),i}var q={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function z(t,e,n){if("number"!=typeof t||t<=0)throw Error(m(16,!1));q.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function H(t,e,n){if("number"!=typeof t||t<=0)throw Error(m(17,!1));q.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function V(t,e,n){if("number"!=typeof t||t<=0)throw Error(m(18,!1));q.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Q(t,e,n){if("number"!=typeof t||t<=0)throw Error(m(19,!1));q.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Y(t,e){var n=t.timeouts[e],r=n.warningMillis,o=S(t);return new Promise((function(i,a){var u=!1,c=!1;t[e](F(t)).then((function(t){u=!0,i(t)})).catch((function(t){u=!0,a(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),n.millis);var s=m(31,!1,e,o,A(t),n.millis);function l(t){if(!u)if(!0===t)c=!0,n.dieOnTimeout?a(Error(s)):console.error(s);else if(!c){var e=t,o=e*r;console.warn(s),o+r<n.millis&&setTimeout((function(){return l(e+1)}),r)}}}))}function X(t){var e={};for(var n in q)e[n]=L({},q[n],t&&t[n]||{});return e}function Z(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==h&&t.status!==O?t:(t.status=d,t.loadPromise=Promise.resolve().then((function(){var r=t.loadApp(F(t));if(!D(r))throw n=!0,Error(m(33,!1,A(t)));return r.then((function(n){var r;t.loadErrorTime=null,"object"!==o(e=n)&&(r=34),R(e.bootstrap)||(r=35),R(e.mount)||(r=36),R(e.unmount)||(r=37);var i=S(e);if(r){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(m(r,!1,i,A(t),a),e),s(void 0,t,T),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=L({},t.devtools.overlays,e.devtools.overlays)),t.status=v,t.bootstrap=x(e,"bootstrap"),t.mount=x(e,"mount"),t.unmount=x(e,"unmount"),t.unload=x(e,"unload"),t.timeouts=X(e.timeouts),delete t.loadPromise,t}))})).catch((function(e){var r;return delete t.loadPromise,n?r=T:(r=O,t.loadErrorTime=(new Date).getTime()),s(e,t,r),t})));var e,n}))}var tt,et="undefined"!=typeof window,nt={hashchange:[],popstate:[]},rt=["hashchange","popstate"];function ot(t){var e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(m(14,!1));e=t.currentTarget.href,t.preventDefault()}var n=ft(window.location.href),r=ft(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function it(t){var e=this;if(t){var n=t[0].type;rt.indexOf(n)>=0&&nt[n].forEach((function(n){try{n.apply(e,t)}catch(t){setTimeout((function(){throw t}))}}))}}function at(){Dt([],arguments)}function ut(t,e){return function(){var n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return tt&&n===o||at(ct(window.history.state,e)),r}}function ct(t,e){var n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){(n=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}if(et){window.addEventListener("hashchange",at),window.addEventListener("popstate",at);var st=window.addEventListener,lt=window.removeEventListener;window.addEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0)||k(nt[t],(function(t){return t===e})))return st.apply(this,arguments);nt[t].push(e)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0))return lt.apply(this,arguments);nt[t]=nt[t].filter((function(t){return t!==e}))},window.history.pushState=ut(window.history.pushState,"pushState"),window.history.replaceState=ut(window.history.replaceState,"replaceState"),window.singleSpaNavigate=ot}function ft(t){var e=document.createElement("a");return e.href=t,e}var mt=!1;function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!mt){var e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return ht.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return ht.call(this,n,window.removeEventListener,t,e,arguments)},mt=!0}}function ht(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((function(t){rt.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}var dt={};function vt(t){return Promise.resolve().then((function(){var e=dt[A(t)];return e?t.status===h?(wt(t,e),t):"UNLOADING"===t.status?e.promise.then((function(){return t})):t.status!==g?t:(t.status="UNLOADING",Y(t,"unload").then((function(){return wt(t,e),t})).catch((function(n){return function(t,e,n){delete dt[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,s(n,t,T),e.reject(n)}(t,e,n),t}))):t}))}function wt(t,e){delete dt[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=h,e.resolve()}function gt(t,e,n,r){dt[A(t)]={app:t,resolve:n,reject:r},Object.defineProperty(dt[A(t)],"promise",{get:e})}function Et(t){return dt[t]}var yt=[];function _t(){var t=[],e=[],n=[],r=[],o=(new Date).getTime();return yt.forEach((function(i){var a=i.status!==T&&N(i);switch(i.status){case O:o-i.loadErrorTime>=200&&n.push(i);break;case h:a&&n.push(i);break;case v:case g:!a&&Et(A(i))?t.push(i):a&&r.push(i);break;case y:a||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}function bt(){return yt.filter(P).map(A)}function Ot(){return yt.map(A)}function Tt(t){var e=k(yt,(function(e){return A(e)===t}));return e?e.status:null}function Pt(t,e,n,r){var i=function(t,e,n,r){var i,a={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===o(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(m(39,!1));var e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==n.length)throw Error(m(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(m(20,!1));if("object"!==o(t.app)&&"function"!=typeof t.app)throw Error(m(20,!1));var r=function(t){return"string"==typeof t||"function"==typeof t};if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(m(24,!1));if(!St(t.customProps))throw Error(m(22,!1))}(t),a.name=t.name,a.loadApp=t.app,a.activeWhen=t.activeWhen,a.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(m(20,!1));if(!e)throw Error(m(23,!1));if("function"!=typeof n)throw Error(m(24,!1));if(!St(r))throw Error(m(22,!1))}(t,e,n,r),a.name=t,a.loadApp=e,a.activeWhen=n,a.customProps=r),a.loadApp="function"!=typeof(i=a.loadApp)?function(){return Promise.resolve(i)}:i,a.customProps=function(t){return t||{}}(a.customProps),a.activeWhen=function(t){var e=Array.isArray(t)?t:[t];return e=e.map((function(t){return"function"==typeof t?t:Lt(t)})),function(t){return e.some((function(e){return e(t)}))}}(a.activeWhen),a}(t,e,n,r);if(-1!==Ot().indexOf(i.name))throw Error(m(21,!1,i.name));yt.push(L({loadErrorTime:null,status:h,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),et&&(pt(),Dt())}function Nt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return yt.filter((function(e){return e.activeWhen(t)})).map(A)}function At(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(m(26,!1));var n=k(yt,(function(e){return A(e)===t}));if(!n)throw Error(m(27,!1,t));var r,o=Et(A(n));if(e&&e.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,e){gt(n,(function(){return i}),t,e)}));return i}return o?(r=o.promise,jt(n,o.resolve,o.reject)):r=new Promise((function(t,e){gt(n,(function(){return r}),t,e),jt(n,t,e)})),r}function jt(t,e,n){U(t).then(vt).then((function(){e(),setTimeout((function(){Dt()}))})).catch(n)}function St(t){return!t||"function"==typeof t||"object"===o(t)&&null!==t&&!Array.isArray(t)}function Lt(t){var e=function(t){for(var e=0,n=!1,r="^",o=0;o<t.length;o++){var i=t[o];(!n&&":"===i||n&&"/"===i)&&a(o)}return a(t.length),new RegExp(r,"i");function a(o){var i=t.slice(e,o).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");r+=n?"[^/]+/?":i,o!==t.length||n||(r="/"===r.charAt(r.length-1)?"".concat(r,".*$"):"".concat(r,"(/.*)?$")),n=!n,e=o}}(t);return function(t){var n=t.href.replace(t.origin,"");return e.test(n)}}var kt=!1,Rt=[];function xt(){return Dt()}function Dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if(kt)return new Promise((function(t,n){Rt.push({resolve:t,reject:n,eventArguments:e})}));var n,r=_t(),o=r.appsToUnload,a=r.appsToUnmount,c=r.appsToLoad,s=r.appsToMount;return It()?(kt=!0,n=o.concat(c,a,s),f()):(n=c,l());function l(){return Promise.resolve().then((function(){var t=c.map(Z);return Promise.all(t).then(p).then((function(){return[]})).catch((function(t){throw p(),t}))}))}function f(){return Promise.resolve().then((function(){window.dispatchEvent(new u(0===n.length?"single-spa:before-no-app-change":"single-spa:before-app-change",d(!0))),window.dispatchEvent(new u("single-spa:before-routing-event",d(!0)));var e=o.map(vt),r=a.map(U).map((function(t){return t.then(vt)})).concat(e),i=Promise.all(r);i.then((function(){window.dispatchEvent(new u("single-spa:before-mount-routing-event",d(!0)))}));var l=c.map((function(t){return Z(t).then((function(t){return Mt(t,i)}))})),f=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return Mt(t,i)}));return i.catch((function(t){throw p(),t})).then((function(){return p(),Promise.all(l.concat(f)).catch((function(e){throw t.forEach((function(t){return t.reject(e)})),e})).then(m)}))}))}function m(){var e=bt();t.forEach((function(t){return t.resolve(e)}));try{var r=0===n.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new u(r,d())),window.dispatchEvent(new u("single-spa:routing-event",d()))}catch(t){setTimeout((function(){throw t}))}if(kt=!1,Rt.length>0){var o=Rt;Rt=[],Dt(o)}return e}function p(){t.forEach((function(t){it(t.eventArguments)})),it(e)}function d(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],u={},l=(i(t={},y,[]),i(t,g,[]),i(t,h,[]),i(t,T,[]),t);return r?(c.concat(s).forEach((function(t,e){f(t,y)})),o.forEach((function(t){f(t,h)})),a.forEach((function(t){f(t,g)}))):n.forEach((function(t){f(t)})),{detail:{newAppStatuses:u,appsByNewStatus:l,totalAppChanges:n.length,originalEvent:null==e?void 0:e[0]}};function f(t,e){var n=A(t);e=e||Tt(n),u[n]=e,(l[e]=l[e]||[]).push(n)}}}function Mt(t,e){return N(t)?M(t).then((function(t){return e.then((function(){return N(t)?B(t):t}))})):e.then((function(){return t}))}var Ut=!1;function Ct(t){var e;Ut=!0,t&&t.urlRerouteOnly&&(e=t.urlRerouteOnly,tt=e),et&&Dt()}function It(){return Ut}et&&setTimeout((function(){Ut||console.warn(m(1,!1))}),5e3);var Bt={getRawAppData:function(){return[].concat(yt)},reroute:Dt,NOT_LOADED:h,toLoadPromise:Z,toBootstrapPromise:M,unregisterApplication:function(t){if(0===yt.filter((function(e){return A(e)===t})).length)throw Error(m(25,!1,t));return At(t).then((function(){var e=yt.map(A).indexOf(t);yt.splice(e,1)}))}};et&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Bt)}).call(this,n(68))},77:function(t,e,n){t.exports={skeleton:"styles_skeleton__3ukwv",title:"styles_title__nw5Zx",tag:"styles_tag__2TSDU",time:"styles_time__3mGqg",loading:"styles_loading__1DMIQ","note-list":"styles_note-list__2zqXG",add:"styles_add__o5xaK",header:"styles_header__1gp7S",desc:"styles_desc__1rnEU",container:"styles_container__3-veP",item:"styles_item__1B07z","reach-bottom":"styles_reach-bottom__zZkdK"}},80:function(t,e,n){t.exports={"home-tools":"styles_home-tools__1PwEE",setting:"styles_setting__3HoBT",wrapper:"styles_wrapper__1GlOL",content:"styles_content__WjJal",item:"styles_item__2tqI9",show:"styles_show__mWgv2"}},81:function(t,e,n){t.exports={color:"styles_color__13Tm0",theme:"styles_theme__TpL08"}},85:function(t,e,n){t.exports={modal:"styles_modal__1Ub6-",wrapper:"styles_wrapper__1oBPs",show:"styles_show__1lTom",title:"styles_title__34foz","svg-inline--fa":"styles_svg-inline--fa__X3lto",content:"styles_content__N3_8d"}}}]);