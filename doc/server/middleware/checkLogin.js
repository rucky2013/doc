const checkLogin = (req, res, next)=>{
  if (!req.session.userId) {
    return res.send({err:1})
  }
  next()
}
export default checkLogin