const state = {
  loginStatus: 0,
  catalogStatus: 0,
  listStatus: 0,
  searchStatus: 0
}

const mutations = {
  LOGIN (state) {
    state.loginStatus = 1
  },
  LOGOUT (state) {
    state.loginStatus = 0
  },
  TOGGLE_CATALOG (state) {
    console.log(state.catalogStatus)
    state.catalogStatus = !state.catalogStatus
  },
  TOGGLE_LIST (state, opt = !state.listStatus) {
    state.listStatus = opt
  },
  TOGGLE_SEARCH (state) {
    state.searchStatus = !state.catalogStatus
  }
}

export default {
  state,
  mutations
}
