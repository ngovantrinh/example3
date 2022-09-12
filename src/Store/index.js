import Vue from 'vue'
import Vuex from 'vuex'
import stepOne from './modules/stepOne'
import stepTwo from './modules/stepTwo'
import stepThree from './modules/stepThree'

// Create a new store instance.
Vue.use(Vuex)
export const store = new Vuex.Store({
  getters:{
    // something here
  },
  mutations:{
    // something here
  },
  actions:{
    // something here
  },
  modules:{
    stepOne,
    stepTwo,
    stepThree,
  }
})

