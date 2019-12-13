<template>
  <div class="body">
    <div class="title">
      <h1>我的应用</h1>
    </div>
    <div class="longline"></div>
    <div class="subtitle"><p>生活服务TEST</p></div>
    <div class="longline"></div>
    <div class="head-skin">
     <div class="contentStyle">
       <div class="docName">APPID</div>
       <div class="detailsCheck"><p>4077d5a6-c813-4ed6-a</p></div>
     </div>
     <div class="sublongline"></div>
     <div class="contentStyle">
       <div class="docName">RSA2密钥应用公钥</div>
       <div class="detailsCheck"><a href="">上传/查看</a></div>
     </div>
     <div class="sublongline"></div>
     <div class="contentStyle">
       <div class="docName">RSA2密钥平台公钥</div>
       <div class="detailsCheck"><a href="">查看</a></div>
     </div>
     <div class="sublongline"></div>
     <div class="contentStyle">
       <div class="docName">AES密钥</div>
       <div class="detailsCheck"><a href="">上传/查看</a></div>
     </div>
     <div class="sublongline"></div>
     <div class="contentStyle">
       <div class="docName">授权回调地址</div>
       <div class="detailsCheck"><a href="">上传/查看</a></div>
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
  .subtitle{
    
    height:22px;
    padding:0 40px 0;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:22px;
  }
  .longline{
          margin:5px 20px 40px;
          margin-bottom: px;
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
      .detailsCheck p{
        color: rgba(29, 31, 49, 1);
      }
    }
    .sublongline{
    margin:40px -20px 40px;
    
    }
  }
 
  
}

</style>







