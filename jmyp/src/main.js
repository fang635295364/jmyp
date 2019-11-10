import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

Vue.use(mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
