<template>
  <div class="m-form" method="POST" action="api/user">
    <input class="u-search" v-model="username"
     type='text' name="username" placeholder="请输入git用户名">
    <input class="u-btn" type='button' @click="subF" value="搜索">
  </div>
  <div class="m-author s-red-col" v-if="flag">
    <!-- <h1>
      {{ username }} ,welcome!
    </h1> -->
    <p>
      <span class="s-red-col s-thick">github地址：</span>
      <a :href=giturl>{{ giturl }}</a>
    </p>
    <p>
      <span class="s-red-col s-thick">邮箱：</span>
      <a v-if="email" :href=email>{{ email }}</a>
      <a v-else href="javascript:;">邮箱呢 ( ⊙ o ⊙ )？</a>
    </p>
    <p>
      <span class="s-red-col s-thick">blog：</span>
      <a v-if="blog" :href=blog>{{ blog }}</a>
      <a v-else href="javascript:;">博客呢 ( ⊙ o ⊙ )?</a>
    </p>
    <a class="u-go" v-link="{ path: '/repositories/'+this.username, replace:false }">看看他star过的项目，<(￣︶￣)↗[GO!]</a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        username: '',
        flag: false,
        loginer: '',
        giturl: '',
        email: ''
      }
    },
    methods: {
      subF: function (e) {
        this
        .$http.get('/api/user', {username: this.username})
        .then((res) => {
          if (res.status === 200) {
            this.flag = true
            this.loginer = res.data.login
            this.giturl = res.data.html_url
            this.email = res.data.email
          }
        },
        (err) => {
          console.log(err)
        })
      }
    }
  }

</script>

<style lang="less">
  .m-form{
    width: 500px;
    margin: 10px auto 0 auto; 
    .u-search{
      display: inline-block;
      width: 400px;
      height: 50px;
      border:2px solid #F1E7F8;
      font-size: 1.6rem;
      font-weight: normal;
      text-indent: 20px;
    }
    .u-btn{
      float: right;
      width: 80px;
      height: 50px;
      border:none;
      background-color:#f74342;
      color: #FFF;
      font-size: 1rem;
    }
  }
  .m-author{
    width: 500px;
    margin: 20px auto 0 auto ;
    h1{
      text-align: left;
      text-indent: 10px;
      margin-bottom: 10px;
      font-size: 1.4rem;
    }
    p{
      text-align: left;
      text-indent: 10px;
      margin-bottom: 10px;
      a{
        text-decoration: underline;
        font-style: italic;
      }
    }
    .u-go{
      display: block;
      text-align: left;
      text-indent: 10px;
      margin-top: 20px;
    }
  }

  .s-thick{
    font-size: 1rem;
    font-weight: 400;
  }

  .s-red-col{
    color:#F85864;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>