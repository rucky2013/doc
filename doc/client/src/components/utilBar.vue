<template>
  <div class="utilBar">
    <div class="items">
      <a class="item iconfont icon-catalog" href="javascript:;" @click="toggleCatalog">
      </a>
      <a class="item iconfont icon-search" href="javascript:;" @click="toggleSearch">
      </a>
      <a class="item iconfont icon-tuichuzhanghao" href="javascript:;" @click="logout">
      </a>
    </div>
    <div class="logo">@DOC</div>
  </div>
</template>

<script>
import * as actions from '../vuex/action'

export default {
  vuex: {
    actions: actions
  }
}
</script>

<style lang="less" scoped>
.utilBar{
  width: 60px;
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  background: #000;
  font-family:cursive;
  z-index:4;
  padding-top: 20px;
}
.logo{
  position: absolute;
  width: 100%;
  bottom: 20px;
  font-size:12px;
  padding-top: 2px;
  color:#fff;
  text-align: center;
  &:hover{
    color:#FF4D61;
  }
}
.items{
  .item{
    display: block;
    color: #fff;
    font-weight:bold;
    text-align: center;
    font-size: 28px;
    cursor: pointer;
    text-decoration: none;
    padding:6px 0;
    &:hover{
      color:#FF4D61;
    }
  }
}

</style>