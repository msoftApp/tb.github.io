(function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/tb-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("9295"),n("8413"),n("eb46"),n("1860");var o=n("bb42"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.isLoaded||t.isiOS()?t._e():e("div",{staticClass:"fakeloader"}),t.isiOS()?t._e():e("iframe",{attrs:{src:"http://116.62.214.202:8081/tbc/index/home",frameborder:"0"},on:{load:t.onload}}),t.isiOS()?e("IOSDialog"):t._e()],1)},i=[],a=(n("697f"),n("0f40"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"IOS-bg"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"dialog"},[e("div",{staticClass:"content"},[t._v(" 本网站的某些功能可能ios系统上无法使用，建议在浏览器中访问。网址:"+t._s(t.url)+" ")]),e("div",{staticClass:"btns"},[e("div",{staticClass:"line"}),e("div",{staticClass:"btn copy-btn",on:{click:t.copy}},[t._v("复制网址")]),e("div",{staticClass:"line"}),e("div",{staticClass:"btn go-btn",on:{click:t.go}},[t._v("继续访问")])])])])])}),c=[],s=n("5f4b"),u={name:"App",components:{},data:function(){return{url:"http://116.62.214.202:8081/tbc/index/home"}},methods:{copy:function(){var t=document.createElement("input");t.setAttribute("value",this.url),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),s["a"].success("复制成功：")},go:function(){window.location.href=this.url}}},l=u,d=(n("be2e"),n("0b56")),f=Object(d["a"])(l,a,c,!1,null,null,null),p=f.exports,b={components:{IOSDialog:p},data:function(){return{isLoaded:!1}},watch:{},created:function(){},mounted:function(){this.init()},methods:{isiOS:function(){var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return e},init:function(){$(".fakeloader").fakeLoader({timeToHide:4e5,bgColor:"#CC66FF",spinner:"spinner6"})},onload:function(){var t=this;document.querySelector(".fakeloader").style.opacity=0,document.querySelector(".fakeloader").style.transform="scale(5)",window.setTimeout((function(){t.isLoaded=!0}),1e3)}}},v=b,h=(n("bca2"),Object(d["a"])(v,r,i,!1,null,null,null)),m=h.exports,y=n("1e74");n("2c78");o["a"].use(y["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(m)}}).$mount("#app")},"7e19":function(t,e,n){},bca2:function(t,e,n){"use strict";n("7e19")},be2e:function(t,e,n){"use strict";n("f77c")},f77c:function(t,e,n){}});