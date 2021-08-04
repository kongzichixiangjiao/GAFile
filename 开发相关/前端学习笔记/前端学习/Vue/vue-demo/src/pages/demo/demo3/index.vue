<template>
  <div>
    <div>模板语法</div>
    <div>data: {{ msg }}</div>
    <div>两对大括号中可以写进行计算 {{ number + 2 }}</div>
    <div v-html="rawHtml"></div>
    <div class="redDiv">写死的class</div>
    <div v-bind:class="divClass">v-bind:class 动态绑定class</div>
    <div @click="changeDivBGColor">修改颜色</div>
    <div v-on:click="say('v-on:clic绑定事件')">点击v-on绑定事件</div>
    <div>{{ random }}</div>

    <div>过滤器如下</div>

    <div>{{ message | capitalize }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello hjn",
      number: 1,
      rawHtml: "<span>v-html使用</span>",
      divClass: "redDiv",
      random: "",
      message: "初始数据，被过滤",
    };
  },
  methods: {
    changeDivBGColor() {
      if (this.divClass === "redDiv") {
        this.divClass = "blueDiv";
      } else {
        this.divClass = "redDiv";
      }
    },
    say(s) {
      this.random = s + Math.floor(Math.random() * 100);
    },
  },
  filters: {
    capitalize() {
      return "过滤器之后展示结果";
    },
  },
};
</script>

<style>
.redDiv {
  background-color: #f00;
  color: #fff;
}

.blueDiv {
  background-color: #00f;
  color: #000;
}
</style>
