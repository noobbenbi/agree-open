<template>
<div>
    <Header></Header>
    <div class="videotutorialall">
        <img src="@/assets/images/beige-queen-folder-1181776.png">
        <div class="bread">
            <Breadcrumb>
            <BreadcrumbItem to="/devaccess" class="breadcrumbitem">开发接入</BreadcrumbItem>
            <BreadcrumbItem class="breadcrumbitem">视频教程</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="video-box1">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
            <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box2">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box3">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box4">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box5">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box6">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box7">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box8">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box9">
            <video src="@/assets/video/创建应用.mp4" controls="controls" onMouseOver="this.play()" onMouseOut="this.pause()"></video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'VideoTutorialAll',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.videotutorialall {
    width:1920px;
    height:1912px;
    background:rgba(255,255,255,1);
}
.videotutorialall img {
    width: 1920px;
    height: 450px;
    position: absolute;
    top: 120px;
}
.bread {
    position: absolute;
    top: 596px;
    left: 160px;
}
.breadcrumbitem{
    font-size:20px;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.videotutorialall video {
    width: 520px;
    height: 365px;
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
.video-box1 {
    position: absolute;
    left: 160px;
    top: 644px;
}
.video-box2 {
    position: absolute;
    left: 700px;
    top: 644px;
}
.video-box3 {
    position: absolute;
    left: 1240px;
    top: 644px;
}
.video-box4 {
    position: absolute;
    left: 160px;
    top: 1040px;
}
.video-box5 {
    position: absolute;
    left: 700px;
    top: 1040px;
}
.video-box6 {
    position: absolute;
    left: 1240px;
    top: 1040px;
}
.video-box7 {
    position: absolute;
    left: 160px;
    top: 1436px;
}
.video-box8 {
    position: absolute;
    left: 700px;
    top: 1436px;
}
.video-box9 {
    position: absolute;
    left: 1240px;
    top: 1436px;
}
</style>