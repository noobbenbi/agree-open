<template>
<!-- 我的应用 -->
<div>
<div class="myapplication">
    <!-- 无应用 -->
    <div class="noapplication" v-if="state">
        <img src="@/assets/images/havenothing.png" >
        <p>还没有创建任何应用</p>
    </div>
    <!-- 有应用 -->
        <div class="hasapplication" v-if="!state" v-for="(item,index) in appInfo" :key="index">
            <span class="app-name">{{item.appName}}</span>
            <button class="btn-look">查看</button>
            <p class="appid-title">APPID:</p>
            <p class="appid">{{item.appId}}</p>
            <p class="rsa2-title">RSA2密钥:</p>
            <p class="rsa2">{{item.RSA2}}</p>
            <p class="aes-title">AES加密:</p>
            <p class="aes">{{item.AES}}</p>
            <p class="authorization-callback-title">授权回调地址:</p>
            <p class="authorization-callback">{{item.callbackAddr    }}</p>
        </div>
</div>
</div>
</template>

<script>
export default {
    name:'Application',
    data() {
        return {
            appInfo: [
                {
                appName:'生活服务TEST',
                appId: '4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                RSA2: '应用公钥 平台公钥',
                AES: 'AES密钥',
                callbackAddr: '*********'
                },
                {
                appName:'生活服务TEST',
                appId: '4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                RSA2: '应用公钥 平台公钥',
                AES: 'AES密钥',
                callbackAddr: '*********'
                },
            ],
            state:false
        }
    }
}
</script>

<style  scoped>
@import url("../../assets/styles/font/font.css");
.myapplication {
    width: 62.5%;
    height: 1000px;
    height:auto;
    padding-bottom: 50px;
    min-height:300px;
    margin-bottom: 50px;
    position: relative;
    top: 30px;
    left: 18.75%;
    box-shadow: 0 0 20px 15px rgba(241, 235, 235, 0.3);

}
.noapplication p{
    font-size: 1.375em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: relative;
    display: table;
    margin: 0 auto;
    top: 130px;
}
.noapplication img {
    height: 40%;
    width: 17%;
    position: relative;
    top: 100px;
    display: table;
    margin: 0 auto;
}
.hasapplication {
    position: relative;
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
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
    height:30px;
    background:rgba(2,164,175,1);
    position: absolute;
    top: 32px;
    right: 5%;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.hasapplication p:nth-of-type(1),
.hasapplication p:nth-of-type(3),
.hasapplication p:nth-of-type(5),
.hasapplication p:nth-of-type(7){
    font-size:1.15em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: absolute;
}
.hasapplication p:nth-of-type(2),
.hasapplication p:nth-of-type(4),
.hasapplication p:nth-of-type(6),
.hasapplication p:nth-of-type(8){
    font-size:1.15em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    position: absolute;
    left: 25%;
}
.appid-title {
    left: 12.4%;
    top: 100px;
}
.rsa2-title {
    left: 9%;
    top: 150px;
}
.aes-title {
    left: 10.3%;
    top: 200px;
}
.authorization-callback-title {
    left: 5.77%;
    top: 250px;
}
.appid {
    top: 100px;
}
.rsa2 {
    top: 150px;
}
.aes {
    top: 200px;
}
.authorization-callback {
    top: 250px;
}
</style>