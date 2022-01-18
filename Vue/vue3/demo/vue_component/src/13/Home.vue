<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="changeMsg">修改message</button>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate 阶段 创建前");
  },
  created() {
    console.log("created 阶段 创建成功");
  },
  beforeMount() {
    console.log("beforeMount 阶段 挂载前");
  },
  mounted() {
    console.log("mounted 阶段 挂载成功");
  },
  beforeUnmount() {
    console.log("beforeUnmount 阶段 卸载前");
  },
  unmount() {
    // 取消注册的事件
    console.log("beforeUnmount 阶段 卸载成功");
  },
  beforeUpdate() {
    console.log("beforeUpdate 阶段 更新前");
  },
  updated() {
    console.log("update 阶段 更新成功");
  },
  data() {
      return {
          message:'Hello Home'
      }
  },
  methods:{
      changeMsg(){
          this.message+='.';
      }
  }
};
</script>

<style scoped>
</style>