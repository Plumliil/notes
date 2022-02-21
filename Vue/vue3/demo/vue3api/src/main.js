import { createApp } from 'vue'
import App from './vue3高级语法/App.vue'
import registerDirectives from './directives'
const app = createApp(App);

registerDirectives(app)

app.mount('#app')
