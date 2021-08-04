<template>
  <div>
    <div>事件处理器</div>
    <div>
      <button v-on:click="counter += 1">点击增加1</button>
      <p>按钮被点击了{{ counter }}次</p>
    </div>
    <div>
      <button @click="clicked">{{ message }}</button>
    </div>
    <div @click="doThis">
      <button @click="doThisBtn(2, $event)">不阻止冒泡</button>
      <button @click.stop="doThisBtn">click.stop阻止冒泡</button>
      <button @submit.prevent="doThisBtn">submit.prevent不再重载页面</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      message: "按钮被点击前",
    };
  },
  methods: {
    clicked() {
      this.message = "按钮被点击后";
    },
    doThis(event) {
      console.log(event);

      console.log("doThis");
    },
    doThisBtn(num, event) {
      console.log(num, event);

      console.log("doThisBtn");
    },
  },
};
</script>

<style></style>
