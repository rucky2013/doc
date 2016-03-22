<template>
  <div class="doc">
    <div class="content">
      <h1>{{ doc.CONTEXT_NAME }}</h1>
      <ul class="tags">
        <li v-for="tag in tags">{{ tag }}</li>
      </ul>
      <div class="intro">{{ doc.INTRODUCE }}</div>
      <article class="md">
        {{{ content }}}
      </article>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import hljs from 'highlight.js'
  marked.setOptions({
    highlight: (code) => {
      return hljs.highlightAuto(code).value
    }
  })
  export default {
    computed: {
      content () {
        let _content = this.doc.CONTEXT
        marked(_content, (err, content) => {
          if (!err) {
            _content = content
          }
        })
        return _content
      },
      tags () {
        let tags = this.doc.TAG || ''
        return tags.split('|')
      }
    },
    vuex: {
      getters: {
        doc: ({doc}) => doc.doc
      }
    }
  }
</script>

<style lang="less" scoped>
  .doc{
    position: absolute;
    top:0;
    right:0;
    z-index:1;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-left: 260px;
    box-sizing:border-box;
    background-color: #fff;
  }
  .content{
    padding:20px 40px;
    color:#333;
  }
  h1{
    font-size:22px;
    margin-bottom: 15px;
  }
  .intro{
    font-size:14px;
    margin-bottom: 30px;
  }
  .tags{
    overflow: hidden;
    margin-bottom: 20px;
    li{
      float: left;
      margin-right:10px;
      padding:0 8px;
      box-shadow:0 0 0 1px #FF4D61 inset;
      text-align: center;
      line-height: 22px;
      color:#FF4D61;
      border-radius:4px;
    }
  }
</style>