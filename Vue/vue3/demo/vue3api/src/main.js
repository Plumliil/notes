import { createApp } from 'vue'
import App from './vue3高级语法/App.vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plygin_object'
import pluginFunction from './plugins/plygin_function'


const app = createApp(App);

registerDirectives(app)

app.use(pluginObject)
app.use(pluginFunction)

app.mount('#app')
