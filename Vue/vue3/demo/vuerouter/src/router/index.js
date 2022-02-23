import { createRouter, createWebHistory } from 'vue-router';
// createWebHistory,
// import Home from '../views/Home.vue';
// import About from '../views/About.vue';

// 配置映射关系routes
const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home', 
        component: () => {
            return import(/* webpackChunkName:"home-chunk" */'../views/Home.vue')
        },
        children:[
            {
                path:'',
                redirect:'/home/message'
            },
            {
                path:'message',
                component:()=>import('../views/HomeMsg.vue')
            },
            {
                path:'shop',
                component:()=>import('../views/HomeShop.vue')
            },
        ]
    },
    {
        path: '/about', component: () => {
            return import('../views/About.vue')
        }
    },
    {
        path: '/user/:username', component: () => {
            return import('../views/User.vue')
        }
    },
    {
        path: '/:patchMatch(.*)', component: () => {
            return import('../views/NotFound.vue')
        }
    },
];

// 创建路由对象router

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router

