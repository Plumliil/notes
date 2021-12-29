<template>
  <div class="goods-container">
      <div>
         <input type="checkbox" :checked="state" @change="stateChange">
         <img :src="pic">
         <div>
           <p>{{title}}</p>
           <div>
             <p>￥{{price}}</p>
             <Counter :id="id" :count="count"></Counter>
           </div>
         </div>
      </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter";
import bus from '@/components/eventBus'
export default {
  components: {Counter},
  created() {

  },
  props:{
    // 商品id
    // 将来子组件勾选状态变化，需要通过子->父形式通知父组件根据id修改状态
    id:{
      type:Number,
      required:true
    },
    title:{
      type:String,
      default:''
    },
    pic:{
      type:String,
      default: ''
    },
    price:{
      type:Number,
      default:0
    },
    count:{
      type:Number,
      default:0
    },
    state:{
      type:Boolean,
      default:true
    }
  },
  name: "Goods",
  data(){
    return{
      // list:this.goods
    }
  },
  methods:{
    stateChange(e){
      const newState=e.target.checked
      this.$emit('state-change',{id:this.id,value:newState})
    }
  }
}
</script>

<style scoped lang="less">
  .goods-container{
    //background-color: pink;
    div{
      height: 7rem;
      padding: .5rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        flex: 1;
      }
      img{
        flex: 3;
        height: 6rem;
      }
      div{
        //background-color: pink;
        flex: 6;
        height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p{
          flex: 1;
          font-size: .5rem;
          //color: #42b983;
        }
        div{
          flex: 1;
          padding: 0;
          width: 100%;
          height: .1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          //align-items: center;
          //background-color: pink;

        }
      }
    }
  }

</style>
