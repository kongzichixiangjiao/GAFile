##第三方组件
[TOC]

##### 组件化基础

传统组件，静态渲染，更新需要操作 DOM。asp jsp php 就有组件化。

###### 数据驱动视图

##### MVVM

Vue 响应式

Object.defineProperty

Vue.set
Vue.delete

虚拟 DOM（Virtual DOM）
vdom 是 react 提出来的
js v8 引擎 js 执行很快
vdom 用 js 模拟 dom 结构，计算出最小的变更，操作 DOM
diff 算法

JS 模拟 DOM 结构

```
<div id="div1" class="box">
    <p>JS模拟DOM结构<p>
    <ul style="font-size:20px">
        <li>text</li>
    </ul>
</div>
```

```
{
    tag: 'div',
    props: {
        id: 'div1',
        className: 'box'
    },
    children: [
        {
            tag: 'p',
            children: 'vdom'
        },
        {
            tag: 'ul',
            props: {
                style: 'font-size:20px'
            },
            children: [
                {
                    tag: 'li',
                    children: 'text'
                }
            ]
        }
    ]
}
```

snabbdom 学习 dom

diff 算法日常使用 key

diff 即对比，是一个广泛的概念，如 linux diff 命令、git diff 等

树 diff 的时间复杂度 O(n^3)。 O(n^3)的算法不可用，运算量太大。

优化时间复杂度到 O(n)
1、只比较同一层级
2、tag 不先相同，删除重建，不再深度比较
3、tag 和 key、绑定的事件都相同，则认为是相同结点，不再深度比较。

响应式：监听 data 属性 get set （数组重新绑定 proptytype）

模板编译： vue-template-complier with() vnode

编译命令：node index.js
with(this){return \_c('p',[_v(_s(flag ? message : 'no message'))])}

vdom：虚拟 dom 渲染

vue 组件如何渲染？
初次渲染：解析模板为 render 函数（vue-loader）
出发响应式，监听 data 属性 set get
执行 render 函数生成 vnode patch（打补丁）

路由 hash 模式 改变 hash 页面不会刷新 前端路由
window.onHashChange(event) {
event.newHash
event.oldHash
location.hash
}

路由 history 模式 跳转时不刷新页面 后断路由
history.pushState
window.onpopstate

组件化
响应式
vdom 和 diff
模板编译
渲染过程
前端路由
