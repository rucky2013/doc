import Vue from 'vue'
export default {
  fetchDoc (itemId, cb) {
    Vue.http
      .get(`api/doc/${itemId}`)
      .then(res => {
        console.log('hello', res.data[0])
        cb(res.data[0])
      })
  }
}
