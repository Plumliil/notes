import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../../components/mobile/HelloMobile'
import HelloMobile from "../../components/mobile/HelloMobile";
Vue.use(Router)

let router= new Router({
  base: '/m_index.html',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloMobile',
      component: HelloMobile
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router
