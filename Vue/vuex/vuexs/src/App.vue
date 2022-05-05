<template>
  <div id="app">
    <home></home>
    <about></about>
    <btn></btn>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Btn from "./views/Btn.vue";
export default {
  components: { Home, About, Btn },
};
</script>


