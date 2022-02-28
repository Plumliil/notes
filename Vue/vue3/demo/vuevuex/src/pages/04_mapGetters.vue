<template>
  <section>
    <h2>Home</h2>
    <!-- <h3>{{$store.getters.totalPrice}}</h3> -->
    <!-- <h3>{{$store.getters.titalCounterGreaterN(20)[0].name}}</h3> -->
    <!-- <h3>{{$store.getters.nameInfo}}</h3> -->
    <!-- <h3>{{$store.getters.ageInfo}}</h3> -->
    <h3>{{ nameInfo }}</h3>
    <h3>{{ ageInfo }}</h3>
    <!-- <h3>{{sNameInfo}}</h3>
    <h3>{{sAgeInfo}}</h3> -->
  </section>
</template>

<script>
// import { computed } from "vue";
// import { useStore, mapGetters } from "vuex";
import { useGetters } from "../hooks/useGetters";
export default {
  setup() {
    // const store = useStore();
    // console.log(store);
    // let mapGettersFns = mapGetters(["nameInfo", "ageInfo"]);
    // console.log(mapGettersFns);
    // let mapGetter = {};
    // Object.keys(mapGettersFns).forEach((fnKey) => {
    //   const fn = mapGettersFns[fnKey].bind({$store:store});
    //   mapGetter[fnKey]=computed(fn)
    // });
    // console.log(mapGetter);
    const mapGetter = useGetters(["nameInfo", "ageInfo"]);
    console.log(mapGetter);
    return {
      // ...storeGetters,
      ...mapGetter,
    };
  },
};
</script>

<style>
</style>