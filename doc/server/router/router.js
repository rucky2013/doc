import {Router} from 'express'
import api from './api'
const router = Router()

// 全局即时消息处理
router.use((req, res, next) => {
  res.locals.success = req.session.msg ? req.session.msg.success : null
  res.locals.error = req.session.msg ? req.session.msg.error : null
  req.session.msg = {}
  next()
})
// router.use('/', (req, res) => {
//   res.send('hello')
// })
router.use('/api/v1', api)

export default router