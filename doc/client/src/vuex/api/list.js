import Vue from 'vue'
export default {
  fetchList (catalogId, cb) {
    Vue.http
      .get(`api/catalog/${catalogId}/doc`)
      .then(res => {
        let data = res.data
        if (data.status === 'OK') {
          cb(data.result)
        } else {
          console.error('服务端返回错误', data.errMsg)
        }
      }, err => {
        console.error('接口调用失败', err)
      })
  }
}

