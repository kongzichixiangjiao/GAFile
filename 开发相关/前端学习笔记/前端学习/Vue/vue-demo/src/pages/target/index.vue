<template>
  <div>
    <div>Target Page</div>
    <div>{{name}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      console.log("Target params:");
      console.log(this.$route.params);
      console.log("Target query:");
      console.log(this.$route.query);
    }
  }
</script>

<style>

</style>