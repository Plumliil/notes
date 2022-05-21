<script setup lang="ts">
import useMainStore from "./store/index";
import { storeToRefs } from "pinia";
const store = useMainStore();

// let { count } = storeToRefs(store);
let { count } = storeToRefs(store);

const add = () => {
  count.value++;
  // store.count++;
};
const patchAdd=()=>{
  store.$patch({
    count:store.count+5
  })
}
console.log(store);
</script>

<template>
  <div>
    <h1>商品数量:{{ store.count }}</h1>
    <h1>商品数量:{{ count }}</h1>
    <button @click="add">+1</button>
    <button @click="patchAdd">patchAdd:+1</button>
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
