<template>
  <swiper ref="mySwiper" :options="swiperOption" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation, EffectFade } from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";
const { Swiper } = getAwesomeSwiper(SwiperClass);
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, EffectFade]);

export default {
  name: "GASlider",
  components: {
    swiper: Swiper,
  },
  data() {
    return {
      keyId: Math.random(),
    };
  },
  watch: {
    dataList(newData) {
      if (newData.length <= 0) {
        return;
      }
      this.swiperOption.loop = newData.length === 1 ? false : this.loop;
      this.keyId = Math.random();
    },
  },
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(v) {
        return ["horizontal", "vertical"].indexOf(v) > -1;
      },
    },
    interval: {
      type: Number,
      default: 3000,
      validator(v) {
        return v >= 0;
      },
    },
    loop: {
      type: Boolean,
      default: true,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    dataList: {
      type: Array,
      default() {
        return [];
      },
    },
    on: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (typeof this.dataList === "undefined") return;

      this.swiperOption = {
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval
          ? {
              delay: this.interval,
              stopOnLastSlide: false,
            }
          : false,
        slidesPerView: 1,
        loop: this.dataList.length <= 1 ? false : this.loop,
        pagination: {
          el: this.pagination ? ".swiper-pagination" : null,
          type: "bullets",
        },
        on: this.on,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
