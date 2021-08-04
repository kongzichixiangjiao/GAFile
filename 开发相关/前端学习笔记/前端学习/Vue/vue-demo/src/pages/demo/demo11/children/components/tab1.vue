<template>
  <div>
    <div>tab1</div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log("tab1 params：");
      console.log(this.$route.params);

    }
  }
</script>

<style>

</style>