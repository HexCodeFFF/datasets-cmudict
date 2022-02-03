!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("path"),require("fs")):"function"==typeof define&&define.amd?define(["path","fs"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["@stdlib/datasets-cmudict"]=r(t.require$$0$1,t.require$$0)}(this,(function(t,r){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),o=e(r),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u="/home/runner/work/datasets-cmudict/datasets-cmudict/lib",a="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=function(){try{return a({},"x",{}),!0}catch(t){return!1}},f=Object.defineProperty,l=Object.prototype,s=l.toString,v=l.__defineGetter__,p=l.__defineSetter__,y=l.__lookupGetter__,d=l.__lookupSetter__;var b=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===s.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(y.call(t,r)||d.call(t,r)?(n=t.__proto__,t.__proto__=l,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&v&&v.call(t,r,e.get),u&&p&&p.call(t,r,e.set),t},g=f,m=b,h=c()?g:m;var w=function(t,r,e){h(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},j=w;var _=function(t){return"string"==typeof t};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return O&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,P=S;var T=function(t){return P.call(t)},V=Object.prototype.hasOwnProperty;var A=function(t,r){return null!=t&&V.call(t,r)},B="function"==typeof Symbol?Symbol.toStringTag:"",F=A,k=B,x=S;var C=T,$=function(t){var r,e,n;if(null==t)return x.call(t);e=t[k],r=F(t,k);try{t[k]=void 0}catch(r){return x.call(t)}return n=x.call(t),r?t[k]=e:delete t[k],n},q=E()?$:C,G=String.prototype.valueOf;var R=q,L=function(t){try{return G.call(t),!0}catch(t){return!1}},M=E();var N=function(t){return"object"==typeof t&&(t instanceof String||(M?L(t):"[object String]"===R(t)))},X=_,I=N;var J=j,U=function(t){return X(t)||I(t)},z=N;J(U,"isPrimitive",_),J(U,"isObject",z);var D=U,H=q;var K=Array.isArray?Array.isArray:function(t){return"[object Array]"===H(t)},Q=K;var W=function(t){return"object"==typeof t&&null!==t&&!Q(t)},Y=/./;var Z=function(t){return"boolean"==typeof t},tt=Boolean.prototype.toString;var rt=q,et=function(t){try{return tt.call(t),!0}catch(t){return!1}},nt=E();var ot=function(t){return"object"==typeof t&&(t instanceof Boolean||(nt?et(t):"[object Boolean]"===rt(t)))},it=Z,ut=ot;var at=j,ct=function(t){return it(t)||ut(t)},ft=ot;at(ct,"isPrimitive",Z),at(ct,"isObject",ft);var lt="object"==typeof self?self:null,st="object"==typeof window?window:null,vt=ct.isPrimitive,pt=function(){return new Function("return this;")()},yt=lt,dt=st,bt="object"==typeof i?i:null;var gt=function(t){if(arguments.length){if(!vt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(yt)return yt;if(dt)return dt;if(bt)return bt;throw new Error("unexpected error. Unable to resolve global object.")},mt=gt(),ht=mt.document&&mt.document.childNodes,wt=Int8Array,jt=Y,_t=ht,Ot=wt;var Et=function(){return"function"==typeof jt||"object"==typeof Ot||"function"==typeof _t};var St=function(){return/^\s*function\s*([^(]*)/i},Pt=St;j(Pt,"REGEXP",St());var Tt=Pt,Vt=K;var At=function(t){return null!==t&&"object"==typeof t};j(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Vt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(At));var Bt=At;var Ft=q,kt=Tt.REGEXP,xt=function(t){return Bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ct=function(t){var r,e,n;if(("Object"===(e=Ft(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=kt.exec(n.toString()))return r[1]}return xt(t)?"Buffer":e},$t=Ct;var qt=Ct;var Gt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?$t(t).toLowerCase():r},Rt=function(t){return qt(t).toLowerCase()},Lt=Et()?Rt:Gt;var Mt=function(t){return"function"===Lt(t)},Nt=Object.getPrototypeOf;var Xt=function(t){return t.__proto__},It=q,Jt=Xt;var Ut=function(t){var r=Jt(t);return r||null===r?r:"[object Function]"===It(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},zt=Nt,Dt=Ut,Ht=Mt(Object.getPrototypeOf)?zt:Dt;var Kt=W,Qt=Mt,Wt=function(t){return null==t?null:(t=Object(t),Ht(t))},Yt=A,Zt=q,tr=Object.prototype;var rr=function(t){var r;return!!Kt(t)&&(!(r=Wt(t))||!Yt(t,"constructor")&&Yt(r,"constructor")&&Qt(r.constructor)&&"[object Function]"===Zt(r.constructor)&&Yt(r,"isPrototypeOf")&&Qt(r.isPrototypeOf)&&(r===tr||function(t){var r;for(r in t)if(!Yt(t,r))return!1;return!0}(t)))},er=rr,nr=o.default.readFile;var or=function(){var t,r;for(t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);nr.apply(null,t)},ir=o.default.readFileSync;var ur=function(t,r){var e;try{e=arguments.length>1?ir(t,r):ir(t)}catch(t){return t}return e},ar=or;j(ar,"sync",ur);var cr=D.isPrimitive;var fr=function(t){if(!cr(t))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+t+"`.");return 65279===t.charCodeAt(0)?t.slice(1):t},lr=D.isPrimitive,sr=Mt;var vr=function(t,r){if(!lr(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(arguments.length>1&&!sr(r))throw new TypeError("invalid argument. Reviver argument must be a function. Value: `"+r+"`.");try{return JSON.parse(t,r)}catch(t){return t}};var pr=function(t,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return t instanceof r},yr=D.isPrimitive,dr=er,br=Mt,gr=ar,mr=fr,hr=vr,wr=pr;var jr=function(t,r,e){var n,o;if(arguments.length<3)n={},o=r;else{if(yr(r))n={encoding:r};else{if(!dr(r))throw new TypeError("invalid argument. Options argument must be either a string or an object. Value: `"+r+"`.");n=r}o=e}if(!br(o))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+o+"`.");function i(t,r){return t?o(t):(r=r.toString(),"utf8"===n.encoding&&(r=mr(r)),r=n.reviver?hr(r,n.reviver):hr(r),wr(r,Error)?o(r):void o(null,r))}gr(t,n,i)},_r=D.isPrimitive,Or=er,Er=ar.sync,Sr=fr,Pr=vr,Tr=pr;var Vr=function(t,r){var e,n;if(arguments.length>1)if(_r(r))e={encoding:r};else{if(!Or(r))throw new TypeError("invalid argument. Options argument must be either a string or an object. Value: `"+r+"`.");e=r}else e={};return n=Er(t,e),Tr(n,Error)?n:(n=n.toString(),"utf8"===e.encoding&&(n=Sr(n)),e.reviver?Pr(n,e.reviver):Pr(n))},Ar=jr;j(Ar,"sync",Vr);var Br=Ar,Fr=A,kr=er,xr=D.isPrimitive;var Cr=function(t,r){return kr(r)?Fr(r,"data")&&(t.data=r.data,!xr(t.data))?new TypeError("invalid option. `data` option must be a string primitive. Option: `"+t.data+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")},$r=n.default.resolve,qr=Br.sync,Gr=A,Rr=Cr,Lr=["dict","phones","symbols","vp"],Mr={dict:$r(u,"..","data","dict.json"),phones:$r(u,"..","data","phones.json"),symbols:$r(u,"..","data","symbols.json"),vp:$r(u,"..","data","vp.json")},Nr={encoding:"utf8"};var Xr=function(t){var r,e,n,o,i,u;if(arguments.length>0){if(e=Rr(r={},t))throw e;if(r.data){if(!Gr(Mr,r.data))throw new RangeError("invalid option. `data` option must be one of the following values: `"+Lr.join(",")+"`. Option: `"+r.data+"`.");if((o=qr(Mr[r.data],Nr))instanceof Error)throw o;return o}}for(o={},u=0;u<Lr.length;u++){if(n=Lr[u],(i=qr(Mr[n]))instanceof Error)throw i;o[n]=i}return o};return Xr}));