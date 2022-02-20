import { createApp } from 'vue'
import App from './mixin_extends/App.vue'

const app=createApp(App);
console.log(app);
app.mixin({
    created(){
        console.log('hello plumli');
    }
})
app.mount('#app')
