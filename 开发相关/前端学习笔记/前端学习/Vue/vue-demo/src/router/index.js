import Vue from 'vue'
import Router from 'vue-router'

import {
  Pages
} from './pages'
import {
  Target
} from './Target'
import notFound from './notFound'
import {
  Login
} from './login'
import {
  Others
} from './other'
import {
  Main
} from './main.router'


Vue.use(Router)

const router = new Router({
  routerBase: '', // 在config文件根据不同环境配置
  // mode: 'history', // 默认是hash模式 URL有# history模式需要后端配置 https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子
  routes: [...Pages, ...Target, notFound, Login, ...Others, ...Main]
})

router.beforeEach((to, from, next) => {
  // console.log(`beforeEach: from`);
  // console.log(from);
  // console.log(`beforeEach: to`);
  // console.log(to);
  // console.log("matched");

  if (to.matched.some(record => record.meta.isLogin)) {
    let checkIsLogin = false;
    if (!checkIsLogin) {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

// vue 2.5.0+
// beforeResolve 同时在所有组件内守卫和异步路由组件被解析之后
router.beforeResolve((to, form, next) => {
  console.log("beforeResolve");
  next();
})

router.afterEach(route => {
  console.log(route);
})


export default router;