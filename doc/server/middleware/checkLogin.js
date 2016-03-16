const checkLogin = (req, res, next)=>{
  if (!req.session.user.accessToken) {
    req.session.msg.error = '未登录'
    return res.redirect('/')
  }
  next()
}
export default checkLogin