<template>
  <div>
    <div>插槽开始</div>
    <slot name="oneSlot" v-bind="map"></slot>
    <slot name="twoSlot" :slotData="map.a"></slot>
    <slot name="threeSlot"></slot>
    <div>插槽结束</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {
        a: "子组件插槽传值",
        b: 2,
        c: 3,
      },
    };
  },
};
</script>

<style></style>
