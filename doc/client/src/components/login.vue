<template>
  <div class="g-lock">
    <div class="m-top"></div>
    <div class="m-box">
      <div class="u-logo">
        
      </div>
      <div class="m-form">
        <p>用户名：</p>
        <input :class="{'error-tip': isN}" v-model="username" @change="confirmName" type="text" placeholder="请输入用户名">
        <p class="f-mr-t">密码：</p>
        <input :class="{'error-tip': isP}" type="password" v-model="pwd" @change="confirmPwd" placeholder="请输入密码">
        <button @click="subF" class="u-btn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
import cookie from '../cookieUtils'

export default {
  data () {
    return {
      username: '',
      pwd: '',
      isN: false,
      isP: false
    }
  },
  methods: {
    confirmName () {
      if (!this.username) {
        this.isN = true
        return
      }
      this.isN = false
    },
    confirmPwd () {
      if (!this.pwd) {
        this.isP = true
        return
      }
      this.isP = false
    },
    subF () {
      if (!this.username || !this.pwd) {
        return
      }
      let data = {
        username: this.username,
        pwd: crypto.createHash('md5').update(this.pwd).digest('hex')
      }
      this
      .$http.post('api/login', data)
      .then((res) => {
        console.log(res)
        switch (res.data.errorCode) {
          case 0:
            cookie.setCookie('loginStatus', 1)
            this.$parent.loginStatus = true
            break
          case 1:
            this.isP = true
            break
          default:
            console.log('shabi')
            break
        }
      },
      (err) => {
        console.log(err, 'error')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .g-lock{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ececec;
    z-index: 3;
    .m-top{
      height: 5px;
      width: 100%;
      background: #F40011;
    }
    .m-box{
      width: 100%;
      .u-logo{
        height: 150px;
        margin: 30px 0;
      }
      .m-form{
        max-width: 360px;
        margin: 0 auto;
        background: #fff;
        padding: 50px 30px;
        border-radius: 5px;
        box-shadow: 2px 2px 2px #9C929A;
        p{
          font-size: .8rem;
          color: #7F777F;
          text-indent: 30px;
        }
        .f-mr-t{
          margin-top: 30px;
        }
        input{
          outline: none;
          display: block;
          height: 30px;
          width: 80%;
          text-indent: 20px;
          margin:0 auto;
          font-size: .8rem;
          border-radius: 2px;
        }
        input:focus{
          border: 2px solid #ececec;
        }
        .u-btn{
          display: block;
          height: 50px;
          width: 80%;
          margin: 40px auto 0 auto;
          background: #FF4953;
          border: none;
          border-radius: 2px;
          color: #fff;
          letter-spacing: 10px;
          box-shadow: 0 5px 2px #FF001A;
        }
      }
    }
  }
  .error-tip{
    border: 2px solid #FF0214;
  }
</style>