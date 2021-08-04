<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
    <div class="loading-container" v-if="!recommends.length">
      <ga-loading> </ga-loading>
    </div>
    <ul class="recommend-list" v-else>
      <li v-for="(item, index) in dataList" v-bind:key="index">
        <router-link class="recommend-link" :to="{ name: 'home-product', params: { id: item.baseinfo.itemId } }">
          <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew" /></p>
          <p class="recommend-name">{{ item.name.shortName }}</p>
          <p class="recommend-origPrice">
            <del>¥{{ item.price.origPrice }}</del>
          </p>
          <p class="recommend-info">
            <span class="recommend-price"
              >¥<strong class="recommend-price-num">{{ item.price.actPrice }}</strong></span
            >
            <span class="recommend-count">{{ item.remind.soldCount }}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
    <!-- <div style="width: 100%; height: 500px">123</div>
    <div style="width: 100%; height: 500px; background-color: #300">123</div> -->
  </div>
</template>

<script>
import GALoading from "pages/base/loading";
export default {
  components: {
    "ga-loading": GALoading,
  },
  data() {
    return {
      dataList: [],
    };
  },
  props: {
    recommends: {
      type: Array,
    },
  },
  watch: {
    recommends(newValue) {
      this.dataList = newValue;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.recommend {
  &-title {
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: $font-size-l;
    text-align: center;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 40%;
      height: 1px;
      background-color: #ddd;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  // &-title:after,
  // &-title:before {
  //   content: "";
  //   position: absolute;
  //   top: 50%;
  //   height: 1px;
  //   width: 200px;
  //   background-color: #d20000;
  // }
  &-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 50%;
    }
  }
  &-img {
    width: 100%;
    height: 100%;
    padding: 3px;
  }
  &-info {
    padding: 10px 10px;
  }
  &-name {
    @include multiline-ellipsis();
    font-size: 16px;
    margin: 10px 10px;
  }
  del {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    color: #d20000;
  }
  &-count {
    font-size: 12px;
  }
}
</style>
