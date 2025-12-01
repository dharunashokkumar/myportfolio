(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},yo={};var ax;function Z_(){if(ax)return yo;ax=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=t,yo.jsx=i,yo.jsxs=i,yo}var sx;function K_(){return sx||(sx=1,Gf.exports=Z_()),Gf.exports}var T=K_(),kf={exports:{}},ut={};var rx;function Q_(){if(rx)return ut;rx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function g(L,q,pe){this.props=L,this.context=q,this.refs=y,this.updater=pe||E}g.prototype.isReactComponent={},g.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=g.prototype;function U(L,q,pe){this.props=L,this.context=q,this.refs=y,this.updater=pe||E}var I=U.prototype=new P;I.constructor=U,A(I,g.prototype),I.isPureReactComponent=!0;var W=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function D(L,q,pe){var ye=pe.ref;return{$$typeof:o,type:L,key:q,ref:ye!==void 0?ye:null,props:pe}}function R(L,q){return D(L.type,q,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function te(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return q[pe]})}var ce=/\/+/g;function ge(L,q){return typeof L=="object"&&L!==null&&L.key!=null?te(""+L.key):q.toString(36)}function me(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(z,z):(L.status="pending",L.then(function(q){L.status==="pending"&&(L.status="fulfilled",L.value=q)},function(q){L.status==="pending"&&(L.status="rejected",L.reason=q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function F(L,q,pe,ye,Re){var Z=typeof L;(Z==="undefined"||Z==="boolean")&&(L=null);var ue=!1;if(L===null)ue=!0;else switch(Z){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(L.$$typeof){case o:case t:ue=!0;break;case _:return ue=L._init,F(ue(L._payload),q,pe,ye,Re)}}if(ue)return Re=Re(L),ue=ye===""?"."+ge(L,0):ye,W(Re)?(pe="",ue!=null&&(pe=ue.replace(ce,"$&/")+"/"),F(Re,q,pe,"",function(ke){return ke})):Re!=null&&(k(Re)&&(Re=R(Re,pe+(Re.key==null||L&&L.key===Re.key?"":(""+Re.key).replace(ce,"$&/")+"/")+ue)),q.push(Re)),1;ue=0;var Ce=ye===""?".":ye+":";if(W(L))for(var Ie=0;Ie<L.length;Ie++)ye=L[Ie],Z=Ce+ge(ye,Ie),ue+=F(ye,q,pe,Z,Re);else if(Ie=S(L),typeof Ie=="function")for(L=Ie.call(L),Ie=0;!(ye=L.next()).done;)ye=ye.value,Z=Ce+ge(ye,Ie++),ue+=F(ye,q,pe,Z,Re);else if(Z==="object"){if(typeof L.then=="function")return F(me(L),q,pe,ye,Re);throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ue}function j(L,q,pe){if(L==null)return L;var ye=[],Re=0;return F(L,ye,"","",function(Z){return q.call(pe,Z,Re++)}),ye}function G(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var le=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},xe={map:j,forEach:function(L,q,pe){j(L,function(){q.apply(this,arguments)},pe)},count:function(L){var q=0;return j(L,function(){q++}),q},toArray:function(L){return j(L,function(q){return q})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ut.Activity=x,ut.Children=xe,ut.Component=g,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=U,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ut.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ut.cache=function(L){return function(){return L.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(L,q,pe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ye=A({},L.props),Re=L.key;if(q!=null)for(Z in q.key!==void 0&&(Re=""+q.key),q)!ne.call(q,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&q.ref===void 0||(ye[Z]=q[Z]);var Z=arguments.length-2;if(Z===1)ye.children=pe;else if(1<Z){for(var ue=Array(Z),Ce=0;Ce<Z;Ce++)ue[Ce]=arguments[Ce+2];ye.children=ue}return D(L.type,Re,ye)},ut.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ut.createElement=function(L,q,pe){var ye,Re={},Z=null;if(q!=null)for(ye in q.key!==void 0&&(Z=""+q.key),q)ne.call(q,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Re[ye]=q[ye]);var ue=arguments.length-2;if(ue===1)Re.children=pe;else if(1<ue){for(var Ce=Array(ue),Ie=0;Ie<ue;Ie++)Ce[Ie]=arguments[Ie+2];Re.children=Ce}if(L&&L.defaultProps)for(ye in ue=L.defaultProps,ue)Re[ye]===void 0&&(Re[ye]=ue[ye]);return D(L,Z,Re)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(L){return{$$typeof:h,render:L}},ut.isValidElement=k,ut.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:G}},ut.memo=function(L,q){return{$$typeof:p,type:L,compare:q===void 0?null:q}},ut.startTransition=function(L){var q=O.T,pe={};O.T=pe;try{var ye=L(),Re=O.S;Re!==null&&Re(pe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(z,le)}catch(Z){le(Z)}finally{q!==null&&pe.types!==null&&(q.types=pe.types),O.T=q}},ut.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ut.use=function(L){return O.H.use(L)},ut.useActionState=function(L,q,pe){return O.H.useActionState(L,q,pe)},ut.useCallback=function(L,q){return O.H.useCallback(L,q)},ut.useContext=function(L){return O.H.useContext(L)},ut.useDebugValue=function(){},ut.useDeferredValue=function(L,q){return O.H.useDeferredValue(L,q)},ut.useEffect=function(L,q){return O.H.useEffect(L,q)},ut.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ut.useId=function(){return O.H.useId()},ut.useImperativeHandle=function(L,q,pe){return O.H.useImperativeHandle(L,q,pe)},ut.useInsertionEffect=function(L,q){return O.H.useInsertionEffect(L,q)},ut.useLayoutEffect=function(L,q){return O.H.useLayoutEffect(L,q)},ut.useMemo=function(L,q){return O.H.useMemo(L,q)},ut.useOptimistic=function(L,q){return O.H.useOptimistic(L,q)},ut.useReducer=function(L,q,pe){return O.H.useReducer(L,q,pe)},ut.useRef=function(L){return O.H.useRef(L)},ut.useState=function(L){return O.H.useState(L)},ut.useSyncExternalStore=function(L,q,pe){return O.H.useSyncExternalStore(L,q,pe)},ut.useTransition=function(){return O.H.useTransition()},ut.version="19.2.0",ut}var ox;function ph(){return ox||(ox=1,kf.exports=Q_()),kf.exports}var $e=ph(),jf={exports:{}},So={},Xf={exports:{}},Wf={};var lx;function J_(){return lx||(lx=1,(function(o){function t(F,j){var G=F.length;F.push(j);e:for(;0<G;){var le=G-1>>>1,xe=F[le];if(0<l(xe,j))F[le]=j,F[G]=xe,G=le;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var j=F[0],G=F.pop();if(G!==j){F[0]=G;e:for(var le=0,xe=F.length,L=xe>>>1;le<L;){var q=2*(le+1)-1,pe=F[q],ye=q+1,Re=F[ye];if(0>l(pe,G))ye<xe&&0>l(Re,pe)?(F[le]=Re,F[ye]=G,le=ye):(F[le]=pe,F[q]=G,le=q);else if(ye<xe&&0>l(Re,G))F[le]=Re,F[ye]=G,le=ye;else break e}}return j}function l(F,j){var G=F.sortIndex-j.sortIndex;return G!==0?G:F.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,b=3,S=!1,E=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(F){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=F)s(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function W(F){if(A=!1,I(F),!E)if(i(m)!==null)E=!0,z||(z=!0,te());else{var j=i(p);j!==null&&me(W,j.startTime-F)}}var z=!1,O=-1,ne=5,D=-1;function R(){return y?!0:!(o.unstable_now()-D<ne)}function k(){if(y=!1,z){var F=o.unstable_now();D=F;var j=!0;try{e:{E=!1,A&&(A=!1,P(O),O=-1),S=!0;var G=b;try{t:{for(I(F),x=i(m);x!==null&&!(x.expirationTime>F&&R());){var le=x.callback;if(typeof le=="function"){x.callback=null,b=x.priorityLevel;var xe=le(x.expirationTime<=F);if(F=o.unstable_now(),typeof xe=="function"){x.callback=xe,I(F),j=!0;break t}x===i(m)&&s(m),I(F)}else s(m);x=i(m)}if(x!==null)j=!0;else{var L=i(p);L!==null&&me(W,L.startTime-F),j=!1}}break e}finally{x=null,b=G,S=!1}j=void 0}}finally{j?te():z=!1}}}var te;if(typeof U=="function")te=function(){U(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ge=ce.port2;ce.port1.onmessage=k,te=function(){ge.postMessage(null)}}else te=function(){g(k,0)};function me(F,j){O=g(function(){F(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(F){switch(b){case 1:case 2:case 3:var j=3;break;default:j=b}var G=b;b=j;try{return F()}finally{b=G}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var G=b;b=F;try{return j()}finally{b=G}},o.unstable_scheduleCallback=function(F,j,G){var le=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?le+G:le):G=le,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=G+xe,F={id:_++,callback:j,priorityLevel:F,startTime:G,expirationTime:xe,sortIndex:-1},G>le?(F.sortIndex=G,t(p,F),i(m)===null&&F===i(p)&&(A?(P(O),O=-1):A=!0,me(W,G-le))):(F.sortIndex=xe,t(m,F),E||S||(E=!0,z||(z=!0,te()))),F},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(F){var j=b;return function(){var G=b;b=j;try{return F.apply(this,arguments)}finally{b=G}}}})(Wf)),Wf}var cx;function $_(){return cx||(cx=1,Xf.exports=J_()),Xf.exports}var Yf={exports:{}},Rn={};var ux;function e1(){if(ux)return Rn;ux=1;var o=ph();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Rn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.0",Rn}var fx;function t1(){if(fx)return Yf.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yf.exports=e1(),Yf.exports}var dx;function n1(){if(dx)return So;dx=1;var o=$_(),t=ph(),i=t1();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,w=c.child;w;){if(w===a){v=!0,a=c,r=f;break}if(w===r){v=!0,r=c,a=f;break}w=w.sibling}if(!v){for(w=f.child;w;){if(w===a){v=!0,a=f,r=c;break}if(w===r){v=!0,r=f,a=c;break}w=w.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case W:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ge(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return ge(e(n))}catch{}}return null}var me=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},le=[],xe=-1;function L(e){return{current:e}}function q(e){0>xe||(e.current=le[xe],le[xe]=null,xe--)}function pe(e,n){xe++,le[xe]=e.current,e.current=n}var ye=L(null),Re=L(null),Z=L(null),ue=L(null);function Ce(e,n){switch(pe(Z,n),pe(Re,e),pe(ye,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wm(n),e=Cm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(ye),pe(ye,e)}function Ie(){q(ye),q(Re),q(Z)}function ke(e){e.memoizedState!==null&&pe(ue,e);var n=ye.current,a=Cm(n,e.type);n!==a&&(pe(Re,e),pe(ye,a))}function it(e){Re.current===e&&(q(ye),q(Re)),ue.current===e&&(q(ue),go._currentValue=G)}var Rt,at;function gt(e){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+at}var H=!1;function lt(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(he){var oe=he}Reflect.construct(e,[],Ee)}else{try{Ee.call()}catch(he){oe=he}e.call(Ee.prototype)}}else{try{throw Error()}catch(he){oe=he}(Ee=e())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(he){if(he&&oe&&typeof he.stack=="string")return[he.stack,oe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],w=f[1];if(v&&w){var B=v.split(`
`),ae=w.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<ae.length&&!ae[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===ae.length)for(r=B.length-1,c=ae.length-1;1<=r&&0<=c&&B[r]!==ae[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==ae[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==ae[c]){var be=`
`+B[r].replace(" at new "," at ");return e.displayName&&be.includes("<anonymous>")&&(be=be.replace("<anonymous>",e.displayName)),be}while(1<=r&&0<=c);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function Fe(e,n){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return gt("Activity");default:return""}}function ht(e){try{var n="",a=null;do n+=Fe(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var He=Object.prototype.hasOwnProperty,_t=o.unstable_scheduleCallback,Ze=o.unstable_cancelCallback,Je=o.unstable_shouldYield,N=o.unstable_requestPaint,M=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,de=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,ze=o.unstable_IdlePriority,Ke=o.log,re=o.unstable_setDisableYieldValue,K=null,Q=null;function Ae(e){if(typeof Ke=="function"&&re(e),Q&&typeof Q.setStrictMode=="function")try{Q.setStrictMode(K,e)}catch{}}var De=Math.clz32?Math.clz32:V,Ne=Math.log,Ge=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(Ne(e)/Ge|0)|0}var Ue=256,Le=262144,Pe=4194304;function we(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Te(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~f,r!==0?c=we(r):(v&=w,v!==0?c=we(v):a||(a=w&~e,a!==0&&(c=we(a))))):(w=r&~f,w!==0?c=we(w):v!==0?c=we(v):a||(a=r&~e,a!==0&&(c=we(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ct(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var e=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),e}function Dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xn(e,n,a,r,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,B=e.expirationTimes,ae=e.hiddenUpdates;for(a=v&~a;0<a;){var be=31-De(a),Ee=1<<be;w[be]=0,B[be]=-1;var oe=ae[be];if(oe!==null)for(ae[be]=null,be=0;be<oe.length;be++){var he=oe[be];he!==null&&(he.lane&=-536870913)}a&=~Ee}r!==0&&Ho(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Ho(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-De(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Cr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-De(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Rr(e,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(e.suspendedLanes|n))!==0?0:a}function mi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dr(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Qm(e.type))}function Nr(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Wn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Wn,hn="__reactProps$"+Wn,Li="__reactContainer$"+Wn,As="__reactEvents$"+Wn,zc="__reactListeners$"+Wn,Pc="__reactHandles$"+Wn,Vo="__reactResources$"+Wn,Ka="__reactMarker$"+Wn;function Ur(e){delete e[rn],delete e[hn],delete e[As],delete e[zc],delete e[Pc]}function ha(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zm(e);e!==null;){if(a=e[rn])return a;e=zm(e)}return n}e=a,a=e.parentNode}return null}function C(e){if(e=e[rn]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function J(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function fe(e){var n=e[Vo];return n||(n=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(e){e[Ka]=!0}var ee=new Set,Oe={};function Be(e,n){je(e,n),je(e+"Capture",n)}function je(e,n){for(Oe[e]=n,e=0;e<n.length;e++)ee.add(n[e])}var We=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ot={};function et(e){return He.call(ot,e)?!0:He.call(st,e)?!1:We.test(e)?ot[e]=!0:(st[e]=!0,!1)}function pt(e,n,a){if(et(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Pt(e)?"checked":"value";e._valueTracker=nt(e,n,""+e[n])}}function Tt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Pt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function qt(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,r,c,f,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Et(n)):e.value!==""+Et(n)&&(e.value=""+Et(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?_n(e,v,Et(n)):a!=null?_n(e,v,Et(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Et(w):e.removeAttribute("name")}function Zt(e,n,a,r,c,f,v,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+Et(a):"",n=n!=null?""+Et(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Wt(e)}function _n(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+Et(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Et(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(me(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Et(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Wt(e)}function Ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Th(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Eh(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Eh(e,f,n[f])}function Fc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return Wg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Bc=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Cs=null;function Ah(e){var n=C(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[hn]||null;if(!c)throw Error(s(90));Oi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Tt(r)}break e;case"textarea":bn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var Hc=!1;function wh(e,n,a){if(Hc)return e(n,a);Hc=!0;try{var r=e(n);return r}finally{if(Hc=!1,(ws!==null||Cs!==null)&&(Rl(),ws&&(n=ws,e=Cs,Cs=ws=null,Ah(n),e)))for(n=0;n<e.length;n++)Ah(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(Fi)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Vc=!1}var ma=null,Gc=null,ko=null;function Ch(){if(ko)return ko;var e,n=Gc,a=n.length,r,c="value"in ma?ma.value:ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return ko=c.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Rh(){return!1}function Pn(e){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Rh,this.isPropagationStopped=Rh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Pn(Qa),zr=x({},Qa,{view:0,detail:0}),Yg=Pn(zr),kc,jc,Pr,Yo=x({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(kc=e.screenX-Pr.screenX,jc=e.screenY-Pr.screenY):jc=kc=0,Pr=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),Dh=Pn(Yo),qg=x({},Yo,{dataTransfer:0}),Zg=Pn(qg),Kg=x({},zr,{relatedTarget:0}),Xc=Pn(Kg),Qg=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=Pn(Qg),$g=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ev=Pn($g),tv=x({},Qa,{data:0}),Nh=Pn(tv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=av[e])?!!n[e]:!1}function Wc(){return sv}var rv=x({},zr,{key:function(e){if(e.key){var n=nv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ov=Pn(rv),lv=x({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Pn(lv),cv=x({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),uv=Pn(cv),fv=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=Pn(fv),hv=x({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=Pn(hv),mv=x({},Qa,{newState:0,oldState:0}),xv=Pn(mv),gv=[9,13,27,32],Yc=Fi&&"CompositionEvent"in window,Fr=null;Fi&&"documentMode"in document&&(Fr=document.documentMode);var vv=Fi&&"TextEvent"in window&&!Fr,Lh=Fi&&(!Yc||Fr&&8<Fr&&11>=Fr),Oh=" ",zh=!1;function Ph(e,n){switch(e){case"keyup":return gv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rs=!1;function _v(e,n){switch(e){case"compositionend":return Fh(n);case"keypress":return n.which!==32?null:(zh=!0,Oh);case"textInput":return e=n.data,e===Oh&&zh?null:e;default:return null}}function bv(e,n){if(Rs)return e==="compositionend"||!Yc&&Ph(e,n)?(e=Ch(),ko=Gc=ma=null,Rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lh&&n.locale!=="ko"?null:n.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yv[e.type]:n==="textarea"}function Ih(e,n,a,r){ws?Cs?Cs.push(r):Cs=[r]:ws=r,n=Pl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Br=null,Ir=null;function Sv(e){ym(e,0)}function qo(e){var n=J(e);if(Tt(n))return e}function Hh(e,n){if(e==="change")return n}var Vh=!1;if(Fi){var qc;if(Fi){var Zc="oninput"in document;if(!Zc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Zc=typeof Gh.oninput=="function"}qc=Zc}else qc=!1;Vh=qc&&(!document.documentMode||9<document.documentMode)}function kh(){Br&&(Br.detachEvent("onpropertychange",jh),Ir=Br=null)}function jh(e){if(e.propertyName==="value"&&qo(Ir)){var n=[];Ih(n,Ir,e,Ic(e)),wh(Sv,n)}}function Mv(e,n,a){e==="focusin"?(kh(),Br=n,Ir=a,Br.attachEvent("onpropertychange",jh)):e==="focusout"&&kh()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ir)}function Tv(e,n){if(e==="click")return qo(n)}function Av(e,n){if(e==="input"||e==="change")return qo(n)}function wv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:wv;function Hr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!He.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function Xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wh(e,n){var a=Xh(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xh(a)}}function Yh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function Kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cv=Fi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Qc=null,Vr=null,Jc=!1;function Zh(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Ds==null||Ds!==vn(r)||(r=Ds,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Hr(Vr,r)||(Vr=r,r=Pl(Qc,"onSelect"),0<r.length&&(n=new Wo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ds)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},$c={},Kh={};Fi&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function $a(e){if($c[e])return $c[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return $c[e]=n[a];return e}var Qh=$a("animationend"),Jh=$a("animationiteration"),$h=$a("animationstart"),Rv=$a("transitionrun"),Dv=$a("transitionstart"),Nv=$a("transitioncancel"),e0=$a("transitionend"),t0=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function xi(e,n){t0.set(e,n),Be(n,[e])}var Zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Us=0,tu=0;function Ko(){for(var e=Us,n=tu=Us=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&n0(a,c,f)}}function Qo(e,n,a,r){ai[Us++]=e,ai[Us++]=n,ai[Us++]=a,ai[Us++]=r,tu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function nu(e,n,a,r){return Qo(e,n,a,r),Jo(e)}function es(e,n){return Qo(e,null,null,n),Jo(e)}function n0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-De(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<co)throw co=0,df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ls={};function Uv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,r){return new Uv(e,n,a,r)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function i0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,r,c,f){var v=0;if(r=e,typeof e=="function")iu(e)&&(v=1);else if(typeof e=="string")v=F_(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=qn(31,a,n,c),e.elementType=D,e.lanes=f,e;case A:return ts(a.children,c,f,n);case y:v=8,c|=24;break;case g:return e=qn(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case W:return e=qn(13,a,n,c),e.elementType=W,e.lanes=f,e;case z:return e=qn(19,a,n,c),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:v=10;break e;case P:v=9;break e;case I:v=11;break e;case O:v=14;break e;case ne:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=qn(v,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ts(e,n,a,r){return e=qn(7,e,r,n),e.lanes=a,e}function au(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function a0(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function su(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var s0=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=s0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ht(n)},s0.set(e,n),n)}return{value:e,source:n,stack:ht(n)}}var Os=[],zs=0,el=null,Gr=0,ri=[],oi=0,xa=null,wi=1,Ci="";function Ii(e,n){Os[zs++]=Gr,Os[zs++]=el,el=e,Gr=n}function r0(e,n,a){ri[oi++]=wi,ri[oi++]=Ci,ri[oi++]=xa,xa=e;var r=wi;e=Ci;var c=32-De(r)-1;r&=~(1<<c),a+=1;var f=32-De(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,wi=1<<32-De(n)+c|a<<c|r,Ci=f+e}else wi=1<<f|a<<c|r,Ci=e}function ru(e){e.return!==null&&(Ii(e,1),r0(e,1,0))}function ou(e){for(;e===el;)el=Os[--zs],Os[zs]=null,Gr=Os[--zs],Os[zs]=null;for(;e===xa;)xa=ri[--oi],ri[oi]=null,Ci=ri[--oi],ri[oi]=null,wi=ri[--oi],ri[oi]=null}function o0(e,n){ri[oi++]=wi,ri[oi++]=Ci,ri[oi++]=xa,wi=n.id,Ci=n.overflow,xa=e}var En=null,Kt=null,At=!1,ga=null,li=!1,lu=Error(s(519));function va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kr(si(n,e)),lu}function l0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[hn]=r,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)yt(fo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Zt(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Tm(n.textContent,a)?(r.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),r.onScroll!=null&&yt("scroll",n),r.onScrollEnd!=null&&yt("scrollend",n),r.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||va(e,!0)}function c0(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Ps(e){if(e!==En)return!1;if(!At)return c0(e),At=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wf(e.type,e.memoizedProps)),a=!a),a&&Kt&&va(e),c0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=Om(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=Om(e)}else n===27?(n=Kt,Ua(e.type)?(e=Uf,Uf=null,Kt=e):Kt=n):Kt=En?ui(e.stateNode.nextSibling):null;return!0}function ns(){Kt=En=null,At=!1}function cu(){var e=ga;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ga=null),e}function kr(e){ga===null?ga=[e]:ga.push(e)}var uu=L(null),is=null,Hi=null;function _a(e,n,a){pe(uu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=uu.current,q(uu)}function fu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function du(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=c;for(var B=0;B<n.length;B++)if(w.context===n[B]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),fu(f.return,a,e),r||(v=null);break e}f=w.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),fu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Fs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=c.type;Yn(c.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(c===ue.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}c=c.return}e!==null&&du(n,e,a,r),n.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return u0(is,e)}function nl(e,n){return is===null&&as(e),u0(e,n)}function u0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(s(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var Lv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ov=o.unstable_scheduleCallback,zv=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new Lv,data:new Map,refCount:0}}function jr(e){e.refCount--,e.refCount===0&&Ov(zv,function(){e.controller.abort()})}var Xr=null,pu=0,Bs=0,Is=null;function Pv(e,n){if(Xr===null){var a=Xr=[];pu=0,Bs=vf(),Is={status:"pending",value:void 0,then:function(r){a.push(r)}}}return pu++,n.then(f0,f0),n}function f0(){if(--pu===0&&Xr!==null){Is!==null&&(Is.status="fulfilled");var e=Xr;Xr=null,Bs=0,Is=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var d0=F.S;F.S=function(e,n){Zp=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pv(e,n),d0!==null&&d0(e,n)};var ss=L(null);function mu(){var e=ss.current;return e!==null?e:Yt.pooledCache}function il(e,n){n===null?pe(ss,ss.current):pe(ss,n.pool)}function h0(){var e=mu();return e===null?null:{parent:on._currentValue,pool:e}}var Hs=Error(s(460)),xu=Error(s(474)),al=Error(s(542)),sl={then:function(){}};function p0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function m0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,g0(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,g0(e),e}throw os=n,Hs}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,Hs):a}}var os=null;function x0(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function g0(e){if(e===Hs||e===al)throw Error(s(483))}var Vs=null,Wr=0;function rl(e){var n=Wr;return Wr+=1,Vs===null&&(Vs=[]),m0(Vs,e,n)}function Yr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ol(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function v0(e){function n($,X){if(e){var ie=$.deletions;ie===null?($.deletions=[X],$.flags|=16):ie.push(X)}}function a($,X){if(!e)return null;for(;X!==null;)n($,X),X=X.sibling;return null}function r($){for(var X=new Map;$!==null;)$.key!==null?X.set($.key,$):X.set($.index,$),$=$.sibling;return X}function c($,X){return $=Bi($,X),$.index=0,$.sibling=null,$}function f($,X,ie){return $.index=ie,e?(ie=$.alternate,ie!==null?(ie=ie.index,ie<X?($.flags|=67108866,X):ie):($.flags|=67108866,X)):($.flags|=1048576,X)}function v($){return e&&$.alternate===null&&($.flags|=67108866),$}function w($,X,ie,Me){return X===null||X.tag!==6?(X=au(ie,$.mode,Me),X.return=$,X):(X=c(X,ie),X.return=$,X)}function B($,X,ie,Me){var tt=ie.type;return tt===A?be($,X,ie.props.children,Me,ie.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ne&&rs(tt)===X.type)?(X=c(X,ie.props),Yr(X,ie),X.return=$,X):(X=$o(ie.type,ie.key,ie.props,null,$.mode,Me),Yr(X,ie),X.return=$,X)}function ae($,X,ie,Me){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=su(ie,$.mode,Me),X.return=$,X):(X=c(X,ie.children||[]),X.return=$,X)}function be($,X,ie,Me,tt){return X===null||X.tag!==7?(X=ts(ie,$.mode,Me,tt),X.return=$,X):(X=c(X,ie),X.return=$,X)}function Ee($,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=au(""+X,$.mode,ie),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ie=$o(X.type,X.key,X.props,null,$.mode,ie),Yr(ie,X),ie.return=$,ie;case E:return X=su(X,$.mode,ie),X.return=$,X;case ne:return X=rs(X),Ee($,X,ie)}if(me(X)||te(X))return X=ts(X,$.mode,ie,null),X.return=$,X;if(typeof X.then=="function")return Ee($,rl(X),ie);if(X.$$typeof===U)return Ee($,nl($,X),ie);ol($,X)}return null}function oe($,X,ie,Me){var tt=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return tt!==null?null:w($,X,""+ie,Me);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===tt?B($,X,ie,Me):null;case E:return ie.key===tt?ae($,X,ie,Me):null;case ne:return ie=rs(ie),oe($,X,ie,Me)}if(me(ie)||te(ie))return tt!==null?null:be($,X,ie,Me,null);if(typeof ie.then=="function")return oe($,X,rl(ie),Me);if(ie.$$typeof===U)return oe($,X,nl($,ie),Me);ol($,ie)}return null}function he($,X,ie,Me,tt){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return $=$.get(ie)||null,w(X,$,""+Me,tt);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case S:return $=$.get(Me.key===null?ie:Me.key)||null,B(X,$,Me,tt);case E:return $=$.get(Me.key===null?ie:Me.key)||null,ae(X,$,Me,tt);case ne:return Me=rs(Me),he($,X,ie,Me,tt)}if(me(Me)||te(Me))return $=$.get(ie)||null,be(X,$,Me,tt,null);if(typeof Me.then=="function")return he($,X,ie,rl(Me),tt);if(Me.$$typeof===U)return he($,X,ie,nl(X,Me),tt);ol(X,Me)}return null}function qe($,X,ie,Me){for(var tt=null,Ut=null,Qe=X,mt=X=0,Mt=null;Qe!==null&&mt<ie.length;mt++){Qe.index>mt?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Lt=oe($,Qe,ie[mt],Me);if(Lt===null){Qe===null&&(Qe=Mt);break}e&&Qe&&Lt.alternate===null&&n($,Qe),X=f(Lt,X,mt),Ut===null?tt=Lt:Ut.sibling=Lt,Ut=Lt,Qe=Mt}if(mt===ie.length)return a($,Qe),At&&Ii($,mt),tt;if(Qe===null){for(;mt<ie.length;mt++)Qe=Ee($,ie[mt],Me),Qe!==null&&(X=f(Qe,X,mt),Ut===null?tt=Qe:Ut.sibling=Qe,Ut=Qe);return At&&Ii($,mt),tt}for(Qe=r(Qe);mt<ie.length;mt++)Mt=he(Qe,$,mt,ie[mt],Me),Mt!==null&&(e&&Mt.alternate!==null&&Qe.delete(Mt.key===null?mt:Mt.key),X=f(Mt,X,mt),Ut===null?tt=Mt:Ut.sibling=Mt,Ut=Mt);return e&&Qe.forEach(function(Fa){return n($,Fa)}),At&&Ii($,mt),tt}function rt($,X,ie,Me){if(ie==null)throw Error(s(151));for(var tt=null,Ut=null,Qe=X,mt=X=0,Mt=null,Lt=ie.next();Qe!==null&&!Lt.done;mt++,Lt=ie.next()){Qe.index>mt?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Fa=oe($,Qe,Lt.value,Me);if(Fa===null){Qe===null&&(Qe=Mt);break}e&&Qe&&Fa.alternate===null&&n($,Qe),X=f(Fa,X,mt),Ut===null?tt=Fa:Ut.sibling=Fa,Ut=Fa,Qe=Mt}if(Lt.done)return a($,Qe),At&&Ii($,mt),tt;if(Qe===null){for(;!Lt.done;mt++,Lt=ie.next())Lt=Ee($,Lt.value,Me),Lt!==null&&(X=f(Lt,X,mt),Ut===null?tt=Lt:Ut.sibling=Lt,Ut=Lt);return At&&Ii($,mt),tt}for(Qe=r(Qe);!Lt.done;mt++,Lt=ie.next())Lt=he(Qe,$,mt,Lt.value,Me),Lt!==null&&(e&&Lt.alternate!==null&&Qe.delete(Lt.key===null?mt:Lt.key),X=f(Lt,X,mt),Ut===null?tt=Lt:Ut.sibling=Lt,Ut=Lt);return e&&Qe.forEach(function(q_){return n($,q_)}),At&&Ii($,mt),tt}function kt($,X,ie,Me){if(typeof ie=="object"&&ie!==null&&ie.type===A&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var tt=ie.key;X!==null;){if(X.key===tt){if(tt=ie.type,tt===A){if(X.tag===7){a($,X.sibling),Me=c(X,ie.props.children),Me.return=$,$=Me;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ne&&rs(tt)===X.type){a($,X.sibling),Me=c(X,ie.props),Yr(Me,ie),Me.return=$,$=Me;break e}a($,X);break}else n($,X);X=X.sibling}ie.type===A?(Me=ts(ie.props.children,$.mode,Me,ie.key),Me.return=$,$=Me):(Me=$o(ie.type,ie.key,ie.props,null,$.mode,Me),Yr(Me,ie),Me.return=$,$=Me)}return v($);case E:e:{for(tt=ie.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){a($,X.sibling),Me=c(X,ie.children||[]),Me.return=$,$=Me;break e}else{a($,X);break}else n($,X);X=X.sibling}Me=su(ie,$.mode,Me),Me.return=$,$=Me}return v($);case ne:return ie=rs(ie),kt($,X,ie,Me)}if(me(ie))return qe($,X,ie,Me);if(te(ie)){if(tt=te(ie),typeof tt!="function")throw Error(s(150));return ie=tt.call(ie),rt($,X,ie,Me)}if(typeof ie.then=="function")return kt($,X,rl(ie),Me);if(ie.$$typeof===U)return kt($,X,nl($,ie),Me);ol($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,X!==null&&X.tag===6?(a($,X.sibling),Me=c(X,ie),Me.return=$,$=Me):(a($,X),Me=au(ie,$.mode,Me),Me.return=$,$=Me),v($)):a($,X)}return function($,X,ie,Me){try{Wr=0;var tt=kt($,X,ie,Me);return Vs=null,tt}catch(Qe){if(Qe===Hs||Qe===al)throw Qe;var Ut=qn(29,Qe,null,$.mode);return Ut.lanes=Me,Ut.return=$,Ut}finally{}}}var ls=v0(!0),_0=v0(!1),ba=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Jo(e),n0(e,null,a),n}return Qo(e,r,n,a),Jo(e)}function qr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Cr(e,a)}}function _u(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function Zr(){if(bu){var e=Is;if(e!==null)throw e}}function Kr(e,n,a,r){bu=!1;var c=e.updateQueue;ba=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var B=w,ae=B.next;B.next=null,v===null?f=ae:v.next=ae,v=B;var be=e.alternate;be!==null&&(be=be.updateQueue,w=be.lastBaseUpdate,w!==v&&(w===null?be.firstBaseUpdate=ae:w.next=ae,be.lastBaseUpdate=B))}if(f!==null){var Ee=c.baseState;v=0,be=ae=B=null,w=f;do{var oe=w.lane&-536870913,he=oe!==w.lane;if(he?(St&oe)===oe:(r&oe)===oe){oe!==0&&oe===Bs&&(bu=!0),be!==null&&(be=be.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var qe=e,rt=w;oe=n;var kt=a;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){Ee=qe.call(kt,Ee,oe);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,oe=typeof qe=="function"?qe.call(kt,Ee,oe):qe,oe==null)break e;Ee=x({},Ee,oe);break e;case 2:ba=!0}}oe=w.callback,oe!==null&&(e.flags|=64,he&&(e.flags|=8192),he=c.callbacks,he===null?c.callbacks=[oe]:he.push(oe))}else he={lane:oe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},be===null?(ae=be=he,B=Ee):be=be.next=he,v|=oe;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;he=w,w=he.next,he.next=null,c.lastBaseUpdate=he,c.shared.pending=null}}while(!0);be===null&&(B=Ee),c.baseState=B,c.firstBaseUpdate=ae,c.lastBaseUpdate=be,f===null&&(c.shared.lanes=0),wa|=v,e.lanes=v,e.memoizedState=Ee}}function b0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function y0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)b0(a[e],n)}var Gs=L(null),ll=L(0);function S0(e,n){e=Ki,pe(ll,e),pe(Gs,n),Ki=e|n.baseLanes}function yu(){pe(ll,Ki),pe(Gs,Gs.current)}function Su(){Ki=ll.current,q(Gs),q(ll)}var Zn=L(null),ci=null;function Ma(e){var n=e.alternate;pe(tn,tn.current&1),pe(Zn,e),ci===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(ci=e)}function Mu(e){pe(tn,tn.current),pe(Zn,e),ci===null&&(ci=e)}function M0(e){e.tag===22?(pe(tn,tn.current),pe(Zn,e),ci===null&&(ci=e)):Ea()}function Ea(){pe(tn,tn.current),pe(Zn,Zn.current)}function Kn(e){q(Zn),ci===e&&(ci=null),q(tn)}var tn=L(0);function cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,ft=null,Vt=null,ln=null,ul=!1,ks=!1,cs=!1,fl=0,Qr=0,js=null,Bv=0;function $t(){throw Error(s(321))}function Eu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Tu(e,n,a,r,c,f){return Gi=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?rp:Hu,cs=!1,f=a(r,c),cs=!1,ks&&(f=T0(n,a,r,c)),E0(e),f}function E0(e){F.H=eo;var n=Vt!==null&&Vt.next!==null;if(Gi=0,ln=Vt=ft=null,ul=!1,Qr=0,js=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&tl(e)&&(cn=!0))}function T0(e,n,a,r){ft=e;var c=0;do{if(ks&&(js=null),Qr=0,ks=!1,25<=c)throw Error(s(301));if(c+=1,ln=Vt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=op,f=n(a,r)}while(ks);return f}function Iv(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Jr(n):n,e=e.useState()[0],(Vt!==null?Vt.memoizedState:null)!==e&&(ft.flags|=1024),n}function Au(){var e=fl!==0;return fl=0,e}function wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cu(e){if(ul){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ul=!1}Gi=0,ln=Vt=ft=null,ks=!1,Qr=fl=0,js=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ft.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Vt===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var n=ln===null?ft.memoizedState:ln.next;if(n!==null)ln=n,Vt=e;else{if(e===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},ln===null?ft.memoizedState=ln=e:ln=ln.next=e}return ln}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var n=Qr;return Qr+=1,js===null&&(js=[]),e=m0(js,e,n),n=ft,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?rp:Hu),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===U)return Tn(e)}throw Error(s(438,String(e)))}function Ru(e){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=nn();return Du(n,Vt,e)}function Du(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var w=v=null,B=null,ae=n,be=!1;do{var Ee=ae.lane&-536870913;if(Ee!==ae.lane?(St&Ee)===Ee:(Gi&Ee)===Ee){var oe=ae.revertLane;if(oe===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ee===Bs&&(be=!0);else if((Gi&oe)===oe){ae=ae.next,oe===Bs&&(be=!0);continue}else Ee={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},B===null?(w=B=Ee,v=f):B=B.next=Ee,ft.lanes|=oe,wa|=oe;Ee=ae.action,cs&&a(f,Ee),f=ae.hasEagerState?ae.eagerState:a(f,Ee)}else oe={lane:Ee,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},B===null?(w=B=oe,v=f):B=B.next=oe,ft.lanes|=Ee,wa|=Ee;ae=ae.next}while(ae!==null&&ae!==n);if(B===null?v=f:B.next=w,!Yn(f,e.memoizedState)&&(cn=!0,be&&(a=Is,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Nu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function A0(e,n,a){var r=ft,c=nn(),f=At;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Yn((Vt||c).memoizedState,a);if(v&&(c.memoizedState=a,cn=!0),c=c.queue,Ou(R0.bind(null,r,c,e),[e]),c.getSnapshot!==n||v||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,Xs(9,{destroy:void 0},C0.bind(null,r,c,a,n),null),Yt===null)throw Error(s(349));f||(Gi&127)!==0||w0(r,n,a)}return a}function w0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=dl(),ft.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function C0(e,n,a,r){n.value=a,n.getSnapshot=r,D0(n)&&N0(e)}function R0(e,n,a){return a(function(){D0(n)&&N0(e)})}function D0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function N0(e){var n=es(e,2);n!==null&&Vn(n,e,2)}function Uu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),cs){Ae(!0);try{a()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function U0(e,n,a,r){return e.baseState=a,Du(e,Vt,typeof r=="function"?r:ki)}function Hv(e,n,a,r,c){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,L0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function L0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=F.T,v={};F.T=v;try{var w=a(c,r),B=F.S;B!==null&&B(v,w),O0(e,n,w)}catch(ae){Lu(e,n,ae)}finally{f!==null&&v.types!==null&&(f.types=v.types),F.T=f}}else try{f=a(c,r),O0(e,n,f)}catch(ae){Lu(e,n,ae)}}function O0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){z0(e,n,r)},function(r){return Lu(e,n,r)}):z0(e,n,a)}function z0(e,n,a){n.status="fulfilled",n.value=a,P0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,L0(e,a)))}function Lu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,P0(n),n=n.next;while(n!==r)}e.action=null}function P0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function F0(e,n){return n}function B0(e,n){if(At){var a=Yt.formState;if(a!==null){e:{var r=ft;if(At){if(Kt){t:{for(var c=Kt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Kt=ui(c.nextSibling),r=c.data==="F!";break e}}va(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:F0,lastRenderedState:n},a.queue=r,a=ip.bind(null,ft,r),r.dispatch=a,r=Uu(!1),f=Iu.bind(null,ft,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Hv.bind(null,ft,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function I0(e){var n=nn();return H0(n,Vt,e)}function H0(e,n,a){if(n=Du(e,n,F0)[0],e=pl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Jr(n)}catch(v){throw v===Hs?al:v}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,Xs(9,{destroy:void 0},Vv.bind(null,c,a),null)),[r,f,e]}function Vv(e,n){e.action=n}function V0(e){var n=nn(),a=Vt;if(a!==null)return H0(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Xs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ft.updateQueue,n===null&&(n=dl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function G0(){return nn().memoizedState}function ml(e,n,a,r){var c=Ln();ft.flags|=e,c.memoizedState=Xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function xl(e,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Vt!==null&&r!==null&&Eu(r,Vt.memoizedState.deps)?c.memoizedState=Xs(n,f,a,r):(ft.flags|=e,c.memoizedState=Xs(1|n,f,a,r))}function k0(e,n){ml(8390656,8,e,n)}function Ou(e,n){xl(2048,8,e,n)}function Gv(e){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=dl(),ft.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function j0(e){var n=nn().memoizedState;return Gv({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function X0(e,n){return xl(4,2,e,n)}function W0(e,n){return xl(4,4,e,n)}function Y0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function q0(e,n,a){a=a!=null?a.concat([e]):null,xl(4,4,Y0.bind(null,n,e),a)}function zu(){}function Z0(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Eu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function K0(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Eu(n,r[1]))return r[0];if(r=e(),cs){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[r,n],r}function Pu(e,n,a){return a===void 0||(Gi&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Qp(),ft.lanes|=e,wa|=e,a)}function Q0(e,n,a,r){return Yn(a,n)?a:Gs.current!==null?(e=Pu(e,a,r),Yn(e,n)||(cn=!0),e):(Gi&42)===0||(Gi&1073741824)!==0&&(St&261930)===0?(cn=!0,e.memoizedState=a):(e=Qp(),ft.lanes|=e,wa|=e,n)}function J0(e,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var v=F.T,w={};F.T=w,Iu(e,!1,n,a);try{var B=c(),ae=F.S;if(ae!==null&&ae(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var be=Fv(B,r);$r(e,n,be,$n(e))}else $r(e,n,r,$n(e))}catch(Ee){$r(e,n,{then:function(){},status:"rejected",reason:Ee},$n())}finally{j.p=f,v!==null&&w.types!==null&&(v.types=w.types),F.T=v}}function kv(){}function Fu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=$0(e).queue;J0(e,c,n,G,a===null?kv:function(){return ep(e),a(r)})}function $0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ep(e){var n=$0(e);n.next===null&&(n=e.alternate.memoizedState),$r(e,n.next.queue,{},$n())}function Bu(){return Tn(go)}function tp(){return nn().memoizedState}function np(){return nn().memoizedState}function jv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=ya(a);var r=Sa(n,e,a);r!==null&&(Vn(r,n,a),qr(r,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function Xv(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?ap(n,a):(a=nu(e,n,a,r),a!==null&&(Vn(a,e,r),sp(a,n,r)))}function ip(e,n,a){var r=$n();$r(e,n,a,r)}function $r(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))ap(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,w=f(v,a);if(c.hasEagerState=!0,c.eagerState=w,Yn(w,v))return Qo(e,n,c,0),Yt===null&&Ko(),!1}catch{}finally{}if(a=nu(e,n,c,r),a!==null)return Vn(a,e,r),sp(a,n,r),!0}return!1}function Iu(e,n,a,r){if(r={lane:2,revertLane:vf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=nu(e,a,r,2),n!==null&&Vn(n,e,2)}function gl(e){var n=e.alternate;return e===ft||n!==null&&n===ft}function ap(e,n){ks=ul=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function sp(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Cr(e,a)}}var eo={readContext:Tn,use:hl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};eo.useEffectEvent=$t;var rp={readContext:Tn,use:hl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:k0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ml(4194308,4,Y0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ml(4194308,4,e,n)},useInsertionEffect:function(e,n){ml(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var r=e();if(cs){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(cs){Ae(!0);try{a(n)}finally{Ae(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Xv.bind(null,ft,e),[r.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Uu(e);var n=e.queue,a=ip.bind(null,ft,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(e,n){var a=Ln();return Pu(a,e,n)},useTransition:function(){var e=Uu(!1);return e=J0.bind(null,ft,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ft,c=Ln();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(St&127)!==0||w0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,k0(R0.bind(null,r,f,e),[e]),r.flags|=2048,Xs(9,{destroy:void 0},C0.bind(null,r,f,a,n),null),a},useId:function(){var e=Ln(),n=Yt.identifierPrefix;if(At){var a=Ci,r=wi;a=(r&~(1<<32-De(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Bv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bu,useFormState:B0,useActionState:B0,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,ft,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ru,useCacheRefresh:function(){return Ln().memoizedState=jv.bind(null,ft)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Hu={readContext:Tn,use:hl,useCallback:Z0,useContext:Tn,useEffect:Ou,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:W0,useMemo:K0,useReducer:pl,useRef:G0,useState:function(){return pl(ki)},useDebugValue:zu,useDeferredValue:function(e,n){var a=nn();return Q0(a,Vt.memoizedState,e,n)},useTransition:function(){var e=pl(ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:A0,useId:tp,useHostTransitionStatus:Bu,useFormState:I0,useActionState:I0,useOptimistic:function(e,n){var a=nn();return U0(a,Vt,e,n)},useMemoCache:Ru,useCacheRefresh:np};Hu.useEffectEvent=j0;var op={readContext:Tn,use:hl,useCallback:Z0,useContext:Tn,useEffect:Ou,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:W0,useMemo:K0,useReducer:Nu,useRef:G0,useState:function(){return Nu(ki)},useDebugValue:zu,useDeferredValue:function(e,n){var a=nn();return Vt===null?Pu(a,e,n):Q0(a,Vt.memoizedState,e,n)},useTransition:function(){var e=Nu(ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:A0,useId:tp,useHostTransitionStatus:Bu,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=nn();return Vt!==null?U0(a,Vt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:np};op.useEffectEvent=j0;function Vu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),c=ya(r);c.payload=n,a!=null&&(c.callback=a),n=Sa(e,c,r),n!==null&&(Vn(n,e,r),qr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),c=ya(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Sa(e,c,r),n!==null&&(Vn(n,e,r),qr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=ya(a);r.tag=2,n!=null&&(r.callback=n),n=Sa(e,r,a),n!==null&&(Vn(n,e,a),qr(n,e,a))}};function lp(e,n,a,r,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function cp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function up(e){Zo(e)}function fp(e){console.error(e)}function dp(e){Zo(e)}function vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function hp(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ku(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(e,n)},a}function pp(e){return e=ya(e),e.tag=3,e}function mp(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){hp(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){hp(n,a,r),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Wv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Dl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),mf(e,r,c)),!1;case 22:return a.flags|=65536,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),mf(e,r,c)),!1}throw Error(s(435,a.tag))}return mf(e,r,c),Dl(),!1}if(At)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==lu&&(e=Error(s(422),{cause:r}),kr(si(e,a)))):(r!==lu&&(n=Error(s(423),{cause:r}),kr(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,a),c=ku(e.stateNode,r,c),_u(e,c),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),lo===null?lo=[f]:lo.push(f),en!==4&&(en=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ku(a.stateNode,r,e),_u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=pp(c),mp(c,e,a,r),_u(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(s(461)),cn=!1;function An(e,n,a,r){n.child=e===null?_0(n,null,a,r):ls(n,e.child,a,r)}function xp(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var w in r)w!=="ref"&&(v[w]=r[w])}else v=r;return as(n),r=Tu(e,n,a,v,f,c),w=Au(),e!==null&&!cn?(wu(e,n,c),ji(e,n,c)):(At&&w&&ru(n),n.flags|=1,An(e,n,r,c),n.child)}function gp(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,vp(e,n,f,r,c)):(e=$o(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ju(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(v,r)&&e.ref===n.ref)return ji(e,n,c)}return n.flags|=1,e=Bi(f,r),e.ref=n.ref,e.return=n,n.child=e}function vp(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Hr(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,Ju(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ji(e,n,c)}return Xu(e,n,a,r,c)}function _p(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return bp(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,f!==null?f.cachePool:null),f!==null?S0(n,f):yu(),M0(n);else return r=n.lanes=536870912,bp(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(il(n,f.cachePool),S0(n,f),Ea(),n.memoizedState=null):(e!==null&&il(n,null),yu(),Ea());return An(e,n,c,a),n.child}function to(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function bp(e,n,a,r,c){var f=mu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&il(n,null),yu(),M0(n),e!==null&&Fs(e,n,r,!0),n.childLanes=c,null}function _l(e,n){return n=yl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yp(e,n,a){return ls(n,e.child,null,a),e=_l(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Yv(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(At){if(r.mode==="hidden")return e=_l(n,r),n.lanes=536870912,to(null,e);if(Mu(n),(e=Kt)?(e=Lm(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:xa!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=a0(e),a.return=n,n.child=a,En=n,Kt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return _l(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=yp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Fs(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(r=Yt,r!==null&&(v=Rr(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,es(e,v),Vn(r,e,v),ju;Dl(),n=yp(e,n,a)}else e=f.treeContext,Kt=ui(v.nextSibling),En=n,At=!0,ga=null,li=!1,e!==null&&o0(n,e),n=_l(n,r),n.flags|=4096;return n}return e=Bi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xu(e,n,a,r,c){return as(n),a=Tu(e,n,a,r,void 0,c),r=Au(),e!==null&&!cn?(wu(e,n,c),ji(e,n,c)):(At&&r&&ru(n),n.flags|=1,An(e,n,a,c),n.child)}function Sp(e,n,a,r,c,f){return as(n),n.updateQueue=null,a=T0(n,r,a,c),E0(e),r=Au(),e!==null&&!cn?(wu(e,n,f),ji(e,n,f)):(At&&r&&ru(n),n.flags|=1,An(e,n,a,f),n.child)}function Mp(e,n,a,r,c){if(as(n),n.stateNode===null){var f=Ls,v=a.contextType;typeof v=="object"&&v!==null&&(f=Tn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},gu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Tn(v):Ls,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Vu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Kr(n,r,f,c),Zr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,B=us(a,w);f.props=B;var ae=f.context,be=a.contextType;v=Ls,typeof be=="object"&&be!==null&&(v=Tn(be));var Ee=a.getDerivedStateFromProps;be=typeof Ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,be||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ae!==v)&&cp(n,f,r,v),ba=!1;var oe=n.memoizedState;f.state=oe,Kr(n,r,f,c),Zr(),ae=n.memoizedState,w||oe!==ae||ba?(typeof Ee=="function"&&(Vu(n,a,Ee,r),ae=n.memoizedState),(B=ba||lp(n,a,B,r,oe,ae,v))?(be||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ae),f.props=r,f.state=ae,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,vu(e,n),v=n.memoizedProps,be=us(a,v),f.props=be,Ee=n.pendingProps,oe=f.context,ae=a.contextType,B=Ls,typeof ae=="object"&&ae!==null&&(B=Tn(ae)),w=a.getDerivedStateFromProps,(ae=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Ee||oe!==B)&&cp(n,f,r,B),ba=!1,oe=n.memoizedState,f.state=oe,Kr(n,r,f,c),Zr();var he=n.memoizedState;v!==Ee||oe!==he||ba||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof w=="function"&&(Vu(n,a,w,r),he=n.memoizedState),(be=ba||lp(n,a,be,r,oe,he,B)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,he,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,he,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=he),f.props=r,f.state=he,f.context=B,r=be):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,bl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ls(n,e.child,null,c),n.child=ls(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ji(e,n,c),e}function Ep(e,n,a,r){return ns(),n.flags|=256,An(e,n,a,r),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(e){return{baseLanes:e,cachePool:h0()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Tp(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(At){if(c?Ma(n):Ea(),(e=Kt)?(e=Lm(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:xa!==null?{id:wi,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=a0(e),a.return=n,n.child=a,En=n,Kt=null)):e=null,e===null)throw va(n);return Nf(e)?n.lanes=32:n.lanes=536870912,null}var w=r.children;return r=r.fallback,c?(Ea(),c=n.mode,w=yl({mode:"hidden",children:w},c),r=ts(r,c,a,null),w.return=n,r.return=n,w.sibling=r,n.child=w,r=n.child,r.memoizedState=Yu(a),r.childLanes=qu(e,v,a),n.memoizedState=Wu,to(null,r)):(Ma(n),Zu(n,w))}var B=e.memoizedState;if(B!==null&&(w=B.dehydrated,w!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=Ku(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),w=r.fallback,c=n.mode,r=yl({mode:"visible",children:r.children},c),w=ts(w,c,a,null),w.flags|=2,r.return=n,w.return=n,r.sibling=w,n.child=r,ls(n,e.child,null,a),r=n.child,r.memoizedState=Yu(a),r.childLanes=qu(e,v,a),n.memoizedState=Wu,n=to(null,r));else if(Ma(n),Nf(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var ae=v.dgst;v=ae,r=Error(s(419)),r.stack="",r.digest=v,kr({value:r,source:null,stack:null}),n=Ku(e,n,a)}else if(cn||Fs(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=Yt,v!==null&&(r=Rr(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,es(e,r),Vn(v,e,r),ju;Df(w)||Dl(),n=Ku(e,n,a)}else Df(w)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Kt=ui(w.nextSibling),En=n,At=!0,ga=null,li=!1,e!==null&&o0(n,e),n=Zu(n,r.children),n.flags|=4096);return n}return c?(Ea(),w=r.fallback,c=n.mode,B=e.child,ae=B.sibling,r=Bi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,ae!==null?w=Bi(ae,w):(w=ts(w,c,a,null),w.flags|=2),w.return=n,r.return=n,r.sibling=w,n.child=r,to(null,r),r=n.child,w=e.child.memoizedState,w===null?w=Yu(a):(c=w.cachePool,c!==null?(B=on._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=h0(),w={baseLanes:w.baseLanes|a,cachePool:c}),r.memoizedState=w,r.childLanes=qu(e,v,a),n.memoizedState=Wu,to(e.child,r)):(Ma(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Zu(e,n){return n=yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Ku(e,n,a){return ls(n,e.child,null,a),e=Zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ap(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),fu(e.return,n,a)}function Qu(e,n,a,r,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function wp(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=tn.current,w=(v&2)!==0;if(w?(v=v&1|2,n.flags|=128):v&=1,pe(tn,v),An(e,n,r,a),r=At?Gr:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ap(e,a,n);else if(e.tag===19)Ap(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&cl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qu(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&cl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qu(n,!0,a,null,f,r);break;case"together":Qu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function qv(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),_a(n,on,e.memoizedState.cache),ns();break;case 27:case 5:ke(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tp(e,n,a):(Ma(n),e=ji(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Fs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return wp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),pe(tn,tn.current),r)break;return null;case 22:return n.lanes=0,_p(e,n,a,n.pendingProps);case 24:_a(n,on,e.memoizedState.cache)}return ji(e,n,a)}function Cp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ju(e,a)&&(n.flags&128)===0)return cn=!1,qv(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,At&&(n.flags&1048576)!==0&&r0(n,Gr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")iu(e)?(r=us(e,r),n.tag=1,n=Mp(null,n,e,r,a)):(n.tag=0,n=Xu(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===I){n.tag=11,n=xp(null,n,e,r,a);break e}else if(c===O){n.tag=14,n=gp(null,n,e,r,a);break e}}throw n=ge(e)||e,Error(s(306,n,""))}}return n;case 0:return Xu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=us(r,n.pendingProps),Mp(e,n,r,c,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,vu(e,n),Kr(n,r,null,a);var v=n.memoizedState;if(r=v.cache,_a(n,on,r),r!==f.cache&&du(n,[on],a,!0),Zr(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ep(e,n,r,a);break e}else if(r!==c){c=si(Error(s(424)),n),kr(c),n=Ep(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=ui(e.firstChild),En=n,At=!0,ga=null,li=!0,a=_0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),r===c){n=ji(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=Im(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,e=n.pendingProps,r=Fl(Z.current).createElement(a),r[rn]=n,r[hn]=e,wn(r,a,e),se(r),n.stateNode=r):n.memoizedState=Im(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&At&&(r=n.stateNode=Pm(n.type,n.pendingProps,Z.current),En=n,li=!0,c=Kt,Ua(n.type)?(Uf=c,Kt=ui(r.firstChild)):Kt=c),An(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&At&&((c=r=Kt)&&(r=E_(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,En=n,Kt=ui(r.firstChild),li=!1,c=!0):c=!1),c||va(n)),ke(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,wf(c,f)?r=null:v!==null&&wf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(e,n,Iv,null,null,a),go._currentValue=c),bl(e,n),An(e,n,r,a),n.child;case 6:return e===null&&At&&((e=a=Kt)&&(a=T_(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,Kt=null,e=!0):e=!1),e||va(n)),null;case 13:return Tp(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ls(n,null,r,a):An(e,n,r,a),n.child;case 11:return xp(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,_a(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=Tn(c),r=r(c),n.flags|=1,An(e,n,r,a),n.child;case 14:return gp(e,n,n.type,n.pendingProps,a);case 15:return vp(e,n,n.type,n.pendingProps,a);case 19:return wp(e,n,a);case 31:return Yv(e,n,a);case 22:return _p(e,n,a,n.pendingProps);case 24:return as(n),r=Tn(on),e===null?(c=mu(),c===null&&(c=Yt,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},gu(n),_a(n,on,c)):((e.lanes&a)!==0&&(vu(e,n),Kr(n,null,null,a),Zr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,on,r)):(r=f.cache,_a(n,on,r),r!==c.cache&&du(n,[on],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(e){e.flags|=4}function $u(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(tm())e.flags|=8192;else throw os=sl,xu}else e.flags&=-16777217}function Rp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jm(n))if(tm())e.flags|=8192;else throw os=sl,xu}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ht():536870912,e.lanes|=n,Zs|=n)}function no(e,n){if(!At)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Zv(e,n,a){var r=n.pendingProps;switch(ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(on),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ps(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cu())),Qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Xi(n),f!==null?(Qt(n),Rp(n,f)):(Qt(n),$u(n,c,null,r,a))):f?f!==e.memoizedState?(Xi(n),Qt(n),Rp(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Xi(n),Qt(n),$u(n,c,e,r,a)),null;case 27:if(it(n),a=Z.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=ye.current,Ps(n)?l0(n):(e=Pm(c,r,a),n.stateNode=e,Xi(n))}return Qt(n),null;case 5:if(it(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=ye.current,Ps(n))l0(n);else{var v=Fl(Z.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[rn]=n,f[hn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(wn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Xi(n)}}return Qt(n),$u(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,Ps(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Tm(e.nodeValue,a)),e||va(n,!0)}else e=Fl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ps(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ps(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),c=!1}else c=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Qt(n),null);case 4:return Ie(),e===null&&Sf(n.stateNode.containerInfo),Qt(n),null;case 10:return Vi(n.type),Qt(n),null;case 19:if(q(tn),r=n.memoizedState,r===null)return Qt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)no(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=cl(e),f!==null){for(n.flags|=128,no(r,!1),e=f.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)i0(a,e),a=a.sibling;return pe(tn,tn.current&1|2),At&&Ii(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>wl&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304)}else{if(!c)if(e=cl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),no(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!At)return Qt(n),null}else 2*M()-r.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=tn.current,pe(tn,c?a&1|2:a&1),At&&Ii(n,r.treeForkCount),e):(Qt(n),null);case 22:case 23:return Kn(n),Su(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&q(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Kv(e,n){switch(ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(on),Ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return it(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(tn),null;case 4:return Ie(),null;case 10:return Vi(n.type),null;case 22:case 23:return Kn(n),Su(),e!==null&&q(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function Dp(e,n){switch(ou(n),n.tag){case 3:Vi(on),Ie();break;case 26:case 27:case 5:it(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:q(tn);break;case 10:Vi(n.type);break;case 22:case 23:Kn(n),Su(),e!==null&&q(ss);break;case 24:Vi(on)}}function io(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(w){Bt(n,n.return,w)}}function Ta(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var v=r.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,c=n;var B=a,ae=w;try{ae()}catch(be){Bt(c,B,be)}}}r=r.next}while(r!==f)}}catch(be){Bt(n,n.return,be)}}function Np(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{y0(n,a)}catch(r){Bt(e,e.return,r)}}}function Up(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Bt(e,n,r)}}function ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Bt(e,n,c)}}function Ri(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Bt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(e,n,c)}else a.current=null}function Lp(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Bt(e,e.return,c)}}function ef(e,n,a){try{var r=e.stateNode;v_(r,e.type,a,n),r[hn]=n}catch(c){Bt(e,e.return,c)}}function Op(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(r!==4&&(r===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nf(e,n,a),e=e.sibling;e!==null;)nf(e,n,a),e=e.sibling}function Ml(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function zp(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,r,a),n[rn]=e,n[hn]=a}catch(f){Bt(e,e.return,f)}}var Wi=!1,un=!1,af=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Qv(e,n){if(e=e.containerInfo,Tf=jl,e=qh(e),Kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,w=-1,B=-1,ae=0,be=0,Ee=e,oe=null;t:for(;;){for(var he;Ee!==a||c!==0&&Ee.nodeType!==3||(w=v+c),Ee!==f||r!==0&&Ee.nodeType!==3||(B=v+r),Ee.nodeType===3&&(v+=Ee.nodeValue.length),(he=Ee.firstChild)!==null;)oe=Ee,Ee=he;for(;;){if(Ee===e)break t;if(oe===a&&++ae===c&&(w=v),oe===f&&++be===r&&(B=v),(he=Ee.nextSibling)!==null)break;Ee=oe,oe=Ee.parentNode}Ee=he}a=w===-1||B===-1?null:{start:w,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:e,selectionRange:a},jl=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var qe=us(a.type,c);e=r.getSnapshotBeforeUpdate(qe,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(rt){Bt(a,a.return,rt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function Fp(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(e,a),r&4&&io(5,a);break;case 1:if(qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var c=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}r&64&&Np(a),r&512&&ao(a,a.return);break;case 3:if(qi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{y0(e,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&r&4&&zp(a);case 26:case 5:qi(e,a),n===null&&r&4&&Lp(a),r&512&&ao(a,a.return);break;case 12:qi(e,a);break;case 31:qi(e,a),r&4&&Hp(e,a);break;case 13:qi(e,a),r&4&&Vp(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=r_.bind(null,a),A_(e,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||un,c=Wi;var f=un;Wi=r,(un=n)&&!f?Zi(e,a,(a.subtreeFlags&8772)!==0):qi(e,a),Wi=c,un=f}break;case 30:break;default:qi(e,a)}}function Bp(e){var n=e.alternate;n!==null&&(e.alternate=null,Bp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ur(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Fn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Ip(e,n,a),a=a.sibling}function Ip(e,n,a){if(Q&&typeof Q.onCommitFiberUnmount=="function")try{Q.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 26:un||Ri(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ri(a,n);var r=Jt,c=Fn;Ua(a.type)&&(Jt=a.stateNode,Fn=!1),Yi(e,n,a),po(a.stateNode),Jt=r,Fn=c;break;case 5:un||Ri(a,n);case 6:if(r=Jt,c=Fn,Jt=null,Yi(e,n,a),Jt=r,Fn=c,Jt!==null)if(Fn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Fn?(e=Jt,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ir(e)):Nm(Jt,a.stateNode));break;case 4:r=Jt,c=Fn,Jt=a.stateNode.containerInfo,Fn=!0,Yi(e,n,a),Jt=r,Fn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),Yi(e,n,a);break;case 1:un||(Ri(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Up(a,n,r)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,Yi(e,n,a),un=r;break;default:Yi(e,n,a)}}function Hp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ir(e)}catch(a){Bt(n,n.return,a)}}}function Vp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ir(e)}catch(a){Bt(n,n.return,a)}}function Jv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pp),n;default:throw Error(s(435,e.tag))}}function El(e,n){var a=Jv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=o_.bind(null,e,r);r.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,v=n,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(Ua(w.type)){Jt=w.stateNode,Fn=!1;break e}break;case 5:Jt=w.stateNode,Fn=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,Fn=!0;break e}w=w.return}if(Jt===null)throw Error(s(160));Ip(f,v,c),Jt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gp(n,e),n=n.sibling}var gi=null;function Gp(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),In(e),r&4&&(Ta(3,e,e.return),io(3,e),Ta(5,e,e.return));break;case 1:Bn(n,e),In(e),r&512&&(un||a===null||Ri(a,a.return)),r&64&&Wi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(Bn(n,e),In(e),r&512&&(un||a===null||Ri(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,r,a),f[rn]=e,se(f),r=f;break e;case"link":var v=Gm("link","href",c).get(r+(a.href||""));if(v){for(var w=0;w<v.length;w++)if(f=v[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(w,1);break t}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=Gm("meta","content",c).get(r+(a.content||""))){for(w=0;w<v.length;w++)if(f=v[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(w,1);break t}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,se(f),r=f}e.stateNode=r}else km(c,e.type,e.stateNode);else e.stateNode=Vm(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?km(c,e.type,e.stateNode):Vm(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),In(e),r&512&&(un||a===null||Ri(a,a.return)),a!==null&&r&4&&ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),In(e),r&512&&(un||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ai(c,"")}catch(qe){Bt(e,e.return,qe)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,ef(e,c,a!==null?a.memoizedProps:c)),r&1024&&(af=!0);break;case 6:if(Bn(n,e),In(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(qe){Bt(e,e.return,qe)}}break;case 3:if(Hl=null,c=gi,gi=Bl(n.containerInfo),Bn(n,e),gi=c,In(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(qe){Bt(e,e.return,qe)}af&&(af=!1,kp(e));break;case 4:r=gi,gi=Bl(e.stateNode.containerInfo),Bn(n,e),In(e),gi=r;break;case 12:Bn(n,e),In(e);break;case 31:Bn(n,e),In(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 13:Bn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ae=Wi,be=un;if(Wi=ae||c,un=be||B,Bn(n,e),un=be,Wi=ae,In(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Wi||un||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=B.stateNode;var Ee=B.memoizedProps.style,oe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;w.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(qe){Bt(B,B.return,qe)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(qe){Bt(B,B.return,qe)}}}else if(n.tag===18){if(a===null){B=n;try{var he=B.stateNode;c?Um(he,!0):Um(B.stateNode,!1)}catch(qe){Bt(B,B.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,El(e,a))));break;case 19:Bn(n,e),In(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 30:break;case 21:break;default:Bn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Op(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(e);Ml(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Ai(v,""),a.flags&=-33);var w=tf(e);Ml(e,w,v);break;case 3:case 4:var B=a.stateNode.containerInfo,ae=tf(e);nf(e,ae,B);break;default:throw Error(s(161))}}catch(be){Bt(e,e.return,be)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;kp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fp(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fs(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Up(n,n.return,a),fs(n);break;case 27:po(n.stateNode);case 26:case 5:Ri(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),io(4,f);break;case 1:if(Zi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ae){Bt(r,r.return,ae)}if(r=f,c=r.updateQueue,c!==null){var w=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)b0(B[c],w)}catch(ae){Bt(r,r.return,ae)}}a&&v&64&&Np(f),ao(f,f.return);break;case 27:zp(f);case 26:case 5:Zi(c,f,a),a&&r===null&&v&4&&Lp(f),ao(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&v&4&&Hp(c,f);break;case 13:Zi(c,f,a),a&&v&4&&Vp(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),ao(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jr(a))}function rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jr(e))}function vi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jp(e,n,a,r),n=n.sibling}function jp(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),c&2048&&io(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jr(e)));break;case 12:if(c&2048){vi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,w=f.onPostCommit;typeof w=="function"&&w(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,r):so(e,n):f._visibility&2?vi(e,n,a,r):(f._visibility|=2,Ws(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&sf(v,n);break;case 24:vi(e,n,a,r),c&2048&&rf(n.alternate,n);break;default:vi(e,n,a,r)}}function Ws(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,w=a,B=r,ae=v.flags;switch(v.tag){case 0:case 11:case 15:Ws(f,v,w,B,c),io(8,v);break;case 23:break;case 22:var be=v.stateNode;v.memoizedState!==null?be._visibility&2?Ws(f,v,w,B,c):so(f,v):(be._visibility|=2,Ws(f,v,w,B,c)),c&&ae&2048&&sf(v.alternate,v);break;case 24:Ws(f,v,w,B,c),c&&ae&2048&&rf(v.alternate,v);break;default:Ws(f,v,w,B,c)}n=n.sibling}}function so(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:so(a,r),c&2048&&sf(r.alternate,r);break;case 24:so(a,r),c&2048&&rf(r.alternate,r);break;default:so(a,r)}n=n.sibling}}var ro=8192;function Ys(e,n,a){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)Xp(e,n,a),e=e.sibling}function Xp(e,n,a){switch(e.tag){case 26:Ys(e,n,a),e.flags&ro&&e.memoizedState!==null&&B_(a,gi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e,n,a);break;case 3:case 4:var r=gi;gi=Bl(e.stateNode.containerInfo),Ys(e,n,a),gi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ro,ro=16777216,Ys(e,n,a),ro=r):Ys(e,n,a));break;default:Ys(e,n,a)}}function Wp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,qp(r,e)}Wp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tl(e)):oo(e);break;default:oo(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,qp(r,e)}Wp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}e=e.sibling}}function qp(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else e:for(a=e;yn!==null;){r=yn;var c=r.sibling,f=r.return;if(Bp(r),r===a){yn=null;break e}if(c!==null){c.return=f,yn=c;break e}yn=f}}}var $v={getCacheForType:function(e){var n=Tn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},e_=typeof WeakMap=="function"?WeakMap:Map,zt=0,Yt=null,bt=null,St=0,Ft=0,Qn=null,Aa=!1,qs=!1,of=!1,Ki=0,en=0,wa=0,ds=0,lf=0,Jn=0,Zs=0,lo=null,Hn=null,cf=!1,Al=0,Zp=0,wl=1/0,Cl=null,Ca=null,mn=0,Ra=null,Ks=null,Qi=0,uf=0,ff=null,Kp=null,co=0,df=null;function $n(){return(zt&2)!==0&&St!==0?St&-St:F.T!==null?vf():Dr()}function Qp(){if(Jn===0)if((St&536870912)===0||At){var e=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===Yt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(Qs(e,0),Da(e,St,Jn,!1)),Cn(e,a),((zt&2)===0||e!==Yt)&&(e===Yt&&((zt&2)===0&&(ds|=a),en===4&&Da(e,St,Jn,!1)),Di(e))}function Jp(e,n,a){if((zt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xe(e,n),c=r?i_(e,n):pf(e,n,!0),f=r;do{if(c===0){qs&&!r&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!t_(a)){c=pf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var w=e;c=lo;var B=w.current.memoizedState.isDehydrated;if(B&&(Qs(w,v).flags|=256),v=pf(w,v,!1),v!==2){if(of&&!B){w.errorRecoveryDisabledLanes|=f,ds|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Qs(e,0),Da(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(r,n,Jn,!Aa);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Al+300-M(),10<c)){if(Da(r,n,Jn,!Aa),Te(r,0,!0)!==0)break e;Qi=n,r.timeoutHandle=Rm($p.bind(null,r,a,Hn,Cl,cf,n,Jn,ds,Zs,Aa,f,"Throttled",-0,0),c);break e}$p(r,a,Hn,Cl,cf,n,Jn,ds,Zs,Aa,f,null,-0,0)}}break}while(!0);Di(e)}function $p(e,n,a,r,c,f,v,w,B,ae,be,Ee,oe,he){if(e.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},Xp(n,f,Ee);var qe=(f&62914560)===f?Al-M():(f&4194048)===f?Zp-M():0;if(qe=I_(Ee,qe),qe!==null){Qi=f,e.cancelPendingCommit=qe(om.bind(null,e,n,f,a,r,c,v,w,B,be,Ee,null,oe,he)),Da(e,f,v,!ae);return}}om(e,n,f,a,r,c,v,w,B)}function t_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,r){n&=~lf,n&=~ds,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-De(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Ho(e,a,n)}function Rl(){return(zt&6)===0?(uo(0),!1):!0}function hf(){if(bt!==null){if(Ft===0)var e=bt.return;else e=bt,Hi=is=null,Cu(e),Vs=null,Wr=0,e=bt;for(;e!==null;)Dp(e.alternate,e),e=e.return;bt=null}}function Qs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,y_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,hf(),Yt=e,bt=a=Bi(e.current,null),St=n,Ft=0,Qn=null,Aa=!1,qs=Xe(e,n),of=!1,Zs=Jn=lf=ds=wa=en=0,Hn=lo=null,cf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-De(r),f=1<<c;n|=e[c],r&=~f}return Ki=n,Ko(),a}function em(e,n){ft=null,F.H=eo,n===Hs||n===al?(n=x0(),Ft=3):n===xu?(n=x0(),Ft=4):Ft=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,bt===null&&(en=1,vl(e,si(n,e.current)))}function tm(){var e=Zn.current;return e===null?!0:(St&4194048)===St?ci===null:(St&62914560)===St||(St&536870912)!==0?e===ci:!1}function nm(){var e=F.H;return F.H=eo,e===null?eo:e}function im(){var e=F.A;return F.A=$v,e}function Dl(){en=4,Aa||(St&4194048)!==St&&Zn.current!==null||(qs=!0),(wa&134217727)===0&&(ds&134217727)===0||Yt===null||Da(Yt,St,Jn,!1)}function pf(e,n,a){var r=zt;zt|=2;var c=nm(),f=im();(Yt!==e||St!==n)&&(Cl=null,Qs(e,n)),n=!1;var v=en;e:do try{if(Ft!==0&&bt!==null){var w=bt,B=Qn;switch(Ft){case 8:hf(),v=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ae=Ft;if(Ft=0,Qn=null,Js(e,w,B,ae),a&&qs){v=0;break e}break;default:ae=Ft,Ft=0,Qn=null,Js(e,w,B,ae)}}n_(),v=en;break}catch(be){em(e,be)}while(!0);return n&&e.shellSuspendCounter++,Hi=is=null,zt=r,F.H=c,F.A=f,bt===null&&(Yt=null,St=0,Ko()),v}function n_(){for(;bt!==null;)am(bt)}function i_(e,n){var a=zt;zt|=2;var r=nm(),c=im();Yt!==e||St!==n?(Cl=null,wl=M()+500,Qs(e,n)):qs=Xe(e,n);e:do try{if(Ft!==0&&bt!==null){n=bt;var f=Qn;t:switch(Ft){case 1:Ft=0,Qn=null,Js(e,n,f,1);break;case 2:case 9:if(p0(f)){Ft=0,Qn=null,sm(n);break}n=function(){Ft!==2&&Ft!==9||Yt!==e||(Ft=7),Di(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:p0(f)?(Ft=0,Qn=null,sm(n)):(Ft=0,Qn=null,Js(e,n,f,7));break;case 5:var v=null;switch(bt.tag){case 26:v=bt.memoizedState;case 5:case 27:var w=bt;if(v?jm(v):w.stateNode.complete){Ft=0,Qn=null;var B=w.sibling;if(B!==null)bt=B;else{var ae=w.return;ae!==null?(bt=ae,Nl(ae)):bt=null}break t}}Ft=0,Qn=null,Js(e,n,f,5);break;case 6:Ft=0,Qn=null,Js(e,n,f,6);break;case 8:hf(),en=6;break e;default:throw Error(s(462))}}a_();break}catch(be){em(e,be)}while(!0);return Hi=is=null,F.H=r,F.A=c,zt=a,bt!==null?0:(Yt=null,St=0,Ko(),en)}function a_(){for(;bt!==null&&!Je();)am(bt)}function am(e){var n=Cp(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Nl(e):bt=n}function sm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sp(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Sp(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Cu(n);default:Dp(a,n),n=bt=i0(n,Ki),n=Cp(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Nl(e):bt=n}function Js(e,n,a,r){Hi=is=null,Cu(n),Vs=null,Wr=0;var c=n.return;try{if(Wv(e,c,n,a,St)){en=1,vl(e,si(a,e.current)),bt=null;return}}catch(f){if(c!==null)throw bt=c,f;en=1,vl(e,si(a,e.current)),bt=null;return}n.flags&32768?(At||r===1?e=!0:qs||(St&536870912)!==0?e=!1:(Aa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),rm(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){rm(n,Aa);return}e=n.return;var a=Zv(n.alternate,n,Ki);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=e}while(n!==null);en===0&&(en=5)}function rm(e,n){do{var a=Kv(e.alternate,e);if(a!==null){a.flags&=32767,bt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){bt=e;return}bt=e=a}while(e!==null);en=6,bt=null}function om(e,n,a,r,c,f,v,w,B){e.cancelPendingCommit=null;do Ul();while(mn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=tu,Xn(e,a,f,v,w,B),e===Yt&&(bt=Yt=null,St=0),Ks=n,Ra=e,Qi=a,uf=f,ff=c,Kp=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,l_(de,function(){return dm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=j.p,j.p=2,v=zt,zt|=4;try{Qv(e,n,a)}finally{zt=v,j.p=c,F.T=r}}mn=1,lm(),cm(),um()}}function lm(){if(mn===1){mn=0;var e=Ra,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=j.p;j.p=2;var c=zt;zt|=4;try{Gp(n,e);var f=Af,v=qh(e.containerInfo),w=f.focusedElem,B=f.selectionRange;if(v!==w&&w&&w.ownerDocument&&Yh(w.ownerDocument.documentElement,w)){if(B!==null&&Kc(w)){var ae=B.start,be=B.end;if(be===void 0&&(be=ae),"selectionStart"in w)w.selectionStart=ae,w.selectionEnd=Math.min(be,w.value.length);else{var Ee=w.ownerDocument||document,oe=Ee&&Ee.defaultView||window;if(oe.getSelection){var he=oe.getSelection(),qe=w.textContent.length,rt=Math.min(B.start,qe),kt=B.end===void 0?rt:Math.min(B.end,qe);!he.extend&&rt>kt&&(v=kt,kt=rt,rt=v);var $=Wh(w,rt),X=Wh(w,kt);if($&&X&&(he.rangeCount!==1||he.anchorNode!==$.node||he.anchorOffset!==$.offset||he.focusNode!==X.node||he.focusOffset!==X.offset)){var ie=Ee.createRange();ie.setStart($.node,$.offset),he.removeAllRanges(),rt>kt?(he.addRange(ie),he.extend(X.node,X.offset)):(ie.setEnd(X.node,X.offset),he.addRange(ie))}}}}for(Ee=[],he=w;he=he.parentNode;)he.nodeType===1&&Ee.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ee.length;w++){var Me=Ee[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}jl=!!Tf,Af=Tf=null}finally{zt=c,j.p=r,F.T=a}}e.current=n,mn=2}}function cm(){if(mn===2){mn=0;var e=Ra,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=j.p;j.p=2;var c=zt;zt|=4;try{Fp(e,n.alternate,n)}finally{zt=c,j.p=r,F.T=a}}mn=3}}function um(){if(mn===4||mn===3){mn=0,N();var e=Ra,n=Ks,a=Qi,r=Kp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Ks=Ra=null,fm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),Za(a),n=n.stateNode,Q&&typeof Q.onCommitFiberRoot=="function")try{Q.onCommitFiberRoot(K,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,c=j.p,j.p=2,F.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var w=r[v];f(w.value,{componentStack:w.stack})}}finally{F.T=n,j.p=c}}(Qi&3)!==0&&Ul(),Di(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===df?co++:(co=0,df=e):co=0,uo(0)}}function fm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,jr(n)))}function Ul(){return lm(),cm(),um(),dm()}function dm(){if(mn!==5)return!1;var e=Ra,n=uf;uf=0;var a=Za(Qi),r=F.T,c=j.p;try{j.p=32>a?32:a,F.T=null,a=ff,ff=null;var f=Ra,v=Qi;if(mn=0,Ks=Ra=null,Qi=0,(zt&6)!==0)throw Error(s(331));var w=zt;if(zt|=4,Yp(f.current),jp(f,f.current,v,a),zt=w,uo(0,!1),Q&&typeof Q.onPostCommitFiberRoot=="function")try{Q.onPostCommitFiberRoot(K,f)}catch{}return!0}finally{j.p=c,F.T=r,fm(e,n)}}function hm(e,n,a){n=si(a,n),n=ku(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Cn(e,2),Di(e))}function Bt(e,n,a){if(e.tag===3)hm(e,e,a);else for(;n!==null;){if(n.tag===3){hm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ca===null||!Ca.has(r))){e=si(a,e),a=pp(2),r=Sa(n,a,2),r!==null&&(mp(a,r,n,e),Cn(r,2),Di(r));break}}n=n.return}}function mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new e_;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(of=!0,c.add(a),e=s_.bind(null,e,n,a),n.then(e,e))}function s_(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(St&a)===a&&(en===4||en===3&&(St&62914560)===St&&300>M()-Al?(zt&2)===0&&Qs(e,0):lf|=a,Zs===St&&(Zs=0)),Di(e)}function pm(e,n){n===0&&(n=Ht()),e=es(e,n),e!==null&&(Cn(e,n),Di(e))}function r_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),pm(e,a)}function o_(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),pm(e,a)}function l_(e,n){return _t(e,n)}var Ll=null,$s=null,xf=!1,Ol=!1,gf=!1,Na=0;function Di(e){e!==$s&&e.next===null&&($s===null?Ll=$s=e:$s=$s.next=e),Ol=!0,xf||(xf=!0,u_())}function uo(e,n){if(!gf&&Ol){gf=!0;do for(var a=!1,r=Ll;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,w=r.pingedLanes;f=(1<<31-De(42|e)+1)-1,f&=c&~(v&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,vm(r,f))}else f=St,f=Te(r,r===Yt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Xe(r,f)||(a=!0,vm(r,f));r=r.next}while(a);gf=!1}}function c_(){mm()}function mm(){Ol=xf=!1;var e=0;Na!==0&&b_()&&(e=Na);for(var n=M(),a=null,r=Ll;r!==null;){var c=r.next,f=xm(r,n);f===0?(r.next=null,a===null?Ll=c:a.next=c,c===null&&($s=a)):(a=r,(e!==0||(f&3)!==0)&&(Ol=!0)),r=c}mn!==0&&mn!==5||uo(e),Na!==0&&(Na=0)}function xm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-De(f),w=1<<v,B=c[v];B===-1?((w&a)===0||(w&r)!==0)&&(c[v]=ct(w,n)):B<=n&&(e.expiredLanes|=w),f&=~w}if(n=Yt,a=St,a=Te(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ze(r),Za(a)){case 2:case 8:a=Se;break;case 32:a=de;break;case 268435456:a=ze;break;default:a=de}return r=gm.bind(null,e),a=_t(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function gm(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ul()&&e.callbackNode!==a)return null;var r=St;return r=Te(e,e===Yt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Jp(e,r,n),xm(e,M()),e.callbackNode!=null&&e.callbackNode===a?gm.bind(null,e):null)}function vm(e,n){if(Ul())return null;Jp(e,n,!0)}function u_(){S_(function(){(zt&6)!==0?_t(_e,c_):mm()})}function vf(){if(Na===0){var e=Bs;e===0&&(e=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Na=e}return Na}function _m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function bm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function f_(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=_m((c[hn]||null).action),v=r.submitter;v&&(n=(n=v[hn]||null)?_m(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var w=new Wo("action","action",null,r,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Na!==0){var B=v?bm(c,v):new FormData(c);Fu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(w.preventDefault(),B=v?bm(c,v):new FormData(c),Fu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var _f=0;_f<eu.length;_f++){var bf=eu[_f],d_=bf.toLowerCase(),h_=bf[0].toUpperCase()+bf.slice(1);xi(d_,"on"+h_)}xi(Qh,"onAnimationEnd"),xi(Jh,"onAnimationIteration"),xi($h,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Rv,"onTransitionRun"),xi(Dv,"onTransitionStart"),xi(Nv,"onTransitionCancel"),xi(e0,"onTransitionEnd"),je("onMouseEnter",["mouseout","mouseover"]),je("onMouseLeave",["mouseout","mouseover"]),je("onPointerEnter",["pointerout","pointerover"]),je("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function ym(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var w=r[v],B=w.instance,ae=w.currentTarget;if(w=w.listener,B!==f&&c.isPropagationStopped())break e;f=w,c.currentTarget=ae;try{f(c)}catch(be){Zo(be)}c.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(w=r[v],B=w.instance,ae=w.currentTarget,w=w.listener,B!==f&&c.isPropagationStopped())break e;f=w,c.currentTarget=ae;try{f(c)}catch(be){Zo(be)}c.currentTarget=null,f=B}}}}function yt(e,n){var a=n[As];a===void 0&&(a=n[As]=new Set);var r=e+"__bubble";a.has(r)||(Sm(n,e,2,!1),a.add(r))}function yf(e,n,a){var r=0;n&&(r|=4),Sm(a,e,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[zl]){e[zl]=!0,ee.forEach(function(a){a!=="selectionchange"&&(p_.has(a)||yf(a,!1,e),yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zl]||(n[zl]=!0,yf("selectionchange",!1,n))}}function Sm(e,n,a,r){switch(Qm(n)){case 2:var c=G_;break;case 8:c=k_;break;default:c=Ff}a=c.bind(null,n,a,e),c=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Mf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var w=r.stateNode.containerInfo;if(w===c)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;w!==null;){if(v=ha(w),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue e}w=w.parentNode}}r=r.return}wh(function(){var ae=f,be=Ic(a),Ee=[];e:{var oe=t0.get(e);if(oe!==void 0){var he=Wo,qe=e;switch(e){case"keypress":if(jo(a)===0)break e;case"keydown":case"keyup":he=ov;break;case"focusin":qe="focus",he=Xc;break;case"focusout":qe="blur",he=Xc;break;case"beforeblur":case"afterblur":he=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=uv;break;case Qh:case Jh:case $h:he=Jg;break;case e0:he=dv;break;case"scroll":case"scrollend":he=Yg;break;case"wheel":he=pv;break;case"copy":case"cut":case"paste":he=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Uh;break;case"toggle":case"beforetoggle":he=xv}var rt=(n&4)!==0,kt=!rt&&(e==="scroll"||e==="scrollend"),$=rt?oe!==null?oe+"Capture":null:oe;rt=[];for(var X=ae,ie;X!==null;){var Me=X;if(ie=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ie===null||$===null||(Me=Lr(X,$),Me!=null&&rt.push(ho(X,Me,ie))),kt)break;X=X.return}0<rt.length&&(oe=new he(oe,qe,null,a,be),Ee.push({event:oe,listeners:rt}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",he=e==="mouseout"||e==="pointerout",oe&&a!==Bc&&(qe=a.relatedTarget||a.fromElement)&&(ha(qe)||qe[Li]))break e;if((he||oe)&&(oe=be.window===be?be:(oe=be.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(qe=a.relatedTarget||a.toElement,he=ae,qe=qe?ha(qe):null,qe!==null&&(kt=u(qe),rt=qe.tag,qe!==kt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(he=null,qe=ae),he!==qe)){if(rt=Dh,Me="onMouseLeave",$="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(rt=Uh,Me="onPointerLeave",$="onPointerEnter",X="pointer"),kt=he==null?oe:J(he),ie=qe==null?oe:J(qe),oe=new rt(Me,X+"leave",he,a,be),oe.target=kt,oe.relatedTarget=ie,Me=null,ha(be)===ae&&(rt=new rt($,X+"enter",qe,a,be),rt.target=ie,rt.relatedTarget=kt,Me=rt),kt=Me,he&&qe)t:{for(rt=m_,$=he,X=qe,ie=0,Me=$;Me;Me=rt(Me))ie++;Me=0;for(var tt=X;tt;tt=rt(tt))Me++;for(;0<ie-Me;)$=rt($),ie--;for(;0<Me-ie;)X=rt(X),Me--;for(;ie--;){if($===X||X!==null&&$===X.alternate){rt=$;break t}$=rt($),X=rt(X)}rt=null}else rt=null;he!==null&&Mm(Ee,oe,he,rt,!1),qe!==null&&kt!==null&&Mm(Ee,kt,qe,rt,!0)}}e:{if(oe=ae?J(ae):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var Ut=Hh;else if(Bh(oe))if(Vh)Ut=Av;else{Ut=Ev;var Qe=Mv}else he=oe.nodeName,!he||he.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ae&&Fc(ae.elementType)&&(Ut=Hh):Ut=Tv;if(Ut&&(Ut=Ut(e,ae))){Ih(Ee,Ut,a,be);break e}Qe&&Qe(e,oe,ae),e==="focusout"&&ae&&oe.type==="number"&&ae.memoizedProps.value!=null&&_n(oe,"number",oe.value)}switch(Qe=ae?J(ae):window,e){case"focusin":(Bh(Qe)||Qe.contentEditable==="true")&&(Ds=Qe,Qc=ae,Vr=null);break;case"focusout":Vr=Qc=Ds=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Zh(Ee,a,be);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Zh(Ee,a,be)}var mt;if(Yc)e:{switch(e){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Rs?Ph(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Lh&&a.locale!=="ko"&&(Rs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Rs&&(mt=Ch()):(ma=be,Gc="value"in ma?ma.value:ma.textContent,Rs=!0)),Qe=Pl(ae,Mt),0<Qe.length&&(Mt=new Nh(Mt,e,null,a,be),Ee.push({event:Mt,listeners:Qe}),mt?Mt.data=mt:(mt=Fh(a),mt!==null&&(Mt.data=mt)))),(mt=vv?_v(e,a):bv(e,a))&&(Mt=Pl(ae,"onBeforeInput"),0<Mt.length&&(Qe=new Nh("onBeforeInput","beforeinput",null,a,be),Ee.push({event:Qe,listeners:Mt}),Qe.data=mt)),f_(Ee,e,ae,a,be)}ym(Ee,n)})}function ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Lr(e,a),c!=null&&r.unshift(ho(e,c,f)),c=Lr(e,n),c!=null&&r.push(ho(e,c,f))),e.tag===3)return r;e=e.return}return[]}function m_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var w=a,B=w.alternate,ae=w.stateNode;if(w=w.tag,B!==null&&B===r)break;w!==5&&w!==26&&w!==27||ae===null||(B=ae,c?(ae=Lr(a,f),ae!=null&&v.unshift(ho(a,ae,B))):c||(ae=Lr(a,f),ae!=null&&v.push(ho(a,ae,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var x_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(x_,`
`).replace(g_,"")}function Tm(e,n){return n=Em(n),Em(e)===n}function Gt(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ai(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ai(e,""+r);break;case"className":Ct(e,"class",r);break;case"tabIndex":Ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,r);break;case"style":Th(e,r,f);break;case"data":if(n!=="object"){Ct(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Go(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Go(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Pi);break;case"onScroll":r!=null&&yt("scroll",e);break;case"onScrollEnd":r!=null&&yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Go(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":yt("beforetoggle",e),yt("toggle",e),pt(e,"popover",r);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":pt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xg.get(a)||a,pt(e,a,r))}}function Ef(e,n,a,r,c,f){switch(a){case"style":Th(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ai(e,r):(typeof r=="number"||typeof r=="bigint")&&Ai(e,""+r);break;case"onScroll":r!=null&&yt("scroll",e);break;case"onScrollEnd":r!=null&&yt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):pt(e,a,r)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",e),yt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,v,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),r&&Gt(e,n,"src",a.src,a,null);return;case"input":yt("invalid",e);var w=f=v=c=null,B=null,ae=null;for(r in a)if(a.hasOwnProperty(r)){var be=a[r];if(be!=null)switch(r){case"name":c=be;break;case"type":v=be;break;case"checked":B=be;break;case"defaultChecked":ae=be;break;case"value":f=be;break;case"defaultValue":w=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(s(137,n));break;default:Gt(e,n,r,be,a,null)}}Zt(e,f,w,B,ae,v,c,!1);return;case"select":yt("invalid",e),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":v=w;break;case"multiple":r=w;default:Gt(e,n,c,w,a,null)}n=f,a=v,e.multiple=!!r,n!=null?pn(e,!!r,n,!1):a!=null&&pn(e,!!r,a,!0);return;case"textarea":yt("invalid",e),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(w=a[v],w!=null))switch(v){case"value":r=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Gt(e,n,v,w,a,null)}Mn(e,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Gt(e,n,B,r,a,null)}return;case"dialog":yt("beforetoggle",e),yt("toggle",e),yt("cancel",e),yt("close",e);break;case"iframe":case"object":yt("load",e);break;case"video":case"audio":for(r=0;r<fo.length;r++)yt(fo[r],e);break;case"image":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"embed":case"source":case"link":yt("error",e),yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(r=a[ae],r!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,ae,r,a,null)}return;default:if(Fc(n)){for(be in a)a.hasOwnProperty(be)&&(r=a[be],r!==void 0&&Ef(e,n,be,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Gt(e,n,w,r,a,null))}function v_(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,w=null,B=null,ae=null,be=null;for(he in a){var Ee=a[he];if(a.hasOwnProperty(he)&&Ee!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":B=Ee;default:r.hasOwnProperty(he)||Gt(e,n,he,null,r,Ee)}}for(var oe in r){var he=r[oe];if(Ee=a[oe],r.hasOwnProperty(oe)&&(he!=null||Ee!=null))switch(oe){case"type":f=he;break;case"name":c=he;break;case"checked":ae=he;break;case"defaultChecked":be=he;break;case"value":v=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==Ee&&Gt(e,n,oe,he,r,Ee)}}Oi(e,v,w,B,ae,be,f,c);return;case"select":he=v=w=oe=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":he=B;default:r.hasOwnProperty(f)||Gt(e,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":oe=f;break;case"defaultValue":w=f;break;case"multiple":v=f;default:f!==B&&Gt(e,n,c,f,r,B)}n=w,a=v,r=he,oe!=null?pn(e,!!a,oe,!1):!!r!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":he=oe=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Gt(e,n,w,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":oe=c;break;case"defaultValue":he=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Gt(e,n,v,c,r,f)}bn(e,oe,he);return;case"option":for(var qe in a)if(oe=a[qe],a.hasOwnProperty(qe)&&oe!=null&&!r.hasOwnProperty(qe))switch(qe){case"selected":e.selected=!1;break;default:Gt(e,n,qe,null,r,oe)}for(B in r)if(oe=r[B],he=a[B],r.hasOwnProperty(B)&&oe!==he&&(oe!=null||he!=null))switch(B){case"selected":e.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Gt(e,n,B,oe,r,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)oe=a[rt],a.hasOwnProperty(rt)&&oe!=null&&!r.hasOwnProperty(rt)&&Gt(e,n,rt,null,r,oe);for(ae in r)if(oe=r[ae],he=a[ae],r.hasOwnProperty(ae)&&oe!==he&&(oe!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Gt(e,n,ae,oe,r,he)}return;default:if(Fc(n)){for(var kt in a)oe=a[kt],a.hasOwnProperty(kt)&&oe!==void 0&&!r.hasOwnProperty(kt)&&Ef(e,n,kt,void 0,r,oe);for(be in r)oe=r[be],he=a[be],!r.hasOwnProperty(be)||oe===he||oe===void 0&&he===void 0||Ef(e,n,be,oe,r,he);return}}for(var $ in a)oe=a[$],a.hasOwnProperty($)&&oe!=null&&!r.hasOwnProperty($)&&Gt(e,n,$,null,r,oe);for(Ee in r)oe=r[Ee],he=a[Ee],!r.hasOwnProperty(Ee)||oe===he||oe==null&&he==null||Gt(e,n,Ee,oe,r,he)}function Am(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function __(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,w=c.duration;if(f&&w&&Am(v)){for(v=0,w=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],ae=B.startTime;if(ae>w)break;var be=B.transferSize,Ee=B.initiatorType;be&&Am(Ee)&&(B=B.responseEnd,v+=be*(B<w?1:(w-ae)/(B-ae)))}if(--r,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tf=null,Af=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function wm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function b_(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,S_=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(e){return Dm.resolve(null).then(e).catch(M_)}:Rm;function M_(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Nm(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),ir(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,po(a);for(var f=a.firstChild;f;){var v=f.nextSibling,w=f.nodeName;f[Ka]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&po(e.ownerDocument.body);a=c}while(a);ir(n)}function Um(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),Ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function E_(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function T_(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Lm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$?"||e.data==="$~"}function Nf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A_(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Uf=null;function Om(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Pm(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ur(e)}var fi=new Map,Fm=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=j.d;j.d={f:w_,r:C_,D:R_,C:D_,L:N_,m:U_,X:O_,S:L_,M:z_};function w_(){var e=Ji.f(),n=Rl();return e||n}function C_(e){var n=C(e);n!==null&&n.tag===5&&n.type==="form"?ep(n):Ji.r(e)}var er=typeof document>"u"?null:document;function Bm(e,n,a){var r=er;if(r&&typeof n=="string"&&n){var c=qt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fm.has(c)||(Fm.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),wn(n,"link",e),se(n),r.head.appendChild(n)))}}function R_(e){Ji.D(e),Bm("dns-prefetch",e,null)}function D_(e,n){Ji.C(e,n),Bm("preconnect",e,n)}function N_(e,n,a){Ji.L(e,n,a);var r=er;if(r&&e&&n){var c='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qt(a.imageSizes)+'"]')):c+='[href="'+qt(e)+'"]';var f=c;switch(n){case"style":f=tr(e);break;case"script":f=nr(e)}fi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(mo(f))||n==="script"&&r.querySelector(xo(f))||(n=r.createElement("link"),wn(n,"link",e),se(n),r.head.appendChild(n)))}}function U_(e,n){Ji.m(e,n);var a=er;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qt(r)+'"][href="'+qt(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(e)}if(!fi.has(f)&&(e=x({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}r=a.createElement("link"),wn(r,"link",e),se(r),a.head.appendChild(r)}}}function L_(e,n,a){Ji.S(e,n,a);var r=er;if(r&&e){var c=fe(r).hoistableStyles,f=tr(e);n=n||"default";var v=c.get(f);if(!v){var w={loading:0,preload:null};if(v=r.querySelector(mo(f)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Lf(e,a);var B=v=r.createElement("link");se(B),wn(B,"link",e),B._p=new Promise(function(ae,be){B.onload=ae,B.onerror=be}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Il(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:w},c.set(f,v)}}}function O_(e,n){Ji.X(e,n);var a=er;if(a&&e){var r=fe(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(e=x({src:e,async:!0},n),(n=fi.get(c))&&Of(e,n),f=a.createElement("script"),se(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function z_(e,n){Ji.M(e,n);var a=er;if(a&&e){var r=fe(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Of(e,n),f=a.createElement("script"),se(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Im(e,n,a,r){var c=(c=Z.current)?Bl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=fe(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tr(a.href);var f=fe(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(mo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||P_(c,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=fe(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function tr(e){return'href="'+qt(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function Hm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function P_(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),se(n),e.head.appendChild(n))}function nr(e){return'[src="'+qt(e)+'"]'}function xo(e){return"script[async]"+e}function Vm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(r)return n.instance=r,se(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),se(r),wn(r,"style",c),Il(r,a.precedence,e),n.instance=r;case"stylesheet":c=tr(a.href);var f=e.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,se(f),f;r=Hm(a),(c=fi.get(c))&&Lf(r,c),f=(e.ownerDocument||e).createElement("link"),se(f);var v=f;return v._p=new Promise(function(w,B){v.onload=w,v.onerror=B}),wn(f,"link",r),n.state.loading|=4,Il(f,a.precedence,e),n.instance=f;case"script":return f=nr(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,se(c),c):(r=a,(c=fi.get(f))&&(r=x({},a),Of(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),se(c),wn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Il(r,a.precedence,e));return n.instance}function Il(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var w=r[v];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function Gm(e,n,a){if(Hl===null){var r=new Map,c=Hl=new Map;c.set(a,r)}else c=Hl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var w=r.get(v);w?w.push(f):r.set(v,[f])}}return r}function km(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function F_(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B_(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=tr(r.href),f=n.querySelector(mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,se(f);return}f=n.ownerDocument||n,r=Hm(r),(c=fi.get(c))&&Lf(r,c),f=f.createElement("link"),se(f);var v=f;v._p=new Promise(function(w,B){v.onload=w,v.onerror=B}),wn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function I_(e,n){return e.stylesheets&&e.count===0&&kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&zf===0&&(zf=62500*__());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,n.forEach(H_,e),Gl=null,Vl.call(e))}function H_(e,n){if(!(n.state.loading&4)){var a=Gl.get(e);if(a)var r=a.get(null);else{a=new Map,Gl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=Vl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var go={$$typeof:U,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function V_(e,n,a,r,c,f,v,w,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Xm(e,n,a,r,c,f,v,w,B,ae,be,Ee){return e=new V_(e,n,a,v,B,ae,be,Ee,w),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},gu(f),e}function Wm(e){return e?(e=Ls,e):Ls}function Ym(e,n,a,r,c,f){c=Wm(c),r.context===null?r.context=c:r.pendingContext=c,r=ya(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Sa(e,r,n),a!==null&&(Vn(a,e,n),qr(a,e,n))}function qm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){qm(e,n),(e=e.alternate)&&qm(e,n)}function Zm(e){if(e.tag===13||e.tag===31){var n=es(e,67108864);n!==null&&Vn(n,e,67108864),Pf(e,67108864)}}function Km(e){if(e.tag===13||e.tag===31){var n=$n();n=mi(n);var a=es(e,n);a!==null&&Vn(a,e,n),Pf(e,n)}}var jl=!0;function G_(e,n,a,r){var c=F.T;F.T=null;var f=j.p;try{j.p=2,Ff(e,n,a,r)}finally{j.p=f,F.T=c}}function k_(e,n,a,r){var c=F.T;F.T=null;var f=j.p;try{j.p=8,Ff(e,n,a,r)}finally{j.p=f,F.T=c}}function Ff(e,n,a,r){if(jl){var c=Bf(r);if(c===null)Mf(e,n,r,Xl,a),Jm(e,r);else if(X_(c,e,n,a,r))r.stopPropagation();else if(Jm(e,r),n&4&&-1<j_.indexOf(e)){for(;c!==null;){var f=C(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=we(f.pendingLanes);if(v!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var B=1<<31-De(v);w.entanglements[1]|=B,v&=~B}Di(f),(zt&6)===0&&(wl=M()+500,uo(0))}}break;case 31:case 13:w=es(f,2),w!==null&&Vn(w,f,2),Rl(),Pf(f,2)}if(f=Bf(r),f===null&&Mf(e,n,r,Xl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Mf(e,n,r,null,a)}}function Bf(e){return e=Ic(e),If(e)}var Xl=null;function If(e){if(Xl=null,e=ha(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xl=e,null}function Qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case _e:return 2;case Se:return 8;case de:case Ye:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Hf=!1,La=null,Oa=null,za=null,vo=new Map,_o=new Map,Pa=[],j_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jm(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function bo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=C(n),n!==null&&Zm(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function X_(e,n,a,r,c){switch(n){case"focusin":return La=bo(La,e,n,a,r,c),!0;case"dragenter":return Oa=bo(Oa,e,n,a,r,c),!0;case"mouseover":return za=bo(za,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,bo(vo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,bo(_o.get(f)||null,e,n,a,r,c)),!0}return!1}function $m(e){var n=ha(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Nr(e.priority,function(){Km(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Nr(e.priority,function(){Km(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Bc=r,a.target.dispatchEvent(r),Bc=null}else return n=C(a),n!==null&&Zm(n),e.blockedOn=a,!1;n.shift()}return!0}function ex(e,n,a){Wl(e)&&a.delete(n)}function W_(){Hf=!1,La!==null&&Wl(La)&&(La=null),Oa!==null&&Wl(Oa)&&(Oa=null),za!==null&&Wl(za)&&(za=null),vo.forEach(ex),_o.forEach(ex)}function Yl(e,n){e.blockedOn===n&&(e.blockedOn=null,Hf||(Hf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,W_)))}var ql=null;function tx(e){ql!==e&&(ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(If(r||a)===null)continue;break}var f=C(a);f!==null&&(e.splice(n,3),n-=3,Fu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ir(e){function n(B){return Yl(B,e)}La!==null&&Yl(La,e),Oa!==null&&Yl(Oa,e),za!==null&&Yl(za,e),vo.forEach(n),_o.forEach(n);for(var a=0;a<Pa.length;a++){var r=Pa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[hn]||null;if(typeof f=="function")v||tx(a);else if(v){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[hn]||null)w=v.formAction;else if(If(c)!==null)continue}else w=v.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),tx(a)}}}function nx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Vf(e){this._internalRoot=e}Zl.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();Ym(a,r,e,n,null,null)},Zl.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ym(e.current,2,null,e,null,null),Rl(),n[Li]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&$m(e)}};var ix=t.version;if(ix!=="19.2.0")throw Error(s(527,ix,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Y_={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{K=Kl.inject(Y_),Q=Kl}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=up,f=fp,v=dp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Xm(e,1,!1,null,null,a,r,null,c,f,v,nx),e[Li]=n.current,Sf(e),new Vf(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=up,v=fp,w=dp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Xm(e,1,!0,n,a??null,r,c,B,f,v,w,nx),n.context=Wm(null),a=n.current,r=$n(),r=mi(r),c=ya(r),c.callback=null,Sa(a,c,r),a=r,n.current.lanes=a,Cn(n,a),Di(n),e[Li]=n.current,Sf(e),new Zl(n)},So.version="19.2.0",So}var hx;function i1(){if(hx)return jf.exports;hx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jf.exports=n1(),jf.exports}var a1=i1();const mh="181",s1=0,px=1,r1=2,dg=1,o1=2,sa=3,Ya=0,kn=1,ra=2,ca=0,vr=1,Ac=2,mx=3,xx=4,l1=5,bs=100,c1=101,u1=102,f1=103,d1=104,h1=200,p1=201,m1=202,x1=203,Ed=204,Td=205,g1=206,v1=207,_1=208,b1=209,y1=210,S1=211,M1=212,E1=213,T1=214,Ad=0,wd=1,Cd=2,br=3,Rd=4,Dd=5,Nd=6,Ud=7,hg=0,A1=1,w1=2,Wa=0,C1=1,R1=2,D1=3,N1=4,U1=5,L1=6,O1=7,pg=300,yr=301,Sr=302,Ld=303,Od=304,Dc=306,zd=1e3,oa=1001,Pd=1002,ii=1003,z1=1004,Ql=1005,pi=1006,qf=1007,Ss=1008,fa=1009,mg=1010,xg=1011,Do=1012,xh=1013,Es=1014,la=1015,Tr=1016,gh=1017,vh=1018,No=1020,gg=35902,vg=35899,_g=1021,bg=1022,Mi=1023,Uo=1026,Lo=1027,yg=1028,_h=1029,bh=1030,yh=1031,Sh=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,Fd=35840,Bd=35841,Id=35842,Hd=35843,Vd=36196,Gd=37492,kd=37496,jd=37808,Xd=37809,Wd=37810,Yd=37811,qd=37812,Zd=37813,Kd=37814,Qd=37815,Jd=37816,$d=37817,eh=37818,th=37819,nh=37820,ih=37821,ah=36492,sh=36494,rh=36495,oh=36283,lh=36284,ch=36285,uh=36286,P1=3200,F1=3201,B1=0,I1=1,ja="",hi="srgb",Mr="srgb-linear",wc="linear",jt="srgb",ar=7680,gx=519,H1=512,V1=513,G1=514,Sg=515,k1=516,j1=517,X1=518,W1=519,vx=35044,_x="300 es",Ui=2e3,Cc=2001;function Mg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Y1(){const o=Rc("canvas");return o.style.display="block",o}const bx={};function yx(...o){const t="THREE."+o.shift();console.log(t,...o)}function dt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function an(...o){const t="THREE."+o.shift();console.error(t,...o)}function Oo(...o){const t=o.join(" ");t in bx||(bx[t]=!0,dt(...o))}function q1(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Ar{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,fh=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function wt(o,t,i){return Math.max(t,Math.min(i,o))}function Z1(o,t){return(o%t+t)%t}function Kf(o,t,i){return(1-i)*o+i*t}function Mo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,i=0){Xt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=wt(this.x,t.x,i.x),this.y=wt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=wt(this.x,t,i),this.y=wt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(wt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Po{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],b=u[d+0],S=u[d+1],E=u[d+2],A=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h>=1){t[i+0]=b,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(x!==A||m!==b||p!==S||_!==E){let y=m*b+p*S+_*E+x*A;y<0&&(b=-b,S=-S,E=-E,A=-A,y=-y);let g=1-h;if(y<.9995){const P=Math.acos(y),U=Math.sin(P);g=Math.sin(g*P)/U,h=Math.sin(h*P)/U,m=m*g+b*h,p=p*g+S*h,_=_*g+E*h,x=x*g+A*h}else{m=m*g+b*h,p=p*g+S*h,_=_*g+E*h,x=x*g+A*h;const P=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=P,p*=P,_*=P,x*=P}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=u[d],b=u[d+1],S=u[d+2],E=u[d+3];return t[i]=h*E+_*x+m*S-p*b,t[i+1]=m*E+_*b+p*x-h*S,t[i+2]=p*E+_*S+h*b-m*x,t[i+3]=_*E-h*x-m*b-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),x=h(u/2),b=m(s/2),S=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=b*_*x+p*S*E,this._y=p*S*x-b*_*E,this._z=p*_*E+b*S*x,this._w=p*_*x-b*S*E;break;case"YXZ":this._x=b*_*x+p*S*E,this._y=p*S*x-b*_*E,this._z=p*_*E-b*S*x,this._w=p*_*x+b*S*E;break;case"ZXY":this._x=b*_*x-p*S*E,this._y=p*S*x+b*_*E,this._z=p*_*E+b*S*x,this._w=p*_*x-b*S*E;break;case"ZYX":this._x=b*_*x-p*S*E,this._y=p*S*x+b*_*E,this._z=p*_*E-b*S*x,this._w=p*_*x+b*S*E;break;case"YZX":this._x=b*_*x+p*S*E,this._y=p*S*x+b*_*E,this._z=p*_*E-b*S*x,this._w=p*_*x-b*S*E;break;case"XZY":this._x=b*_*x-p*S*E,this._y=p*S*x-b*_*E,this._z=p*_*E+b*S*x,this._w=p*_*x+b*S*E;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],b=s+h+x;if(b>0){const S=.5/Math.sqrt(b+1);this._w=.25/S,this._x=(_-m)*S,this._y=(u-p)*S,this._z=(d-l)*S}else if(s>h&&s>x){const S=2*Math.sqrt(1+s-h-x);this._w=(_-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(u+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-s-x);this._w=(u-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+x-s-h);this._w=(d-l)/S,this._x=(u+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ve{constructor(t=0,i=0,s=0){ve.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Sx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Sx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+m*p+d*x-h*_,this.y=s+m*_+h*p-u*x,this.z=l+m*x+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=wt(this.x,t.x,i.x),this.y=wt(this.y,t.y,i.y),this.z=wt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=wt(this.x,t,i),this.y=wt(this.y,t,i),this.z=wt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(wt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new ve,Sx=new Po;class xt{constructor(t,i,s,l,u,d,h,m,p){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],x=s[7],b=s[2],S=s[5],E=s[8],A=l[0],y=l[3],g=l[6],P=l[1],U=l[4],I=l[7],W=l[2],z=l[5],O=l[8];return u[0]=d*A+h*P+m*W,u[3]=d*y+h*U+m*z,u[6]=d*g+h*I+m*O,u[1]=p*A+_*P+x*W,u[4]=p*y+_*U+x*z,u[7]=p*g+_*I+x*O,u[2]=b*A+S*P+E*W,u[5]=b*y+S*U+E*z,u[8]=b*g+S*I+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,b=h*m-_*u,S=p*u-d*m,E=i*x+s*b+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(l*p-_*s)*A,t[2]=(h*s-l*d)*A,t[3]=b*A,t[4]=(_*i-l*m)*A,t[5]=(l*u-h*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(d*i-s*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new xt,Mx=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K1(){const o={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===jt&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=_r(l.r),l.g=_r(l.g),l.b=_r(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Mr]:{primaries:t,whitePoint:s,transfer:wc,toXYZ:Mx,fromXYZ:Ex,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:jt,toXYZ:Mx,fromXYZ:Ex,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ot=K1();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _r(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class Q1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{sr===void 0&&(sr=Rc("canvas")),sr.width=t.width,sr.height=t.height;const l=sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Rc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ua(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J1=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push($f(l[d].image)):u.push($f(l[d]))}else u=$f(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Q1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let $1=0;const ed=new ve;class zn extends Ar{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=oa,l=oa,u=pi,d=Ss,h=Mi,m=fa,p=zn.DEFAULT_ANISOTROPY,_=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=zo(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zd:t.x=t.x-Math.floor(t.x);break;case oa:t.x=t.x<0?0:1;break;case Pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zd:t.y=t.y-Math.floor(t.y);break;case oa:t.y=t.y<0?0:1;break;case Pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=pg;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],x=m[8],b=m[1],S=m[5],E=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(_-b)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+b)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,I=(S+1)/2,W=(g+1)/2,z=(_+b)/4,O=(x+A)/4,ne=(E+y)/4;return U>I&&U>W?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=z/s,u=O/s):I>W?I<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(I),s=z/l,u=ne/l):W<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(W),s=O/u,l=ne/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(b-_)*(b-_));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(x-A)/P,this.z=(b-_)/P,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=wt(this.x,t.x,i.x),this.y=wt(this.y,t.y,i.y),this.z=wt(this.z,t.z,i.z),this.w=wt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=wt(this.x,t,i),this.y=wt(this.y,t,i),this.z=wt(this.z,t,i),this.w=wt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eb extends Ar{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new zn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Mh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends eb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Eg extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tb extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(t=new ve(1/0,1/0,1/0),i=new ve(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,_i):_i.fromBufferAttribute(u,d),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jl.copy(s.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),$l.subVectors(this.max,Eo),rr.subVectors(t.a,Eo),or.subVectors(t.b,Eo),lr.subVectors(t.c,Eo),Ba.subVectors(or,rr),Ia.subVectors(lr,or),hs.subVectors(rr,lr);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-hs.z,hs.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,hs.z,0,-hs.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-hs.y,hs.x,0];return!td(i,rr,or,lr,$l)||(i=[1,0,0,0,1,0,0,0,1],!td(i,rr,or,lr,$l))?!1:(ec.crossVectors(Ba,Ia),i=[ec.x,ec.y,ec.z],td(i,rr,or,lr,$l))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new ve,new ve,new ve,new ve,new ve,new ve,new ve,new ve],_i=new ve,Jl=new Fo,rr=new ve,or=new ve,lr=new ve,Ba=new ve,Ia=new ve,hs=new ve,Eo=new ve,$l=new ve,ec=new ve,ps=new ve;function td(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ps.fromArray(o,u);const h=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),_=s.dot(ps);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const nb=new Fo,To=new ve,nd=new ve;class Nc{constructor(t=new ve,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):nb.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(To,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(nd)),this.expandByPoint(To.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new ve,id=new ve,tc=new ve,Ha=new ve,ad=new ve,nc=new ve,sd=new ve;class Tg{constructor(t=new ve,i=new ve(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){id.copy(t).add(i).multiplyScalar(.5),tc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(id);const u=t.distanceTo(i)*.5,d=-this.direction.dot(tc),h=Ha.dot(this.direction),m=-Ha.dot(tc),p=Ha.lengthSq(),_=Math.abs(1-d*d);let x,b,S,E;if(_>0)if(x=d*m-h,b=d*h-m,E=u*_,x>=0)if(b>=-E)if(b<=E){const A=1/_;x*=A,b*=A,S=x*(x+d*b+2*h)+b*(d*x+b+2*m)+p}else b=u,x=Math.max(0,-(d*b+h)),S=-x*x+b*(b+2*m)+p;else b=-u,x=Math.max(0,-(d*b+h)),S=-x*x+b*(b+2*m)+p;else b<=-E?(x=Math.max(0,-(-d*u+h)),b=x>0?-u:Math.min(Math.max(-u,-m),u),S=-x*x+b*(b+2*m)+p):b<=E?(x=0,b=Math.min(Math.max(-u,-m),u),S=b*(b+2*m)+p):(x=Math.max(0,-(d*u+h)),b=x>0?u:Math.min(Math.max(-u,-m),u),S=-x*x+b*(b+2*m)+p);else b=d>0?-u:u,x=Math.max(0,-(d*b+h)),S=-x*x+b*(b+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(id).addScaledVector(tc,b),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,b=this.origin;return p>=0?(s=(t.min.x-b.x)*p,l=(t.max.x-b.x)*p):(s=(t.max.x-b.x)*p,l=(t.min.x-b.x)*p),_>=0?(u=(t.min.y-b.y)*_,d=(t.max.y-b.y)*_):(u=(t.max.y-b.y)*_,d=(t.min.y-b.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-b.z)*x,m=(t.max.z-b.z)*x):(h=(t.max.z-b.z)*x,m=(t.min.z-b.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,l,u){ad.subVectors(i,t),nc.subVectors(s,t),sd.crossVectors(ad,nc);let d=this.direction.dot(sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(nc.crossVectors(Ha,nc));if(m<0)return null;const p=h*this.direction.dot(ad.cross(Ha));if(p<0||m+p>d)return null;const _=-h*Ha.dot(sd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,i,s,l,u,d,h,m,p,_,x,b,S,E,A,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,_,x,b,S,E,A,y)}set(t,i,s,l,u,d,h,m,p,_,x,b,S,E,A,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=b,g[3]=S,g[7]=E,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/cr.setFromMatrixColumn(t,0).length(),u=1/cr.setFromMatrixColumn(t,1).length(),d=1/cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const b=d*_,S=d*x,E=h*_,A=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=b-A*p,i[9]=-h*m,i[2]=A-b*p,i[6]=E+S*p,i[10]=d*m}else if(t.order==="YXZ"){const b=m*_,S=m*x,E=p*_,A=p*x;i[0]=b+A*h,i[4]=E*h-S,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=S*h-E,i[6]=A+b*h,i[10]=d*m}else if(t.order==="ZXY"){const b=m*_,S=m*x,E=p*_,A=p*x;i[0]=b-A*h,i[4]=-d*x,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*_,i[9]=A-b*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const b=d*_,S=d*x,E=h*_,A=h*x;i[0]=m*_,i[4]=E*p-S,i[8]=b*p+A,i[1]=m*x,i[5]=A*p+b,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const b=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*_,i[4]=A-b*x,i[8]=E*x+S,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*x+E,i[10]=b-A*x}else if(t.order==="XZY"){const b=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=b*x+A,i[5]=d*_,i[9]=S*x-E,i[2]=E*x-S,i[6]=h*_,i[10]=A*x+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ib,t,ab)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Va.crossVectors(s,ei),Va.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Va.crossVectors(s,ei)),Va.normalize(),ic.crossVectors(ei,Va),l[0]=Va.x,l[4]=ic.x,l[8]=ei.x,l[1]=Va.y,l[5]=ic.y,l[9]=ei.y,l[2]=Va.z,l[6]=ic.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],x=s[5],b=s[9],S=s[13],E=s[2],A=s[6],y=s[10],g=s[14],P=s[3],U=s[7],I=s[11],W=s[15],z=l[0],O=l[4],ne=l[8],D=l[12],R=l[1],k=l[5],te=l[9],ce=l[13],ge=l[2],me=l[6],F=l[10],j=l[14],G=l[3],le=l[7],xe=l[11],L=l[15];return u[0]=d*z+h*R+m*ge+p*G,u[4]=d*O+h*k+m*me+p*le,u[8]=d*ne+h*te+m*F+p*xe,u[12]=d*D+h*ce+m*j+p*L,u[1]=_*z+x*R+b*ge+S*G,u[5]=_*O+x*k+b*me+S*le,u[9]=_*ne+x*te+b*F+S*xe,u[13]=_*D+x*ce+b*j+S*L,u[2]=E*z+A*R+y*ge+g*G,u[6]=E*O+A*k+y*me+g*le,u[10]=E*ne+A*te+y*F+g*xe,u[14]=E*D+A*ce+y*j+g*L,u[3]=P*z+U*R+I*ge+W*G,u[7]=P*O+U*k+I*me+W*le,u[11]=P*ne+U*te+I*F+W*xe,u[15]=P*D+U*ce+I*j+W*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],b=t[10],S=t[14],E=t[3],A=t[7],y=t[11],g=t[15];return E*(+u*m*x-l*p*x-u*h*b+s*p*b+l*h*S-s*m*S)+A*(+i*m*S-i*p*b+u*d*b-l*d*S+l*p*_-u*m*_)+y*(+i*p*x-i*h*S-u*d*x+s*d*S+u*h*_-s*p*_)+g*(-l*h*_-i*m*x+i*h*b+l*d*x-s*d*b+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],b=t[10],S=t[11],E=t[12],A=t[13],y=t[14],g=t[15],P=x*y*p-A*b*p+A*m*S-h*y*S-x*m*g+h*b*g,U=E*b*p-_*y*p-E*m*S+d*y*S+_*m*g-d*b*g,I=_*A*p-E*x*p+E*h*S-d*A*S-_*h*g+d*x*g,W=E*x*m-_*A*m-E*h*b+d*A*b+_*h*y-d*x*y,z=i*P+s*U+l*I+u*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=P*O,t[1]=(A*b*u-x*y*u-A*l*S+s*y*S+x*l*g-s*b*g)*O,t[2]=(h*y*u-A*m*u+A*l*p-s*y*p-h*l*g+s*m*g)*O,t[3]=(x*m*u-h*b*u-x*l*p+s*b*p+h*l*S-s*m*S)*O,t[4]=U*O,t[5]=(_*y*u-E*b*u+E*l*S-i*y*S-_*l*g+i*b*g)*O,t[6]=(E*m*u-d*y*u-E*l*p+i*y*p+d*l*g-i*m*g)*O,t[7]=(d*b*u-_*m*u+_*l*p-i*b*p-d*l*S+i*m*S)*O,t[8]=I*O,t[9]=(E*x*u-_*A*u-E*s*S+i*A*S+_*s*g-i*x*g)*O,t[10]=(d*A*u-E*h*u+E*s*p-i*A*p-d*s*g+i*h*g)*O,t[11]=(_*h*u-d*x*u-_*s*p+i*x*p+d*s*S-i*h*S)*O,t[12]=W*O,t[13]=(_*A*l-E*x*l+E*s*b-i*A*b-_*s*y+i*x*y)*O,t[14]=(E*h*l-d*A*l-E*s*m+i*A*m+d*s*y-i*h*y)*O,t[15]=(d*x*l-_*h*l+_*s*m-i*x*m-d*s*b+i*h*b)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,x=h+h,b=u*p,S=u*_,E=u*x,A=d*_,y=d*x,g=h*x,P=m*p,U=m*_,I=m*x,W=s.x,z=s.y,O=s.z;return l[0]=(1-(A+g))*W,l[1]=(S+I)*W,l[2]=(E-U)*W,l[3]=0,l[4]=(S-I)*z,l[5]=(1-(b+g))*z,l[6]=(y+P)*z,l[7]=0,l[8]=(E+U)*O,l[9]=(y-P)*O,l[10]=(1-(b+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const d=cr.set(l[4],l[5],l[6]).length(),h=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/u,_=1/d,x=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,i.setFromRotationMatrix(bi),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Ui,m=!1){const p=this.elements,_=2*u/(i-t),x=2*u/(s-l),b=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(m)E=u/(d-u),A=d*u/(d-u);else if(h===Ui)E=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Cc)E=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Ui,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),b=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(m)E=1/(d-u),A=d/(d-u);else if(h===Ui)E=-2/(d-u),A=-(d+u)/(d-u);else if(h===Cc)E=-1/(d-u),A=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=b,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const cr=new ve,bi=new dn,ib=new ve(0,0,0),ab=new ve(1,1,1),Va=new ve,ic=new ve,ei=new ve,Tx=new dn,Ax=new Po;class da{constructor(t=0,i=0,s=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],b=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(b,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(wt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-wt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(b,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(b,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Tx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Ag{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sb=0;const wx=new ve,ur=new Po,ta=new dn,ac=new ve,Ao=new ve,rb=new ve,ob=new Po,Cx=new ve(1,0,0),Rx=new ve(0,1,0),Dx=new ve(0,0,1),Nx={type:"added"},lb={type:"removed"},fr={type:"childadded",child:null},rd={type:"childremoved",child:null};class jn extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const t=new ve,i=new da,s=new Po,l=new ve(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new xt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(Cx,t)}rotateY(t){return this.rotateOnAxis(Rx,t)}rotateZ(t){return this.rotateOnAxis(Dx,t)}translateOnAxis(t,i){return wx.copy(t).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Cx,t)}translateY(t){return this.translateOnAxis(Rx,t)}translateZ(t){return this.translateOnAxis(Dx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ac.copy(t):ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Ao,ac,this.up):ta.lookAt(ac,Ao,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(ta),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(an("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nx),fr.child=t,this.dispatchEvent(fr),fr.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lb),rd.child=t,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nx),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,rb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,ob,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),b=d(t.skeletons),S=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),b.length>0&&(s.skeletons=b),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new ve(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ve,na=new ve,od=new ve,ia=new ve,dr=new ve,hr=new ve,Ux=new ve,ld=new ve,cd=new ve,ud=new ve,fd=new sn,dd=new sn,hd=new sn;class Si{constructor(t=new ve,i=new ve,s=new ve){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),yi.subVectors(t,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){yi.subVectors(l,i),na.subVectors(s,i),od.subVectors(t,i);const d=yi.dot(yi),h=yi.dot(na),m=yi.dot(od),p=na.dot(na),_=na.dot(od),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const b=1/x,S=(p*m-h*_)*b,E=(d*_-h*m)*b;return u.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,s),hd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(fd,u.x),d.addScaledVector(dd,u.y),d.addScaledVector(hd,u.z),d}static isFrontFacing(t,i,s,l){return yi.subVectors(s,i),na.subVectors(t,i),yi.cross(na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;dr.subVectors(l,s),hr.subVectors(u,s),ld.subVectors(t,s);const m=dr.dot(ld),p=hr.dot(ld);if(m<=0&&p<=0)return i.copy(s);cd.subVectors(t,l);const _=dr.dot(cd),x=hr.dot(cd);if(_>=0&&x<=_)return i.copy(l);const b=m*x-_*p;if(b<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(dr,d);ud.subVectors(t,u);const S=dr.dot(ud),E=hr.dot(ud);if(E>=0&&S<=E)return i.copy(u);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(hr,h);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return Ux.subVectors(u,l),h=(x-_)/(x-_+(S-E)),i.copy(l).addScaledVector(Ux,h);const g=1/(y+A+b);return d=A*g,h=b*g,i.copy(s).addScaledVector(dr,d).addScaledVector(hr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},sc={h:0,s:0,l:0};function pd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class It{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ot.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ot.workingColorSpace){if(t=Z1(t,1),i=wt(i,0,1),s=wt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=pd(d,u,t+1/3),this.g=pd(d,u,t),this.b=pd(d,u,t-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=wg[t.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ot.workingToColorSpace(Nn.copy(this),t),Math.round(wt(Nn.r*255,0,255))*65536+Math.round(wt(Nn.g*255,0,255))*256+Math.round(wt(Nn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ot.workingColorSpace){Ot.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=hi){Ot.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(sc);const s=Kf(Ga.h,sc.h,i),l=Kf(Ga.s,sc.s,i),u=Kf(Ga.l,sc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new It;It.NAMES=wg;let cb=0;class Bo extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=vr,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==Td&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cg extends Bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ve,rc=new Xt;let ub=0;class Un{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ub++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=vx,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(t),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Mo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Mo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Mo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Mo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Mo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vx&&(t.usage=this.usage),t}}class Rg extends Un{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Dg extends Un{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ms extends Un{constructor(t,i,s){super(new Float32Array(t),i,s)}}let fb=0;const di=new dn,md=new jn,pr=new ve,ti=new Fo,wo=new Fo,Sn=new ve;class Ti extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mg(t)?Dg:Rg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new xt().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return md.lookAt(t),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ms(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ve(-1/0,-1/0,-1/0),new ve(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ve,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ti.min,wo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,wo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(wo.min),ti.expandByPoint(wo.max))}ti.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Sn.fromBufferAttribute(h,p),m&&(pr.fromBufferAttribute(t,p),Sn.add(pr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<s.count;ne++)h[ne]=new ve,m[ne]=new ve;const p=new ve,_=new ve,x=new ve,b=new Xt,S=new Xt,E=new Xt,A=new ve,y=new ve;function g(ne,D,R){p.fromBufferAttribute(s,ne),_.fromBufferAttribute(s,D),x.fromBufferAttribute(s,R),b.fromBufferAttribute(u,ne),S.fromBufferAttribute(u,D),E.fromBufferAttribute(u,R),_.sub(p),x.sub(p),S.sub(b),E.sub(b);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(k),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(k),h[ne].add(A),h[D].add(A),h[R].add(A),m[ne].add(y),m[D].add(y),m[R].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let ne=0,D=P.length;ne<D;++ne){const R=P[ne],k=R.start,te=R.count;for(let ce=k,ge=k+te;ce<ge;ce+=3)g(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const U=new ve,I=new ve,W=new ve,z=new ve;function O(ne){W.fromBufferAttribute(l,ne),z.copy(W);const D=h[ne];U.copy(D),U.sub(W.multiplyScalar(W.dot(D))).normalize(),I.crossVectors(z,D);const k=I.dot(m[ne])<0?-1:1;d.setXYZW(ne,U.x,U.y,U.z,k)}for(let ne=0,D=P.length;ne<D;++ne){const R=P[ne],k=R.start,te=R.count;for(let ce=k,ge=k+te;ce<ge;ce+=3)O(t.getX(ce+0)),O(t.getX(ce+1)),O(t.getX(ce+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Un(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let b=0,S=s.count;b<S;b++)s.setXYZ(b,0,0,0);const l=new ve,u=new ve,d=new ve,h=new ve,m=new ve,p=new ve,_=new ve,x=new ve;if(t)for(let b=0,S=t.count;b<S;b+=3){const E=t.getX(b+0),A=t.getX(b+1),y=t.getX(b+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let b=0,S=i.count;b<S;b+=3)l.fromBufferAttribute(i,b+0),u.fromBufferAttribute(i,b+1),d.fromBufferAttribute(i,b+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),s.setXYZ(b+0,_.x,_.y,_.z),s.setXYZ(b+1,_.x,_.y,_.z),s.setXYZ(b+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,b=new p.constructor(m.length*_);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*_;for(let g=0;g<_;g++)b[E++]=p[S++]}return new Un(b,_,x)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,x=p.length;_<x;_++){const b=p[_],S=t(b,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,b=p.length;x<b;x++){const S=p[x];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],x=u[p];for(let b=0,S=x.length;b<S;b++)_.push(x[b].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lx=new dn,ms=new Tg,oc=new Nc,Ox=new ve,lc=new ve,cc=new ve,uc=new ve,xd=new ve,fc=new ve,zx=new ve,dc=new ve;class qa extends jn{constructor(t=new Ti,i=new Cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){fc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],x=u[m];_!==0&&(xd.fromBufferAttribute(x,t),d?fc.addScaledVector(xd,_):fc.addScaledVector(xd.sub(i),_))}i.add(fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(u),ms.copy(t.ray).recast(t.near),!(oc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(oc,Ox)===null||ms.origin.distanceToSquared(Ox)>(t.far-t.near)**2))&&(Lx.copy(u).invert(),ms.copy(t.ray).applyMatrix4(Lx),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,b=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=b.length;E<A;E++){const y=b[E],g=d[y.materialIndex],P=Math.max(y.start,S.start),U=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let I=P,W=U;I<W;I+=3){const z=h.getX(I),O=h.getX(I+1),ne=h.getX(I+2);l=hc(this,g,t,s,p,_,x,z,O,ne),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const P=h.getX(y),U=h.getX(y+1),I=h.getX(y+2);l=hc(this,d,t,s,p,_,x,P,U,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=b.length;E<A;E++){const y=b[E],g=d[y.materialIndex],P=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let I=P,W=U;I<W;I+=3){const z=I,O=I+1,ne=I+2;l=hc(this,g,t,s,p,_,x,z,O,ne),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const P=y,U=y+1,I=y+2;l=hc(this,d,t,s,p,_,x,P,U,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function db(o,t,i,s,l,u,d,h){let m;if(t.side===kn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===Ya,h),m===null)return null;dc.copy(h),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function hc(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const _=db(o,t,i,s,lc,cc,uc,zx);if(_){const x=new ve;Si.getBarycoord(zx,lc,cc,uc,x),l&&(_.uv=Si.getInterpolatedAttribute(l,h,m,p,x,new Xt)),u&&(_.uv1=Si.getInterpolatedAttribute(u,h,m,p,x,new Xt)),d&&(_.normal=Si.getInterpolatedAttribute(d,h,m,p,x,new ve),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const b={a:h,b:m,c:p,normal:new ve,materialIndex:0};Si.getNormal(lc,cc,uc,b.normal),_.face=b,_.barycoord=x}return _}class Io extends Ti{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],x=[];let b=0,S=0;E("z","y","x",-1,-1,s,i,t,d,u,0),E("z","y","x",1,-1,s,i,-t,d,u,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ms(p,3)),this.setAttribute("normal",new Ms(_,3)),this.setAttribute("uv",new Ms(x,2));function E(A,y,g,P,U,I,W,z,O,ne,D){const R=I/O,k=W/ne,te=I/2,ce=W/2,ge=z/2,me=O+1,F=ne+1;let j=0,G=0;const le=new ve;for(let xe=0;xe<F;xe++){const L=xe*k-ce;for(let q=0;q<me;q++){const pe=q*R-te;le[A]=pe*P,le[y]=L*U,le[g]=ge,p.push(le.x,le.y,le.z),le[A]=0,le[y]=0,le[g]=z>0?1:-1,_.push(le.x,le.y,le.z),x.push(q/O),x.push(1-xe/ne),j+=1}}for(let xe=0;xe<ne;xe++)for(let L=0;L<O;L++){const q=b+L+me*xe,pe=b+L+me*(xe+1),ye=b+(L+1)+me*(xe+1),Re=b+(L+1)+me*xe;m.push(q,pe,Re),m.push(pe,ye,Re),G+=6}h.addGroup(S,G,D),S+=G,b+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const s=Er(o[i]);for(const l in s)t[l]=s[l]}return t}function hb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ng(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}const pb={clone:Er,merge:On};var mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mb,this.fragmentShader=xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=hb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Ug extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ve,Px=new Xt,Fx=new Xt;class ni extends Ug{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,Px,Fx),i.subVectors(Fx,Px)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const mr=-90,xr=1;class gb extends jn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(mr,xr,t,i);l.layers=this.layers,this.add(l);const u=new ni(mr,xr,t,i);u.layers=this.layers,this.add(u);const d=new ni(mr,xr,t,i);d.layers=this.layers,this.add(d);const h=new ni(mr,xr,t,i);h.layers=this.layers,this.add(h);const m=new ni(mr,xr,t,i);m.layers=this.layers,this.add(m);const p=new ni(mr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ui)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,x=t.getRenderTarget(),b=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,b,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Lg extends zn{constructor(t=[],i=yr,s,l,u,d,h,m,p,_){super(t,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vb extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Lg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Io(5,5,5),u=new Ei({name:"CubemapFromEquirect",uniforms:Er(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:ca});u.uniforms.tEquirect.value=i;const d=new qa(l,u),h=i.minFilter;return i.minFilter===Ss&&(i.minFilter=pi),new gb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class pc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _b={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ve,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ve),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ve,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ve),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,s),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],b=_.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&b>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&b<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_b)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new pc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Og extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class bb extends zn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=ii,_=ii,x,b){super(null,d,h,m,p,_,l,u,x,b),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new ve,yb=new ve,Sb=new xt;class _s{constructor(t=new ve(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vd.subVectors(s,i).cross(yb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(vd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Sb.getNormalMatrix(t),l=this.coplanarPoint(vd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Nc,Mb=new Xt(.5,.5),mc=new ve;class zg{constructor(t=new _s,i=new _s,s=new _s,l=new _s,u=new _s,d=new _s){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ui,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],x=u[5],b=u[6],S=u[7],E=u[8],A=u[9],y=u[10],g=u[11],P=u[12],U=u[13],I=u[14],W=u[15];if(l[0].setComponents(p-d,S-_,g-E,W-P).normalize(),l[1].setComponents(p+d,S+_,g+E,W+P).normalize(),l[2].setComponents(p+h,S+x,g+A,W+U).normalize(),l[3].setComponents(p-h,S-x,g-A,W-U).normalize(),s)l[4].setComponents(m,b,y,I).normalize(),l[5].setComponents(p-m,S-b,g-y,W-I).normalize();else if(l[4].setComponents(p-m,S-b,g-y,W-I).normalize(),i===Ui)l[5].setComponents(p+m,S+b,g+y,W+I).normalize();else if(i===Cc)l[5].setComponents(m,b,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);const i=Mb.distanceTo(t.center);return xs.radius=.7071067811865476+i,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eb extends Bo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bx=new dn,dh=new Tg,xc=new Nc,gc=new ve;class Pg extends jn{constructor(t=new Ti,i=new Eb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=u,t.ray.intersectsSphere(xc)===!1)return;Bx.copy(l).invert(),dh.copy(t.ray).applyMatrix4(Bx);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,x=s.attributes.position;if(p!==null){const b=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let E=b,A=S;E<A;E++){const y=p.getX(E);gc.fromBufferAttribute(x,y),Ix(gc,y,m,l,t,i,this)}}else{const b=Math.max(0,d.start),S=Math.min(x.count,d.start+d.count);for(let E=b,A=S;E<A;E++)gc.fromBufferAttribute(x,E),Ix(gc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Ix(o,t,i,s,l,u,d){const h=dh.distanceSqToPoint(o);if(h<i){const m=new ve;dh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Fg extends zn{constructor(t,i,s=Es,l,u,d,h=ii,m=ii,p,_=Uo,x=1){if(_!==Uo&&_!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const b={width:t,height:i,depth:x};super(b,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Bg extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Uc extends Ti{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,x=t/h,b=i/m,S=[],E=[],A=[],y=[];for(let g=0;g<_;g++){const P=g*b-d;for(let U=0;U<p;U++){const I=U*x-u;E.push(I,-P,0),A.push(0,0,1),y.push(U/h),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<h;P++){const U=P+p*g,I=P+p*(g+1),W=P+1+p*(g+1),z=P+1+p*g;S.push(U,I,z),S.push(I,W,z)}this.setIndex(S),this.setAttribute("position",new Ms(E,3)),this.setAttribute("normal",new Ms(A,3)),this.setAttribute("uv",new Ms(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tb extends Bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ab extends Bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wb extends Ug{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Cb extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Hx(o,t,i,s){const l=Rb(s);switch(i){case _g:return o*t;case yg:return o*t/l.components*l.byteLength;case _h:return o*t/l.components*l.byteLength;case bh:return o*t*2/l.components*l.byteLength;case yh:return o*t*2/l.components*l.byteLength;case bg:return o*t*3/l.components*l.byteLength;case Mi:return o*t*4/l.components*l.byteLength;case Sh:return o*t*4/l.components*l.byteLength;case yc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bd:case Hd:return Math.max(o,16)*Math.max(t,8)/4;case Fd:case Id:return Math.max(o,8)*Math.max(t,8)/2;case Vd:case Gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case eh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case ah:case sh:case rh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case oh:case lh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ch:case uh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Rb(o){switch(o){case fa:case mg:return{byteLength:1,components:1};case Do:case xg:case Tr:return{byteLength:2,components:1};case gh:case vh:return{byteLength:2,components:4};case Es:case xh:case la:return{byteLength:4,components:1};case gg:case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function Ig(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Db(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,b=o.createBuffer();o.bindBuffer(m,b),o.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((S,E)=>S.start-E.start);let b=0;for(let S=1;S<x.length;S++){const E=x[b],A=x[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++b,x[b]=A)}x.length=b+1;for(let S=0,E=x.length;S<E;S++){const A=x[S];o.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ny=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,My=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ry=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,By=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$y=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ES=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Nb,alphahash_pars_fragment:Ub,alphamap_fragment:Lb,alphamap_pars_fragment:Ob,alphatest_fragment:zb,alphatest_pars_fragment:Pb,aomap_fragment:Fb,aomap_pars_fragment:Bb,batching_pars_vertex:Ib,batching_vertex:Hb,begin_vertex:Vb,beginnormal_vertex:Gb,bsdfs:kb,iridescence_fragment:jb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:Yb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Zb,color_fragment:Kb,color_pars_fragment:Qb,color_pars_vertex:Jb,color_vertex:$b,common:ey,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:ay,emissivemap_fragment:sy,emissivemap_pars_fragment:ry,colorspace_fragment:oy,colorspace_pars_fragment:ly,envmap_fragment:cy,envmap_common_pars_fragment:uy,envmap_pars_fragment:fy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:My,envmap_vertex:hy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:xy,fog_pars_fragment:gy,gradientmap_pars_fragment:vy,lightmap_pars_fragment:_y,lights_lambert_fragment:by,lights_lambert_pars_fragment:yy,lights_pars_begin:Sy,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:Ay,lights_phong_pars_fragment:wy,lights_physical_fragment:Cy,lights_physical_pars_fragment:Ry,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Uy,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Oy,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Py,map_fragment:Fy,map_pars_fragment:By,map_particle_fragment:Iy,map_particle_pars_fragment:Hy,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:ky,morphcolor_vertex:jy,morphnormal_vertex:Xy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Yy,normal_fragment_begin:qy,normal_fragment_maps:Zy,normal_pars_fragment:Ky,normal_pars_vertex:Qy,normal_vertex:Jy,normalmap_pars_fragment:$y,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:aS,packing:sS,premultiplied_alpha_fragment:rS,project_vertex:oS,dithering_fragment:lS,dithering_pars_fragment:cS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:fS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:xS,skinning_pars_vertex:gS,skinning_vertex:vS,skinnormal_vertex:_S,specularmap_fragment:bS,specularmap_pars_fragment:yS,tonemapping_fragment:SS,tonemapping_pars_fragment:MS,transmission_fragment:ES,transmission_pars_fragment:TS,uv_pars_fragment:AS,uv_pars_vertex:wS,uv_vertex:CS,worldpos_vertex:RS,background_vert:DS,background_frag:NS,backgroundCube_vert:US,backgroundCube_frag:LS,cube_vert:OS,cube_frag:zS,depth_vert:PS,depth_frag:FS,distanceRGBA_vert:BS,distanceRGBA_frag:IS,equirect_vert:HS,equirect_frag:VS,linedashed_vert:GS,linedashed_frag:kS,meshbasic_vert:jS,meshbasic_frag:XS,meshlambert_vert:WS,meshlambert_frag:YS,meshmatcap_vert:qS,meshmatcap_frag:ZS,meshnormal_vert:KS,meshnormal_frag:QS,meshphong_vert:JS,meshphong_frag:$S,meshphysical_vert:e3,meshphysical_frag:t3,meshtoon_vert:n3,meshtoon_frag:i3,points_vert:a3,points_frag:s3,shadow_vert:r3,shadow_frag:o3,sprite_vert:l3,sprite_frag:c3},Ve={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ni={basic:{uniforms:On([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:On([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:On([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:On([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:On([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:On([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:On([Ve.points,Ve.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:On([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:On([Ve.common,Ve.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:On([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:On([Ve.sprite,Ve.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:On([Ve.common,Ve.displacementmap,{referencePosition:{value:new ve},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:On([Ve.lights,Ve.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ni.physical={uniforms:On([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const vc={r:0,b:0,g:0},gs=new da,u3=new dn;function f3(o,t,i,s,l,u,d){const h=new It(0);let m=u===!0?0:1,p,_,x=null,b=0,S=null;function E(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?i:t).get(I)),I}function A(U){let I=!1;const W=E(U);W===null?g(h,m):W&&W.isColor&&(g(W,1),I=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||I)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,I){const W=E(I);W&&(W.isCubeTexture||W.mapping===Dc)?(_===void 0&&(_=new qa(new Io(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Er(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),gs.copy(I.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.material.uniforms.envMap.value=W,_.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(u3.makeRotationFromEuler(gs)),_.material.toneMapped=Ot.getTransfer(W.colorSpace)!==jt,(x!==W||b!==W.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,x=W,b=W.version,S=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new qa(new Uc(2,2),new Ei({name:"BackgroundMaterial",uniforms:Er(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(W.colorSpace)!==jt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(x!==W||b!==W.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,x=W,b=W.version,S=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,I){U.getRGB(vc,Ng(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,I,d)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,I=1){h.set(U),m=I,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(h,m)},render:A,addToRenderList:y,dispose:P}}function d3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=b(null);let u=l,d=!1;function h(R,k,te,ce,ge){let me=!1;const F=x(ce,te,k);u!==F&&(u=F,p(u.object)),me=S(R,ce,te,ge),me&&E(R,ce,te,ge),ge!==null&&t.update(ge,o.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,I(R,k,te,ce),ge!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ge).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,k,te){const ce=te.wireframe===!0;let ge=s[R.id];ge===void 0&&(ge={},s[R.id]=ge);let me=ge[k.id];me===void 0&&(me={},ge[k.id]=me);let F=me[ce];return F===void 0&&(F=b(m()),me[ce]=F),F}function b(R){const k=[],te=[],ce=[];for(let ge=0;ge<i;ge++)k[ge]=0,te[ge]=0,ce[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:ce,object:R,attributes:{},index:null}}function S(R,k,te,ce){const ge=u.attributes,me=k.attributes;let F=0;const j=te.getAttributes();for(const G in j)if(j[G].location>=0){const xe=ge[G];let L=me[G];if(L===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),xe===void 0||xe.attribute!==L||L&&xe.data!==L.data)return!0;F++}return u.attributesNum!==F||u.index!==ce}function E(R,k,te,ce){const ge={},me=k.attributes;let F=0;const j=te.getAttributes();for(const G in j)if(j[G].location>=0){let xe=me[G];xe===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor));const L={};L.attribute=xe,xe&&xe.data&&(L.data=xe.data),ge[G]=L,F++}u.attributes=ge,u.attributesNum=F,u.index=ce}function A(){const R=u.newAttributes;for(let k=0,te=R.length;k<te;k++)R[k]=0}function y(R){g(R,0)}function g(R,k){const te=u.newAttributes,ce=u.enabledAttributes,ge=u.attributeDivisors;te[R]=1,ce[R]===0&&(o.enableVertexAttribArray(R),ce[R]=1),ge[R]!==k&&(o.vertexAttribDivisor(R,k),ge[R]=k)}function P(){const R=u.newAttributes,k=u.enabledAttributes;for(let te=0,ce=k.length;te<ce;te++)k[te]!==R[te]&&(o.disableVertexAttribArray(te),k[te]=0)}function U(R,k,te,ce,ge,me,F){F===!0?o.vertexAttribIPointer(R,k,te,ge,me):o.vertexAttribPointer(R,k,te,ce,ge,me)}function I(R,k,te,ce){A();const ge=ce.attributes,me=te.getAttributes(),F=k.defaultAttributeValues;for(const j in me){const G=me[j];if(G.location>=0){let le=ge[j];if(le===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const xe=le.normalized,L=le.itemSize,q=t.get(le);if(q===void 0)continue;const pe=q.buffer,ye=q.type,Re=q.bytesPerElement,Z=ye===o.INT||ye===o.UNSIGNED_INT||le.gpuType===xh;if(le.isInterleavedBufferAttribute){const ue=le.data,Ce=ue.stride,Ie=le.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)g(G.location+ke,ue.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<G.locationSize;ke++)y(G.location+ke);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let ke=0;ke<G.locationSize;ke++)U(G.location+ke,L/G.locationSize,ye,xe,Ce*Re,(Ie+L/G.locationSize*ke)*Re,Z)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)g(G.location+ue,le.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<G.locationSize;ue++)y(G.location+ue);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let ue=0;ue<G.locationSize;ue++)U(G.location+ue,L/G.locationSize,ye,xe,L*Re,L/G.locationSize*ue*Re,Z)}}else if(F!==void 0){const xe=F[j];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(G.location,xe);break;case 3:o.vertexAttrib3fv(G.location,xe);break;case 4:o.vertexAttrib4fv(G.location,xe);break;default:o.vertexAttrib1fv(G.location,xe)}}}}P()}function W(){ne();for(const R in s){const k=s[R];for(const te in k){const ce=k[te];for(const ge in ce)_(ce[ge].object),delete ce[ge];delete k[te]}delete s[R]}}function z(R){if(s[R.id]===void 0)return;const k=s[R.id];for(const te in k){const ce=k[te];for(const ge in ce)_(ce[ge].object),delete ce[ge];delete k[te]}delete s[R.id]}function O(R){for(const k in s){const te=s[k];if(te[R.id]===void 0)continue;const ce=te[R.id];for(const ge in ce)_(ce[ge].object),delete ce[ge];delete te[R.id]}}function ne(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:D,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function h3(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];i.update(S,s,1)}function m(p,_,x,b){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)d(p[E],_[E],b[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,b,0,x);let E=0;for(let A=0;A<x;A++)E+=_[A]*b[A];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function p3(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Mi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const ne=O===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==fa&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==la&&!ne)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(dt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,b=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:b,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:W,maxSamples:z}}function m3(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new _s,h=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,b){const S=x.length!==0||b||s!==0||l;return l=b,s=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,b){i=_(x,b,0)},this.setState=function(x,b,S){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,g=o.get(x);if(!l||E===null||E.length===0||u&&!y)u?_(null):p();else{const P=u?0:s,U=P*4;let I=g.clippingState||null;m.value=I,I=_(E,b,U,S);for(let W=0;W!==U;++W)I[W]=i[W];g.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,b,S,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const g=S+A*4,P=b.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,I=S;U!==A;++U,I+=4)d.copy(x[U]).applyMatrix4(P,h),d.normal.toArray(y,I),y[I+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function x3(o){let t=new WeakMap;function i(d,h){return h===Ld?d.mapping=yr:h===Od&&(d.mapping=Sr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ld||h===Od)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new vb(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Xa=4,Vx=[.125,.215,.35,.446,.526,.582],ys=20,g3=256,Co=new wb,Gx=new It;let _d=null,bd=0,yd=0,Sd=!1;const v3=new ve;class kx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=v3}=u;_d=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_d,bd,yd),this._renderer.xr.enabled=Sd,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===yr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_d=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Tr,format:Mi,colorSpace:Mr,depthBuffer:!1},l=jx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_3(u)),this._blurMaterial=y3(u,t,i),this._ggxMaterial=b3(u,t,i)}return l}_compileMaterial(t){const i=new qa(new Ti,t);this._renderer.compile(i,Co)}_sceneToCubeUV(t,i,s,l,u){const m=new ni(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,S=x.toneMapping;x.getClearColor(Gx),x.toneMapping=Wa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qa(new Io,new Cg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let g=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,g=!0):(y.color.copy(Gx),g=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):I===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const W=this._cubeSize;gr(l,I*W,U>2?W:0,W,W),x.setRenderTarget(l),g&&x.render(A,m),x.render(t,m)}x.toneMapping=S,x.autoClear=b,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===yr||t.mapping===Sr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;gr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Co)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),b=.05+p*.95,S=x*b,{_lodMax:E}=this,A=this._sizeLods[s],y=3*A*(s>E-Xa?s-E+Xa:0),g=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,gr(u,y,g,3*A,2*A),l.setRenderTarget(u),l.render(h,Co),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-s,gr(t,y,g,3*A,2*A),l.setRenderTarget(t),l.render(h,Co)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const b=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*ys-1),A=u/E,y=isFinite(u)?1+Math.floor(_*A):ys;y>ys&&dt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const g=[];let P=0;for(let O=0;O<ys;++O){const ne=O/A,D=Math.exp(-ne*ne/2);g.push(D),O===0?P+=D:O<y&&(P+=2*D)}for(let O=0;O<g.length;O++)g[O]=g[O]/P;b.envMap.value=t.texture,b.samples.value=y,b.weights.value=g,b.latitudinal.value=d==="latitudinal",h&&(b.poleAxis.value=h);const{_lodMax:U}=this;b.dTheta.value=E,b.mipInt.value=U-s;const I=this._sizeLods[l],W=3*I*(l>U-Xa?l-U+Xa:0),z=4*(this._cubeSize-I);gr(i,W,z,3*I,2*I),m.setRenderTarget(i),m.render(x,Co)}}function _3(o){const t=[],i=[],s=[];let l=o;const u=o-Xa+1+Vx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Xa?m=Vx[d-o+Xa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,b=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,A=3,y=2,g=1,P=new Float32Array(A*E*S),U=new Float32Array(y*E*S),I=new Float32Array(g*E*S);for(let z=0;z<S;z++){const O=z%3*2/3-1,ne=z>2?0:-1,D=[O,ne,0,O+2/3,ne,0,O+2/3,ne+1,0,O,ne,0,O+2/3,ne+1,0,O,ne+1,0];P.set(D,A*E*z),U.set(b,y*E*z);const R=[z,z,z,z,z,z];I.set(R,g*E*z)}const W=new Ti;W.setAttribute("position",new Un(P,A)),W.setAttribute("uv",new Un(U,y)),W.setAttribute("faceIndex",new Un(I,g)),s.push(new qa(W,null)),l>Xa&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function jx(o,t,i){const s=new Ts(o,t,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function b3(o,t,i){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function y3(o,t,i){const s=new Float32Array(ys),l=new ve(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Xx(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Wx(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S3(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Ld||m===Od,_=m===yr||m===Sr;if(p||_){let x=t.get(h);const b=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==b)return i===null&&(i=new kx(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new kx(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function M3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Oo("WebGLRenderer: "+s+" extension not supported."),l}}}function E3(o,t,i,s){const l={},u=new WeakMap;function d(x){const b=x.target;b.index!==null&&t.remove(b.index);for(const E in b.attributes)t.remove(b.attributes[E]);b.removeEventListener("dispose",d),delete l[b.id];const S=u.get(b);S&&(t.remove(S),u.delete(b)),s.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function h(x,b){return l[b.id]===!0||(b.addEventListener("dispose",d),l[b.id]=!0,i.memory.geometries++),b}function m(x){const b=x.attributes;for(const S in b)t.update(b[S],o.ARRAY_BUFFER)}function p(x){const b=[],S=x.index,E=x.attributes.position;let A=0;if(S!==null){const P=S.array;A=S.version;for(let U=0,I=P.length;U<I;U+=3){const W=P[U+0],z=P[U+1],O=P[U+2];b.push(W,z,z,O,O,W)}}else if(E!==void 0){const P=E.array;A=E.version;for(let U=0,I=P.length/3-1;U<I;U+=3){const W=U+0,z=U+1,O=U+2;b.push(W,z,z,O,O,W)}}else return;const y=new(Mg(b)?Dg:Rg)(b,1);y.version=A;const g=u.get(x);g&&t.remove(g),u.set(x,y)}function _(x){const b=u.get(x);if(b){const S=x.index;S!==null&&b.version<S.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function T3(o,t,i){let s;function l(b){s=b}let u,d;function h(b){u=b.type,d=b.bytesPerElement}function m(b,S){o.drawElements(s,S,u,b*d),i.update(S,s,1)}function p(b,S,E){E!==0&&(o.drawElementsInstanced(s,S,u,b*d,E),i.update(S,s,E))}function _(b,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,b,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];i.update(y,s,1)}function x(b,S,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<b.length;g++)p(b[g]/d,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,u,b,0,A,0,E);let g=0;for(let P=0;P<E;P++)g+=S[P]*A[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function A3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:an("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function w3(o,t,i){const s=new WeakMap,l=new sn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let b=s.get(h);if(b===void 0||b.count!==x){let R=function(){ne.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var S=R;b!==void 0&&b.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let I=0;E===!0&&(I=1),A===!0&&(I=2),y===!0&&(I=3);let W=h.attributes.position.count*I,z=1;W>t.maxTextureSize&&(z=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const O=new Float32Array(W*z*4*x),ne=new Eg(O,W,z,x);ne.type=la,ne.needsUpdate=!0;const D=I*4;for(let k=0;k<x;k++){const te=g[k],ce=P[k],ge=U[k],me=W*z*4*k;for(let F=0;F<te.count;F++){const j=F*D;E===!0&&(l.fromBufferAttribute(te,F),O[me+j+0]=l.x,O[me+j+1]=l.y,O[me+j+2]=l.z,O[me+j+3]=0),A===!0&&(l.fromBufferAttribute(ce,F),O[me+j+4]=l.x,O[me+j+5]=l.y,O[me+j+6]=l.z,O[me+j+7]=0),y===!0&&(l.fromBufferAttribute(ge,F),O[me+j+8]=l.x,O[me+j+9]=l.y,O[me+j+10]=l.z,O[me+j+11]=ge.itemSize===4?l.w:1)}}b={count:x,texture:ne,size:new Xt(W,z)},s.set(h,b),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",b.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",b.size)}return{update:u}}function C3(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==p&&(b.update(),l.set(b,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Hg=new zn,Yx=new Fg(1,1),Vg=new Eg,Gg=new tb,kg=new Lg,qx=[],Zx=[],Kx=new Float32Array(16),Qx=new Float32Array(9),Jx=new Float32Array(4);function wr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=qx[l];if(u===void 0&&(u=new Float32Array(l),qx[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Oc(o,t){let i=Zx[t];i===void 0&&(i=new Int32Array(t),Zx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function R3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function D3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function N3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function U3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function L3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;Jx.set(s),o.uniformMatrix2fv(this.addr,!1,Jx),gn(i,s)}}function O3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;Qx.set(s),o.uniformMatrix3fv(this.addr,!1,Qx),gn(i,s)}}function z3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;Kx.set(s),o.uniformMatrix4fv(this.addr,!1,Kx),gn(i,s)}}function P3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function F3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function B3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function I3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function H3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function V3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function G3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function k3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function j3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yx.compareFunction=Sg,u=Yx):u=Hg,i.setTexture2D(t||u,l)}function X3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Gg,l)}function W3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||kg,l)}function Y3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Vg,l)}function q3(o){switch(o){case 5126:return R3;case 35664:return D3;case 35665:return N3;case 35666:return U3;case 35674:return L3;case 35675:return O3;case 35676:return z3;case 5124:case 35670:return P3;case 35667:case 35671:return F3;case 35668:case 35672:return B3;case 35669:case 35673:return I3;case 5125:return H3;case 36294:return V3;case 36295:return G3;case 36296:return k3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return Y3}}function Z3(o,t){o.uniform1fv(this.addr,t)}function K3(o,t){const i=wr(t,this.size,2);o.uniform2fv(this.addr,i)}function Q3(o,t){const i=wr(t,this.size,3);o.uniform3fv(this.addr,i)}function J3(o,t){const i=wr(t,this.size,4);o.uniform4fv(this.addr,i)}function $3(o,t){const i=wr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function e2(o,t){const i=wr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function t2(o,t){const i=wr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function n2(o,t){o.uniform1iv(this.addr,t)}function i2(o,t){o.uniform2iv(this.addr,t)}function a2(o,t){o.uniform3iv(this.addr,t)}function s2(o,t){o.uniform4iv(this.addr,t)}function r2(o,t){o.uniform1uiv(this.addr,t)}function o2(o,t){o.uniform2uiv(this.addr,t)}function l2(o,t){o.uniform3uiv(this.addr,t)}function c2(o,t){o.uniform4uiv(this.addr,t)}function u2(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Hg,u[d])}function f2(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Gg,u[d])}function d2(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||kg,u[d])}function h2(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Vg,u[d])}function p2(o){switch(o){case 5126:return Z3;case 35664:return K3;case 35665:return Q3;case 35666:return J3;case 35674:return $3;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return a2;case 35669:case 35673:return s2;case 5125:return r2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return h2}}class m2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=q3(i.type)}}class x2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=p2(i.type)}}class g2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function $x(o,t){o.seq.push(t),o.map[t.id]=t}function v2(o,t,i){const s=o.name,l=s.length;for(Md.lastIndex=0;;){const u=Md.exec(s),d=Md.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){$x(i,p===void 0?new m2(h,o,t):new x2(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new g2(h),$x(i,x)),i=x}}}class Tc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);v2(u,d,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function eg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const _2=37297;let b2=0;function y2(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const tg=new xt;function S2(o){Ot._getMatrix(tg,Ot.workingColorSpace,o);const t=`mat3( ${tg.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(o)){case wc:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ng(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+y2(o.getShaderSource(t),h)}else return u}function M2(o,t){const i=S2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function E2(o,t){let i;switch(t){case C1:i="Linear";break;case R1:i="Reinhard";break;case D1:i="Cineon";break;case N1:i="ACESFilmic";break;case L1:i="AgX";break;case O1:i="Neutral";break;case U1:i="Custom";break;default:dt("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new ve;function T2(){Ot.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),t=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function w2(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function C2(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Ro(o){return o!==""}function ig(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ag(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R2=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(o){return o.replace(R2,N2)}const D2=new Map;function N2(o,t){let i=vt[t];if(i===void 0){const s=D2.get(t);if(s!==void 0)i=vt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hh(i)}const U2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(o){return o.replace(U2,L2)}function L2(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function rg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O2(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===dg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===o1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function z2(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yr:case Sr:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P2(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function F2(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case hg:t="ENVMAP_BLENDING_MULTIPLY";break;case A1:t="ENVMAP_BLENDING_MIX";break;case w1:t="ENVMAP_BLENDING_ADD";break}return t}function B2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function I2(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=O2(i),p=z2(i),_=P2(i),x=F2(i),b=B2(i),S=A2(i),E=w2(u),A=l.createProgram();let y,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ro).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ro).join(`
`),g.length>0&&(g+=`
`)):(y=[rg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),g=[rg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?vt.tonemapping_pars_fragment:"",i.toneMapping!==Wa?E2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,M2("linearToOutputTexel",i.outputColorSpace),T2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),d=hh(d),d=ig(d,i),d=ag(d,i),h=hh(h),h=ig(h,i),h=ag(h,i),d=sg(d),h=sg(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=P+y+d,I=P+g+h,W=eg(l,l.VERTEX_SHADER,U),z=eg(l,l.FRAGMENT_SHADER,I);l.attachShader(A,W),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(k){if(o.debug.checkShaderErrors){const te=l.getProgramInfoLog(A)||"",ce=l.getShaderInfoLog(W)||"",ge=l.getShaderInfoLog(z)||"",me=te.trim(),F=ce.trim(),j=ge.trim();let G=!0,le=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,W,z);else{const xe=ng(l,W,"vertex"),L=ng(l,z,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+me+`
`+xe+`
`+L)}else me!==""?dt("WebGLProgram: Program Info Log:",me):(F===""||j==="")&&(le=!1);le&&(k.diagnostics={runnable:G,programLog:me,vertexShader:{log:F,prefix:y},fragmentShader:{log:j,prefix:g}})}l.deleteShader(W),l.deleteShader(z),ne=new Tc(l,A),D=C2(l,A)}let ne;this.getUniforms=function(){return ne===void 0&&O(this),ne};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,_2)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=b2++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=W,this.fragmentShader=z,this}let H2=0;class V2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new G2(t),i.set(t,s)),s}}class G2{constructor(t){this.id=H2++,this.code=t,this.usedTimes=0}}function k2(o,t,i,s,l,u,d){const h=new Ag,m=new V2,p=new Set,_=[],x=l.logarithmicDepthBuffer,b=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,R,k,te,ce){const ge=te.fog,me=ce.geometry,F=D.isMeshStandardMaterial?te.environment:null,j=(D.isMeshStandardMaterial?i:t).get(D.envMap||F),G=j&&j.mapping===Dc?j.image.height:null,le=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&dt("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const xe=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,L=xe!==void 0?xe.length:0;let q=0;me.morphAttributes.position!==void 0&&(q=1),me.morphAttributes.normal!==void 0&&(q=2),me.morphAttributes.color!==void 0&&(q=3);let pe,ye,Re,Z;if(le){const Dt=Ni[le];pe=Dt.vertexShader,ye=Dt.fragmentShader}else pe=D.vertexShader,ye=D.fragmentShader,m.update(D),Re=m.getVertexShaderID(D),Z=m.getFragmentShaderID(D);const ue=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Ie=ce.isInstancedMesh===!0,ke=ce.isBatchedMesh===!0,it=!!D.map,Rt=!!D.matcap,at=!!j,gt=!!D.aoMap,H=!!D.lightMap,lt=!!D.bumpMap,Fe=!!D.normalMap,ht=!!D.displacementMap,He=!!D.emissiveMap,_t=!!D.metalnessMap,Ze=!!D.roughnessMap,Je=D.anisotropy>0,N=D.clearcoat>0,M=D.dispersion>0,Y=D.iridescence>0,_e=D.sheen>0,Se=D.transmission>0,de=Je&&!!D.anisotropyMap,Ye=N&&!!D.clearcoatMap,ze=N&&!!D.clearcoatNormalMap,Ke=N&&!!D.clearcoatRoughnessMap,re=Y&&!!D.iridescenceMap,K=Y&&!!D.iridescenceThicknessMap,Q=_e&&!!D.sheenColorMap,Ae=_e&&!!D.sheenRoughnessMap,De=!!D.specularMap,Ne=!!D.specularColorMap,Ge=!!D.specularIntensityMap,V=Se&&!!D.transmissionMap,Ue=Se&&!!D.thicknessMap,Le=!!D.gradientMap,Pe=!!D.alphaMap,we=D.alphaTest>0,Te=!!D.alphaHash,Xe=!!D.extensions;let ct=Wa;D.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ct=o.toneMapping);const Ht={shaderID:le,shaderType:D.type,shaderName:D.name,vertexShader:pe,fragmentShader:ye,defines:D.defines,customVertexShaderID:Re,customFragmentShaderID:Z,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:ke,batchingColor:ke&&ce._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ce.instanceColor!==null,instancingMorph:Ie&&ce.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Mr,alphaToCoverage:!!D.alphaToCoverage,map:it,matcap:Rt,envMap:at,envMapMode:at&&j.mapping,envMapCubeUVHeight:G,aoMap:gt,lightMap:H,bumpMap:lt,normalMap:Fe,displacementMap:b&&ht,emissiveMap:He,normalMapObjectSpace:Fe&&D.normalMapType===I1,normalMapTangentSpace:Fe&&D.normalMapType===B1,metalnessMap:_t,roughnessMap:Ze,anisotropy:Je,anisotropyMap:de,clearcoat:N,clearcoatMap:Ye,clearcoatNormalMap:ze,clearcoatRoughnessMap:Ke,dispersion:M,iridescence:Y,iridescenceMap:re,iridescenceThicknessMap:K,sheen:_e,sheenColorMap:Q,sheenRoughnessMap:Ae,specularMap:De,specularColorMap:Ne,specularIntensityMap:Ge,transmission:Se,transmissionMap:V,thicknessMap:Ue,gradientMap:Le,opaque:D.transparent===!1&&D.blending===vr&&D.alphaToCoverage===!1,alphaMap:Pe,alphaTest:we,alphaHash:Te,combine:D.combine,mapUv:it&&A(D.map.channel),aoMapUv:gt&&A(D.aoMap.channel),lightMapUv:H&&A(D.lightMap.channel),bumpMapUv:lt&&A(D.bumpMap.channel),normalMapUv:Fe&&A(D.normalMap.channel),displacementMapUv:ht&&A(D.displacementMap.channel),emissiveMapUv:He&&A(D.emissiveMap.channel),metalnessMapUv:_t&&A(D.metalnessMap.channel),roughnessMapUv:Ze&&A(D.roughnessMap.channel),anisotropyMapUv:de&&A(D.anisotropyMap.channel),clearcoatMapUv:Ye&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:ze&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:K&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&A(D.sheenRoughnessMap.channel),specularMapUv:De&&A(D.specularMap.channel),specularColorMapUv:Ne&&A(D.specularColorMap.channel),specularIntensityMapUv:Ge&&A(D.specularIntensityMap.channel),transmissionMapUv:V&&A(D.transmissionMap.channel),thicknessMapUv:Ue&&A(D.thicknessMap.channel),alphaMapUv:Pe&&A(D.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(Fe||Je),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!me.attributes.uv&&(it||Pe),fog:!!ge,useFog:D.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ce,skinning:ce.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ct,decodeVideoTexture:it&&D.map.isVideoTexture===!0&&Ot.getTransfer(D.map.colorSpace)===jt,decodeVideoTextureEmissive:He&&D.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(D.emissiveMap.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xe&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&D.extensions.multiDraw===!0||ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)R.push(k),R.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(P(R,D),U(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function P(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function U(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function I(D){const R=E[D.type];let k;if(R){const te=Ni[R];k=pb.clone(te.uniforms)}else k=D.uniforms;return k}function W(D,R){let k;for(let te=0,ce=_.length;te<ce;te++){const ge=_[te];if(ge.cacheKey===R){k=ge,++k.usedTimes;break}}return k===void 0&&(k=new I2(o,R,D,u),_.push(k)),k}function z(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function O(D){m.remove(D)}function ne(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:I,acquireProgram:W,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:ne}}function j2(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function X2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function og(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function lg(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(x,b,S,E,A,y){let g=o[t];return g===void 0?(g={id:x.id,object:x,geometry:b,material:S,groupOrder:E,renderOrder:x.renderOrder,z:A,group:y},o[t]=g):(g.id=x.id,g.object=x,g.geometry=b,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=A,g.group=y),t++,g}function h(x,b,S,E,A,y){const g=d(x,b,S,E,A,y);S.transmission>0?s.push(g):S.transparent===!0?l.push(g):i.push(g)}function m(x,b,S,E,A,y){const g=d(x,b,S,E,A,y);S.transmission>0?s.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,b){i.length>1&&i.sort(x||X2),s.length>1&&s.sort(b||og),l.length>1&&l.sort(b||og)}function _(){for(let x=t,b=o.length;x<b;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function W2(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new lg,o.set(s,[d])):l>=u.length?(d=new lg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function Y2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ve,color:new It};break;case"SpotLight":i={position:new ve,direction:new ve,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ve,color:new It,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ve,skyColor:new It,groundColor:new It};break;case"RectAreaLight":i={color:new It,position:new ve,halfWidth:new ve,halfHeight:new ve};break}return o[t.id]=i,i}}}function q2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Z2=0;function K2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Q2(o){const t=new Y2,i=q2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ve);const l=new ve,u=new dn,d=new dn;function h(p){let _=0,x=0,b=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,A=0,y=0,g=0,P=0,U=0,I=0,W=0,z=0,O=0;p.sort(K2);for(let D=0,R=p.length;D<R;D++){const k=p[D],te=k.color,ce=k.intensity,ge=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=te.r*ce,x+=te.g*ce,b+=te.b*ce;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],ce);O++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,G=i.get(k);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,s.directionalShadow[S]=G,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=k.shadow.matrix,P++}s.directional[S]=F,S++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(te).multiplyScalar(ce),F.distance=ge,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[A]=F;const j=k.shadow;if(k.map&&(s.spotLightMap[W]=k.map,W++,j.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[A]=j.matrix,k.castShadow){const G=i.get(k);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,s.spotShadow[A]=G,s.spotShadowMap[A]=me,I++}A++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(te).multiplyScalar(ce),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=F,y++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const j=k.shadow,G=i.get(k);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,s.pointShadow[E]=G,s.pointShadowMap[E]=me,s.pointShadowMatrix[E]=k.shadow.matrix,U++}s.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(ce),F.groundColor.copy(k.groundColor).multiplyScalar(ce),s.hemi[g]=F,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=b;const ne=s.hash;(ne.directionalLength!==S||ne.pointLength!==E||ne.spotLength!==A||ne.rectAreaLength!==y||ne.hemiLength!==g||ne.numDirectionalShadows!==P||ne.numPointShadows!==U||ne.numSpotShadows!==I||ne.numSpotMaps!==W||ne.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+W-z,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=O,ne.directionalLength=S,ne.pointLength=E,ne.spotLength=A,ne.rectAreaLength=y,ne.hemiLength=g,ne.numDirectionalShadows=P,ne.numPointShadows=U,ne.numSpotShadows=I,ne.numSpotMaps=W,ne.numLightProbes=O,s.version=Z2++)}function m(p,_){let x=0,b=0,S=0,E=0,A=0;const y=_.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const U=p[g];if(U.isDirectionalLight){const I=s.directional[x];I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),x++}else if(U.isSpotLight){const I=s.spot[S];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const I=s.rectArea[E];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const I=s.point[b];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),b++}else if(U.isHemisphereLight){const I=s.hemi[A];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(y),A++}}}return{setup:h,setupView:m,state:s}}function cg(o){const t=new Q2(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function J2(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new cg(o),t.set(l,[h])):u>=d.length?(h=new cg(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const $2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tM(o,t,i){let s=new zg;const l=new Xt,u=new Xt,d=new sn,h=new Tb({depthPacking:F1}),m=new Ab,p={},_=i.maxTextureSize,x={[Ya]:kn,[kn]:Ya,[ra]:ra},b=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:$2,fragmentShader:eM}),S=b.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ti;E.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new qa(E,b),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg;let g=this.type;this.render=function(z,O,ne){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),te=o.state;te.setBlending(ca),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=g!==sa&&this.type===sa,ge=g===sa&&this.type!==sa;for(let me=0,F=z.length;me<F;me++){const j=z[me],G=j.shadow;if(G===void 0){dt("WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const le=G.getFrameExtents();if(l.multiply(le),u.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/le.x),l.x=u.x*le.x,G.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/le.y),l.y=u.y*le.y,G.mapSize.y=u.y)),G.map===null||ce===!0||ge===!0){const L=this.type!==sa?{minFilter:ii,magFilter:ii}:{};G.map!==null&&G.map.dispose(),G.map=new Ts(l.x,l.y,L),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const xe=G.getViewportCount();for(let L=0;L<xe;L++){const q=G.getViewport(L);d.set(u.x*q.x,u.y*q.y,u.x*q.z,u.y*q.w),te.viewport(d),G.updateMatrices(j,L),s=G.getFrustum(),I(O,ne,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===sa&&P(G,ne),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(D,R,k)};function P(z,O){const ne=t.update(A);b.defines.VSM_SAMPLES!==z.blurSamples&&(b.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,b.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ts(l.x,l.y)),b.uniforms.shadow_pass.value=z.map.texture,b.uniforms.resolution.value=z.mapSize,b.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,ne,b,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,ne,S,A,null)}function U(z,O,ne,D){let R=null;const k=ne.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)R=k;else if(R=ne.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const te=R.uuid,ce=O.uuid;let ge=p[te];ge===void 0&&(ge={},p[te]=ge);let me=ge[ce];me===void 0&&(me=R.clone(),ge[ce]=me,O.addEventListener("dispose",W)),R=me}if(R.visible=O.visible,R.wireframe=O.wireframe,D===sa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:x[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,ne.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=o.properties.get(R);te.light=ne}return R}function I(z,O,ne,D,R){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===sa)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,z.matrixWorld);const ce=t.update(z),ge=z.material;if(Array.isArray(ge)){const me=ce.groups;for(let F=0,j=me.length;F<j;F++){const G=me[F],le=ge[G.materialIndex];if(le&&le.visible){const xe=U(z,le,D,R);z.onBeforeShadow(o,z,O,ne,ce,xe,G),o.renderBufferDirect(ne,null,ce,xe,z,G),z.onAfterShadow(o,z,O,ne,ce,xe,G)}}}else if(ge.visible){const me=U(z,ge,D,R);z.onBeforeShadow(o,z,O,ne,ce,me,null),o.renderBufferDirect(ne,null,ce,me,z,null),z.onAfterShadow(o,z,O,ne,ce,me,null)}}const te=z.children;for(let ce=0,ge=te.length;ce<ge;ce++)I(te[ce],O,ne,D,R)}function W(z){z.target.removeEventListener("dispose",W);for(const ne in p){const D=p[ne],R=z.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const nM={[Ad]:wd,[Cd]:Nd,[Rd]:Ud,[br]:Dd,[wd]:Ad,[Nd]:Cd,[Ud]:Rd,[Dd]:br};function iM(o,t){function i(){let V=!1;const Ue=new sn;let Le=null;const Pe=new sn(0,0,0,0);return{setMask:function(we){Le!==we&&!V&&(o.colorMask(we,we,we,we),Le=we)},setLocked:function(we){V=we},setClear:function(we,Te,Xe,ct,Ht){Ht===!0&&(we*=ct,Te*=ct,Xe*=ct),Ue.set(we,Te,Xe,ct),Pe.equals(Ue)===!1&&(o.clearColor(we,Te,Xe,ct),Pe.copy(Ue))},reset:function(){V=!1,Le=null,Pe.set(-1,0,0,0)}}}function s(){let V=!1,Ue=!1,Le=null,Pe=null,we=null;return{setReversed:function(Te){if(Ue!==Te){const Xe=t.get("EXT_clip_control");Te?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ue=Te;const ct=we;we=null,this.setClear(ct)}},getReversed:function(){return Ue},setTest:function(Te){Te?ue(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(Te){Le!==Te&&!V&&(o.depthMask(Te),Le=Te)},setFunc:function(Te){if(Ue&&(Te=nM[Te]),Pe!==Te){switch(Te){case Ad:o.depthFunc(o.NEVER);break;case wd:o.depthFunc(o.ALWAYS);break;case Cd:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Rd:o.depthFunc(o.EQUAL);break;case Dd:o.depthFunc(o.GEQUAL);break;case Nd:o.depthFunc(o.GREATER);break;case Ud:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=Te}},setLocked:function(Te){V=Te},setClear:function(Te){we!==Te&&(Ue&&(Te=1-Te),o.clearDepth(Te),we=Te)},reset:function(){V=!1,Le=null,Pe=null,we=null,Ue=!1}}}function l(){let V=!1,Ue=null,Le=null,Pe=null,we=null,Te=null,Xe=null,ct=null,Ht=null;return{setTest:function(Dt){V||(Dt?ue(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(Dt){Ue!==Dt&&!V&&(o.stencilMask(Dt),Ue=Dt)},setFunc:function(Dt,Cn,Xn){(Le!==Dt||Pe!==Cn||we!==Xn)&&(o.stencilFunc(Dt,Cn,Xn),Le=Dt,Pe=Cn,we=Xn)},setOp:function(Dt,Cn,Xn){(Te!==Dt||Xe!==Cn||ct!==Xn)&&(o.stencilOp(Dt,Cn,Xn),Te=Dt,Xe=Cn,ct=Xn)},setLocked:function(Dt){V=Dt},setClear:function(Dt){Ht!==Dt&&(o.clearStencil(Dt),Ht=Dt)},reset:function(){V=!1,Ue=null,Le=null,Pe=null,we=null,Te=null,Xe=null,ct=null,Ht=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},b=new WeakMap,S=[],E=null,A=!1,y=null,g=null,P=null,U=null,I=null,W=null,z=null,O=new It(0,0,0),ne=0,D=!1,R=null,k=null,te=null,ce=null,ge=null;const me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const G=o.getParameter(o.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=j>=2);let le=null,xe={};const L=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),pe=new sn().fromArray(L),ye=new sn().fromArray(q);function Re(V,Ue,Le,Pe){const we=new Uint8Array(4),Te=o.createTexture();o.bindTexture(V,Te),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xe=0;Xe<Le;Xe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,we):o.texImage2D(Ue+Xe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,we);return Te}const Z={};Z[o.TEXTURE_2D]=Re(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(br),lt(!1),Fe(px),ue(o.CULL_FACE),gt(ca);function ue(V){_[V]!==!0&&(o.enable(V),_[V]=!0)}function Ce(V){_[V]!==!1&&(o.disable(V),_[V]=!1)}function Ie(V,Ue){return x[V]!==Ue?(o.bindFramebuffer(V,Ue),x[V]=Ue,V===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ue),V===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ke(V,Ue){let Le=S,Pe=!1;if(V){Le=b.get(Ue),Le===void 0&&(Le=[],b.set(Ue,Le));const we=V.textures;if(Le.length!==we.length||Le[0]!==o.COLOR_ATTACHMENT0){for(let Te=0,Xe=we.length;Te<Xe;Te++)Le[Te]=o.COLOR_ATTACHMENT0+Te;Le.length=we.length,Pe=!0}}else Le[0]!==o.BACK&&(Le[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(Le)}function it(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const Rt={[bs]:o.FUNC_ADD,[c1]:o.FUNC_SUBTRACT,[u1]:o.FUNC_REVERSE_SUBTRACT};Rt[f1]=o.MIN,Rt[d1]=o.MAX;const at={[h1]:o.ZERO,[p1]:o.ONE,[m1]:o.SRC_COLOR,[Ed]:o.SRC_ALPHA,[y1]:o.SRC_ALPHA_SATURATE,[_1]:o.DST_COLOR,[g1]:o.DST_ALPHA,[x1]:o.ONE_MINUS_SRC_COLOR,[Td]:o.ONE_MINUS_SRC_ALPHA,[b1]:o.ONE_MINUS_DST_COLOR,[v1]:o.ONE_MINUS_DST_ALPHA,[S1]:o.CONSTANT_COLOR,[M1]:o.ONE_MINUS_CONSTANT_COLOR,[E1]:o.CONSTANT_ALPHA,[T1]:o.ONE_MINUS_CONSTANT_ALPHA};function gt(V,Ue,Le,Pe,we,Te,Xe,ct,Ht,Dt){if(V===ca){A===!0&&(Ce(o.BLEND),A=!1);return}if(A===!1&&(ue(o.BLEND),A=!0),V!==l1){if(V!==y||Dt!==D){if((g!==bs||I!==bs)&&(o.blendEquation(o.FUNC_ADD),g=bs,I=bs),Dt)switch(V){case vr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ac:o.blendFunc(o.ONE,o.ONE);break;case mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case xx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:an("WebGLState: Invalid blending: ",V);break}else switch(V){case vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ac:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mx:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",V);break}P=null,U=null,W=null,z=null,O.set(0,0,0),ne=0,y=V,D=Dt}return}we=we||Ue,Te=Te||Le,Xe=Xe||Pe,(Ue!==g||we!==I)&&(o.blendEquationSeparate(Rt[Ue],Rt[we]),g=Ue,I=we),(Le!==P||Pe!==U||Te!==W||Xe!==z)&&(o.blendFuncSeparate(at[Le],at[Pe],at[Te],at[Xe]),P=Le,U=Pe,W=Te,z=Xe),(ct.equals(O)===!1||Ht!==ne)&&(o.blendColor(ct.r,ct.g,ct.b,Ht),O.copy(ct),ne=Ht),y=V,D=!1}function H(V,Ue){V.side===ra?Ce(o.CULL_FACE):ue(o.CULL_FACE);let Le=V.side===kn;Ue&&(Le=!Le),lt(Le),V.blending===vr&&V.transparent===!1?gt(ca):gt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const Pe=V.stencilWrite;h.setTest(Pe),Pe&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),He(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function Fe(V){V!==s1?(ue(o.CULL_FACE),V!==k&&(V===px?o.cullFace(o.BACK):V===r1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),k=V}function ht(V){V!==te&&(F&&o.lineWidth(V),te=V)}function He(V,Ue,Le){V?(ue(o.POLYGON_OFFSET_FILL),(ce!==Ue||ge!==Le)&&(o.polygonOffset(Ue,Le),ce=Ue,ge=Le)):Ce(o.POLYGON_OFFSET_FILL)}function _t(V){V?ue(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ze(V){V===void 0&&(V=o.TEXTURE0+me-1),le!==V&&(o.activeTexture(V),le=V)}function Je(V,Ue,Le){Le===void 0&&(le===null?Le=o.TEXTURE0+me-1:Le=le);let Pe=xe[Le];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[Le]=Pe),(Pe.type!==V||Pe.texture!==Ue)&&(le!==Le&&(o.activeTexture(Le),le=Le),o.bindTexture(V,Ue||Z[V]),Pe.type=V,Pe.texture=Ue)}function N(){const V=xe[le];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function _e(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Se(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ze(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ke(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function re(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function K(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Q(V){pe.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),pe.copy(V))}function Ae(V){ye.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),ye.copy(V))}function De(V,Ue){let Le=p.get(Ue);Le===void 0&&(Le=new WeakMap,p.set(Ue,Le));let Pe=Le.get(V);Pe===void 0&&(Pe=o.getUniformBlockIndex(Ue,V.name),Le.set(V,Pe))}function Ne(V,Ue){const Pe=p.get(Ue).get(V);m.get(Ue)!==Pe&&(o.uniformBlockBinding(Ue,Pe,V.__bindingPointIndex),m.set(Ue,Pe))}function Ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},le=null,xe={},x={},b=new WeakMap,S=[],E=null,A=!1,y=null,g=null,P=null,U=null,I=null,W=null,z=null,O=new It(0,0,0),ne=0,D=!1,R=null,k=null,te=null,ce=null,ge=null,pe.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:Ce,bindFramebuffer:Ie,drawBuffers:ke,useProgram:it,setBlending:gt,setMaterial:H,setFlipSided:lt,setCullFace:Fe,setLineWidth:ht,setPolygonOffset:He,setScissorTest:_t,activeTexture:Ze,bindTexture:Je,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:re,texImage3D:K,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:ze,texStorage3D:Ke,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:Ye,scissor:Q,viewport:Ae,reset:Ge}}function aM(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,_=new WeakMap;let x;const b=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,M){return S?new OffscreenCanvas(N,M):Rc("canvas")}function A(N,M,Y){let _e=1;const Se=Je(N);if((Se.width>Y||Se.height>Y)&&(_e=Y/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(_e*Se.width),Ye=Math.floor(_e*Se.height);x===void 0&&(x=E(de,Ye));const ze=M?E(de,Ye):x;return ze.width=de,ze.height=Ye,ze.getContext("2d").drawImage(N,0,0,de,Ye),dt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+de+"x"+Ye+")."),ze}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,M,Y,_e,Se=!1){if(N!==null){if(o[N]!==void 0)return o[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=M;if(M===o.RED&&(Y===o.FLOAT&&(de=o.R32F),Y===o.HALF_FLOAT&&(de=o.R16F),Y===o.UNSIGNED_BYTE&&(de=o.R8)),M===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.R8UI),Y===o.UNSIGNED_SHORT&&(de=o.R16UI),Y===o.UNSIGNED_INT&&(de=o.R32UI),Y===o.BYTE&&(de=o.R8I),Y===o.SHORT&&(de=o.R16I),Y===o.INT&&(de=o.R32I)),M===o.RG&&(Y===o.FLOAT&&(de=o.RG32F),Y===o.HALF_FLOAT&&(de=o.RG16F),Y===o.UNSIGNED_BYTE&&(de=o.RG8)),M===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.RG8UI),Y===o.UNSIGNED_SHORT&&(de=o.RG16UI),Y===o.UNSIGNED_INT&&(de=o.RG32UI),Y===o.BYTE&&(de=o.RG8I),Y===o.SHORT&&(de=o.RG16I),Y===o.INT&&(de=o.RG32I)),M===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(de=o.RGB16UI),Y===o.UNSIGNED_INT&&(de=o.RGB32UI),Y===o.BYTE&&(de=o.RGB8I),Y===o.SHORT&&(de=o.RGB16I),Y===o.INT&&(de=o.RGB32I)),M===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),Y===o.UNSIGNED_INT&&(de=o.RGBA32UI),Y===o.BYTE&&(de=o.RGBA8I),Y===o.SHORT&&(de=o.RGBA16I),Y===o.INT&&(de=o.RGBA32I)),M===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),M===o.RGBA){const Ye=Se?wc:Ot.getTransfer(_e);Y===o.FLOAT&&(de=o.RGBA32F),Y===o.HALF_FLOAT&&(de=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(de=Ye===jt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function I(N,M){let Y;return N?M===null||M===Es||M===No?Y=o.DEPTH24_STENCIL8:M===la?Y=o.DEPTH32F_STENCIL8:M===Do&&(Y=o.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Es||M===No?Y=o.DEPTH_COMPONENT24:M===la?Y=o.DEPTH_COMPONENT32F:M===Do&&(Y=o.DEPTH_COMPONENT16),Y}function W(N,M){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ii&&N.minFilter!==pi?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function z(N){const M=N.target;M.removeEventListener("dispose",z),ne(M),M.isVideoTexture&&_.delete(M)}function O(N){const M=N.target;M.removeEventListener("dispose",O),R(M)}function ne(N){const M=s.get(N);if(M.__webglInit===void 0)return;const Y=N.source,_e=b.get(Y);if(_e){const Se=_e[M.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&D(N),Object.keys(_e).length===0&&b.delete(Y)}s.remove(N)}function D(N){const M=s.get(N);o.deleteTexture(M.__webglTexture);const Y=N.source,_e=b.get(Y);delete _e[M.__cacheKey],d.memory.textures--}function R(N){const M=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(M.__webglFramebuffer[_e]))for(let Se=0;Se<M.__webglFramebuffer[_e].length;Se++)o.deleteFramebuffer(M.__webglFramebuffer[_e][Se]);else o.deleteFramebuffer(M.__webglFramebuffer[_e]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[_e])}else{if(Array.isArray(M.__webglFramebuffer))for(let _e=0;_e<M.__webglFramebuffer.length;_e++)o.deleteFramebuffer(M.__webglFramebuffer[_e]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _e=0;_e<M.__webglColorRenderbuffer.length;_e++)M.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[_e]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=N.textures;for(let _e=0,Se=Y.length;_e<Se;_e++){const de=s.get(Y[_e]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),d.memory.textures--),s.remove(Y[_e])}s.remove(N)}let k=0;function te(){k=0}function ce(){const N=k;return N>=l.maxTextures&&dt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function ge(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function me(N,M){const Y=s.get(N);if(N.isVideoTexture&&_t(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const _e=N.image;if(_e===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,N,M);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+M)}function F(N,M){const Y=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Z(Y,N,M);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+M)}function j(N,M){const Y=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Z(Y,N,M);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+M)}function G(N,M){const Y=s.get(N);if(N.version>0&&Y.__version!==N.version){ue(Y,N,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+M)}const le={[zd]:o.REPEAT,[oa]:o.CLAMP_TO_EDGE,[Pd]:o.MIRRORED_REPEAT},xe={[ii]:o.NEAREST,[z1]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[Ss]:o.LINEAR_MIPMAP_LINEAR},L={[H1]:o.NEVER,[W1]:o.ALWAYS,[V1]:o.LESS,[Sg]:o.LEQUAL,[G1]:o.EQUAL,[X1]:o.GEQUAL,[k1]:o.GREATER,[j1]:o.NOTEQUAL};function q(N,M){if(M.type===la&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===pi||M.magFilter===qf||M.magFilter===Ql||M.magFilter===Ss||M.minFilter===pi||M.minFilter===qf||M.minFilter===Ql||M.minFilter===Ss)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,le[M.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,le[M.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,le[M.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,xe[M.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==Ql&&M.minFilter!==Ss||M.type===la&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function pe(N,M){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",z));const _e=M.source;let Se=b.get(_e);Se===void 0&&(Se={},b.set(_e,Se));const de=ge(M);if(de!==N.__cacheKey){Se[de]===void 0&&(Se[de]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),Se[de].usedTimes++;const Ye=Se[N.__cacheKey];Ye!==void 0&&(Se[N.__cacheKey].usedTimes--,Ye.usedTimes===0&&D(M)),N.__cacheKey=de,N.__webglTexture=Se[de].texture}return Y}function ye(N,M,Y){return Math.floor(Math.floor(N/Y)/M)}function Re(N,M,Y,_e){const de=N.updateRanges;if(de.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,Y,_e,M.data);else{de.sort((K,Q)=>K.start-Q.start);let Ye=0;for(let K=1;K<de.length;K++){const Q=de[Ye],Ae=de[K],De=Q.start+Q.count,Ne=ye(Ae.start,M.width,4),Ge=ye(Q.start,M.width,4);Ae.start<=De+1&&Ne===Ge&&ye(Ae.start+Ae.count-1,M.width,4)===Ne?Q.count=Math.max(Q.count,Ae.start+Ae.count-Q.start):(++Ye,de[Ye]=Ae)}de.length=Ye+1;const ze=o.getParameter(o.UNPACK_ROW_LENGTH),Ke=o.getParameter(o.UNPACK_SKIP_PIXELS),re=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let K=0,Q=de.length;K<Q;K++){const Ae=de[K],De=Math.floor(Ae.start/4),Ne=Math.ceil(Ae.count/4),Ge=De%M.width,V=Math.floor(De/M.width),Ue=Ne,Le=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,Ge,V,Ue,Le,Y,_e,M.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ze),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,re)}}function Z(N,M,Y){let _e=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_e=o.TEXTURE_3D);const Se=pe(N,M),de=M.source;i.bindTexture(_e,N.__webglTexture,o.TEXTURE0+Y);const Ye=s.get(de);if(de.version!==Ye.__version||Se===!0){i.activeTexture(o.TEXTURE0+Y);const ze=Ot.getPrimaries(Ot.workingColorSpace),Ke=M.colorSpace===ja?null:Ot.getPrimaries(M.colorSpace),re=M.colorSpace===ja||ze===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let K=A(M.image,!1,l.maxTextureSize);K=Ze(M,K);const Q=u.convert(M.format,M.colorSpace),Ae=u.convert(M.type);let De=U(M.internalFormat,Q,Ae,M.colorSpace,M.isVideoTexture);q(_e,M);let Ne;const Ge=M.mipmaps,V=M.isVideoTexture!==!0,Ue=Ye.__version===void 0||Se===!0,Le=de.dataReady,Pe=W(M,K);if(M.isDepthTexture)De=I(M.format===Lo,M.type),Ue&&(V?i.texStorage2D(o.TEXTURE_2D,1,De,K.width,K.height):i.texImage2D(o.TEXTURE_2D,0,De,K.width,K.height,0,Q,Ae,null));else if(M.isDataTexture)if(Ge.length>0){V&&Ue&&i.texStorage2D(o.TEXTURE_2D,Pe,De,Ge[0].width,Ge[0].height);for(let we=0,Te=Ge.length;we<Te;we++)Ne=Ge[we],V?Le&&i.texSubImage2D(o.TEXTURE_2D,we,0,0,Ne.width,Ne.height,Q,Ae,Ne.data):i.texImage2D(o.TEXTURE_2D,we,De,Ne.width,Ne.height,0,Q,Ae,Ne.data);M.generateMipmaps=!1}else V?(Ue&&i.texStorage2D(o.TEXTURE_2D,Pe,De,K.width,K.height),Le&&Re(M,K,Q,Ae)):i.texImage2D(o.TEXTURE_2D,0,De,K.width,K.height,0,Q,Ae,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,De,Ge[0].width,Ge[0].height,K.depth);for(let we=0,Te=Ge.length;we<Te;we++)if(Ne=Ge[we],M.format!==Mi)if(Q!==null)if(V){if(Le)if(M.layerUpdates.size>0){const Xe=Hx(Ne.width,Ne.height,M.format,M.type);for(const ct of M.layerUpdates){const Ht=Ne.data.subarray(ct*Xe/Ne.data.BYTES_PER_ELEMENT,(ct+1)*Xe/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,ct,Ne.width,Ne.height,1,Q,Ht)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Ne.width,Ne.height,K.depth,Q,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,we,De,Ne.width,Ne.height,K.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Le&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Ne.width,Ne.height,K.depth,Q,Ae,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,we,De,Ne.width,Ne.height,K.depth,0,Q,Ae,Ne.data)}else{V&&Ue&&i.texStorage2D(o.TEXTURE_2D,Pe,De,Ge[0].width,Ge[0].height);for(let we=0,Te=Ge.length;we<Te;we++)Ne=Ge[we],M.format!==Mi?Q!==null?V?Le&&i.compressedTexSubImage2D(o.TEXTURE_2D,we,0,0,Ne.width,Ne.height,Q,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,we,De,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Le&&i.texSubImage2D(o.TEXTURE_2D,we,0,0,Ne.width,Ne.height,Q,Ae,Ne.data):i.texImage2D(o.TEXTURE_2D,we,De,Ne.width,Ne.height,0,Q,Ae,Ne.data)}else if(M.isDataArrayTexture)if(V){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,De,K.width,K.height,K.depth),Le)if(M.layerUpdates.size>0){const we=Hx(K.width,K.height,M.format,M.type);for(const Te of M.layerUpdates){const Xe=K.data.subarray(Te*we/K.data.BYTES_PER_ELEMENT,(Te+1)*we/K.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Te,K.width,K.height,1,Q,Ae,Xe)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Q,Ae,K.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,De,K.width,K.height,K.depth,0,Q,Ae,K.data);else if(M.isData3DTexture)V?(Ue&&i.texStorage3D(o.TEXTURE_3D,Pe,De,K.width,K.height,K.depth),Le&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Q,Ae,K.data)):i.texImage3D(o.TEXTURE_3D,0,De,K.width,K.height,K.depth,0,Q,Ae,K.data);else if(M.isFramebufferTexture){if(Ue)if(V)i.texStorage2D(o.TEXTURE_2D,Pe,De,K.width,K.height);else{let we=K.width,Te=K.height;for(let Xe=0;Xe<Pe;Xe++)i.texImage2D(o.TEXTURE_2D,Xe,De,we,Te,0,Q,Ae,null),we>>=1,Te>>=1}}else if(Ge.length>0){if(V&&Ue){const we=Je(Ge[0]);i.texStorage2D(o.TEXTURE_2D,Pe,De,we.width,we.height)}for(let we=0,Te=Ge.length;we<Te;we++)Ne=Ge[we],V?Le&&i.texSubImage2D(o.TEXTURE_2D,we,0,0,Q,Ae,Ne):i.texImage2D(o.TEXTURE_2D,we,De,Q,Ae,Ne);M.generateMipmaps=!1}else if(V){if(Ue){const we=Je(K);i.texStorage2D(o.TEXTURE_2D,Pe,De,we.width,we.height)}Le&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Q,Ae,K)}else i.texImage2D(o.TEXTURE_2D,0,De,Q,Ae,K);y(M)&&g(_e),Ye.__version=de.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ue(N,M,Y){if(M.image.length!==6)return;const _e=pe(N,M),Se=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Y);const de=s.get(Se);if(Se.version!==de.__version||_e===!0){i.activeTexture(o.TEXTURE0+Y);const Ye=Ot.getPrimaries(Ot.workingColorSpace),ze=M.colorSpace===ja?null:Ot.getPrimaries(M.colorSpace),Ke=M.colorSpace===ja||Ye===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const re=M.isCompressedTexture||M.image[0].isCompressedTexture,K=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let Te=0;Te<6;Te++)!re&&!K?Q[Te]=A(M.image[Te],!0,l.maxCubemapSize):Q[Te]=K?M.image[Te].image:M.image[Te],Q[Te]=Ze(M,Q[Te]);const Ae=Q[0],De=u.convert(M.format,M.colorSpace),Ne=u.convert(M.type),Ge=U(M.internalFormat,De,Ne,M.colorSpace),V=M.isVideoTexture!==!0,Ue=de.__version===void 0||_e===!0,Le=Se.dataReady;let Pe=W(M,Ae);q(o.TEXTURE_CUBE_MAP,M);let we;if(re){V&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,Ge,Ae.width,Ae.height);for(let Te=0;Te<6;Te++){we=Q[Te].mipmaps;for(let Xe=0;Xe<we.length;Xe++){const ct=we[Xe];M.format!==Mi?De!==null?V?Le&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,0,0,ct.width,ct.height,De,ct.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,Ge,ct.width,ct.height,0,ct.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Le&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,0,0,ct.width,ct.height,De,Ne,ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,Ge,ct.width,ct.height,0,De,Ne,ct.data)}}}else{if(we=M.mipmaps,V&&Ue){we.length>0&&Pe++;const Te=Je(Q[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,Ge,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(K){V?Le&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Q[Te].width,Q[Te].height,De,Ne,Q[Te].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ge,Q[Te].width,Q[Te].height,0,De,Ne,Q[Te].data);for(let Xe=0;Xe<we.length;Xe++){const Ht=we[Xe].image[Te].image;V?Le&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,0,0,Ht.width,Ht.height,De,Ne,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,Ge,Ht.width,Ht.height,0,De,Ne,Ht.data)}}else{V?Le&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,De,Ne,Q[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ge,De,Ne,Q[Te]);for(let Xe=0;Xe<we.length;Xe++){const ct=we[Xe];V?Le&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,0,0,De,Ne,ct.image[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,Ge,De,Ne,ct.image[Te])}}}y(M)&&g(o.TEXTURE_CUBE_MAP),de.__version=Se.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Ce(N,M,Y,_e,Se,de){const Ye=u.convert(Y.format,Y.colorSpace),ze=u.convert(Y.type),Ke=U(Y.internalFormat,Ye,ze,Y.colorSpace),re=s.get(M),K=s.get(Y);if(K.__renderTarget=M,!re.__hasExternalTextures){const Q=Math.max(1,M.width>>de),Ae=Math.max(1,M.height>>de);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,de,Ke,Q,Ae,M.depth,0,Ye,ze,null):i.texImage2D(Se,de,Ke,Q,Ae,0,Ye,ze,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),He(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Se,K.__webglTexture,0,ht(M)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Se,K.__webglTexture,de),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(N,M,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,N),M.depthBuffer){const _e=M.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,de=I(M.stencilBuffer,Se),Ye=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=ht(M);He(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze,de,M.width,M.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,de,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,de,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,N)}else{const _e=M.textures;for(let Se=0;Se<_e.length;Se++){const de=_e[Se],Ye=u.convert(de.format,de.colorSpace),ze=u.convert(de.type),Ke=U(de.internalFormat,Ye,ze,de.colorSpace),re=ht(M);Y&&He(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,re,Ke,M.width,M.height):He(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,re,Ke,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(M.depthTexture);_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me(M.depthTexture,0);const Se=_e.__webglTexture,de=ht(M);if(M.depthTexture.format===Uo)He(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(M.depthTexture.format===Lo)He(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function it(N){const M=s.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const _e=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_e){const Se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),M.__depthDisposeCallback=Se}M.__boundDepthTexture=_e}if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const _e=N.texture.mipmaps;_e&&_e.length>0?ke(M.__webglFramebuffer[0],N):ke(M.__webglFramebuffer,N)}else if(Y){M.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[_e]),M.__webglDepthbuffer[_e]===void 0)M.__webglDepthbuffer[_e]=o.createRenderbuffer(),Ie(M.__webglDepthbuffer[_e],N,!1);else{const Se=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,de)}}else{const _e=N.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ie(M.__webglDepthbuffer,N,!1);else{const Se=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,de)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(N,M,Y){const _e=s.get(N);M!==void 0&&Ce(_e.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&it(N)}function at(N){const M=N.texture,Y=s.get(N),_e=s.get(M);N.addEventListener("dispose",O);const Se=N.textures,de=N.isWebGLCubeRenderTarget===!0,Ye=Se.length>1;if(Ye||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=M.version,d.memory.textures++),de){Y.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ze]=[];for(let Ke=0;Ke<M.mipmaps.length;Ke++)Y.__webglFramebuffer[ze][Ke]=o.createFramebuffer()}else Y.__webglFramebuffer[ze]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ze=0;ze<M.mipmaps.length;ze++)Y.__webglFramebuffer[ze]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let ze=0,Ke=Se.length;ze<Ke;ze++){const re=s.get(Se[ze]);re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&He(N)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ze=0;ze<Se.length;ze++){const Ke=Se[ze];Y.__webglColorRenderbuffer[ze]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[ze]);const re=u.convert(Ke.format,Ke.colorSpace),K=u.convert(Ke.type),Q=U(Ke.internalFormat,re,K,Ke.colorSpace,N.isXRRenderTarget===!0),Ae=ht(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,Q,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,Y.__webglColorRenderbuffer[ze])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),q(o.TEXTURE_CUBE_MAP,M);for(let ze=0;ze<6;ze++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)Ce(Y.__webglFramebuffer[ze][Ke],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ke);else Ce(Y.__webglFramebuffer[ze],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);y(M)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let ze=0,Ke=Se.length;ze<Ke;ze++){const re=Se[ze],K=s.get(re);let Q=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Q=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Q,K.__webglTexture),q(Q,re),Ce(Y.__webglFramebuffer,N,re,o.COLOR_ATTACHMENT0+ze,Q,0),y(re)&&g(Q)}i.unbindTexture()}else{let ze=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ze=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,_e.__webglTexture),q(ze,M),M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)Ce(Y.__webglFramebuffer[Ke],N,M,o.COLOR_ATTACHMENT0,ze,Ke);else Ce(Y.__webglFramebuffer,N,M,o.COLOR_ATTACHMENT0,ze,0);y(M)&&g(ze),i.unbindTexture()}N.depthBuffer&&it(N)}function gt(N){const M=N.textures;for(let Y=0,_e=M.length;Y<_e;Y++){const Se=M[Y];if(y(Se)){const de=P(N),Ye=s.get(Se).__webglTexture;i.bindTexture(de,Ye),g(de),i.unbindTexture()}}}const H=[],lt=[];function Fe(N){if(N.samples>0){if(He(N)===!1){const M=N.textures,Y=N.width,_e=N.height;let Se=o.COLOR_BUFFER_BIT;const de=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=s.get(N),ze=M.length>1;if(ze)for(let re=0;re<M.length;re++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Ke=N.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let re=0;re<M.length;re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),ze){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[re]);const K=s.get(M[re]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,K,0)}o.blitFramebuffer(0,0,Y,_e,0,0,Y,_e,Se,o.NEAREST),m===!0&&(H.length=0,lt.length=0,H.push(o.COLOR_ATTACHMENT0+re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(H.push(de),lt.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ze)for(let re=0;re<M.length;re++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[re]);const K=s.get(M[re]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.TEXTURE_2D,K,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function ht(N){return Math.min(l.maxSamples,N.samples)}function He(N){const M=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(N){const M=d.render.frame;_.get(N)!==M&&(_.set(N,M),N.update())}function Ze(N,M){const Y=N.colorSpace,_e=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Mr&&Y!==ja&&(Ot.getTransfer(Y)===jt?(_e!==Mi||Se!==fa)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",Y)),M}function Je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=te,this.setTexture2D=me,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He}function sM(o,t){function i(s,l=ja){let u;const d=Ot.getTransfer(l);if(s===fa)return o.UNSIGNED_BYTE;if(s===gh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===vh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===gg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===vg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===mg)return o.BYTE;if(s===xg)return o.SHORT;if(s===Do)return o.UNSIGNED_SHORT;if(s===xh)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===la)return o.FLOAT;if(s===Tr)return o.HALF_FLOAT;if(s===_g)return o.ALPHA;if(s===bg)return o.RGB;if(s===Mi)return o.RGBA;if(s===Uo)return o.DEPTH_COMPONENT;if(s===Lo)return o.DEPTH_STENCIL;if(s===yg)return o.RED;if(s===_h)return o.RED_INTEGER;if(s===bh)return o.RG;if(s===yh)return o.RG_INTEGER;if(s===Sh)return o.RGBA_INTEGER;if(s===yc||s===Sc||s===Mc||s===Ec)if(d===jt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fd||s===Bd||s===Id||s===Hd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Fd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd||s===Gd||s===kd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Vd||s===Gd)return d===jt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===kd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jd||s===Xd||s===Wd||s===Yd||s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh||s===ih)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jd)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$d)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eh)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===th)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nh)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ih)return d===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ah||s===sh||s===rh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===ah)return d===jt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oh||s===lh||s===ch||s===uh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===oh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===lh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ch)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Bg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ei({vertexShader:rM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qa(new Uc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cM extends Ar{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,b=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",y=new lM,g={},P=i.getContextAttributes();let U=null,I=null;const W=[],z=[],O=new Xt;let ne=null;const D=new ni;D.viewport=new sn;const R=new ni;R.viewport=new sn;const k=[D,R],te=new Cb;let ce=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=W[Z];return ue===void 0&&(ue=new gd,W[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=W[Z];return ue===void 0&&(ue=new gd,W[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=W[Z];return ue===void 0&&(ue=new gd,W[Z]=ue),ue.getHandSpace()};function me(Z){const ue=z.indexOf(Z.inputSource);if(ue===-1)return;const Ce=W[ue];Ce!==void 0&&(Ce.update(Z.inputSource,Z.frame,p||d),Ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){l.removeEventListener("select",me),l.removeEventListener("selectstart",me),l.removeEventListener("selectend",me),l.removeEventListener("squeeze",me),l.removeEventListener("squeezestart",me),l.removeEventListener("squeezeend",me),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",j);for(let Z=0;Z<W.length;Z++){const ue=z[Z];ue!==null&&(z[Z]=null,W[Z].disconnect(ue))}ce=null,ge=null,y.reset();for(const Z in g)delete g[Z];t.setRenderTarget(U),S=null,b=null,x=null,l=null,I=null,Re.stop(),s.isPresenting=!1,t.setPixelRatio(ne),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return b!==null?b:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",me),l.addEventListener("selectstart",me),l.addEventListener("selectend",me),l.addEventListener("squeeze",me),l.addEventListener("squeezestart",me),l.addEventListener("squeezeend",me),l.addEventListener("end",F),l.addEventListener("inputsourceschange",j),P.xrCompatible!==!0&&await i.makeXRCompatible(),ne=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ie=null,ke=null;P.depth&&(ke=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=P.stencil?Lo:Uo,Ie=P.stencil?No:Es);const it={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:u};x=this.getBinding(),b=x.createProjectionLayer(it),l.updateRenderState({layers:[b]}),t.setPixelRatio(1),t.setSize(b.textureWidth,b.textureHeight,!1),I=new Ts(b.textureWidth,b.textureHeight,{format:Mi,type:fa,depthTexture:new Fg(b.textureWidth,b.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const Ce={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Ts(S.framebufferWidth,S.framebufferHeight,{format:Mi,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Re.setContext(l),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(Z){for(let ue=0;ue<Z.removed.length;ue++){const Ce=Z.removed[ue],Ie=z.indexOf(Ce);Ie>=0&&(z[Ie]=null,W[Ie].disconnect(Ce))}for(let ue=0;ue<Z.added.length;ue++){const Ce=Z.added[ue];let Ie=z.indexOf(Ce);if(Ie===-1){for(let it=0;it<W.length;it++)if(it>=z.length){z.push(Ce),Ie=it;break}else if(z[it]===null){z[it]=Ce,Ie=it;break}if(Ie===-1)break}const ke=W[Ie];ke&&ke.connect(Ce)}}const G=new ve,le=new ve;function xe(Z,ue,Ce){G.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Ce.matrixWorld);const Ie=G.distanceTo(le),ke=ue.projectionMatrix.elements,it=Ce.projectionMatrix.elements,Rt=ke[14]/(ke[10]-1),at=ke[14]/(ke[10]+1),gt=(ke[9]+1)/ke[5],H=(ke[9]-1)/ke[5],lt=(ke[8]-1)/ke[0],Fe=(it[8]+1)/it[0],ht=Rt*lt,He=Rt*Fe,_t=Ie/(-lt+Fe),Ze=_t*-lt;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(_t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Je=Rt+_t,N=at+_t,M=ht-Ze,Y=He+(Ie-Ze),_e=gt*at/N*Je,Se=H*at/N*Je;Z.projectionMatrix.makePerspective(M,Y,_e,Se,Je,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function L(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ue=Z.near,Ce=Z.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),te.near=R.near=D.near=ue,te.far=R.far=D.far=Ce,(ce!==te.near||ge!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ce=te.near,ge=te.far),te.layers.mask=Z.layers.mask|6,D.layers.mask=te.layers.mask&3,R.layers.mask=te.layers.mask&5;const Ie=Z.parent,ke=te.cameras;L(te,Ie);for(let it=0;it<ke.length;it++)L(ke[it],Ie);ke.length===2?xe(te,D,R):te.projectionMatrix.copy(D.projectionMatrix),q(Z,te,Ie)};function q(Z,ue,Ce){Ce===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(b===null&&S===null))return m},this.setFoveation=function(Z){m=Z,b!==null&&(b.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(Z){return g[Z]};let pe=null;function ye(Z,ue){if(_=ue.getViewerPose(p||d),E=ue,_!==null){const Ce=_.views;S!==null&&(t.setRenderTargetFramebuffer(I,S.framebuffer),t.setRenderTarget(I));let Ie=!1;Ce.length!==te.cameras.length&&(te.cameras.length=0,Ie=!0);for(let at=0;at<Ce.length;at++){const gt=Ce[at];let H=null;if(S!==null)H=S.getViewport(gt);else{const Fe=x.getViewSubImage(b,gt);H=Fe.viewport,at===0&&(t.setRenderTargetTextures(I,Fe.colorTexture,Fe.depthStencilTexture),t.setRenderTarget(I))}let lt=k[at];lt===void 0&&(lt=new ni,lt.layers.enable(at),lt.viewport=new sn,k[at]=lt),lt.matrix.fromArray(gt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(gt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(H.x,H.y,H.width,H.height),at===0&&(te.matrix.copy(lt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Ie===!0&&te.cameras.push(lt)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=s.getBinding();const at=x.getDepthInformation(Ce[0]);at&&at.isValid&&at.texture&&y.init(at,l.renderState)}if(ke&&ke.includes("camera-access")&&A){t.state.unbindTexture(),x=s.getBinding();for(let at=0;at<Ce.length;at++){const gt=Ce[at].camera;if(gt){let H=g[gt];H||(H=new Bg,g[gt]=H);const lt=x.getCameraImage(gt);H.sourceTexture=lt}}}}for(let Ce=0;Ce<W.length;Ce++){const Ie=z[Ce],ke=W[Ce];Ie!==null&&ke!==void 0&&ke.update(Ie,ue,p||d)}pe&&pe(Z,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Re=new Ig;Re.setAnimationLoop(ye),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}}const vs=new da,uM=new dn;function fM(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,Ng(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,P,U,I){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),b(y,g),g.isMeshPhysicalMaterial&&S(y,g,I)):g.isMeshMatcapMaterial?(u(y,g),E(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&h(y,g)):g.isPointsMaterial?m(y,g,P,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const P=t.get(g),U=P.envMap,I=P.envMapRotation;U&&(y.envMap.value=U,vs.copy(I),vs.x*=-1,vs.y*=-1,vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),y.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(vs)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function h(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,P,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function b(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const P=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dM(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const I=U.program;s.uniformBlockBinding(P,I)}function p(P,U){let I=l[P.id];I===void 0&&(E(P),I=_(P),l[P.id]=I,P.addEventListener("dispose",y));const W=U.program;s.updateUBOMapping(P,W);const z=t.render.frame;u[P.id]!==z&&(b(P),u[P.id]=z)}function _(P){const U=x();P.__bindingPointIndex=U;const I=o.createBuffer(),W=P.__size,z=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,W,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,I),I}function x(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(P){const U=l[P.id],I=P.uniforms,W=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let z=0,O=I.length;z<O;z++){const ne=Array.isArray(I[z])?I[z]:[I[z]];for(let D=0,R=ne.length;D<R;D++){const k=ne[D];if(S(k,z,D,W)===!0){const te=k.__offset,ce=Array.isArray(k.value)?k.value:[k.value];let ge=0;for(let me=0;me<ce.length;me++){const F=ce[me],j=A(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,te+ge,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ge),ge+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,te,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,U,I,W){const z=P.value,O=U+"_"+I;if(W[O]===void 0)return typeof z=="number"||typeof z=="boolean"?W[O]=z:W[O]=z.clone(),!0;{const ne=W[O];if(typeof z=="number"||typeof z=="boolean"){if(ne!==z)return W[O]=z,!0}else if(ne.equals(z)===!1)return ne.copy(z),!0}return!1}function E(P){const U=P.uniforms;let I=0;const W=16;for(let O=0,ne=U.length;O<ne;O++){const D=Array.isArray(U[O])?U[O]:[U[O]];for(let R=0,k=D.length;R<k;R++){const te=D[R],ce=Array.isArray(te.value)?te.value:[te.value];for(let ge=0,me=ce.length;ge<me;ge++){const F=ce[ge],j=A(F),G=I%W,le=G%j.boundary,xe=G+le;I+=le,xe!==0&&W-xe<j.storage&&(I+=W-xe),te.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=j.storage}}}const z=I%W;return z>0&&(I+=W-z),P.__size=I,P.__cache={},this}function A(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const I=d.indexOf(U.__bindingPointIndex);d.splice(I,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}const hM=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let aa=null;function pM(){return aa===null&&(aa=new bb(hM,32,32,bh,Tr),aa.minFilter=pi,aa.magFilter=pi,aa.wrapS=oa,aa.wrapT=oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class jg{constructor(t={}){const{canvas:i=Y1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:b=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=d;const E=new Set([Sh,yh,_h]),A=new Set([fa,Es,Do,No,gh,vh]),y=new Uint32Array(4),g=new Int32Array(4);let P=null,U=null;const I=[],W=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let O=!1;this._outputColorSpace=hi;let ne=0,D=0,R=null,k=-1,te=null;const ce=new sn,ge=new sn;let me=null;const F=new It(0);let j=0,G=i.width,le=i.height,xe=1,L=null,q=null;const pe=new sn(0,0,G,le),ye=new sn(0,0,G,le);let Re=!1;const Z=new zg;let ue=!1,Ce=!1;const Ie=new dn,ke=new ve,it=new sn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function gt(){return R===null?xe:1}let H=s;function lt(C,J){return i.getContext(C,J)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mh}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",Te,!1),i.addEventListener("webglcontextcreationerror",Xe,!1),H===null){const J="webgl2";if(H=lt(J,C),H===null)throw lt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let Fe,ht,He,_t,Ze,Je,N,M,Y,_e,Se,de,Ye,ze,Ke,re,K,Q,Ae,De,Ne,Ge,V,Ue;function Le(){Fe=new M3(H),Fe.init(),Ge=new sM(H,Fe),ht=new p3(H,Fe,t,Ge),He=new iM(H,Fe),ht.reversedDepthBuffer&&b&&He.buffers.depth.setReversed(!0),_t=new A3(H),Ze=new j2,Je=new aM(H,Fe,He,Ze,ht,Ge,_t),N=new x3(z),M=new S3(z),Y=new Db(H),V=new d3(H,Y),_e=new E3(H,Y,_t,V),Se=new C3(H,_e,Y,_t),Ae=new w3(H,ht,Je),re=new m3(Ze),de=new k2(z,N,M,Fe,ht,V,re),Ye=new fM(z,Ze),ze=new W2,Ke=new J2(Fe),Q=new f3(z,N,M,He,Se,S,m),K=new tM(z,Se,ht),Ue=new dM(H,_t,ht,He),De=new h3(H,Fe,_t),Ne=new T3(H,Fe,_t),_t.programs=de.programs,z.capabilities=ht,z.extensions=Fe,z.properties=Ze,z.renderLists=ze,z.shadowMap=K,z.state=He,z.info=_t}Le();const Pe=new cM(z,H);this.xr=Pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(C){C!==void 0&&(xe=C,this.setSize(G,le,!1))},this.getSize=function(C){return C.set(G,le)},this.setSize=function(C,J,fe=!0){if(Pe.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,le=J,i.width=Math.floor(C*xe),i.height=Math.floor(J*xe),fe===!0&&(i.style.width=C+"px",i.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(G*xe,le*xe).floor()},this.setDrawingBufferSize=function(C,J,fe){G=C,le=J,xe=fe,i.width=Math.floor(C*fe),i.height=Math.floor(J*fe),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(ce)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,J,fe,se){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,J,fe,se),He.viewport(ce.copy(pe).multiplyScalar(xe).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,J,fe,se){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,J,fe,se),He.scissor(ge.copy(ye).multiplyScalar(xe).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){He.setScissorTest(Re=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,fe=!0){let se=0;if(C){let ee=!1;if(R!==null){const Oe=R.texture.format;ee=E.has(Oe)}if(ee){const Oe=R.texture.type,Be=A.has(Oe),je=Q.getClearColor(),We=Q.getClearAlpha(),st=je.r,ot=je.g,et=je.b;Be?(y[0]=st,y[1]=ot,y[2]=et,y[3]=We,H.clearBufferuiv(H.COLOR,0,y)):(g[0]=st,g[1]=ot,g[2]=et,g[3]=We,H.clearBufferiv(H.COLOR,0,g))}else se|=H.COLOR_BUFFER_BIT}J&&(se|=H.DEPTH_BUFFER_BIT),fe&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",Te,!1),i.removeEventListener("webglcontextcreationerror",Xe,!1),Q.dispose(),ze.dispose(),Ke.dispose(),Ze.dispose(),N.dispose(),M.dispose(),Se.dispose(),V.dispose(),Ue.dispose(),de.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Cr),Pe.removeEventListener("sessionend",Rr),mi.stop()};function we(C){C.preventDefault(),yx("WebGLRenderer: Context Lost."),O=!0}function Te(){yx("WebGLRenderer: Context Restored."),O=!1;const C=_t.autoReset,J=K.enabled,fe=K.autoUpdate,se=K.needsUpdate,ee=K.type;Le(),_t.autoReset=C,K.enabled=J,K.autoUpdate=fe,K.needsUpdate=se,K.type=ee}function Xe(C){an("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const J=C.target;J.removeEventListener("dispose",ct),Ht(J)}function Ht(C){Dt(C),Ze.remove(C)}function Dt(C){const J=Ze.get(C).programs;J!==void 0&&(J.forEach(function(fe){de.releaseProgram(fe)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,fe,se,ee,Oe){J===null&&(J=Rt);const Be=ee.isMesh&&ee.matrixWorld.determinant()<0,je=zc(C,J,fe,se,ee);He.setMaterial(se,Be);let We=fe.index,st=1;if(se.wireframe===!0){if(We=_e.getWireframeAttribute(fe),We===void 0)return;st=2}const ot=fe.drawRange,et=fe.attributes.position;let pt=ot.start*st,Ct=(ot.start+ot.count)*st;Oe!==null&&(pt=Math.max(pt,Oe.start*st),Ct=Math.min(Ct,(Oe.start+Oe.count)*st)),We!==null?(pt=Math.max(pt,0),Ct=Math.min(Ct,We.count)):et!=null&&(pt=Math.max(pt,0),Ct=Math.min(Ct,et.count));const Nt=Ct-pt;if(Nt<0||Nt===1/0)return;V.setup(ee,se,je,fe,We);let Et,Pt=De;if(We!==null&&(Et=Y.get(We),Pt=Ne,Pt.setIndex(Et)),ee.isMesh)se.wireframe===!0?(He.setLineWidth(se.wireframeLinewidth*gt()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(ee.isLine){let nt=se.linewidth;nt===void 0&&(nt=1),He.setLineWidth(nt*gt()),ee.isLineSegments?Pt.setMode(H.LINES):ee.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else ee.isPoints?Pt.setMode(H.POINTS):ee.isSprite&&Pt.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const nt=ee._multiDrawStarts,Wt=ee._multiDrawCounts,Tt=ee._multiDrawCount,vn=We?Y.get(We).bytesPerElement:1,pa=Ze.get(se).currentProgram.getUniforms();for(let qt=0;qt<Tt;qt++)pa.setValue(H,"_gl_DrawID",qt),Pt.render(nt[qt]/vn,Wt[qt])}else if(ee.isInstancedMesh)Pt.renderInstances(pt,Nt,ee.count);else if(fe.isInstancedBufferGeometry){const nt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Wt=Math.min(fe.instanceCount,nt);Pt.renderInstances(pt,Nt,Wt)}else Pt.render(pt,Nt)};function Cn(C,J,fe){C.transparent===!0&&C.side===ra&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,hn(C,J,fe),C.side=Ya,C.needsUpdate=!0,hn(C,J,fe),C.side=ra):hn(C,J,fe)}this.compile=function(C,J,fe=null){fe===null&&(fe=C),U=Ke.get(fe),U.init(J),W.push(U),fe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(U.pushLight(ee),ee.castShadow&&U.pushShadow(ee))}),C!==fe&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(U.pushLight(ee),ee.castShadow&&U.pushShadow(ee))}),U.setupLights();const se=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let Be=0;Be<Oe.length;Be++){const je=Oe[Be];Cn(je,fe,ee),se.add(je)}else Cn(Oe,fe,ee),se.add(Oe)}),U=W.pop(),se},this.compileAsync=function(C,J,fe=null){const se=this.compile(C,J,fe);return new Promise(ee=>{function Oe(){if(se.forEach(function(Be){Ze.get(Be).currentProgram.isReady()&&se.delete(Be)}),se.size===0){ee(C);return}setTimeout(Oe,10)}Fe.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Xn=null;function Ho(C){Xn&&Xn(C)}function Cr(){mi.stop()}function Rr(){mi.start()}const mi=new Ig;mi.setAnimationLoop(Ho),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(C){Xn=C,Pe.setAnimationLoop(C),C===null?mi.stop():mi.start()},Pe.addEventListener("sessionstart",Cr),Pe.addEventListener("sessionend",Rr),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(J),J=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(z,C,J,R),U=Ke.get(C,W.length),U.init(J),W.push(U),Ie.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z.setFromProjectionMatrix(Ie,Ui,J.reversedDepth),Ce=this.localClippingEnabled,ue=re.init(this.clippingPlanes,Ce),P=ze.get(C,I.length),P.init(),I.push(P),Pe.enabled===!0&&Pe.isPresenting===!0){const Oe=z.xr.getDepthSensingMesh();Oe!==null&&Za(Oe,J,-1/0,z.sortObjects)}Za(C,J,0,z.sortObjects),P.finish(),z.sortObjects===!0&&P.sort(L,q),at=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,at&&Q.addToRenderList(P,C),this.info.render.frame++,ue===!0&&re.beginShadows();const fe=U.state.shadowsArray;K.render(fe,C,J),ue===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=P.opaque,ee=P.transmissive;if(U.setupLights(),J.isArrayCamera){const Oe=J.cameras;if(ee.length>0)for(let Be=0,je=Oe.length;Be<je;Be++){const We=Oe[Be];Nr(se,ee,C,We)}at&&Q.render(C);for(let Be=0,je=Oe.length;Be<je;Be++){const We=Oe[Be];Dr(P,C,We,We.viewport)}}else ee.length>0&&Nr(se,ee,C,J),at&&Q.render(C),Dr(P,C,J);R!==null&&D===0&&(Je.updateMultisampleRenderTarget(R),Je.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(z,C,J),V.resetDefaultState(),k=-1,te=null,W.pop(),W.length>0?(U=W[W.length-1],ue===!0&&re.setGlobalState(z.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?P=I[I.length-1]:P=null};function Za(C,J,fe,se){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){se&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);const Be=Se.update(C),je=C.material;je.visible&&P.push(C,Be,je,fe,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Be=Se.update(C),je=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),it.copy(Be.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(je)){const We=Be.groups;for(let st=0,ot=We.length;st<ot;st++){const et=We[st],pt=je[et.materialIndex];pt&&pt.visible&&P.push(C,Be,pt,fe,it.z,et)}}else je.visible&&P.push(C,Be,je,fe,it.z,null)}}const Oe=C.children;for(let Be=0,je=Oe.length;Be<je;Be++)Za(Oe[Be],J,fe,se)}function Dr(C,J,fe,se){const{opaque:ee,transmissive:Oe,transparent:Be}=C;U.setupLightsView(fe),ue===!0&&re.setGlobalState(z.clippingPlanes,fe),se&&He.viewport(ce.copy(se)),ee.length>0&&Wn(ee,J,fe),Oe.length>0&&Wn(Oe,J,fe),Be.length>0&&Wn(Be,J,fe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Nr(C,J,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[se.id]===void 0&&(U.state.transmissionRenderTarget[se.id]=new Ts(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Tr:fa,minFilter:Ss,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Oe=U.state.transmissionRenderTarget[se.id],Be=se.viewport||ce;Oe.setSize(Be.z*z.transmissionResolutionScale,Be.w*z.transmissionResolutionScale);const je=z.getRenderTarget(),We=z.getActiveCubeFace(),st=z.getActiveMipmapLevel();z.setRenderTarget(Oe),z.getClearColor(F),j=z.getClearAlpha(),j<1&&z.setClearColor(16777215,.5),z.clear(),at&&Q.render(fe);const ot=z.toneMapping;z.toneMapping=Wa;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),ue===!0&&re.setGlobalState(z.clippingPlanes,se),Wn(C,fe,se),Je.updateMultisampleRenderTarget(Oe),Je.updateRenderTargetMipmap(Oe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ct=0,Nt=J.length;Ct<Nt;Ct++){const Et=J[Ct],{object:Pt,geometry:nt,material:Wt,group:Tt}=Et;if(Wt.side===ra&&Pt.layers.test(se.layers)){const vn=Wt.side;Wt.side=kn,Wt.needsUpdate=!0,rn(Pt,fe,se,nt,Wt,Tt),Wt.side=vn,Wt.needsUpdate=!0,pt=!0}}pt===!0&&(Je.updateMultisampleRenderTarget(Oe),Je.updateRenderTargetMipmap(Oe))}z.setRenderTarget(je,We,st),z.setClearColor(F,j),et!==void 0&&(se.viewport=et),z.toneMapping=ot}function Wn(C,J,fe){const se=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,Oe=C.length;ee<Oe;ee++){const Be=C[ee],{object:je,geometry:We,group:st}=Be;let ot=Be.material;ot.allowOverride===!0&&se!==null&&(ot=se),je.layers.test(fe.layers)&&rn(je,J,fe,We,ot,st)}}function rn(C,J,fe,se,ee,Oe){C.onBeforeRender(z,J,fe,se,ee,Oe),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(z,J,fe,se,C,Oe),ee.transparent===!0&&ee.side===ra&&ee.forceSinglePass===!1?(ee.side=kn,ee.needsUpdate=!0,z.renderBufferDirect(fe,J,se,ee,C,Oe),ee.side=Ya,ee.needsUpdate=!0,z.renderBufferDirect(fe,J,se,ee,C,Oe),ee.side=ra):z.renderBufferDirect(fe,J,se,ee,C,Oe),C.onAfterRender(z,J,fe,se,ee,Oe)}function hn(C,J,fe){J.isScene!==!0&&(J=Rt);const se=Ze.get(C),ee=U.state.lights,Oe=U.state.shadowsArray,Be=ee.state.version,je=de.getParameters(C,ee.state,Oe,J,fe),We=de.getProgramCacheKey(je);let st=se.programs;se.environment=C.isMeshStandardMaterial?J.environment:null,se.fog=J.fog,se.envMap=(C.isMeshStandardMaterial?M:N).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",ct),st=new Map,se.programs=st);let ot=st.get(We);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===Be)return As(C,je),ot}else je.uniforms=de.getUniforms(C),C.onBeforeCompile(je,z),ot=de.acquireProgram(je,We),st.set(We,ot),se.uniforms=je.uniforms;const et=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=re.uniform),As(C,je),se.needsLights=Vo(C),se.lightsStateVersion=Be,se.needsLights&&(et.ambientLightColor.value=ee.state.ambient,et.lightProbe.value=ee.state.probe,et.directionalLights.value=ee.state.directional,et.directionalLightShadows.value=ee.state.directionalShadow,et.spotLights.value=ee.state.spot,et.spotLightShadows.value=ee.state.spotShadow,et.rectAreaLights.value=ee.state.rectArea,et.ltc_1.value=ee.state.rectAreaLTC1,et.ltc_2.value=ee.state.rectAreaLTC2,et.pointLights.value=ee.state.point,et.pointLightShadows.value=ee.state.pointShadow,et.hemisphereLights.value=ee.state.hemi,et.directionalShadowMap.value=ee.state.directionalShadowMap,et.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,et.spotShadowMap.value=ee.state.spotShadowMap,et.spotLightMatrix.value=ee.state.spotLightMatrix,et.spotLightMap.value=ee.state.spotLightMap,et.pointShadowMap.value=ee.state.pointShadowMap,et.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function Li(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=Tc.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function As(C,J){const fe=Ze.get(C);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.batchingColor=J.batchingColor,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.instancingMorph=J.instancingMorph,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function zc(C,J,fe,se,ee){J.isScene!==!0&&(J=Rt),Je.resetTextureUnits();const Oe=J.fog,Be=se.isMeshStandardMaterial?J.environment:null,je=R===null?z.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mr,We=(se.isMeshStandardMaterial?M:N).get(se.envMap||Be),st=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ot=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!fe.morphAttributes.position,pt=!!fe.morphAttributes.normal,Ct=!!fe.morphAttributes.color;let Nt=Wa;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=z.toneMapping);const Et=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Pt=Et!==void 0?Et.length:0,nt=Ze.get(se),Wt=U.state.lights;if(ue===!0&&(Ce===!0||C!==te)){const bn=C===te&&se.id===k;re.setState(se,C,bn)}let Tt=!1;se.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Wt.state.version||nt.outputColorSpace!==je||ee.isBatchedMesh&&nt.batching===!1||!ee.isBatchedMesh&&nt.batching===!0||ee.isBatchedMesh&&nt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&nt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&nt.instancing===!1||!ee.isInstancedMesh&&nt.instancing===!0||ee.isSkinnedMesh&&nt.skinning===!1||!ee.isSkinnedMesh&&nt.skinning===!0||ee.isInstancedMesh&&nt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&nt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&nt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&nt.instancingMorph===!1&&ee.morphTexture!==null||nt.envMap!==We||se.fog===!0&&nt.fog!==Oe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==re.numPlanes||nt.numIntersection!==re.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==ot||nt.morphTargets!==et||nt.morphNormals!==pt||nt.morphColors!==Ct||nt.toneMapping!==Nt||nt.morphTargetsCount!==Pt)&&(Tt=!0):(Tt=!0,nt.__version=se.version);let vn=nt.currentProgram;Tt===!0&&(vn=hn(se,J,ee));let pa=!1,qt=!1,Oi=!1;const Zt=vn.getUniforms(),_n=nt.uniforms;if(He.useProgram(vn.program)&&(pa=!0,qt=!0,Oi=!0),se.id!==k&&(k=se.id,qt=!0),pa||te!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Zt.setValue(H,"projectionMatrix",C.projectionMatrix),Zt.setValue(H,"viewMatrix",C.matrixWorldInverse);const Mn=Zt.map.cameraPosition;Mn!==void 0&&Mn.setValue(H,ke.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),te!==C&&(te=C,qt=!0,Oi=!0)}if(ee.isSkinnedMesh){Zt.setOptional(H,ee,"bindMatrix"),Zt.setOptional(H,ee,"bindMatrixInverse");const bn=ee.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Zt.setValue(H,"boneTexture",bn.boneTexture,Je))}ee.isBatchedMesh&&(Zt.setOptional(H,ee,"batchingTexture"),Zt.setValue(H,"batchingTexture",ee._matricesTexture,Je),Zt.setOptional(H,ee,"batchingIdTexture"),Zt.setValue(H,"batchingIdTexture",ee._indirectTexture,Je),Zt.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Zt.setValue(H,"batchingColorTexture",ee._colorsTexture,Je));const pn=fe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ae.update(ee,fe,vn),(qt||nt.receiveShadow!==ee.receiveShadow)&&(nt.receiveShadow=ee.receiveShadow,Zt.setValue(H,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(_n.envMap.value=We,_n.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&J.environment!==null&&(_n.envMapIntensity.value=J.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=pM()),qt&&(Zt.setValue(H,"toneMappingExposure",z.toneMappingExposure),nt.needsLights&&Pc(_n,Oi),Oe&&se.fog===!0&&Ye.refreshFogUniforms(_n,Oe),Ye.refreshMaterialUniforms(_n,se,xe,le,U.state.transmissionRenderTarget[C.id]),Tc.upload(H,Li(nt),_n,Je)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Tc.upload(H,Li(nt),_n,Je),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Zt.setValue(H,"center",ee.center),Zt.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Zt.setValue(H,"normalMatrix",ee.normalMatrix),Zt.setValue(H,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const bn=se.uniformsGroups;for(let Mn=0,Ai=bn.length;Mn<Ai;Mn++){const zi=bn[Mn];Ue.update(zi,vn),Ue.bind(zi,vn)}}return vn}function Pc(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Vo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,J,fe){const se=Ze.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ze.get(C.texture).__webglTexture=J,Ze.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){const fe=Ze.get(C);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0};const Ka=H.createFramebuffer();this.setRenderTarget=function(C,J=0,fe=0){R=C,ne=J,D=fe;let se=!0,ee=null,Oe=!1,Be=!1;if(C){const We=Ze.get(C);if(We.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(We.__webglFramebuffer===void 0)Je.setupRenderTarget(C);else if(We.__hasExternalTextures)Je.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(We.__boundDepthTexture!==et){if(et!==null&&Ze.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(C)}}const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Be=!0);const ot=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[J])?ee=ot[J][fe]:ee=ot[J],Oe=!0):C.samples>0&&Je.useMultisampledRTT(C)===!1?ee=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?ee=ot[fe]:ee=ot,ce.copy(C.viewport),ge.copy(C.scissor),me=C.scissorTest}else ce.copy(pe).multiplyScalar(xe).floor(),ge.copy(ye).multiplyScalar(xe).floor(),me=Re;if(fe!==0&&(ee=Ka),He.bindFramebuffer(H.FRAMEBUFFER,ee)&&se&&He.drawBuffers(C,ee),He.viewport(ce),He.scissor(ge),He.setScissorTest(me),Oe){const We=Ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,We.__webglTexture,fe)}else if(Be){const We=J;for(let st=0;st<C.textures.length;st++){const ot=Ze.get(C.textures[st]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+st,ot.__webglTexture,fe,We)}}else if(C!==null&&fe!==0){const We=Ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,We.__webglTexture,fe)}k=-1},this.readRenderTargetPixels=function(C,J,fe,se,ee,Oe,Be,je=0){if(!(C&&C.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){He.bindFramebuffer(H.FRAMEBUFFER,We);try{const st=C.textures[je],ot=st.format,et=st.type;if(!ht.textureFormatReadable(ot)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(et)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-se&&fe>=0&&fe<=C.height-ee&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+je),H.readPixels(J,fe,se,ee,Ge.convert(ot),Ge.convert(et),Oe))}finally{const st=R!==null?Ze.get(R).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(C,J,fe,se,ee,Oe,Be,je=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We)if(J>=0&&J<=C.width-se&&fe>=0&&fe<=C.height-ee){He.bindFramebuffer(H.FRAMEBUFFER,We);const st=C.textures[je],ot=st.format,et=st.type;if(!ht.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Oe.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+je),H.readPixels(J,fe,se,ee,Ge.convert(ot),Ge.convert(et),0);const Ct=R!==null?Ze.get(R).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,Ct);const Nt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await q1(H,Nt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Oe),H.deleteBuffer(pt),H.deleteSync(Nt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,fe=0){const se=Math.pow(2,-fe),ee=Math.floor(C.image.width*se),Oe=Math.floor(C.image.height*se),Be=J!==null?J.x:0,je=J!==null?J.y:0;Je.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,Be,je,ee,Oe),He.unbindTexture()};const Ur=H.createFramebuffer(),ha=H.createFramebuffer();this.copyTextureToTexture=function(C,J,fe=null,se=null,ee=0,Oe=null){Oe===null&&(ee!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=ee,ee=0):Oe=0);let Be,je,We,st,ot,et,pt,Ct,Nt;const Et=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(fe!==null)Be=fe.max.x-fe.min.x,je=fe.max.y-fe.min.y,We=fe.isBox3?fe.max.z-fe.min.z:1,st=fe.min.x,ot=fe.min.y,et=fe.isBox3?fe.min.z:0;else{const pn=Math.pow(2,-ee);Be=Math.floor(Et.width*pn),je=Math.floor(Et.height*pn),C.isDataArrayTexture?We=Et.depth:C.isData3DTexture?We=Math.floor(Et.depth*pn):We=1,st=0,ot=0,et=0}se!==null?(pt=se.x,Ct=se.y,Nt=se.z):(pt=0,Ct=0,Nt=0);const Pt=Ge.convert(J.format),nt=Ge.convert(J.type);let Wt;J.isData3DTexture?(Je.setTexture3D(J,0),Wt=H.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Je.setTexture2DArray(J,0),Wt=H.TEXTURE_2D_ARRAY):(Je.setTexture2D(J,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);const Tt=H.getParameter(H.UNPACK_ROW_LENGTH),vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pa=H.getParameter(H.UNPACK_SKIP_PIXELS),qt=H.getParameter(H.UNPACK_SKIP_ROWS),Oi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,st),H.pixelStorei(H.UNPACK_SKIP_ROWS,ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,et);const Zt=C.isDataArrayTexture||C.isData3DTexture,_n=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){const pn=Ze.get(C),bn=Ze.get(J),Mn=Ze.get(pn.__renderTarget),Ai=Ze.get(bn.__renderTarget);He.bindFramebuffer(H.READ_FRAMEBUFFER,Mn.__webglFramebuffer),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let zi=0;zi<We;zi++)Zt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(C).__webglTexture,ee,et+zi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.get(J).__webglTexture,Oe,Nt+zi)),H.blitFramebuffer(st,ot,Be,je,pt,Ct,Be,je,H.DEPTH_BUFFER_BIT,H.NEAREST);He.bindFramebuffer(H.READ_FRAMEBUFFER,null),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||Ze.has(C)){const pn=Ze.get(C),bn=Ze.get(J);He.bindFramebuffer(H.READ_FRAMEBUFFER,Ur),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,ha);for(let Mn=0;Mn<We;Mn++)Zt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,ee,et+Mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,ee),_n?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Oe,Nt+Mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Oe),ee!==0?H.blitFramebuffer(st,ot,Be,je,pt,Ct,Be,je,H.COLOR_BUFFER_BIT,H.NEAREST):_n?H.copyTexSubImage3D(Wt,Oe,pt,Ct,Nt+Mn,st,ot,Be,je):H.copyTexSubImage2D(Wt,Oe,pt,Ct,st,ot,Be,je);He.bindFramebuffer(H.READ_FRAMEBUFFER,null),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else _n?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Wt,Oe,pt,Ct,Nt,Be,je,We,Pt,nt,Et.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Oe,pt,Ct,Nt,Be,je,We,Pt,Et.data):H.texSubImage3D(Wt,Oe,pt,Ct,Nt,Be,je,We,Pt,nt,Et):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Oe,pt,Ct,Be,je,Pt,nt,Et.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Oe,pt,Ct,Et.width,Et.height,Pt,Et.data):H.texSubImage2D(H.TEXTURE_2D,Oe,pt,Ct,Be,je,Pt,nt,Et);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pa),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Oi),Oe===0&&J.generateMipmaps&&H.generateMipmap(Wt),He.unbindTexture()},this.initRenderTarget=function(C){Ze.get(C).__webglFramebuffer===void 0&&Je.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Je.setTextureCube(C,0):C.isData3DTexture?Je.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Je.setTexture2DArray(C,0):Je.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){ne=0,D=0,R=null,He.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const ug={places:[{id:"p1",title:"Watch the Northern Lights",subtitle:"Arctic Circle",cost:3,duration:"Sep — Mar",difficulty:2,leadTime:"3-6 months ahead",bestFor:"Solo or partner",accent:"#72b89f"},{id:"p2",title:"Walk the Camino de Santiago",subtitle:"Spain",cost:2,duration:"35 days",difficulty:4,leadTime:"6-12 months ahead",bestFor:"Solo travelers",accent:"#cca870"},{id:"p3",title:"Witness Cherry Blossoms in Kyoto",subtitle:"Japan",cost:3,duration:"5-7 days",difficulty:1,leadTime:"4-6 months ahead",bestFor:"Any group size",accent:"#d89898"},{id:"p4",title:"Stand at the Edge of Petra",subtitle:"Jordan",cost:2,duration:"2-3 days",difficulty:2,leadTime:"2-3 months ahead",bestFor:"Partner or small group",accent:"#d49068"},{id:"p5",title:"Sail the Greek Islands",subtitle:"Cyclades",cost:3,duration:"7-10 days",difficulty:2,leadTime:"3-6 months ahead",bestFor:"Partner or friends",accent:"#70a8bd"}],achievements:[{id:"a1",title:"Complete a Marathon",subtitle:"26.2 miles",cost:1,duration:"One day (6-12mo prep)",difficulty:4,leadTime:"6-12 months training",bestFor:"Solo commitment",accent:"#d49068"},{id:"a2",title:"Write and Finish a Novel",subtitle:"50,000+ words",cost:0,duration:"1-3 years",difficulty:5,leadTime:"Start anytime",bestFor:"Solo project",accent:"#9488c4"},{id:"a3",title:"Learn to Play Piano",subtitle:"Intermediate level",cost:2,duration:"2-3 years",difficulty:3,leadTime:"Start anytime",bestFor:"Solo practice",accent:"#a490c4"},{id:"a4",title:"Become Conversational in a New Language",subtitle:"B2 proficiency",cost:1,duration:"1-2 years",difficulty:4,leadTime:"Start anytime",bestFor:"Solo study",accent:"#b8a0cc"},{id:"a5",title:"Give a Public Speech",subtitle:"100+ audience",cost:0,duration:"30-60 minutes",difficulty:3,leadTime:"1-3 months prep",bestFor:"Solo performance",accent:"#d0c080"}],tastes:[{id:"t1",title:"Dine at a Three Michelin Star",subtitle:"World cuisine",cost:4,duration:"One evening",difficulty:1,leadTime:"2-6 months reservation",bestFor:"Partner or small group",accent:"#c87070"},{id:"t2",title:"Harvest Grapes in a Vineyard",subtitle:"Wine country",cost:2,duration:"1-2 days",difficulty:2,leadTime:"3-6 months ahead",bestFor:"Partner or friends",accent:"#9878c0"},{id:"t3",title:"Take a Cooking Class in Italy",subtitle:"Authentic pasta",cost:2,duration:"Half day",difficulty:1,leadTime:"1-2 months ahead",bestFor:"Any group size",accent:"#d49068"},{id:"t4",title:"Experience Omakase in Tokyo",subtitle:"Chef's selection",cost:4,duration:"2-3 hours",difficulty:1,leadTime:"1-3 months reservation",bestFor:"Solo or partner",accent:"#68b0c0"}],culture:[{id:"c1",title:"Attend the Vienna Opera Ball",subtitle:"Austria",cost:4,duration:"One evening",difficulty:2,leadTime:"6-12 months ahead",bestFor:"Partner",accent:"#cca870"},{id:"c2",title:"See a Play on the West End",subtitle:"London",cost:2,duration:"One evening",difficulty:1,leadTime:"1-2 months ahead",bestFor:"Any group size",accent:"#c87070"},{id:"c3",title:"Experience Burning Man",subtitle:"Nevada desert",cost:3,duration:"7-9 days",difficulty:4,leadTime:"6-12 months ahead",bestFor:"Friends or solo",accent:"#d49068"},{id:"c4",title:"Visit Every Louvre Wing",subtitle:"Paris",cost:2,duration:"2-3 full days",difficulty:2,leadTime:"1-2 months ahead",bestFor:"Solo or partner",accent:"#8090a8"}],connections:[{id:"n1",title:"Reconnect with an Old Friend",subtitle:"Meaningful reunion",cost:0,duration:"A few hours",difficulty:2,leadTime:"When courage strikes",bestFor:"One-on-one",accent:"#70a8bd"},{id:"n2",title:"Host a Dinner for Ten",subtitle:"Your table, your people",cost:1,duration:"One evening",difficulty:2,leadTime:"2-4 weeks ahead",bestFor:"Your closest circle",accent:"#d0c080"},{id:"n3",title:"Write a Letter to Your Future Self",subtitle:"10 years from now",cost:0,duration:"1 hour",difficulty:1,leadTime:"Today",bestFor:"Solo reflection",accent:"#9488c4"},{id:"n4",title:"Make a Friend in a Foreign Country",subtitle:"Lasting connection",cost:0,duration:"Serendipity",difficulty:3,leadTime:"During travel",bestFor:"Solo travelers",accent:"#72b89f"}],inner:[{id:"i1",title:"Complete a Silent Retreat",subtitle:"7+ days",cost:2,duration:"7-10 days",difficulty:4,leadTime:"2-4 months ahead",bestFor:"Solo journey",accent:"#8090a8"},{id:"i2",title:"Forgive Someone Fully",subtitle:"Release the weight",cost:0,duration:"Lifetime work",difficulty:5,leadTime:"When ready",bestFor:"Internal work",accent:"#70a8bd"},{id:"i3",title:"Meditate for 30 Consecutive Days",subtitle:"Build the practice",cost:0,duration:"30 days",difficulty:3,leadTime:"Start tomorrow",bestFor:"Solo practice",accent:"#72b89f"},{id:"i4",title:"Work with a Therapist",subtitle:"Understand yourself",cost:2,duration:"Ongoing",difficulty:3,leadTime:"1-4 weeks to start",bestFor:"Solo growth",accent:"#a490c4"}],thrills:[{id:"h1",title:"Skydive from 15,000 Feet",subtitle:"Terminal velocity",cost:2,duration:"Half day",difficulty:3,leadTime:"1-2 weeks ahead",bestFor:"Solo or friends",accent:"#70a8bd"},{id:"h2",title:"Dive the Great Barrier Reef",subtitle:"Australia",cost:3,duration:"Full day",difficulty:2,leadTime:"2-3 months ahead",bestFor:"Partner or friends",accent:"#68b0c0"},{id:"h3",title:"Drive the Pacific Coast Highway",subtitle:"California",cost:2,duration:"3-5 days",difficulty:1,leadTime:"1-2 months ahead",bestFor:"Partner or solo",accent:"#d49068"},{id:"h4",title:"Climb a Via Ferrata",subtitle:"Dolomites",cost:2,duration:"Full day",difficulty:3,leadTime:"1-2 months ahead",bestFor:"Partner or small group",accent:"#a89880"}],markers:[{id:"m1",title:"Own a Place to Call Home",subtitle:"Your foundation",cost:4,duration:"Years of work",difficulty:4,leadTime:"Years of saving",bestFor:"Solo or family",accent:"#cca870"},{id:"m2",title:"Retire on Your Terms",subtitle:"Financial freedom",cost:4,duration:"Lifetime",difficulty:5,leadTime:"Decades of planning",bestFor:"You decide",accent:"#72b89f"},{id:"m3",title:"Start a Family",subtitle:"If it calls to you",cost:3,duration:"Life chapter",difficulty:4,leadTime:"When life aligns",bestFor:"Partner",accent:"#d89898"},{id:"m4",title:"Launch Something of Your Own",subtitle:"Business or project",cost:2,duration:"1-5 years",difficulty:4,leadTime:"3-12 months prep",bestFor:"Solo or co-founders",accent:"#a490c4"}]},bc={places:{name:"Places",description:"Destinations that will reshape your perspective",color:"#10b981"},achievements:{name:"Achievements",description:"Milestones that prove what you're capable of",color:"#f97316"},tastes:{name:"Tastes",description:"Culinary experiences that linger in memory",color:"#dc2626"},culture:{name:"Culture",description:"Art, music, and gatherings that move the soul",color:"#eab308"},connections:{name:"Connections",description:"Relationships that define a life well-lived",color:"#0ea5e9"},inner:{name:"Inner Work",description:"The invisible labor that changes everything",color:"#8b5cf6"},thrills:{name:"Thrills",description:"Moments that make your heart race",color:"#06b6d4"},markers:{name:"Life Markers",description:"The chapters that structure a lifetime",color:"#ec4899"}},mM=()=>{const o=$e.useRef(null),t=()=>(o.current||(o.current=new(window.AudioContext||window.webkitAudioContext)),o.current),i=$e.useCallback((m,p=.1,_="sine",x=.1)=>{try{const b=t(),S=b.createOscillator(),E=b.createGain();S.connect(E),E.connect(b.destination),S.frequency.value=m,S.type=_,E.gain.setValueAtTime(x,b.currentTime),E.gain.exponentialRampToValueAtTime(.001,b.currentTime+p),S.start(b.currentTime),S.stop(b.currentTime+p)}catch{}},[]),s=$e.useCallback(()=>i(800,.05,"sine",.08),[i]),l=$e.useCallback(()=>{i(523.25,.1,"sine",.1),setTimeout(()=>i(659.25,.1,"sine",.1),50)},[i]),u=$e.useCallback(()=>i(392,.15,"sine",.08),[i]),d=$e.useCallback(()=>{[523.25,659.25,783.99,1046.5].forEach((m,p)=>{setTimeout(()=>i(m,.4,"sine",.06),p*200)})},[i]),h=$e.useCallback(()=>{[783.99,987.77,1174.66,1567.98].forEach((m,p)=>{setTimeout(()=>i(m,.6,"triangle",.05),p*150)})},[i]);return{playClick:s,playAdd:l,playRemove:u,playCeremony:d,playComplete:h}},xM=()=>{const o=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],t=[...o,...o],i=u=>u*u*u*(u*(u*6-15)+10),s=(u,d,h)=>u+h*(d-u),l=(u,d,h,m)=>{const p=u&15,_=p<8?d:h,x=p<4?h:p===12||p===14?d:m;return((p&1)===0?_:-_)+((p&2)===0?x:-x)};return(u,d,h)=>{const m=Math.floor(u)&255,p=Math.floor(d)&255,_=Math.floor(h)&255;u-=Math.floor(u),d-=Math.floor(d),h-=Math.floor(h);const x=i(u),b=i(d),S=i(h),E=t[m]+p,A=t[E]+_,y=t[E+1]+_,g=t[m+1]+p,P=t[g]+_,U=t[g+1]+_;return s(s(s(l(t[A],u,d,h),l(t[P],u-1,d,h),x),s(l(t[y],u,d-1,h),l(t[U],u-1,d-1,h),x),b),s(s(l(t[A+1],u,d,h-1),l(t[P+1],u-1,d,h-1),x),s(l(t[y+1],u,d-1,h-1),l(t[U+1],u-1,d-1,h-1),x),b),S)}},fg=()=>{const o=$e.useRef(null),t=$e.useRef([]),i=$e.useRef(null);return $e.useEffect(()=>{const s=o.current;if(!s)return;const l=s.getContext("2d"),u=()=>{s.width=window.innerWidth,s.height=window.innerHeight};u(),window.addEventListener("resize",u);const d=90,h=[],m=[{r:140,g:175,b:160},{r:175,g:160,b:140},{r:160,g:150,b:175},{r:130,g:168,b:180},{r:180,g:160,b:160}],p=s.width/2,_=s.height/2,x=400,b=350;for(let E=0;E<d;E++){let A,y,g=0;do{const U=Math.random();U<.25?(A=Math.random()*(p-x/2-50),y=Math.random()*s.height):U<.5?(A=p+x/2+50+Math.random()*(s.width-p-x/2-50),y=Math.random()*s.height):U<.75?(A=Math.random()*s.width,y=Math.random()*(_-b/2-30)):(A=Math.random()*s.width,y=_+b/2+30+Math.random()*(s.height-_-b/2-30)),g++}while(Math.abs(A-p)<x/2&&Math.abs(y-_)<b/2&&g<20);const P=m[Math.floor(Math.random()*m.length)];h.push({x:A,y,baseX:A,baseY:y,size:1+Math.random()*2.5,color:P,alpha:.12+Math.random()*.25,phase:Math.random()*Math.PI*2,speed:.15+Math.random()*.35,range:40+Math.random()*70})}t.current=h;const S=()=>{i.current=requestAnimationFrame(S),l.clearRect(0,0,s.width,s.height);const E=Date.now()/1e3;h.forEach(A=>{A.x=A.baseX+Math.sin(E*A.speed+A.phase)*A.range,A.y=A.baseY+Math.cos(E*A.speed*.7+A.phase)*(A.range*.6);const y=A.alpha*(.6+Math.sin(E*1.2+A.phase)*.4),g=l.createRadialGradient(A.x,A.y,0,A.x,A.y,A.size*4);g.addColorStop(0,`rgba(${A.color.r}, ${A.color.g}, ${A.color.b}, ${y})`),g.addColorStop(.4,`rgba(${A.color.r}, ${A.color.g}, ${A.color.b}, ${y*.4})`),g.addColorStop(1,`rgba(${A.color.r}, ${A.color.g}, ${A.color.b}, 0)`),l.beginPath(),l.arc(A.x,A.y,A.size*4,0,Math.PI*2),l.fillStyle=g,l.fill()})};return S(),()=>{window.removeEventListener("resize",u),i.current&&cancelAnimationFrame(i.current)}},[]),T.jsx("canvas",{ref:o,className:"absolute inset-0 pointer-events-none z-0",style:{opacity:.8}})},gM=({onComplete:o,seekingWord:t,setSeekingWord:i,setUserName:s,setUserBirthday:l})=>{const u=$e.useRef(null),d=$e.useRef(null),[h,m]=$e.useState("name"),[p,_]=$e.useState(""),[x,b]=$e.useState(""),[S,E]=$e.useState(""),[A,y]=$e.useState(""),[g,P]=$e.useState(!1),[U,I]=$e.useState(!1),W=$e.useRef(null),z=$e.useRef(null),O=$e.useRef([]),ne=$e.useRef(null),D=()=>{const j=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],G=[...j,...j],le=q=>q*q*q*(q*(q*6-15)+10),xe=(q,pe,ye)=>q+ye*(pe-q),L=(q,pe,ye,Re)=>{const Z=q&15,ue=Z<8?pe:ye,Ce=Z<4?ye:Z===12||Z===14?pe:Re;return((Z&1)===0?ue:-ue)+((Z&2)===0?Ce:-Ce)};return(q,pe,ye)=>{const Re=Math.floor(q)&255,Z=Math.floor(pe)&255,ue=Math.floor(ye)&255;q-=Math.floor(q),pe-=Math.floor(pe),ye-=Math.floor(ye);const Ce=le(q),Ie=le(pe),ke=le(ye),it=G[Re]+Z,Rt=G[it]+ue,at=G[it+1]+ue,gt=G[Re+1]+Z,H=G[gt]+ue,lt=G[gt+1]+ue;return xe(xe(xe(L(G[Rt],q,pe,ye),L(G[H],q-1,pe,ye),Ce),xe(L(G[at],q,pe-1,ye),L(G[lt],q-1,pe-1,ye),Ce),Ie),xe(xe(L(G[Rt+1],q,pe,ye-1),L(G[H+1],q-1,pe,ye-1),Ce),xe(L(G[at+1],q,pe-1,ye-1),L(G[lt+1],q-1,pe-1,ye-1),Ce),Ie),ke)}},R=$e.useRef(D()),k=$e.useCallback(j=>{const G=document.createElement("canvas"),le=G.getContext("2d"),xe=Math.min(1200,j.length*140);G.width=xe,G.height=300,le.fillStyle="white";const L=Math.min(180,xe/j.length*1.4);le.font=`300 ${L}px Georgia, serif`,le.textAlign="center",le.textBaseline="middle",le.fillText(j,xe/2,150);const q=le.getImageData(0,0,xe,300),pe=[],ye=3;for(let Re=0;Re<300;Re+=ye)for(let Z=0;Z<xe;Z+=ye){const ue=(Re*xe+Z)*4;q.data[ue+3]>128&&pe.push({x:(Z-xe/2)*.04,y:(150-Re)*.04,z:(Math.random()-.5)*1.5})}return pe},[]);$e.useEffect(()=>{if(!u.current||h!=="forming")return;const j=new Og;W.current=j;const G=new ni(60,window.innerWidth/window.innerHeight,.1,1e3),le=new jg({antialias:!0,alpha:!0});le.setSize(window.innerWidth,window.innerHeight),le.setPixelRatio(Math.min(window.devicePixelRatio,2)),le.setClearColor(657930,1),u.current.appendChild(le.domElement),G.position.z=35;const xe=p.trim()||"You",L=k(xe);O.current=L;const q=7e3,pe=new Float32Array(q*3),ye=new Float32Array(q*3),Re=new Float32Array(q),Z=[],ue=[],Ce=[[.55,.69,.63],[.52,.56,.54],[.6,.58,.56],[.54,.56,.58],[.58,.64,.61]];for(let Fe=0;Fe<q;Fe++){const ht=Math.acos(2*Math.random()-1),He=Math.random()*Math.PI*2,_t=35+Math.random()*25;pe[Fe*3]=_t*Math.sin(ht)*Math.cos(He),pe[Fe*3+1]=_t*Math.sin(ht)*Math.sin(He),pe[Fe*3+2]=(Math.random()-.5)*40;const Ze=Fe%O.current.length,Je=O.current[Ze]||{x:0,y:0,z:0};Z.push({x:0,y:0,z:0}),ue.push({target:Je,originalTarget:{...Je},phase:Math.random()*Math.PI*2,speed:.4+Math.random()*1.2,noiseOffset:{x:Math.random()*100,y:Math.random()*100,z:Math.random()*100},disperseAngle:Math.random()*Math.PI*2,disperseSpeed:1+Math.random()*3});const N=Ce[Math.floor(Math.random()*Ce.length)];ye[Fe*3]=N[0],ye[Fe*3+1]=N[1],ye[Fe*3+2]=N[2],Re[Fe]=1.2+Math.random()*2.2}const Ie=new Ti;Ie.setAttribute("position",new Un(pe,3)),Ie.setAttribute("color",new Un(ye,3)),Ie.setAttribute("size",new Un(Re,1));const ke=new Ei({uniforms:{uOpacity:{value:0},uTime:{value:0},uPixelRatio:{value:le.getPixelRatio()}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vDist;
        uniform float uPixelRatio;
        uniform float uTime;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvPosition.z;
          
          float pulse = 1.0 + sin(uTime * 2.5 + position.x * 0.3 + position.y * 0.3) * 0.15;
          gl_PointSize = size * pulse * uPixelRatio * (28.0 / vDist);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        uniform float uTime;
        varying vec3 vColor;
        varying float vDist;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float d = length(center);
          if (d > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, d);
          float glow = exp(-d * 3.5) * 0.6;
          alpha = alpha + glow;
          
          float depthFade = clamp(1.0 - vDist / 55.0, 0.35, 1.0);
          vec3 finalColor = vColor + 0.08;
          
          gl_FragColor = vec4(finalColor, alpha * uOpacity * depthFade);
        }
      `,transparent:!0,depthWrite:!1,blending:Ac}),it=new Pg(Ie,ke);z.current={geometry:Ie,material:ke,velocities:Z,particleData:ue},j.add(it),ne.current=Date.now();const Rt=8.5,at=5.5,gt=5.5,H=()=>{d.current=requestAnimationFrame(H);const Fe=(Date.now()-ne.current)/1e3;ke.uniforms.uTime.value=Fe;const ht=Ie.attributes.position.array,He=R.current;let _t;Fe<1?_t=Fe:Fe>Rt-1?_t=Math.max(0,Rt-Fe):_t=1,ke.uniforms.uOpacity.value=_t*.9;for(let Je=0;Je<q;Je++){const N=Je*3,M=ue[Je],Y=Z[Je];let _e=ht[N],Se=ht[N+1],de=ht[N+2];const Ye=.015,ze=.04,Ke=Fe*.35,re=He(_e*Ye+M.noiseOffset.x,Se*Ye,Ke)+He(_e*ze,Se*ze+M.noiseOffset.y,Ke*1.5)*.5,K=He(Se*Ye+M.noiseOffset.y,de*Ye,Ke)+He(Se*ze,de*ze+M.noiseOffset.z,Ke*1.5)*.5,Q=He(de*Ye+M.noiseOffset.z,_e*Ye,Ke)*.6;if(Fe<at)if(Fe<1.2){const De=Fe/1.2,Ne=Math.pow(1-De,1.5)*2;Y.x+=re*.3*Ne*M.speed,Y.y+=K*.3*Ne*M.speed,Y.z+=Q*.15*Ne*M.speed;const Ge=Math.sqrt(_e*_e+Se*Se),V=Math.atan2(Se,_e);if(Ge>.3){const Ue=Ne*.12*Math.min(1,10/Ge);Y.x+=-Se*Ue,Y.y+=_e*Ue,Y.x+=Math.sin(V*2+Fe*4)*Ue*.3,Y.y+=Math.cos(V*2+Fe*4)*Ue*.3}if(Fe>.3){const Ue=(Fe-.3)/.9,Le=Ue*Ue*.05;Y.x+=(M.target.x-_e)*Le,Y.y+=(M.target.y-Se)*Le}}else if(Fe<2){const De=(Fe-1.2)/.8,Ne=De<.5?2*De*De:1-Math.pow(-2*De+2,2)/2,Ge=(1-Ne)*.5;Y.x+=re*.12*Ge*M.speed,Y.y+=K*.12*Ge*M.speed,Y.z+=Q*.06*Ge*M.speed;const V=.06+Ne*.12;Y.x+=(M.target.x-_e)*V,Y.y+=(M.target.y-Se)*V,Y.z+=(M.target.z-de)*V*.5}else Y.x+=(M.target.x-_e)*.14,Y.y+=(M.target.y-Se)*.14,Y.z+=(M.target.z-de)*.14*.5,Math.sqrt(Math.pow(M.target.x-_e,2)+Math.pow(M.target.y-Se,2)+Math.pow(M.target.z-de,2))<2&&(Y.x+=Math.sin(Fe*4+M.phase)*.015,Y.x+=Math.sin(Fe*1.5+M.phase*.5)*.008,Y.y+=Math.cos(Fe*3.5+M.phase)*.015,Y.y+=Math.cos(Fe*1.2+M.phase*.7)*.008,Y.z+=Math.sin(Fe*2.5+M.phase*2)*.01);else{const De=(Fe-gt)/(Rt-gt),Ge=(De<.5?2*De*De:1-Math.pow(-2*De+2,2)/2)*.4*M.disperseSpeed;Y.x+=Math.cos(M.disperseAngle)*Ge,Y.y+=Math.sin(M.disperseAngle)*Ge,Y.z+=Math.sin(M.disperseAngle*2+Fe)*Ge*.2,Y.x+=re*.04,Y.y+=K*.04}let Ae;Fe<1.2?Ae=.96:Fe<2?Ae=.9:Fe<at?Ae=.88:Ae=.97,Y.x*=Ae,Y.y*=Ae,Y.z*=Ae,ht[N]+=Y.x,ht[N+1]+=Y.y,ht[N+2]+=Y.z}Ie.attributes.position.needsUpdate=!0;const Ze=Fe<at?35+Math.sin(Fe*.4)*3:35+(Fe-at)*4;G.position.x=Math.sin(Fe*.25)*4,G.position.y=Math.cos(Fe*.2)*2,G.position.z=Ze,G.lookAt(0,0,0),le.render(j,G),Fe>=Rt&&(cancelAnimationFrame(d.current),i(p.trim()),s(p.trim()),x&&S&&A&&l({month:parseInt(x),day:parseInt(S),year:parseInt(A)}),o())};H();const lt=()=>{G.aspect=window.innerWidth/window.innerHeight,G.updateProjectionMatrix(),le.setSize(window.innerWidth,window.innerHeight),ke.uniforms.uPixelRatio.value=le.getPixelRatio()};return window.addEventListener("resize",lt),()=>{cancelAnimationFrame(d.current),window.removeEventListener("resize",lt),u.current&&le.domElement&&u.current.removeChild(le.domElement),le.dispose()}},[h,p,o,i,k]),$e.useEffect(()=>{if(h==="name"){const j=setTimeout(()=>P(!0),600);return()=>clearTimeout(j)}if(h==="birthday"){I(!1);const j=setTimeout(()=>I(!0),300);return()=>clearTimeout(j)}},[h]);const te=()=>{p.trim()&&m("birthday")},ce=()=>{m("forming")},ge=j=>{j.key==="Enter"&&p.trim()&&te()},me=j=>{j.key==="Enter"&&x&&S&&A&&ce()},F=()=>{if(!A||!x||!S)return null;const j=new Date,G=new Date(parseInt(A),parseInt(x)-1,parseInt(S));let le=j.getFullYear()-G.getFullYear();const xe=j.getMonth()-G.getMonth();return(xe<0||xe===0&&j.getDate()<G.getDate())&&le--,le};if(h==="name")return T.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center",style:{backgroundColor:"#0a0a0a"},children:[T.jsx(fg,{}),T.jsxs("div",{className:"relative z-10 text-center px-6 max-w-md",children:[T.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-white/30 mb-6",style:{opacity:g?1:0,transform:g?"translateY(0)":"translateY(10px)",transition:"all 0.8s ease-out"},children:"The Life Store"}),T.jsx("h1",{className:"text-2xl md:text-3xl font-light text-white/90 mb-2",style:{opacity:g?1:0,transform:g?"translateY(0)":"translateY(20px)",transition:"all 1s ease-out 0.2s"},children:"What's your name?"}),T.jsx("p",{className:"text-white/40 mb-10 font-light",style:{opacity:g?1:0,transform:g?"translateY(0)":"translateY(20px)",transition:"all 1s ease-out 0.4s"},children:"This experience is for you."}),T.jsx("div",{style:{opacity:g?1:0,transform:g?"translateY(0)":"translateY(20px)",transition:"all 1s ease-out 0.6s"},children:T.jsx("input",{type:"text",value:p,onChange:j=>_(j.target.value.slice(0,15)),onKeyDown:ge,placeholder:"First name",maxLength:15,className:"w-full bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-2xl text-white/90 placeholder-white/20 py-3 outline-none transition-colors duration-500 font-light",autoFocus:!0,autoComplete:"off"})}),T.jsxs("button",{onClick:te,disabled:!p.trim(),className:"group relative mt-10 px-10 py-3.5 rounded-full bg-transparent text-white/50 hover:text-white/90 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none overflow-hidden",style:{opacity:g?1:0,transition:"opacity 1s ease-out 0.8s, color 0.3s, transform 0.3s",border:"1px solid rgba(140,175,160,0.2)"},children:[T.jsx("div",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-disabled:opacity-0",style:{boxShadow:"0 0 35px rgba(140,175,160,0.2), inset 0 0 20px rgba(140,175,160,0.05)"}}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full group-disabled:translate-x-[-100%] transition-transform duration-700 ease-in-out"}),T.jsx("span",{className:"relative",children:"Continue"})]})]})]});if(h==="birthday"){const j=F(),G=x&&S&&A&&A.length===4;return T.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center",style:{backgroundColor:"#0a0a0a"},children:[T.jsx(fg,{}),T.jsxs("div",{className:"relative z-10 text-center px-6 max-w-md",children:[T.jsxs("p",{className:"text-sm uppercase tracking-[0.3em] text-[rgb(140,175,160)]/50 mb-6",style:{opacity:U?1:0,transform:U?"translateY(0)":"translateY(10px)",transition:"all 0.8s ease-out"},children:["Hello, ",p]}),T.jsx("h1",{className:"text-2xl md:text-3xl font-light text-white/90 mb-2",style:{opacity:U?1:0,transform:U?"translateY(0)":"translateY(20px)",transition:"all 1s ease-out 0.2s"},children:"When were you born?"}),T.jsx("p",{className:"text-white/40 mb-10 font-light",style:{opacity:U?1:0,transform:U?"translateY(0)":"translateY(20px)",transition:"all 1s ease-out 0.4s"},children:"Time gives meaning to dreams."}),T.jsxs("div",{className:"flex items-center justify-center gap-3",style:{opacity:U?1:0,transform:U?"translateY(0)":"translateY(20px)",transition:"all 1s ease-out 0.6s"},children:[T.jsx("input",{type:"text",value:x,onChange:le=>{const xe=le.target.value.replace(/\D/g,"").slice(0,2);b(xe),xe.length===2&&document.getElementById("birth-day")?.focus()},onKeyDown:me,placeholder:"MM",className:"w-16 bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-xl text-white/90 placeholder-white/20 py-2 outline-none transition-colors duration-500 font-light",autoFocus:!0}),T.jsx("span",{className:"text-white/20 text-xl",children:"/"}),T.jsx("input",{id:"birth-day",type:"text",value:S,onChange:le=>{const xe=le.target.value.replace(/\D/g,"").slice(0,2);E(xe),xe.length===2&&document.getElementById("birth-year")?.focus()},onKeyDown:me,placeholder:"DD",className:"w-16 bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-xl text-white/90 placeholder-white/20 py-2 outline-none transition-colors duration-500 font-light"}),T.jsx("span",{className:"text-white/20 text-xl",children:"/"}),T.jsx("input",{id:"birth-year",type:"text",value:A,onChange:le=>y(le.target.value.replace(/\D/g,"").slice(0,4)),onKeyDown:me,placeholder:"YYYY",className:"w-20 bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-xl text-white/90 placeholder-white/20 py-2 outline-none transition-colors duration-500 font-light"})]}),j!==null&&j>0&&j<120&&T.jsxs("p",{className:"mt-6 text-white/30 text-sm font-light",style:{animation:"fadeInIntro 0.5s ease-out"},children:["Chapter ",j]}),T.jsxs("button",{onClick:ce,disabled:!G,className:"group relative mt-10 px-10 py-3.5 rounded-full bg-transparent text-white/50 hover:text-white/90 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none overflow-hidden",style:{opacity:U?1:0,transition:"opacity 1s ease-out 0.8s, color 0.3s, transform 0.3s",border:"1px solid rgba(140,175,160,0.2)"},children:[T.jsx("div",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-disabled:opacity-0",style:{boxShadow:"0 0 35px rgba(140,175,160,0.2), inset 0 0 20px rgba(140,175,160,0.05)"}}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full group-disabled:translate-x-[-100%] transition-transform duration-700 ease-in-out"}),T.jsx("span",{className:"relative",children:"Begin"})]}),T.jsx("button",{onClick:()=>m("forming"),className:"mt-4 block mx-auto text-xs text-white/20 hover:text-white/40 transition-colors",style:{opacity:U?1:0,transition:"opacity 1s ease-out 1s"},children:"Skip this step"})]}),T.jsx("style",{children:`
          @keyframes fadeInIntro {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `})]})}return T.jsx("div",{ref:u,className:"fixed inset-0 z-50",style:{touchAction:"none",backgroundColor:"#0a0a0a"}})},vM=({show:o,onClose:t,savedLists:i,onLoadList:s,onDeleteList:l,userName:u,playClick:d,playRemove:h})=>o?T.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:T.jsxs("div",{className:"bg-neutral-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-white/10",children:[T.jsxs("div",{className:"sticky top-0 bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-xl font-semibold",children:"Saved Lists"}),T.jsxs("p",{className:"text-sm text-white/50 mt-1",children:[i.length," ",i.length===1?"list":"lists"," saved"]})]}),T.jsx("button",{onClick:()=>{d(),t()},className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:T.jsx("svg",{className:"w-5 h-5 text-white/60",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),T.jsx("div",{className:"p-6 overflow-y-auto max-h-[calc(80vh-80px)]",children:i.length===0?T.jsxs("div",{className:"text-center py-12",children:[T.jsx("svg",{className:"w-16 h-16 mx-auto text-white/20 mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),T.jsx("p",{className:"text-white/50",children:"No saved lists yet"})]}):T.jsx("div",{className:"space-y-3",children:i.map((m,p)=>T.jsx("div",{className:"group bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 transition-all duration-150",children:T.jsxs("div",{className:"flex items-start justify-between gap-4",children:[T.jsxs("div",{className:"flex-1 min-w-0",children:[T.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[T.jsx("h4",{className:"font-medium truncate",children:u?`${u}'s List`:"Bucket List"}),T.jsxs("span",{className:"text-xs text-white/40",children:[m.totalCount," ",m.totalCount===1?"item":"items"]})]}),T.jsxs("p",{className:"text-xs text-white/50",children:["Saved ",m.date," at ",m.time]}),T.jsxs("div",{className:"flex items-center gap-4 mt-3 text-xs text-white/40",children:[T.jsxs("span",{children:[m.items.thisYear.length," this year"]}),T.jsxs("span",{children:[m.items.nextFew.length," next few"]}),T.jsxs("span",{children:[m.items.someday.length," someday"]})]})]}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("button",{onClick:()=>s(m),className:"px-4 py-2 rounded-full bg-[rgb(140,175,160)]/20 hover:bg-[rgb(140,175,160)]/30 text-[rgb(140,175,160)] text-sm font-medium transition-all duration-150 active:scale-95 border border-[rgb(140,175,160)]/20",children:"Load"}),T.jsx("button",{onClick:()=>l(m.id),className:"p-2 rounded-full hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-all duration-150 active:scale-95",children:T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})]})]})},m.id))})})]})}):null,_M=({customTitle:o,setCustomTitle:t,customMeaning:i,setCustomMeaning:s,onCancel:l,onAdd:u})=>{const d=$e.useRef(null);return $e.useEffect(()=>{d.current&&d.current.focus()},[]),T.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-xl",onClick:h=>h.stopPropagation(),children:T.jsxs("div",{className:"w-full max-w-md bg-neutral-800 rounded-3xl p-8 border border-white/10 shadow-2xl",onClick:h=>h.stopPropagation(),children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center",children:T.jsx("svg",{className:"w-5 h-5 text-white/60",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})}),T.jsxs("div",{children:[T.jsx("h2",{className:"text-xl font-semibold",children:"Special Order"}),T.jsx("p",{className:"text-xs text-white/40",children:"Create your own catalog item"})]})]}),T.jsxs("div",{className:"space-y-6",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium",children:"What do you want to do?"}),T.jsx("input",{ref:d,type:"text",value:o,onChange:h=>t(h.target.value),placeholder:"Hike to... / Meet... / Finally...",autoComplete:"off",className:"w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-200"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium",children:"Why does this matter?"}),T.jsx("textarea",{value:i,onChange:h=>s(h.target.value),placeholder:"Why this matters to you...",rows:3,autoComplete:"off",className:"w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-200 resize-none"})]})]}),T.jsxs("div",{className:"flex gap-3 mt-8",children:[T.jsx("button",{onClick:l,className:"flex-1 px-4 py-3.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-150 active:scale-95",children:"Cancel"}),T.jsx("button",{onClick:u,disabled:!o.trim(),className:"flex-1 px-4 py-3.5 rounded-xl bg-white/15 hover:bg-white/20 text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 active:scale-95 border border-white/20",children:"Add to Cart"})]})]})})},bM=({cartItems:o,ceremonyStep:t,startTransition:i})=>{const s=[...o.thisYear,...o.nextFew,...o.someday],l=["rgb(114, 184, 159)","rgb(204, 168, 112)","rgb(216, 152, 152)","rgb(148, 136, 196)","rgb(112, 168, 189)"];return T.jsx("div",{className:"min-h-screen text-white flex items-center justify-center p-6",style:{backgroundColor:"#0a0a0a"},children:T.jsxs("div",{className:"w-full max-w-2xl text-center",children:[t>=1&&T.jsxs("div",{className:"animate-[fadeIn_1.5s_ease-out]",children:[T.jsx("p",{className:"text-sm uppercase tracking-[0.3em] mb-10 text-white/40",children:"These are the experiences"}),T.jsx("p",{className:"text-xl font-light mb-12 text-white/60",children:"you're calling into your life"})]}),t>=2&&T.jsx("div",{className:"space-y-4 mb-12 animate-[fadeIn_0.8s_ease-out]",children:s.map((u,d)=>T.jsx("div",{className:"py-1.5 animate-[pulse_4s_ease-in-out_infinite]",style:{animationDelay:`${d*.15}s`},children:T.jsx("p",{className:"text-2xl font-light",style:{color:l[d%l.length]},children:u.title})},u.id))}),t>=2&&T.jsxs("button",{onClick:i,className:"group relative px-12 py-4 rounded-full font-medium animate-[fadeIn_0.8s_ease-out] transition-all duration-300 active:scale-[0.97] overflow-hidden",style:{background:"linear-gradient(135deg, rgba(140,175,160,0.1) 0%, rgba(175,160,140,0.1) 50%, rgba(160,150,175,0.1) 100%)",border:"1px solid rgba(140,175,160,0.25)"},children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"}),T.jsx("div",{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{boxShadow:"0 0 40px rgba(140,175,160,0.25), inset 0 0 25px rgba(140,175,160,0.08)"}}),T.jsx("span",{className:"relative text-white/60 group-hover:text-white transition-colors duration-300",children:"I'm ready"})]})]})})},yM=({onComplete:o,itemCount:t,playSound:i})=>{const s=$e.useRef(null),l=$e.useRef(null);return $e.useEffect(()=>{if(!s.current)return;const u=new Og,d=new ni(60,window.innerWidth/window.innerHeight,.1,1e3),h=new jg({antialias:!0,alpha:!0});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(657930,1),s.current.appendChild(h.domElement),d.position.z=35;const m=xM(),p=[[.55,.69,.63],[.52,.56,.54],[.54,.52,.5],[.53,.55,.54]],_=7e3,x=new Float32Array(_*3),b=new Float32Array(_*3),S=new Float32Array(_),E=[],A=[];for(let O=0;O<_;O++){const ne=Math.acos(2*Math.random()-1),D=Math.random()*Math.PI*2,R=25+Math.random()*20;x[O*3]=R*Math.sin(ne)*Math.cos(D),x[O*3+1]=R*Math.sin(ne)*Math.sin(D),x[O*3+2]=(Math.random()-.5)*30,E.push({x:0,y:0,z:0}),A.push({phase:Math.random()*Math.PI*2,speed:.4+Math.random()*1.2,noiseOffset:{x:Math.random()*100,y:Math.random()*100,z:Math.random()*100}});const k=p[Math.floor(Math.random()*p.length)];b[O*3]=k[0],b[O*3+1]=k[1],b[O*3+2]=k[2],S[O]=1.5+Math.random()*2.5}const y=new Ti;y.setAttribute("position",new Un(x,3)),y.setAttribute("color",new Un(b,3)),y.setAttribute("size",new Un(S,1));const g=new Ei({uniforms:{uOpacity:{value:0},uTime:{value:0},uPixelRatio:{value:h.getPixelRatio()}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vDist;
        uniform float uPixelRatio;
        uniform float uTime;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvPosition.z;
          float pulse = 1.0 + sin(uTime * 2.5 + position.x * 0.3) * 0.12;
          gl_PointSize = size * pulse * uPixelRatio * (28.0 / vDist);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vDist;
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float d = length(center);
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, d);
          float glow = exp(-d * 3.5) * 0.5;
          alpha = alpha + glow;
          float depthFade = clamp(1.0 - vDist / 50.0, 0.35, 1.0);
          gl_FragColor = vec4(vColor + 0.08, alpha * uOpacity * depthFade);
        }
      `,transparent:!0,depthWrite:!1,blending:Ac}),P=new Pg(y,g);u.add(P);let U=Date.now();const I=3.2,W=()=>{l.current=requestAnimationFrame(W);const O=(Date.now()-U)/1e3,ne=O/I;g.uniforms.uTime.value=O;let D;O<.8?D=O/.8:O>I-.8?D=Math.max(0,(I-O)/.8):D=1,g.uniforms.uOpacity.value=D*.85;const R=y.attributes.position.array;for(let k=0;k<_;k++){const te=k*3,ce=A[k],ge=E[k];let me=R[te],F=R[te+1],j=R[te+2];const G=.025,le=O*.3,xe=m(me*G+ce.noiseOffset.x,F*G,le),L=m(F*G+ce.noiseOffset.y,j*G,le),q=m(j*G+ce.noiseOffset.z,me*G,le);ge.x+=xe*.12*ce.speed,ge.y+=L*.12*ce.speed,ge.z+=q*.06*ce.speed;const pe=Math.sqrt(me*me+F*F+j*j),ye=ne<.5?.015+ne*.03:.03-(ne-.5)*.06;pe>.5&&(ge.x-=me/pe*ye,ge.y-=F/pe*ye,ge.z-=j/pe*ye*.5);const Re=.015+Math.sin(O*2+ce.phase)*.008;ge.x+=-F*Re,ge.y+=me*Re,ge.x+=Math.sin(O*4+ce.phase)*.015,ge.y+=Math.cos(O*3+ce.phase)*.015,ge.x*=.94,ge.y*=.94,ge.z*=.94,R[te]+=ge.x,R[te+1]+=ge.y,R[te+2]+=ge.z}if(y.attributes.position.needsUpdate=!0,d.position.x=Math.sin(O*.4)*6,d.position.y=Math.cos(O*.25)*3,d.position.z=35+Math.sin(O*.5)*4,d.lookAt(0,0,0),O>=I){cancelAnimationFrame(l.current),i&&i(),o();return}h.render(u,d)};W();const z=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),g.uniforms.uPixelRatio.value=h.getPixelRatio()};return window.addEventListener("resize",z),()=>{cancelAnimationFrame(l.current),window.removeEventListener("resize",z),s.current&&h.domElement&&s.current.removeChild(h.domElement),h.dispose()}},[o,t,i]),T.jsx("div",{ref:s,className:"fixed inset-0 z-50",style:{touchAction:"none",backgroundColor:"rgb(10, 10, 10)"}})};function SM(){const[o,t]=$e.useState("intro"),[i,s]=$e.useState(""),[l,u]=$e.useState(""),[d,h]=$e.useState(null),[m,p]=$e.useState([]),[_,x]=$e.useState("places"),[b,S]=$e.useState(null),[E,A]=$e.useState({thisYear:[],nextFew:[],someday:[]}),[y,g]=$e.useState(null),[P,U]=$e.useState(null),[I,W]=$e.useState(!1),[z,O]=$e.useState(0),[ne,D]=$e.useState(!1),[R,k]=$e.useState(""),[te,ce]=$e.useState(""),[ge,me]=$e.useState([]),[F,j]=$e.useState(!1),[G,le]=$e.useState(!1),[xe,L]=$e.useState(""),[q,pe]=$e.useState({save:"idle",copy:"idle",download:"idle"}),[ye,Re]=$e.useState(!1),{playClick:Z,playAdd:ue,playRemove:Ce,playCeremony:Ie,playComplete:ke}=mM(),it=$e.useCallback(()=>{if(!d)return null;const re=new Date,K=new Date(d.year,d.month-1,d.day);let Q=re.getFullYear()-K.getFullYear();const Ae=re.getMonth()-K.getMonth();return(Ae<0||Ae===0&&re.getDate()<K.getDate())&&Q--,Q},[d]),Rt=re=>{m.find(K=>K.id===re.id)||(ue(),p(K=>[...K,re]),W(!0),setTimeout(()=>W(!1),400),g({message:"Added to cart",id:re.id}),setTimeout(()=>g(null),2e3),S(null))},at=re=>{Ce(),p(m.filter(K=>K.id!==re)),A({thisYear:E.thisYear.filter(K=>K.id!==re),nextFew:E.nextFew.filter(K=>K.id!==re),someday:E.someday.filter(K=>K.id!==re)})},gt=(re,K)=>{Z();const Q={thisYear:E.thisYear.filter(Ae=>Ae.id!==re.id),nextFew:E.nextFew.filter(Ae=>Ae.id!==re.id),someday:E.someday.filter(Ae=>Ae.id!==re.id)};Q[K]=[...Q[K],re],A(Q)},H=()=>{if(R.trim()){ue();const re={id:`custom-${Date.now()}`,title:R,subtitle:"Personal dream",meaning:te,cost:0,duration:"Your timeline",difficulty:0,leadTime:"You decide",bestFor:"You",accent:"#a89abc",isCustom:!0};p([...m,re]),W(!0),setTimeout(()=>W(!1),400),k(""),ce(""),D(!1),g({message:"Added to cart",id:re.id}),setTimeout(()=>g(null),2e3)}},lt=()=>{Z(),t("ceremony"),O(0),setTimeout(()=>{O(1),Ie()},400),setTimeout(()=>{O(2),ke()},1400)},Fe=()=>{Z(),Re(!0)},ht=()=>{Re(!1),t("export")},He=()=>{const re=it();let K="I've created a bucket list and I'd like your help planning and researching these goals. ";return l&&(K+=`My name is ${l}`,re&&(K+=` and I'm ${re} years old`),K+=". "),K+=`Here are my bucket list items organized by when I'd like to achieve them:

`,E.thisYear.length>0&&(K+=`**THIS YEAR:**
`,E.thisYear.forEach((Q,Ae)=>{K+=`${Ae+1}. ${Q.title}
`}),K+=`
`),E.nextFew.length>0&&(K+=`**NEXT FEW YEARS:**
`,E.nextFew.forEach((Q,Ae)=>{K+=`${Ae+1}. ${Q.title}
`}),K+=`
`),E.someday.length>0&&(K+=`**SOMEDAY:**
`,E.someday.forEach((Q,Ae)=>{K+=`${Ae+1}. ${Q.title}
`}),K+=`
`),K+=`---

`,K+=`Please help me by:
`,K+=`1. **Research** each item - what does it actually involve, what should I know?
`,K+=`2. **Practical steps** - break down the "This Year" items into actionable first steps I can take this week
`,K+=`3. **Estimated costs & time** - rough budget and time commitment for each
`,K+=`4. **Tips & recommendations** - insider advice, best seasons to do things, things to avoid
`,K+=`5. **Connections** - are any of these items related? Could I combine trips or experiences?

`,K+='Start with my "This Year" priorities since those are most urgent, then cover the rest.',K},_t=()=>{const re=He();L(re),le(!0)},Ze=()=>{navigator.clipboard.writeText(xe).then(()=>{le(!1),g({message:"Copied!"}),setTimeout(()=>g(null),1500)})},Je=()=>{const re=[...E.thisYear,...E.nextFew,...E.someday];re.length!==0&&(pe(K=>({...K,save:"loading"})),setTimeout(()=>{const K={id:Date.now(),date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),items:JSON.parse(JSON.stringify(E)),totalCount:re.length};me(Q=>[K,...Q]),pe(Q=>({...Q,save:"success"})),g({message:"List saved to your collection!"}),setTimeout(()=>g(null),2e3),setTimeout(()=>pe(Q=>({...Q,save:"idle"})),2e3)},400))},N=re=>{A(re.items),p([...re.items.thisYear,...re.items.nextFew,...re.items.someday]),j(!1),t("export"),Z()},M=re=>{me(K=>K.filter(Q=>Q.id!==re)),Ce()},Y=()=>{const re=[...E.thisYear,...E.nextFew,...E.someday],K=it(),Q=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Bucket List - ${new Date().getFullYear()}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a1a; 
      color: white; 
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
    }
    .card {
      background: #141414;
      border-radius: 24px;
      padding: 64px;
      max-width: 800px;
      width: 100%;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .header { margin-bottom: 48px; }
    .divider {
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, rgb(140, 175, 160), rgb(175, 160, 140), rgb(160, 150, 175));
      margin-bottom: 32px;
    }
    h1 { 
      font-size: 48px; 
      font-weight: 200; 
      line-height: 1.1;
      color: rgba(255,255,255,0.9);
      margin-bottom: 16px;
    }
    .year { 
      font-size: 14px; 
      color: rgba(255,255,255,0.5);
      font-weight: 500;
    }
    .columns { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 40px;
      margin-bottom: 48px;
    }
    .column-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
    }
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .column-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 500;
    }
    .items { display: flex; flex-direction: column; gap: 16px; }
    .item { display: flex; align-items: baseline; gap: 12px; }
    .number { 
      font-size: 11px; 
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .title { font-size: 14px; line-height: 1.5; }
    .empty { font-size: 14px; font-style: italic; color: rgba(255,255,255,0.2); }
    .footer {
      padding-top: 32px;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .count { 
      font-size: 11px; 
      text-transform: uppercase; 
      letter-spacing: 0.2em;
      font-weight: 500;
      color: rgba(255,255,255,0.4);
    }
    .brand { font-size: 11px; color: rgba(255,255,255,0.3); }
    @media (max-width: 600px) {
      .columns { grid-template-columns: 1fr; gap: 32px; }
      .card { padding: 32px; }
      h1 { font-size: 32px; }
    }
    @media print {
      body { 
        background: white; 
        padding: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .card { 
        box-shadow: none; 
        background: #141414 !important;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="divider"></div>
      <h1>${l?`${l}'s<br>Dreams`:"A Life<br>Worth Living"}</h1>
      <p class="year">${K?`Chapter ${K} · `:""}${new Date().getFullYear()} and beyond</p>
    </div>
    
    <div class="columns">
      <div>
        <div class="column-header">
          <span class="dot" style="background: rgb(140, 175, 160);"></span>
          <span class="column-title" style="color: rgb(140, 175, 160);">This Year</span>
        </div>
        <div class="items">
          ${E.thisYear.length>0?E.thisYear.map((Ge,V)=>`
              <div class="item">
                <span class="number" style="color: rgba(140, 175, 160, 0.5);">${String(V+1).padStart(2,"0")}</span>
                <span class="title" style="color: rgba(255,255,255,0.9);">${Ge.title}</span>
              </div>
            `).join(""):'<p class="empty">Empty</p>'}
        </div>
      </div>
      
      <div>
        <div class="column-header">
          <span class="dot" style="background: rgb(175, 160, 140);"></span>
          <span class="column-title" style="color: rgb(175, 160, 140);">Next Few Years</span>
        </div>
        <div class="items">
          ${E.nextFew.length>0?E.nextFew.map((Ge,V)=>`
              <div class="item">
                <span class="number" style="color: rgba(175, 160, 140, 0.5);">${String(V+1).padStart(2,"0")}</span>
                <span class="title" style="color: rgba(255,255,255,0.75);">${Ge.title}</span>
              </div>
            `).join(""):'<p class="empty">Empty</p>'}
        </div>
      </div>
      
      <div>
        <div class="column-header">
          <span class="dot" style="background: rgb(160, 150, 175);"></span>
          <span class="column-title" style="color: rgb(160, 150, 175);">Someday</span>
        </div>
        <div class="items">
          ${E.someday.length>0?E.someday.map((Ge,V)=>`
              <div class="item">
                <span class="number" style="color: rgba(160, 150, 175, 0.5);">${String(V+1).padStart(2,"0")}</span>
                <span class="title" style="color: rgba(255,255,255,0.6);">${Ge.title}</span>
              </div>
            `).join(""):'<p class="empty">Empty</p>'}
        </div>
      </div>
    </div>
    
    <div class="footer">
      <span class="count">${re.length} Dreams</span>
      <span class="brand">The Life Store</span>
    </div>
  </div>
</body>
</html>`,Ae=new Blob([Q],{type:"text/html"}),De=URL.createObjectURL(Ae),Ne=document.createElement("a");Ne.href=De,Ne.download=`bucket-list-${new Date().getFullYear()}.html`,document.body.appendChild(Ne),Ne.click(),document.body.removeChild(Ne),URL.revokeObjectURL(De),pe(Ge=>({...Ge,download:"success"})),g({message:"Card downloaded!"}),setTimeout(()=>g(null),2e3),setTimeout(()=>pe(Ge=>({...Ge,download:"idle"})),2e3)},_e=(re,K)=>{U(K),re.dataTransfer.effectAllowed="move"},Se=re=>{re.preventDefault(),re.dataTransfer.dropEffect="move"},de=(re,K)=>{re.preventDefault(),P&&(gt(P,K),U(null))},Ye=({level:re,accent:K})=>T.jsx("div",{className:"flex gap-0.5 items-center",children:[1,2,3,4].map(Q=>T.jsx("div",{className:"w-1.5 h-3.5 rounded-sm transition-all duration-300",style:{backgroundColor:Q<=re?K:"rgba(255,255,255,0.2)",opacity:Q<=re?.8:1}},Q))}),ze=({level:re,accent:K})=>T.jsx("div",{className:"flex gap-1 items-center",children:[1,2,3,4,5].map(Q=>T.jsx("div",{className:"w-1.5 h-1.5 rounded-full transition-all duration-300",style:{backgroundColor:Q<=re?K:"rgba(255,255,255,0.2)",opacity:Q<=re?.8:1}},Q))});if(o==="intro")return T.jsx(gM,{onComplete:()=>t("store"),seekingWord:i,setSeekingWord:s,setUserName:u,setUserBirthday:h});if(ye)return T.jsx(yM,{onComplete:ht,itemCount:m.length,playSound:ke});if(o==="ceremony")return T.jsx(bM,{cartItems:E,ceremonyStep:z,startTransition:Fe});if(o==="cart"){const re=m.filter(Q=>![...E.thisYear,...E.nextFew,...E.someday].find(Ae=>Ae.id===Q.id)),K=({item:Q,zone:Ae})=>{const De={thisYear:"rgba(140,175,160,0.15)",nextFew:"rgba(175,160,140,0.15)",someday:"rgba(160,150,175,0.15)"},Ne={thisYear:"rgba(140,175,160,0.25)",nextFew:"rgba(175,160,140,0.25)",someday:"rgba(160,150,175,0.25)"};return T.jsx("div",{draggable:!0,onDragStart:Ge=>_e(Ge,Q),className:"group relative p-4 rounded-xl cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all duration-150 hover:brightness-110",style:{background:De[Ae],border:`1px solid ${Ne[Ae]}`},children:T.jsxs("div",{className:"flex items-start justify-between",children:[T.jsx("div",{className:"flex-1",children:T.jsx("h4",{className:"text-sm font-medium",children:Q.title})}),T.jsx("button",{onClick:()=>at(Q.id),className:"opacity-0 group-hover:opacity-100 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-150 hover:bg-white/20 active:scale-90",children:T.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})};return T.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white",children:[T.jsx("header",{className:"sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-xl border-b border-white/10",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[T.jsxs("button",{onClick:()=>{Z(),t("store")},className:"flex items-center gap-2 text-white/60 hover:text-white transition-all duration-150 active:scale-95",children:[T.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),T.jsx("span",{className:"text-sm font-medium",children:"Continue Shopping"})]}),T.jsxs("div",{className:"text-center",children:[T.jsx("h1",{className:"text-lg font-semibold tracking-tight",children:"Your Cart"}),T.jsxs("p",{className:"text-xs text-white/50 mt-0.5",children:[m.length," experiences selected"]})]}),T.jsx("div",{className:"w-32"})]})}),m.length===0?T.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[60vh] px-6",children:[T.jsx("div",{className:"w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6",children:T.jsx("svg",{className:"w-10 h-10 text-white/20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})})}),T.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Your cart is empty"}),T.jsx("p",{className:"text-white/50 text-sm text-center max-w-sm",children:"Return to The Life Store and add experiences that call to you."}),T.jsx("button",{onClick:()=>{Z(),t("store")},className:"mt-6 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-150 border border-white/20 active:scale-95",children:"Browse Departments"})]}):T.jsxs("main",{className:"max-w-7xl mx-auto px-6 py-8",children:[re.length>0&&T.jsxs("div",{className:"mb-12",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx("h2",{className:"text-sm text-white/50 uppercase tracking-wider font-medium",children:"Drag to schedule"}),T.jsx("div",{className:"flex-1 h-px bg-white/10"})]}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:re.map(Q=>T.jsx("div",{draggable:!0,onDragStart:Ae=>_e(Ae,Q),className:"group relative p-4 rounded-xl cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all duration-150 hover:brightness-110",style:{background:Q.accent?`${Q.accent}15`:"rgba(255,255,255,0.1)",border:`1px solid ${Q.accent?`${Q.accent}25`:"rgba(255,255,255,0.1)"}`},children:T.jsxs("div",{className:"flex items-start justify-between",children:[T.jsxs("div",{className:"flex-1",children:[T.jsx("h4",{className:"text-sm font-medium",children:Q.title}),T.jsx("p",{className:"text-xs text-white/50 mt-1",children:Q.subtitle})]}),T.jsx("button",{onClick:()=>at(Q.id),className:"opacity-0 group-hover:opacity-100 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-150 hover:bg-white/20 active:scale-90",children:T.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})},Q.id))})]}),T.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[T.jsxs("div",{onDragOver:Se,onDrop:Q=>de(Q,"thisYear"),className:"rounded-2xl border-2 border-dashed p-6 min-h-[300px] transition-all duration-200",style:{borderColor:P?"rgba(140,175,160,0.4)":"rgba(140,175,160,0.2)",background:P?"rgba(140,175,160,0.08)":"rgba(140,175,160,0.03)"},children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{background:"rgb(140,175,160)",boxShadow:"0 0 8px rgba(140,175,160,0.5)"}}),T.jsx("h3",{className:"text-sm font-medium uppercase tracking-wider",style:{color:"rgba(140,175,160,0.8)"},children:"This Year"})]}),E.thisYear.length>0?T.jsx("div",{className:"space-y-3",children:E.thisYear.map(Q=>T.jsx(K,{item:Q,zone:"thisYear"},Q.id))}):T.jsx("p",{className:"text-white/30 text-sm text-center py-8",children:"Drop experiences here"})]}),T.jsxs("div",{onDragOver:Se,onDrop:Q=>de(Q,"nextFew"),className:"rounded-2xl border-2 border-dashed p-6 min-h-[300px] transition-all duration-200",style:{borderColor:P?"rgba(175,160,140,0.4)":"rgba(175,160,140,0.2)",background:P?"rgba(175,160,140,0.08)":"rgba(175,160,140,0.03)"},children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{background:"rgb(175,160,140)",boxShadow:"0 0 8px rgba(175,160,140,0.5)"}}),T.jsx("h3",{className:"text-sm font-medium uppercase tracking-wider",style:{color:"rgba(175,160,140,0.8)"},children:"Next Few Years"})]}),E.nextFew.length>0?T.jsx("div",{className:"space-y-3",children:E.nextFew.map(Q=>T.jsx(K,{item:Q,zone:"nextFew"},Q.id))}):T.jsx("p",{className:"text-white/30 text-sm text-center py-8",children:"Drop experiences here"})]}),T.jsxs("div",{onDragOver:Se,onDrop:Q=>de(Q,"someday"),className:"rounded-2xl border-2 border-dashed p-6 min-h-[300px] transition-all duration-200",style:{borderColor:P?"rgba(160,150,175,0.4)":"rgba(160,150,175,0.2)",background:P?"rgba(160,150,175,0.08)":"rgba(160,150,175,0.03)"},children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{background:"rgb(160,150,175)",boxShadow:"0 0 8px rgba(160,150,175,0.5)"}}),T.jsx("h3",{className:"text-sm font-medium uppercase tracking-wider",style:{color:"rgba(160,150,175,0.8)"},children:"Someday"})]}),E.someday.length>0?T.jsx("div",{className:"space-y-3",children:E.someday.map(Q=>T.jsx(K,{item:Q,zone:"someday"},Q.id))}):T.jsx("p",{className:"text-white/30 text-sm text-center py-8",children:"Drop experiences here"})]})]}),T.jsxs("div",{className:"mt-12 flex flex-col items-center",children:[T.jsx("p",{className:"text-xs text-white/25 mb-4 tracking-wide",children:re.length>0?"Organize your timeline, then":"When you're ready"}),T.jsxs("button",{onClick:lt,disabled:[...E.thisYear,...E.nextFew,...E.someday].length===0,className:"group relative px-14 py-4 rounded-2xl font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.97] overflow-hidden hover:scale-[1.02] hover:-translate-y-0.5",style:{background:"linear-gradient(135deg, rgba(140,175,160,0.15) 0%, rgba(175,160,140,0.15) 50%, rgba(160,150,175,0.15) 100%)",border:"1px solid rgba(140,175,160,0.3)",boxShadow:"0 4px 30px rgba(140,175,160,0.1)"},children:[T.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{boxShadow:"0 0 40px rgba(140,175,160,0.25), inset 0 0 30px rgba(140,175,160,0.08)"}}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"}),T.jsxs("span",{className:"relative flex items-center gap-3 text-white/80 group-hover:text-white transition-colors duration-300",children:[T.jsx("svg",{className:"w-5 h-5 text-[rgb(140,175,160)]/70 group-hover:text-[rgb(140,175,160)] transition-all duration-300 group-hover:scale-110",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),T.jsx("span",{className:"text-base",children:"Complete my list"}),T.jsx("svg",{className:"w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]})]})]})]})}const Ke=()=>T.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white relative",children:[T.jsx("header",{className:"sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-xl border-b border-white/10",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("div",{className:"relative w-7 h-7 flex items-center justify-center",children:T.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",children:[T.jsx("path",{d:"M12 2L12 6M12 18L12 22M2 12L6 12M18 12L22 12",stroke:"rgb(140,175,160)",strokeWidth:"1.5",strokeLinecap:"round",className:"opacity-70"}),T.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"rgb(140,175,160)",className:"opacity-50"})]})}),T.jsxs("div",{children:[T.jsx("h1",{className:"text-lg font-semibold tracking-tight",children:"The Life Store"}),T.jsx("p",{className:"text-xs text-white/40 mt-0.5",children:"Build your bucket list"})]}),l&&T.jsxs("div",{className:"hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-white/10",children:[T.jsx("span",{className:"text-sm text-white/50",children:l}),it()&&T.jsxs("span",{className:"text-xs text-[rgb(140,175,160)]/60",children:["Chapter ",it()]})]})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[ge.length>0&&T.jsxs("button",{onClick:()=>{Z(),j(!0)},className:"flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white/70 text-sm transition-all duration-150 active:scale-95",children:[T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),T.jsx("span",{children:ge.length})]}),T.jsxs("button",{onClick:()=>{Z(),t("cart")},className:"flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-150 active:scale-95",children:[T.jsx("svg",{className:"w-4 h-4 text-white/60",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})}),T.jsx("span",{className:"text-sm font-medium",children:"Cart"}),m.length>0&&T.jsx("span",{className:`flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-white/20 text-white text-xs font-medium transition-transform duration-300 ${I?"scale-125":"scale-100"}`,children:m.length})]})]})]})}),T.jsx("nav",{className:"sticky top-[73px] z-30 bg-neutral-900/80 backdrop-blur-xl border-b border-white/10",children:T.jsx("div",{className:"max-w-7xl mx-auto px-6",children:T.jsx("div",{className:"flex gap-1 py-3 overflow-x-auto scrollbar-hide",children:Object.keys(bc).map(re=>T.jsx("button",{onClick:()=>{Z(),x(re)},className:`px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all duration-150 active:scale-95 ${_===re?"bg-white/15 text-white font-medium":"text-white/50 hover:text-white/70 hover:bg-white/5"}`,children:bc[re].name},re))})})}),T.jsxs("main",{className:"max-w-7xl mx-auto px-6 py-8",children:[T.jsx("div",{className:"mb-8 pb-6 border-b border-white/10",children:T.jsxs("div",{className:"flex items-end justify-between",children:[T.jsxs("div",{children:[T.jsx("p",{className:"text-xs uppercase tracking-[0.2em] mb-2 text-white/40",children:"Department"}),T.jsx("h2",{className:"text-3xl font-light tracking-tight",children:bc[_].name}),T.jsx("div",{className:"h-px mt-3 mb-2",style:{background:"linear-gradient(90deg, rgba(140,175,160,0.5), rgba(175,160,140,0.3), transparent)"}}),T.jsx("p",{className:"text-white/50 text-sm",children:bc[_].description})]}),T.jsxs("p",{className:"text-white/30 text-sm",children:[ug[_].length," experiences"]})]})}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:ug[_].map(re=>{const K=m.find(Ae=>Ae.id===re.id),Q=b===re.id;return T.jsxs("div",{onClick:()=>{Z(),S(Q?null:re.id)},className:`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out ${Q?"scale-[1.03] shadow-2xl shadow-black/50 z-20":"hover:scale-[1.02] hover:shadow-xl z-10"}`,style:Q?{boxShadow:`0 25px 50px -12px ${re.accent}30`}:{},children:[T.jsx("div",{className:"absolute inset-0 bg-neutral-800/60"}),T.jsx("div",{className:"absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-40",style:{background:`linear-gradient(135deg, ${re.accent}40, transparent)`}}),T.jsxs("div",{className:`relative p-6 flex flex-col transition-all duration-300 ease-out ${Q?"min-h-[380px]":"min-h-[220px]"}`,children:[T.jsxs("div",{className:"flex justify-between items-start",children:[T.jsxs("div",{className:"flex-1",children:[T.jsx("h3",{className:"text-lg font-medium leading-tight mb-1.5 pr-8",children:re.title}),T.jsx("p",{className:"text-white/50 text-sm",children:re.subtitle})]}),T.jsx("button",{onClick:Ae=>{Ae.stopPropagation(),K?at(re.id):Rt(re)},className:`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 shadow-lg active:scale-90 ${K?"text-white":"bg-white/20 hover:bg-white/30 text-white border border-white/20"}`,style:K?{backgroundColor:re.accent}:{},children:K?T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}):T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})})})]}),T.jsxs("div",{className:`overflow-hidden transition-all duration-300 ease-out ${Q?"max-h-[300px] opacity-100 mt-5":"max-h-0 opacity-0 mt-0"}`,children:[T.jsxs("div",{className:"space-y-2 text-sm pb-4 border-b border-white/10",children:[T.jsxs("div",{className:"flex justify-between py-1",children:[T.jsx("span",{className:"text-white/40",children:"Plan ahead"}),T.jsx("span",{className:"text-white/80 font-medium",children:re.leadTime})]}),T.jsxs("div",{className:"flex justify-between py-1",children:[T.jsx("span",{className:"text-white/40",children:"Best for"}),T.jsx("span",{className:"text-white/80 font-medium",children:re.bestFor})]}),T.jsxs("div",{className:"flex justify-between py-1",children:[T.jsx("span",{className:"text-white/40",children:"Duration"}),T.jsx("span",{className:"text-white/80 font-medium",children:re.duration})]})]}),!K&&T.jsxs("button",{onClick:Ae=>{Ae.stopPropagation(),Rt(re)},className:"group w-full mt-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden",style:{backgroundColor:re.accent,color:"#0a0a0a",boxShadow:`0 4px 20px ${re.accent}40`},children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"}),T.jsx("svg",{className:"w-5 h-5 relative",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),T.jsx("span",{className:"relative font-semibold",children:"Add to my life"})]}),K&&T.jsx("div",{className:"pt-4",children:T.jsxs("div",{className:"py-3 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2",style:{backgroundColor:`${re.accent}20`,color:re.accent,border:`1px solid ${re.accent}30`},children:[T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),"Added to your life"]})})]}),T.jsxs("div",{className:`flex items-end justify-between pt-4 border-t border-white/10 mt-auto transition-all duration-300 ${Q?"opacity-70":"opacity-100"}`,children:[T.jsxs("div",{className:"flex flex-col gap-2.5",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx(Ye,{level:re.cost,accent:re.accent}),T.jsx("span",{className:"text-white/40 text-xs font-medium",children:"Investment"})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx(ze,{level:re.difficulty,accent:re.accent}),T.jsx("span",{className:"text-white/40 text-xs font-medium",children:"Effort"})]})]}),T.jsxs("div",{className:"text-right",children:[T.jsx("p",{className:`text-xs font-medium transition-all duration-300 ${Q?"text-white/40":"text-white/70"}`,children:re.leadTime}),T.jsx("p",{className:"text-white/40 text-xs mt-1",children:re.bestFor})]})]}),T.jsx("div",{className:`absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/30 uppercase tracking-wider transition-opacity duration-300 ${Q?"opacity-100":"opacity-0 group-hover:opacity-100"}`,children:Q?"Click to collapse":"Click to expand"})]})]},re.id)})}),T.jsx("div",{className:"mt-12 flex justify-center",children:T.jsxs("button",{onClick:()=>{Z(),D(!0)},className:"group flex items-center gap-4 px-8 py-5 rounded-2xl border border-dashed border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-150 active:scale-[0.98]",children:[T.jsx("div",{className:"w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition-all duration-150",children:T.jsx("svg",{className:"w-6 h-6 text-white/50",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})})}),T.jsxs("div",{className:"text-left",children:[T.jsx("p",{className:"text-sm font-medium",children:"Special Order"}),T.jsx("p",{className:"text-xs text-white/40 mt-0.5",children:"Add something not in our catalog"})]})]})})]}),ne&&T.jsx(_M,{customTitle:R,setCustomTitle:k,customMeaning:te,setCustomMeaning:ce,onCancel:()=>{Z(),D(!1),k(""),ce("")},onAdd:H}),y&&T.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-50",children:T.jsxs("div",{className:"flex items-center gap-3 px-6 py-3.5 rounded-2xl backdrop-blur-xl text-white text-sm font-medium shadow-2xl",style:{background:"linear-gradient(135deg, rgba(140,175,160,0.25) 0%, rgba(160,150,175,0.25) 100%)",border:"1px solid rgba(140,175,160,0.3)",boxShadow:"0 10px 40px rgba(0,0,0,0.3), 0 0 30px rgba(140,175,160,0.15)",animation:"notificationPop 0.4s cubic-bezier(0.34,1.56,0.64,1)"},children:[T.jsx("div",{className:"w-6 h-6 rounded-full bg-[rgb(140,175,160)] flex items-center justify-center",children:T.jsx("svg",{className:"w-3.5 h-3.5 text-[#0a0a0a]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:3,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),T.jsx("span",{className:"text-white/90",children:y.message})]})})]});if(o==="export"){const re=[...E.thisYear,...E.nextFew,...E.someday],K=it(),Q={sage:"rgb(114, 184, 159)",sand:"rgb(204, 168, 112)",lilac:"rgb(164, 144, 196)"};return T.jsxs("div",{className:"min-h-screen text-white",style:{backgroundColor:"#0a0a0a"},children:[T.jsx("header",{className:"sticky top-0 z-40 backdrop-blur-xl border-b border-white/10",style:{backgroundColor:"rgba(10, 10, 10, 0.9)"},children:T.jsx("div",{className:"max-w-4xl mx-auto px-6 py-4 flex items-center justify-between",children:T.jsxs("button",{onClick:()=>{Z(),t("cart")},className:"flex items-center gap-2 text-white/50 hover:text-white transition-all duration-150 active:scale-95",children:[T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),T.jsx("span",{className:"text-sm",children:"Edit list"})]})})}),T.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-12",children:[T.jsx("div",{className:"bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10",style:{animation:"fadeIn 0.5s ease-out"},children:T.jsxs("div",{className:"p-12 md:p-16 aspect-[3/4] flex flex-col",children:[T.jsxs("div",{className:"mb-12 md:mb-16",children:[T.jsx("div",{className:"w-20 h-0.5 mb-8",style:{background:`linear-gradient(90deg, ${Q.sage}, ${Q.sand}, ${Q.lilac})`}}),l?T.jsxs(T.Fragment,{children:[T.jsxs("h1",{className:"text-4xl md:text-5xl font-extralight tracking-tight mb-3 text-white/90",children:[l,"'s",T.jsx("br",{}),"Dreams"]}),T.jsxs("p",{className:"text-sm font-medium text-white/40",children:[K?`Chapter ${K} · `:"",new Date().getFullYear()," and beyond"]})]}):T.jsxs(T.Fragment,{children:[T.jsxs("h1",{className:"text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white/90",children:["A Life",T.jsx("br",{}),"Worth Living"]}),T.jsxs("p",{className:"text-sm font-medium text-white/40",children:[new Date().getFullYear()," and beyond"]})]})]}),T.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-6 md:gap-10",children:[T.jsxs("div",{children:[T.jsxs("h2",{className:"text-xs uppercase tracking-[0.2em] mb-6 font-medium flex items-center gap-2",style:{color:Q.sage},children:[T.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:Q.sage}}),"This Year"]}),T.jsxs("div",{className:"space-y-4",children:[E.thisYear.map((Ae,De)=>T.jsxs("div",{className:"flex items-start gap-3",children:[T.jsx("span",{className:"text-xs tabular-nums font-medium mt-0.5",style:{color:"rgba(140, 175, 160, 0.5)"},children:String(De+1).padStart(2,"0")}),T.jsx("p",{className:`text-sm leading-relaxed text-white/90 ${Ae.isCustom?"italic":""}`,children:Ae.title})]},Ae.id)),E.thisYear.length===0&&T.jsx("p",{className:"text-white/20 text-sm italic",children:"Empty"})]})]}),T.jsxs("div",{children:[T.jsxs("h2",{className:"text-xs uppercase tracking-[0.2em] mb-6 font-medium flex items-center gap-2",style:{color:Q.sand},children:[T.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:Q.sand}}),"Next Few Years"]}),T.jsxs("div",{className:"space-y-4",children:[E.nextFew.map((Ae,De)=>T.jsxs("div",{className:"flex items-start gap-3",children:[T.jsx("span",{className:"text-xs tabular-nums font-medium mt-0.5",style:{color:"rgba(175, 160, 140, 0.5)"},children:String(De+1).padStart(2,"0")}),T.jsx("p",{className:`text-sm leading-relaxed text-white/75 ${Ae.isCustom?"italic":""}`,children:Ae.title})]},Ae.id)),E.nextFew.length===0&&T.jsx("p",{className:"text-white/20 text-sm italic",children:"Empty"})]})]}),T.jsxs("div",{children:[T.jsxs("h2",{className:"text-xs uppercase tracking-[0.2em] mb-6 font-medium flex items-center gap-2",style:{color:Q.lilac},children:[T.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:Q.lilac}}),"Someday"]}),T.jsxs("div",{className:"space-y-4",children:[E.someday.map((Ae,De)=>T.jsxs("div",{className:"flex items-start gap-3",children:[T.jsx("span",{className:"text-xs tabular-nums font-medium mt-0.5",style:{color:"rgba(160, 150, 175, 0.5)"},children:String(De+1).padStart(2,"0")}),T.jsx("p",{className:`text-sm leading-relaxed text-white/60 ${Ae.isCustom?"italic":""}`,children:Ae.title})]},Ae.id)),E.someday.length===0&&T.jsx("p",{className:"text-white/20 text-sm italic",children:"Empty"})]})]})]}),T.jsxs("div",{className:"mt-12 md:mt-16 pt-8 border-t border-white/10 flex justify-between items-end",children:[T.jsxs("p",{className:"text-xs uppercase tracking-widest font-medium text-white/35",children:[re.length," Dreams"]}),T.jsx("p",{className:"text-xs text-white/25",children:"The Life Store"})]})]})}),T.jsxs("div",{className:"mt-8 animate-[fadeIn_0.5s_ease-out_0.2s_both]",children:[T.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3",children:[T.jsxs("button",{onClick:Je,disabled:q.save!=="idle",className:`group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.95] overflow-hidden ${q.save==="success"?"bg-[rgba(140,175,160,0.15)] border-[rgba(140,175,160,0.4)]":"bg-transparent hover:bg-white/[0.04] border-[rgba(160,150,175,0.15)] hover:border-[rgba(160,150,175,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(160,150,175,0.15)]"} border`,children:[T.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(160,150,175,0.05)] via-transparent to-[rgba(140,175,160,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),T.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"}),q.save==="loading"?T.jsxs("svg",{className:"w-4 h-4 text-[rgb(160,150,175)] animate-spin",fill:"none",viewBox:"0 0 24 24",children:[T.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),T.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):q.save==="success"?T.jsx("svg",{className:"w-4 h-4 text-[rgb(140,175,160)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}):T.jsx("svg",{className:"w-4 h-4 text-[rgb(160,150,175)]/50 group-hover:text-[rgb(160,150,175)] transition-all duration-300 group-hover:scale-125 group-active:scale-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"})}),T.jsx("span",{className:`text-sm transition-all duration-300 ${q.save==="success"?"text-[rgb(140,175,160)]":"text-white/50 group-hover:text-white/90"}`,children:q.save==="success"?"Saved!":q.save==="loading"?"Saving...":"Save to my lists"})]}),T.jsxs("button",{onClick:_t,className:"group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-[rgba(140,175,160,0.15)] hover:border-[rgba(140,175,160,0.4)] transition-all duration-300 active:scale-[0.95] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(140,175,160,0.15)] overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(140,175,160,0.05)] via-transparent to-[rgba(175,160,140,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),T.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"}),T.jsx("svg",{className:"w-4 h-4 text-[rgb(140,175,160)]/50 group-hover:text-[rgb(140,175,160)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"})}),T.jsx("span",{className:"text-sm text-white/50 group-hover:text-white/90 transition-all duration-300",children:"Plan with Claude"})]}),T.jsxs("button",{onClick:Y,disabled:q.download==="success",className:`group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.95] overflow-hidden ${q.download==="success"?"bg-[rgba(175,160,140,0.15)] border-[rgba(175,160,140,0.4)]":"bg-transparent hover:bg-white/[0.04] border-[rgba(175,160,140,0.15)] hover:border-[rgba(175,160,140,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(175,160,140,0.15)]"} border`,children:[T.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(175,160,140,0.05)] via-transparent to-[rgba(160,150,175,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),T.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"}),q.download==="success"?T.jsx("svg",{className:"w-4 h-4 text-[rgb(175,160,140)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}):T.jsx("svg",{className:"w-4 h-4 text-[rgb(175,160,140)]/50 group-hover:text-[rgb(175,160,140)] transition-all duration-300 group-hover:translate-y-1 group-active:translate-y-1.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),T.jsx("span",{className:`text-sm transition-all duration-300 ${q.download==="success"?"text-[rgb(175,160,140)]":"text-white/50 group-hover:text-white/90"}`,children:q.download==="success"?"Downloaded!":"Download card"})]})]}),T.jsx("p",{className:"text-center text-xs text-white/20 mt-4",children:"Saved lists persist for this session • Downloaded cards can be opened in any browser"})]}),T.jsxs("div",{className:"mt-16 text-center",children:[T.jsx("p",{className:"text-white/20 text-xs italic max-w-sm mx-auto",children:'"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience."'}),T.jsx("p",{className:"text-white/15 text-[10px] mt-2 tracking-wide",children:"— Eleanor Roosevelt"})]}),T.jsxs("div",{className:"mt-12 flex flex-wrap items-center justify-center gap-4",children:[T.jsxs("button",{onClick:()=>{Z(),u(""),h(null),p([]),A({thisYear:[],nextFew:[],someday:[]}),t("intro")},className:"group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]",children:[T.jsx("svg",{className:"w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),T.jsx("span",{className:"text-sm text-white/50 group-hover:text-white/80 transition-colors",children:"Create a new list"})]}),T.jsxs("button",{onClick:()=>{Z(),t("store")},className:"group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]",children:[T.jsx("svg",{className:"w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"})}),T.jsx("span",{className:"text-sm text-white/50 group-hover:text-white/80 transition-colors",children:"Back to the store"})]})]})]})]})}return T.jsxs(T.Fragment,{children:[T.jsx(vM,{show:F,onClose:()=>j(!1),savedLists:ge,onLoadList:N,onDeleteList:M,userName:l,playClick:Z,playRemove:Ce}),G&&T.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]",children:T.jsxs("div",{className:"w-full max-w-lg bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl animate-[scaleIn_0.2s_ease-out]",children:[T.jsxs("div",{className:"p-5 border-b border-white/10",children:[T.jsxs("div",{className:"flex items-center justify-between mb-3",children:[T.jsx("h2",{className:"text-base font-medium text-white/90",children:"Plan with Claude"}),T.jsx("button",{onClick:()=>le(!1),className:"p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all",children:T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),T.jsx("p",{className:"text-sm text-white/50",children:"This prompt will ask Claude to research your bucket list items and help you plan how to achieve them."})]}),T.jsx("div",{className:"p-4",children:T.jsx("div",{className:"bg-black/30 rounded-xl p-4 max-h-48 overflow-y-auto font-mono text-xs text-white/60 whitespace-pre-wrap border border-white/5",children:xe})}),T.jsxs("div",{className:"p-4 pt-0 space-y-3",children:[T.jsxs("button",{onClick:Ze,className:"w-full py-3.5 rounded-xl bg-[rgba(140,175,160,0.15)] hover:bg-[rgba(140,175,160,0.25)] border border-[rgba(140,175,160,0.3)] text-sm font-medium text-white/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2",children:[T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})}),"Copy prompt"]}),T.jsxs("a",{href:"https://claude.ai/new",target:"_blank",rel:"noopener noreferrer",className:"w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white/80 transition-all flex items-center justify-center gap-2",children:[T.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})}),"Open Claude.ai"]}),T.jsx("p",{className:"text-xs text-white/30 text-center pt-1",children:"Copy the prompt, then paste it into a new Claude conversation"})]})]})}),T.jsx(Ke,{}),T.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes notificationPop {
          0% { opacity: 0; transform: translate(-50%, 30px) scale(0.8); }
          60% { opacity: 1; transform: translate(-50%, -5px) scale(1.02); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `})]})}a1.createRoot(document.getElementById("root")).render(T.jsx($e.StrictMode,{children:T.jsx(SM,{})}));
