<template>
  <div>
    <h1>App</h1>
    <section>
      <hr />
      <!-- <h3></h3> -->
      <!-- <h4>{{ info.name }}-{{ info.age }}</h4>
      <h4>{{ name }}-{{ age }}</h4> -->
      {{ info }}
      <button @click="changeInfo">changeInfo</button>
    </section>
    <section>
      <hr />
      <h4>案例:对双向绑定的属性进行debounce操作</h4>
      <input type="text" v-model="message" />
      {{ message }}
    </section>
  </div>
</template>

<script>
import { ref, shallowRef } from "vue";
console.log(ref);
import useDebounceRef from './hook/useDebounceRef'
export default {
  setup() {
    const info = shallowRef({ name: "zs" });
    const changeInfo = () => {
      info.value.name = "ls";
    };

    const message = useDebounceRef("Hello World");
    return {
      info,
      changeInfo,
      message,
    };
  },
};
</script>

<style>
</style>