<template>
  <div>
    <input type="text" v-model="keyword" />
    <transition-group
      tag="ul"
      name="plum"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      names: [
        "aaa",
        "bbb",
        "ccc",
        "ddd",
        "aab",
        "aac",
        "aad",
        "bbc",
        "bbd",
        "ccd",
      ],
      keyword: "",
    };
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1);
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      console.log(el);
      gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.3,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: "0em",
        delay: el.dataset.index * 0.3,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>

</style>