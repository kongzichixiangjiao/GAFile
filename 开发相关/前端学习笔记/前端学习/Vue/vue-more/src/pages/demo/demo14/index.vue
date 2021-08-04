<template>
  <div>
    <div ref="z">p</div>
    <button v-on:click="incresone">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0,
    };
  },
  methods: {
    incresone: function() {
      this.count += 1;
      //监听自定义的事件
      this.$on("increment", this.incrementHandler);
      this.$emit("increment", this.count); //触发自定义的increment事件
    },
    incrementHandler(msg) {
      //监听increment事件
      //获取$emit方法传递的第二个参数
      console.log(msg);
      console.log("---");
    },
  },
  beforeDestroy() {
    // 注册的事件要销毁
    this.$off("increment", this.incrementHandler);
    console.log("demo14 - beforeDestroy");
  },
};
</script>

<style></style>
