<template>
  <div>
    <div>tab</div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log("tab params：");
      console.log(this.$route.params);

    }
  }
</script>

<style>

</style>