import {Router} from 'express'
import Catalog from '../model/Catalog'
import Doc from '../model/Doc'
import User from '../model/user'
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
      })

      result.errorDescription = '登录成功'
      result.errorCode = 0

      res.send(result)  
    } else {

      result.errorDescription = '密码错误'
      result.errorCode = 1

      res.send(result)
    }
  })
})

api.get('/catalog', (req, res) => {
  let userId = req.body.userid
  let catalogs = Catalog.getCatas(userId)
  res.send(catalogs)
})
api.get('/catalog/:catalogid/doc', (req, res) => {
  let userId = req.body.userid
  let catalogId = req.params.catalogid
  let docs = Doc.getDocs(userId, catalogId)
  res.send(docs)
})
api.get('/doc/:docid', (req, res) => {
  res.send(Doc.getDoc(req.params.docid))
})
api.get('/test', (req,res) => {
  console.log('success')
  res.send({abc:'123'})
})

export default api