<template>
  <div>
    <hr>
    <h2>HOME</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="sub">-1</button>
    <button @click="add">+1</button>
    <button @click="addTen">+10</button>
    <button @click="addN">+100</button>
    <hr>
  </div>
</template>

<script>
import {ADD_N} from '../store/mutation-type';
export default {
  methods:{
    sub(){
      this.$store.commit('sub')
    },
    add(){
      this.$store.commit('add');
    },
    addTen(){
      this.$store.commit(ADD_N,{num:10});

    }
  }
}
</script>

<style>
</style>