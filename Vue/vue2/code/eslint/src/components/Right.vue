<template>
  <div class="right">
    <h1>RIGHT</h1>
    <button @click="postInfo">发起Post请求</button>
  </div>
</template>

<script>
export default {
  name: 'Right',
  data () {
    return {
      xx: 1
    }
  },
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('post', { name: 'zs', age: 20 })
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.right{
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
