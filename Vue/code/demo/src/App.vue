<template>
  <div id="app">
    <h1>APP根组件</h1>
    <h2>numFromSon值为：{{numFromSon}}</h2>
    <button @click="flag=!flag">Toggle Flag</button>
    <Test info="你好" v-if="flag"></Test>
    <div class="box">
      <left :msg="message" :user="userInfo"></left>
      <right @numChange="getNewNum"></right>
    </div>
    <Son :msg="message" :user="userInfo"></Son>
  </div>
</template>

<script>
// 默认导出，固定语法
import left from '@/components/Left'
import right from '@/components/Right'
import Test from "@/components/Test";
import Son from "@/components/Son";
export default {
  components:{Son, Test, left,right},
  data() {
    return {
      flag:true,
      message:'Hello Son',
      userInfo:{
        name:'zs',
        age:20
      },
      numFromSon:0
    }
  },
  methods: {
    getNewNum(val){
      this.numFromSon=val
    }
  },
  watch: {},
  computed: {},
  filters: {}
}
</script>

<style lang="less" scoped>

#app {
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /deep/h2{
    color: red;
  }
  .box{
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    text-align: center;
    .left{
      width: 50%;
      height:100%;
      background-color: yellow;
    }
    .right{
      width: 50%;
      height:100%;
    }
  }
}
</style>
