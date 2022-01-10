<template>
  <div class="count">
    <button @click="sub">-</button>
    <span>{{count}}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
import bus from '@/components/eventBus'
export default {
  props:{
    num:{
      type:Number,
      default:1
    }
  },
  name: "Counter",
  data(){
    return{
      count:this.num
    }
  },
  methods:{
    sub(){
      if(this.count>1){
        this.count=this.num-1
        this.$emit('share',this.count-1)
      }else {
        this.$emit('share',this.count=1)
      }
    },
    add(){
      // console.log({id:this.id,num:this.num+=1})
      this.$emit('share',this.count+=1)
    }
  }
}
</script>

<style scoped lang="less">
.count{
  //background-color: skyblue;
  padding: 0;
  display: flex;
  //height: 2rem;
  //justify-content: center;
  //align-items: center;
  button{
    width: 1.5rem;
    height: 1.2rem;
    //padding: 0.2rem .5rem;
    background-color: white;
    //border: .1rem solid black;
    outline: none;
    border: none;
    text-align: center;
  }
  span{
    display: block;
    //width: 3rem;
    height: 1.2rem;
    padding: 0 0.5rem;
    background-color: white;
  }
}
</style>
