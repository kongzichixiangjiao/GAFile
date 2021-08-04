<template>
  <div>
    <div>mixin</div>

    <div>混入缺点 命名冲突</div>
    <span>混入进来的：{{ message }}</span>
    <button @click="logMessage">混入进来的事件</button>
  </div>
</template>

<script>
import mMixin from "./mMixin";
export default {
  mixins: [mMixin],
  data() {
    return {
      // message: "22", // 覆盖混入
    };
  },
};
</script>

<style></style>
