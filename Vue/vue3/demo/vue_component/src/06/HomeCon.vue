<template>
  <div>
    <h3>HomeCon</h3>
  </div>
</template>

<script>
import emitter from "./utils/eventBus";
import { CLI_EVENT } from "./utils/constants";
export default {
  created() {
    console.log("homeCon");
    emitter.on(CLI_EVENT, (info) => {
      console.log(CLI_EVENT,info);
    });
    emitter.on("* listener", (type, info) => {
      console.log("* listener", type, info);
    });
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>