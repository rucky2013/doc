import {Router} from 'express'
import checkLogin from '../middleware/checkLogin'
const dashboard = Router()

dashboard.get('/*', checkLogin , (req, res) => {
  res.render('dashboard')
})

export default dashboard