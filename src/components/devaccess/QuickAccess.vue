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
    width: 100%;
    min-width: 1200px;
    height: 585px;
    position: relative;
}
.center-title {
  font-size:1.625em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(29,31,49,1);
  line-height:50px;
  position: relative;
  top: 60px;
  display: table;
  margin: 0 auto;
}
.center-line {
    width:60px;
    height:3px;
    background:rgba(2,164,175,1);
    position: absolute;
    top: 18.6%;
    left: 48.17%;
}
.check-in,
.createapp,
.devtest,
.online {
    width: 142px;
    height: 230px;
    position: absolute;
    top: 28.5%;
}
.check-in {
    left: 14.5%;
}
.createapp {
    left: 35.1%;
}
.devtest {
    left: 54.9%;
}
.online {
    left: 75.2%;
}
.check-in img,
.createapp img,
.devtest img,
.online img{
    width: 142px;
    height: 142px;
    position: absolute;
    top: 0px;
}
.box-title {
    position: absolute;
    left: 15.5%;
    top: 59%;
    font-size:1.3em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:42px;
}
.box-line {
    position: absolute;
    top: 78.26%;
    left: 30.5%;
    width:60px;
    height:4px;
    background:rgba(2,164,175,1);
}
.box-content {
    position: absolute;
    top: 86.3%;
    width:100%;
    height:44px;
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    text-align: center;
}
</style>
