(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{184:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"console-log-的坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#console-log-的坑"}},[t._v("#")]),t._v(" console.log 的坑")]),t._v(" "),n("blockquote",[n("p",[t._v("2018-09-18")])]),t._v(" "),n("p",[t._v("console.log 应该是大部分程序员每天都没使用的函数，有时候觉得打断点太麻烦。但其实也是有一些小坑的。我们直接来举一个例子来看：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {test:1}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {test:1}")]),t._v("\n")])])]),n("p",[t._v("大部分人会认为第一个输出的应该是一个空对象，是 a 对象的一个快照，但结果并不是这样的。\n两次输出都是"),n("code",[t._v("{test:1}")]),t._v("。")]),t._v(" "),n("p",[t._v("同理数组")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1]")]),t._v("\n")])])]),n("p",[t._v("这就很明显了，在"),n("code",[t._v("console.log")]),t._v("一些复杂数据类型的时候，浏览器只是保存了一个引用而已，并不是打印执行时的结果。所以当你在控制台查看的时候是这个值经过了多次操作后，当前最终结果。所以打印复杂类型值的时候要注意一下，打印出来的值是不一定准确的。")]),t._v(" "),n("p",[t._v("但部分情况是问题不大的，当真遇到时就很蛋疼了，最简单的方法序列化一下"),n("code",[t._v("console.log(JSON.parse(JSON.stringify(obj)))")]),t._v("。其实就是深拷贝一下。")])])}],!1,null,null,null);s.default=e.exports}}]);