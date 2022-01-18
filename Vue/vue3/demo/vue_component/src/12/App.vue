<template>
  <div>
    <h1 ref="h1">app</h1>
    <nav-bar ref="navBar"></nav-bar>
    <!-- <button @click="btnClick">获取元素</button> -->
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  methods: {
    btnClick() {
      console.log(this.$refs.h1);
      console.log(this.$refs.navBar.message);
      this.$refs.navBar.sayHello()
    },
  },
};
</script>

<style scoped>
</style>