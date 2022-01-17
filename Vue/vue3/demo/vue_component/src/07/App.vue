<template>
  <div>
    <h1>slot</h1>
    <my-slot-cpn>
        <button>我是按钮</button>
    </my-slot-cpn>
    <my-slot-cpn>
        <my-btn/>
    </my-slot-cpn>
    <my-slot-cpn>
    </my-slot-cpn>
    <my-slot-cpn>
        <h2>ssss</h2>
        <button>btn</button>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
import MyBtn from './MyBtn.vue';
export default {
  components: { MySlotCpn,MyBtn },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>