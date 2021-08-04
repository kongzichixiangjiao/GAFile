##### vue-awesome-swiper 幻灯片

##### vue-lazyload 懒加载

##### axios 网络请求

##### jsonp jsonp 请求

##### fastclick 300 毫秒延迟

`npm install --save fastclick`

在 main.js 文件引入及应用

```
import fastclick from 'fastclick';
fastclick.attach(document.body);
```

##### babel-polyfill 转换 JavaScript 适配低版本浏览器

`npm install --save babel-polyfill`

在 main.js 文件的最顶部引入

`import 'babel-polyfill'`

##### vue-awesome-swiper 滚动

`npm install swiper vue-awesome-swiper --save`

##### vue-lazyload 懒加载

[github_vue-lazyload](https://github.com/hilongjw/vue-lazyload#installation)

###### 安装

`npm install --save vue-lazyload -S`

###### main.js 引入

```
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1 // 重试次数 默认3次
})
```

###### 使用

`<img v-lazy="img.src" >`

##### Date 相关

######安装
`npm install moment`
