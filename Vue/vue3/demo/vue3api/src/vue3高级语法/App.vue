<template>
  <div>
    <h1>vue3高级语法</h1>
    <section>
      <hr />
      <h3>认识自定义指令</h3>
      <input type="text" ref="input" v-focus />
    </section>
    <section>
      <hr />
      <h3>指令的生命周期</h3>
      <h4 v-pl.aaa.bbb="counter" v-if="counter < 5" @click="changeCounter">
        当前计数:{{ counter }}
      </h4>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    pl: {
      created() {
        console.log("pl created");
      },
      beforeMount() {
        console.log("pl beforeMount");
      },
      mounted(el, bindings, vnode, prvenode) {
        console.log(el);
        console.log(bindings);
        console.log(vnode);
        console.log(prvenode);
        console.log("pl mounted");
      },
      beforeUpdate() {
        console.log("pl beforeUpdate");
      },
      updated(_,bindings) {
        console.log(bindings.value);
        console.log(bindings.modifiers);
        console.log("pl updated");
      },
      beforeUnmount() {
        console.log("pl beforeUnmount");
      },
      unmounted() {
        console.log("pl unmounted");
      },
    },
  },
  setup() {
    let counter = ref(0);
    const changeCounter = () => {
      counter.value++;
    };
    return {
      counter,
      changeCounter,
    };
  },
};
</script>

<style>
</style>