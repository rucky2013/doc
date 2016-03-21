import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'
import vuex from 'vuex'

/* eslint-disable no-new */

Vue.use(resource)
Vue.use(vuex)

new Vue({
  el: '#index',
  components: { App }
})
