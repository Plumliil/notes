<template>
  <div>
    <h2>HOME</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addAction">+1</button>
    <button @click="getHomeHero">HERO</button>
    <ul>
      <li v-for="(item, index) in $store.state.heros" :key="index">
        {{ item.name }}----{{ item.title }}
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // ...mapActions(['addAction','getHomeHero'])
  },
  setup() {
    const actions=mapActions(['addAction','getHomeHero']);
    return{
      ...actions
    }
  },
};
</script>

<style>
</style>