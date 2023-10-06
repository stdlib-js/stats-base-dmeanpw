"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=i(function(b,t){
var c=require('@stdlib/blas-ext-base-dsumpw/dist');function w(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:c(r,e,a)/r}t.exports=w
});var p=i(function(g,v){
var f=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function y(r,e,a,n){return r<=0?NaN:r===1||a===0?e[n]:f(r,e,a,n)/r}v.exports=y
});var m=i(function(h,d){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),l=p();j(q,"ndarray",l);d.exports=q
});var x=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=m(),u,o=R(x(__dirname,"./native.js"));_(o)?u=E:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
