(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,5],{333:function(e,t,r){"use strict";var n=r(4),o=r(103);n({target:"String",proto:!0,forced:r(104)("sub")},{sub:function(){return o(this,"sub","","")}})},334:function(e,t,r){"use strict";const n=r(335),o=r(336),c=r(337),l=r(338),f=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function y(e,t){return t.decode?o(e):e}function h(input){return Array.isArray(input)?input.sort():"object"==typeof input?h(Object.keys(input)).sort(((a,b)=>Number(a)-Number(b))).map((e=>input[e])):input}function v(input){const e=input.indexOf("#");return-1!==e&&(input=input.slice(0,e)),input}function j(input){const e=(input=v(input)).indexOf("?");return-1===e?"":input.slice(e+1)}function O(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function k(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),c="string"==typeof r&&!o&&y(r,e).includes(e.arrayFormatSeparator);r=c?y(r,e):r;const l=o||c?r.split(e.arrayFormatSeparator).map((t=>y(t,e))):null===r?r:y(r,e);n[t]=l};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?y(r,e):r);const c=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>y(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],c):n[t]=c};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const param of e.split("&")){if(""===param)continue;let[e,o]=c(t.decode?param.replace(/\+/g," "):param,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:y(o,t),r(y(e,t),o,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=O(r[e],t);else n[e]=O(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=h(r):e[t]=r,e}),Object.create(null))}t.extract=j,t.parse=k,t.stringify=(object,e)=>{if(!object)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const t=t=>e.skipNull&&null==object[t]||e.skipEmptyString&&""===object[t],r=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[m(t,e),"[",o,"]"].join("")]:[...r,[m(t,e),"[",m(o,e),"]=",m(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[m(t,e),"[]"].join("")]:[...r,[m(t,e),"[]=",m(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,e),t,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,m(t,e)]:[...r,[m(t,e),"=",m(n,e)].join("")]}}(e),n={};for(const e of Object.keys(object))t(e)||(n[e]=object[e]);const o=Object.keys(n);return!1!==e.sort&&o.sort(e.sort),o.map((t=>{const n=object[t];return void 0===n?"":null===n?m(t,e):Array.isArray(n)?0===n.length&&"bracket-separator"===e.arrayFormat?m(t,e)+"[]":n.reduce(r(t),[]).join("&"):m(t,e)+"="+m(n,e)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=c(e,"#");return Object.assign({url:r.split("?")[0]||"",query:k(j(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:y(n,t)}:{})},t.stringifyUrl=(object,e)=>{e=Object.assign({encode:!0,strict:!0,[f]:!0},e);const r=v(object.url).split("?")[0]||"",n=t.extract(object.url),o=t.parse(n,{sort:!1}),c=Object.assign(o,object.query);let l=t.stringify(c,e);l&&(l=`?${l}`);let d=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(object.url);return object.fragmentIdentifier&&(d=`#${e[f]?m(object.fragmentIdentifier,e):object.fragmentIdentifier}`),`${r}${l}${d}`},t.pick=(input,filter,e)=>{e=Object.assign({parseFragmentIdentifier:!0,[f]:!1},e);const{url:r,query:n,fragmentIdentifier:o}=t.parseUrl(input,e);return t.stringifyUrl({url:r,query:l(n,filter),fragmentIdentifier:o},e)},t.exclude=(input,filter,e)=>{const r=Array.isArray(filter)?e=>!filter.includes(e):(e,t)=>!filter(e,t);return t.pick(input,r,e)}},335:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},336:function(e,t,r){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),c=new RegExp("("+n+")+","gi");function l(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],l(r),l(n))}function f(input){try{return decodeURIComponent(input)}catch(t){for(var e=input.match(o),i=1;i<e.length;i++)e=(input=l(e,i).join("")).match(o);return input}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(input){for(var e={"%FE%FF":"��","%FF%FE":"��"},t=c.exec(input);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(n){var r=f(t[0]);r!==t[0]&&(e[t[0]]=r)}t=c.exec(input)}e["%C2"]="�";for(var n=Object.keys(e),i=0;i<n.length;i++){var o=n[i];input=input.replace(new RegExp(o,"g"),e[o])}return input}(e)}}},337:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},338:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),i=0;i<n.length;i++){var c=n[i],l=e[c];(o?-1!==t.indexOf(c):t(c,l,e))&&(r[c]=l)}return r}},340:function(e,t,r){"use strict";r.r(t);var n=r(19),o=(r(87),r(9),r(60),r(333),r(59),r(334)),c=r.n(o),l=r(331),f=r.n(l);f.a.prototype.add=function(e){Object.assign(this,this.plus(e))},f.a.prototype.sub=function(e){Object.assign(this,this.minus(e))};var d=parseInt("800"),m=parseInt("1000"),y={name:"Pop",data:function(){return{ready:!1,recovery:!1,bot:!1,nextToken:"",captchaToken:"",count:new f.a(0),accumulator:new f.a(0)}},mounted:function(){this.push(),localStorage.getItem("bot")&&(this.bot=Boolean(localStorage.getItem("bot"))),localStorage.getItem("count")&&(this.count=new f.a(localStorage.getItem("count")))},methods:{meow:function(){this.count.add(1),this.accumulator.add(1),localStorage.setItem("count",this.count.toString())},getAppend:function(){var e;return this.accumulator.gt(d)?(e=d,this.accumulator.sub(d)):(e=this.accumulator,this.accumulator=new f.a(0)),e},unpackResult:function(e,t){var r=e.data;"new_token"in r&&(this.nextToken=r.new_token),200!==e.status&&"new_token"in r||this.accumulator.add(t)},post:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=c.a.stringify({token:t.nextToken,count:e.toString(),captcha_token:t.captchaToken}),r.prev=1,r.next=4,t.$axios.post("/pop?".concat(n));case 4:200===(o=r.sent).status?(t.ready||(t.ready=!0),t.recovery&&e.eq(0)&&(t.recovery=!1),t.unpackResult(o,e)):201===o.status&&(t.recovery&&(t.recovery=!1),t.unpackResult(o,e)),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(1),t.recovery=!0,t.nextToken="",t.accumulator.add(e);case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()},push:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.bot||!e.accumulator.gt(0)&&e.ready&&!e.recovery){t.next=3;break}return t.next=3,e.post(e.getAppend());case 3:setTimeout(e.push,m);case 4:case"end":return t.stop()}}),t)})))()}}},h=r(74),v=r(102),j=r.n(v),O=r(328),k=r(151),w=r(86),component=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"text-center my-10 py-5"},[r("v-card-text",[e._v(e._s(e.count))]),e._v(" "),r("v-btn",{on:{click:e.meow}},[e._v("Meow")])],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{VBtn:O.a,VCard:k.a,VCardText:w.b})},341:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(8),c=(r(222),r(221),r(11),r(10),r(13),r(23),r(12),r(24),r(339)),l=r.n(c),f=r(331),d=r.n(f);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"Leaderboard",data:function(){return{leaderboard:{global:new d.a(0),regions:{}}}},mounted:function(){this.listener=this.$sse.create(),this.listener.on("message",this.update),this.listener.connect()},methods:{update:function(e){for(var i in e=l.a.parse(e),this.leaderboard.global=e.global,e.regions)e.regions[i]=new d.a(e.regions[i]);this.leaderboard.regions=Object.entries(e.regions).sort((function(e,t){var a=Object(o.a)(e,2)[1],b=Object(o.a)(t,2)[1];return a.lt(b)})).reduce((function(e,t){var r=Object(o.a)(t,2),c=r[0],l=r[1];return y(y({},e),{},Object(n.a)({},c,l))}),{})}}},v=r(74),j=r(102),O=r.n(j),k=r(151),w=r(86),x=r(349),S=r(350),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(" Worldwide: "+e._s(e.leaderboard.global))]),e._v(" "),r("v-list",e._l(e.leaderboard.regions,(function(t,n){return r("v-list-item",{key:n},[e._v("\n      "+e._s(n)+": "+e._s(t)+"\n    ")])})),1)],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VCard:k.a,VCardTitle:w.c,VList:x.a,VListItem:S.a})},351:function(e,t,r){"use strict";r.r(t);var n=r(340),o={name:"Index",components:{Leaderboard:r(341).default,Pop:n.default}},c=r(74),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("pop"),e._v(" "),r("leaderboard")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pop:function(){return Promise.resolve().then(r.bind(null,340)).then((function(e){return e.default||e}))},Leaderboard:function(){return Promise.resolve().then(r.bind(null,341)).then((function(e){return e.default||e}))}})}}]);