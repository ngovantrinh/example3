import Vue from 'vue'
import Vuex from 'vuex'
import Form from './modules/Form'

// Create a new store instance.
Vue.use(Vuex)
export const store = new Vuex.Store({
  
  modules:{
    Form
  }
  // state () {
  //   return {
  //     infomationUser: null,
  //     experience: [],
  //     confirm: null,
  //   }
  // },
  // getters: {
  //   infomationUser: state => state.infomationUser,
  //   experience: state => state.experience,
  //   confirm: state => state.confirm,
  // },
  // mutations: {
  //   setInfoUser (state, payload) {
  //     state.infomationUser = payload
  //   },
  //   setExp (state, payload) {
  //     state.experience = [...payload]
  //   },
  //   setConfirm (state, payload) {
  //     state.confirm = payload
  //   },
  // },
  // actions:{
  //   updateInfoUser({commit},info){
  //     commit('setInfoUser',info);
  //   },
  //   updateExperience({commit},exp){
  //     commit('setExp',exp);
  //   },
  //   updateConfirm({commit},confirm){
  //     commit('setConfirm',confirm);
  //   }
  // }
})


// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)