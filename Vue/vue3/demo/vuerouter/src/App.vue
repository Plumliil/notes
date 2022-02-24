<template>
  <div id="nav">
    <h1>VUE-ROUTER</h1>
    <router-link to="/home"> home </router-link>
    | <router-link to="/about">about</router-link> |
    <router-link to="/user/plum">user</router-link> |
    <router-link to="/category">category</router-link> |
    <router-link to="/login">login</router-link>
    <hr />
    <button @click="jumpToAbout">关于</button>
    <hr />
    <router-view v-slot="props">
      <transition name="pl">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
    <hr />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  // methods: {
  //   jumpToAbout(){
  //     // 拿到router对象
  //     this.$router.push('/about')
  //     console.log(this.$router);
  //   }
  // },
  components: {},
  setup() {
    const router = useRouter();
    const jumpToAbout = () => {
      router.push({
        path: "/about",
        query: {
          name: "zs",
          age: 20,
        },
      });
      // replace
      // router.go()
    };
    return {
      jumpToAbout,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.active {
  color: red;
}
.pl-enter-from,
.pl-leave-to {
  opacity: 0;
}

.pl-enter-to,
.pl-leave-from {
  opacity: 1;
}
.pl-enter-active,
.pl-leave-active {
  transition: opacity 1s ease;
}
</style>
