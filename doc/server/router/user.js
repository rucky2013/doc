import {Router} from 'express'
import checkLogin from '../middleware/checkLogin'
import user from '../model/user'
const user_r = Router()

user_r.post('/', checkLogin, (req, res) => {
  let data = {
    "loginName": req.body.name,
    "mobilePhone": req.body.phone,
    "password": req.body.password,
    "userName": req.body.name
  }
  Object.assign(data, {
    "creator": "admin",
    "dlrCode": "",
    "email": "1011073335@qq.com",
    "isEnable": 1,
    "modifier": "admin",
    "remark": "",
    "roleId": 105,
    "roleName": "",
    "salt": "7efbd59d9741d34f",
    "status": 1,
    "userType": "3"
  })
  user.add(data, (err,result) => {
    res.render('dashboard', { info: result.results })
  })
})




export default user_r