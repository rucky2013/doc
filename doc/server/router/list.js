import {Router} from 'express'
import checkLogin from '../middleware/checkLogin'
const list = Router()

list.get('/*', checkLogin , (req, res) => {
  res.redirect('/vue/index.html')
})




export default list