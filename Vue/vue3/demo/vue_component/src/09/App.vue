<template>
  <div>
    <h1>APP</h1>
    <!-- 非默认插槽 -->
    <child-cpn :names="names">
      <template #plum="slotProps">
        <strong>{{ slotProps.item }}--{{ slotProps.index }}</strong>
      </template>
    </child-cpn>

    <!-- 独占默认插槽缩写 -->
    <child-cpn :names="names" v-slot="slotProps">
      <strong>{{ slotProps.item }}--{{ slotProps.index }}</strong>
    </child-cpn>
    <!-- 如果有其他具名插槽，需要使用template编写 -->
    <child-cpn :names="names">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}--{{ slotProps.index }}</strong>
      </template>
      <template #plum>
        <h2>xxx</h2>
      </template>
    </child-cpn>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
export default {
  components: { ChildCpn },
  data() {
    return {
      names: ["eat", "sleep", "code", "play"],
    };
  },
};
</script>

<style scoped>
</style>