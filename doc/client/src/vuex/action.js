import cookie from './middlewares/cookieUtils'
import catalog from './api/catalog'
import list from './api/list'
import doc from './api/doc'

// status
export const login = ({ dispatch }) => {
  dispatch('LOGIN')
  cookie.setCookie('loginStatus', 1)
}
export const toggleCatalog = ({ dispatch, state }) => {
  dispatch('TOGGLE_CATALOG')
  // state.status.catalogStatus || dispatch('TOGGLE_LIST', false)
}

export const toggleList = makeAction('TOGGLE_LIST')
export const toggleSearch = makeAction('TOGGLE_SEARCH')
export const logout = ({ dispatch }) => {
  dispatch('LOGOUT')
  cookie.delCookie('loginStatus')
}

// catalog
export const getCatalog = ({ dispatch }) => {
  catalog.fetchCatalog(catalog => {
    dispatch('RECEIVE_CATALOG', catalog)
  })
}
export const selectCata = ({ dispatch }, index, catalogId) => {
  dispatch('SET_CURRENT_CATA', index)
  dispatch('SET_CURRENT_ITEM', null)
  dispatch('TOGGLE_CATALOG')
  dispatch('TOGGLE_LIST', true)
  list.fetchList(catalogId, list => {
    dispatch('RECEIVE_LIST', list)
  })
}

// list
export const getList = ({ dispatch }) => {
  list.fetchList(list => {
    dispatch('RECEIVE_LIST', list)
  })
}
export const selectItem = ({ dispatch }, index, itemId) => {
  dispatch('SET_CURRENT_ITEM', index)
  doc.fetchDoc(itemId, doc => {
    dispatch('RECEIVE_DOC', doc)
  })
}

// search

export const selectSearchItem = ({ dispatch }, itemId) => {
  doc.fetchDoc(itemId, doc => {
    dispatch('RECEIVE_DOC', doc)
  })
  dispatch('TOGGLE_CATALOG', false)
  dispatch('TOGGLE_LIST', false)
}
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
