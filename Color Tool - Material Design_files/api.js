(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ba(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(e||"")+"_"+g++,e)}function c(e,f){this.h=e;p(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.h};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=r[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function da(a){return a.raw=a}function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa;
function la(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.W=b.prototype}function ma(){this.l=!1;this.h=null;this.o=void 0;this.i=1;this.A=0;this.j=null}function na(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}ma.prototype.v=function(a){this.o=a};function oa(a,b){a.j={ea:b,fa:!0};a.i=a.A}
ma.prototype.return=function(a){this.j={return:a};this.i=this.A};function ra(a){this.h=new ma;this.i=a}function sa(a,b){na(a.h);var c=a.h.h;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);a.h.return(b);return x(a)}
function ta(a,b,c,d){try{var g=b.call(a.h.h,c);if(!(g instanceof Object))throw new TypeError("Iterator result "+g+" is not an object");if(!g.done)return a.h.l=!1,g;var e=g.value}catch(f){return a.h.h=null,oa(a.h,f),x(a)}a.h.h=null;d.call(a.h,e);return x(a)}function x(a){for(;a.h.i;)try{var b=a.i(a.h);if(b)return a.h.l=!1,{value:b.value,done:!1}}catch(c){a.h.o=void 0,oa(a.h,c)}a.h.l=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.fa)throw b.ea;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ua(a){this.next=function(b){na(a.h);a.h.h?b=ta(a,a.h.h.next,b,a.h.v):(a.h.v(b),b=x(a));return b};this.throw=function(b){na(a.h);a.h.h?b=ta(a,a.h.h["throw"],b,a.h.v):(oa(a.h,b),b=x(a));return b};this.return=function(b){return sa(a,b)};this[Symbol.iterator]=function(){return this}}function va(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,g){function e(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(e,g)}e(a.next())})}
function wa(a){return va(new ua(new ra(a)))}function xa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Promise",function(a){function b(f){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.h=null}function d(f){return f instanceof b?f:new b(function(h){h(f)})}if(a)return a;c.prototype.i=function(f){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(f)};var g=r.setTimeout;c.prototype.j=function(f){g(f,0)};c.prototype.o=function(){for(;this.h&&this.h.length;){var f=this.h;this.h=[];for(var h=0;h<f.length;++h){var k=
f[h];f[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};c.prototype.l=function(f){this.j(function(){throw f;})};b.prototype.l=function(){function f(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:f(this.J),reject:f(this.o)}};b.prototype.J=function(f){if(f===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.L(f);else{a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1}h?this.H(f):this.v(f)}};
b.prototype.H=function(f){var h=void 0;try{h=f.then}catch(k){this.o(k);return}"function"==typeof h?this.M(h,f):this.v(f)};b.prototype.o=function(f){this.F(2,f)};b.prototype.v=function(f){this.F(1,f)};b.prototype.F=function(f,h){if(0!=this.h)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.j=h;2===this.h&&this.K();this.I()};b.prototype.K=function(){var f=this;g(function(){if(f.G()){var h=r.console;"undefined"!==typeof h&&h.error(f.j)}},1)};b.prototype.G=
function(){if(this.A)return!1;var f=r.CustomEvent,h=r.Event,k=r.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=r.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.j;return k(f)};b.prototype.I=function(){if(null!=this.i){for(var f=0;f<this.i.length;++f)e.i(this.i[f]);this.i=null}};var e=new c;b.prototype.L=
function(f){var h=this.l();f.O(h.resolve,h.reject)};b.prototype.M=function(f,h){var k=this.l();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(f,h){function k(u,v){return"function"==typeof u?function(pa){try{l(u(pa))}catch(qa){m(qa)}}:v}var l,m,q=new b(function(u,v){l=u;m=v});this.O(k(f,l),k(h,m));return q};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.O=function(f,h){function k(){switch(l.h){case 1:f(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.i?e.i(k):this.i.push(k);this.A=!0};b.resolve=d;b.reject=function(f){return new b(function(h,k){k(f)})};b.race=function(f){return new b(function(h,k){for(var l=w(f),m=l.next();!m.done;m=l.next())d(m.value).O(h,k)})};b.all=function(f){var h=w(f),k=h.next();return k.done?d([]):new b(function(l,m){function q(pa){return function(qa){u[pa]=qa;v--;0==v&&l(u)}}var u=[],v=0;do u.push(void 0),v++,d(k.value).O(q(u.length-1),m),k=h.next();while(!k.done)})};return b});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var g=d.length,e=0;e<g;e++){var f=d[e];if(b.call(c,f,e,d)){b=f;break a}}b=void 0}return b}});function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}function c(){}function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}function g(k){if(!y(k,f)){var l=new c;p(k,f,{value:l})}}function e(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&g(m);return l(m)})}if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),
m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");g(k);if(!y(k,f))throw Error("WeakMap key fail: "+k);k[f][this.h]=l;return this};b.prototype.get=function(k){return d(k)&&y(k,f)?k[f][this.h]:void 0};b.prototype.has=function(k){return d(k)&&y(k,
f)&&y(k[f],this.h)};b.prototype.delete=function(k){return d(k)&&y(k,f)&&y(k[f],this.h)?delete k[f][this.h]:!1};return b});
t("Map",function(a){function b(){var h={};return h.B=h.next=h.head=h}function c(h,k){var l=h.h;return ca(function(){if(l){for(;l.head!=h.h;)l=l.B;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?e.has(k)?l=e.get(k):(l=""+ ++f,e.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&y(h.i,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,s:q}}return{id:l,list:m,
index:-1,s:void 0}}function g(h){this.i={};this.h=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;var e=new WeakMap;g.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.s?l.s.value=k:(l.s={next:this.h,B:this.h.B,head:this.h,key:h,value:k},l.list.push(l.s),this.h.B.next=l.s,this.h.B=l.s,this.size++);return this};g.prototype.delete=function(h){h=d(this,h);return h.s&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.s.B.next=h.s.next,h.s.next.B=h.s.B,h.s.head=null,this.size--,
!0):!1};g.prototype.clear=function(){this.i={};this.h=this.h.B=b();this.size=0};g.prototype.has=function(h){return!!d(this,h).s};g.prototype.get=function(h){return(h=d(this,h).s)&&h.value};g.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};g.prototype.keys=function(){return c(this,function(h){return h.key})};g.prototype.values=function(){return c(this,function(h){return h.value})};g.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,
h.call(k,m[1],m[0],this)};g.prototype[Symbol.iterator]=g.prototype.entries;var f=0;return g});t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});function ya(a,b){a instanceof String&&(a+="");var c=0,d=!1,g={next:function(){if(!d&&c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d=!0;return{done:!0,value:void 0}}};g[Symbol.iterator]=function(){return g};return g}
t("Array.prototype.entries",function(a){return a?a:function(){return ya(this,function(b,c){return[b,c]})}});t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var g=[],e="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof e){b=e.call(b);for(var f=0;!(e=b.next()).done;)g.push(c.call(d,e.value,f++))}else for(e=b.length,f=0;f<e;f++)g.push(c.call(d,b[f],f));return g}});
t("Array.prototype.keys",function(a){return a?a:function(){return ya(this,function(b){return b})}});t("Array.prototype.fill",function(a){return a?a:function(b,c,d){var g=this.length||0;0>c&&(c=Math.max(0,g+c));if(null==d||d>g)d=g;d=Number(d);0>d&&(d=Math.max(0,g+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});function z(a){return a?a:Array.prototype.fill}t("Int8Array.prototype.fill",z);t("Uint8Array.prototype.fill",z);t("Uint8ClampedArray.prototype.fill",z);t("Int16Array.prototype.fill",z);
t("Uint16Array.prototype.fill",z);t("Int32Array.prototype.fill",z);t("Uint32Array.prototype.fill",z);t("Float32Array.prototype.fill",z);t("Float64Array.prototype.fill",z);t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push([d,b[d]]);return c}});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var g=d.length;c=c||0;for(0>c&&(c=Math.max(c+g,0));c<g;c++){var e=d[c];if(e===b||Object.is(e,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
t("String.prototype.replaceAll",function(a){return a?a:function(b,c){if(b instanceof RegExp&&!b.global)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");return b instanceof RegExp?this.replace(b,c):this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c)}});var za=za||{},A=this||self;function Aa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ba(a,b,c){return a.call.apply(a.bind,arguments)}function Ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var g=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(g,d);return a.apply(b,g)}}return function(){return a.apply(b,arguments)}}function B(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?B=Ba:B=Ca;return B.apply(null,arguments)}
function Da(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ha=function(d,g,e){for(var f=Array(arguments.length-2),h=2;h<arguments.length;h++)f[h-2]=arguments[h];return b.prototype[g].apply(d,f)}}function Ea(a){return a};var Fa;function C(){var a=A.navigator;return a&&(a=a.userAgent)?a:""};var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),g="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in g&&(d[e]=b.call(void 0,g[e],e,a));return d};
function Ia(a,b){b=Ga(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};var Ja=-1!=C().indexOf("Trident")||-1!=C().indexOf("MSIE"),Ka=-1!=C().toLowerCase().indexOf("webkit")&&-1==C().indexOf("Edge")&&-1!=C().indexOf("Mobile");var La={},D=null;
function Ma(a){var b;void 0===b&&(b=0);if(!D){D={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var e=c.concat(d[g].split(""));La[g]=e;for(var f=0;f<e.length;f++){var h=e[f];void 0===D[h]&&(D[h]=f)}}}b=La[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(g=e=0;e<a.length-2;e+=3){var k=a[e],l=a[e+1];h=a[e+2];f=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[g++]=""+f+k+l+h}f=0;h=d;switch(a.length-e){case 2:f=
a[e+1],h=b[(f&15)<<2]||d;case 1:a=a[e],c[g]=""+b[a>>2]+b[(a&3)<<4|f>>4]+h+d}return c.join("")};var Na="undefined"!==typeof Uint8Array,Oa={};var Pa;function Qa(a){if(Oa!==Oa)throw Error("illegal external caller");this.ba=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};var E="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function F(a,b){if(E)return a[E]|=b;if(void 0!==a.D)return a.D|=b;Object.defineProperties(a,{D:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function G(a){var b;E?b=a[E]:b=a.D;return null==b?0:b}function H(a,b){E?a[E]=b:void 0!==a.D?a.D=b:Object.defineProperties(a,{D:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function Ra(a){F(a,16);return a}function Sa(a,b){H(b,(a|0)&-51)}
function I(a,b){H(b,(a|18)&-41)};var J={};function K(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var L,Ta=[];H(Ta,23);L=Object.freeze(Ta);function M(a){if(G(a.m)&2)throw Error("Cannot mutate an immutable Message");}function Ua(a){var b=a.length;(b=b?a[b-1]:void 0)&&K(b)?b.g=1:(b={},a.push((b.g=1,b)))};function Va(a){return a.displayName||a.name||"unknown type name"}function Wa(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Va(b)+" but got "+(a&&Va(a.constructor)));};function Xa(a){var b=a.i+a.C;return a.u||(a.u=a.m[b]={})}function Ya(a,b,c){return-1===b?null:b>=a.i?a.u?a.u[b]:void 0:c&&a.u&&(c=a.u[b],null!=c)?c:a.m[b+a.C]}function N(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return Xa(a)[b]=c,a;a.m[b+a.C]=c;(c=a.u)&&b in c&&delete c[b];return a}function O(a,b){M(a);N(a,b,void 0,!1);return a}function P(a,b){a=Ya(a,b);a=null==a?a:!!a;return null==a?!1:a};var Q;function Za(a,b){Q=b;a=new a(b);Q=void 0;return a};function $a(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(G(a)&128))return a=Array.prototype.slice.call(a),Ua(a),a}else{if(Na&&null!=a&&a instanceof Uint8Array)return Ma(a);if(a instanceof Qa){var b=a.ba;return null==b?"":"string"===typeof b?b:a.ba=Ma(b)}}}return a};function ab(a,b,c,d){if(null!=a){if(Array.isArray(a))a=bb(a,b,c,void 0!==d);else if(K(a)){var g={},e;for(e in a)g[e]=ab(a[e],b,c,d);a=g}else a=b(a,d);return a}}function bb(a,b,c,d){var g=G(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var e=0;e<a.length;e++)a[e]=ab(a[e],b,c,d);c(g,a);return a}function cb(a){return a.V===J?a.toJSON():$a(a)}function db(a,b){a&128&&Ua(b)};function eb(a,b,c){c=void 0===c?I:c;if(null!=a){if(Na&&a instanceof Uint8Array)return a.length?new Qa(new Uint8Array(a)):Pa||(Pa=new Qa(null));if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return H(a,d|2),a;a=bb(a,eb,d&4?I:c,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}return a.V===J?fb(a):a}}
function gb(a,b,c,d,g,e,f){if(a=a.h&&a.h[c]){d=0<a.length?a[0].constructor:void 0;e=G(a);e&2||(a=Ha(a,fb),I(e,a),Object.freeze(a));M(b);null==a?e=L:(e=[],F(e,1));f=e;if(null!=a){e=!!a.length;for(var h=0;h<a.length;h++){var k=a[h];Wa(k,d);e=e&&!(G(k.m)&2);f[h]=k.m}d=f;e=(e?8:0)|1;f=G(d);(f&e)!==e&&(Object.isFrozen(d)&&(d=Array.prototype.slice.call(d)),H(d,f|e));f=d;b.h||(b.h={});b.h[c]=a}else b.h&&(b.h[c]=void 0);N(b,c,f,g)}else d=eb(d,e,f),M(b),N(b,c,d,g)}
function fb(a){if(G(a.m)&2)return a;a=hb(a,!0);F(a.m,2);return a}function hb(a,b){var c=a.m,d=Ra([]),g=a.constructor.h;g&&d.push(g);g=a.u;if(g){d.length=c.length;d.fill(void 0,d.length,c.length);var e={};d[d.length-1]=e}0!==(G(c)&128)&&Ua(d);b=b||G(a.m)&2?I:Sa;d=Za(a.constructor,d);a.Y&&(d.Y=a.Y.slice());e=!!(G(c)&16);for(var f=g?c.length-1:c.length,h=0;h<f;h++)gb(a,d,h-a.C,c[h],!1,e,b);if(g)for(var k in g)c=g[k],f=+k,Number.isNaN(f),gb(a,d,f,c,!0,e,b);return d};function R(a,b,c){null==a&&(a=Q);Q=void 0;var d=this.constructor.i||0,g=0<d,e=this.constructor.h,f=!1;if(null==a){a=e?[e]:[];var h=48;var k=!0;g&&(d=0,h|=128);H(a,h)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();var l=h=F(a,0);if(k=0!==(16&l))(f=0!==(32&l))||(l|=32);if(g)if(128&l)d=0;else{if(0<a.length){var m=a[a.length-1];if(K(m)&&"g"in m){d=0;l|=128;delete m.g;var q=!0,u;for(u in m){q=!1;break}q&&a.pop()}}}else if(128&l)throw Error();h!==l&&H(a,l)}this.C=(e?0:-1)-d;this.h=
void 0;this.m=a;a:{e=this.m.length;d=e-1;if(e&&(e=this.m[d],K(e))){this.u=e;this.i=d-this.C;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.C),this.u=void 0):this.i=Number.MAX_VALUE}if(!g&&this.u&&"g"in this.u)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=k&&!f&&!0;g=this.i;var v;for(k=0;k<c.length;k++)f=c[k],f<g?(f+=this.C,(d=a[f])?ib(d,b):a[f]=L):(v||(v=Xa(this)),(d=v[f])?ib(d,b):v[f]=L)}}R.prototype.toJSON=function(){return bb(this.m,cb,db)};
function ib(a,b){if(Array.isArray(a)){var c=G(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&H(a,c|d)}}R.prototype.V=J;R.prototype.toString=function(){return this.m.toString()};try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kb(a,b){for(var c,d,g=1;g<arguments.length;g++){d=arguments[g];for(c in d)a[c]=d[c];for(var e=0;e<jb.length;e++)c=jb[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var S;function lb(a,b){this.h=b===mb?a:""}lb.prototype.toString=function(){return this.h+""};function nb(a){return a instanceof lb&&a.constructor===lb?a.h:"type_error:TrustedResourceUrl"}var mb={};function ob(a){if(void 0===S){var b=null;var c=A.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("uf-api#html",{createHTML:Ea,createScript:Ea,createScriptURL:Ea})}catch(d){A.console&&A.console.error(d.message)}S=b}else S=b}a=(b=S)?b.createScriptURL(a):a;return new lb(a,mb)};var pb=/^[\w+/_-]+[=]{0,2}$/;function qb(a){a=(a||A).document;return a.querySelector?(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&pb.test(a)?a:"":""};function rb(a){var b="SCRIPT";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function sb(a){this.h=a||A.document||document};function T(){this.o=this.o;this.A=this.A}T.prototype.o=!1;T.prototype.isDisposed=function(){return this.o};T.prototype.N=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function tb(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=!1};var ub="closure_listenable_"+(1E6*Math.random()|0);var vb=0;function wb(a,b,c,d,g){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.U=g;this.key=++vb;this.P=this.T=!1}function xb(a){a.P=!0;a.listener=null;a.proxy=null;a.src=null;a.U=null};function yb(a){this.src=a;this.h={};this.i=0}yb.prototype.add=function(a,b,c,d,g){var e=a.toString();a=this.h[e];a||(a=this.h[e]=[],this.i++);var f=zb(a,b,d,g);-1<f?(b=a[f],c||(b.T=!1)):(b=new wb(b,this.src,e,!!d,g),b.T=c,a.push(b));return b};function Ab(a,b){var c=b.type;c in a.h&&Ia(a.h[c],b)&&(xb(b),0==a.h[c].length&&(delete a.h[c],a.i--))}function zb(a,b,c,d){for(var g=0;g<a.length;++g){var e=a[g];if(!e.P&&e.listener==b&&e.capture==!!c&&e.U==d)return g}return-1};var Bb="closure_lm_"+(1E6*Math.random()|0),Cb={},Db=0;
function Eb(a,b,c,d,g){if(Array.isArray(b))for(var e=0;e<b.length;e++)Eb(a,b[e],c,d,g);else(d=Aa(d)?!!d.capture:!!d,c=Fb(c),a&&a[ub])?(a=a.j,b=String(b).toString(),b in a.h&&(e=a.h[b],c=zb(e,c,d,g),-1<c&&(xb(e[c]),Array.prototype.splice.call(e,c,1),0==e.length&&(delete a.h[b],a.i--)))):a&&(a=Gb(a))&&(b=a.h[b.toString()],a=-1,b&&(a=zb(b,c,d,g)),(c=-1<a?b[a]:null)&&"number"!==typeof c&&c&&!c.P&&((g=c.src)&&g[ub]?Ab(g.j,c):(d=c.type,b=c.proxy,g.removeEventListener?g.removeEventListener(d,b,c.capture):
g.detachEvent?g.detachEvent(d in Cb?Cb[d]:Cb[d]="on"+d,b):g.addListener&&g.removeListener&&g.removeListener(b),Db--,(d=Gb(g))?(Ab(d,c),0==d.i&&(d.src=null,g[Bb]=null)):xb(c))))}function Gb(a){a=a[Bb];return a instanceof yb?a:null}var Hb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fb(a){if("function"===typeof a)return a;a[Hb]||(a[Hb]=function(b){return a.handleEvent(b)});return a[Hb]};function U(){T.call(this);this.j=new yb(this);this.ca=this;this.M=null}Da(U,T);U.prototype[ub]=!0;U.prototype.removeEventListener=function(a,b,c,d){Eb(this,a,b,c,d)};
function V(a,b){var c=a.M;if(c){var d=[];for(var g=1;c;c=c.M)d.push(c),++g}a=a.ca;c=b.type||b;"string"===typeof b?b=new tb(b,a):b instanceof tb?b.target=b.target||a:(g=b,b=new tb(c,a),kb(b,g));g=!0;if(d)for(var e=d.length-1;0<=e;e--){var f=b.h=d[e];g=Ib(f,c,!0,b)&&g}f=b.h=a;g=Ib(f,c,!0,b)&&g;g=Ib(f,c,!1,b)&&g;if(d)for(e=0;e<d.length;e++)f=b.h=d[e],g=Ib(f,c,!1,b)&&g}
U.prototype.N=function(){U.W.N.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.h){for(var d=a.h[c],g=0;g<d.length;g++)++b,xb(d[g]);delete a.h[c];a.i--}}this.M=null};function Ib(a,b,c,d){b=a.j.h[String(b)];if(!b)return!0;b=b.concat();for(var g=!0,e=0;e<b.length;++e){var f=b[e];if(f&&!f.P&&f.capture==c){var h=f.listener,k=f.U||f.src;f.T&&Ab(a.j,f);g=!1!==h.call(k,d)&&g}}return g&&!d.defaultPrevented};function Jb(a){try{return A.JSON.parse(a)}catch(b){}a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function Kb(){}Kb.prototype.h=null;function Lb(a){var b;(b=a.h)||(b={},Mb(a)&&(b[0]=!0,b[1]=!0),b=a.h=b);return b};var Nb;function Ob(){}Da(Ob,Kb);function Pb(a){return(a=Mb(a))?new ActiveXObject(a):new XMLHttpRequest}function Mb(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(g){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}Nb=new Ob;function Qb(a,b,c){if("function"===typeof a)c&&(a=B(a,c));else if(a&&"function"==typeof a.handleEvent)a=B(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:A.setTimeout(a,b||0)};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){U.call(this);this.headers=new Map;this.H=a||null;this.i=!1;this.G=this.h=null;this.L="";this.l=this.K=this.v=this.J=!1;this.I=0;this.F=null;this.X="";this.R=this.S=!1}Da(Sb,U);var Tb=/^https?$/i,Ub=["POST","PUT"],Vb=[];function Wb(a,b){var c=new Sb;Vb.push(c);b&&c.j.add("complete",b,!1,void 0,void 0);c.j.add("ready",c.da,!0,void 0,void 0);c.I=2E3;c.S=!0;Xb(c,a)}n=Sb.prototype;n.da=function(){this.o||(this.o=!0,this.N());Ia(Vb,this)};
function Xb(a,b){var c={};if(a.h)throw Error("[goog.net.XhrIo] Object is active with another request="+a.L+"; newUri="+b);a.L=b;a.J=!1;a.i=!0;a.h=a.H?Pb(a.H):Pb(Nb);a.G=a.H?Lb(a.H):Lb(Nb);a.h.onreadystatechange=B(a.Z,a);try{a.K=!0,a.h.open("GET",String(b),!0),a.K=!1}catch(e){Yb(a);return}b=new Map(a.headers);if(c)if(Object.getPrototypeOf(c)===Object.prototype)for(var d in c)b.set(d,c[d]);else if("function"===typeof c.keys&&"function"===typeof c.get){d=w(c.keys());for(var g=d.next();!g.done;g=d.next())g=
g.value,b.set(g,c.get(g))}else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(b.keys()).find(function(e){return"content-type"==e.toLowerCase()});d=A.FormData&&!1;!(0<=Ga(Ub,"GET"))||c||d||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(b);for(c=b.next();!c.done;c=b.next())d=w(c.value),c=d.next().value,d=d.next().value,a.h.setRequestHeader(c,d);a.X&&(a.h.responseType=a.X);"withCredentials"in a.h&&a.h.withCredentials!==a.S&&(a.h.withCredentials=
a.S);try{Zb(a),0<a.I&&(a.R=$b(a.h),a.R?(a.h.timeout=a.I,a.h.ontimeout=B(a.aa,a)):a.F=Qb(a.aa,a.I,a)),a.v=!0,a.h.send(""),a.v=!1}catch(e){Yb(a)}}function $b(a){return Ja&&"number"===typeof a.timeout&&void 0!==a.ontimeout}n.aa=function(){"undefined"!=typeof za&&this.h&&(V(this,"timeout"),this.abort(8))};function Yb(a){a.i=!1;a.h&&(a.l=!0,a.h.abort(),a.l=!1);ac(a);bc(a)}function ac(a){a.J||(a.J=!0,V(a,"complete"),V(a,"error"))}
n.abort=function(){this.h&&this.i&&(this.i=!1,this.l=!0,this.h.abort(),this.l=!1,V(this,"complete"),V(this,"abort"),bc(this))};n.N=function(){this.h&&(this.i&&(this.i=!1,this.l=!0,this.h.abort(),this.l=!1),bc(this,!0));Sb.W.N.call(this)};n.Z=function(){this.isDisposed()||(this.K||this.v||this.l?cc(this):this.ga())};n.ga=function(){cc(this)};
function cc(a){if(a.i&&"undefined"!=typeof za&&(!a.G[1]||4!=(a.h?a.h.readyState:0)||2!=dc(a)))if(a.v&&4==(a.h?a.h.readyState:0))Qb(a.Z,0,a);else if(V(a,"readystatechange"),4==(a.h?a.h.readyState:0)){a.i=!1;try{var b=dc(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var g;if(g=0===b){var e=String(a.L).match(Rb)[1]||null;!e&&A.self&&A.self.location&&(e=A.self.location.protocol.slice(0,-1));g=!Tb.test(e?e.toLowerCase():"")}d=
g}d?(V(a,"complete"),V(a,"success")):ac(a)}finally{bc(a)}}}function bc(a,b){if(a.h){Zb(a);var c=a.h,d=a.G[0]?function(){}:null;a.h=null;a.G=null;b||V(a,"ready");try{c.onreadystatechange=d}catch(g){}}}function Zb(a){a.h&&a.R&&(a.h.ontimeout=null);a.F&&(A.clearTimeout(a.F),a.F=null)}n.isActive=function(){return!!this.h};function dc(a){try{return 2<(a.h?a.h.readyState:0)?a.h.status:-1}catch(b){return-1}};/*

 SPDX-License-Identifier: Apache-2.0
*/
function ec(a){var b=xa.apply(1,arguments);if(0===b.length)return ob(a[0]);for(var c=[a[0]],d=0;d<b.length;d++)c.push(encodeURIComponent(b[d])),c.push(a[d+1]);return ob(c.join(""))};function fc(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};function W(a){R.call(this,a)}la(W,R);n=W.prototype;n.getEnableSsEngine=function(){return P(this,2)};n.getEnableAwr=function(){return P(this,3)};n.getEnableHelpSuggestions=function(){return P(this,4)};n.getAlohaAutoGaRollout=function(){return P(this,5)};n.getEnableConfigurator=function(){return P(this,6)};n.getEnableMweb=function(){return P(this,7)};n.getEnableCtlConsentCheckbox=function(){return P(this,8)};n.getEnableIframe=function(){return P(this,9)};
n.getEnableScreenshotNudge=function(){return P(this,10)};n.getEnableWebStartupConfigEndpoint=function(){return P(this,11)};n.getEnableJunkNudge=function(){return P(this,12)};n.getEnableConfiguratorLocale=function(){return P(this,13)};n.getEnableTinyNoPointer=function(){return P(this,14)};n.getEnableSupportSessionLogging=function(){return P(this,15)};function gc(a){R.call(this,a)}la(gc,R);function hc(a){return ic.some(function(b){return b.test(a)})}var ic=[/https:\/\/sandbox\.google\.com\/tools\/feedback/,/https:\/\/.*\.googleusercontent\.com\/inapp/];var jc="af am ar-EG ar-JO ar-MA ar-SA ar-XB ar az be bg bn bs ca cs cy da de-AT de-CH de el en en-GB en-AU en-CA en-IE en-IN en-NZ en-SG en-XA en-XC en-ZA es es-419 es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et eu fa fi fil fr-CA fr-CH fr gl gsw gu he hi hr hu hy id in is it iw ja ka kk km kn ko ky ln lo lt lv mk ml mn mo mr ms my nb ne nl no pa pl pt pt-BR pt-PT ro ru si sk sl sq sr-Latn sr sv sw ta te th tl tr uk ur uz vi zh zh-CN zh-HK zh-TW zu".split(" ");
function kc(a){var b;return null==(b=a.formContent)?void 0:b.locale};var lc=da(["https://www.gstatic.com/uservoice/feedback/client/web/","/main_binary__",".js"]);function mc(a){var b=kc(a);b=(b&&jc.includes(b)?kc(a):"en").replaceAll("-","_").toLowerCase();var c;a=(null==(c=a.initializationData)?0:c.useNightlyRelease)?"nightly":"live";return ec(lc,a,b)};var nc;function oc(a,b,c){if(nc)return nc;var d=mc(a);return nc=b.feedbackV2GlobalObject?Promise.resolve(b.feedbackV2GlobalObject):new Promise(function(g,e){var f=rb(document);f.src=nb(d);fc(f);f.onload=function(){b.feedbackV2GlobalObject?g(b.feedbackV2GlobalObject):e("feedbackV2GlobalObject not found on window.")};f.onerror=function(){e("Feedback binary script tag failed to load: "+d.toString())};c.body.appendChild(f)})}
function pc(a,b,c,d,g){g=void 0===g?!0:g;var e,f,h,k,l;return wa(function(m){switch(m.i){case 1:e=Date.now();var q=oc(a,c,d);m.i=2;return{value:q};case 2:f=m.o;if(!(g||(null==(k=a.initializationData)?0:k.useNightlyRelease)||(null==(l=a.initializationData)?0:l.isLocalServer))){h=f.initializeFeedbackClient(a,e,b);m.i=3;break}q=f.initializeFeedbackClientAsync(a,e,b);m.i=4;return{value:q};case 4:h=m.o;case 3:return h.initiateAloha(),m.return(h)}})}
function qc(a,b,c){var d=!0;d=void 0===d?!0:d;var g,e,f,h;wa(function(k){e=g=c||A;if(e.isFormOpened)throw f=Error("Form is either loading or already opened"),f.name="DuplicateFormError",f;e.isFormOpened=!0;a.callbacks=a.callbacks||{};h=a.callbacks.onClose||function(){};a.callbacks.onClose=function(l){e.isFormOpened=!1;h(l)};try{return k.return(pc(a,b,e,g.document,d))}catch(l){throw e.isFormOpened=!1,l;}})};function rc(a,b){return wa(function(c){return c.return(new Promise(function(d){var g=sc(null!=b?b:"")+"/aloha_form_properties?productId="+a;Wb(g,function(e){var f=e.target;e=null;try{var h=JSON,k=h.stringify;if(f.h){var l=f.h.responseText;0==l.indexOf(")]}'\n")&&(l=l.substring(5));b:{if(A.JSON)try{var m=A.JSON.parse(l);break b}catch(v){}m=Jb(l)}}else m=void 0;var q=k.call(h,m);if(null==q||""==q)e=new gc;else{var u=JSON.parse(q);if(!Array.isArray(u))throw Error(void 0);e=Za(gc,Ra(u))}}catch(v){k=new gc,
m=new W,m=O(m,5),m=O(m,2),m=O(m,4),m=O(m,8),m=O(m,9),m=O(m,7),m=O(m,10),m=O(m,12),m=O(m,13),m=O(m,14),m=O(m,15),M(k),null!=m?Wa(m,W):m=void 0,e=N(k,1,m)}d(e)})}))})}function sc(a){return hc(a)?a:"https://www.google.com/tools/feedback"};function tc(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||A,g=d.document,e=a.nonce||qb(d);e&&!a.nonce&&(a.nonce=e);if("help"==a.flow){a:{var f=["document","location","href"];for(var h=d||A,k=0;k<f.length;k++)if(h=h[f[k]],null==h){f=null;break a}f=h}!a.helpCenterContext&&f&&(a.helpCenterContext=f.substring(0,1200));f=!0;b&&JSON&&JSON.stringify&&(h=JSON.stringify(b),(f=1200>=h.length)&&(a.psdJson=h));f||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.feedbackServerUri||
"//www.google.com/tools/feedback";if(f=d.GOOGLE_FEEDBACK_START)f.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=a[l],null==b||Aa(b)||(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=g?new sb(9==g.nodeType?g:g.ownerDocument||g.document):Fa||(Fa=new sb);a=rb(a.h);e&&a.setAttribute("nonce",e);e=ob(d);a.src=nb(e);fc(a);g.body.appendChild(a)}}
function uc(a,b,c){try{"submit"===a.flow||"help"===a.flow?tc(a,b,c):rc(a.productId,a.feedbackServerUri).then(function(d){var g=void 0===g?!1:g;var e=Ya(d,1,g);var f=!1;var h=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.V!==J?f?new W(e):void 0:e;h!==e&&null!=h&&(N(d,1,h,g),F(h.m,G(d.m)&18));e=h;null==e||G(d.m)&2||(h=e,G(h.m)&2&&(f=hb(h,!1),f.j=h,h=f),h!==e&&(e=h,N(d,1,e,g)));d=e;g=!Ka||(null==d?void 0:d.getEnableMweb());e=!a.tinyNoPointer||(null==d?void 0:d.getEnableTinyNoPointer());null!=
d&&d.getAlohaAutoGaRollout()&&g&&e?(g=c||A,e="DEV"===a.serverEnvironment,h=c||A,h=a.nonce||qb(h),e={integrationKeys:{productId:a.productId,feedbackBucket:a.bucket},callbacks:{onClose:a.callback,onLoad:a.onLoadCallback},formContent:{locale:a.locale,disableScreenshot:a.disableScreenshotting,productDisplayName:void 0,announcement:void 0,issueCategories:void 0,includeSeveritySelection:void 0,customImageSrc:void 0,thankYouMessage:void 0,ia:void 0,defaultFormInputValues:void 0,defaultFormInputValuesString:void 0,
abuseLink:a.abuseLink},initializationData:{isLocalServer:e,nonce:h,useNightlyRelease:e,feedbackJsUrl:void 0,feedbackCssUrl:void 0,feedbackJsUrlSerialized:void 0,feedbackCssUrlSerialized:void 0,submissionServerUri:a.feedbackServerUri,colorScheme:a.colorScheme},extraData:{productVersion:a.productVersion,authUser:a.authuser,configuratorId:a.configuratorId,customZIndex:a.customZIndex,tinyNoPointer:a.tinyNoPointer,allowNonLoggedInFeedback:a.allowNonLoggedInFeedback,enableAnonymousFeedback:a.enableAnonymousFeedback}},
b&&(h=new Map(Object.entries(b)),e.extraData.productSpecificData=h),qc(e,d,g)):tc(a,b,c)},function(d){d&&"DuplicateFormError"!==d.name&&tc(a,b,c)})}catch(d){tc(a,b,c)}}var X=["userfeedback","api","startFeedback"],Y=A;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===uc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=uc;}).call(this);
