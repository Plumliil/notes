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
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log(store);
    onMounted(() => {
      const promise = store.dispatch("getHomeHero");
      promise.then(res=>{
        console.log(res);
      })
    });
  },
};
</script>

<style>
</style>