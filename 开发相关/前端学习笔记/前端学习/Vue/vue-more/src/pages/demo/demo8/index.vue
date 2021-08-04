<template>
  <div>
    <!-- 001 初始化传值：使用props -->
    <!-- 子组件内需要更改的参数使用bind -->
    <!-- 002 调用子组件的方法，定义ref，使用$refs调用相关方法 -->
    <count-down :time="100" title="100秒定时器" ref="countDown"></count-down>
    <count-down title="20秒父组件计时器" :time="20" ref="countDown20"></count-down>
    <button @click="getCountDownTime">点击获取子组件当前time值</button>

    <ga-button title="gaButton" bgColor="#0f0"></ga-button>

    <button @click="sendNotification">Index发送通知</button>
  </div>
</template>

<script>
import Countdown from "./components/CountDown";
import Button from "./components/Button";
import VueNotification from "./js/VueNotification";

export default {
  data() {
    return {
      parentData: "父组件的数据，子组件使用$parent获取",
    };
  },
  components: {
    "count-down": Countdown,
    "ga-button": Button,
  },
  mounted() {
    this.receivedNotification();
  },
  methods: {
    getCountDownTime() {
      console.log(this.$refs.countDown.currentTime());
      console.log(this.$refs.countDown20.currentTime());
    },
    sendNotification() {
      console.log("fasong ");
      VueNotification.$emit("index", "父组件发出通知");
    },
    receivedNotification() {
      VueNotification.$on("button", function(message) {
        console.log(message);
      });
      VueNotification.$on("count-down-from", function(message) {
        console.log("index: count-down-from" + message);
      });
    },
  },
};
</script>

<style></style>
