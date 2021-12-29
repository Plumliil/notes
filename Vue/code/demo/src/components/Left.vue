<template>
  <div class="left">
    <h2>left</h2>
    <hr>
    <MyCount :init="9"></MyCount>
    <p>msg 值为：{{msg}}</p>
    <p>user 值为：{{user}}</p>
    <button @click="msg='abc'">修改msg</button>
    <button @click="user.name='ls'">修改user</button>
    <button @click="sendRight">兄弟之间传值</button>
  </div>
</template>

<script>
import bus from './eventBus'
export default {
  name: "Left",
  props:['msg','user'],
  data(){
    return{
      str:'xxxxx,xxxxx,xxxxx,xxxxx'
    }
  },
  methods:{
    sendRight(){
      bus.$emit('share',this.str)
    }
  }
}
</script>

<style scoped>

</style>
