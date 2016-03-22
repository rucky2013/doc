import {Router} from 'express'
import Catalog from '../model/catalog'
import Doc from '../model/doc'
import User from '../model/user'
import checkLogin from '../middleware/checkLogin'
const api = Router()


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
        result.errorDescription = '登录成功'
        result.errorCode = 0

        res.send(result)  
      })
    } else {
      result.errorDescription = '密码错误'
      result.errorCode = 1

      res.send(result)
    }
  })
})
api.get('/catalog', (req, res) => {
  console.log(req.session.roleId,'xxxxxx')
  res.send(Catalog.getCatas(1))
})
api.get('/catalog/:catalogId/doc', checkLogin, (req, res) => {
  res.send(Doc.getDocs(req.session.roleId, req.params.catalogId))
})
api.get('/doc/:docId', checkLogin, (req, res) => {
  Doc.getDoc(req.session.roleId, req.params.docId).then(res => {
    console.log(res,'xxxxxx')
  })
  res.send(Doc.getDoc(req.session.roleId, req.params.docId))
})
api.post('/search', checkLogin, (req,res) => {
  console.log(req.session.roleId, 'roleId')
  res.send(Doc.getSearchDocs(req.session.roleId, req.body.docName))
})


export default api