import Vue from 'vue'
export default {
  fetchList (catalogId, cb) {
    Vue.http
      .get(`api/catalog/${catalogId}/doc`)
      .then(res => {
        cb(res.data)
      })
  }
}
