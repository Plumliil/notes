<template>
  <div class="left">
    <h1>LEFT</h1>
    <button @click="getInfo">发起Get请求</button>
  </div>
</template>

<script>
export default {
  name: 'Left',
  data () {
    return {
      xx: 1
    }
  },
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('get')
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
  .left{
    background-color: orange;
    min-height: 200px;
    flex: 1;
  }
</style>
