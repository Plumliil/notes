<template>
  <div class="home">
    <h2>Home页面的数字:{{ num }}</h2>
    <li>{{ $store.state.users.nickName }}</li>
    <button @click="changeName">将zs为ls</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["num"]),
  },
  methods: {
    changeName() {
      // this.changeNickName();
      console.log(this.changeNickName());
    },
    // changeNickName属于users中的方法
    ...mapMutations({
      "changeNickName":"users/changeNickName"
    }),
  },
};
</script>
