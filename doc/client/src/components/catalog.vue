<template>
  <div class="g-type">
    <div class="m-tit">
      类别
    </div>
    <ul class="m-body">
      <li 
      v-for="catalog in catalogs" 
      :class="{ 'current': current === $index }"
      @click="selectCata($index, catalog.ID)">
        {{ catalog.FUNCTION_NAME }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {getCatalog, selectCata} from '../vuex/action'
  export default {
    vuex: {
      getters: {
        catalogs: ({catalog}) => catalog.all,
        current: ({catalog}) => catalog.current
      },
      actions: {
        getCatalog,
        selectCata
      }
    },
    created () {
      this.getCatalog()
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
      li:hover, li.current{
        background: #FF4D61;
        color: #fff;
      }
    }
  }
</style>