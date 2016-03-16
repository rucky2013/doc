<template>
  <div>
    <button @click="test">提交</button>
  </div>
</template>

<script>
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

<style>
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
</style>
