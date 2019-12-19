<template>
  <div class="infoDetail">
    <div class="infoDetail_box">
      <div class="section">
        <div class="infoDetail_content">
          <h3>{{infoDetail.msgTitle}}</h3>
          <p>{{infoDetail.msgContent}}</p>
          <div class="la_author">
            {{infoDetail.infoPublisher}}
            <br />
            {{infoDetail.createTimeStr}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoDetail",
  data() {
    return {};
  },
  props: {
    infoDetail: Object
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/styles/variables.less";
.infoDetail {
  .infoDetail_box {
    background-color: @titleBgColor;
    overflow: hidden;
    color: @fontColor;
    min-width: 1280px;
    .section {
      width: 1280px !important;
      height: 100%;
      background-color: @bgColor !important;
      border-bottom: @titleBgColor;
      margin: 75px auto 150px auto;
      .infoDetail_content {
        background-color: #fff;
        font-size: 14px;
        line-height: 25px;
        padding: 0 150px 80px;
        border: 1px solid @borderThirdColor;
        margin: 0;
        h3 {
          line-height: 120px;
          text-align: center;
          font-size: 20px;
        }
        p {
          line-height: 24px;
          font-size: 14px;
          text-indent: 2em;
        }
        .la_author {
          text-align: right;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>

