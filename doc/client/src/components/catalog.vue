<template>
  <div class="g-type">
    <div class="m-tit">
      类别
    </div>
    <ul class="m-body">
      <li v-for="catalog in catalogs">
        {{ catalog.FUNCTION_NAME }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        catalogs: []
      }
    },
    ready () {
      this.$http
      .get('api/catalog')
      .then(res => {
        console.log(res.data[0].FUNCTION_NAME)
        this.catalogs = res.data
      })
    }
  }
</script>

<style lang="less" scoped>
  .g-type{
    position: fixed;
    top: 0;
    height: 100%;
    background: #ececec;
    padding: 10px 20px;
    .m-tit{
      height: 80px;
      line-height: 80px;
      font-size: 1rem;
      text-align: center;
      border-bottom: 3px solid #FFF;
      padding-bottom: 10px;
    }
    .m-body{
      margin-top: 10px;
      overflow-y: scroll;
      li{
        width: 100px;
        text-align: center;
        padding: 10px 0;
        font-style: italic;
        border-bottom: 2px solid #FFF;
      }
      li:hover{
        background: #FF4D61;
        color: #fff;
      }
    }
  }
</style>