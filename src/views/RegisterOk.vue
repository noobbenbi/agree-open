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
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
.register-body {
    position:relative;
    width:711px;
    height:320px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 40px 0px rgba(248,248,248,1);
    border-radius:10px;
    top: 60px;
    display: table;
    margin: 0 auto;
}
.body-title {
    position: absolute;
    width:100%;
    height:71px;
    background:rgba(29,31,49,1);
    border-radius:10px 10px 0px 0px;
    border:1px solid rgba(151,151,151,1);
    top: 0px;
}
.body-title span {
    position: relative;
    width:104px;
    height:37px;
    font-size:1.4em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:37px;
    display: table;
    margin: 0 auto;
    top: 15px;
}
.circle {
    position: relative;
    text-align: center;
    top: 100px;
}
.success-text {
    position: relative;
    width:192px;
    height:45px;
    font-size:2em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    display: table;
    margin: 0 auto;
    top: 150px;
}
.gologin-btn {
    border: none;
    width:327px;
    height:45px;
    background:rgba(2,164,175,1);
    border-radius:4px;
    position: relative;
    top: 200px;
}
</style>