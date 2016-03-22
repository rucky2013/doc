import Vue from 'vue'
export default {
  fetchCatalog (cb) {
    Vue.http
      .get('api/catalog')
      .then(res => {
        cb(res.data)
      })
  }
}
