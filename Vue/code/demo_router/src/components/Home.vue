<template>
  <div class="home">
    <h1>HOME</h1>
    <button @click="goLink0">去MOVIE-0</button>
    <button @click="goLink1">去MOVIE-1</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    goLink0(){
      this.$router.push('movie/0')
    },
    goLink1(){
      this.$router.replace('movie/1')
    }
  }
}
</script>

<style scoped>
  .home{
    background-color: pink;
    width: 100%;
    height: 200px;
  }
</style>
