<template>
  <div class="right">
    <h2>right</h2>
    <hr>
    <MyCount :init="6"></MyCount>
    <p>num的值为：{{num}}</p>
    <button @click="add">+1</button>
    <br/>
    <p>msgFromLeft的值为：{{msgFromLeft}}</p>
  </div>
</template>

<script>
import bus from './eventBus'
export default {
  created() {
    // 为bus绑定自定义事件
    bus.$on('share',val=>{
      this.msgFromLeft=val
      console.log('在right中定义的share被触发了')
    })
  },
  name: "Right",
  data(){
    return{
      num:0,
      msgFromLeft:''
    }
  },
  methods:{
    add(){
      // 让子组件的值自增加一
      this.num+=1
      // 把自增的结果传给父组件
      this.$emit('numChange',this.num)
    }
  }
}
</script>

<style scoped>

</style>
