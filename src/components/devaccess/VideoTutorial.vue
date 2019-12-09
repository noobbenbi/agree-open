<template>
<!-- 视频教程 -->
  <div class="videotutorial">
      <div class="center">
          <span class="center-title">视频教程</span>
          <span class="center-line"></span>
      </div>
      <div class="video-test">
        <video src="@/assets/video/创建应用.mp4" width="520px" height="365px" 
        controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()" ></video>
        <div class="icon">
          <Icon class="video-icon" type="ios-videocam" size="35"/>
          <p class="video-time"></p>
        </div>
      </div>
      <button>查看更多</button>
  </div>
</template>

<script>
export default {
    name:'VideoTutorial'
}
</script>

<style scoped>
.videotutorial {
    width:1920px;
    height:890px;
    background:rgba(248,248,248,1);
    position: absolute;
    top: 1900px;
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
.video-test {
  width: 520px;
  height: 365px;
  position: absolute;
  top: 274px;
  left: 161px;
}
.icon {
  position: absolute;
  top: 325px;
  left: 440px;
  width: 80px;
  height: 40px;
  color:darkgray;
}
.video-icon {
  text-align: center;
}
.videotutorial button {
  position: absolute;
  top: 710px;
  left: 864px;
  border: none;
  width:200px;
  height:60px;
  background:rgba(2,164,175,1);
  border-radius:4px;
  font-size:24px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
}
</style>

