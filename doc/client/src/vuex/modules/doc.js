const state = {
  doc: {
    CONTEXT_NAME: '',
    INTRODUCE: '',
    TAG: '',
    CONTEXT: ''
  }
}
const mutations = {
  RECEIVE_DOC (state, doc) {
    state.doc = doc
  }
}

export default {
  state,
  mutations
}
