import { createRouter, createWebHistory } from 'vue-router';
// createWebHistory,
// import Home from '../views/Home.vue';
// import About from '../views/About.vue';

// 配置映射关系routes
const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home', component: () => {
            return import(/* webpackChunkName:"home-chunk" */'../views/Home.vue')
        },
        children: [
            {
                path: '',
                redirect: '/home/message'
            },
            {
                path: 'message',
                component: () => import('../views/HomeMsg.vue')
            },
            {
                path: 'shop',
                component: () => import('../views/HomeShop.vue')
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
        path: '/login', component: () => {
            return import('../views/Login.vue')
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

// 动态添加路由
const categoryRoute = {
    path: '/category',
    component: () => import('../views/Category.vue')
}
// 最外层顶级路由对象
router.addRoute(categoryRoute);
// 给home children添加路由对象
router.addRoute('home', {
    path: '/info',
    component: () => import('../views/HomeInfo.vue')
})

// 导航守卫
let counter = 0;
// to:Route对象,即将跳转到的Route对象
// from:Route对象,从哪个Route对象跳转过来
/**
* 返回值问题:
*   1.false 不进行导航
*   2.undefined或者不返回值:进行默认导航
*   3.字符串:路径,跳转到对应的路径中
**/
router.beforeEach((to, from) => {
    console.log(to, from);
    console.log(`进行了${++counter}次路由跳转`);
    if (to.path!=='/login') {
        const token=window.localStorage.getItem('token');
        if(!token){
            return '/login'            
        }
    }
})

export default router

