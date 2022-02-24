<template>
  <h2 @click="loginClick">LOGIN</h2>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = new useRoute();
    const loginClick=()=>{
        window.localStorage.setItem('token','plum')
        console.log(route);
    }
    return{
        loginClick
    }
  },
};
</script>

<style>
</style>