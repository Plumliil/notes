<template>
  <div class="header-container">{{title}}</div>
</template>

<script>
export default {
  props:{
    title:{
      default:''
    }
  },
  name: "Header"
}
</script>

<style scoped>
  .header-container{
    width: 100%;
    height: 3rem;
    background-color: skyblue;
    text-align: center;
    line-height: 2.5;
  }
</style>
