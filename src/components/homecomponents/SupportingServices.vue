<template>
<!-- 配套服务 -->
<div class="supportingservices">
    <div class="center">
        <span class="center-title">配套服务</span>
        <span class="center-line"></span>
    </div>
    <img class="img-one" src="@/assets/images/abstract-art-blur-bright-373543@2x.png">
    <img class="img-two" src="@/assets/images/abstract-art-blur-bright-373543备份 2.png">
    <img class="img-three" src="@/assets/images/abstract-art-blur-bright-373543备份.png">
    <div class="text-one">
        <a class="text-title" href="/devaccess/accessguidedetail">接入指南</a>
        <span></span>
        <p>{{msg}}</p>
    </div>
    <div class="text-two">
        <a class="text-title" href="/documentcenter">文档中心</a>
        <span></span>
        <p>{{msg}}</p>
    </div>
    <div class="text-three">
        <a class="text-title" href="/devhelp">帮助与支持</a>
        <span></span>
        <p>{{msg}}</p>
    </div>
</div>
</template>

<script>
export default {
    name:'SupportingServices',
    data() {
        return {
            msg:'金融场景化业务产品和多种 理财产品，为客户流动资金创造更大价值'
        }
    }
}
</script>

<style scoped>
@import url("../../assets/styles/font/font.css");
.supportingservices {
    width: 100%;
    min-width: 1200px;
    height: 0px;
    padding-bottom: 47%;
    position: relative;
    background-image: url('../../assets/images/accounting-analytics-balance-black-and-white-209224.png');
}
.center-title {
    font-size:1.6em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
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
.supportingservices img {
    width: 27.1%;
    height: 28.76%;
}
.img-one {
    position: absolute;
    top: 29.2%;
    left: 8.5%;
}
.img-two {
    position: absolute;
    top: 29.2%;
    left: 64.8%;
}
.img-three {
    position: absolute;
    top: 58%;
    left: 36.667%;
}
.text-one,
.text-two,
.text-three {
    width:27.1%;;
    height:28.76%;
    background-color:rgba(255,255,255,1);
}
.text-one {
    position: absolute;
    top: 58%;
    left: 8.5%;
}
.text-two {
    position: absolute;
    top: 29.2%;
    left: 36.667%;
}
.text-three {
    position: absolute;
    top: 58%;
    left: 64.8%;
}
.text-title {
    position: absolute;
    top: 15.4%;
    left: 11.54%;
    font-size:1.3em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    transition:0.2s;
}
.text-title:hover {
    color: rgba(2,164,175,1);
}
.text-one span,
.text-two span,
.text-three span {
    position: absolute;
    top: 40%;
    left: 11.54%;
    width:40px;
    height:3px;
    background:rgba(2,164,175,1);
}
.text-one p,
.text-two p,
.text-three p{
    position: absolute;
    top: 45.7%;
    left: 11.54%;
    width:200px;
    height:84px;
    font-size:1em;
    font-family:"PingFangSC-Regular",PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:28px;
}
</style>