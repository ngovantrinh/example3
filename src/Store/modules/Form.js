const state = {
      infomationUser: null,
      experience: [],
      confirm: null,
}

const getters= {
    infomationUser: state => state.infomationUser,
    experience: state => state.experience,
    confirm: state => state.confirm,
}
const mutations= {
    setInfoUser (state, payload) {
      state.infomationUser = payload
    },
    setExp (state, payload) {
      state.experience = [...payload]
    },
    setConfirm (state, payload) {
      state.confirm = payload
    },
  }
const  actions={
    updateInfoUser({commit},info){
      commit('setInfoUser',info);
    },
    updateExperience({commit},exp){
      commit('setExp',exp);
    },
    updateConfirm({commit},confirm){
      commit('setConfirm',confirm);
    }
  }

  export default {state, getters, mutations, actions}