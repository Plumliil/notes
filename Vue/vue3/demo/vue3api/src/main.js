import { createApp } from 'vue'
import App from './compositionapi/App.vue'

const app=createApp(App);
// app.mixin({
//     created(){
//         console.log('hello plumli');
//     }
// })
app.mount('#app')
