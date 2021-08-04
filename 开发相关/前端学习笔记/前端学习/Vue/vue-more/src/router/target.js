import RedirectTarget from '@/pages/redirectTarget';

export const Target = [{
  /* 路由跳转目标界面 接收参数 */

  path: '/Target/:id?',
  name: 'Target',
  component: () => import('@/pages/target/index.vue'),
  // redirect: '/RedirectTarget'
  // redirect: {name:'RedirectTarget'}
  redirect: to => {
    console.log(to);
    /*
    {name: "Target", meta: {…}, path: "/Target/1001", hash: "", query: {…}, …}
    fullPath: "/Target/1001?name=hjn&state=3"
    hash: ""
    matched: [{…}]
    meta: {}
    name: "Target"
    params: {id: 1001}
    path: "/Target/1001"
    query: {name: "hjn", state: 3}
    */
    // 方法接收 目标路由 作为参数
    return {
      name: 'RedirectTarget'
    }
  },
  meta: {
    isLogin: true
  }
}, {
  /* 路由重定向目标界面 */

  path: '/RedirectTarget',
  name: 'RedirectTarget',
  component: RedirectTarget,
  meta: {
    isLogin: true
  }
}]
