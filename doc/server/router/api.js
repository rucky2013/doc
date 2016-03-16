import {Router} from 'express'
const api = Router()


api.use('/login', (req, res, next) => {
  
})
api.use('/catalog', (req, res) => {
  let user = req.body.userid
  
})
api.use('/catalog/:catelogid/doc', (req, res) => {
  
})
api.use('/doc/:docid', (req, res) => {
  
})

export default api