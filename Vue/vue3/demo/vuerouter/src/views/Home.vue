<template>
  <div>
    <h2>HOME</h2>
    <router-link to="/home/message">消息</router-link> |
    <router-link to="/home/shop">商品</router-link>
    <hr />
    <router-view />
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  font-size: 15px;
}
</style>