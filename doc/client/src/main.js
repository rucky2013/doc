import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'

/* eslint-disable no-new */

Vue.use(resource)

new Vue({
  el: '#index',
  components: { App }
})
