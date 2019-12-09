<template>
<div class="register-box">
    <img src="/images/ztkj.png">
    <div class="box-right">
        <span>已有账号，</span>
        <a href="/login">马上登录</a><a href="/">返回首页</a>
        <a class="line" href="#"></a>
    </div>
    <RegisterOk class="register-body2" v-show="jump"></RegisterOk>
    <div class="register-body" v-show="!jump">
        <div class="body-title">
            <span>创建账户</span>
        </div>
        <div class="register-input">
            <input type="text"  placeholder="请输入注册的手机号码" v-model="phone"  
            @input="$emit('input',$event.target.value)" :error="phone"> 
            <!-- 滑动解锁模块 -->
            <div class="lock">
                <drag-verify 
            :width="460"
            :height="60"
            handlerIcon='fa fa-angle-double-right'
            successIcon='fa fa-check'
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
                <!-- <input class="inputpwd" id="pwd" type="password" placeholder="8-12位密码，字母/数字/符号至少两种">
                <img class="pwdeye" title="点击隐藏或显示密码" src="/images/icon-invisible.png" @click="toShowCode"> -->
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
        <div v-if="error" class="invalid-feedback">{{error}}</div>
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
                return false;
            } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
                this.error = 
                    "请填写正确的手机号码!";
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
                return false;
            } else if (!/^[a-zA-Z0-9]{6}$/.test(this.verifyCode)) {
                this.error = 
                    "验证码错误!";
                return false;
            } else if(!document.getElementById('agreement-check').checked) {
                this.error = "请勾选用户注册协议！"
            }else {
                this.error = '';
                return true;
            }
        },
       //密码明文变化
        toShowCode () {
            this.pwdType = this.pwdType === 'password'?'text':'password';
            this.seen = !this.seen;//小眼睛的变化
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
.register-box {
    width:1920px;
    /* width: auto; */
    height:1080px;
    background:rgba(240,240,240,1);
}
.register-box img:nth-of-type(1) {
    position: absolute;
    width:260px;
    height:120px;
    top: 82px;
    right: 1225px;
    left: 435px;
    bottom: 878px;
}
.box-right {
    position: absolute;
    height:28px;
    font-size:20px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    top: 134px;
    bottom: 918px;
}
.box-right span {
    position: absolute;
    width:100px;
    color:rgba(29,31,49,1);
    line-height:28px;
    left: 1160px;
    right: 660px;
}
.box-right a:nth-of-type(1) {
    position: absolute;
    width:100px;
    color:rgba(2,164,175,1);
    line-height:28px;
    left: 1260px;
    right: 580px;;
}
.box-right a:nth-of-type(2) {
    position: absolute;
    width:80px;
    color:rgba(2,164,175,1);
    line-height:28px;
    left: 1380px;
    right: 460px;
}
/* .box-right a:nth-of-type(3) { */
.line {
    position: absolute;
    width:1px;
    height:14px;
    background:rgba(2,164,175,1);
    border-radius:1px;
    top: 7px;
    /* bottom: 918px; */
    left: 1359px;
    right: 560px;
}
.register-body2 {
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
}
.register-body {
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
}
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
.register-input input:nth-of-type(1){
    position: absolute;
    width:460px;
    height:60px;
    background:rgba(248,248,248,1);
    border-radius:4px;
    border:1px solid rgba(213,213,213,1);
    top: 170px;
    right: 270px;
    left: 270px;
    bottom: 444px;
}
.lock {
    position: absolute;
    top: 250px;
    right: 270px;
    left: 270px;
    bottom: 340px;
    
}
.register-input input:nth-of-type(2){
    position: absolute;
    width:280px;
    height:60px;
    background:rgba(248,248,248,1);
    border-radius:4px;
    border:1px solid rgba(213,213,213,1);
    top: 330px;
    right: 450px;
    left: 270px;
    bottom: 284px;
}
.register-input input:nth-of-type(3){
    position: absolute;
    width:460px;
    height:60px;
    background:rgba(248,248,248,1);
    border-radius:4px;
    border:1px solid rgba(213,213,213,1);
    top: 410px;
    right: 270px;
    left: 270px;
    bottom: 204px;
}
.register-input button {
    border: none;
    position: absolute;
    width:160px;
    height:60px;
    background:rgba(115,215,225,1);
    border-radius:4px;
    top: 330px;
    right: 270px;
    left: 570px;
    bottom: 284px;
}
.register-body img:nth-of-type(1) {
    width:40px;
    height:25px;
    position: absolute;
    left: 670px;
    right: 290px;
    top: 430px;
    bottom: 219px;
}
.agreement input{
    position: absolute;
    top: 505px;
    bottom: 155px;
    left: 275px;
    right: 711px;
}
.agreement p {
    width:354px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    line-height:22px;
    position: absolute;
    top: 500px;
    bottom: 160px;
    left: 304px;
    right: 392px;
}
.create-btn {
    border: none;
    width:460px;
    height:60px;
    background:rgba(115,215,225,1);
    border-radius:4px;
    position: absolute;
    top: 554px;
    bottom: 60px;
    left: 270px;
    right: 270px;
}
.invalid-feedback {
    padding-top: 5px;
    color: red;
    position: absolute;
    width:304px;
    height:22px;
    font-size:16px;
    top:180px;
    left: 730px;
}
.foot-font {
    width:372px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:22px;
    position: absolute;
    top: 917px;
    bottom: 141px;
    left: 770px;
    right: 778px;
}
</style>