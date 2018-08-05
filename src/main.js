import '@babel/polyfill'
import './plugins/vuetify'
import Vue from 'vue'
import router from './router'


// Vue.config.productionTip = false
import App from './App.vue'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

