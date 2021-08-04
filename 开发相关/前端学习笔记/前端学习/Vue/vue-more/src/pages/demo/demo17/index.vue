<template>
  <div>
    <div>Vue.extend</div>

    <div id="mount-point"></div>

    <div id="extend-demo"></div>

    <div id="root">
      {{ message }}
      <button @click="btnClick">开始loading</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
require("./GAToast");
require("./GANav");
export default {
  data() {
    return {
      message: "正在加载...",
    };
  },
  mounted() {
    var extendDemo = Vue.extend({
      template: `<p>123</p>`,
    });
    new extendDemo().$mount("#extend-demo");

    var Profile = Vue.extend({
      template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
      data: function() {
        return {
          firstName: "Walter",
          lastName: "White",
          alias: "Heisenberg",
        };
      },
    });

    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount("#mount-point");

    console.log("---");

    this.$showNav("展示");
  },
  methods: {
    btnClick() {
      this.$loading("正在加载...", 6000); //  点击按钮调用之前创建的 loading 函数，返回一个清除过场的回调函数

      this.$nav.title = "123";
      this.message = "123123123";
    },
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to, from, next());
  },
};
</script>

<style>
@import url(./GAToast.css);

#ga-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 40px;
  z-index: 20000;
  background-color: #990000;
}
</style>
