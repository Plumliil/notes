<template>
  <div>
    <hr />
    <h2>HOME</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="sub">-1</button>
    <button @click="add">+1</button>
    <button @click="add_n({ num: 10 })">+10</button>
    <hr />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import {ADD_N} from '../store/mutation-type';
export default {
  methods: {
    ...mapMutations(["add", "sub", ADD_N]),
  },
};
</script>

<style>
</style>