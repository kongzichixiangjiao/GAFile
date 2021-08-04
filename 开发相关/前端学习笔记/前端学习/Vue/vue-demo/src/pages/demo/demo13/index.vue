<template>
  <div>
    <div>插槽slot</div>
    <slot1>
      <template v-slot:oneSlot="oneSlot">
        <div>oneSlot: {{ oneSlot.a }}</div>
      </template>
      <template #threeSlot>
        <div>threeSlot: v-slot缩写成#</div>
      </template>
      <template v-slot:twoSlot="wSlotData">
        <div>twoSlot</div>
        <div>从子组件传过来的：{{ wSlotData.slotData }}</div>
      </template>
    </slot1>
  </div>
</template>

<script>
import slot1 from "./slot/slot1";

export default {
  components: {
    slot1,
  },
};
</script>

<style></style>
