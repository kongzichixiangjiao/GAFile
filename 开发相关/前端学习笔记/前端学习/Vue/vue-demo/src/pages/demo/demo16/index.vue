<template>
  <div>
    <ga-tabbar></ga-tabbar>

    <!-- 动态组件 -->
    根据数组顺序动态渲染组件：{{ componentsData }}
    <component
      v-for="item in componentsData"
      :is="item"
      :key="item"
    ></component>

    <!-- 异步组件 -->
    <Component4 v-if="showComponent1"></Component4>
    <button @click="showComponent">展示异步加载的组件</button>
  </div>
</template>

<script>
import GATabbar from "components/Tabbar";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";

export default {
  data() {
    return {
      componentsData: ["Component1", "Component3", "Component2"],
      showComponent1: false,
    };
  },
  components: {
    "ga-tabbar": GATabbar,
    Component1,
    Component2,
    Component3,
    Component4: () => import("./component4"),
  },
  methods: {
    showComponent() {
      this.showComponent1 = true;
    },
  },
};
</script>

<style></style>
