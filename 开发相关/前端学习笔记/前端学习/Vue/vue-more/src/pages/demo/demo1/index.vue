<template>
  <div>生命周期</div>
</template>

<script>
export default {
  name: "Demo1",
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {},
  beforeMount() {
    // 子组件 beforeCreate created beforeMount mounted
  },
  mounted() {},
  beforeUpdate() {
    // 子组件更新 beforeUpdate updated
  },
  updated() {},
  beforeDestroy() {
    // 子组件销毁  beforeDestroy destroyed
  },
  destroyed() {},
};
</script>

<style></style>
