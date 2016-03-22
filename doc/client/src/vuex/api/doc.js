import Vue from 'vue'
export default {
  fetchDoc (itemId, cb) {
    Vue.http
      .get(`api/doc/${itemId}`)
      .then(res => {
        let data = res.data
        if (data.status === 'OK') {
          let doc = data.result[0] || {}
          cb(doc)
        } else {
          console.error('服务端返回错误', data.errMsg)
        }
      }, err => {
        console.error('接口调用失败', err)
      })
  }
}

