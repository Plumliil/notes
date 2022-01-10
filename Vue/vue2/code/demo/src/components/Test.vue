<template>
  <div>
    <h1>TEST组件</h1>
    <p>message的值是：{{message}}</p>
    <button @click="message+='-'">修改message</button>
  </div>
</template>

<script>
export default {
  props:['info'],
  name: "Test",
  data(){
    return{
      message:'hello vue.js'
    }
  },
  methods:{
    show(){
      console.log('调用了Test组件的show方法')
    }
  },
  beforeCreate() {
    console.log('beforeCreated')
    // console.log(this.info)
    // console.log(this.message)
    // this.show()
  },
  // 组件的props/data/methods已创建好，处于可用状态，但是组建的模板结构尚未生成
  created() {
    console.log('created')
    console.log(this.info)
    console.log(this.message)
    this.show()
  },
  // 将要把内存中编译好的HTML结构渲染到浏览器中，此时浏览器中还没有当前组件的DOM结构
  beforeMount() {
    console.log('object')
    const dom=document.querySelector('h1')
    console.log(dom)
  },
  mounted() {
    console.log('mounted')
    const dom=document.querySelector('h1')
    console.log(dom)
  },
  beforeUpdate() {
    console.log('beforeUpdate')
    console.log(this.message)
    const p=document.querySelector('p')
    console.log(p.innerHTML)
  },
  updated() {
    console.log('updated')
    console.log(this.message)
    const p=document.querySelector('p')
    console.log(p.innerHTML)
  },
  beforeDestroy() {
    console.log('beforeDestory')
  },
  destroyed() {
    console.log('destroyed clean')
  }
}
</script>

<style scoped>

</style>
