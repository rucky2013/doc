<template>
  <util-bar></util-bar>
  <catalog :status="status"></catalog>
</template>

<script>
require('normalize.css')
require('../static/style/global.less')
import utilBar from './components/utilBar'
import catalog from './components/catalog'

export default {
  data () {
    return {
      status: false
    }
  },
  computed: {
    test () {
      return this.status
    }
  },
  components: {
    'util-bar': utilBar,
    'catalog': catalog
  }
}
</script>
