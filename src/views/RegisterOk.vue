<template>
<div class="register-body">
        <div class="body-title">
            <span>创建账户</span>
        </div>
        <img class="circle" src="/images/circle.jpg" alt="">
        <!-- <span class="circle"></span> -->
        <span class="success-text">账户创建成功</span>
        <button class="gologin-btn" @click="goLogin">快速登录</button>
</div>
</template>

<script>
export default {
    name:"RegisterOk",
    methods: {
        goLogin() {
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
/* .register-body {
    position:absolute;
    width:1000px;
    height:674px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 40px 0px rgba(248,248,248,1);
    border-radius:10px;
    top: 203px;
    right: 460px;
    left: 460px;
    bottom: 203px;
} */
.body-title {
    position: absolute;
    width:1000px;
    height:100px;
    background:rgba(29,31,49,1);
    border-radius:10px 10px 0px 0px;
    border:1px solid rgba(151,151,151,1);
    bottom: 574px;
}
.body-title span {
    position: absolute;
    width:104px;
    height:37px;
    font-size:26px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:37px;
    top: 31px;
    right: 448px;
    left: 448px;
    bottom: 32px;
}
.circle {
    position: absolute;
    /* width:130px;
    height:130px; */
    /* border:6px solid rgba(184,233,134,1); */
    left: 435px;
    top: 141px;
}
.success-text {
    position: absolute;
    width:192px;
    height:45px;
    font-size:32px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    top: 306px;
    left: 404px;
}
.gologin-btn {
    border: none;
    width:460px;
    height:60px;
    background:rgba(2,164,175,1);
    border-radius:4px;
    position: absolute;
    top: 394px;
    left: 270px;
}
</style>