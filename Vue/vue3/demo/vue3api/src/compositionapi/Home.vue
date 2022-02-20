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
    <section>
      <h3>readonly</h3>
      <h5>info1:{{info1}}</h5>
      <h5>info2:{{info2}}</h5>
      <h5>info3:{{info3}}</h5>
      <button @click="changeState">changeState</button>
    </section>
  </div>
</template>

<script>
import { reactive, readonly, ref } from "vue";
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
    // 局部函数
    const add = () => {
      counter.value++;
    };
    const sub = () => {
      counter.value--;
    };
    // 1.普通对象
    let info1 = { name: "plumli" };
    const rdoyInfo1=readonly(info1)
    // 2.reactive对象
    let info2 = reactive({ name: "plum" });
    const rdoyInfo2=readonly(info2)
    // 3.ref对象
    let info3 = ref('pl');
    const rdoyInfo3=readonly(info3)
    let changeState = () => {
        rdoyInfo1.name='plum';
        rdoyInfo2.name='li';
        rdoyInfo3.value='li';
    };
    return {
      title: "hello home",
      counter,
      add,
      sub,
      changeState,
      info1,
      info2,
      info3,
    };
  },
};
</script>

<style>
</style>