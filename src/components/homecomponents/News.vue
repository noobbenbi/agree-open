<template>
<!-- 新闻动态 -->
<div class="news">
    <div class="center">
        <span class="center-title">新闻动态</span>
        <span class="center-line"></span>
    </div>
    <img class="news-img" src="@/assets/images/af0fafbfbbea3526469e6c5af4dada0f.png" >
    <div class="news-content-top">
        <span class="day-of-time">{{day}}</span>
        <span class="yearmon-of-time">{{time}}</span>
        <p class="news-title">{{newsTitle}}</p>
        <p class="news-detail">{{newsDetail}}</p>
        <a href="#">查看更多</a>
    </div>
    <div class="news-content-bottom">
        <span class="day-of-time">{{day}}</span>
        <span class="yearmon-of-time">{{time}}</span>
        <p class="news-title">{{newsTitle}}</p>
        <p class="news-detail">{{newsDetail}}</p>
        <a href="#">查看更多</a>
    </div>
</div>
</template>

<script>
export default {
    name:'News',
    data () {
        return {
            day :'21',
            time :'2019.08',
            newsTitle:'温州银行服务平台正式......',
            newsDetail:'近年来随着互联网技术的发展，对金融服务的开放需求日趋强烈，同时金融服务必须融入更多的应用场景，才能满足多样化的客户需求......'
        }
    }
}
</script>

<style  scoped>
@import url("../../assets/styles/font/font.css");
.news {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 0px;
    padding-bottom: 45%;
}
.center-title {
    font-size:1.56em;
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
    top: 75px;
    display: table;
    margin: 0 auto;
}
.news-img {
    position: absolute;
    width: 38%;
    height: 58%;
    right: 52%;
    bottom: 11.57%;
}
.news-content-top {
    width: 43.5%;
    height: 26.6%;
    position: absolute;
    left: 48.17%;
    bottom: 42.82%;
}
.news-content-bottom {
    width: 43.5%;
    height: 26.6%;
    position: absolute;
    left: 48.17%;
    bottom: 11.57%;
}
.day-of-time {
    font-size: 1.875em;
    position: absolute;
    top: 25.65%;
    left: 10.42%;
}
.yearmon-of-time {
    font-size: 1em;
    position: absolute;
    top: 62.17%;
    left: 9.6%;
}
.news-title {
    font-family:PingFangSC-Medium,PingFang SC;
    font-size: 1.3em;
    position: absolute;
    top: 15.2%;
    left: 35.45%;
    font-weight:600;
}
.news-detail{
    position: absolute;
    top: 42.17%;
    left: 35.45%;
    width:57.36%;
    height:36.5%;
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(155,155,155,1);
    line-height:28px;
}
.news-content-top a ,
.news-content-bottom a {
    position: absolute;
    top: 82.74%;
    left: 85.15%;
    font-size:0.8em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(2,164,175,1);
    line-height:22px;
}
</style>