import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
