import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import axios from 'axios'

import "./assets/css/common.scss"

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 60000 // 请求超时
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
