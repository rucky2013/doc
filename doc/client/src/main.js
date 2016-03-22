import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'
import store from './vuex/store'
/* eslint-disable no-new */
require('normalize.css')
require('../static/style/global.less')

Vue.use(resource)

new Vue({
  el: '#index',
  store,
  components: { App }
})
