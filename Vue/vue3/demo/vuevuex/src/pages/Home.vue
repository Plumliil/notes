<template>
  <div>
    <h2>HOME</h2>
    <h2>home:{{ homeCounter }}</h2>
    <button @click="add">home +1</button>
    <h2>{{ doubleCounter }}</h2>
    <hr />
  </div>
</template>

<script>
// import { mapGetters, mapState, mapMutations, mapActions, createNamespacedHelpers } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapMutations, mapActions } =
  createNamespacedHelpers("home");

export default {
  computed: {
    // 写法一
    // ...mapState({
    //   homeCounter: (state) => state.home.homeCounter,
    // }),
    // ...mapGetters({
    //   doubleCounter: "home/doubleCounter",
    // }),
    // 写法二
    // ...mapState('home',['homeCounter']),
    // ...mapGetters('home',['doubleCounter'])
    // 写法三
    ...mapState(["homeCounter"]),
    ...mapGetters(["doubleCounter"]),
  },
  methods: {
    // 写法一
    // ...mapMutations(["home/add"]),
    // ...mapActions(["home/addAction"]),
    // 写法二
    // ...mapMutations('home',["add"]),
    // ...mapActions('home',["addAction"]),
    // 写法三
    ...mapMutations(["add"]),
    ...mapActions(["addAction"]),
    
    add(){
      this.$store.commit('home/add')
    }
  },
  // setup() {
  //   const state=mapState(['homeCounter']);
  //   const getters=mapGetters(['doubleCounter']);
  //   const mutations=mapMutations(['add']);
  //   const actions=mapActions(['addAction']);
  //   return{
  //     ...state,
  //     ...getters,
  //     ...mutations,
  //     ...actions
  //   }
  // },
};
</script>

<style>
</style>