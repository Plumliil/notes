<template>
  <div class="index">
    <div id="pc_app">
      <div id="nav">
        <ul>
          <Li><p>PlumLi</p></Li>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/front">前端</router-link></li>
          <li><router-link to="/rear">后端</router-link></li>
          <li><router-link to="/tags">标签</router-link></li>
          <li><router-link to="/comment">留言板</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
          <li><input /></li>
          <li>头像</li>
        </ul>
      </div>
      <div id="main">
        <div class="main_content">
          <router-view></router-view>
        </div>
        <div class="main_side">
          <SideAssembly></SideAssembly>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  </div>
</template>

<script>
import SideAssembly from "./SideAssembly";
export default {
  name: "Index",
  components: {SideAssembly}
}
</script>

<style scoped>
#pc_app{
  height: 1000rem;
  display: flex;
  justify-content: center;
}
#main{
  display: flex;
  margin-top: 4rem;
  height: 100rem;
  width: 60%;
  background-color: pink;
}
#nav,
#nav ul,
#nav ul li{
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav{
  position: fixed;
  /*background-color: rgba(255,255,255,.5);*/
  border-radius: 5px;
  backdrop-filter: blur(20px);
  width: 100%;
  min-width: 120rem;
  height: 4rem;
  top: 0;
  border-bottom:1px lightgray solid;
}
#nav ul{
  width: 50%;
  /*background-color: skyblue;*/
  list-style-type: none;
}
#nav ul li{
  flex: 1;
  /*background-color: red;*/
  /*text-align: center;*/
  font-size: 1.5rem;
  color: white;
}
#nav ul li a{
  text-decoration: none;
  /*color: gray;*/
  color: white;
}
#nav ul li input{
  background: none;
  outline: none;
  height: 1.5rem;
}
.main_content{
  flex: 5;
  background-color: skyblue;
  border-radius: 1rem;
  margin: .5rem;
}
.main_side{
  flex: 2;
  background-color: antiquewhite;
  border-radius: 1rem;
  margin: .5rem;

}
</style>
