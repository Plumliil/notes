<template>
  <div>
    <h1>App</h1>
    <show-msg class="colorChange" :title="title" :content="content"></show-msg>
    <show-msg :title="message.title" :content="message.content"></show-msg>
    <show-msg v-bind="message"></show-msg>
  </div>
</template>

<script>
import ShowMsg from "./ShowMsg.vue";
export default {
  components: { ShowMsg },
  data() {
    return {
      title: "标题",
      content: "我是内容我是内容我是内容我是内容我是内容我是内容",
      message: {
        title: "lalala",
        content: "woshilalala",
        footer: "xxx",
      },
    };
  },
};
</script>

<style>
.collorChange {
    color: red;
}
</style>