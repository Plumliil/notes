<template>
  <div>
    <h2>Home</h2>
    <h3>message:{{ message }}</h3>
    <h3>title:{{ title }}</h3>
    <h3 style="color: red">
      <slot name="slotLi"> </slot>
    </h3>
    <section>
      <h3>{{ counter }}</h3>
      <button @click="sub">-</button>
      <button @click="add">+</button>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    message: {
      type: String,
    },
  },
  setup(props, context) {
    console.log("props", props);
    console.log("context", context);
    let counter = ref(100);
    // const info={
    //     counter
    // }
    // 局部函数
    const add = () => {
      counter.value++;
    };
    const sub = () => {
      counter.value--;
    };
    return {
      title: "hello home",
      counter,
      add,
      sub,
    };
  },
};
</script>

<style>
</style>