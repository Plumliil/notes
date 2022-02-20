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
    <section>
      <hr />
      <h2 ref="title">title</h2>
    </section>
    <section>
      <hr />
      <h3>watch监听单个数据源</h3>
      <h3>{{watchInfo.name}}</h3>
      <button @click="changeWI">changeWI</button>
    </section>
  </div>
</template>

<script>
import { computed, reactive, ref, watchEffect, watch } from "vue";
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
      const timer = setTimeout(() => {
        console.log("网络请求成功");
      }, 2000);
      onInvalidate(() => {
        clearTimeout(timer);
        console.log("onInvalidate");
      });
      console.log("name", name.value, "age", age.value);
    });
    const title = ref(null);
    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // 挂载完成后拿到ref
        flush: "post",
      }
    );
    const watchInfo = reactive({ name: "watch", age: 20 });
    // watchEffect(()=>{
    //   console.log(watchInfo.name);
    // })
    watch(()=>watchInfo.name, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    const changeWI=()=>{
      watchInfo.name='wi'
    }
    return {
      firstName,
      lastName,
      fullName,
      changeName,
      name,
      age,
      changeN,
      changeA,
      title,
      watchInfo,
      changeWI
    };
  },
};
</script>

<style>
</style>