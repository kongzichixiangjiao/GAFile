<template>
  <div class="g-tabbar">
    <div class="g-line"></div>
    <div class="wrap">
      <router-link class="g-tabbar-item" to="/Home">
        <i class="iconfont icon-danxuankuang"></i>
        <span class="title">首页</span>
      </router-link>
      <router-link class="g-tabbar-item" to="/Print">
        <i class="iconfont icon-dayin"></i>
        <span class="title">打印</span>
      </router-link>
      <router-link class="g-tabbar-item" to="/Order">
        <i class="iconfont icon-dingdan"></i>
        <span class="title">订单</span>
      </router-link>
      <router-link class="g-tabbar-item" to="/Keybord">
        <i class="iconfont icon-jianpan"></i>
        <span class="title">键盘</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GATabbar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
</style>
