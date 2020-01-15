<template>
<div class="body">
    <div class="head-title">
        <img src="/images/ztkj.png">
    <div class="box-right">
        <span>已有账号，</span>
        <a href="/login">马上登录</a><a href="/">返回首页</a>
        <a class="line" href="#"></a>
    </div>
    </div>
    <div class="register-box">    
    <RegisterOk class="register-body2" v-show="jump"></RegisterOk>
    <div class="register-body" v-show="!jump">
        <div class="body-title">
            <span>创建账户</span>
        </div>
        <div class="register-input">
            <input type="text"  placeholder="请输入手机号码" v-model="phone"  
            @input="$emit('input',$event.target.value)" :error="phone"> 
            <!-- 滑动解锁模块 <Icon type="ios-lock-outline" />-->
            <div class="lock">
                <drag-verify 
            :width="327"
            :height="45"
            handlerIcon='fa fa-lock'
            successIcon='fa fa-unlock-alt'
            text="请将滑块拖动到右侧解锁"
            success-text="已解锁" 
            background="#ddd"
            progress-bar-bg="#2ACBF8"
            text-size="14px"
            :circle="false"
            ref="Verify">
            </drag-verify>
            </div>
            <!-- 验证码模块 -->
                <input type="text" placeholder="请输入短信验证码" v-model="verifyCode" :error="verifyCode">
                <button :disabled="disabled" :btnTitle="btnTitle" @click="getVerifyCode">{{btnTitle}}</button>
            <!-- 设置密码 -->
                <input class="inputpwd" :type="pwdType" @on-change="userPassword"
                v-model="userPassword"  placeholder="8-12位密码，字母/数字/符号至少两种">
                <img class="pwdeye" title="点击隐藏或显示密码"  :src="seen?openeye:nopeneye" alt="" @click="toShowCode">
        </div>
        <div class="agreement">
            <input type="checkbox" id="agreement-check" style="width:14px;height:14px;background:rgba(115,215,225,1);border-radius:1px;">
            <p>我已阅读并同意<a href="#">《开放平台用户注册协议》</a>
            </p>
        </div>
        <button class="create-btn" :disabled="isClick" @click="goLogin">创建用户</button>
    </div>
    
</div>
<div class="foot-font"><p>Copyright© 2018赞同科技|京ICP备 14027589号-1</p></div>
</div>
</template>
<script>
import dragVerify from 'vue-drag-verify'//滑动解锁插件
import RegisterOk from './RegisterOk'
export default {
    name: 'register',
    data(){
        return{
        phone: "",
        verifyCode: "",
        error: "",
        disabled: false,
        btnTitle:'获取验证码',
        //密码明文功能数据
        seen:'',
        pwdType: 'password', // 密码类型
        openeye: require('@/assets/icon-visible.png'), //图片地址
        nopeneye: require('@/assets/icon-invisible.png'), //图片地址
        userPassword:'',
        //跳转属性
        jump:false,
        }
    },
    methods: {
        goLogin(){
            if(this.validateVcode()) {
                this.jump = !this.jump
                console.log('密码验证码正确');
            } else {
                this.validateVcode();
            }
        },
        //获取验证码
        getVerifyCode() {
            if (this.$refs.Verify.isPassing) {
                if (this.validatePhone()) {
                //发送请求
                this.validateBtn();
                this.$axios.post("/api/posts/sms_send",{
                    tpl_id:"187067",
                    key:"cb996fedda147f3fc8f629aca14c73d9",
                    phone:this.phone
                })
                .then(res => {
                    console.log(res);
                });
            }
            } else {
                this.error = '请先滑动解锁!'
                this.showError();
            }
        },
        //“获取验证码按钮”
        validateBtn(){
            let time = 60;
            let timer = setInterval(() => {
                if (time == 0) {
                    clearInterval(timer);
                    this.btnTitle = "获取验证码";
                    this.disabled = false;
                } else {
                    this.btnTitle = time +"秒后重试";
                    this.disabled = true;
                    time--;
                }
            },1000);
        },
        //手机号码格式验证
        validatePhone() {
            if (!this.phone) {
                this.error = 
                    "手机号码不能为空!" ;
                    this.showError();
                return false;
            } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
                this.error = 
                    "请填写正确的手机号码!";
                    this.showError();
                return false;
            } else {
                this.error = '';
                return true;
            }
        },
        //验证码、密码格式、协议勾选验证
        validateVcode() {
            if (!this.verifyCode) {
                this.error = 
                    "请输入验证码!" ;
                    this.showError();
                return false;
            } else if (!/^[a-zA-Z0-9]{6}$/.test(this.verifyCode)) {
                this.error = 
                    "验证码错误!";
                    this.showError();
                return false;
            } else if(!document.getElementById('agreement-check').checked) {
                this.error = "请勾选用户注册协议！"
                this.showError();
            }else {
                this.error = '';
                return true;
            }
        },
       //密码明文变化
        toShowCode () {
            this.pwdType = this.pwdType === 'password'?'text':'password';
            this.seen = !this.seen;//小眼睛的变化
        },
        //错误提示弹出
        showError(){
            this.$Message.error(this.error);
        }
    },
    computed:{
        isClick(){
            // var checkstate = document.getElementById('agreement-check');
            // console.log(checkstate);
            //根据输入框决定按钮是否可点击
            if (!this.phone || !this.verifyCode) {
                return true;
            }else{
                return false;
            }
        },
    },
    components:{
    dragVerify,
    RegisterOk
  }
}


</script>

<style scoped>
@import url("../assets/styles/font/font.css");
.body{
    width: 100%;
    min-width: 1200px;
    background:rgba(240,240,240,1);
    text-align: center;
    height: 900px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.head-title {
    width: 711.5px;
    height: 85px;
    display: table;
    margin: 0 auto;
    position: relative;
    top: 60px;
}
.head-title img{
    width: 185px;
    height: 100%;
    position: absolute;
    left: 0px;
}
.box-right {
    width: 214px;
    position: absolute;
    height:28px;
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    right: 0px;
}
.box-right span {
    position: absolute;
    width:71px;
    color:rgba(29,31,49,1);
    line-height:28px;
    left: 0px;
    bottom: -30px;
}
.box-right a:nth-of-type(1) {
    position: absolute;
    color:rgba(2,164,175,1);
    line-height:28px;
    left: 71px;
    bottom: -30px;
}
.box-right a:nth-of-type(2) {
    position: absolute;
    color:rgba(2,164,175,1);
    line-height:28px;
    right: 0px;
    bottom: -30px;
}
.line {
    position: absolute;
    width:1px;
    height:10px;
    background:rgba(2,164,175,1);
    border-radius:1px;
    right: 70px;
    bottom: -23px;
}
.register-box {
    width:711.5px;
    background:rgba(240,240,240,1);
    display: table;
    margin: 0 auto;
}
.register-body {
    position: relative;
    width:711px;
    height:520px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 40px 0px rgba(248,248,248,1);
    border-radius:10px;
    display: table;
    margin: 0 auto;
    top: 60px;

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
.register-input input{
    position: relative;
    background:rgba(248,248,248,1);
    border-radius:4px;
    border:1px solid rgba(213,213,213,1);
}
.register-input input:nth-of-type(1){
    position: relative;
    width:327px;
    height:45px;   
    margin-left: auto;
    margin-right: auto;
    top: 120px;
}
.lock {
    position: relative;
    top: 140px;
    display: table;
    margin: 0 auto;
}
.register-input input:nth-of-type(2){
    position: relative;
    width:200px;
    height:45px;
    top: 160px;
    left: -62px;
}
.register-input input:nth-of-type(3){
    position: relative;
    width:327px;
    height:45px;
    display: table;
    margin: 0 auto;
    top: 170px;
}
.register-input button {
    border: none;
    position: absolute;
    width:110px;
    height:45px;
    background:rgba(115,215,225,1);
    border-radius:4px;
    top: 250px;
    right: 190px;
}
.register-body img:nth-of-type(1) {
    width:25px;
    height:15px;
    position: absolute;
    left: 480px;
    bottom: 180px;
}
.agreement {
    position: relative;
    width: 327px;
    margin-right: auto;
    margin-left: auto;
    top: 190px;
}
.agreement input{
    position: absolute;
    left: 5px;
}
.agreement p {
    width:300px;
    height:22px;
    font-size:0.8em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    line-height:22px;
    position: absolute;
    top: -5px;
    left: 14px;
}
.create-btn {
    border: none;
    width:327px;
    height:45px;
    background:rgba(115,215,225,1);
    border-radius:4px;
    position: relative;
    top: 234px;
}
.invalid-feedback {
    padding-top: 5px;
    color: red;
    position: absolute;
    width:304px;
    height:22px;
    font-size:16px;
    top:180px;
    left: 430px;
}
.foot-font {
    width:372px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:22px;
    position: relative;
    top: 117px;
    display: table;
    margin: 0 auto;
}
input::-webkit-input-placeholder{
    position: relative;
    left: 20px;
    font-size: 5px;
}
</style>
