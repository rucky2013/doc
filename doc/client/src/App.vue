<template>
  <div class="g-test">
    <div class="m-test"></div>
    <button @click="test">提交</button>
  </div>
</template>

<script>
require('normalize.css')

export default {
  methods: {
    test: function () {
      console.log('come in !')
      this
      .$http.get('/api/v1/test')
      .then((res) => {
        console.log(res.data)
      },
      (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}

.g-test{
  width: 100px;
  height: 100px;
  .m-test{
    width: 50px;
    height: 50px;
  }
}
</style>
