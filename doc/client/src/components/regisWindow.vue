<template>
  <div class="g-lock"></div>
  <div v-else class="m-box">
    <p class="u-login-tit">请认真填写以下信息，O(∩_∩)O</p>
    <div class="m-item f-mr-t">
      <i></i>
      <input class="u-item" v-model="username" type="text" placeholder="请输入账号">
    </div>
    <div class="m-item">
      <i></i>
      <input class="u-item" v-model="pwd" type="password" placeholder="请输入密码">
    </div>
    <div class="m-item">
      <i></i>
      <input class="u-item" v-model="pwdr" type="password" placeholder="请再次输入密码">
    </div>
    <div class="m-btns2">
      <button class="u-commit" @click="commit">提交</button>
    </div>
    <a class="m-leave" href="javascript:;" @click="cancel"> >>> Leave Here</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        pwd: '',
        pwdr: ''
      }
    },
    methods: {
      cancel () {
        let opt = {
          status: false
        }
        this.$dispatch('rWindow', opt)
      },
      commit () {
        let user = {
          username: this.username,
          pwd: this.pwd,
          pwdr: this.pwdr
        }
        this
        .$http.post('api/regis', user)
        .then((res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less">
  .u-commit{
    width: 200px;
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
  .u-commit:hover{
    background: #FF1E0F;
  }
</style>