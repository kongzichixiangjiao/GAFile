<template>
  <div class="ga_nav_bar">
    <div class="ga_nav_bar_left">
      <slot name="left"></slot>
    </div>
    <div class="ga_nav_bar_center">
      <slot name="center"></slot>
    </div>
    <div class="ga_nav_bar_right">
      <slot name="right"></slot>
    </div></div
></template>

<script>
export default {
  name: "GANavBar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.ga_nav_bar {
  background-color: #fff;
  display: flex;
  align-items: center;

  &_left {
    margin-left: 5px;
    padding: 10px;
  }

  &_center {
    margin: 0 5px;
    flex: 1;

    font-size: 14px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &_right {
    margin-right: 5px;
    padding: 10px;
  }
}
</style>
