export const login = makeAction('LOGIN')
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
