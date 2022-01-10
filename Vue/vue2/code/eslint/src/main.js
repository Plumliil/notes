import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3006/api/'
Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
