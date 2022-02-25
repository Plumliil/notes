<template>
  <section>
    <h2>Home</h2>
    <h3>Home:{{ sCounter }}</h3>
    <h3>Home:{{ sName }}</h3>
    <h3>Home:{{ sAge }}</h3>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    fullName() {
      return "ls";
    },
    // 1.其他计算属性1,从stote中获取
    // ...mapState(["counter", "name", "age"]),
    // 2.可以传递对象,改变名称使用
    ...mapState({
      sCounter:state=>state.counter,
      sName:state=>state.name,
      sAge:state=>state.age,
    })
  },
};
</script>

<style>
</style>