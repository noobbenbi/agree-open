<template>
  <div class="content-wrapper">
    <div class="content editor-content" ref="essayContentRef" v-html="docContent"></div>
  </div>
</template>

<script>
import '@/assets/styles/prism.css'
import '@/assets/js/prism.js'
export default {
  name: 'MyContent',
  data() {
    return {
      isMinWidth: false
    }
  },
  props: {
    docContent: {
      type: String
    },
    contentWidth: {
      type: String
    }
  },
  watch: {
    docContent() {
      this.$nextTick(() => {
        Prism.highlightAll() //  等到页面渲染完成，利用prism.js给文档详情中的<pre class="language-*"></pre>包裹的代码进行高亮
        this.getCatNavbarList() //  获取H1~H6标题，生成锚点列表
      })
    }
  },
  mounted() {
    //  等到页面渲染完成，利用prism.js给文档详情中的<pre class="language-*"></pre>包裹的代码进行高亮
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  },
  methods: {
    //  获取H1~H6标题，生成锚点列表
    getCatNavbarList() {
      let essayContentElement = this.$refs.essayContentRef.children
      let anchorList = []
      let titleList = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
      let anchorIndex = 0
      for (let i = 0; i < essayContentElement.length; i++) {
        if (
          titleList.includes(essayContentElement[i].tagName) &&
          essayContentElement[i].innerText
        ) {
          let item = {
            text: essayContentElement[i].innerText,
            id: 'anchor' + anchorIndex,
            class: essayContentElement[i].tagName
          }
          anchorList.push(item)
          essayContentElement[i].id = 'anchor' + anchorIndex //  文档内容中的H1~H6元素添加id，作为锚点
          anchorIndex++
        }
      }
      this.$emit('getAnchorList', anchorList)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/variables.less';
@deep: ~'>>>';
.content-wrapper {
  box-sizing: border-box;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  .content {
    width: 97% !important;
    line-height: 21px;
    color: @firstTextColor;
    font-family: PingFangSC-Regular, PingFang SC;
    font-size: 14px;
    font-weight: 400;
    @{deep} h1 {
      margin-bottom: 25px;
      padding: 0 0 14px 2px;
      line-height: 34px;
      font-size: 24px;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: @firstBorderColor
      }
    }
    @{deep} h2,
    @{deep} h3,
    @{deep} h4,
    @{deep} h5,
    @{deep} h6 {
      margin: 40px 0 11px 0;
      line-height: 28px;
      font-size: 16px;
    }
    @{deep} h2 {
      font-size: 20px;
      &::before {
        content: '';
        margin-right: 8px;
        display: inline-block;
        width: 3px;
        height: 15px;
        background: @themeColor;
      }
    }
    @{deep} p {
      margin: 11px 0 18px 0;
    }
    @{deep} ol,
    @{deep} ul {
      padding-left: 8px;
    }
  }
}
</style>