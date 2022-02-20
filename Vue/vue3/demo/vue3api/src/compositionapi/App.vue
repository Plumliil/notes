<template>
  <div>
      <h1>CompositionApi</h1>
      <Home id="id" class="class" message="hahaha">
          <template #slotLi>
              <div>
                  slot
              </div>
          </template>
      </Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  //   props: {},
  components: { Home },
//   setup(props, context) {
//     console.log(props, context);
//   },
};
</script>

<style>
</style>