<template>
  <div>
    <div>Class绑定与Style绑定</div>
    <div class="static" v-bind:class="{'active': isActive, 'text_danger':hasError}">
      第一种class绑定方式
    </div>
    <div :class="classObject">
      第二种class绑定方式
    </div>
    <div :class="[activeClass, errorClass]">
      第三种class绑定方式
    </div>
    <div @click="changeClass">点击改变绑定的class</div>

    <div v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}">第一种style绑定方式</div>
    <div v-bind:style="styleObjet">第二种style绑定方式</div>
    <div v-bind:style="[baseStyle, bgColorStyle]">第三种style绑定方式</div>
    <div @click="changeStyle">点击改变绑定的style</div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: false,
        classObject: {
          'active': true,
          'text_danger': true
        },
        activeClass: 'active',
        errorClass: 'text_danger',
        activeColor: "#000",
        fontSize: 40,
        styleObjet: {
          fontSize: '20px',
          backgroundColor: '#f00'
        },
        baseStyle: {
          fontSize: '12px',
          textAlign: 'left'
        },
        bgColorStyle: '#ff0'
      }
    },
    methods: {
      changeClass() {
        // 1
        this.active = !this.active;
        this.hasError = !this.hasError;
        // 2
        this.classObject.active = !this.classObject.active;
        this.classObject.text_danger = !this.classObject.text_danger;
        // 3
        this.activeClass = this.activeClass === '' ? "active" : ""
        this.errorClass = this.errorClass === '' ? "text_danger" : ""
      },
      changeStyle() {
        this.activeColor = '#00f';
        this.styleObjet.fontSize = '40px';
        this.baseStyle.fontSize = '30px';
      }
    }
  }
</script>

<style>
  .static {
    background-color: red;
    color: #fff;
  }

  .active {
    color: #000;
  }

  .text_danger {
    color: #999;
  }
</style>