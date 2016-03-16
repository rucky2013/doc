import {Router} from 'express'
import * as T from '../lib/tool'
import user from '../model/user'
const index = Router()

index.get('/', T.csrfProtection, (req, res, next) => {
  let session_user = req.session.user || {}
  console.log(session_user)
  res.render('index', {
    userInfo: session_user.userInfo,
    csrfToken: req.csrfToken()
  })
})

index.post('/login', T.parseForm, T.csrfProtection, (req, res, next) => {
  user.login(req.body, (err, result) => {
    if (err) {
      let error = new Error(err.toString())
      next(error)
    }
    if (!result.userInfo) {
      req.session.msg.error = '用户名或者密码错误，登录失败!!!!'
      return res.redirect('/')
    }
    req.session.user = result
    req.session.msg.success = '登录成功!!!！'
    res.redirect('/')
  })
})
index.get('/logout', (req, res) => {
  delete req.session.user
  res.redirect('/')
})
export default index