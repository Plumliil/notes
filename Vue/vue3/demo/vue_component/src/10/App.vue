<template>
  <div>
    <h1>APP</h1>
    <button
      :class="{ active: currentTab === item }"
      v-for="(item, index) in tabs"
      :key="index"
      @click="itemClick(item)"
    >
      {{ item }}
    </button>
    <!-- 逗号分隔 -->
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="plum"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
    <!-- 正则 使用v-bind -->
    <keep-alive :include="/home|about/">
      <component
        :is="currentTab"
        name="plum"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
    <!-- Array 使用v-bind -->
    <keep-alive :include="['home','about']">
      <component
        :is="currentTab"
        name="plum"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Category from "./pages/Category.vue";
export default {
  components: { Home, About, Category },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageClick(v) {
      console.log("page内部发生点击");
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>