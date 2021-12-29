import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Movie from '@/components/Movie'
import Tab1 from '@/components/tabs/Tab1'
import Tab2 from '@/components/tabs/Tab2'
Vue.use(VueRouter)


// routes 是一个数组，作用 定义hash地址与组件之间的关系
const routes = [
    // 路由规则
    // 当用户访问 / 的时候，通过redirect属性跳转到 /home 对应的路由规则
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
    // 在movie组件中希望根据id的值展示对应电影的信息
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props:true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children:[
      {path:'tab1',name:'Tab1',component: Tab1},
      {path:'tab2',name:'Tab2',component: Tab2}
    ]
  }
]

const router = new VueRouter({
  // routes 是一个数组，作用 定义hash地址与组件之间的关系
  routes
})

router.beforeEach((to,from,next)=>{
  // to表示将要访问的路由信息
  // from表示将要离开的路由的信息对象
  // next函数表示放行
  // 分析
  // 要拿到用户访问的hash地址
  // 判断hash地址是否等于 /main
  // 如果等于/main 证明需要登陆之后，才能访问成功
  // 如果不等于/main，则不需要登录，直接放行 next()
  // 如果访问的地址是 /main 则需要读取localstorage中的token值
  // 如果有token就放行
  // 如果没有token则强制跳转到登录页
  if(to.path==='/main'){
    const token=localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
