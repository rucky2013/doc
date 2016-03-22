<template>
  <div class="catalog m-list">
    <div class="title">
      类别
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
</style>
<style lang="less">
.m-list{
  border-right:1px solid #ededed;
  background-color: #fafafa;
  height: 100%;
  width: 170px;
  text-align: center;
  position: relative;
  .title{
    line-height: 40px;
    margin-bottom: 10px;
    font-weight: bold;
    color:#fff;
    background-color: #FF4D61;
    font-size:16px;
  }
  .list{
    font-size:0;
    li{
      font-size:14px;
      display: inline-block;
      width: 140px;
      cursor:pointer;
      text-align: center;
      padding: 10px 0;
      overflow: hidden;
      border-bottom: 1px dotted #999;
    }
    li:hover, li.current{
      color: #FF4D61;
      border-bottom: 1px solid #FF4D61;
      font-weight: bold;
    }
  }
}
</style>