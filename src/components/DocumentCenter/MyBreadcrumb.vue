<template>
  <div class="breadcrumb">
    <Breadcrumb>
      <BreadcrumbItem class="to-doc-link" to="/doc/toDocument">文档中心</BreadcrumbItem>
      <BreadcrumbItem
        v-for="(item,index) in breadCrumbList"
        :key="index"
        :class="index === breadCrumbList.length-1 ? 'last-breadcrumb-item' : 'item'"
      >{{item}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'DocBreadcrumb',
  props: {
    breadCrumbList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/variables.less';
@deep: ~'>>>';
.breadcrumb {
  // position: sticky;
  // top: 0px;
  // z-index: 2;
  box-sizing: border-box;
  padding: 29px 0 40px 0;
  background: #fff;
  @{deep} .ivu-breadcrumb {
    height: 21px;
    line-height: 21px;
    font-size: 14px;
    .ivu-breadcrumb-item-link,
    .ivu-breadcrumb-item-separator {
      color: @thirdTextColor;
    }
    .to-doc-link {
      @{deep} .ivu-breadcrumb-item-link {
        color: @thirdTextColor;
      }
    }
    .last-breadcrumb-item {
      .ivu-breadcrumb-item-link {
        color: @firstTextColor !important;
      }
    }
  }
}
</style>