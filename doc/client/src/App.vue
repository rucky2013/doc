<template>
  <div>
    <button @click="test"></button>
  </div>
</template>

<script>
export default {
  methods: {
    test: function () {
      console.log('come in !')
      this
      .$http.get('api/test')
      .then((res) => {
        console.log(res.body)
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
