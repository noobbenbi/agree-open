<template>
<!-- 产品优势 -->
<div class="capabilityintro">
  <div class="center">
      <span class="center-title">产品优势</span>
      <span class="center-line"></span>
  </div>
  <div class="content">
      <div class="capabilityintro-img1">
      <img class="img1" src="@/assets/images/abstract-art-blur-bright-373543.png">
      <p>简单集成</p>
  </div>
  <div class="capabilityintro-img2">
      <img class="img2" src="@/assets/images/bandwidth-close-up-computer-connection-1148820.png">
      <p>技术优势</p>
  </div>
  <div class="capabilityintro-img3">
      <img class="img3" src="@/assets/images/people-discuss-about-graphs-and-rates-3184292.png">
      <p>一站式服务</p>
  </div>
  <div class="capabilityintro-img4">
      <img class="img4" src="@/assets/images/photo-of-man-wearing-brown-sweater-3184603.png">
      <p>产融合作</p>
  </div>
  </div>
</div>
</template>

<script>
export default {
    name:'CapabilityIntro'
}
</script>

<style scoped>
@import url("../../assets/styles/font/font.css");
.capabilityintro {
    width: 100%;
    min-width: 1200px;
    height: 650px;
    position: relative;
}
.center-title {
  font-size:1.625em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(29,31,49,1);
  line-height:50px;
  position: relative;
  top: 70px;
  display: table;
  margin: 0 auto;
}
.center-line {
    width:60px;
    height:3px;
    background:rgba(2,164,175,1);
    position: relative;
    top: 80px;
    display: table;
    margin: 0 auto;
}
.content {
    width: 83%;
    height: 375px;
    position: relative;
    top: 25%;
    display: table;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.capabilityintro-img1,
.capabilityintro-img2,
.capabilityintro-img3,
.capabilityintro-img4{
    flex: 1;
    height: 370px;
    text-align: center;
}
.capabilityintro-img1 img,
.capabilityintro-img2 img,
.capabilityintro-img3 img,
.capabilityintro-img4 img{
    width: 275px;
    height: 290px;
}
.capabilityintro-img1 p,
.capabilityintro-img2 p,
.capabilityintro-img3 p, 
.capabilityintro-img4 p{
    font-size:1.56em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    display: table;
    margin: 0 auto;
}
</style>