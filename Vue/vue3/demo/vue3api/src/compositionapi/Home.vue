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
export default {
  props: {
    message: {
      type: String,
    },
  },
  setup(props, context) {
    console.log("props", props);
    console.log("context", context);
    let counter = 100;
    // 局部函数
    const add = () => {
      console.log("add");
      counter++;
      console.log(counter);
    };
    const sub = () => {
      console.log("sub");
      counter--;
      console.log(counter);
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