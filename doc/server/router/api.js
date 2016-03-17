import {Router} from 'express'
import Catalog from '../model/catalog'
import Doc from '../model/doc'
import checkLogin from '../middleware/checkLogin'
const api = Router()

api.post('/login', (req, res, next) => {
  
})
api.get('/catalog', (req, res) => {
  res.send(Catalog.getCatas(req.query.userId))
})
api.get('/catalog/:catalogId/doc', (req, res) => {
  res.send(Doc.getDocs(req.query.userId, req.params.catalogId))
})
api.get('/doc/:docId', (req, res) => {
  res.send(Doc.getDoc(req.query.userId, req.params.docId))
})


export default api