<template>
  <div>
    <p>{{ title }} : {{ timeP }}</p>
    <button @click="sendNotification">CountDown发送通知</button>
    <div>{{ messageFromButton }}</div>
    <div>{{ messageFromIndex }}</div>
  </div>
</template>

<script>
import VueNotification from "../js/VueNotification";

export default {
  data() {
    return {
      timeP: this.time,
      messageFromButton: "",
      messageFromIndex: "",
    };
  },
  /* props单向传值，只能传进来，如果想更改，需要在data中定义 */
  props: {
    time: {
      required: true,
      default: 10,
      type: Number,
    },
    title: {
      type: String,
      default: "定时器",
    },
  },
  mounted() {
    // 003 获取父组件的数据，使用$parent
    console.log("获取父组件数据：" + this.$parent.parentData);

    var vm = this;
    var t = setInterval(() => {
      vm.timeP -= 1;
      if (vm.timeP == 0) {
        clearInterval(t);
        vm.$emit("end");
      }
    }, 1000);

    this.receivedNotification();
  },
  methods: {
    currentTime() {
      return this.timeP;
    },
    sendNotification() {
      VueNotification.$emit("count-down-from", `CountDown发送通知`);
    },
    receivedNotification() {
      let self = this;
      VueNotification.$on("button", function(message) {
        self.messageFromButton = message;
      });
      VueNotification.$on("bndex", function(message) {
        self.messageFromIndex = message;
      });
    },
  },
};
</script>

<style></style>
