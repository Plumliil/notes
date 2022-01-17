<template>
  <div>
    <h1>App</h1>
    <button @click="addName">+name</button>
    <home></home>
  </div>
</template>

<script>
import Home from "./Home.vue";
import {computed} from 'vue';

export default {
  components: { Home },
  provide() {
    return {
      name: "plumli",
      age: 20,
      length: computed(()=>this.names.length), // 一次性赋值 返回ref对象 .value 
    };
  },
  data() {
    return {
      names: ["abc", "aaa", "ccc"],
    };
  },
  methods: {
    addName() {
      this.names.push("plumli");
      console.log(this.names);
    },
  },

};
</script>

<style scoped>
</style>