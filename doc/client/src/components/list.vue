<template>
  <div class="list">
    <div class="title">
      列表
    </div>
    <ul class="content">
      <li 
      v-for="item in list" 
      :class="{ 'current': current === $index }"
      @click="selectItem($index, item.ID)">
        {{ item.FUNCTION_NAME }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {getList, selectItem} from '../vuex/action'
  export default {
    vuex: {
      getters: {
        list: ({list}) => list.all,
        current: ({list}) => list.current
      },
      actions: {
        getList,
        selectItem
      }
    }
  }
</script>

<style lang="less" scoped>
  .list{
    position: fixed;
    top: 0;
    left:259px;
    height: 100%;
    background: #ececec;
    padding: 10px 20px;
  }
  .title{
    height: 80px;
    line-height: 80px;
    font-size: 1rem;
    text-align: center;
    border-bottom: 3px solid #FFF;
    padding-bottom: 10px;
  }
  .content{
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
</style>