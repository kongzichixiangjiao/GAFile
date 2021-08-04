<template>
  <swiper :options="swiperOption" ref="swiper">
    <!-- 下拉 -->
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <ga-loading :text="pullDownText" inline ref="pullDownLoading" />
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <!-- 上拉 -->
    <div class="mine-scroll-pull-up" v-if="pullUp">
      <ga-loading :text="pullUpText" inline ref="pullUpLoading" />
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
import { Swiper as SwiperClass } from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";
export const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
import GALoading from "../loading/";
import {
  PULL_DOWN_HEIGHT,
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END,
  PULL_UP_HEIGHT,
  PULL_UP_TEXT_INIT,
  PULL_UP_TEXT_START,
  PULL_UP_TEXT_ING,
  PULL_UP_TEXT_END,
} from "./config";

export default {
  name: "GAScroll",
  components: {
    swiper: Swiper,
    "ga-loading": GALoading,
    "swiper-slide": SwiperSlide,
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true,
    },
    data: {
      type: [Array, Object],
    },
    pullDown: {
      type: Boolean,
      default: false,
    },
    pullUp: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    data() {
      this.update();
    },
  },
  computed: {
    swiper() {
      return this.$refs.swiper;
    },
    $swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
  created() {
    this.init();
  },
  methods: {
    update() {
      console.log("this.swiper && this.swiper.updateSwiper();");

      this.$nextTick(() => {
        this.swiper && this.swiper.updateSwiper();
      });
    },
    scrollToTop(speed, runCallbacks) {
      this.swiper && this.swiper.slideTo(0, speed, runCallbacks);
    },
    init() {
      this.pulling = false;
      this.pullDownText = PULL_DOWN_TEXT_INIT;
      this.pullUpText = PULL_DOWN_TEXT_INIT; // 没有
      this.swiperOption = {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? ".swiper-scrollbar" : null,
          hide: true,
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd,
          transitionEnd: this.scrollEnd, // 向上滑动时监听scrollEnd
        },
      };
    },

    scroll(swiper) {
      console.log("scroll-0");

      if (typeof swiper === "undefined") return;
      // 监控什么时候出现回到顶部

      this.$emit("scroll", swiper.translate, this.swiper);

      if (this.pulling) {
        return;
      }

      if (swiper.translate > 0) {
        // 下拉
        if (!this.pullDown) {
          return;
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
        }
      } else if (swiper.isEnd) {
        // 上拉
        if (!this.pullUp) {
          return;
        }

        const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css("height"));

        if (isPullUp) {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
        } else {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
        }
      }
    },
    scrollEnd(swiper) {
      if (typeof swiper === "undefined") return;
      this.$emit("scroll-end", swiper.translate, this.swiper, this.pulling);
    },
    touchEnd(swiper) {
      console.log("---1");

      if (this.pulling) {
        return;
      }
      console.log("---2");
      // console.log(this.swiper);

      if (typeof swiper === "undefined") return;
      console.log("---3");

      if (swiper.translate > PULL_DOWN_HEIGHT) {
        console.log("---3.1");
        // 下拉
        if (!this.pullDown) {
          return;
        }
        console.log("---4");

        this.pulling = true;
        this.$swiper.allowTouchMove = false; // 禁止触摸
        this.$swiper.setTransition(this.swiper.$swiper.params.speed);
        this.$swiper.setTranslate(PULL_DOWN_HEIGHT);
        this.$swiper.params.virtualTranslate = true; // 定住不给回弹
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
        this.$emit("pull-down", this.pullDownEnd); // 触发一个事件
      } else if (swiper.isEnd) {
        console.log("---5");
        // 底部
        const totalHeight = parseInt(swiper.$wrapperEl.css("height"));
        const isPullUp = Math.abs(swiper.translate) + this.$swiper.height - PULL_UP_HEIGHT > totalHeight;
        if (isPullUp) {
          console.log("---6");
          // 上拉
          if (!this.pullUp) {
            return;
          }
          console.log("---7");
          this.pulling = true;
          this.$swiper.allowTouchMove = false; // 禁止触摸
          this.$swiper.setTransition(this.swiper.$swiper.params.speed);
          this.$swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - this.$swiper.height));
          this.$swiper.params.virtualTranslate = true; // 定住不给回弹
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);
          this.$emit("pull-up", this.pullUpEnd);
        }
      }
    },
    pullDownEnd() {
      console.log("==pullDownEnd===");
      console.log(this.swiper);

      console.log("8");

      this.pulling = false;
      this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
      this.$swiper.params.virtualTranslate = false;
      console.log(this.swiper);
      console.log(this.pulling);

      this.$swiper.allowTouchMove = true;
      this.$swiper.setTransition(this.$swiper.speed);
      this.$swiper.setTranslate(0);
      setTimeout(() => {
        this.$emit("pull-down-transition-end");
      }, this.swiper.$swiper.speed);

      this.update();
    },
    pullUpEnd() {
      console.log("9");
      this.pulling = false;
      this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
      this.$swiper.params.virtualTranslate = false;
      this.$swiper.allowTouchMove = true;

      this.update();
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: auto;
}

.mine-scroll-pull-up,
.mine-scroll-pull-down {
  position: absolute;
  left: 0;
  width: 100%;
}
.mine-scroll-pull-down {
  bottom: 100%;
  height: 80px;
}

.mine-scroll-pull-up {
  top: 100%;
  height: 30px;
}
</style>
