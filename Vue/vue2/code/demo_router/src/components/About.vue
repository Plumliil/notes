<template>
  <div class="about">
    <h1>ABOUT</h1>

    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr />

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
  .about{
    background-color: skyblue;
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
