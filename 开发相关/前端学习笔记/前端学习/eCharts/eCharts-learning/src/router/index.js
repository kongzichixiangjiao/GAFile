import Vue from 'vue'
import Router from 'vue-router'
import lineBar from '@/components/line-bar'
import rose from '@/components/rose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lineBar',
      component: lineBar
    },
    {
      path: '/rose',
      name: 'rose',
      component: rose
    }
  ]
})
