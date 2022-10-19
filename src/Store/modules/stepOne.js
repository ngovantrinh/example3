const state = {
  infomationUser: null,
};

const getters = {
  infomationUser: (state) => state.infomationUser,
};
const mutations = {
  setInfoUser(state, payload) {
    state.infomationUser = payload;
  },
  CHANGE_STEP_ONE(state, { key, value }) {
    // eslint-disable-next-line
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};
const actions = {
  updateInfoUser({ commit }, info) {
    commit("setInfoUser", info);
  },
};

export default { state, getters, mutations, actions };
