import {createRouter,createWebHashHistory} from 'vue-router';
// createWebHistory,
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 配置映射关系routes
const routes=[
    {path:'/home',component:Home},
    {path:'/about',component:About}
];

// 创建路由对象router

const router=createRouter({
    routes,
    history:createWebHashHistory()
})

export default router

