const state = {
    experience: [],
}

const getters= {
  experience: state => state.experience,
}
const mutations= {
  setExp (state, payload) {
    state.experience = [...payload]
  }
}
const  actions={
  updateExperience({commit},exp){
    commit('setExp',exp);
  },
}

export default {state, getters, mutations, actions}