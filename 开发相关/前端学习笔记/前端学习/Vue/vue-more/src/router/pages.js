// demo11的components
import Tab from '@/pages/demo/demo11/children/components/tab'
import Tab1 from '@/pages/demo/demo11/children/components/tab1'
import Tab2 from '@/pages/demo/demo11/children/components/tab2'

export const Pages = [{
  // root
  path: '/',
  name: '',
  // component: Demo1
  component: () => import('@/pages/root/index.vue'), // .defualt 解决Failed to mount component: template or render function not defined.
}, {
  // root
  path: '/Root',
  name: 'Root',
  // component: Demo1
  component: () => import('@/pages/root/index.vue'), // .defualt 解决Failed to mount component: template or render function not defined.
}, {
  // 生命周期
  path: '/Demo1',
  name: 'Demo1',
  // component: Demo1
  component: () => import('@/pages/demo/demo1/index.vue'), // .defualt 解决Failed to mount component: template or render function not defined.
}, {
  /*
    选项数据 自定义组件实现v-model
    v-model双向绑定计算属性 set get 
    watch开启深度监听deep 
  */
  path: '/Demo2',
  name: 'Demo2',
  component: () => import('@/pages/demo/demo2/index.vue'),
}, {
  /* 
    模板语法：
    data
    模板中嵌入js代码
    指令v-html v-on v-bind
    计算属性
    过滤器
  */
  path: '/Demo3',
  name: 'Demo3',
  component: () => import('@/pages/demo/demo3/index.vue'),
}, {
  /* 
    Class绑定
    1、{active: isActive, 'text-danger':hasError}
    2、classObect
    3、[activeClass, errorClass]
  */
  /*  
     Style绑定
     1、{color: activeColor, fontSize: '16px'}
     2、styleObject
     3、[baseStyles, overridingStyles]
  */
  path: '/Demo4',
  name: 'Demo4',
  component: () => import('@/pages/demo/demo4/index.vue'),
}, {
  /* 条件渲染 */
  // v-if v-else-if v-else

  path: '/Demo5',
  name: 'Demo5',
  component: () => import('@/pages/demo/demo5/index.vue'),
}, {
  /* 列表渲染 */
  // v-for

  path: '/Demo6',
  name: 'Demo6',
  component: () => import('@/pages/demo/demo6/index.vue'),
}, {
  /* 事件处理器 */

  path: '/Demo7',
  name: 'Demo7',
  component: () => import('@/pages/demo/demo7/index.vue'),
}, {
  /* 自定义组件 */
  // 组件间的传值:props parents 通知 $refs

  path: '/Demo8',
  name: 'Demo8',
  component: () => import('@/pages/demo/demo8/index.vue'),
}, {
  /* DOM操作 */

  path: '/Demo9',
  name: 'Demo9',
  component: () => import('@/pages/demo/demo9/index.vue'),
}, {
  /* 过渡动画 animate.css动画 */

  path: '/Demo10',
  name: 'Demo10',
  component: () => import('@/pages/demo/demo10/index.vue'),
}, {
  /* 路由 */

  path: '/Demo11/:id',
  name: '',
  component: () => import('@/pages/demo/demo11/index.vue'),
  children: [{
    path: '', // 子路由path没有反斜杠
    name: '',
    component: () => import('@/pages/demo/demo11/children/demo11_1/index.vue').default
  }, {
    path: 'Demo11_1', // 子路由path没有反斜杠
    name: 'Demo11_1',
    component: () => import('@/pages/demo/demo11/children/demo11_1/index.vue'),
    // components: {
    //   default: Tab1,
    //   tab1: Tab1,
    //   tab2: Tab1,
    // }
  }, {
    path: 'Demo11_2',
    name: 'Demo11_2',
    component: () => import('@/pages/demo/demo11/children/demo11_2/index.vue'),
    components: {
      default: Tab,
      tab2: Tab2,
      tab1: Tab1,
    },
    alias: "BD"
  }],
  beforeEnter: (to, from, next) => {
    next();
  },
}, {
  /* vuex */

  path: '/Demo12',
  name: 'Demo12',
  component: () => import('@/pages/demo/demo12/index.vue'),
}, {
  /* vuex */

  path: '/getStore',
  name: 'getStore',
  component: () => import('@/pages/demo/demo12/getStore.vue'),
}, {
  /* slot */

  path: '/Demo13',
  name: 'Demo13',
  component: () => import('@/pages/demo/demo13/index.vue'),
}, {
  /* axios */

  path: '/Demo14',
  name: 'Demo14',
  component: () => import('@/pages/demo/demo14/index.vue'),
}, {
  /* px2rem */

  path: '/Demo15',
  name: 'Demo15',
  component: () => import('@/pages/demo/demo15/index.vue'),
}, {
  /* 组件 动态组件 异步组件 */
  path: '/Demo16',
  name: 'Demo16',
  component: () => import('@/pages/demo/demo16/index.vue'),
}, {
  /* Vue.extend */
  path: '/Demo17',
  name: 'Demo17',
  // component: () => import('@/pages/demo/demo17/index.vue'),
  component: () => import('@/pages/demo/demo17/index.vue'),

}, {
  /* nextTick 异步渲染 */
  path: '/Demo18',
  name: 'Demo18',
  component: () => import('@/pages/demo/demo18/index.vue'),
}, {
  /* 混入 mixin */
  path: '/Demo19',
  name: 'Demo19',
  component: () => import('@/pages/demo/demo19/index.vue'),
}]

