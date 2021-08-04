<template>
  <div>
    <button ref="btn" @>{{ title }}</button>
    <button @click="sendNotification">Button发送通知</button>
    <div>{{ messageFromCountDown }}</div>
    <div>{{ messageFromIndex }}</div>
  </div>
</template>

<script>
import VueNotification from "../js/VueNotification";

export default {
  data() {
    return {
      messageFromCountDown: "",
      messageFromIndex: "",
    };
  },
  props: {
    title: {
      type: String,
      default: "普通按钮",
    },
    bgColor: {
      type: String,
      default: "#00f",
    },
  },
  mounted() {
    this.$refs.btn.style.backgroundColor = this.bgColor;
    this.receivedNotification();
  },
  methods: {
    sendNotification() {
      VueNotification.$emit("button", "Button发送通知");
    },
    receivedNotification() {
      let self = this;
      VueNotification.$on("count-down-from", function(message) {
        self.messageFromCountDown = message;
      });
      VueNotification.$on("index", function(message) {
        console.log("接收");
        self.messageFromIndex = message;
      });
    },
  },
};
</script>

<style></style>
