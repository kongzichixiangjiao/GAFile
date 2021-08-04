<template>
  <div>
    <div>
      Vuex
    </div>
    <button @click="save">保存数据</button>
    <button @click="commit">commit保存数据</button>
    <button @click="get">读取数据</button>

    <button @click="pushUrl">跳转拿到getStore</button>

    <button @click="getList">getters: getList</button>
    <div>此时的count：{{this.$store.state.global.count}}</div>
    <div>此时的name：{{this.$store.state.global.map.name}}</div>
    <div>此时的age：{{this.$store.state.global.map.age}}</div>

    <button @click="pushMy">跳转到my.vue</button>
  </div>
</template>

<script>
  export default {
    methods: {
      save() {
        this.$store.state.global.count = 20;
        this.$store.state.global.map = {
          age: 31,
          name: "hjn----"
        }

        this.Cookies.set("key", 123);

        localStorage.setItem("key", "长时间存储");

        sessionStorage.setItem("key", "短时间存储")
      },
      commit() {
        // countAdd是mutations的方法 2是参数
        this.$store.commit('countAdd', 2)
      },
      get() {
        console.log(this.$store.state.global.count);
        console.log(this.$store.state.global.map);

        console.log(`Cookies获取数据：${this.Cookies.get("key")}`);

        console.log(`localStorage获取数据：${localStorage.getItem("key")}`);
        console.log(`sessionStorage获取数据：${sessionStorage.getItem("key")}`);
        
      },
      pushUrl() {
        this.$router.push({
          name: 'getStore'
        })
      },
      getList() {
        console.log("getListMin");

        console.log(this.$store.getters.getListMin);
        console.log("getListLast");
        console.log(this.$store.getters.getListLast);
        console.log("getList");
        console.log(this.$store.getters.getList(3));
      },
      pushMy() {
        this.$router.push({
          name: 'My'
        })
      }
    },

  }
</script>

<style>

</style>