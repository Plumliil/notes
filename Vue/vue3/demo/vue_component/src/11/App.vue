<template>
  <div>
    <h1>App</h1>
    <Home></Home>
    <async-category></async-category>
    <suspense>
        <template #default>
            <async-category></async-category>
        </template>
        <template #fallback>
            <loading></loading>
        </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Home.vue";
import Loading from "./Loading.vue";
// import AsyncCategory from "./AsyncCategory.vue";
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));
export default {
  components: { Home, AsyncCategory, Loading },
};
</script>

<style scoped>
</style>