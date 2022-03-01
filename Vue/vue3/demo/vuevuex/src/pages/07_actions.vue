<template>
  <div>
    <h2>HOME</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+1</button>
    <ul>
      <li v-for="(item,index) in $store.state.heros" :key="index">{{item.name}}----{{item.title}}</li>
    </ul>
    <hr />
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  mounted() {
    // axios.get -> ts
    this.$store.dispatch('getHomeHero')
  },
  methods: {
    add(){
      setTimeout(() => {
        this.$store.dispatch('addAction')
      }, 1000);
    },

  },
};
</script>

<style>
</style>