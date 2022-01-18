<template>
  <div>
    <h4>PlInput：</h4>
    <input v-model="value" />
    <br>
    <input v-model="titleI" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title:String
  },
  emits: ["update:modelValue","update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    titleI: {
      set(title) {
        this.$emit("update:title", title);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped>
</style>