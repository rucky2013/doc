<template>
  <div class="search-body">
    <div class="m-search">
      <a class="i-search iconfont" @click="search">&#xe754;</a>
      <input class="u-search" v-model="docName" type="text">
    </div>
    <ul class="m-item" v-show="status" class="search-list">
      <li v-for="item in items" class="u-item">
        <a href="javascript:;" @click="getDetail(item.ID)">{{ item.CONTEXT_NAME }}</a>
      </li>
    </ul>
    <div class="m-detail" v-show="detailStatus">
      <p>{{ name }}</p>
      <div class="m-tags">
        <span class="tag" v-for="tag in tags">{{ tag }}</span>
      </div>
      <p>{{ introduction }}</p>
      <article>
        {{ content }}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      docName: '',
      items: [],
      status: true,
      detailStatus: false,
      name: '',
      tags: [],
      introduction: '',
      content: ''
    }
  },
  methods: {
    search () {
      let data = {
        docName: this.docName
      }
      this
      .$http.post('api/search', data)
      .then((res) => {
        this.detailStatus = false
        if (res.data.length > 0) {
          console.log(res.data)
          this.items = res.data
          this.status = true
          return
        }
        this.status = false
      },
      (err) => {
        console.log(err)
      })
    },
    getDetail (id) {
      this.status = false
      this.detailStatus = true
      this
      .$http.get(`api/doc/${id}`)
      .then(res => {
        this.name = res.data[0].CONTEXT_NAME
        this.tags = res.data[0].TAG.split('|')
        this.introduction = res.data[0].INTRODUCE
        this.content = res.data[0].CONTEXT
      },
      err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .search-body{
    margin-top: 100px;
    width: 800px;
    margin-left: 500px;
    z-index: 9999;
    .m-search{
      position: relative;
      height: 50px;
      border-bottom: 2px solid #ececec;
      padding: 20px 0;
      .i-search{
        position: absolute;
        height: 52px;
        width: 52px;
        text-align: center;
        line-height: 52px;
        font-size: 36px;
        color: #A19A9F;
        font-weight: bold;
      }
      .u-search{
        display: inline-block;
        height: 50px;
        width: 100%;
        border: none;
        text-indent: 60px;
        font-size: 1.8rem;
        font-style: italic;
        outline: none;
      }
    }
  }
  .no-record{
    text-align: left;
    font-size: 2rem;
    margin-top: 50px;
    font-style: italic;
  }
  .m-item{
    padding: 0 20px;
    .u-item{
      font-style: italic;
      list-style: square;
      a{
        padding: 10px 20px;
      }
    } 
  }
  .m-detail{
    padding: 20px;
    .tag{
      display: inline-block;
      padding: 5px;
      background: #F58F4A;
      color: #fff;
      margin-right: 10px;
      border-radius: 5px;
    }
  }
</style>