const state = {
  all: [],
  current: null
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
