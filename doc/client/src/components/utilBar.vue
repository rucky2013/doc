<template>
  <div class="utilBar">
    <div class="logo iconfont icon-dog"></div>
    <div class="items">
      <a class="item iconfont icon-catalog" href="javascript:;" @click="toggleCatalog">
      </a>
      <a class="item iconfont icon-search" href="javascript:;" @click="toggleSearch">
      </a>
    </div>
    <a class="logout iconfont icon-tuichuzhanghao" href="javascript:;" @click="logout">
    </a>
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
  width: 80px;
  position: absolute;
  top:0;
  left:0;
  padding:40px 10px;
  height: 100%;
  background: #f5f5f5;
  box-shadow: 2px 0 2px #e5e5e5;
  z-index:4;
}
.logo{
  font-size:42px;
  padding-bottom: 30px;
  border-bottom: 2px solid #fefefe;
  color:#333;
  text-align: center;
  &:hover{
    color:#FF4D61;
  }
}
.items{
  padding: 60px 0 100px;
  .item{
    display: block;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    text-decoration: none;
    padding:15px;
  }
}
.logout{
  display: block;
  text-align: center;
  font-size: 30px;
  border-top: 2px solid #fefefe;
  padding-top:40px;
}
</style>