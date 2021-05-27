(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{240:function(e,n,t){"use strict";t.r(n);var r=t(0),s=Object(r.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"路由拦截"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由拦截"}},[e._v("#")]),e._v(" "),t("em",[e._v("路由拦截")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n// 首先在定义路由的时候就需要多添加一个自定义字段requireAuth，用于判断该路由的访问是否需要登录。如果用户已经登录，则顺利进入路由，\nconst routes = [\n    {\n        path: '/',\n        name: '/',\n        component: Index\n    },\n    {\n        path: '/repository',\n        name: 'repository',\n        meta: {\n            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的\n        },\n        component: Repository\n    },\n    {\n        path: '/login',\n        name: 'login',\n        component: Login\n    }\n\n\n///我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断\nrouter.beforeEach((to, from, next) => {\n    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限\n        if (store.state.token) {  // 通过vuex state获取当前的token是否存在\n            next();\n        }\n        else {\n            next({\n                path: '/login',\n                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由\n            })\n        }\n    }\n    else {\n        next();\n    }\n})\n\n*注意：vue与react都可以使用\n// 每个钩子方法接收三个参数：\n// * to: Route: 即将要进入的目标 路由对象\n// * from: Route: 当前导航正要离开的路由\n// * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。\n// * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。\n// * next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。\n// * next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。\n\n\n")])])]),t("h3",{attrs:{id:"拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[e._v("#")]),e._v(" "),t("em",[e._v("拦截器")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// http request 拦截器\naxios.interceptors.request.use(\n    config => {\n        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token\n            config.headers.Authorization = `token ${store.state.token}`;\n        }\n        return config;\n    },\n    err => {\n        return Promise.reject(err);\n    });\n\n// http response 拦截器\naxios.interceptors.response.use(\n    response => {\n        return response;\n    },\n    error => {\n        if (error.response) {\n            switch (error.response.status) {\n                case 401:\n                    // 返回 401 清除token信息并跳转到登录页面\n                    store.commit(types.LOGOUT);\n                    router.replace({\n                        path: 'login',\n                        query: {redirect: router.currentRoute.fullPath}\n                    })\n            }\n        }\n        return Promise.reject(error.response.data)   // 返回接口返回的错误信息\n    });\n\n")])])]),t("h3",{attrs:{id:"http-拦截"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-拦截"}},[e._v("#")]),e._v(" "),t("em",[e._v("http 拦截")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * http配置\n */\n// 引入axios以及element ui中的loading和message组件\nimport axios from 'axios'\nimport { Loading, Message } from 'element-ui'\n// 超时时间\naxios.defaults.timeout = 5000\n// http请求拦截器\nvar loadinginstace\naxios.interceptors.request.use(config => {\n // element ui Loading方法\n loadinginstace = Loading.service({ fullscreen: true })\n return config\n}, error => {\n loadinginstace.close()\n Message.error({\n message: '加载超时'\n })\n return Promise.reject(error)\n})\n// http响应拦截器\naxios.interceptors.response.use(data => {// 响应成功关闭loading\n loadinginstace.close()\n return data\n}, error => {\n loadinginstace.close()\n Message.error({\n message: '加载失败'\n })\n return Promise.reject(error)\n})\n\nexport default axios\n\n\n\n复制代码\n")])])]),t("p",[e._v("转载于:https://juejin.im/post/5ceb3f9bf265da1b860864e8")])])}],!1,null,null,null);n.default=s.exports}}]);