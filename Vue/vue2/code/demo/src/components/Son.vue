<template>
  <div class="son">
    <h1>Son 组件</h1>
    <p>父组件传递过来的 msg 值为：{{msg}}</p>
    <p>父组件传递过来的 user 值为：{{user}}</p>
  </div>
</template>

<script>
export default {
  props:['msg','user'],
  name: "Son"
}
</script>

<style scoped>

</style>
