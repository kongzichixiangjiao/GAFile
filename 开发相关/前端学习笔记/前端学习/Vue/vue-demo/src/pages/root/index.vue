<template>
  <div>
    <div>ROOT</div>
  </div>
</template>

<script>
import EXTENSION from "@/js/extension";
export default {
  mounted() {
    this.alog();
  },
  methods: {
    alog() {
      console.log(EXTENSION.randomNum(2, 3));

      var extension = require("@/js/test");
      console.log(extension.log({ a: 3, b: 4 }));
    },
  },
};
</script>

<style></style>
