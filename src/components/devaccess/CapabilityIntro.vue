<template>
<!-- 能力介绍 -->
<div class="capabilityintro">
  <div class="center">
      <span class="center-title">能力介绍</span>
      <span class="center-line"></span>
  </div>
  <img src="@/assets/images/abstract-art-blur-bright-373543.png">
  <img src="@/assets/images/bandwidth-close-up-computer-connection-1148820.png" alt="">
  <img src="@/assets/images/people-discuss-about-graphs-and-rates-3184292.png" alt="">
  <img src="@/assets/images/photo-of-man-wearing-brown-sweater-3184603.png" alt="">
  <p>简单集成</p>
  <p>技术优势</p>
  <p>一站式服务</p>
  <p>产融合作</p>
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
    position: absolute;
    top: 18.6%;
    left: 48.17%;
}
.capabilityintro img {
    width: 275px;
    height: 290px;
    position: absolute;
    top: 30%;
}
.capabilityintro img:nth-of-type(1) {
    left: 8.38%;
}
.capabilityintro img:nth-of-type(2) {
    left: 29.5%;
}
.capabilityintro img:nth-of-type(3) {
    left: 50.57%;
}
.capabilityintro img:nth-of-type(4) {
    left: 71.667%;
}
.capabilityintro p {
    font-size:1.56em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    position: absolute;
    top: 77.57%;
}
.capabilityintro p:nth-of-type(1) {
    left: 15.1%;
}
.capabilityintro p:nth-of-type(2) {
    left: 36.15%;
}
.capabilityintro p:nth-of-type(3) {
    left: 56.46%;
}
.capabilityintro p:nth-of-type(4) {
    left: 78.4%;
}
</style>