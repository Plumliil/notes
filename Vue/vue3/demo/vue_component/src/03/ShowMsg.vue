<template>
    <div>
        <h2 v-bind="$attrs">{{title}}</h2>
        <h4>{{content}}</h4>
        <h6>{{footer}}</h6>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    footer:{
        type:String
    },
    obj:{
        type:Object,
        default(){
            return {name:'zs'}
        }
    }
  },
  inheritAttrs:false,
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>