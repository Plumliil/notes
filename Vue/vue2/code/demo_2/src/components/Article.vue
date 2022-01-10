<template>
  <div class="article-container">
    <h3 v-color="'pink'">ARTICLE</h3>
    <!--文章标题-->
    <div class="header-box">
      <slot name="title"></slot>
    </div>
    <!--文章内容-->
    <div class="content-box">
      <slot name="content" msg="hello slot"></slot>
    </div>
    <!--文章作者-->
    <div class="footer-box">
      <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style scoped lang="less">
  .article-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    >div{
      min-height: 3rem;
    }
    .header-box{
      background-color: lightseagreen;
    }
    .content-box{
      background-color: lightblue;
      display: flex;
    }
    .footer-box{
      background-color: lightcoral;
    }
  }
</style>
