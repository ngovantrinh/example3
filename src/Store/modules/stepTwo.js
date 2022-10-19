const state = {
    confirm: null,
}

const getters= {
  confirm: state => state.confirm,
}
const mutations= {
  setConfirm (state, payload) {
    state.confirm = payload
  },
}
const  actions={
  updateConfirm({commit},confirm){
    commit('setConfirm',confirm);
  }
}

export default {state, getters, mutations, actions}