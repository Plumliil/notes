<template>
  <div>
    <h1>APP</h1>
    <home v-if="isShow"></home>
    <button @click="isShow=!isShow">切换</button>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
    components:{Home},
    data() {
        return {
            isShow:true
        }
    },
};
</script>

<style scoped>
</style>