
<template lang="jade">
  div
    button(@click="test") 
</template>

<script>
require('normalize.css')

export default {
  methods: {
    test: function () {
      this
      .$http.get('api/doc/1'
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

<style>
  html,body{
    height:100%;
    text-align:center;
  }
</style>
<style scoped lang="less">
button {
  border:1px solid red;
  padding:10px 30px;
  display:inline-block;
  background:#fff;
  color:red;
  margin:100px auto;
  outline:none;
  cursor:pointer;
}
</style>
