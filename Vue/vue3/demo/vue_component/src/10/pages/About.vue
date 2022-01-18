<template>
  <div>
    about
    <button @click="counter++">
      {{ counter }}
    </button>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped>
</style>