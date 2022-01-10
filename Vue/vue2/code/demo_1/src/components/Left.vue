<template>
  <div class="left">
    <h1>LEFT---{{count}}</h1>
    <button @click="count+=1">+1</button>
    <button @click="count=0">重置</button>
  </div>
</template>

<script>
export default {
  name: "Left",
  data(){
    return{
      count:0
    }
  }
}
</script>

<style scoped>

</style>
