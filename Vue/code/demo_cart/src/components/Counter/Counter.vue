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
    id:{
      type:Number,
      required:true
    },
    count:{
      type:Number,
      default:0
    }
  },
  name: "Counter",
  data(){
    return{
      num:1
    }
  },
  methods:{
    sub(){
      if(this.num>1){
        this.num=this.num-1
        bus.$emit('share',{id:this.id,num:this.num})
      }else {
        bus.$emit('share',{id:this.id,num:this.num=1})
      }
    },
    add(){
      // console.log({id:this.id,num:this.num+=1})
      bus.$emit('share',{id:this.id,num:this.num+=1})
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
