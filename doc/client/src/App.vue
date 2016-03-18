<template>
  <login v-if="!loginStatus"></login>
  <util-bar></util-bar>
  <catalog :catalogStatus="catalogStatus"></catalog>
</template>

<script>
require('normalize.css')
require('../static/style/global.less')
import login from './components/login'
import utilBar from './components/utilBar'
import catalog from './components/catalog'
import cookie from './cookieUtils'

export default {
  data () {
    return {
      catalogStatus: false,
      loginStatus: true
    }
  },
  components: {
    'login': login,
    'util-bar': utilBar,
    'catalog': catalog
  },
  ready () {
    console.log(cookie.getCookie('loginStatus'))
    this.loginStatus = ~~cookie.getCookie('loginStatus')
  }
}
</script>
