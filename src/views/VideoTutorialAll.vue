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
            <video src="@/assets/video/创建应用.mp4" controls="controls" ></video>
            <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <div class="video-box2">
            <video controls="controls" >
                <source src=" http://http://192.168.180.154:33333/common/video/a6543a1ad8e14a21844b94324437cdd3.">
            </video>
             <div class="icon">
                <Icon class="video-icon" type="ios-videocam" size="35"/>
                <p class="video-time"></p>
            </div>
        </div>
        <!-- <div class="video-box3">
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
        </div> -->
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'VideoTutorialAll',
    data() {
        return {
            videoInfo:[],
        }
    },
    mounted(){
        this.$ajax({
            method:'get',
            // url:'/api/videos?page=&pageSize='
            url:'/api/service/h5/list?keyword=&page=1&pageSize=10'
        })
        .then(res => {
            this.videoInfo = res.data.data;
            console.log(this.videoInfo);
        })
        .catch(function(err){
            console.log(err)
        });
        
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.videotutorialall {
    width:100%;
    min-width: 1200px;
    height:1405px;
    background:rgba(255,255,255,1);
    position: relative;
}
.videotutorialall img {
    width: 100%;
    height: 450px;
    position: absolute;
    top: 0px;
}
.bread {
    position: absolute;
    top: 470px;
    left: 114px;
}
.breadcrumbitem{
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.videotutorialall video {
    width: 370px;
    height: 260px;
}
.icon {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 80px;
  height: 40px;
  color:darkgray;
}
.video-icon {
  text-align: center;
}
.video-box1 {
    position: absolute;
    left: 114px;
    top: 520px;
}
.video-box2 {
    position: absolute;
    left: 36.5%;
    top: 520px;
}
.video-box3 {
    position: absolute;
    left: 64.6%;
    top: 520px;
}
.video-box4 {
    position: absolute;
    left: 114px;
    top: 800px;
}
.video-box5 {
    position: absolute;
    left: 36.5%;
    top: 800px;
}
.video-box6 {
    position: absolute;
    left: 64.6%;
    top: 800px;
}
.video-box7 {
    position: absolute;
    left: 114px;
    top: 1080px;
}
.video-box8 {
    position: absolute;
    left: 36.5%;
    top: 1080px;
}
.video-box9 {
    position: absolute;
    left: 64.6%;
    top: 1080px;
}
</style>