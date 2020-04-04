(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{880:function(t,e,o){"use strict";o.r(e);var n=o(4),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"loading-button"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loading-button"}},[t._v("#")]),t._v(" loading-button")]),t._v(" "),o("p",[t._v("懒人专用，小写一个 "),o("code",[t._v("loading")]),t._v(" 效果，传入 "),o("code",[t._v("promise")]),t._v(" 就会在 "),o("code",[t._v("promise pending")]),t._v(" 期间产生 "),o("code",[t._v("loading")]),t._v(" 的效果，"),o("code",[t._v("resolve")]),t._v(" 或者 "),o("code",[t._v("rejected")]),t._v(" 后结束。")]),t._v(" "),o("h2",{attrs:{id:"基本使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),o("no-ssr",[o("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n    <loading-button :click=\"click\">click me</loading-button>\n</template>\n\n<script>\nexport default {\n    methods: {\n        click() {\n            return new Promise((resolve) => setTimeout(() => {\n                console.log('do something')    \n                resolve()\n            }, 2000))\n        }\n    }\n}\n<\/script>\n",requires:{}}})],1),o("h2",{attrs:{id:"props"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Required")]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("click")]),t._v(" "),o("td",[t._v("点击的 function, 如果为 promise 有 loading 效果")]),t._v(" "),o("td",[o("code",[t._v("Function")])]),t._v(" "),o("td",[o("code",[t._v("false")])]),t._v(" "),o("td",[t._v("() => {}")])])])]),t._v(" "),o("h2",{attrs:{id:"slots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" slots")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Default Slot Content")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("default")]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("-")])])])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);