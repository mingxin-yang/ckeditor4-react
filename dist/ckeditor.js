/*!*
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.CKEditor=n(require("react")):t.CKEditor=n(t.React)}("undefined"!=typeof self?self:this,function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=122)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(75))},function(t,n,e){var r=e(0),o=e(31),i=e(3),c=e(32),u=e(36),a=e(54),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(0),o=e(17).f,i=e(9),c=e(13),u=e(29),a=e(49),f=e(53);t.exports=function(t,n){var e,s,l,p,v,y=t.target,d=t.global,h=t.stat;if(e=d?r:h?r[y]||u(y,{}):(r[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(8),o=e(47),i=e(7),c=e(23),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(2);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,n,e){var r=e(8),o=e(6),i=e(18);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){t.exports=e(105)()},function(t,n,e){var r=e(46),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(9),i=e(3),c=e(29),u=e(30),a=e(19),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",function(){return"function"==typeof this&&f(this).source||u(this)})},function(t,n){t.exports=!1},function(t,n,e){var r=e(50),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(8),o=e(45),i=e(18),c=e(12),u=e(23),a=e(3),f=e(47),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r,o,i,c=e(76),u=e(0),a=e(4),f=e(9),s=e(3),l=e(24),p=e(25),v=u.WeakMap;if(c){var y=new v,d=y.get,h=y.has,g=y.set;r=function(t,n){return g.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},i=function(t){return h.call(y,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(34),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(31),o=e(32),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,e){var r=e(6).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(9);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(48),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(14),o=e(48);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(51),o=e(35).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},function(t,n,e){var r=e(10);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r,o=e(7),i=e(80),c=e(35),u=e(25),a=e(55),f=e(28),s=e(24),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete y.prototype[c[e]];return y()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(51),o=e(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(27);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i=e(0),c=e(60),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(3),o=e(16),i=e(24),c=e(65),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(n,e){n.exports=t},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(10),i="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(8),o=e(2),i=e(28);t.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(0),o=e(29),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(3),o=e(77),i=e(17),c=e(6);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(3),o=e(12),i=e(78).indexOf,c=e(25);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(36);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(15);t.exports=r("document","documentElement")},function(t,n,e){var r=e(1);n.f=r},function(t,n,e){var r=e(50),o=e(3),i=e(56),c=e(6).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){var r=e(40),o=e(46),i=e(16),c=e(20),u=e(59),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,d,h){for(var g,m,b=i(v),x=o(b),S=r(y,d,3),O=c(x.length),w=0,j=h||u,E=n?j(v,O):e?j(v,0):void 0;O>w;w++)if((p||w in x)&&(m=S(g=x[w],w,b),t))if(n)E[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:a.call(E,g)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(4),o=e(37),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(15);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(58).forEach,o=e(88),i=e(89),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){"use strict";var r=e(12),o=e(90),i=e(21),c=e(19),u=e(63),a=c.set,f=c.getterFor("Array Iterator");t.exports=u(Array,"Array",function(t,n){a(this,{type:"Array Iterator",target:r(t),index:0,kind:n})},function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){"use strict";var r=e(5),o=e(91),i=e(42),c=e(66),u=e(26),a=e(9),f=e(13),s=e(1),l=e(14),p=e(21),v=e(64),y=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g=function(){return this};t.exports=function(t,n,e,s,v,m,b){o(e,n,s);var x,S,O,w=function(t){if(t===v&&_)return _;if(!d&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},j=n+" Iterator",E=!1,T=t.prototype,P=T[h]||T["@@iterator"]||v&&T[v],_=!d&&P||w(v),k="Array"==n&&T.entries||P;if(k&&(x=i(k.call(new t)),y!==Object.prototype&&x.next&&(l||i(x)===y||(c?c(x,y):"function"!=typeof x[h]&&a(x,h,g)),u(x,j,!0,!0),l&&(p[j]=g))),"values"==v&&P&&"values"!==P.name&&(E=!0,_=function(){return P.call(this)}),l&&!b||T[h]===_||a(T,h,_),p[n]=_,v)if(S={values:w("values"),keys:m?_:w("keys"),entries:w("entries")},b)for(O in S)!d&&!E&&O in T||f(T,O,S[O]);else r({target:n,proto:!0,forced:d||E},S);return S}},function(t,n,e){"use strict";var r,o,i,c=e(42),u=e(9),a=e(3),f=e(1),s=e(14),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||a(r,l)||u(r,l,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(2);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},function(t,n,e){var r=e(7),o=e(92);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(43),o=e(13),i=e(96);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(43),o=e(10),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){var r,o,i,c=e(0),u=e(2),a=e(10),f=e(40),s=e(55),l=e(28),p=e(71),v=c.location,y=c.setImmediate,d=c.clearImmediate,h=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,x={},S=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},O=function(t){return function(){S(t)}},w=function(t){S(t.data)},j=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};y&&d||(y=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(b),b},d=function(t){delete x[t]},"process"==a(h)?r=function(t){h.nextTick(O(t))}:m&&m.now?r=function(t){m.now(O(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=w,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),S(t)}}:function(t){setTimeout(O(t),0)}:(r=j,c.addEventListener("message",w,!1))),t.exports={set:y,clear:d}},function(t,n,e){var r=e(60);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(27),o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n){function e(t,n){t.onload=function(){this.onerror=this.onload=null,n(null,t)},t.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+this.src),t)}}function r(t,n){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,n(null,t))}}t.exports=function(t,n,o){var i=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},c.type=n.type||"text/javascript",c.charset=n.charset||"utf8",c.async=!("async"in n)||!!n.async,c.src=t,n.attrs&&function(t,n){for(var e in n)t.setAttribute(e,n[e])}(c,n.attrs),n.text&&(c.text=""+n.text),("onload"in c?e:r)(c,o),c.onload||e(c,o),i.appendChild(c)}},function(t,n,e){"use strict";var r=e(5),o=e(0),i=e(15),c=e(14),u=e(8),a=e(36),f=e(54),s=e(2),l=e(3),p=e(37),v=e(4),y=e(7),d=e(16),h=e(12),g=e(23),m=e(18),b=e(38),x=e(39),S=e(33),O=e(81),w=e(52),j=e(17),E=e(6),T=e(45),P=e(9),_=e(13),k=e(31),A=e(24),L=e(25),C=e(32),M=e(1),I=e(56),R=e(57),D=e(26),F=e(19),N=e(58).forEach,W=A("hidden"),G=M("toPrimitive"),H=F.set,U=F.getterFor("Symbol"),B=Object.prototype,K=o.Symbol,V=i("JSON","stringify"),q=j.f,z=E.f,Y=O.f,J=T.f,$=k("symbols"),Q=k("op-symbols"),X=k("string-to-symbol-registry"),Z=k("symbol-to-string-registry"),tt=k("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,rt=u&&s(function(){return 7!=b(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=q(B,n);r&&delete B[n],z(t,n,e),r&&t!==B&&z(B,n,r)}:z,ot=function(t,n){var e=$[t]=b(K.prototype);return H(e,{type:"Symbol",tag:t,description:n}),u||(e.description=n),e},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ct=function(t,n,e){t===B&&ct(Q,n,e),y(t);var r=g(n,!0);return y(e),l($,r)?(e.enumerable?(l(t,W)&&t[W][r]&&(t[W][r]=!1),e=b(e,{enumerable:m(0,!1)})):(l(t,W)||z(t,W,m(1,{})),t[W][r]=!0),rt(t,r,e)):z(t,r,e)},ut=function(t,n){y(t);var e=h(n),r=x(e).concat(lt(e));return N(r,function(n){u&&!at.call(e,n)||ct(t,n,e[n])}),t},at=function(t){var n=g(t,!0),e=J.call(this,n);return!(this===B&&l($,n)&&!l(Q,n))&&(!(e||!l(this,n)||!l($,n)||l(this,W)&&this[W][n])||e)},ft=function(t,n){var e=h(t),r=g(n,!0);if(e!==B||!l($,r)||l(Q,r)){var o=q(e,r);return!o||!l($,r)||l(e,W)&&e[W][r]||(o.enumerable=!0),o}},st=function(t){var n=Y(h(t)),e=[];return N(n,function(t){l($,t)||l(L,t)||e.push(t)}),e},lt=function(t){var n=t===B,e=Y(n?Q:h(t)),r=[];return N(e,function(t){!l($,t)||n&&!l(B,t)||r.push($[t])}),r};(a||(_((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=C(t),e=function(t){this===B&&e.call(Q,t),l(this,W)&&l(this[W],n)&&(this[W][n]=!1),rt(this,n,m(1,t))};return u&&et&&rt(B,n,{configurable:!0,set:e}),ot(n,t)}).prototype,"toString",function(){return U(this).tag}),_(K,"withoutSetter",function(t){return ot(C(t),t)}),T.f=at,E.f=ct,j.f=ft,S.f=O.f=st,w.f=lt,I.f=function(t){return ot(M(t),t)},u&&(z(K.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),c||_(B,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:K}),N(x(tt),function(t){R(t)}),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(l(X,n))return X[n];var e=K(n);return X[n]=e,Z[e]=n,e},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:s(function(){w.f(1)})},{getOwnPropertySymbols:function(t){return w.f(d(t))}}),V)&&r({target:"JSON",stat:!0,forced:!a||s(function(){var t=K();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))})},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(v(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!it(n))return n}),o[1]=n,V.apply(null,o)}});K.prototype[G]||P(K.prototype,G,K.prototype.valueOf),D(K,"Symbol"),L[W]=!0},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(30),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(15),o=e(33),i=e(52),c=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(12),o=e(20),i=e(79),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(34),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(8),o=e(6),i=e(7),c=e(39);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(12),o=e(33).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n,e){"use strict";var r=e(5),o=e(8),i=e(0),c=e(3),u=e(4),a=e(6).f,f=e(49),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,d="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=y.call(t);if(c(l,t))return"";var e=d?n.slice(7,-1):n.replace(h,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){e(57)("iterator")},function(t,n,e){"use strict";var r=e(5),o=e(2),i=e(37),c=e(4),u=e(16),a=e(20),f=e(85),s=e(59),l=e(86),p=e(1),v=e(41),y=p("isConcatSpreadable"),d=v>=51||!o(function(){var t=[];return t[y]=!1,t.concat()[0]!==t}),h=l("concat"),g=function(t){if(!c(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){"use strict";var r=e(23),o=e(6),i=e(18);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(2),o=e(1),i=e(41),c=o("species");t.exports=function(t){return i>=51||!r(function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo})}},function(t,n,e){"use strict";var r=e(5),o=e(61);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!!e&&r(function(){e.call(null,n||function(){throw 1},1)})}},function(t,n,e){var r=e(8),o=e(2),i=e(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o(function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)})}},function(t,n,e){var r=e(1),o=e(38),i=e(6),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,e){"use strict";var r=e(64).IteratorPrototype,o=e(38),i=e(18),c=e(26),u=e(21),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){var r=e(5),o=e(2),i=e(16),c=e(42),u=e(65);r({target:"Object",stat:!0,forced:o(function(){c(1)}),sham:!u},{getPrototypeOf:function(t){return c(i(t))}})},function(t,n,e){var r=e(5),o=e(16),i=e(39);r({target:"Object",stat:!0,forced:e(2)(function(){i(1)})},{keys:function(t){return i(o(t))}})},function(t,n,e){e(5)({target:"Object",stat:!0},{setPrototypeOf:e(66)})},function(t,n,e){"use strict";var r=e(43),o=e(68);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r=e(98).charAt,o=e(19),i=e(63),c=o.set,u=o.getterFor("String Iterator");i(String,"String",function(t){c(this,{type:"String Iterator",string:String(t),index:0})},function(){var t,n=u(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(34),o=e(22),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){"use strict";var r,o=e(5),i=e(17).f,c=e(20),u=e(100),a=e(22),f=e(102),s=e(14),l="".startsWith,p=Math.min,v=f("startsWith");o({target:"String",proto:!0,forced:!!(s||v||(r=i(String.prototype,"startsWith"),!r||r.writable))&&!v},{startsWith:function(t){var n=String(a(this));u(t);var e=c(p(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return l?l.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){var r=e(101);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,e){var r=e(4),o=e(10),i=e(1)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){var r=e(1)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,e){var r=e(0),o=e(69),i=e(61),c=e(9);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,e){var r=e(0),o=e(69),i=e(62),c=e(9),u=e(1),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{c(v,a,s)}catch(t){v[a]=s}if(v[f]||c(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{c(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n,e){"use strict";var r=e(106);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return t}t.isRequired=t;var e={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},function(t,n,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n,e){"use strict";var r,o,i,c,u=e(5),a=e(14),f=e(0),s=e(15),l=e(108),p=e(13),v=e(109),y=e(26),d=e(110),h=e(4),g=e(27),m=e(111),b=e(10),x=e(30),S=e(112),O=e(116),w=e(117),j=e(70).set,E=e(118),T=e(119),P=e(120),_=e(72),k=e(121),A=e(19),L=e(53),C=e(1),M=e(41),I=C("species"),R="Promise",D=A.get,F=A.set,N=A.getterFor(R),W=l,G=f.TypeError,H=f.document,U=f.process,B=s("fetch"),K=_.f,V=K,q="process"==b(U),z=!!(H&&H.createEvent&&f.dispatchEvent),Y=L(R,function(){if(!(x(W)!==String(W))){if(66===M)return!0;if(!q&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!W.prototype.finally)return!0;if(M>=51&&/native code/.test(W))return!1;var t=W.resolve(1),n=function(t){t(function(){},function(){})};return(t.constructor={})[I]=n,!(t.then(function(){})instanceof n)}),J=Y||!O(function(t){W.all(t).catch(function(){})}),$=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},Q=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;E(function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,y=s.domain;try{l?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===l?u=o:(y&&y.enter(),u=l(o),y&&(y.exit(),f=!0)),u===s.promise?v(G("Promise-chain cycle")):(a=$(u))?a.call(u,p,v):p(u)):v(o)}catch(t){y&&!f&&y.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&Z(t,n)})}},X=function(t,n,e){var r,o;z?((r=H.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&P("Unhandled promise rejection",e)},Z=function(t,n){j.call(f,function(){var e,r=n.value;if(tt(n)&&(e=k(function(){q?U.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)}),n.rejection=q||tt(n)?2:1,e.error))throw e.value})},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){j.call(f,function(){q?U.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)})},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,Q(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw G("Promise can't be resolved itself");var o=$(e);o?E(function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}}):(n.value=e,n.state=1,Q(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};Y&&(W=function(t){m(this,W,R),g(t),r.call(this);var n=D(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){F(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(W.prototype,{then:function(t,n){var e=N(this),r=K(w(this,W));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=q?U.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&Q(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=D(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},_.f=K=function(t){return t===W||t===i?new o(t):V(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",function(t,n){var e=this;return new W(function(t,n){c.call(e,t,n)}).then(t,n)},{unsafe:!0}),"function"==typeof B&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return T(W,B.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:Y},{Promise:W}),y(W,R,!1,!0),d(R),i=s(R),u({target:R,stat:!0,forced:Y},{reject:function(t){var n=K(this);return n.reject.call(void 0,t),n.promise}}),u({target:R,stat:!0,forced:a||Y},{resolve:function(t){return T(a&&this===i?W:this,t)}}),u({target:R,stat:!0,forced:J},{all:function(t){var n=this,e=K(n),r=e.resolve,o=e.reject,i=k(function(){var e=g(n.resolve),i=[],c=0,u=1;S(t,function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then(function(t){f||(f=!0,i[a]=t,--u||r(i))},o)}),--u||r(i)});return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=K(n),r=e.reject,o=k(function(){var o=g(n.resolve);S(t,function(t){o.call(n,t).then(e.resolve,r)})});return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(13);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(15),o=e(6),i=e(1),c=e(8),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(7),o=e(113),i=e(20),c=e(40),u=e(114),a=e(115),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,y,d,h,g,m,b=c(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(y=0,d=i(t.length);d>y;y++)if((h=s?b(r(m=t[y])[0],m[1]):b(t[y]))&&h instanceof f)return h;return new f(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(h=a(p,b,m.value,s))&&h&&h instanceof f)return h;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(1),o=e(21),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(68),o=e(21),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(7),o=e(27),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,u,a,f,s,l=e(0),p=e(17).f,v=e(10),y=e(70).set,d=e(71),h=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==v(g),x=p(l,"queueMicrotask"),S=x&&x.value;S||(r=function(){var t,n;for(b&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:h&&!d?(u=!0,a=document.createTextNode(""),new h(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){y.call(l,r)}),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(7),o=e(4),i=e(72);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){"use strict";e.r(n);e(74),e(82),e(83),e(84),e(87),e(62),e(93),e(94),e(95),e(67),e(97),e(99),e(103),e(104);var r,o=e(44),i=e.n(o),c=e(11),u=e.n(c),a=(e(107),e(73)),f=e.n(a);var s=function(t){if("string"!=typeof t||t.length<1)throw new TypeError("CKEditor URL must be a non-empty string.");return"CKEDITOR"in window?Promise.resolve(window.CKEDITOR):(r||(r=new Promise(function(n,e){f()(t,function(t){t?e(t):(n(window.CKEDITOR),r=void 0)})})),r)};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var h=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=v(this,y(n).call(this,t))).element=null,e.editor=null,e}var e,r,o;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}(n,i.a.Component),e=n,(r=[{key:"componentDidMount",value:function(){this._initEditor()}},{key:"componentWillUnmount",value:function(){this._destroyEditor()}},{key:"componentDidUpdate",value:function(t){var n=this.props,e=this.editor;e&&(t.data!==n.data&&e.getData()!==n.data&&e.setData(n.data),t.readOnly!==n.readOnly&&e.setReadOnly(n.readOnly),t.style!==n.style&&e.container.setStyles(n.style),this._attachEventHandlers(t))}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{style:this.props.style,ref:function(n){return t.element=n}})}},{key:"_initEditor",value:function(){var t=this,e=this.props,r=e.config,o=e.readOnly,i=e.type,c=e.onBeforeLoad,u=e.style,a=e.data;r.readOnly=o,s(n.editorUrl).then(function(n){var e="inline"===i?"inline":"replace";c&&c(n);var f=t.editor=n[e](t.element,r);t._attachEventHandlers(),"inline"!==i||o||f.on("instanceReady",function(){f.setReadOnly(!1)},null,null,-1),u&&"inline"!==i&&f.on("loaded",function(){f.container.setStyles(u)}),a&&f.setData(a)}).catch(console.error)}},{key:"_attachEventHandlers",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.props;Object.keys(this.props).forEach(function(r){r.startsWith("on")&&n[r]!==e[r]&&t._attachEventHandler(r,n[r])})}},{key:"_attachEventHandler",value:function(t,n){var e="".concat(t[2].toLowerCase()).concat(t.substr(3));n&&this.editor.removeListener(e,n),this.editor.on(e,this.props[t])}},{key:"_destroyEditor",value:function(){this.editor&&this.editor.destroy(),this.editor=null,this.element=null}}])&&p(e.prototype,r),o&&p(e,o),n}();h.propTypes={type:u.a.oneOf(["classic","inline"]),data:u.a.string,config:u.a.object,style:u.a.object,readOnly:u.a.bool,onBeforeLoad:u.a.func},h.defaultProps={type:"classic",data:"",config:{},readOnly:!1},h.editorUrl="https://cdn.ckeditor.com/4.14.1/standard-all/ckeditor.js",h.displayName="CKEditor";n.default=h}]).default});
//# sourceMappingURL=ckeditor.js.map