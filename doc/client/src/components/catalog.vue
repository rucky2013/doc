<template>
  <div class="catalog m-list">
    <div class="title">
      炼油文档
    </div>
    <ul class="list">
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
<style scoped>
.catalog{
  position: absolute;
  z-index: 3;
  border-right: 0;
}
.catalog.m-list{
  background-color: #f3f3f3;
}
</style>
<style lang="less">
.m-list{
  border-right:1px solid #ededed;
  background-color: #fafafa;
  height: 100%;
  width: 150px;
  padding:0 10px;
  position: relative;
  .title{
    padding-top: 25px;
    text-indent: 10px;
    line-height: 35px;
    text-indent: 16px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size:15px;
    font-weight: bold;
    color: #FF4D61;
  }
  .list{
    font-size:0;
    li{
      font-size:14px;
      display: inline-block;
      width: 100%;
      cursor:pointer;
      text-indent: 20px;
      padding: 6px 0;
      overflow: hidden;
    }
    li:hover, li.current{
      color: #FF4D61;
      font-weight: bold;
    }
  }
}
</style>