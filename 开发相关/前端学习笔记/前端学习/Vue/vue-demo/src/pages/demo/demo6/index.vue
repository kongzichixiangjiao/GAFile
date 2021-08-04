<template>
  <div>
    <div>列表渲染</div>
    <!-- v-for 和 v-if不建议一起使用 -->
    <ul class="example">
      <!-- key不适用index 使用item.id -->
      <li v-for="(item, index) in items" v-bind:key="item.id">
        {{ index }} - {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 3,
          message: "Foo",
        },
        {
          id: 4,
          message: "Bar",
        },
      ],
    };
  },
};
</script>

<style>
.example {
  list-style: none;
}
</style>
