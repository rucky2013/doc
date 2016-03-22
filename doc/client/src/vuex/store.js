import Vue from 'vue'
import Vuex from 'vuex'
import catalog from './modules/catalog'
import doc from './modules/doc'
import list from './modules/list'
import status from './modules/status'
// import doc from './modules/doc'
import createLogger from './middlewares/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    catalog,
    list,
    doc,
    status
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
