"use strict";var c=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=c(function(G,j){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),p=require('@stdlib/math-base-special-absf/dist');function O(r,a,n,o,i,v,q){var e,f,s,t,u;if(r<=0)return i;if(f=o,s=q,e=p(a[f]),i[s]=e,s+=v,u=1,x(e)===!1)for(u;u<r;u++){if(f+=n,t=p(a[f]),x(t)){e=t;break}t>e&&(e=t),i[s]=e,s+=v}if(x(e))for(u;u<r;u++)i[s]=e,s+=v;return i}j.exports=O
});var d=c(function(H,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,a,n,o,i){var v=l(r,n),q=l(r,i);return g(r,a,n,v,o,i,q)}y.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),z=m();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),b,E=B(A(__dirname,"./native.js"));C(E)?b=D:b=E;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
