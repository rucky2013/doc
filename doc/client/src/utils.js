export default {
  //  判断登录状态
  checkLogin: (name) => {
    if (document.cookie[name]) {
      console.log(document.cookie[name])
      console.log(document.cookie[name])
      return true
    }
    return false
  }
}
