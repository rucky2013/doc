<template>
  <div class="doc">
      <h1>{{ doc.CONTEXT_NAME }}</h1>
      <ul class="tags">
        <li v-for="tag in doc.TAG.split('|')">{{ tag }}</li>
      </ul>
      <h2>{{ doc.INTRODUCE }}</h2>
      <article>
        {{{ doc.CONTEXT }}}
      </article>
    </div>
</template>

<script>
  export default {
    vuex: {
      getters: {
        doc: ({doc}) => doc.doc
      }
    }
  }
</script>

<style lang="less" scoped>
  .doc{
    position: fixed;
    top:0;
    right:0;
    z-index:-1;
    width: 100%;
    height: 100%;
    padding-left: 420px;
    box-sizing:border-box;
    background-color: #efefef;
  }
</style>