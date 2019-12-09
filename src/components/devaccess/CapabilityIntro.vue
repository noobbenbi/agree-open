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
.capabilityintro {
    width: 1920px;
    height: 914px;
    position: absolute;
    top:0px;
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
.capabilityintro img {
    width: 385px;
    height: 400px;
    position: absolute;
    top: 274px;
}
.capabilityintro img:nth-of-type(1) {
    left: 161px;
}
.capabilityintro img:nth-of-type(2) {
    left: 566px;
}
.capabilityintro img:nth-of-type(3) {
    left: 971px;
}
.capabilityintro img:nth-of-type(4) {
    left: 1376px;
}
.capabilityintro p {
    font-size:32px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    position: absolute;
    top: 709px;
}
.capabilityintro p:nth-of-type(1) {
    left: 289px;
}
.capabilityintro p:nth-of-type(2) {
    left: 694px;
}
.capabilityintro p:nth-of-type(3) {
    left: 1084px;
}
.capabilityintro p:nth-of-type(4) {
    left: 1505px;
}
</style>