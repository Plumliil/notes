<template>
  <div class="movie">
    <h1>MOVIE {{this.$route.params.id}}--{{id}}</h1>
    <button @click="showThis">打印THIS</button>
<!--    <router-link to="/home">首页</router-link>-->
<!--    <router-link to="/movie/3">bfx</router-link>-->
<!--    <router-link to="/movie/4">ldx</router-link>-->
  </div>
</template>

<script>
export default {
  props:['id'],
  name: "Movie",
  methods:{
    showThis(){
      console.log(this)
    }
  }
}
</script>

<style scoped>
  .movie{
    background-color: orange;
    width: 100%;
    height: 200px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    padding-left: 0;
    padding-right: 10px;
    text-decoration: none;
  }
</style>
