<template>
  <div class="g-sideBar">
    <div class="m-logo">
      
    </div>
    <div class="m-body">
      <a class="u-item iconfont" href="javascript:;" @click="toggleCatalog">
        &#x344e;
      </a>
      <a class="u-item iconfont" href="javascript:;" @click="toggleSearch">
        &#xe681;
      </a>
    </div>
    <a class="m-logout iconfont" href="javascript:;" @click="logout">
      &#xe629;
    </a>
  </div>
</template>

<script>
import cookie from '../cookieUtils'

export default {
  methods: {
    logout () {
      cookie.delCookie('loginStatus')
      this.$parent.loginStatus = false
    },
    toggleCatalog () {
      this.$parent.catalogStatus = !this.$parent.catalogStatus
      if (this.$parent.catalogStatus) {
        console.log('x')
      }
    },
    toggleSearch () {
      this.$parent.searchStatus = !this.$parent.searchStatus
    }
  },
  props: ['catalogStatus']
}
</script>

<style lang="less" scoped>
.g-sideBar{
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  height: 100%;
  background: #f8f8f8;
  box-shadow: 2px 0 2px #ececec;
  padding: 10px 18px;
  z-index: 2;
  .m-logo{
    height: 80px;
    padding-bottom: 10px;
    border-bottom: 3px solid #FFF;
  }
  .m-body{
    height: 450px;
    padding: 20px 15px;
    .u-item{
      display: block;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 2rem;
      cursor: pointer;
      color: #000;
      text-decoration: none;
      margin-bottom: 10px;
    }
  }
  .m-logout{
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 2rem;
    border-top: 3px solid #fff;
    padding-top: 10px;
  }
}
</style>