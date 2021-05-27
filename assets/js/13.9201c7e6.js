(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{179:function(e,o,t){"use strict";t.r(o);var n=t(0),l=Object(n.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"nodelist-和-htmlcollection-之间的关系？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-和-htmlcollection-之间的关系？"}},[e._v("#")]),e._v(" NodeList 和 HTMLCollection 之间的关系？")]),e._v(" "),t("blockquote",[t("p",[e._v("2018-07-04")])]),e._v(" "),t("p",[e._v("历史上的 DOM 集合接口。主要不同在于 "),t("code",[e._v("HTMLCollection")]),e._v("是元素集合而 NodeList 是节点集合（即可以包含元素，也可以包含文本节点）。所以 "),t("code",[e._v("node.childNodes")]),e._v(" 返回 "),t("code",[e._v("NodeList")]),e._v("，而 "),t("code",[e._v("node.children")]),e._v(" 和 "),t("code",[e._v("node.getElementsByXXX")]),e._v(" 返回 "),t("code",[e._v("HTMLCollection")]),e._v(" 。")]),e._v(" "),t("p",[e._v("唯一要注意的是 "),t("code",[e._v("querySelectorAll")]),e._v(" 返回的虽然是 "),t("code",[e._v("NodeList")]),e._v(" ，但是实际上是元素集合，并且是静态的（其他接口返回的 "),t("code",[e._v("HTMLCollection")]),e._v(" 和 "),t("code",[e._v("NodeList")]),e._v(" 都是 live 的）。")]),e._v(" "),t("p",[e._v("Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. While a NodeList can contain any node type, an HTMLCollection is supposed to only contain Element nodes.\nAn HTMLCollection provides the same methods as a NodeList and additionally a method called namedItem.")]),e._v(" "),t("p",[e._v("Collections are always used when access has to be provided to multiple nodes, e.g. most selector methods (such as getElementsByTagName) return multiple nodes or getting a reference to all children (element.childNodes).")])])}],!1,null,null,null);o.default=l.exports}}]);