<template>
  <div>
    <h2>Tab切换</h2>
    <my-tab :title="title" @titleClick="titleClick"></my-tab>
    <h2>{{content[currentIndex]}}</h2>
  </div>
</template>

<script>
import MyTab from "./Tab.vue";
export default {
  components: { MyTab },
  data() {
    return {
      currentIndex: 0,
      title: ["衣服", "帽子", "鞋子"],
      content: [
        { name: "衬衫", price: 200, size: "xl" },
        { name: "裤子", price: 120, size: "xxl" },
        { name: "鞋子", price: 200, size: "42" },
      ],
    }
  },
  methods:{
      titleClick(index){
          this.currentIndex=index;
          console.log(this.content[index]);
      }
  }
};
</script>

<style scoped>
</style>