<template>
  <div id="nav">
    <h1>VUE-ROUTER</h1>
    <router-link to="/home">home</router-link> | 
    <router-link to="/about">about</router-link>
    <hr>
    <router-view />
    <hr>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
