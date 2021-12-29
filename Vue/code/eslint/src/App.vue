<template>
  <div id="app">
    <h1>APP根组件</h1>
    <hr />
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>

import Left from '@/components/Left'
import Right from '@/components/Right'

export default {
  name: 'App',
  components: { Right, Left }
}
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .box{
    width: 100%;
    display: flex;
    text-align: center;
  }
}
</style>
