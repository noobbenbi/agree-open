<template>
<!-- 视频教程 -->
  <div class="videotutorial">
      <div class="center">
          <span class="center-title">视频教程</span>
          <span class="center-line"></span>
      </div>
      <div class="video-test">
        <video src="@/assets/video/创建应用.mp4" width="370px" height="260px" 
        controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()" ></video>
        <!-- <div class="icon">
          <Icon class="video-icon" type="ios-videocam" size="35"/>
          <p class="video-time"></p>
        </div> -->
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
    width:100%;
    min-width: 1200px;
    height:635px;
    background:rgba(248,248,248,1);
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
.video-test {
  width: 370px;
  height: 260px;
  position: absolute;
  top: 30%;
  left: 8.4%;
}
.videotutorial button {
  position: absolute;
  top: 80%;
  left: 45%;
  border: none;
  width:145px;
  height:40px;
  background:rgba(2,164,175,1);
  border-radius:4px;
  font-size:1.15em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
}
</style>

