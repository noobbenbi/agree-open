<template>
  <div class="breadcrumb">
    <Breadcrumb separator="<">
      <span>当前位置：</span>
      <BreadcrumbItem class="toDocument" to="/doc/toDocument">账户中心</BreadcrumbItem>
      <BreadcrumbItem>
        {{this.BreadcrumbList}}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name:'DocBreadcrumb',
  props: {
    BreadcrumbList: {
      type: String
    }
  } 
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/variables.less";
.breadcrumb {
  font-size:20px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(155,155,155,1);
  // box-sizing: border-box;
  // min-width: auto;
  background: white;
  // border-bottom: 0.25px solid @bgColor;
 
  // /deep/ .ivu-breadcrumb {
  //   height: 50px;
  //   line-height: 50px;
  //   font-size: 14px;
  //   color: @aColor;
  //   .ivu-breadcrumb-item-separator {
  //     color: @borderColor;
  //   }
  //   a {
  //     color: @themeColor;
  //   }
  // }
}
</style> 