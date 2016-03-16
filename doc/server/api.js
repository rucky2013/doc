const config = require('config')
let API = {
  token: {
    url: '/api/token',
    method: 'post',
    mainCmd: 'IOA00001'
  },
  user_add: {
    url: '/public/platform/api/addUser',
    method: 'post'
  }
}
Object.keys(API).forEach(key => {
  API[key].url = config.get('server') + API[key].url
})
export default API