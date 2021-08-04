<template>
  <div>
    <div>数据选项</div>
    <div>--------</div>
    <div>${{ msg }}</div>
    <div>computed: {{ aDouble }}</div>
    <div @click="say('haha')">点击按钮</div>
    <div>点击结果：{{ sayResult }}</div>
    <input type="text" v-model="inputModel" />
    <div>
      计算属性v_model_input：和input双向绑定 实现set和get{{ v_model_input }}
    </div>
    <!-- 自定义组件实现v-model -->
    <span>父组件中mModel值的改变：{{ mModel }}</span>
    <m-model v-model="mModel"></m-model>
    <button @click="changeMModel">父-组件点击事件改变mModel</button>
  </div>
</template>

<script>
import MModel from "./MModel";
export default {
  components: {
    "m-model": MModel,
  },
  data() {
    return {
      msg: "hello hjn",
      num: 1,
      sayResult: "",
      info: {
        city: "bj",
      },
      v_model_input: "",
      mModel: "",
    };
  },
  computed: {
    aDouble() {
      return this.num * 2;
    },
    inputModel: {
      // v-model双向数据绑定需要写set和get
      get() {
        return this.v_model_input;
      },
      set(v) {
        this.v_model_input = v;
      },
    },
  },
  watch: {
    info: {
      handler(oldV, newV) {
        console.log(oldV, newV);
      },
      deep: true, // 开启深度监听 可以监听到city改变
    },
  },
  methods: {
    say(s) {
      this.sayResult = s;
    },
    changeMModel() {
      this.mModel = "父-组件点击";
    },
  },
};
</script>

<style></style>
