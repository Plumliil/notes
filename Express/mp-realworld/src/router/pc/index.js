import Vue from 'vue'
import Router from 'vue-router'
// 登录
import Login from "../../components/pc/Login";
// 管理
import Admin from "../../components/pc/Admin";
// 展示
import Home from "../../components/pc/Home";
import Index from "../../components/pc/Index";
import Front from "../../components/pc/Front";
import Rear from "../../components/pc/Rear";
import Tags from "../../components/pc/Tags";
import Comment from "../../components/pc/Comment";
import About from "../../components/pc/About";
import SideAssembly from "../../components/pc/SideAssembly";

Vue.use(Router)

let router=new Router({
  base: '/p_index.html/',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Index,
      children:[
        {path:'/home',name:'Home',component:Home},
        {path:'/sideAssembly',name:'SideAssembly',component:SideAssembly},
        {path:'/front',name:'Front',component:Front},
        {path:'/rear',name:'Rear',component:Rear},
        {path:'/tags',name:'Tags',component:Tags},
        {path:'/tags',name:'Tags',component:Tags},
        {path:'/comment',name:'Comment',component:Comment},
        {path:'/about',name:'About',component:About}
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/m_index.html#/'
    return
  }
  next()
})

export default router
