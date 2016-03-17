import {Router} from 'express'
import Catalog from '../model/Catalog'
import Doc from '../model/Doc'
const api = Router()


api.post('/login', (req, res, next) => {
  
})
api.get('/catalog', (req, res) => {
  let userId = req.body.userid
  let catalogs = Catalog.getCatas(userId)
  res.send(catalogs)
})
api.get('/catalog/:catalogid/doc', (req, res) => {
  let userId = req.body.userid
  let catalogId = req.param.catalogid
  let docs = Doc.getDocs(userId, catalogId)
  res.send(docs)
})
api.get('/doc/:docid', (req, res) => {
  let docId = req.param.docid
  let doc = Doc.getDoc(docId)
  res.send(doc)
})

export default api