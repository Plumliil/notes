import { createApp } from 'vue'
import App from './vue3高级语法/App.vue'

const app = createApp(App);

app.directive('focus', {
    mounted(el) {
        el.focus()
        console.log(el);
    }
})

app.mount('#app')
