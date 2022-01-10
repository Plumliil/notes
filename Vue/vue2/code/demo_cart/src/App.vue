<template>
  <div id="app">
    <Header></Header>
    <Goods v-for="item in list"
           :key="item.id"
           :id="item.id"
           :title="item.goods_name"
           :pic="item.goods_img"
           :price="item.goods_price"
           :count="item.goods_count"
           :state="item.goods_state"
           @state-change="getNewState"
    ></Goods>

    <Footer :isFull="fullState"
            :amont="amt"
            :total="total"
            @full-change="getFullState"
    ></Footer>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
// 导入需要的组件
import Header from "@/components/Header/Header";
import Goods from "@/components/Goods/Goods";
import Footer from "@/components/Footer/Footer";
import bus from '@/components/eventBus'
export default {
  name: 'App',
  components: {Footer, Goods, Header},
  created() {
    // console.log(this)
    this.initCartList()
    bus.$on('share',val=>{
      this.list.some(item=>{
        if(item.id===val.id){
          item.goods_count=val.num
          return true
        }
      })
      console.log('接收到了',val)
    })
  },
  data(){
    return{
      list:[]
    }
  },
  methods:{
    async initCartList(){
      // 调用Get方法获取数据
      const {data:res}=await axios.get('https://www.escook.cn/api/cart')
      if(res.status===200){
        this.list=res.list
        console.log(res)
      }
    },
    // 接收子组件传递过来的数据
    getNewState(e){
      // console.log(e)
      this.list.some(item=>{
        if(item.id===e.id){
          item.goods_state=e.value
          return true
        }
      })
    },
    // 接收footer子组件传递来的状态
    getFullState(e){
      this.list.forEach(item=>{
        item.goods_state=e
      })
    }
  },
  computed:{
    fullState(){
      return this.list.every(item=>item.goods_state)
      // console.log('xxx')
    },
    amt(){
      return this.list
          .filter(item=>item.goods_state)
          .reduce((total,item)=>{
            return total+=item.goods_price*item.goods_count
          },0)
    },
    // total已勾选商品总数
    total(){
      return this.list.filter(item=>item.goods_state).reduce((t,item)=>{
        return t+=item.goods_count
      },0)
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {

}
</style>
