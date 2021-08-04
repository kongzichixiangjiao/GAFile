<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="title" data-swiper-parallax="-100">从右边100px开始进入</div>
        <div class="subtitle" data-swiper-parallax="-200">从右边200px开始进入</div>
        <div class="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          <p>从右边300px开始进入，时间600ms</p>
        </div>
        <div data-swiper-parallax="0" data-swiper-parallax-opacity="0.5">透明度变化</div>
        <div data-swiper-parallax-scale="0.15">缩放变化</div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入swiper所有css样式
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      banners: [
        { id: "001", imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg" },
        { id: "002", imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg" },
        { id: "003", imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg" },
      ],
    };
  },
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
    // this.mySwiper.slideTo(3, 1000, false);
  },
};
</script>
