import {Router} from 'express'
import Catalog from '../model/catalog'
import Doc from '../model/doc'
import checkLogin from '../middleware/checkLogin'
const api = Router()

api.post('/login', (req, res, next) => {
  
})
api.get('/catalog', checkLogin, (req, res) => {
  res.send(Catalog.getCatas(req.session.roleId))
})
api.get('/catalog/:catalogId/doc', checkLogin, (req, res) => {
  res.send(Doc.getDocs(req.session.roleId, req.params.catalogId))
})
api.get('/doc/:docId', checkLogin, (req, res) => {
  res.send(Doc.getDoc(req.session.roleId, req.params.docId))
})


export default api