<template>
  <div id="app">
    <h1 ref="myh1">APP根组件</h1>
    <button @click="showThis">打印 this</button>
    <br />
    <button @click="resetCount">重置Left组件的count值为0</button>
    <hr />
    <span>
      <input type="text" ref="iptRef" v-if="inputVisible" @blur="showButton">
      <button v-else @click="showInput">展示输入框</button>
    </span>
    <div class="box">
      <Left ref="left"></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>

import Left from "@/components/Left";
import Right from "@/components/Right";
export default {
  name: 'App',
  components: {Right, Left},
  data(){
    return{
      inputVisible:false
    }
  },
  methods:{
    showThis(){
      console.log(this)
      console.log(this.$refs.myh1)
      this.$refs.myh1.style.color='red'
    },
    resetCount(){
      console.log(this.$refs.left)
      this.$refs.left.count=0
    },
    showInput(){
      // 切换布尔值展示文本框
      this.inputVisible=true
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
        console.log(this.$refs.iptRef)
      })
    },
    showButton(){
      this.inputVisible=false
    },
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box{
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
}
.left{
  height: 100%;
  flex: 1;
  background-color: skyblue;
}
.right{
  height: 100%;
  flex: 1;
  background-color: salmon;
}
</style>
