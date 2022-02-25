<template>
  <section>
    <h2>Home</h2>
    <h3>Home:{{ counter }}</h3>
    <h3>Home:{{ sCounter }}</h3>
    <!-- <h3>Home:{{ name }}</h3>
    <h3>Home:{{ age }}</h3> -->
  </section>
</template>

<script>
// import { useStore } from 'vuex';
// import { mapState,useStore } from "vuex";
// import {computed} from 'vue'
import {useState} from '../hooks/useState'
export default {
  setup() {
    // const store=useStore();
    const storeState=useState(['counter','name','age'])
    const storeState2=useState({
      sCounter:state=>state.counter
    })
    return{
      ...storeState,
      ...storeState2,
    }
  },
};
</script>

<style>
</style>