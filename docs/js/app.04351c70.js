(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],d=0,v=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"0494":function(t,e,a){"use strict";var s=a("6929"),i=a.n(s);i.a},"1cd8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},o=[],n={name:"app"},r=n,l=(a("034f"),a("2877")),c=Object(l["a"])(r,i,o,!1,null,null,null),u=c.exports,d=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-layout"},[a("div",{staticClass:"gap100 no-gap"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"background-video"},[a("video",{staticClass:"bv-video",attrs:{muted:""},domProps:{muted:!0}}),a("div",{staticClass:"videobg-meta"},[t._m(0),a("div",{staticClass:"info"},[a("span",[t._v("Facebook for your health")]),a("p",[t._v(" Turning Health Care data into information, and information into insight. ")]),a("router-link",{attrs:{to:"/setup",tag:"button"}},[t._v("See your Journey")])],1)])])])])]),t._m(1),t._m(2)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("i",{staticClass:"fa fa-smile-o"}),t._v("Hi, we HealthBook")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"gap100 no-top overlap-75"},[a("div",{staticClass:"container"},[a("div",{staticClass:"servic-category"},[a("div",{staticClass:"row merged"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"category-box"},[a("i",{staticClass:"fa fa-wordpress"}),a("h2",[t._v("Adoption of digital health apps today is abysmal")])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"category-box selected"},[a("i",{staticClass:"fa fa-html5"}),a("h2",[t._v("Patient self management is critical to improving diabetic disease ")])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"category-box"},[a("i",{staticClass:"fa fa-google-wallet"}),a("h2",[t._v("Providers struggle with prompting, nudging, and interacting patients ")])])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottombar"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"copyright"},[t._v("© HealthBook 2019. All rights reserved.")])])])])])}],p={name:"Home",props:{msg:String}},m=p,h=(a("0494"),Object(l["a"])(m,v,f,!1,null,"4e00a4c4",null)),_=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])}],C={name:"HelloWorld",props:{msg:String}},y=C,w=(a("6ab1"),Object(l["a"])(y,g,b,!1,null,"0cffbda4",null)),k=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])}],O={name:"HelloWorld",props:{msg:String}},E=O,$=(a("b401"),Object(l["a"])(E,x,j,!1,null,"7c18b268",null)),S=$.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-layout"},[a("section",[a("div",{staticClass:"gap color-bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"faq-top"},[a("h1",[t._v("Connect Account")]),a("b-button",{attrs:{variant:"success"}},[t._v("Button")])],1)]),t._m(0),t._m(1)])])])]),t._m(2)])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row know-box"},[a("div",{staticClass:"col-lg-4 col-md-4"},[a("div",{staticClass:"knowldeg-box"},[a("i",{staticClass:"fa fa-file-o"}),a("span",[t._v("Knowledge Base")]),a("p",[t._v("Guys! you may make your own social media website for their friends, or publically.")]),a("a",{staticClass:"underline",attrs:{href:"#",title:""}},[t._v("Read More")])])]),a("div",{staticClass:"col-lg-4 col-md-4"},[a("div",{staticClass:"knowldeg-box"},[a("i",{staticClass:"fa fa-check-square-o"}),a("span",[t._v("FAQ")]),a("p",[t._v("Guys! you may make your own social media website for their friends, or publically.")]),a("a",{staticClass:"underline",attrs:{href:"#",title:""}},[t._v("Read More")])])]),a("div",{staticClass:"col-lg-4 col-md-4"},[a("div",{staticClass:"knowldeg-box"},[a("i",{staticClass:"fa fa-envelope-o"}),a("span",[t._v("Contact us")]),a("p",[t._v("Guys! you may make your own social media website for their friends, or publically.")]),a("a",{staticClass:"underline",attrs:{href:"#",title:""}},[t._v("Read More")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row know-box"},[a("div",{staticClass:"col-lg-4 col-md-4"},[a("div",{staticClass:"knowldeg-box"},[a("i",{staticClass:"fa fa-file-o"}),a("span",[t._v("Knowledge Base")]),a("p",[t._v("Guys! you may make your own social media website for their friends, or publically.")]),a("a",{staticClass:"underline",attrs:{href:"#",title:""}},[t._v("Read More")])])]),a("div",{staticClass:"col-lg-4 col-md-4"},[a("div",{staticClass:"knowldeg-box"},[a("i",{staticClass:"fa fa-check-square-o"}),a("span",[t._v("FAQ")]),a("p",[t._v("Guys! you may make your own social media website for their friends, or publically.")]),a("a",{staticClass:"underline",attrs:{href:"#",title:""}},[t._v("Read More")])])]),a("div",{staticClass:"col-lg-4 col-md-4"},[a("div",{staticClass:"knowldeg-box"},[a("i",{staticClass:"fa fa-envelope-o"}),a("span",[t._v("Contact us")]),a("p",[t._v("Guys! you may make your own social media website for their friends, or publically.")]),a("a",{staticClass:"underline",attrs:{href:"#",title:""}},[t._v("Read More")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottombar"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"copyright"},[t._v("© healthbook 2019. All rights reserved.")])])])])])}],H={name:"HelloWorld",props:{msg:String}},A=H,T=(a("fbc5"),Object(l["a"])(A,M,P,!1,null,"56906c51",null)),F=T.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0)])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])}],q={name:"HelloWorld",props:{msg:String}},B=q,W=(a("9156"),Object(l["a"])(B,G,R,!1,null,"d96438de",null)),z=W.exports;s["default"].use(d["a"]);var J=[{path:"/",name:"home",component:_,title:"home"},{path:"/careteam",name:"CareTeam",component:k,title:"CareTeam"},{path:"/faq",name:"faq",component:S,title:"home"},{path:"/setup",name:"Setup",component:F,title:"home"},{path:"/timeline",name:"Timeline",component:z,title:"home"}],K=new d["a"]({routes:J,mode:"history",linkExactActiveClass:"active"}),Q=a("5f5b");a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(Q["a"]),new s["default"]({el:"#app",router:K,render:function(t){return t(u)}})},6929:function(t,e,a){},"6ab1":function(t,e,a){"use strict";var s=a("a5e5"),i=a.n(s);i.a},"85ec":function(t,e,a){},9156:function(t,e,a){"use strict";var s=a("1cd8"),i=a.n(s);i.a},a5e5:function(t,e,a){},b401:function(t,e,a){"use strict";var s=a("f9c9"),i=a.n(s);i.a},ba76:function(t,e,a){},f9c9:function(t,e,a){},fbc5:function(t,e,a){"use strict";var s=a("ba76"),i=a.n(s);i.a}});
//# sourceMappingURL=app.04351c70.js.map