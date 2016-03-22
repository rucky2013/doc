import {Router} from 'express'
import Catalog from '../model/catalog'
import Doc from '../model/doc'
import User from '../model/user'
import checkLogin from '../middleware/checkLogin'
const api = Router()

// 给 api 的处理增加三个方法
function extendAPIOutput (req, res, next) {
  //响应成功
  res.apiSuccess = data => {
    res.json({
      status: 'OK',
      result: data
    })
  }

  //响应错误 err 是一个对象
  //包含了 error_code 和 error_msg
  res.apiError = err => {
    res.json({
      status: 'Error',
      error_code: err.error_code || '程序没有定义该错误编码',
      error_msg:  err.error_msg || `程序没有定义错误消息，此处直接输出错误本身: ${err.toString()}`
    })
  }

  //定义一个错误消息包装方法
  req.createApiError = (code, msg) => {
    let err = new Error(msg)
    err.error_code = code
    err.error_msg = msg
    return err
  }

  //交由下面 api 中间件处理
  next()
}

api.use(extendAPIOutput)
// 用上面增加的方法来统一处理错误
api.use((err, req, res, next) => res.apiError(err))

//登录验证
api.post('/login', (req, res, next) => {
  let {username, pwd} = req.body
  User.getUserByName(username).then(Hres => {
    var result = Hres[0];
    if (result.PASSWORD === pwd) {

      req.session.userId = result.ID

      User.getUserRoleId(result.ID).then( roleArray => {
        var role_id = roleArray[0].role_id
        req.session.roleId = role_id
        res.apiSuccess({loginStatu:1})
      })
    } else {
      let err = req.createApiError(748, '密码错误，别乱来')
      res.apiError(err)
    }
  }, err => {
    res.apiError(err)
  })
})
api.get('/catalog', (req, res) => {
  res.apiSuccess(Catalog.getCatas(req.session.roleId))
})
api.get('/catalog/:catalogId/doc', checkLogin, (req, res) => {
  res.apiSuccess(Doc.getDocs(req.session.roleId, req.params.catalogId))
})
api.get('/doc/:docId', checkLogin, (req, res) => {
  res.apiSuccess(Doc.getDoc(req.session.roleId, req.params.docId))
})
api.post('/search', checkLogin, (req,res) => {
  res.apiSuccess(Doc.getSearchDocs(req.session.roleId, req.body.docName))
})


export default api