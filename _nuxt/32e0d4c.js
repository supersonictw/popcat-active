(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{329:function(t,e,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("02871f02",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";var n=r(4),o=r(102);n({target:"String",proto:!0,forced:r(103)("sub")},{sub:function(){return o(this,"sub","","")}})},337:function(t,e,r){"use strict";const n=r(338),o=r(339),c=r(340),l=r(341),d=Symbol("encodeFragmentIdentifier");function h(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function f(t,e){return e.decode?o(t):t}function v(input){return Array.isArray(input)?input.sort():"object"==typeof input?v(Object.keys(input)).sort(((a,b)=>Number(a)-Number(b))).map((t=>input[t])):input}function y(input){const t=input.indexOf("#");return-1!==t&&(input=input.slice(0,t)),input}function S(input){const t=(input=y(input)).indexOf("?");return-1===t?"":input.slice(t+1)}function _(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function w(t,e){h((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const o="string"==typeof r&&r.includes(t.arrayFormatSeparator),c="string"==typeof r&&!o&&f(r,t).includes(t.arrayFormatSeparator);r=c?f(r,t):r;const l=o||c?r.split(t.arrayFormatSeparator).map((e=>f(e,t))):null===r?r:f(r,t);n[e]=l};case"bracket-separator":return(e,r,n)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(n[e]=r?f(r,t):r);const c=null===r?[]:r.split(t.arrayFormatSeparator).map((e=>f(e,t)));void 0!==n[e]?n[e]=[].concat(n[e],c):n[e]=c};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;for(const param of t.split("&")){if(""===param)continue;let[t,o]=c(e.decode?param.replace(/\+/g," "):param,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?o:f(o,e),r(f(t,e),o,n)}for(const t of Object.keys(n)){const r=n[t];if("object"==typeof r&&null!==r)for(const t of Object.keys(r))r[t]=_(r[t],e);else n[t]=_(r,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((t,e)=>{const r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=v(r):t[e]=r,t}),Object.create(null))}e.extract=S,e.parse=w,e.stringify=(object,t)=>{if(!object)return"";h((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const e=e=>t.skipNull&&null==object[e]||t.skipEmptyString&&""===object[e],r=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[m(e,t),"[",o,"]"].join("")]:[...r,[m(e,t),"[",m(o,t),"]=",m(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[m(e,t),"[]"].join("")]:[...r,[m(e,t),"[]=",m(n,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===t.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,t),e,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,m(e,t)]:[...r,[m(e,t),"=",m(n,t)].join("")]}}(t),n={};for(const t of Object.keys(object))e(t)||(n[t]=object[t]);const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map((e=>{const n=object[e];return void 0===n?"":null===n?m(e,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?m(e,t)+"[]":n.reduce(r(e),[]).join("&"):m(e,t)+"="+m(n,t)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,n]=c(t,"#");return Object.assign({url:r.split("?")[0]||"",query:w(S(t),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:f(n,e)}:{})},e.stringifyUrl=(object,t)=>{t=Object.assign({encode:!0,strict:!0,[d]:!0},t);const r=y(object.url).split("?")[0]||"",n=e.extract(object.url),o=e.parse(n,{sort:!1}),c=Object.assign(o,object.query);let l=e.stringify(c,t);l&&(l=`?${l}`);let h=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(object.url);return object.fragmentIdentifier&&(h=`#${t[d]?m(object.fragmentIdentifier,t):object.fragmentIdentifier}`),`${r}${l}${h}`},e.pick=(input,filter,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[d]:!1},t);const{url:r,query:n,fragmentIdentifier:o}=e.parseUrl(input,t);return e.stringifyUrl({url:r,query:l(n,filter),fragmentIdentifier:o},t)},e.exclude=(input,filter,t)=>{const r=Array.isArray(filter)?t=>!filter.includes(t):(t,e)=>!filter(t,e);return e.pick(input,r,t)}},338:function(t,e,r){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},339:function(t,e,r){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),c=new RegExp("("+n+")+","gi");function l(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],l(r),l(n))}function d(input){try{return decodeURIComponent(input)}catch(e){for(var t=input.match(o),i=1;i<t.length;i++)t=(input=l(t,i).join("")).match(o);return input}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(input){for(var t={"%FE%FF":"��","%FF%FE":"��"},e=c.exec(input);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(n){var r=d(e[0]);r!==e[0]&&(t[e[0]]=r)}e=c.exec(input)}t["%C2"]="�";for(var n=Object.keys(t),i=0;i<n.length;i++){var o=n[i];input=input.replace(new RegExp(o,"g"),t[o])}return input}(t)}}},340:function(t,e,r){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},341:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),i=0;i<n.length;i++){var c=n[i],l=t[c];(o?-1!==e.indexOf(c):e(c,l,t))&&(r[c]=l)}return r}},342:function(t,e,r){"use strict";r(329)},343:function(t,e,r){var n=r(39)(!1);n.push([t.i,".crazy[data-v-4c5fdf75]{-webkit-text-stroke:1px navy}.flat[data-v-4c5fdf75]{position:absolute;left:0;right:0;z-index:5}.flat.top-10[data-v-4c5fdf75]{top:10px}.flat.top-50[data-v-4c5fdf75]{top:50px}.flat.bottom-25[data-v-4c5fdf75]{bottom:25px}.meow-btn[data-v-4c5fdf75]{cursor:pointer!important}",""]),t.exports=n},344:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("1cdf85c7",content,!0,{sourceMap:!1})},345:function(t,e,r){var n=r(39)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},346:function(t,e,r){var content=r(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("2fba213c",content,!0,{sourceMap:!1})},347:function(t,e,r){var n=r(39)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},355:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(87),r(10),r(61),r(336),r(59),r(337)),c=r.n(o),l=r(328),d=r.n(l);d.a.prototype.add=function(t){Object.assign(this,this.plus(t))},d.a.prototype.sub=function(t){Object.assign(this,this.minus(t))};var h=parseInt("800"),m=parseInt("1000"),f={name:"Pop",data:function(){return{ready:!1,recovery:!1,bot:!1,nextToken:"",captchaToken:"",count:new d.a(0),accumulator:new d.a(0),pressing:!1,testing:false}},computed:{buttonImage:function(){return this.pressing?"./image/button/pressed.png":"./image/button/release.png"}},mounted:function(){this.push(),localStorage.getItem("bot")&&(this.bot=Boolean(localStorage.getItem("bot"))),localStorage.getItem("count")&&(this.count=new d.a(localStorage.getItem("count"))),window.addEventListener("keydown",this.meow),window.addEventListener("keyup",this.release)},beforeDestroy:function(){window.addEventListener("keydown",this.meow),window.addEventListener("keyup",this.release)},methods:{meow:function(){this.pressing=!0,this.count.add(1),this.accumulator.add(1),localStorage.setItem("count",this.count.toString())},release:function(){this.pressing=!1},getAppend:function(){var t;return this.accumulator.gt(h)?(t=h,this.accumulator.sub(h)):(t=this.accumulator,this.accumulator=new d.a(0)),t},unpackResult:function(t,e){var r=t.data;"new_token"in r&&(this.nextToken=r.new_token),200!==t.status&&"new_token"in r||this.accumulator.add(e)},post:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=c.a.stringify({token:e.nextToken,count:t.toString(),captcha_token:e.captchaToken}),r.prev=1,r.next=4,e.$axios.post("/pop?".concat(n));case 4:200===(o=r.sent).status?(e.ready||(e.ready=!0),e.recovery&&t.eq(0)&&(e.recovery=!1),e.unpackResult(o,t)):201===o.status&&(e.recovery&&(e.recovery=!1),e.unpackResult(o,t)),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(1),e.recovery=!0,e.nextToken="",e.accumulator.add(t);case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()},push:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.bot||!t.accumulator.gt(0)&&t.ready&&!t.recovery){e.next=3;break}return e.next=3,t.post(t.getAppend());case 3:setTimeout(t.push,m);case 4:case"end":return e.stop()}}),e)})))()}}},v=(r(342),r(74)),y=r(101),S=r.n(y),_=r(151),w=r(376),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto text-center",attrs:{width:"90%",height:"90%"}},[r("h1",{staticClass:"crazy flat top-10"},[t._v("PopSenzawa")]),t._v(" "),r("h2",{staticClass:"crazy flat top-50"},[t._v("Awww (๑ºωº)")]),t._v(" "),r("h2",{staticClass:"crazy flat bottom-25"},[t._v(t._s(t.count))]),t._v(" "),t.testing?t._e():r("v-img",{staticClass:"meow-btn",attrs:{alt:"Meow",width:"100%",height:"100%",src:t.buttonImage},on:{pointerdown:t.meow,pointerup:t.release,mousedown:t.meow,mouseup:t.release}})],1)}),[],!1,null,"4c5fdf75",null);e.default=component.exports;S()(component,{VCard:_.a,VImg:w.a})},376:function(t,e,r){"use strict";var n=r(21),o=(r(50),r(85),r(225),r(73),r(59),r(344),r(119)),c=(r(346),r(157)),l=r(46),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=r(75),m=r(126),f=r(12),v="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(d,h.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!v||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(f.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(m.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:v?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})}}]);