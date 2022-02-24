<template>
  <div id="nav">
    <h1>VUE-ROUTER</h1>
    <router-link to="/home" v-slot="props" custom>
      <new-bar title="home" />
      <button @click="props.navigate">{{props.href}}</button>
      <button @click="props.navigate">{{props.href}}</button>
      <span :class="{'active':props.isActive}">{{props.isActive}}</span>
      <!-- {{props}} -->
    </router-link>
    | <router-link to="/about">about</router-link> |
    <router-link to="/user/plum">user</router-link>
    <hr />
    <button @click="jumpToAbout">关于</button>
    <hr />
    <router-view />
    <hr />
  </div>
</template>

<script>
// import router from './router'
import NewBar from './components/NewBar.vue'
import { useRouter } from "vue-router";
export default {
  // methods: {
  //   jumpToAbout(){
  //     // 拿到router对象
  //     this.$router.push('/about')
  //     console.log(this.$router);
  //   }
  // },
  components:{
    NewBar
  },
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
.active{
  color: red;
}
</style>
