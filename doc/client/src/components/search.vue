<template>
  <div class="search">
    <div class="input">
      <i class="iconfont icon-search"></i>
      <input v-model="keyword" type="text" placeholder="请输入接口名称" @keyup.enter="search">
    </div>
    <ul class="results">
      <li
      v-for="result in results"
      @click="selectSearchItem(result.ID)">
        {{ result.CONTEXT_NAME }}
      </li>
    </ul>
  </div>
</template>

<script>
import {selectSearchItem} from '../vuex/action'
export default {
  vuex: {
    actions: {
      selectSearchItem
    }
  },
  data () {
    return {
      docName: '',
      results: [],
      keyword: ''
    }
  },
  methods: {
    search () {
      this
      .$http.post('api/search', {docName: this.keyword})
      .then((res) => {
        console.log(res.data)
        this.results = res.data.result
      },
      (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  position: absolute;
  width: 230px;
  height: 100%;
  background-color:rgba(250, 250, 250, 0.85);
  box-shadow:1px 1px 4px #ccc;
  top:0;
  right:0;
  z-index:3;
  padding: 30px;
  color:#666;
}
.input{
  font-size:16px;
  position: relative;
  height: 30px;
  margin-bottom: 40px;
  i{
    font-size:22px;
    vertical-align:middle;
    color:#999;
    position: absolute;
    left: 8px;
    top:5px;
  }
  input{
    width: 100%;
    line-height: 34px;
    height: 34px;
    outline: none;
    text-indent: 40px;
    color:#333;
    font-size: 14px;
    background: none;
    border:0;
    border-bottom:1px solid #bbb;
  }
}
.results{
  text-indent: 20px;
  li {
    line-height: 30px;
    cursor:pointer;
    border-bottom:1px dotted #ccc;
    &:hover{
      color:#FF4D61;
    }
  }
}
</style>