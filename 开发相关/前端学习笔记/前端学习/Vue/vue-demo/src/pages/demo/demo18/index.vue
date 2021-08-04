<template>
  <div>
    <div>nextTick 异步渲染</div>
    <ul ref="ul1">
      <li v-for="(item, index) in list" v-bind:key="index">{{ item }}</li>
    </ul>
    <button @click="add">ADD-----</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2],
    };
  },
  methods: {
    add() {
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);
      // 最开始2个 点击之后添加3个 打印结果：2    6    10
      // 插入到list中 还没有渲染DOM
      // $nextTick渲染完的回调函数
      // 异步渲染
      // 不管添加多少条数据 只渲染一次$nextTick
      this.$nextTick(() => {
        console.log(Date.now()); // 这里的

        console.log(this.$refs.ul1.childNodes.length);
      });

      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);

      // console.log(this.$refs.ul1.childElementCount);
    },
  },
};
</script>

<style></style>
