<template>
  <div>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide-k"><div style="background-image:url(@/assets/img/03.jpg);" data-swiper-parallax="-23%" data-swiper-parallax-duration="3000"></div></swiper-slide>
      <swiper-slide class="swiper-slide-k" data-swiper-parallax-opacity="0.5"><p class="swiper-item">Slide 11</p></swiper-slide>
      <swiper-slide class="swiper-slide-k">
        <p class="swiper-item">
          增加文字内容 测试autoHeight属性
        </p>
      </swiper-slide>
      <swiper-slide class="swiper-slide-k"><p class="swiper-item">Slide 33</p></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 第二个swiper开始 -->
    <swiper class="swiper" ref="mySwiper2" :options="swiperSonOptions">
      <swiper-slide class="swiper-slide-k">
        <p class="swiper-item">
          father
        </p>
      </swiper-slide>
      <swiper-slide class="swiper-slide-k">
        <!-- 子swiper开始 -->
        <swiper class="sonSwiper" ref="mySonSwiper" :options="swiperSonOptions">
          <!-- 子swiper第一个内容开始 -->
          <swiper-slide class="swiper-slide-k">
            <p class="swiper-item swiper-zoom-container">
              son1
            </p>
          </swiper-slide>
          <!-- 子swiper第一个内容结束 -->
          <swiper-slide class="swiper-slide-k">
            <img class="swiper-zoom-container" src="@/assets/img/01.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="swiper-slide-k">
            <img class="swiper-zoom-container" src="@/assets/img/02.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="swiper-slide-k">
            <img src="@/assets/img/03.jpg" alt="" />
          </swiper-slide>
        </swiper>
        <!-- 子swiper结束 -->
      </swiper-slide>
      <swiper-slide class="swiper-slide-k swiper-zoom-container">
        <p class="swiper-item">
          father
        </p>
      </swiper-slide>
    </swiper>
    <!-- 第二个swiper结束 -->
    <button @click="test">ceshi</button>
  </div>
</template>

<script>
import { swiperOptions, swiperSonOptions, Swiper, SwiperSlide } from "./swiperConfig";

export default {
  name: "carrousel",
  components: {
    swiper: Swiper,
    "swiper-slide": SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        ...swiperOptions,
        on: {
          touchStart: function() {
            // console.log("触发了回调slideChangeTransitionStart");
            this.autoplay.stop();
            this.isAutoplay = false;
          },
          touchEnd: function() {
            // console.log("触发了回调slideChangeTransitionEnd");
            // 解决手势滚动之后autoplay失效
            console.log("---");

            setTimeout(() => {
              if (this.isAutoplay) {
                this.autoplay.start();
              }
            }, 1000);
            this.isAutoplay = true;
          },
          tap(s) {
            console.log(s.activeIndex); // 开启loop会在前后增加item
            console.log(s.realIndex); // 当前的位置
          },
          progress(s) {
            console.log(s.progress);
          },
        },
      },
      swiperSonOptions: swiperSonOptions,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    swiper2() {
      return this.$refs.mySwiper2.$swiper;
    },
    swiperSon() {
      return this.$refs.mySonSwiper.$swiper;
    },
  },
  methods: {
    test() {
      console.log(this.$refs);
    },
  },

  mounted() {
    // this.swiper.init();
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    //
  },
};
</script>

<style lang="scss">
img {
  // width: 100%;
  height: 100%;
}
.swiper {
  height: 200px;
  background-color: #999;
  .swiper-slide-k {
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper-item {
      text-align: center;
      background-color: #fff;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.sonSwiper {
  height: 100%;
  width: 100%;
}

.my-bullet {
  border-radius: 4px;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  display: inline-block;
  background: rgba(0, 0, 0, 0.2);
}
.my-bullet-active {
  background: #3cdbc0;
  width: 10px;
}
</style>
