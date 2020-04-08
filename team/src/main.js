import Vue from 'vue'
import App from './App.vue'
import router from './route.js'
import './element.js'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
