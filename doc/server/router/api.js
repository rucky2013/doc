import {Router} from 'express'
const api = Router()


router.use('/login', (req, res, next) => {
  
})
router.use('/catalog', (req, res) => {
  let user = req.body.userid
  
})
router.use('/catalog/:catelogid/doc', (req, res))
router.use('/doc/:docid', user)

export default api