<template>
  <div>
    <div>
      <div>路由</div>
      <router-link to="/Demo9">to demo9</router-link>
      <br>
      <router-link :to="target">to Target</router-link>
      <br>
      <button @click="toURL">跳转到Target</button>
    </div>
    <div>
      <router-link to="/Demo11/id/Demo11_1">demo11/demo11_1</router-link>
      <router-link to="/Demo11/id/Demo11_2">demo11/demo11_2</router-link>
    </div>
    <div>
      <button @click="toDemo11('Demo11_1')">Demo11_1</button>
      <button @click="toDemo11('Demo11_2')">Demo11_2</button>
    </div>
    <button @click="routerGo">router go...</button>
    <router-view></router-view>
    <router-view name="tab1"></router-view>
    <router-view name="tab2"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentNum: 1,
        target: {
          name: "Target",
          params: {
            id: 1001
          },
          query: {
            name: 'hjn',
            state: 3
          }
        }
      }
    },
    mounted() {
      console.log("demo11 params：");
      console.log(this.$route.params);
    },
    methods: {
      routerGo() {
        this.$router.go(-1);
      },
      toDemo11(n) {
        if (this.$route.fullPath.indexOf(n) !== -1) return;

        this.currentNum = n;
        this.$router.push({
          path: "/Demo11/id/" + n,
          params: {
            id: this.target.params.id
          }
        });
      },
      toURL() {
        // 001
        // this.$router.push({
        //   path: `/Target/:${this.target.params.id}`
        // });

        //002
        // this.$router.push({
        //   name: "Target",
        //   params: {
        //     id: this.target.params.id
        //   }
        // });

        // 003 

        this.$router.push(this.target).catch(e => {
          console.log(e); // Error: Redirected when going from "/Demo11/id" to "/RedirectTarget" via a navigation guard.
        });
      }
    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next(vm => {
        // 通过 `vm` 访问组件实例
        console.log("vm=");
        console.log(vm);

      });
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next();
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next();
    }
  }
</script>

<style>

</style>