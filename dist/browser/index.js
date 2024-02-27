"use strict";var it=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var ye=Object.getOwnPropertyNames;var be=Object.prototype.hasOwnProperty;var Ct=(t,e)=>{for(var r in e)it(t,r,{get:e[r],enumerable:!0})},ge=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ye(e))!be.call(t,s)&&s!==r&&it(t,s,{get:()=>e[s],enumerable:!(n=he(e,s))||n.enumerable});return t};var xe=t=>ge(it({},"__esModule",{value:!0}),t);var xr={};Ct(xr,{SupraClient:()=>Nt});module.exports=xe(xr);var y=require("aptos");function k(t,e){return function(){return t.apply(e,arguments)}}var{toString:we}=Object.prototype,{getPrototypeOf:ct}=Object,K=(t=>e=>{let r=we.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=t=>(t=t.toLowerCase(),e=>K(e)===t),G=t=>e=>typeof e===t,{isArray:D}=Array,q=G("undefined");function Ee(t){return t!==null&&!q(t)&&t.constructor!==null&&!q(t.constructor)&&A(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}var Dt=O("ArrayBuffer");function Se(t){let e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Dt(t.buffer),e}var Re=G("string"),A=G("function"),Bt=G("number"),X=t=>t!==null&&typeof t=="object",Te=t=>t===!0||t===!1,$=t=>{if(K(t)!=="object")return!1;let e=ct(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ae=O("Date"),Oe=O("File"),Pe=O("Blob"),_e=O("FileList"),Ne=t=>X(t)&&A(t.pipe),Ce=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||A(t.append)&&((e=K(t))==="formdata"||e==="object"&&A(t.toString)&&t.toString()==="[object FormData]"))},Ue=O("URLSearchParams"),Fe=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t=="undefined")return;let n,s;if(typeof t!="object"&&(t=[t]),D(t))for(n=0,s=t.length;n<s;n++)e.call(null,t[n],n,t);else{let i=r?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length,u;for(n=0;n<o;n++)u=i[n],e.call(null,t[u],u,t)}}function Lt(t,e){e=e.toLowerCase();let r=Object.keys(t),n=r.length,s;for(;n-- >0;)if(s=r[n],e===s.toLowerCase())return s;return null}var It=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global,Ht=t=>!q(t)&&t!==It;function ut(){let{caseless:t}=Ht(this)&&this||{},e={},r=(n,s)=>{let i=t&&Lt(e,s)||s;$(e[i])&&$(n)?e[i]=ut(e[i],n):$(n)?e[i]=ut({},n):D(n)?e[i]=n.slice():e[i]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&j(arguments[n],r);return e}var De=(t,e,r,{allOwnKeys:n}={})=>(j(e,(s,i)=>{r&&A(s)?t[i]=k(s,r):t[i]=s},{allOwnKeys:n}),t),Be=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Le=(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},Ie=(t,e,r,n)=>{let s,i,o,u={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!n||n(o,t,e))&&!u[o]&&(e[o]=t[o],u[o]=!0);t=r!==!1&&ct(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},He=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return n!==-1&&n===r},ke=t=>{if(!t)return null;if(D(t))return t;let e=t.length;if(!Bt(e))return null;let r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},qe=(t=>e=>t&&e instanceof t)(typeof Uint8Array!="undefined"&&ct(Uint8Array)),je=(t,e)=>{let n=(t&&t[Symbol.iterator]).call(t),s;for(;(s=n.next())&&!s.done;){let i=s.value;e.call(t,i[0],i[1])}},Me=(t,e)=>{let r,n=[];for(;(r=t.exec(e))!==null;)n.push(r);return n},ze=O("HTMLFormElement"),Je=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ut=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),ve=O("RegExp"),kt=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};j(r,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(n[i]=o||s)}),Object.defineProperties(t,n)},Ve=t=>{kt(t,(e,r)=>{if(A(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=t[r];if(A(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},We=(t,e)=>{let r={},n=s=>{s.forEach(i=>{r[i]=!0})};return D(t)?n(t):n(String(t).split(e)),r},$e=()=>{},Ke=(t,e)=>(t=+t,Number.isFinite(t)?t:e),at="abcdefghijklmnopqrstuvwxyz",Ft="0123456789",qt={DIGIT:Ft,ALPHA:at,ALPHA_DIGIT:at+at.toUpperCase()+Ft},Ge=(t=16,e=qt.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r};function Xe(t){return!!(t&&A(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}var Qe=t=>{let e=new Array(10),r=(n,s)=>{if(X(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[s]=n;let i=D(n)?[]:{};return j(n,(o,u)=>{let m=r(o,s+1);!q(m)&&(i[u]=m)}),e[s]=void 0,i}}return n};return r(t,0)},Ze=O("AsyncFunction"),Ye=t=>t&&(X(t)||A(t))&&A(t.then)&&A(t.catch),a={isArray:D,isArrayBuffer:Dt,isBuffer:Ee,isFormData:Ce,isArrayBufferView:Se,isString:Re,isNumber:Bt,isBoolean:Te,isObject:X,isPlainObject:$,isUndefined:q,isDate:Ae,isFile:Oe,isBlob:Pe,isRegExp:ve,isFunction:A,isStream:Ne,isURLSearchParams:Ue,isTypedArray:qe,isFileList:_e,forEach:j,merge:ut,extend:De,trim:Fe,stripBOM:Be,inherits:Le,toFlatObject:Ie,kindOf:K,kindOfTest:O,endsWith:He,toArray:ke,forEachEntry:je,matchAll:Me,isHTMLForm:ze,hasOwnProperty:Ut,hasOwnProp:Ut,reduceDescriptors:kt,freezeMethods:Ve,toObjectSet:We,toCamelCase:Je,noop:$e,toFiniteNumber:Ke,findKey:Lt,global:It,isContextDefined:Ht,ALPHABET:qt,generateString:Ge,isSpecCompliantForm:Xe,toJSONObject:Qe,isAsyncFn:Ze,isThenable:Ye};function B(t,e,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var jt=B.prototype,Mt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Mt[t]={value:t}});Object.defineProperties(B,Mt);Object.defineProperty(jt,"isAxiosError",{value:!0});B.from=(t,e,r,n,s,i)=>{let o=Object.create(jt);return a.toFlatObject(t,o,function(m){return m!==Error.prototype},u=>u!=="isAxiosError"),B.call(o,t.message,e,r,n,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};var h=B;var Q=null;function lt(t){return a.isPlainObject(t)||a.isArray(t)}function Jt(t){return a.endsWith(t,"[]")?t.slice(0,-2):t}function zt(t,e,r){return t?t.concat(e).map(function(s,i){return s=Jt(s),!r&&i?"["+s+"]":s}).join(r?".":""):e}function tr(t){return a.isArray(t)&&!t.some(lt)}var er=a.toFlatObject(a,{},null,function(e){return/^is[A-Z]/.test(e)});function rr(t,e,r){if(!a.isObject(t))throw new TypeError("target must be an object");e=e||new(Q||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,x){return!a.isUndefined(x[d])});let n=r.metaTokens,s=r.visitor||l,i=r.dots,o=r.indexes,m=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(e);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!m&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?m&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,d,x){let w=f;if(f&&!x&&typeof f=="object"){if(a.endsWith(d,"{}"))d=n?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&tr(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(w=a.toArray(f)))return d=Jt(d),w.forEach(function(N,pe){!(a.isUndefined(N)||N===null)&&e.append(o===!0?zt([d],pe,i):o===null?d:d+"[]",p(N))}),!1}return lt(f)?!0:(e.append(zt(x,d,i),p(f)),!1)}let c=[],g=Object.assign(er,{defaultVisitor:l,convertValue:p,isVisitable:lt});function T(f,d){if(!a.isUndefined(f)){if(c.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));c.push(f),a.forEach(f,function(w,_){(!(a.isUndefined(w)||w===null)&&s.call(e,w,a.isString(_)?_.trim():_,d,g))===!0&&T(w,d?d.concat(_):[_])}),c.pop()}}if(!a.isObject(t))throw new TypeError("data must be an object");return T(t),e}var C=rr;function vt(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Vt(t,e){this._pairs=[],t&&C(t,this,e)}var Wt=Vt.prototype;Wt.append=function(e,r){this._pairs.push([e,r])};Wt.toString=function(e){let r=e?function(n){return e.call(this,n,vt)}:vt;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};var Z=Vt;function nr(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function M(t,e,r){if(!e)return t;let n=r&&r.encode||nr,s=r&&r.serialize,i;if(s?i=s(e,r):i=a.isURLSearchParams(e)?e.toString():new Z(e,r).toString(n),i){let o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}var ft=class{constructor(){this.handlers=[]}use(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){a.forEach(this.handlers,function(n){n!==null&&e(n)})}},dt=ft;var Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var $t=typeof URLSearchParams!="undefined"?URLSearchParams:Z;var Kt=typeof FormData!="undefined"?FormData:null;var Gt=typeof Blob!="undefined"?Blob:null;var Xt={isBrowser:!0,classes:{URLSearchParams:$t,FormData:Kt,Blob:Gt},protocols:["http","https","file","blob","url","data"]};var mt={};Ct(mt,{hasBrowserEnv:()=>Qt,hasStandardBrowserEnv:()=>sr,hasStandardBrowserWebWorkerEnv:()=>or});var Qt=typeof window!="undefined"&&typeof document!="undefined",sr=(t=>Qt&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator!="undefined"&&navigator.product),or=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";var E={...mt,...Xt};function pt(t,e){return C(t,new E.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,i){return E.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function ir(t){return a.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ar(t){let e={},r=Object.keys(t),n,s=r.length,i;for(n=0;n<s;n++)i=r[n],e[i]=t[i];return e}function ur(t){function e(r,n,s,i){let o=r[i++],u=Number.isFinite(+o),m=i>=r.length;return o=!o&&a.isArray(s)?s.length:o,m?(a.hasOwnProp(s,o)?s[o]=[s[o],n]:s[o]=n,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),e(r,n,s[o],i)&&a.isArray(s[o])&&(s[o]=ar(s[o])),!u)}if(a.isFormData(t)&&a.isFunction(t.entries)){let r={};return a.forEachEntry(t,(n,s)=>{e(ir(n),s,r,0)}),r}return null}var tt=ur;function cr(t,e,r){if(a.isString(t))try{return(e||JSON.parse)(t),a.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var ht={transitional:Y,adapter:["xhr","http"],transformRequest:[function(e,r){let n=r.getContentType()||"",s=n.indexOf("application/json")>-1,i=a.isObject(e);if(i&&a.isHTMLForm(e)&&(e=new FormData(e)),a.isFormData(e))return s&&s?JSON.stringify(tt(e)):e;if(a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e))return e;if(a.isArrayBufferView(e))return e.buffer;if(a.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return pt(e,this.formSerializer).toString();if((u=a.isFileList(e))||n.indexOf("multipart/form-data")>-1){let m=this.env&&this.env.FormData;return C(u?{"files[]":e}:e,m&&new m,this.formSerializer)}}return i||s?(r.setContentType("application/json",!1),cr(e)):e}],transformResponse:[function(e){let r=this.transitional||ht.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(e&&a.isString(e)&&(n&&!this.responseType||s)){let o=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(u){if(o)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:E.classes.FormData,Blob:E.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],t=>{ht.headers[t]={}});var L=ht;var lr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zt=t=>{let e={},r,n,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),n=o.substring(s+1).trim(),!(!r||e[r]&&lr[r])&&(r==="set-cookie"?e[r]?e[r].push(n):e[r]=[n]:e[r]=e[r]?e[r]+", "+n:n)}),e};var Yt=Symbol("internals");function z(t){return t&&String(t).trim().toLowerCase()}function et(t){return t===!1||t==null?t:a.isArray(t)?t.map(et):String(t)}function fr(t){let e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(t);)e[n[1]]=n[2];return e}var dr=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yt(t,e,r,n,s){if(a.isFunction(n))return n.call(this,e,r);if(s&&(e=r),!!a.isString(e)){if(a.isString(n))return e.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(e)}}function mr(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,n)=>r.toUpperCase()+n)}function pr(t,e){let r=a.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(s,i,o){return this[n].call(this,e,s,i,o)},configurable:!0})})}var I=class{constructor(e){e&&this.set(e)}set(e,r,n){let s=this;function i(u,m,p){let l=z(m);if(!l)throw new Error("header name must be a non-empty string");let c=a.findKey(s,l);(!c||s[c]===void 0||p===!0||p===void 0&&s[c]!==!1)&&(s[c||m]=et(u))}let o=(u,m)=>a.forEach(u,(p,l)=>i(p,l,m));return a.isPlainObject(e)||e instanceof this.constructor?o(e,r):a.isString(e)&&(e=e.trim())&&!dr(e)?o(Zt(e),r):e!=null&&i(r,e,n),this}get(e,r){if(e=z(e),e){let n=a.findKey(this,e);if(n){let s=this[n];if(!r)return s;if(r===!0)return fr(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=z(e),e){let n=a.findKey(this,e);return!!(n&&this[n]!==void 0&&(!r||yt(this,this[n],n,r)))}return!1}delete(e,r){let n=this,s=!1;function i(o){if(o=z(o),o){let u=a.findKey(n,o);u&&(!r||yt(n,n[u],u,r))&&(delete n[u],s=!0)}}return a.isArray(e)?e.forEach(i):i(e),s}clear(e){let r=Object.keys(this),n=r.length,s=!1;for(;n--;){let i=r[n];(!e||yt(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){let r=this,n={};return a.forEach(this,(s,i)=>{let o=a.findKey(n,i);if(o){r[o]=et(s),delete r[i];return}let u=e?mr(i):String(i).trim();u!==i&&delete r[i],r[u]=et(s),n[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=e&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,r])=>e+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...r){let n=new this(e);return r.forEach(s=>n.set(s)),n}static accessor(e){let n=(this[Yt]=this[Yt]={accessors:{}}).accessors,s=this.prototype;function i(o){let u=z(o);n[u]||(pr(s,o),n[u]=!0)}return a.isArray(e)?e.forEach(i):i(e),this}};I.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(I.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(n){this[r]=n}}});a.freezeMethods(I);var S=I;function J(t,e){let r=this||L,n=e||r,s=S.from(n.headers),i=n.data;return a.forEach(t,function(u){i=u.call(r,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function v(t){return!!(t&&t.__CANCEL__)}function te(t,e,r){h.call(this,t==null?"canceled":t,h.ERR_CANCELED,e,r),this.name="CanceledError"}a.inherits(te,h,{__CANCEL__:!0});var U=te;function bt(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var ee=E.hasStandardBrowserEnv?{write(t,e,r,n,s,i){let o=[t+"="+encodeURIComponent(e)];a.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),a.isString(n)&&o.push("path="+n),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){let e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gt(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xt(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function V(t,e){return t&&!gt(e)?xt(t,e):e}var re=E.hasStandardBrowserEnv?function(){let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(i){let o=i;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(o){let u=a.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function wt(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function hr(t,e){t=t||10;let r=new Array(t),n=new Array(t),s=0,i=0,o;return e=e!==void 0?e:1e3,function(m){let p=Date.now(),l=n[i];o||(o=p),r[s]=m,n[s]=p;let c=i,g=0;for(;c!==s;)g+=r[c++],c=c%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),p-o<e)return;let T=l&&p-l;return T?Math.round(g*1e3/T):void 0}}var ne=hr;function se(t,e){let r=0,n=ne(50,250);return s=>{let i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-r,m=n(u),p=i<=o;r=i;let l={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:m||void 0,estimated:m&&o&&p?(o-i)/m:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}var yr=typeof XMLHttpRequest!="undefined",oe=yr&&function(t){return new Promise(function(r,n){let s=t.data,i=S.from(t.headers).normalize(),{responseType:o,withXSRFToken:u}=t,m;function p(){t.cancelToken&&t.cancelToken.unsubscribe(m),t.signal&&t.signal.removeEventListener("abort",m)}let l;if(a.isFormData(s)){if(E.hasStandardBrowserEnv||E.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){let[d,...x]=l?l.split(";").map(w=>w.trim()).filter(Boolean):[];i.setContentType([d||"multipart/form-data",...x].join("; "))}}let c=new XMLHttpRequest;if(t.auth){let d=t.auth.username||"",x=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(d+":"+x))}let g=V(t.baseURL,t.url);c.open(t.method.toUpperCase(),M(g,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function T(){if(!c)return;let d=S.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:t,request:c};bt(function(N){r(N),p()},function(N){n(N),p()},w),c=null}if("onloadend"in c?c.onloadend=T:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(T)},c.onabort=function(){c&&(n(new h("Request aborted",h.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let x=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",w=t.transitional||Y;t.timeoutErrorMessage&&(x=t.timeoutErrorMessage),n(new h(x,w.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,c)),c=null},E.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(t)),u||u!==!1&&re(g))){let d=t.xsrfHeaderName&&t.xsrfCookieName&&ee.read(t.xsrfCookieName);d&&i.set(t.xsrfHeaderName,d)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(x,w){c.setRequestHeader(w,x)}),a.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",se(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",se(t.onUploadProgress)),(t.cancelToken||t.signal)&&(m=d=>{c&&(n(!d||d.type?new U(null,t,c):d),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(m),t.signal&&(t.signal.aborted?m():t.signal.addEventListener("abort",m)));let f=wt(g);if(f&&E.protocols.indexOf(f)===-1){n(new h("Unsupported protocol "+f+":",h.ERR_BAD_REQUEST,t));return}c.send(s||null)})};var Et={http:Q,xhr:oe};a.forEach(Et,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(r){}Object.defineProperty(t,"adapterName",{value:e})}});var ie=t=>`- ${t}`,br=t=>a.isFunction(t)||t===null||t===!1,rt={getAdapter:t=>{t=a.isArray(t)?t:[t];let{length:e}=t,r,n,s={};for(let i=0;i<e;i++){r=t[i];let o;if(n=r,!br(r)&&(n=Et[(o=String(r)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${o}'`);if(n)break;s[o||"#"+i]=n}if(!n){let i=Object.entries(s).map(([u,m])=>`adapter ${u} `+(m===!1?"is not supported by the environment":"is not available in the build")),o=e?i.length>1?`since :
`+i.map(ie).join(`
`):" "+ie(i[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:Et};function St(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new U(null,t)}function nt(t){return St(t),t.headers=S.from(t.headers),t.data=J.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),rt.getAdapter(t.adapter||L.adapter)(t).then(function(n){return St(t),n.data=J.call(t,t.transformResponse,n),n.headers=S.from(n.headers),n},function(n){return v(n)||(St(t),n&&n.response&&(n.response.data=J.call(t,t.transformResponse,n.response),n.response.headers=S.from(n.response.headers))),Promise.reject(n)})}var ae=t=>t instanceof S?t.toJSON():t;function P(t,e){e=e||{};let r={};function n(p,l,c){return a.isPlainObject(p)&&a.isPlainObject(l)?a.merge.call({caseless:c},p,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(p,l,c){if(a.isUndefined(l)){if(!a.isUndefined(p))return n(void 0,p,c)}else return n(p,l,c)}function i(p,l){if(!a.isUndefined(l))return n(void 0,l)}function o(p,l){if(a.isUndefined(l)){if(!a.isUndefined(p))return n(void 0,p)}else return n(void 0,l)}function u(p,l,c){if(c in e)return n(p,l);if(c in t)return n(void 0,p)}let m={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(p,l)=>s(ae(p),ae(l),!0)};return a.forEach(Object.keys(Object.assign({},t,e)),function(l){let c=m[l]||s,g=c(t[l],e[l],l);a.isUndefined(g)&&c!==u||(r[l]=g)}),r}var st="1.6.2";var Rt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Rt[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var ue={};Rt.transitional=function(e,r,n){function s(i,o){return"[Axios v"+st+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,u)=>{if(e===!1)throw new h(s(o," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!ue[o]&&(ue[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,o,u):!0}};function gr(t,e,r){if(typeof t!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),s=n.length;for(;s-- >0;){let i=n[s],o=e[i];if(o){let u=t[i],m=u===void 0||o(u,i,t);if(m!==!0)throw new h("option "+i+" must be "+m,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}var ot={assertOptions:gr,validators:Rt};var F=ot.validators,H=class{constructor(e){this.defaults=e,this.interceptors={request:new dt,response:new dt}}request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=P(this.defaults,r);let{transitional:n,paramsSerializer:s,headers:i}=r;n!==void 0&&ot.assertOptions(n,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:ot.assertOptions(s,{encode:F.function,serialize:F.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[r.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),r.headers=S.concat(o,i);let u=[],m=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(m=m&&d.synchronous,u.unshift(d.fulfilled,d.rejected))});let p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let l,c=0,g;if(!m){let f=[nt.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,p),g=f.length,l=Promise.resolve(r);c<g;)l=l.then(f[c++],f[c++]);return l}g=u.length;let T=r;for(c=0;c<g;){let f=u[c++],d=u[c++];try{T=f(T)}catch(x){d.call(this,x);break}}try{l=nt.call(this,T)}catch(f){return Promise.reject(f)}for(c=0,g=p.length;c<g;)l=l.then(p[c++],p[c++]);return l}getUri(e){e=P(this.defaults,e);let r=V(e.baseURL,e.url);return M(r,e.params,e.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(e){H.prototype[e]=function(r,n){return this.request(P(n||{},{method:e,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(e){function r(n){return function(i,o,u){return this.request(P(u||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}H.prototype[e]=r(),H.prototype[e+"Form"]=r(!0)});var W=H;var Tt=class t{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});let n=this;this.promise.then(s=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](s);n._listeners=null}),this.promise.then=s=>{let i,o=new Promise(u=>{n.subscribe(u),i=u}).then(s);return o.cancel=function(){n.unsubscribe(i)},o},e(function(i,o,u){n.reason||(n.reason=new U(i,o,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}static source(){let e;return{token:new t(function(s){e=s}),cancel:e}}},ce=Tt;function At(t){return function(r){return t.apply(null,r)}}function Ot(t){return a.isObject(t)&&t.isAxiosError===!0}var Pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pt).forEach(([t,e])=>{Pt[e]=t});var le=Pt;function fe(t){let e=new W(t),r=k(W.prototype.request,e);return a.extend(r,W.prototype,e,{allOwnKeys:!0}),a.extend(r,e,null,{allOwnKeys:!0}),r.create=function(s){return fe(P(t,s))},r}var b=fe(L);b.Axios=W;b.CanceledError=U;b.CancelToken=ce;b.isCancel=v;b.VERSION=st;b.toFormData=C;b.AxiosError=h;b.Cancel=b.CanceledError;b.all=function(e){return Promise.all(e)};b.spread=At;b.isAxiosError=Ot;b.mergeConfig=P;b.AxiosHeaders=S;b.formToJSON=t=>tt(a.isHTMLForm(t)?new FormData(t):t);b.getAdapter=rt.getAdapter;b.HttpStatusCode=le;b.default=b;var R=b;var{Axios:Qs,AxiosError:Zs,CanceledError:Ys,isCancel:to,CancelToken:eo,VERSION:ro,all:no,Cancel:so,isAxiosError:oo,spread:io,toFormData:ao,AxiosHeaders:uo,HttpStatusCode:co,formToJSON:lo,getAdapter:fo,mergeConfig:mo}=R;var de=t=>{let e=new Array;for(let r=0;r<t.length;r++)e.push(Array.from(t[r]));return e},me=t=>{if(t.length>64&&t.slice(0,2)==="0x"&&(t=t.slice(2)),t.length!=64)throw new Error("address length must be 64 or it's size must be 256 bits");return t},_t=t=>new Promise(e=>{setTimeout(e,t)});var Nt=class t{constructor(e,r=3){this.requestTimeout=1e4;this.maxRetryForTransactionCompletion=60;this.delayBetweenPoolingRequest=1e3;this.supraNodeURL=e,this.chainId=new y.TxnBuilderTypes.ChainId(r)}static async init(e){let r=new t(e);return r.chainId=await r.getChainId(),r}async getChainId(){let e=await R({method:"get",baseURL:this.supraNodeURL,url:"/transactions/chain_id",timeout:this.requestTimeout});return new y.TxnBuilderTypes.ChainId(Number(e.data))}async getGasPrice(){let e=await R({method:"get",baseURL:this.supraNodeURL,url:"/transactions/estimate_gas_price",timeout:this.requestTimeout});return BigInt(e.data.mean_gas_price)}async fundAccountWithFaucet(e){let r=await R({method:"get",baseURL:this.supraNodeURL,url:`/wallet/airdrop/${e.toString()}`,timeout:this.requestTimeout});return await this.waitForTransactionCompletion(r.data.transactions[r.data.transactions.length-1]),r.data.transactions}async isAccountExists(e){return(await R({method:"get",baseURL:this.supraNodeURL,url:`/accounts/${e.toString()}`,timeout:this.requestTimeout})).data.account!=null}async getAccountSequenceNumber(e){let r=await R({method:"get",baseURL:this.supraNodeURL,url:`/accounts/${e.toString()}`,timeout:this.requestTimeout});if(r.data.account==null)throw new Error("Account Not Exists, Or Invalid Account Is Passed");return BigInt(r.data.account.sequence_number)}async getTransactionDetail(e){let r=await R({method:"get",baseURL:this.supraNodeURL,url:`/transactions/${e}`,timeout:this.requestTimeout});if(r.data.transaction==null)throw new Error("Transaction Not Found, May Be Transaction Hash Is Invalid");return{txHash:e,sender:r.data.sender,receiver:r.data.receiver,amount:r.data.amount,sequenceNumber:r.data.sequence_number,maxGasAmount:r.data.max_gas_amount,gasUnitPrice:r.data.gas_unit_price,gasUsed:r.data.gas_used,transactionCost:r.data.gas_unit_price*r.data.gas_used,txConfirmationTime:r.data.confirmation_time,status:r.data.status,action:r.data.action,events:r.data.events,blockNumber:r.data.block_number,blockHash:r.data.block_hash}}async getSupraTransferHistory(e,r=15,n="0000000000000000000000000000000000000000000000000000000000000000"){let s=await R({method:"get",baseURL:this.supraNodeURL,url:`/accounts/${e.toString()}/transactions?count=${r}&last_seen=${n}`,timeout:this.requestTimeout});if(s.data.record==null)throw new Error("Account Not Exists, Or Invalid Account Is Passed");let i=[];return s.data.record.forEach(o=>{i.push({txHash:o.txn_hash,sender:o.sender,receiver:o.receiver,amount:o.amount,sequenceNumber:o.sequence_number,maxGasAmount:o.max_gas_amount,gasUnitPrice:o.gas_unit_price,gasUsed:o.gas_used,transactionCost:o.gas_unit_price*o.gas_used,txConfirmationTime:o.confirmation_time,status:o.status,action:o.action,events:o.events,blockNumber:o.block_number,blockHash:o.block_hash})}),i}async getAccountSupraCoinBalance(e){let r=await R({method:"get",baseURL:this.supraNodeURL,url:`/accounts/${e.toString()}/coin`,timeout:this.requestTimeout});return r.data.coins==null?(console.log("Account Not Exists, Or Invalid Account Is Passed"),BigInt(0)):BigInt(r.data.coins.coin)}async getTransactionStatus(e){if(e.length!=64)throw new Error("transactionHash length must be 64 or it's size must be 256 bits");return(await R({method:"get",baseURL:this.supraNodeURL,url:`/transactions/${e}/status`,timeout:this.requestTimeout})).data.status}async waitForTransactionCompletion(e){for(let r=0;r<this.maxRetryForTransactionCompletion;r++){let n=await this.getTransactionStatus(e);if(n!="Pending"&&n!="Unexecuted")return await _t(5e3),n;await _t(this.delayBetweenPoolingRequest)}return"Pending"}async sendTx(e){let r=await R({method:"post",baseURL:this.supraNodeURL,url:"/transactions/submit",data:e,headers:{"Content-Type":"application/json"},timeout:this.requestTimeout});return{txHash:r.data.txn_hash,result:await this.waitForTransactionCompletion(r.data.txn_hash)}}async getSendTxPayload(e,r){console.log("Sequence Number: ",r.sequence_number);let n=r.payload.value;return{Move:{raw_txn:{sender:e.address().toString(),sequence_number:Number(r.sequence_number),payload:{EntryFunction:{module:{address:n.module_name.address.toHexString().toString(),name:n.module_name.name.value},function:n.function_name.value,ty_args:[],args:de(n.args)}},max_gas_amount:Number(r.max_gas_amount),gas_unit_price:Number(r.gas_unit_price),expiration_timestamp_secs:Number(r.expiration_timestamp_secs),chain_id:r.chain_id.value},authenticator:{Ed25519:{public_key:e.pubKey().toString(),signature:e.signBuffer(y.TransactionBuilder.getSigningMessage(r)).toString()}}}}}async getTxObject(e,r,n,s,i,o,u=BigInt(2e3)){return new y.TxnBuilderTypes.RawTransaction(new y.TxnBuilderTypes.AccountAddress(e.toUint8Array()),await this.getAccountSequenceNumber(e),new y.TxnBuilderTypes.TransactionPayloadEntryFunction(new y.TxnBuilderTypes.EntryFunction(new y.TxnBuilderTypes.ModuleId(new y.TxnBuilderTypes.AccountAddress(new y.HexString(me(r)).toUint8Array()),new y.TxnBuilderTypes.Identifier(n)),new y.TxnBuilderTypes.Identifier(s),i,o)),u,BigInt(100),BigInt(999999999999999),this.chainId)}async transferSupraCoin(e,r,n){let s=BigInt(10);if(await this.isAccountExists(r)==!1&&(s=BigInt(1020)),n+s*BigInt(100)>await this.getAccountSupraCoinBalance(e.address()))throw new Error("Insufficient Supra Coins");let i=await this.getSendTxPayload(e,await this.getTxObject(e.address(),"0000000000000000000000000000000000000000000000000000000000000001","aptos_account","transfer",[],[r.toUint8Array(),y.BCS.bcsSerializeUint64(n)],s));return await this.simulateTx(i),await this.sendTx(i)}async publishPackage(e,r,n){let s=new y.BCS.Serializer,i=[];for(let u=0;u<n.length;u++)i.push(new y.TxnBuilderTypes.Module(Uint8Array.from(n[u])));y.BCS.serializeVector(i,s);let o=await this.getSendTxPayload(e,await this.getTxObject(e.address(),"0000000000000000000000000000000000000000000000000000000000000001","code","publish_package_txn",[],[y.BCS.bcsSerializeBytes(r),s.getBytes()]));return await this.simulateTx(o),await this.sendTx(o)}async simulateTx(e){let r=await R({method:"post",baseURL:this.supraNodeURL,url:"/transactions/simulate",data:e,headers:{"Content-Type":"application/json"},timeout:this.requestTimeout});if(r.data.estimated_status.split(" ")[1]!=="EXECUTED")throw new Error("Transaction Can Be Failed, Reason: "+r.data.estimated_status);console.log("Transaction Simulation Done")}};
//# sourceMappingURL=index.js.map