import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import {store} from './Store'
// Create a new store instance.
// Vue.use(Vuex)


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
