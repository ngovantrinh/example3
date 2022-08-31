import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

// Create a new store instance.
Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      infomationUser: null,
      experience: [],
      confirm: null,
    }
  },
  getters: {
    infomationUser: state => state.infomationUser,
    experience: state => state.experience,
    confirm: state => state.confirm,
  },
  mutations: {
    setInfoUser (state, payload) {
      state.infomationUser = payload
    },
    setExp (state, payload) {
      state.experience = [...payload]
    },
    setConfirm (state, payload) {
      state.confirm = payload
    },
  },
  actions:{
    updateInfoUser({commit},exp){
      commit('setExp',exp);
      
    }
  }
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
