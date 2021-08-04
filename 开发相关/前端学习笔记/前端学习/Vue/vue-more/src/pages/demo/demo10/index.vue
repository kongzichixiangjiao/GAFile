<template>
  <div>
    <button @click="animationStart">执行过度动画动画</button>
    <div class="content">
      <!-- 钩子函数 -->
      <transition
        name="box-fade_opacity"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
      >
        <div class="box box_opacity" v-if="show"></div>
      </transition>
      <!-- box-fade这个名字在style中要拼接动画的状态 -->
      <transition
        name="box-fade_opacity"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
      >
        <div class="box box_opacity" v-if="show"></div>
      </transition>
      <transition name="box-fade_height">
        <div class="box box_height" v-if="show"></div>
      </transition>
      <div class="box_bounce">
        <transition name="box-bounce">
          <p v-if="show">@keyframes的bounce-in动画</p>
        </transition>
      </div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <p class="animate__p" v-if="show">hello</p>
      </transition>
      <p class="js_animate animate__p animate__animated">js操作这个动画</p>
    </div>
  </div>
</template>

<script>
import GAAnimate from "./Animate";

export default {
  data() {
    return {
      show: true,
    };
  },
  mounted() {},
  methods: {
    animationStart() {
      this.show = !this.show;

      // let js_animate_p = document.querySelector('.js_animate');
      // js_animate_p.style.setProperty('--animate-duration', '3s');
      // js_animate_p.classList.add('animate__swing')

      GAAnimate(".js_animate", "swing");
    },

    // --------
    // 进入中
    // --------
    beforeEnter: function() {
      console.log("beforeEnter");
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      console.log(el);

      console.log("enter");
      done();
    },
    afterEnter: function() {
      console.log("afterEnter");
    },
    enterCancelled: function() {
      console.log("enterCancelled");
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function() {
      console.log("beforeLeave");
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function() {
      console.log("leave");
      // done();
    },
    afterLeave: function() {
      console.log("afterLeave");
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function() {
      console.log("leaveCancelled");
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 50px;
  height: 50px;
}
</style>
<style>
.box_opacity {
  background-color: #00f;
}

/* leave -> leave-active -> leave-to  */
/* enter -> enter-active -> enter-to  */
.box-fade_opacity-leave-active,
.box-fade_opacity-enter-active {
  transition: all 2s ease;
}

.box-fade_opacity-leave-to,
.box-fade_opacity-enter {
  /* width height opacity background-color */
  opacity: 0;
  background-color: red;
}

.box-fade_opacity-enter-to {
  /* width height opacity background-color */
  opacity: 1;
  background-color: #00f;
}
</style>
<style>
.box_height {
  background-color: #0ff;
}

.box-fade_height-leave-active,
.box-fade_height-enter-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.box-fade_height-leave-to,
.box-fade_height-enter {
  width: 0;
  height: 0;
  opacity: 0;
  background-color: red;
}

.box-fade_height-enter-to {
  width: 50px;
  height: 50px;
  opacity: 1;
  background-color: #0ff;
}
</style>
<style>
.box_bounce {
  width: 100%;
  height: 50px;
  background-color: #0f0;
}

.box-bounce-enter-active {
  animation: bounce-in 0.5s;
}

.box-bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
<style>
.animate__p {
  font-size: 40px;
  font-weight: bold;
}

.animate__animated.animate__bounceOutRight {
  --animate-duration: 3s;
}
</style>
