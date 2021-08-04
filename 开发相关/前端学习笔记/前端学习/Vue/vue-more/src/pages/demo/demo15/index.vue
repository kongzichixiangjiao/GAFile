<template>
  <div>
    <div class="box test">w: 100px; /*no*/ h:300px</div>
    <div class="box1 test">w:100px h:100px</div>
    <p class="test">测试文字大小20px</p>
    <p class="test1">测试文字大小40px</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .box {
    width: 100px;
    height: 300px;
    background-color: #333;
    color: #fff;
  }

  .box1 {
    width: 100px;
    /*no*/
    height: 100px;
    background-color: #999;
    color: #fff;
  }

  .test {
    font-size: 20px;
  }

  .test1 {
    font-size: 40px;
  }
</style>