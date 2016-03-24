const state = {
  all: [],
  current: 0
}

const mutations = {
  RECEIVE_CATALOG (state, catalog) {
    state.all = catalog
  },
  SET_CURRENT_CATA (state, index) {
    state.current = index
  }
}

export default {
  state,
  mutations
}
