<template>
  <div>
    <div>DOM操作</div>
    <button class="btn" ref="btn"></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      // DOM已经生成
      console.log(this.$refs.btn);

      console.log(document.querySelector('.btn'));
      

    }
  }
</script>

<style>

</style>