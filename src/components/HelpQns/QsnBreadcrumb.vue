<template>
  <div class="breadcrumb">
    <Breadcrumb separator="/">
      <span>当前位置：</span>
      <BreadcrumbItem class="toDocument" to="/devhelp">帮助与支持</BreadcrumbItem>
      <BreadcrumbItem class="toDocument">新手入门</BreadcrumbItem>
      <BreadcrumbItem v-for="(item,index) in showList" :key="index">
        {{item}}
      </BreadcrumbItem>
      <BreadcrumbItem class="toDocument" v-if="Isshow">{{showList[1]}}详情</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name:'DocBreadcrumb',
  data() {
    return {
      showList: [],
      Isshow: false,
    }
  },
  props: {
    Breadcrumblist: {
      type: Array
    },
    question: {
      type: Boolean
    }
  },
  watch:{
    Breadcrumblist(curVal,oldVal){
      if(curVal){
        this.showList=curVal;
      }
    },
    question(curVal, oldVal) {
      this.Isshow = !curVal;
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/variables.less";
// .breadcrumb {
//   box-sizing: border-box;
//   min-width: auto;
//   background: @titleBgColor;
//   border-bottom: 0.25px solid @borderSecondColor;
//   padding-left: 66px;
//   /deep/ .ivu-breadcrumb {
//     height: 50px;
//     line-height: 50px;
//     font-size: 14px;
//     color: @aColor;
//     .ivu-breadcrumb-item-separator {
//       color: @borderColor;
//     }
//     a {
//       color: @themeColor;
//     }
//   }
// }

// .toDocument {
//     font-size:1em;
//     font-family:PingFangSC-Regular,PingFang SC;
//     line-height:28px;
// }
.breadcrumb {
  padding: 0 5%;
  height: 66px;
  font-size:20px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(155,155,155,1);
  box-sizing: border-box;
  min-width: auto;
  background: white;
  border-bottom: 0.25px solid @bgColor;
 
  /deep/ .ivu-breadcrumb {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: @aColor;
    .ivu-breadcrumb-item-separator {
      color: @borderColor;
    }
    a {
      color: @themeColor;
    }
  }
}
</style>