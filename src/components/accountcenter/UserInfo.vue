<template>
<!-- 我的资料 -->
<div class="userinfo">
        <span class="head-text">基本资料</span>
        <button class="btn-Certification">认证</button>
        <button class="btn-modify">修改</button>
        <p class="account-title">{{agreementInfo.index1}}</p><span class="user-account">{{agreementInfo.title1}}</span>
        <p class="state-title">{{agreementInfo.index2}}</p><span class="state-text">{{agreementInfo.title2}}</span>
        <p class="pwd-title">{{agreementInfo.index3}}</p><span class="password">{{agreementInfo.title3}}</span>
</div>
</template>

<script>
export default {
    name:'UserInfo',
    data() {
        return {
            agreementInfo: {
                index1: '注册帐号',
                title1: '17765343546',
                index2: '认证状态',
                title2: '未认证',
                index3: '登录密码',
                title3: '**********'
            },
            state:false
        }
    }
}
</script>

<style  scoped>
@import url("../../assets/styles/font/font.css");
.userinfo {
    width: 62.5%;
    height: 35%;
    position: absolute;
    top: 53%;
    left: 18.75%;
}
.head-text {
    font-size: 1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:28px;
    position: absolute;
    left: 5%;
    top: 10%;
}
.userinfo button {
    width:6%;
    height:9%;
    background:rgba(2,164,175,1);
    border-radius:2px;
    position: absolute;
    top: 8%;
    border: none;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.btn-Certification {
    left: 82.5%;
}
.btn-modify {
    left: 89.16%;
}
.account-title,
.state-title,
.pwd-title {
    font-size:1.25em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: absolute;
    left: 5%;
}
.account-title {
    top: 32%;
}
.state-title {
    top: 49%;
}
.pwd-title {
    top: 66%;
}
.user-account {
    position: absolute;
    top: 31.75%;
    left: 16.7%;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    font-size: 1.25em;
}
.state-text {
    position: absolute;
    top: 49%;
    left: 16.7%;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,179,0,1);
    font-size: 1.25em;
}
.password {
    position: absolute;
    top: 67%;
    left: 16.7%;
}
</style>