<template>
  <div>
    <button @click="increase(3)">点击+1</button>
    <button @click="decrease">点击-1</button>
  </div>
</template>

<script>
import { mapMutations,mapActions } from "vuex";
export default {
  methods: {
    decrease() {
      setTimeout(() => {
        this.decreaseAsync()
      }, 1000);
    },
    ...mapMutations(['increase']),
    ...mapActions(['decreaseAsync']),
  },
};
</script>

<style scoped>
</style>