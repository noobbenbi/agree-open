<template>
  <div class="myAgreement">
    <div class="agreement-title">
      <span>已签协议</span> 
    </div>
    <div class="content-style" v-for="item in content" :key="item.index">
      <div class="cut-line"></div>
      <div class="agreement-content">
        <div>{{item.agreementName}}</div>
        <div><a href="">查看详情</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'myData',
    data(){
      return {
        content:[
          {
            agreementName:'开放平台用户注册协议'
          },
          {
            agreementName:'开发者入住协议'
          }
        ]
      }
    },
}
</script>
<style lang="less"  scoped>
.myAgreement{
  color:rgba(29,31,49,1);
  font-family:PingFangSC-Medium,PingFang SC;
  font-size:20px;
  font-weight:400;
  min-height: 700px;
  width: 80%;
  padding: 0 5%;
  .agreement-title{
    font-size:36px;
    font-weight:500;
    text-align: left;
    padding-bottom: 20px;
  }
  .content-style{
    .cut-line{
      height: 1px;
      background:rgba(240,240,240,1);
    }
    .agreement-content{
      padding: 35px 0;
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>







