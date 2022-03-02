<template>
  <div>
    <h1>App Vuex</h1>
    <hr />
    <h2>root:{{ $store.state.rootCounter }}</h2>
    <button @click="sub">-1</button>
    <button @click="add">+1</button>
    <hr />
    <h2 ref="titleRef">{{ message }}</h2>
    <button @click="addMsg">添加内容</button>
    <!-- <home></home> -->
  </div>
</template>

<script>
import { ref,nextTick } from "vue";
// import Home from './pages/Home.vue'
export default {
  components: {
    // Home
  },
  methods: {
    sub() {
      this.$store.commit("sub");
    },
    add() {
      this.$store.commit("add");
    },
  },
  setup() {
    const message = ref("哈哈哈哈");
    const titleRef=ref(null);
    const addMsg = () => {
      message.value += "哈哈哈哈哈";
      nextTick(()=>{
        console.log(titleRef.value.offsetHeight);
      })
    };
    return {
      message,
      addMsg,
      titleRef
    };
  },
};
</script>

<style>
</style>