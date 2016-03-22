const state = {
  all: [],
  current: null
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
