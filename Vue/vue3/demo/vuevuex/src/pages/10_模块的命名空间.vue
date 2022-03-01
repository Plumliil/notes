<template>
  <div>
    <h2>HOME</h2>
    <h2>home:{{ $store.state.home.homeCounter }}</h2>
    <button @click="add">home +1</button>
    <h2>{{ $store.getters['home/doubleCounter'] }}</h2>
    <hr />
  </div> 
</template>

<script>
export default {
  methods: {
    add(){
      this.$store.commit('home/add')
    }
  },
// setup() {

  // },
};
</script>

<style>
</style>