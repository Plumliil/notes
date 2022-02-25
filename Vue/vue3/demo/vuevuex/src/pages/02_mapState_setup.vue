<template>
  <section>
    <h2>Home</h2>
    <h3>Home:{{ sCounter }}</h3>
    <h3>Home:{{ name }}</h3>
    <h3>Home:{{ age }}</h3>
  </section>
</template>

<script>
import { mapState,useStore } from "vuex";
import {computed} from 'vue'
export default {
  setup() {
    const store =useStore()
    const sCounter=computed(()=>store.state.counter);
    const storeStateFns=mapState(['counter','name','age']);
    // key:function
    const storeState={};
    Object.keys(storeStateFns).forEach(fnKey=>{
      const fn=storeStateFns[fnKey].bind({$store:store});
      storeState[fnKey]=computed(fn)
    })
    return{
      sCounter,
      ...storeState
    }
  },
};
</script>

<style>
</style>