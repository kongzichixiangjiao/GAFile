<template>
  <div>
    <div>条件渲染</div>
    <h1 v-if="type === 'A'">v-if---A</h1>
    <h1 v-else-if="type === 'B'">v-else-if---B</h1>
    <h1 v-else>v-else---C</h1>
    <div>{{ this.type }}</div>
    <button @click="changeOK">点击改变ok elseOk的值</button>

    <!-- 渲染 display: none/block -->
    <!-- 频繁切换使用v-show -->
    <h1 v-show="type === 'C'">v-show type ==== 'C' 展示</h1>
  </div>
</template>

<script>
import Extension from "@/js/extension.js";

export default {
  data() {
    return {
      type: "A",
    };
  },
  methods: {
    changeOK() {
      let count = Extension.randomNum(0, 2);
      console.log(count);

      this.type = ["A", "B", "C"][count];
    },
  },
};
</script>

<style></style>
