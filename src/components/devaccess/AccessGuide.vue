<template>
<!-- 接入指南 -->
  <div class="accessguide">
      <div class="center">
          <span class="center-title">接入指南</span>
          <span class="center-line"></span>
      </div>
      <img src="@/assets/images/person-reading-a-book-3060324.png">
      <img src="@/assets/images/blur-computer-connection-electronics-442150.png">
      <img src="@/assets/images/blue-and-yellow-graph-on-stock-market-monitor-159888.png">
      <img src="@/assets/images/adult-blur-boss-business-288477.png">
      <div class="text-part-read">
          <a class="text-part-title" href="">接入前必读</a>
          <span class="text-part-line"></span>
          <p class="text-part-content">{{msg}}</p>
      </div>
      <div class="text-part-dev">
          <a class="text-part-title" href="">接入开发</a>
          <span class="text-part-line"></span>
          <p class="text-part-content">{{msg}}</p>
      </div>
      <div class="text-part-api">
          <a class="text-part-title" href="">API接口规范</a>
          <span class="text-part-line"></span>
          <p class="text-part-content">{{msg}}</p>
      </div>
  <div class="text-part-sdk">
      <a class="text-part-title" href="">基础SDK集成</a>
      <span class="text-part-line"></span>
      <p class="text-part-content">{{msg}}</p>  
  </div>
  </div>
  
</template>
<script>
export default {
  name:'AccessGuide',
  data() {
      return {
          msg:'金融场景化业务产品和多种理财产品，为客户流动资金创造更大价值'
      }
  }
}
</script>
<style scoped>
.accessguide {
    width: 1920px;
    height: 986px;
    background-image: url(../../assets/images/278433d1c14890e34f12826849607864.png);
    position: absolute;
    top: 914px;
}
.center-title {
  width:144px;
  height:50px;
  font-size:36px;
  font-family:"Times New Roman",Georgia,Serif;
  font-weight:500;
  color:rgba(255,255,255,1);
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
.accessguide img{
    width: 400px;
    height: 280px;
    position: absolute;
}
.accessguide  img:nth-of-type(1){
    top: 266px;
    left: 161px;
}
.accessguide  img:nth-of-type(2){
    top: 266px;
    left: 971px;
}
.accessguide  img:nth-of-type(3){
    top: 586px;
    left: 161px;
}
.accessguide  img:nth-of-type(4){
    top: 586px;
    left: 971px;
}
.text-part-read {
    position: absolute;
    width:390px;
    height:280px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 266px;
    left: 561px;
}
.text-part-dev {
    position: absolute;
    width:390px;
    height:280px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 266px;
    left: 1371px;
}
.text-part-api {
    position: absolute;
    width:390px;
    height:280px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 586px;
    left: 561px;
}
.text-part-sdk {
    position: absolute;
    width:390px;
    height:280px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 586px;
    left: 1371px;
}
.text-part-title {
    font-size:32px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    position: absolute;
    top: 51px;
    left: 115px;
}
.text-part-line {
    width:240px;
    height:6px;
    background:rgba(2,164,175,1);
    position: absolute;
    top: 116px;
    left: 75px;
}
.text-part-content {
    width:240px;
    height:84px;
    font-size:20px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:28px;
    position: absolute;
    left: 75px;
    top: 144px;
}
</style>
