<template>
  <div>
    <h1>App Vuex</h1>
    <hr>
    <h2>root:{{$store.state.rootCounter}}</h2>
    <button @click="sub">-1</button>
    <button @click="add">+1</button>
    <hr>
    <home></home>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  components:{
    Home
  },
  methods:{
    sub(){
      this.$store.commit('sub');
    },
    add(){
      this.$store.commit('add');
    }
  }
}
</script>

<style>
</style>