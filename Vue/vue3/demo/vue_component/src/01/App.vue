<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
export default {
  components: {Header,Main,Footer},
  data() {
    return {
      message: "Hello Plumli",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>