<template>
  <div class="m-list-tit">
    {{ $route.params.username }} 这位小伙子star过的项目列表：
  </div>
  <ul class="m-list">
    <li class="u-li" v-for="itm in list">
      <a :href="itm.html_url">
      {{ itm.full_name }} <span>({{ itm.description }})</span>
      </a>
      <div class="m-tags">
        <button class="u-tag" @click="addT">+ 标签</button>
        <button class="u-tag" @click="delT">- 标签</button>
      </div>
    </li>
  </ul>
</template>

<script>
  import utils from '../utils'

  export default {
    data: () => {
      return {
        list: []
      }
    },
    methods: {
      addT () {
        if (!utils.checkLogin('userId')) {
          let opt = {
            status: true,
            username: this.$route.params.username
          }
          this.$dispatch('sWindow', opt)
          return
        }
        console.log('已登录')
      },
      delT () {
        if (!utils.checkLogin('userId')) {
          let opt = {
            status: true,
            username: this.$route.params.username
          }
          this.$dispatch('sWindow', opt)
          return
        }
        console.log('已登录')
      }
    },
    ready () {
      let username = this.$route.params.username
      this
      .$http.get('api/starRepo', {username: username})
      .then((res) => {
        if (res.status === 200) {
          this.list = res.data
        }
      },
      (err) => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less">
  .m-list-tit{
    width: 500px;
    margin:0 auto;
    text-align: left;
    text-indent: 5px;
    font-size: 1rem;
    color: #5898CC;
  }
  .m-list{
    width: 500px;
    margin:20px auto 0 auto;
    .u-li{
      list-style-type: square;
      padding: 10px 0 0 0;
      text-align: left;
      text-indent: 5px;
      border-bottom: 2px solid #C2BFC5;
      font-size:.8rem;
      font-style: italic;
      .u-opr{
        float: right;
      }
    }
    .m-tags{
      padding: 10px;
      .u-tag{
        display: inline-block;
        padding: 5px 8px;
        background: #CF5851;
        text-align: center;
        border-radius: 3px;
        margin-right: 5px;
        border: none;
        color: #FFF;
      }
    }
  }
</style>
