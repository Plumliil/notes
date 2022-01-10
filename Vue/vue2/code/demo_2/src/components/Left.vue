<template>
  <div class="left">
    <h2>LEFT</h2>
    <br />
    <slot name="default">
        slot插槽的默认内容
    </slot>
  </div>
</template>

<script>
export default {
  name: "Left",
  data(){
    return{
      count:0
    }
  },
  created() {
    console.log('left已创建')
  },
  destroyed() {
    console.log('left组件已销毁')
  },
  // 组件第一次被创建,即会执行create也会执行activated
  // 当组件再次被激活时,只会执行activated不会重新create
  activated() {
    console.log('left组件被激活了')
  },
  deactivated() {
    console.log('left组件被缓存了')
  }
}
</script>

<style scoped>
  .left{
    width: 100%;
    height: 20rem;
    background-color: pink;
    display: flex;
    flex-direction: column;
  }
</style>
