# uniapp 开发实践

## 1、uniapp 是什么？

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。是 vue 技术栈中最好的**跨终端解决方案**。

## 2、uniapp 重要变化

### 2-1、组件/标签的变化

**由于 uniapp 要进行多端兼容，虽然 div 也是可以在 uniapp 开发中使用，但是由于是编辑器帮忙做了 html 转化，不推荐使用 div，使用 div 原生标签可能会导致意想不到的错误出现。**

以前是 html 标签，比如`，现在是小程序组件，比如`。
那么`标签`和`组件`有什么区别，不都是用尖括号包围起来一段英文吗？
其实标签是老的概念，标签属于浏览器内置的东西。但组件，是可以自由扩展的。
类似你可以把一段 js 封装成函数或模块，你也可以把一个 ui 控件封装成一个组件。

`uni-app`参考小程序规范，提供了一批内置组件。

下为 html 标签和 uni-app 内置组件的映射表：

- div 改成 [view](https://uniapp.dcloud.io/component/view)
- span、font 改成 [text](https://uniapp.dcloud.io/component/text)
- a 改成 [navigator](https://uniapp.dcloud.io/component/navigator)
- img 改成 [image](https://uniapp.dcloud.io/component/image)
- [input](https://uniapp.dcloud.io/component/input) 仅仅是输入框。 原 html 规范中 input 不仅是输入框，还有 radio、checkbox、时间、日期、文件选择功能。在 uni-app 和小程序规范中，input 仅仅是输入框。其他功能 uni-app 有单独的组件或 API：[radio 组件](https://uniapp.dcloud.io/component/radio)、[checkbox 组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=时间选择器)、[日期选择](https://uniapp.dcloud.io/component/picker?id=日期选择器)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。
- [form](https://uniapp.dcloud.io/component/form)、[button](https://uniapp.dcloud.io/component/button)、[label](https://uniapp.dcloud.io/component/label)、[textarea](https://uniapp.dcloud.io/component/textarea)、[canvas](https://uniapp.dcloud.io/component/canvas)、[video](https://uniapp.dcloud.io/component/video) 这些还在。
- select 改成 [picker](https://uniapp.dcloud.io/component/picker)
- iframe 改成 [web-view](https://uniapp.dcloud.io/component/web-view)
- ul、li 没有了，都用 view 替代。做列表一般使用[uList 组件](https://ext.dcloud.net.cn/plugin?id=24)
- audio 不再推荐使用，改成 api 方式，[背景音频 api 文档](https://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager)
  其实老的 HTML 标签也可以在 uni-app 里使用，uni-app 编译器会在编译时把老标签转为新标签，比如把 div 编译成 view。但不推荐这种用法，调试 H5 端时容易混乱。

**除了改动外，新增了一批手机端常用的新组件**

- scroll-view [可区域滚动视图容器](https://uniapp.dcloud.io/component/scroll-view)
- swiper [可滑动区域视图容器](https://uniapp.dcloud.io/component/swiper)
- icon [图标](https://uniapp.dcloud.io/component/icon)
- rich-text [富文本（不可执行 js，但可渲染各种文字格式和图片）](https://uniapp.dcloud.io/component/rich-text)
- progress [进度条](https://uniapp.dcloud.io/component/progress)
- slider [滑块指示器](https://uniapp.dcloud.io/component/slider)
- switch [开关选择器](https://uniapp.dcloud.io/component/switch)
- camera [相机](https://uniapp.dcloud.io/component/camera)
- live-player [直播](https://uniapp.dcloud.io/component/live-player)
- map [地图](https://uniapp.dcloud.io/component/map)
- cover-view [可覆盖原生组件的视图容器](https://uniapp.dcloud.io/component/cover-view?id=cover-view)

### 2-2、js 的变化

运行环境从浏览器变成 v8 引擎

- 标准 js 语法和 api 都支持，比如 if、for、settimeout、indexOf 等
- **BOM 对象问题**，浏览器专用的 window、document、navigator、location 对象，只有在浏览器中才有，app 和小程序都不支持，这意味着依赖 document 的很多 HTML 的库，比如 jqurey 无法使用。但是 app 和小程序支持 web-view 组件，里面可以加载标准 HTML，这种页面仍然支持浏览器专用对象 window、document、navigator、location

以前的 dom 操作，改成 vue 的 MVVM 模式

- alert,confirm 改成 [uni.showmodel](https://links.jianshu.com/go?to=https%3A%2F%2Funiapp.dcloud.io%2Fapi%2Fui%2Fprompt%3Fid%3Dshowmodal)
- ajax 改成 [uni.request](https://links.jianshu.com/go?to=https%3A%2F%2Funiapp.dcloud.io%2Fapi%2Frequest%2Frequest)
- cookie、session 没有了，local.storage 改成 [uni.storage](https://links.jianshu.com/go?to=https%3A%2F%2Funiapp.dcloud.io%2Fapi%2Fstorage%2Fstorage%3Fid%3Dsetstorage)
- uni-app 的 js api 还有很多，但基本就是小程序的 api，把 wx.xxx 改为 uni.xxx 即可

### 2-3、css 的变化

- 选择器有 2 个变化：\*通配符选择器不支持；元素选择器里没有 body，改为了 page
- 单位方面，px 无法动态适应不同宽度的屏幕，rem 只能用于 h5、rpx 只能用于微信小程序。为此 uni-app 新增了 upx ，通吃所有端、所有屏幕宽度的动态单位 [upx](https://links.jianshu.com/go?to=https%3A%2F%2Funiapp.dcloud.io%2Fframe%3Fid%3D%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)
- uni-app 推荐使用 flex 布局，并默认就是 flex 布局

## 3、快速上手

### 3-1、创建项目

![创建项目](https://static01.imgkr.com/temp/83d1d37f43a648688a7a93c02cbd638a.png)

​ 通过 hbuilderX 创建项目，点击新建项目，选择合适的模版（[vue-cli 创建参照官网](https://uniapp.dcloud.io/quickstart-hx?id=%e5%88%9b%e5%bb%bauni-app)）

### 3-2、运行项目

![运行项目](https://static01.imgkr.com/temp/495835cb9df74a08b444167e862f4df7.png)

​ 如图依次点击，即可选择自己想要运行到的环境之中

### 3-3、打包项目

![发布项目](https://static01.imgkr.com/temp/6ab0c4a8dcef4dc981cfaf6c5886c25e.png)

​ 离线打包的方式参照官网[离线打包](https://uniapp.dcloud.io/quickstart-hx?id=%e5%8f%91%e5%b8%83%e4%b8%bah5)

## 4、项目结构

![项目结构](https://static01.imgkr.com/temp/0634cd83f1ab4e0bb2b2b3c08e0c4077.png)

​ 此结构目录是参考的智学徒微信网页端，最好统一技术栈统一的文件夹风格，方便迅速定位，快速了解项目。

## 5、起步

### 5-1、pages.json

uniapp 原生中没有 router 文件，使用了小程序一样的配置写法，在 pages.json 中按照格式声明即可创建`页面`，可以在配置中创建 tabbar 以及 navbar，同时还可以设置一些能力 api，例如：下拉刷新（enablePullDownRefresh）以及条件语法。

### 5-2、生命周期\*

uniapp 不同于普通的 vue 项目，在 vue 项目中，组件也可以是页面。而在 uniapp 中，只有在 pages.json 中的 page 声明了才能是页面，才具有页面的生命周期。

- #### [应用生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=应用生命周期)

  | 函数名               | 说明                                                                                                            |
  | :------------------- | :-------------------------------------------------------------------------------------------------------------- |
  | onLaunch             | 当`uni-app` 初始化完成时触发（全局只触发一次）                                                                  |
  | onShow               | 当 `uni-app` 启动，或从后台进入前台显示                                                                         |
  | onHide               | 当 `uni-app` 从前台进入后台                                                                                     |
  | onError              | 当 `uni-app` 报错时触发                                                                                         |
  | onUniNViewMessage    | 对 `nvue` 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯](https://uniapp.dcloud.io/nvue-api?id=communication) |
  | onUnhandledRejection | 对未处理的 Promise 拒绝事件监听函数（2.8.1+）                                                                   |
  | onPageNotFound       | 页面不存在监听函数                                                                                              |
  | onThemeChange        | 监听系统主题变化                                                                                                |

* #### [页面生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=页面生命周期)

  |         |                                                                                                                                            |              |          |
  | :------ | :----------------------------------------------------------------------------------------------------------------------------------------- | :----------- | :------- |
  | 函数名  | 说明                                                                                                                                       | 平台差异说明 | 最低版本 |
  | onInit  | 监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad                         | 百度小程序   | 3.1.0+   |
  | onLoad  | 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](https://uniapp.dcloud.io/api/router?id=navigateto) |              |          |
  | onShow  | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面                                                                 |              |          |
  | onReady | 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发                                                                       |              |          |

* #### [组件生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=组件生命周期)

* |               |                                                                                                                                                                                                                             |                |          |
  | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------- |
  | 函数名        | 说明                                                                                                                                                                                                                        | 平台差异说明   | 最低版本 |
  | beforeCreate  | 在实例初始化之后被调用。[详见](https://cn.vuejs.org/v2/api/#beforeCreate)                                                                                                                                                   |                |          |
  | created       | 在实例创建完成后被立即调用。[详见](https://cn.vuejs.org/v2/api/#created)                                                                                                                                                    |                |          |
  | beforeMount   | 在挂载开始之前被调用。[详见](https://cn.vuejs.org/v2/api/#beforeMount)                                                                                                                                                      |                |          |
  | mounted       | 挂载到实例上去之后调用。[详见](https://cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用`$nextTick`[Vue 官方文档](https://cn.vuejs.org/v2/api/#Vue-nextTick) |                |          |
  | beforeUpdate  | 数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://cn.vuejs.org/v2/api/#beforeUpdate)                                                                                                                                | 仅 H5 平台支持 |          |
  | updated       | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://cn.vuejs.org/v2/api/#updated)                                                                                                             | 仅 H5 平台支持 |          |
  | beforeDestroy | 实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://cn.vuejs.org/v2/api/#beforeDestroy)                                                                                                                            |                |          |
  | destroyed     | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://cn.vuejs.org/v2/api/#destroyed)                                                              |                |          |

### 5-3、页面通讯

页面通讯可以使用$emit等，由于跨平台的问题，view组件经过了封装，使用this.$parent 时应注意，不同端获取的组件不一定是意料之中的组件。

### 5-4、路由跳转

#### 5-4-1、基础跳转

- #### [uni.navigateTo(OBJECT)](https://uniapp.dcloud.io/api/router?id=navigateto)

保留当前页面，跳转到应用内的某个页面，使用`uni.navigateBack`可以返回到原页面。

```
uni.navigateTo({
    url: '/pages/other/index'
});
```

- #### [uni.switchTab(OBJECT)](https://uniapp.dcloud.io/api/router?id=switchtab)

  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

  ```
  uni.switchTab({
      url: '/pages/about/index'
  });
  ```

#### 5-4-2、权限路由\*

- 安装依赖[uni-simple-router](https://hhyang.cn/src/router/start/quickstart.html)和[uni-read-pages](https://github.com/SilurianYang/uni-read-pages)依赖

- 配置

  - **main.js**

  ```js
  import Vue from 'vue'
  import App from './App'
  import router from './router'
  import { RouterMount } from 'uni-simple-router'

  Vue.config.productionTip = false

  App.mpType = 'app'

  const app = new Vue({
    ...App
  })
  //v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
  // #ifdef H5
  RouterMount(app, '#app')
  // #endif

  // #ifndef H5
  app.$mount() //为了兼容小程序及app端必须这样写才有效果
  // #endif
  ```

  - **vue.config.js**

  ```
  const TransformPages = require('uni-read-pages')
  const {
  	webpack
  } = new TransformPages()
  module.exports = {
  	transpileDependencies: ['uni-simple-router'],
  	configureWebpack: {
  		devServer: {
  			disableHostCheck: true
  		},
  		plugins: [
  			new webpack.DefinePlugin({
  				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
  					const tfPages = new TransformPages({
  						includes: ['path', 'name', 'meta']
  					});
  					return JSON.stringify(tfPages.routes)
  				}, true)
  			})
  		]
  	}
  }
  ```

  - **router/index.js**

  ```js
  import Vue from 'vue'
  import Router from 'uni-simple-router'

  Vue.use(Router)

  //初始化

  const router = new Router({
    encodeURI: false, //不对参数编码
    mode: 'hash',
    scrollBehavior: () => ({
      y: 0
    }),
    routes: ROUTES
  })

  router.beforeEach(async (to, from, next) => {
    console.log('路由跳转to：', to)
    next()
  })

  router.afterEach(() => {})

  export default router
  ```

### 5-5、发送请求

#### 5-5-1、内置请求

**[uni.request(OBJECT)](https://uniapp.dcloud.io/api/request/request?id=request)**

发起网络请求。

```js
uni.request({
  url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
  data: {
    text: 'uni.request'
  },
  header: {
    'custom-header': 'hello' //自定义请求头信息
  },
  success: res => {
    console.log(res.data)
    this.text = 'request success'
  }
})
```

#### 5-5-2、自定义请求封装\*

可以预见，原生 uni.request 发送请求不可避免会出现回调地狱问题，我们可以依据的内置 uni.request 进行常用的请求封装，将返回值包裹在新的 Promise 中方便我们进行链式调用。

```js
import { url_config } from '../config.js'

import { getToken } from './auth.js'

import store from '@/store/index.js'
const http = params => {
  //返回promise 对象
  return new Promise((resolve, reject) => {
    console.log('请求信息', params)
    uni.showLoading({
      title: '加载中'
    })
    uni.request({
      // 环境变量+参数中携带的接口具体地址
      url: url_config + params.url,
      // 请求参数
      data: params.data,
      // 设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
      header: params.header || {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: getToken()
      },
      method: (params.method && params.method.toUpperCase()) || 'POST', //默认为POST请求
      dataType: 'json', //返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数
      success: res => {
        uni.hideLoading()
        // 接口访问正常返回数据
        if (res.statusCode == 200) {
          //1. 操作成功返回数据
          resolve(res.data)
        }
        //token过期
        else if (res.statusCode == 401) {
          store.dispatch('user/resetToken').then(_ => {
            uni.navigateTo({
              // url:'/pages/redirect-page/index'
              url: '/pages/login/index?redirect=true'
            })
          })
          reject('token过期')
        } else if (res.statusCode == 400) {
          uni.showToast({
            icon: 'none',
            title: res.data.error_description,
            duration: 3000
          })
          store.dispatch('user/resetToken').then(_ => {
            uni.navigateTo({
              // url:'/pages/redirect-page/index'
              url: '/pages/login/index?redirect=true'
            })
          })
          reject('400')
        } else if (res.statusCode == 403) {
          console.log(res)
          uni.showToast({
            icon: 'none',
            title: res.data.msg,
            duration: 3000
          })
          store.dispatch('user/resetToken').then(_ => {
            uni.navigateTo({
              // url:'/pages/redirect-page/index'
              url: '/pages/login/index?redirect=true'
            })
          })
          reject('403')
        } else {
          uni.showToast({
            icon: 'none',
            title: '请求出错' + res.data.Message,
            duration: 3000
          })
          resolve(res.data)
        }
      },
      fail: function(e) {
        uni.hideLoading()
        console.log('请求失败', e)
        if (e.errMsg === 'request:fail timeout') {
          uni.showToast({
            icon: 'none',
            title: '网络连接超时,请稍后重试'
          })
        }
        reject(e)
      }
    })
  })
}
export default http
```

#### 5-5-3、推荐第三方请求库

- [flyio](https://wendux.github.io/dist/#/doc/flyio/readme)
- [uview 提供的请求工具](https://uviewui.com/js/http.html)

### 5-6、组件库

- [官方组件](https://uniapp.dcloud.io/component/README?id=%e7%bb%84%e4%bb%b6%e4%bd%bf%e7%94%a8%e7%9a%84%e5%85%a5%e9%97%a8%e6%95%99%e7%a8%8b)
- [uview\*](https://uviewui.com/)：提供了内置样式主题，可修改，iconfont 引入，强大的常用 js 库，常用模版，以及资源，组件库中代码注释完备。
- [vant](https://vant-contrib.gitee.io/vant/#/zh-CN/)：组件丰富，使用简单，性能优秀。

### 5-7、自适应

- **Viewport 布局**

  使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax)，推荐使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 进行转换。

  [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。

  #### PostCSS PostCSS 示例配置

  下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。

  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375
      }
    }
  }
  ```

  > Tips: 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致组件库样式无法被编译。

- **Rem 布局适配**（字体小于 12px，chrome 浏览器内核不展示）

  如果需要使用 `rem` 单位进行适配，推荐使用以下两个工具：

  - [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
  - [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

  #### PostCSS 示例配置

  下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。

  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      }
    }
  }
  ```

  #### 其他设计稿尺寸

  如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 `rootValue` 配置调整为:

  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      // postcss-pxtorem 插件的版本需要 >= 5.0.0
      'postcss-pxtorem': {
        rootValue({ file }) {
          return file.indexOf('vant') !== -1 ? 37.5 : 75
        },
        propList: ['*']
      }
    }
  }
  ```
