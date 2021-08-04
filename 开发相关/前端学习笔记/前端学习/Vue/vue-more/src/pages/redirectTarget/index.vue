<template>
  <div>
    <div>Redirect Target Page</div>
  <div>{{name}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      name: {
        type: String,
        default: "hjn"
      }
    },
    mounted() {
      console.log("Redirect Target params:");
      console.log(this.$route.params);
      console.log("Redirect Target query:");
      console.log(this.$route.query);
    }
  }
</script>

<style>

</style>