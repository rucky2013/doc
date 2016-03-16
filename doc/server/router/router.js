import {Router} from 'express'
import index from './index'
import list from './list'
import user from './user'
import dashboard from './dashboard'

const router = Router()

// 全局即时消息处理
router.use((req, res, next) => {
  res.locals.success = req.session.msg ? req.session.msg.success : null
  res.locals.error = req.session.msg ? req.session.msg.error : null
  req.session.msg = {}
  next()
})
router.use('/', index)
router.use('/list', list)
router.use('/user', user)
router.use('/dashboard', dashboard)
router.get('/api/*', (req, res) => {
  console.log('success')
  res.send('asd')
})
export default router