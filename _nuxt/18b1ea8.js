(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(t,r,e){"use strict";var n=e(0),o=e(233);r.a=function(t){n.a.use(o.a,{url:t.env.popApiHost+"/leaderboard",polyfill:!0,format:"plain"})}},208:function(t,r,e){var content=e(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("897911aa",content,!0,{sourceMap:!1})},219:function(t,r,e){var content=e(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("33a0e8e5",content,!0,{sourceMap:!1})},236:function(t,r,e){"use strict";var n={name:"Default",computed:{wrapper:function(){var t=Math.floor(8*Math.random())+1;return"background: 100% 100% url('image/background/bg".concat(t,".gif')")}}},o=(e(314),e(80)),c=e(111),l=e.n(c),d=e(341),f=e(343),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",{style:t.wrapper,attrs:{dark:""}},[e("v-main",[e("nuxt")],1)],1)}),[],!1,null,"7765bb5b",null);r.a=component.exports;l()(component,{VApp:d.a,VMain:f.a})},246:function(t,r,e){e(247),t.exports=e(248)},278:function(t,r,e){"use strict";e(208)},279:function(t,r,e){var n=e(41)(!1);n.push([t.i,"h1[data-v-a4a5a126]{font-size:20px}",""]),t.exports=n},314:function(t,r,e){"use strict";e(219)},315:function(t,r,e){var n=e(41)(!1);n.push([t.i,".v-app-bar-title[data-v-7765bb5b]{margin:auto 3px}",""]),t.exports=n},318:function(t,r){},72:function(t,r,e){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(278),e(80)),c=e(111),l=e.n(c),d=e(341),f=e(342),v=e(162),h=e(91),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",{attrs:{dark:""}},[e("v-card",[404===t.error.statusCode?e("v-card-title",[t._v("\n      "+t._s(t.pageNotFound)+"\n    ")]):e("v-card-title",[t._v("\n      "+t._s(t.otherError)+"\n    ")]),t._v(" "),e("v-card-actions",[e("v-btn",{staticClass:"primary",attrs:{nuxt:"",to:"/"}},[t._v(" Home page ")])],1)],1)],1)}),[],!1,null,"a4a5a126",null);r.a=component.exports;l()(component,{VApp:d.a,VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardTitle:h.c})}},[[246,9,4,10]]]);