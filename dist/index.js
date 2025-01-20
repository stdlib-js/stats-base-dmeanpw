"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=i(function(g,s){
var c=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function y(r,e,a,t){return r<=0?NaN:r===1||a===0?e[t]:c(r,e,a,t)/r}s.exports=y
});var q=i(function(h,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),w=n();function j(r,e,a){return w(r,e,a,f(r,a))}v.exports=j
});var o=i(function(k,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),l=n();x(d,"ndarray",l);p.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=o(),u,m=_(R(__dirname,"./native.js"));E(m)?u=O:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
