import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import search from './components/search'
import repo from './components/repo'
import lWindow from './components/loginWindow'
require('./lib/reset.css')
/* eslint-disable no-new */

Vue.use(require('vue-resource'))
Vue.use(VueRouter)

Vue.component('l-window', lWindow)

var router = new VueRouter()

router.map({
  '/': {
    component: search
  },
  '/repositories/:username': {
    component: repo
  }
})

router.start(App, '#app')
