<template>
  <div>
    <h3>count</h3>
    <p>count的值是：{{count}}</p>
    <button @click="count+=1">+1</button>
    <button @click="show">show</button>
  </div>
</template>

<script>
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  props:{
    init:{
      default:0,
      type:Number
    }
  },
  name: "Count",
  data(){
    return{
      count:this.init
    }
  },
  methods:{
    show(){
      console.log(this.init)
    }
  }
}
</script>

<style scoped>

</style>
