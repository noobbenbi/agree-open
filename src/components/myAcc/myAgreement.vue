<template>
  <div class="body">
    <div class="title">
      <h1>我的协议</h1>
    </div>
    <div class="longline"></div>
    
    <div class="head-skin">
     <div class="contentStyle">
       <div class="docName">开放平台用户注册协议</div>
       <div class="detailsCheck"><a href="">查看详情</a></div>
     </div>
     <div class="sublongline"></div>
     <div class="contentStyle">
       <div class="docName">开发者入住协议</div>
       <div class="detailsCheck"><a href="">查看详情</a></div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'myData',
    data(){
      return {
        ifhide:true,
        accountName:"用户名",
        confirmStatu:"未认证",
        confirmhide:"true",
        buttonhide:"true"
      }
    },
    methods:{
      

    }
}
</script>
<style lang="less"  scoped>
.body{
  width: 900px;
  .title{
    padding:0 40px 0;
    height:50px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
  }
  
  .longline{
    margin:5px 20px 40px;
    width:900px;
    height:1px;
    background:rgba(240,240,240,1);
  }
  .head-skin{
    height: 200px;
    padding: 0px 40px 0;
    .contentStyle{
      height:28px;
      font-size:20px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      line-height:28px;
      .docName{
        width: 50%;
        color:rgba(29,31,49,1);
        display: inline-block;
      }
      .detailsCheck{
        width: 50%;
        color:rgba(2,164,175,1);
        display: inline-block;
        text-align: right;
      }
    }
    .sublongline{
    margin:20px -20px 20px;
    margin-bottom: px;
    width:900px;
    height:1px;
    background:rgba(240,240,240,1);
    }
  }
 
  
}

</style>







