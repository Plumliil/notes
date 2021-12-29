<template>
  <div id="app">
    <h1>APP根组件</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/movie/1">gtx</router-link>
      |
      <router-link to="/movie/2">zzx</router-link>
      |
      <router-link to="/movie/0">Movie</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
    <!--    <Home></Home>-->
    <!--    <Movie></Movie>-->
    <!--    <About></About>-->
  </div>
</template>

<script>
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import About from "@/components/About";

export default {
  name: 'App',
  components: {About, Movie, Home},
  data() {
    return {
      comeName: 'Home'
    }
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
