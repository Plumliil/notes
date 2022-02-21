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
    <section>
      <hr />
      <h3>自定义指令练习</h3>
      <h4 v-format-time="'YYYY/MM/DD hh:mm:ss'">
        {{ timestamp }}
      </h4>
    </section>
    <section>
      <hr />
      <teleport to="#plum">
        <h3>Teleport</h3>
      </teleport>
    </section>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    pl: {
      // created() {
      //   console.log("pl created");
      // },
      // beforeMount() {
      //   console.log("pl beforeMount");
      // },
      // mounted() {},
      // beforeUpdate() {
      //   console.log("pl beforeUpdate");
      // },
      updated(_, bindings) {
        console.log(bindings.value);
        console.log(bindings.modifiers);
        console.log("pl updated");
      },
      // beforeUnmount() {
      //   console.log("pl beforeUnmount");
      // },
      // unmounted() {
      //   console.log("pl unmounted");
      // },
    },
  },
  setup() {
    let counter = ref(0);
    const changeCounter = () => {
      counter.value++;
    };
    // const timestamp = 1645405199;
    const timestamp = new Date().getTime();
    // console.log(new Date().getTime());
    const instance = getCurrentInstance();
    console.log(instance.$name);
    console.log(instance.appContext.config.globalProperties.$name);
    return {
      counter,
      changeCounter,
      timestamp,
    };
  },
  created() {
    console.log(this.$name);
  },
};
</script>

<style>
</style>