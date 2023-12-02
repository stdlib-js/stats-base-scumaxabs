"use strict";var c=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var j=c(function(I,p){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-special-abs/dist');function w(i,v,o,f,u){var e,n,r,s,a;if(i<=0)return f;if(o<0?n=(1-i)*o:n=0,u<0?r=(1-i)*u:r=0,e=l(v[n]),f[r]=e,r+=u,a=1,x(e)===!1)for(a;a<i;a++){if(n+=o,s=l(v[n]),x(s)){e=s;break}s>e&&(e=s),f[r]=e,r+=u}if(x(e))for(a;a<i;a++)f[r]=e,r+=u;return f}p.exports=w
});var _=c(function(J,R){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),k=require('@stdlib/math-base-special-abs/dist');function z(i,v,o,f,u,e,n){var r,s,a,q,t;if(i<=0)return u;if(s=f,a=n,r=k(v[s]),u[a]=r,a+=e,t=1,m(r)===!1)for(t;t<i;t++){if(s+=o,q=k(v[s]),m(q)){r=q;break}q>r&&(r=q),u[a]=r,a+=e}if(m(r))for(t;t<i;t++)u[a]=r,a+=e;return u}R.exports=z
});var g=c(function(K,O){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=j(),B=_();A(E,"ndarray",B);O.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),b,h=D(C(__dirname,"./native.js"));F(h)?b=G:b=h;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
