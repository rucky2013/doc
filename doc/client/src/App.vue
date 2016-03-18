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

export default {
  data () {
    return {
      catalogStatus: false,
      loginStatus: true
    }
  },
  methods: {
    getCookie (name) {
      let arr = []
      let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      if (document.cookie.match(reg)) {
        arr = document.cookie.match(reg)
        return unescape(arr[2])
      }
      return null
    }
  },
  components: {
    'login': login,
    'util-bar': utilBar,
    'catalog': catalog
  },
  ready () {
    console.log(this.getCookie('loginStatus'))
    this.loginStatus = ~~this.getCookie('loginStatus')
  }
}
</script>
