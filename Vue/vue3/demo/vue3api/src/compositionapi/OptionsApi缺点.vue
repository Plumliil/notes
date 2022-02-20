<template>
  <div>
    <h1>CompositionApi</h1>
    <h3>{{ count }}</h3>
    <button @click="sub">-</button>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    sub() {
      this.count--;
    },
  },
  setup(props, context) {
    console.log(props, context);
    const useCounter = () => {};
    return {
      useCounter,
    };
  },
};
</script>

<style>
</style>