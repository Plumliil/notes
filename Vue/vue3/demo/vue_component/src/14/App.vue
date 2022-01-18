<template>
  <div>
    <h1>组件的v-model</h1>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <!-- 绑定两个v-model -->
    <pl-input v-model="message" v-model:title="title"></pl-input>
  </div>
</template>

<script>
import PlInput from "./PlInput.vue";
export default {
  components: { PlInput },
  data() {
    return {
      message: "hello v-model!",
      title:'title'
    };
  },
};
</script>

<style scoped>
</style>