<template>
  <div>
    <span>子组件中mModel值的改变：{{ mModel }}</span>
    <button @click="changeMModel">子-组件点击事件改变mModel</button>
  </div>
</template>

<script>
export default {
  model: {
    prop: "mModel",
    event: "change",
  },
  props: {
    mModel: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeMModel() {
      this.$emit("change", "子-组件点击");
    },
  },
};
</script>

<style></style>
