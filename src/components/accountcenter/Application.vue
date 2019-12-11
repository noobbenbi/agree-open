<template>
<!-- 我的应用 -->
<div class="myapplication">
    <!-- 无应用 -->
    <div class="noapplication" v-if="state">
        <img src="@/assets/images/havenothing.png" >
        <p>还没有创建任何应用</p>
    </div>
    <!-- 有应用 -->
    <div class="hasapplication" v-if="!state">
        <span class="app-name">{{appInfo.appName}}</span>
        <router-link to="/accountcenter/acc"><button class="btn-look">查看</button></router-link>
        <p class="appid-title">APPID:</p>
        <p class="appid">{{appInfo.appId}}</p>
        <p class="rsa2-title">RSA2密钥:</p>
        <p class="rsa2">{{appInfo.RSA2}}</p>
        <p class="aes-title">AES加密:</p>
        <p class="aes">{{appInfo.AES}}</p>
        <p class="authorization-callback-title">授权回调地址:</p>
        <p class="authorization-callback">{{appInfo.callbackAddr    }}</p>
    </div>
</div>
</template>

<script>
export default {
    name:'Application',
    data() {
        return {
            appInfo: {
                appName:'生活服务TEST',
                appId: '4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                RSA2: '应用公钥 平台公钥',
                AES: 'AES密钥',
                callbackAddr: '*********'
            },
            state:false
        }
    }
}
</script>

<style  scoped>
@import url("../../assets/styles/font/font.css");
.myapplication {
    width: 62.5%;
    height: 35%;
    position: absolute;
    top: 53%;
    left: 18.75%;
}
.noapplication p{
    font-size: 1.375em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: absolute;
    top: 71%;
    left: 41.6%;
}
.noapplication img {
    height: 40%;
    width: 17%;
    position: absolute;
    top: 26.25%;
    left: 43.76%;
}
.app-name {
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
    height:9%;
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
.hasapplication p:nth-of-type(1),
.hasapplication p:nth-of-type(3),
.hasapplication p:nth-of-type(5),
.hasapplication p:nth-of-type(7){
    font-size:1.25em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: absolute;
}
.hasapplication p:nth-of-type(2),
.hasapplication p:nth-of-type(4),
.hasapplication p:nth-of-type(6),
.hasapplication p:nth-of-type(8){
    font-size:1.25em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    position: absolute;
    left: 25%;
}
.appid-title {
    left: 12.4%;
    top: 32%;
}
.rsa2-title {
    left: 9%;
    top: 49%;
}
.aes-title {
    left: 10.3%;
    top: 66%;
}
.authorization-callback-title {
    left: 5.77%;
    top: 83%;
}
.appid {
    top: 31.75%;
}
.rsa2 {
    top: 49%;
}
.aes {
    top: 66%;
}
.authorization-callback {
    top: 83%;
}
</style>