<template>
  <div>
    category
    <button @click="counter++">
      {{ counter }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped>
</style>