<template>
  <div class="contentWrapper">
    <div class="content" 
      ref="essayContentElement" 
      v-html="essayContent" 
      :style="{width: contentWidthused}">
    </div>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  data() {
    return {
      isMinWidth: false,
      contentWidthused: this.contentWidth
    }
  },
  props: {
    essayContent: {
      type: String
    },
    contentWidth: {
      type: String
    }
  },
  mounted() {
    window.onresize = () => { // 监听浏览器窗口宽度变化
      this.getWindowWidth();
    };
  },
  methods: {
    getWindowWidth() {
      let windowWidth = window.innerWidth;
      if(windowWidth > 1480) {
        this.contentWidthused = '81%';
      } else {
        this.contentWidthused = '89%';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.contentWrapper {
  box-sizing: border-box;
  height: ~"calc(100% - 50.25px)";
  padding-left: 66px;
  background: #fff;
  overflow-y: auto;
  .content {
    width: 81%;
    /deep/ h1,
    /deep/ h2,
    /deep/ h3,
    /deep/ h4,
    /deep/ h5,
    /deep/ h6,
    /deep/ p,
    /deep/ span{
      word-break: break-all;
      color: #999 !important;
      font-weight: normal !important;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
      background: transparent !important;
    }
    /deep/ h1 {
      line-height: 40px;
      padding: 20px 0 22px 0;
      margin-bottom: 22px;
      border-bottom: 1px solid #999;
      font-size: 33px !important;
      text-align: left;
      text-transform: uppercase; 
      span {
        font-size: inherit !important;
      }
    }
    /deep/ h2 {
      line-height: 24px !important;
      padding: 18px 0 18px 60px !important;
      margin-left: -66px !important;
      border-left: 6px solid #D5282A;
      font-size: 24px !important;
      span {
        font-size: inherit !important;
      }
    }
    /deep/ h3,
    /deep/ h4,
    /deep/ h5,
    /deep/ h6 {
      font-size: 18px;
      strong {
        font-weight: inherit !important;
      }
      span {
        font-size: inherit !important;
      }
    }
    /deep/ p {
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 28px;
      word-wrap: break-word;
      color: #000;
      padding: 0;
    }
    /deep/ span {
      font-size: 14px !important;
      
    }
    /deep/ table {
      width: 100%;
      margin: 20px 0;
      font-size: 14px;
      border: 1px solid #e9e8f0;
      border-collapse: collapse; 
      tr {
        height: 84px !important;
        td {
          text-align: left;
          padding: 22px !important;
          font-size: 16px;
          color: #333;
          background: inherit !important;
          border: none !important;
          border-right: 1px solid #ebebeb !important;
          span {
            font-weight: inherit !important;
          }
        }
        &:nth-child(2n+1) {
          background-color: #f7f7f7 !important;
        }
      }
      
    }
  }
}
</style>