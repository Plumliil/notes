<template>
  <div>
    <h1>mixin</h1>
    <h3>{{ message }}</h3>
    <button @click="foo">click</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixin/demoMixin";
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "hello mixin",
    };
  },
};
</script>

<style>
</style>