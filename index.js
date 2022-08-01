// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).dmeanpw={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||a.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&f&&f.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===b(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function y(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var b="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},d=/./;function v(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var m,h="function"==typeof Symbol?Symbol.toStringTag:"";m=_()?function(r){var t,e,n,o,u;if(null==r)return g.call(r);e=r[h],u=h,t=null!=(o=r)&&w.call(o,u);try{r[h]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[h]=e:delete r[h],n}:function(r){return g.call(r)};var O=m,E=Boolean.prototype.toString;var S=_();function A(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function P(r){return v(r)||A(r)}function T(){return new Function("return this;")()}s(P,"isPrimitive",v),s(P,"isObject",A);var x="object"==typeof self?self:null,B="object"==typeof window?window:null,N="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof N?N:null;var M=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(x)return x;if(B)return B;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),V=M.document&&M.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;s(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var q=G;function I(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!q(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(I);function R(r){var t,e,n,o;if(("Object"===(e=O(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=L.exec(n.toString()))return t[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(I,"isObjectLikeArray",J);var U="function"==typeof d||"object"==typeof C||"function"==typeof V?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H=X;function K(r){return null==r?null:(r=Object(r),H(r))}var Q,W=Math.floor;function Y(r,t,e,n){var o,u,i,f,c,a,l,s,p,y,b,d,v;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,v=0;v<r;v++)b+=t[o],o+=e;return b}if(r<=128){for(u=t[o],i=t[o+e],f=t[o+2*e],c=t[o+3*e],a=t[o+4*e],l=t[o+5*e],s=t[o+6*e],p=t[o+7*e],o+=8*e,y=r%8,v=8;v<r-y;v+=8)u+=t[o],i+=t[o+e],f+=t[o+2*e],c+=t[o+3*e],a+=t[o+4*e],l+=t[o+5*e],s+=t[o+6*e],p+=t[o+7*e],o+=8*e;for(b=u+i+(f+c)+(a+l+(s+p));v<r;v++)b+=t[o],o+=e;return b}return d=W(r/2),Y(d-=d%8,t,e,o)+Y(r-d,t,e,o+d*e)}function Z(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o+=t[n],n+=e;return o}return Y(r,t,e,n)}s(Z,"ndarray",Y);var $=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=K(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return p(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-dmeanpw/stats-base-dmeanpw/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),rr=Q=$ instanceof Error?Z:$;const{ndarray:tr}=Q;function er(r,t,e){return r<=0?NaN:1===r||0===e?t[0]:rr(r,t,e)/r}function nr(r,t,e,n){return r<=0?NaN:1===r||0===e?t[n]:tr(r,t,e,n)/r}s(er,"ndarray",nr),r.default=er,r.ndarray=nr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
