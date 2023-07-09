import Vue from 'vue'
import App from './App.vue'
import test3 from "../index"

Vue.config.productionTip = false
Vue.use(test3)
new Vue({
  render: h => h(App),
}).$mount('#app')
