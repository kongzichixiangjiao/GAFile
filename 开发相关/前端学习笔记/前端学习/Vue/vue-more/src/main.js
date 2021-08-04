import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* 本地样式 开始 */
import "assets/scss/index.scss"
import 'utils/flexible/index.js'
/* 本地样式 结束 */

/* fastclick 开始 */
import fastclick from 'fastclick'
fastclick.attach(document.body);
/* fastclick 结束 */

/* animated 开始 */
import animated from 'animate.css' // npm install animate.css --save安装
Vue.use(animated)
/* animated 结束 */

/* vue-lazyload 开始 */
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1,
  // error: require('assets/img/error.png'),
  // loading: require('assets/img/loading.gif'),
  attempt: 1
});
/* vue-lazyload 结束 */

/* js-cookie 开始 */
import Cookies from "js-cookie"
Vue.prototype.Cookies = Cookies
/* js-cookie 结束 */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})