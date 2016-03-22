<template>
  <div class="container">
    <login v-if="!loginStatus"></login>
    <util-bar></util-bar>
    <catalog v-show="catalogStatus" transition="expand"></catalog>
    <list v-show="listStatus"></list>
    <doc></doc>
    <search v-if="searchStatus"></search>
  </div>
</template>

<script>
import login from './components/login'
import utilBar from './components/utilBar'
import catalog from './components/catalog'
import list from './components/list'
import doc from './components/doc'
import search from './components/search'
import cookie from './vuex/middlewares/cookieUtils'
import {login as doLogin} from './vuex/action'
export default {
  vuex: {
    getters: {
      loginStatus: ({status}) => status.loginStatus,
      catalogStatus: ({status}) => status.catalogStatus,
      searchStatus: ({status}) => status.searchStatus,
      listStatus: ({status}) => status.listStatus,
      docStatus: ({status}) => status.docStatus
    },
    actions: {
      doLogin
    }
  },
  components: {
    'login': login,
    'util-bar': utilBar,
    'catalog': catalog,
    'list': list,
    'doc': doc,
    'search': search
  },
  created () {
    ~~cookie.getCookie('loginStatus') && this.doLogin()
  }
}
</script>

<style lang="less">
  .container{
    position: relative;
    width:100%;
    height: 100%;
    overflow: hidden;
  }
  .expand-transition{
    left:80px;
    opacity: 1;
    transition: all .3s ease;
  }
  .expand-enter, .expand-leave{
    opacity: 0;
    left:-180px;
  }
</style>
