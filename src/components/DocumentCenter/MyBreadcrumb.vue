<template>
  <div class="breadcrumb">
    <Breadcrumb separator="<">
      <span>当前位置：</span>
      <BreadcrumbItem class="toDocument" to="/doc/toDocument">文档中心</BreadcrumbItem>
      <BreadcrumbItem v-for="(item,index) in BreadcrumbList" :key="index">
        {{item}}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name:'DocBreadcrumb',
  props: {
    BreadcrumbList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/variables.less";
.breadcrumb {
  
  box-sizing: border-box;
  min-width: auto;
  background: white;
  border-bottom: 0.25px solid @bgColor;
  padding-left: 115px;
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