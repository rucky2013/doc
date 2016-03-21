export const login = makeAction('LOGIN')
export const catalogs = makeAction('CATALOGS')
export const search = makeAction('SEARCH')
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
