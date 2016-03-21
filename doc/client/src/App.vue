<template>
  <login v-if="loginStatus"></login>
  <util-bar></util-bar>
  <catalog v-show="catalogStatus" transition="expand"></catalog>
  <search v-if="searchStatus"></search>
</template>

<script>
require('normalize.css')
require('../static/style/global.less')
import login from './components/login'
import utilBar from './components/utilBar'
import catalog from './components/catalog'
import search from './components/search'
import cookie from './cookieUtils'
import store from './store/store'
import * as actions from './store/action'
export default {
  store,
  vuex: {
    getters: {
      loginStatus: store => store.loginStatus
    },
    actions: actions
  },
  components: {
    'login': login,
    'util-bar': utilBar,
    'catalog': catalog,
    'search': search
  },
  ready () {
    this.login(!~~cookie.getCookie('loginStatus'))
  }
}
</script>

<style lang="less" scoped>
  .expand-transition{
    left: 118px;
    opacity: 1;
    transition: all .3s ease;
  }
  .expand-enter, .expand-leave{
    opacity: 0;
    left:0px;
  }
</style>
