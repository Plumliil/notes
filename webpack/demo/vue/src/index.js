import {createApp} from 'vue/dist/vue.esm-bundler'
import {sum} from './js/math.js';
import './js/element'
const {priceFormat}=require('./js/format')

import App from './vue/App.vue'
console.log(sum(20,30));
console.log(priceFormat());

// vue代码
// const app=createApp({
//     template:`<h2>vue渲染</h2>`,
//     data(){
//         return {
//             title:"hello plumli"
//         }
//     }
// })

const app=createApp(App)

app.mount("#app")