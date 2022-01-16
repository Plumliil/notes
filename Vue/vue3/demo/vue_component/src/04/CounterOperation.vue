<template>
  <div>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <input type="text" v-model.number="num" />
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
export default {
  //   emits: ["add", "sub",'addN'],
  // 对象写法的目的是为了进行参数验证
  emits: {
    add: null,
    sub: null,
    addN: (num) => {
      console.log(num);
      if (num > 10) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    decrement() {
      console.log("-1");
      this.$emit("sub");
    },
    increment() {
      console.log("+1");
      this.$emit("add");
    },
    incrementN() {
      this.$emit("addN", this.num);
    },
  },
};
</script>

<style scoped>
</style>