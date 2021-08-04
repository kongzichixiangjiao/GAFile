<template>
  <div>
    <div>getStore</div>
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
  export default {
    mounted() {

    },
    methods: {
      getData() {
        console.log(`this.$store.state.global.count: ${this.$store.state.global.count}`);
        console.log(`this.$store.state.global.map: ${this.$store.state.global.map}`);
        console.log(`Cookies获取数据：${this.Cookies.get("key")}`);
        console.log(`localStorage获取数据：${localStorage.getItem("key")}`);
        console.log(`sessionStorage获取数据：${sessionStorage.getItem("key")}`);
      }
    }
  }
</script>

<style>

</style>