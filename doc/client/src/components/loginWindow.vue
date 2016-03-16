<template>
  <div class="g-lock"></div>
  <div v-if="flag" class="m-box">
    <p class="u-login-tit">骚年，你都没登录诶。</p>
    <p class="u-fuck">(#‵′)凸</p>
    <div class="m-btns">
      <button class="u-btn" @click="goLogin">登录！GO</button>
      <button class="u-btn" @click="cancel">不了！3Q</button>
    </div>
  </div>
  <div v-else class="m-box">
    <p class="u-login-tit">请认真填写以下信息，O(∩_∩)O</p>
    <div class="m-item f-mr-t">
      <i></i>
      <input class="u-item" type="text" placeholder="请输入账号">
    </div>
    <div class="m-item">
      <i></i>
      <input class="u-item" type="password" placeholder="请输入密码">
    </div>
    <div class="m-btns2">
      <button class="u-btn" @click="login">登录</button>
      <button class="u-btn" @click="regis">注册</button>
    </div>
    <a class="m-leave" href="javascript:;" @click="cancel"> >>> Leave Here</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        flag: true
      }
    },
    methods: {
      goLogin () {
        this.flag = false
      },
      cancel () {
        let opt = {
          status: false
        }
        this.$dispatch('sWindow', opt)
      },
      login () {
        let opt = {
          status: false
        }
        this.$dispatch('sWindow', opt)
      },
      regis () {
        let opt = {
          status: false
        }
        this.$dispatch('sWindow', opt)
        opt.status = true
        this.$dispatch('rWindow', opt)
      }
    }
  }
</script>

<style lang="less">
  .g-lock{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: .5;
  }
  .m-box{
    width: 300px;
    height: 300px;
    position: fixed;
    top: 20%;
    left: 38%;
    background: #FFF;
    border-radius: 20px;
    .u-login-tit{
      text-align: center;
      margin-top: 10%;
      font-size: 1.2rem;
      font-style: italic;
    }
    .u-fuck{
      text-align: center;
      margin-top: 20px;
      font-size: 1rem;
    }
    .m-item{
      padding: 5px 20px;
      .u-item{
        display: block;
        width: 200px;
        height: 30px;
        text-indent: 10px;
        margin-left: 20px;
        border-radius: 5px;
      }
    }
  }
  .m-btns{
    margin-top: 50px;
    text-align: center;
  }
  .u-btn{
    width: 120px;
    height: 50px;
    display: inline-block;
    background: #FF5F54;
    border: none;
    color: #FFF;
    font-size: .8rem;
    border-radius: 5px;
    box-shadow: 0 2px 2px #FF2C26;
    margin-right: 10px;
  }
  .u-btn:hover{
    background: #FF1E0F;
  }
  .m-btns2{
    margin-top: 20px;
    text-align: center;
    .u-btn2{
      .u-btn;
    }
    .u-btn2:hover{
      background: #FF1E0F;   
    }
  }
  .m-leave{
    margin-top: 10px;
    margin-right: 30px;
    float: right;
    font-style: italic;
    color: #323CFF;
  }
  .m-leave:hover{
    font-weight: bold;
    color: #FF0A14;
  }
  .f-mr-t{
    margin-top: 20px;
  }
</style>