<template>
  <div>
    <h1>App</h1>
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
export default {
  components: { Home, About },
};
</script>

<style scoped>
</style>