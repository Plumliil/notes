<template>
  <div class="footer">
    <span>
      <input type="checkbox" :checked="isFull" @change="fullChange"> 全选
    </span>
<!--    <Counter :count="amt"></Counter>-->
    <span>合计：{{amont.toFixed(2)}}</span>
    <span>结算({{total}})</span>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter";
export default {
  components: {Counter},
  props:{
    isFull:{
      type:Boolean,
      default:true
    },
    amont:{
      type:Number,
      default: 0
    },
    total:{
      type:Number,
      default:0
    }
  },
  name: "Footer",
  methods:{
    fullChange(e){
      this.$emit('full-change',e.target.checked)
    }
  }
}
</script>

<style scoped>
  .footer{
    background-color: skyblue;
    height: 2rem;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
  }
</style>
