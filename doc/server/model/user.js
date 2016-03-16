import * as T from '../lib/tool'
import api from '../api'

let user = {}
user.login = (data, cb) => {
  let rq = api.token
  data.mainCmd = rq.mainCmd
  T.sa[rq.method](rq.url)
    .query(data)
    .on('error', err=> {
      console.log('fuck', err)
    })
    .end((err, res = {}) => {
      if (err) {
        return cb(err)
      }
      let resText
      try {
        resText = JSON.parse(res.text)
      } catch (e) {
        return cb(e)
      }
      cb(null, {
        userInfo: resText.authcBody.userInfo,
        accessToken: resText.authcHead.accessToken,
        refreshToken: resText.authcHead.refreshToken
      })
    })
}

user.add = (data, cb) => {
  let rq = api.user_add
  T.sa[rq.method](rq.url)
    .set('Content-Type', 'application/json')
    .send(data)
    .end((err, res = {}) => {
      if (err) {
        return cb(err)
      }
      let resText
     
      try {
        resText = JSON.parse(res.text)
        console.log(resText)
      } catch (e) {
        return cb(e)
      }
      cb(null, resText)
    })
}
export default user
