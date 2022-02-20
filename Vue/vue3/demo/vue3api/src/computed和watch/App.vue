<template>
  <div>
    <h1>computed和watch</h1>
    <section>
      <hr />
      <h4>{{ fullName }}</h4>
      <button @click="changeName">changeName</button>
    </section>
    <section>
      <hr />
      <h4>{{ name }}-{{ age }}</h4>
      <button @click="changeN">changeN</button>
      <button @click="changeA">changeA</button>
    </section>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
export default {
  setup() {
    let firstName = ref("zhang");
    let lastName = ref("san");
    // 1.传入getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + "" + lastName.value);
    // 2.传入一个对象，包含getter和setter
    const fullName = computed({
      get: () => firstName.value + "" + lastName.value,
      set: (newValue) => {
        const names = newValue.split(" ");
        firstName = names[0];
        lastName = names[1];
      },
    });
    const changeName = () => {
      (firstName.value = "li"), (lastName.value = "si");
    };
    // watchEffect: 自动收集响应式依赖
    const name = ref("plumli");
    const age = ref(20);
    const changeN = () => (name.value = "plum");
    const changeA = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };
    // 默认执行一次
    const stop = watchEffect((onInvalidate) => {
      // 根据name和age两个变量发送网络请求
      const timer=setTimeout(() => {
          console.log('网络请求成功');
      }, 2000);
      onInvalidate(()=>{
          clearTimeout(timer)
          console.log('onInvalidate');
      });
      console.log("name", name.value, "age", age.value);
    });
    return {
      firstName,
      lastName,
      fullName,
      changeName,
      name,
      age,
      changeN,
      changeA,
    };
  },
};
</script>

<style>
</style>