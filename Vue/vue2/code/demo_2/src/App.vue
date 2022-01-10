<template>
  <div id="app">
      <h1 v-color="color">APP根节点</h1>
      <h2 v-color="'blue'">测试节点</h2>
    <button @click="color='green'">改变color颜色</button>
    <div>
      <Left>
        <template v-slot:default>
          一个p标签
        </template>
      </Left>
      <Right></Right>
    </div>
    <Article>
      <template #title>
        <h3>诗</h3>
      </template>
      <template #content="msg">
        <h3>内容--{{msg.msg}}</h3>
      </template>
      <template #author>
        <h6>作者</h6>
      </template>
    </Article>
  </div>
</template>

<script>

import Left from "@/components/Left";
import Right from "@/components/Right";
import Article from "@/components/Article";
export default {
  name: 'App',
  components: {
    Article,
    Right,
    Left
  },
  data(){
    return{
    comName:'Left',
      color:'pink'
    }
  },
  // 私有节点自定义指令
  directives: {
    color(el,binding){
      el.style.color=binding.value
    }
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
