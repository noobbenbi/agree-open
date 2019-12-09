<template>
  <div class="quickaccess">
      <div class="center">
          <span class="center-title">快速接入</span>
          <span class="center-line"></span>
      </div>
      <div class="check-in">
          <img src="@/assets/images/quickaccess-check-in.png">
          <a class="box-title" href="">1.平台入住</a>
          <span class="box-line"></span>
          <p class="box-content">注册开放银行平台用户，认证成为开发者</p>
      </div>
      <div class="createapp">
          <img src="@/assets/images/quickaccess-createapp.png">
          <a class="box-title" href="">2.创建应用</a>
          <span class="box-line"></span>
          <p class="box-content">开发者登录控制台进入应用中心创建并配置应用</p>
      </div>
      <div class="devtest">
          <img src="@/assets/images/quickaccess-devtest.png">
          <a class="box-title" href="">3.开发测试</a>
          <span class="box-line"></span>
          <p class="box-content">开发者完成应用系统开发测试使用沙箱联调调试</p>
      </div>
      <div class="online">
          <img src="@/assets/images/quickaccess-online.png">
          <a class="box-title" href="">4.上线发布</a>
          <span class="box-line"></span>
          <p class="box-content">完成测试后，在应用中心提交上线审核发布应用</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'QuickAccess'
}
</script>

<style scoped>
.quickaccess {
    width: 1920px;
    height: 820px;
    position: absolute;
    bottom: 0px;
}
.center-title {
  width:144px;
  height:50px;
  font-size:36px;
  font-family:"Times New Roman",Georgia,Serif;
  font-weight:500;
  color:rgba(29,31,49,1);
  line-height:50px;
  position: absolute;
  top: 120px;
  left: 888px;
}
.center-line {
  width:70px;
  height:4px;
  background:rgba(2,164,175,1);
  position: absolute;
  top: 190px;
  left: 925px;
}
.check-in,
.createapp,
.devtest,
.online {
    width: 200px;
    height: 322px;
    position: absolute;
    top: 234px;
}
.check-in {
    left: 278px;
}
.createapp {
    left: 673px;
}
.devtest {
    left: 1054px;
}
.online {
    left: 1443px;
}
.check-in img,
.createapp img,
.devtest img,
.online img{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0px;
}
.box-title {
    position: absolute;
    left: 31px;
    top: 190px;
    font-size:30px;
    font-family:"PingFangSC-Medium",PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:42px;
}
.box-line {
    position: absolute;
    top: 252px;
    left: 61px;
    width:80px;
    height:6px;
    background:rgba(2,164,175,1);
}
.box-content {
    position: absolute;
    top: 278px;
    width:200px;
    height:44px;
    font-size:16px;
    font-family:"PingFangSC-Semibold", sans-serif;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:22px;
    /* display:inline-block; */
    text-align: center;
}
</style>
