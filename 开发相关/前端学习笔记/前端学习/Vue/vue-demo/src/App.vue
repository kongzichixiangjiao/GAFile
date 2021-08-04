<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <ga-tabbar />
    </div>
  </div>
</template>

<script>
import GATabbar from "components/Tabbar";
export default {
  name: "App",
  components: {
    "ga-tabbar": GATabbar,
  },
  data() {
    return {
      duration: 3000,
    };
  },
  mounted() {
    this.setTimeShowRoot();
  },
  methods: {
    setTimeShowRoot() {
      console.log("倒计时-开始");
      setTimeout(() => {
        console.log("倒计时-结束");
      }, this.duration);
    },
  },
};
</script>

<style lang="scss" scoped></style>
