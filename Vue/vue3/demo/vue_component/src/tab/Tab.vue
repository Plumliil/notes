<template>
  <div class="tab_bar">
    <div class="tab_head">
      <span
        v-for="(item, index) in title"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="conChange(index)"
        >{{ item }}</span
      >
    </div>
    <!-- <div class="tab_con"> -->
      <!-- {{ currents[currentIndex] }} -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      required: true,
    },
    //  :content="content"
    // content: {
    //   type: Array,
    //   required: true,
    // },
  },
  emits:['titleClick'],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    conChange(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
  },
};
</script>

<style scoped>
.tab_bar {
  /* border: 1px solid black; */
  width: 400px;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
}
.tab_head {
  display: flex;
}
.tab_head span {
  flex: 1;
  padding: 10px;
  display: block;
  margin: 2px;
  text-align: center;
  border: 2px solid transparent;
  transition: 1s;
}
.tab_head span.active {
  border-bottom: 2px solid orangered;
}
.tab_con {
  width: 100%;
  /* height: 253px; */
  /* background-color: pink; */
}
.tab_con div {
  position: absolute;
}
.active {
  display: block;
}
</style>