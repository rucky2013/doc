<template>
  <div class="g-body">
    <div id="top" class="g-nav">
      <div class="m-logo">
        ~\(≧▽≦)/~I'm LOGO
      </div>
      <ul class="m-topNav">
        <li><a v-link="{path:'/'}">主页</a></li>
        <li v-if="status">
          <a href="javascript:;" @click="login">登录</a>
        </li>
        <li v-if="status">
          <a href="javascript:;" @click="regis">注册</a>
        </li>
        <li v-else>登出</li>
      </ul>
    </div>
    <div class="g-wrap">
      <h1 class="m-tit">NodeV</h1>
      <router-view></router-view>
    </div>
    <l-window v-if="lStatus"></l-window>
    <r-window v-if="rStatus"></r-window>  
  </div>
</template>

<script>
  import regis from './components/regisWindow'
  import login from './components/loginWindow'

  export default {
    data () {
      return {
        status: true,
        lStatus: false,
        rStatus: false
      }
    },
    methods: {
      login () {
        this.lStatus = true
      },
      regis () {
        this.rStatus = true
      }
    },
    events: {
      'sWindow' (opt) {
        this.lStatus = opt.status
      },
      'rWindow' (opt) {
        this.rStatus = opt.status
      }
    },
    components: {
      'r-window': regis,
      'l-window': login
    }
  }
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  font-size: 62.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-body{
  height: 100%;
  width: 100%;
}
.g-nav{
  width: 100%;
  height: 50px;
  position: fixed;
  border-bottom: 1px solid #D5D1D8;
  box-shadow: 2px 0 2px #99969B;
  background-image: url('../static/backlalala.png');
  .m-logo{
    width: 200px;
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: center;
    font-weight: bold;
    font-size: .8rem;
    font-family: Microsoft YaHei;
  }
  .m-topNav{
    float: right;
    height: 50px;
    line-height: 50px;
    li{
      float: left;
      margin-right: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-size: .8rem;
    }
  }
}
.g-wrap {
  width: 100%;
  height: 100%;
  text-align: center;
  .m-tit{
    text-align: left;
    text-indent: 5px;
    display: inline-block;
    width: 500px;
    font-size:2.8rem;
    font-family: Helvetica, sans-serif;
    margin-top: 10%;
    margin-bottom: 20px;
  }
 } 
</style>
