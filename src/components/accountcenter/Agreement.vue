<template>
<!-- 我的协议 -->
<div>
<div class="myagreements">
    <!-- 无协议 -->
    <div class="noagreement" v-if="state">
        <img src="@/assets/images/havenothing.png" >
        <p>还没有已签的协议</p>
    </div>
    <!-- 有协议 -->
    <div class="hasagreement" v-if="!state">
        <span class="head-text">已签协议</span>
        <router-link to="/accountcenter/acc"><button class="btn-look">查看</button></router-link>
        <p class="agreement-index1">{{agreementInfo.index1}}</p><span class="agreement-title1">{{agreementInfo.title1}}</span>
        <p class="agreement-index2">{{agreementInfo.index2}}</p><span class="agreement-title2">{{agreementInfo.title2}}</span>
    </div>
</div>
</div>
</template>

<script>
export default {
    name:'Agreement',
    data() {
        return {
            agreementInfo: {
                index1: '协议一',
                title1: '开发平台用户注册协议',
                index2: '协议二',
                title2: '开发者入住协议'
            },
            state:false
        }
    }
}
</script>

<style  scoped>
@import url("../../assets/styles/font/font.css");

.myagreements {
    width: 62.5%;
    height: 1000px;
    height:auto;
    min-height:400px;
    position: relative;
    left: 18.75%;
    text-align: center;
}
.test{
    height: 200px;
    width: 100%;
    background-color: aqua;
    position: relative;
    /* top: 400px; */
}
.noagreement img {
    height: 115px;
    width: 17%;
    display: table;
    margin: 0 auto;
    position: relative;
    top: 100px
}
.noagreement p{
    font-size: 1.375em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: relative;
    top: 130px;
    display: table;
    margin: 0 auto;
}
.head-text {
    font-size: 1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:28px;
    position: absolute;
    left: 10%;
    top: 10%;
}
.btn-look {
    width:6%;
    height:30px;
    background:rgba(2,164,175,1);
    border-radius:2px;
    position: absolute;
    top: 8%;
    right: 5%;
    border: none;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.hasagreement p{
    font-size:1.15em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: absolute;
    left: 11.7%;
}
.hasagreement span:nth-of-type(2),
.hasagreement span:nth-of-type(3) {
    font-size:1.15em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    position: absolute;
    left: 25%;
}
.agreement-index1 {
    top: 100px;
}
.agreement-index2 {
    top: 150px;
}
.agreement-title1 {
    top: 100px;
}
.agreement-title2 {
    top: 150px;
}
</style>