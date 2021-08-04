import Vue from 'vue';
const Loadingcomponent = Vue.extend({
  template: "<div id='loading'>{{msg}}</div>",
  props: {
    msg: {
      type: String,
      default: "loading..."
    }
  }
})

function loading(msg, duration = 2000) {
  let div = document.createElement("div")
  div.setAttribute("id", "loading-wrapper")
  document.body.appendChild(div)   // 创建一个dom元素，将其添加到body中，后面loading渲染后将其替换。
  new Loadingcomponent({   //  这里传入的对象会替换掉模板里面相同的内容（props ,  msg ）
    props: {
      msg: {
        type: String,
        default: msg   //  将默认值改变成传入的 msg 
      }
    }
  }).$mount("#loading-wrapper")   //  渲染loading ， 并将 loading-temp 替换成 loading

  setTimeout(() => {
    document.body.removeChild(document.querySelector("#loading"))
  }, duration);

}

Vue.prototype.$loading = loading    //  将loading函数添加到vue的原型对象，方便以后的vue实例调用