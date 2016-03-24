const state = {
  all: [],
  current: 0
}

const mutations = {
  RECEIVE_LIST (state, list) {
    state.all = list
  },
  SET_CURRENT_ITEM (state, index) {
    state.current = index
  }
}

export default {
  state,
  mutations
}
