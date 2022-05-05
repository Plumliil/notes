<template>
  <div class="about">
    <h2>About页面的数字:{{$store.getters.getNum}}</h2>
    <button @click="increase()">About按钮.点击+1</button>
  </div>
</template>

<script>
// import { mapGetters,mapMutations } from "vuex";
import { mapGetters} from "vuex";
import {MUTATIONS_TYPE} from '../store/mutations_type'
export default {
  computed:{
    ...mapGetters(['getNum'])
  },
  methods: {
    // ...mapMutations([MUTATIONS_TYPE.INCREASE]),
    increase(){
      this.$store.commit(MUTATIONS_TYPE.INCREASE)
    },
  },
}
</script>
