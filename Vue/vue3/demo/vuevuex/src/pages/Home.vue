<template>
  <section>
    <h2>Home</h2>
    <!-- <h3>{{$store.getters.totalPrice}}</h3> -->
    <!-- <h3>{{$store.getters.titalCounterGreaterN(20)[0].name}}</h3> -->
    <!-- <h3>{{$store.getters.nameInfo}}</h3> -->
    <!-- <h3>{{$store.getters.ageInfo}}</h3> -->
    <h3>{{nameInfo}}</h3>
    <h3>{{ageInfo}}</h3>
    <h3>{{sNameInfo}}</h3>
    <h3>{{sAgeInfo}}</h3>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['nameInfo','ageInfo',]),
    ...mapGetters({
      sNameInfo:"nameInfo",
      sAgeInfo:"ageInfo",
    })
  }
};
</script>

<style>
</style>