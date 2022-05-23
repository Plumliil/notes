<script setup lang="ts">
import useStore from "./store/index";
import { storeToRefs } from "pinia";
const store = useStore();

let { count } = storeToRefs(store);


</script>

<template>
  <div>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
