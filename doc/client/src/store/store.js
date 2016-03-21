import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginStatus: true,
  catalogStatus: false,
  searchStatus: false
}

const mutations = {
  LOGIN (state, opt) {
    state.loginStatus = opt
  },
  CATALOGS (state, opt) {
    state.catalogStatus = opt
  },
  SEARCH (state, opt) {
    state.searchStatus = opt
  }
}

const actions = {
  login: 'LOGIN'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
