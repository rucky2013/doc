<template>
  <div class="lists m-list">
    <div class="title">
      {{ currentCata }}
    </div>
    <ul class="list">
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
        current: ({list}) => list.current,
        currentCata: ({catalog}) => {
          return catalog.all[catalog.current].FUNCTION_NAME
        }
      },
      actions: {
        getList,
        selectItem
      }
    }
  }
</script>

<style lang="less" scoped>
.lists{
  position: absolute;
  left:60px;
  z-index:2;
}
</style>