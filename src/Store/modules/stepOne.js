const state = {
      infomationUser: null,
}

const getters= {
    infomationUser: state => state.infomationUser,
}
const mutations= {
    setInfoUser (state, payload) {
      state.infomationUser = payload
    },
  }
const  actions={
    updateInfoUser({commit},info){
      commit('setInfoUser',info);
    },
  }

  export default {state, getters, mutations, actions}