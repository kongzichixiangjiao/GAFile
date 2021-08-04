<template>
  <div class="home">
    <ga-navBar class="g-header-container">
      <template slot="left"
        ><i class="iconfont icon-kuaijiehuifu"></i
      ></template>
      <template slot="center">搜索</template>
      <template slot="right"><i class="iconfont icon-qianbao"></i></template>
    </ga-navBar>

    <ga-scroll
      class="ga-scroll"
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scrollView"
    >
      <div class="slider">
        <ga-loading v-if="!sliders.length"></ga-loading>
        <ga-swiper
          class="ga-swiper"
          :dataList="sliders"
          :direction="direction"
          :loop="loop"
          :interval="interval"
          :pagination="pagination"
          :on="on"
          v-else
        >
          <swiper-slide
            class="swiper-slide"
            v-for="(slider, index) in sliders"
            v-bind:key="index"
          >
            <a class="slider-link" :href="slider.linkUrl"
              ><img class="slider-img" :src="slider.picUrl"
            /></a>
          </swiper-slide>
        </ga-swiper>
      </div>
      <home-nav></home-nav>
      <home-recommend :recommends="recommends"></home-recommend>
    </ga-scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import GANavBar from "pages/base/navBar";
import GASwiper from "pages/base/swiper";
import GAScroll from "pages/base/scroll";
import GALoading from "pages/base/loading";
import HomeNav from "./homeNav";
import homeRecommend from "./recommend";

import { ga_get } from "@/axios/http";
import { HomeSliderAPI, HomeRecommendData } from "@/axios/api.js";
import { sliderOptions, SwiperSlide } from "./config";

export default {
  name: "Home",
  components: {
    "ga-swiper": GASwiper,
    "ga-navBar": GANavBar,
    "ga-loading": GALoading,
    "ga-scroll": GAScroll,
    "swiper-slide": SwiperSlide,
    HomeNav,
    homeRecommend: homeRecommend,
  },
  data() {
    return {
      page: 1,
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: [],
      recommends: [],
      on: {
        touchStart: function() {
          this.autoplay.stop();
          this.isAutoplay = false;
        },
        touchEnd: function() {
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
      },
      navItems: [],
    };
  },
  mounted() {
    this.requestSliderData();
  },
  computed: {
    scrollView() {
      return this.$refs.scrollView;
    },
  },
  methods: {
    scroll() {},
    scrollEnd() {},
    pullToLoadMore(loadMoreBlock) {
      this.requestRecommendData(false, loadMoreBlock);
      console.log("加载更多");
    },
    pullToRefresh(refreshFinishBlock) {
      console.log("刷新");

      this.page = 1;
      this.requestRecommendData(true, refreshFinishBlock);
    },
    pullDownTransitionEnd() {},
    requestSliderData() {
      ga_get(HomeSliderAPI).then((res) => {
        setTimeout(() => {
          this.sliders = res.slider;
        }, 2000);
      });
      this.requestRecommendData(true);
    },
    requestRecommendData(isRefresh, block) {
      const params = {
        page: this.page,
        type: 0,
        frontCatId: "",
      };

      HomeRecommendData(params).then((res) => {
        // this.recommends = this.recommends.concat(res);
        if (isRefresh) {
          this.recommends = res.slice(0, 5);
        } else {
          console.log("--");

          this.recommends = this.recommends.concat(res.slice(0, 5));
        }
        this.page += 1;
        setTimeout(() => {
          if (typeof block === "function") {
            block();
          }
        }, 300);
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.iconfont {
  font-size: 20px;
  padding-top: 4px;
  color: #333;
}
.slider {
  height: 200px;
  .slider-wapper {
    width: 100%;
    height: 100%;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}
</style>
