<template>
  <div class="bodys" :style="note">
    <div class="login-body">

      <div class="login-body-title">
        <div class="login-title-img"><img src="/images/ztkj.png" style="width:185px"></div>
        <div class="login-title-text">
          <a href="/register" class="login-register">注册 | </a>
          <a href="/" class="login-return"> 返回首页</a>
        </div>
      </div>

      <div class="login-body-content">
        <h2 class="head-title">找回密码</h2>
        <Form
          :model="formInline"
          :rules="ruleValidate"
          ref="formInline"
          class="formInline"
          label-width="0"
          status-icon
          >
          <FormItem prop="user">
            <i-input v-model="formInline.user"  placeholder="请输入账号/手机号" size="large"></i-input>
          </FormItem>
          <!-- 滑动解锁模块 -->
            <div class="lock">
              <drag-verify 
              :width="286"
              :height="42"
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
          <FormItem prop="verifycode">
            <div class="verifycodeInput">
              <i-input v-model="formInline.verifycode"   placeholder="请输入验证码" size="large" style="width:172px"></i-input>
            </div>
            <div class="verifycodeCount" v-show="ifCount">
              <i-button style="width:104px" size="large" @click="countDown()" >{{content}}</i-button>
            </div>
            <div class="verifycodeCount2" v-show="!ifCount">
              <i-button disabled=false style="width:104px" size="large"  >{{content}}</i-button>
            </div>
          </FormItem>
          <div class="passwordInput">
            <i-input :value.sync="value" :type="pwdTypes"  v-model="formInline.password"  placeholder="请输入新的登录密码"  size="large">
              </i-input>
            <Icon type="ios-eye-outline"  class="icon-me" @click="showPsw()"></Icon>
          </div>
        </Form>
        <div class="findConfirm">
           <i-button type=primary @click="reLogin()" style="width:287px" size="large" :disabled="isClick">确认找回</i-button>  
        </div>

      </div>
      <div class="foot-text">Copyright© 2018赞同科技 | 京ICP备 14027589号-1</div>
    </div>
  </div>
</template>
<script>
  import dragVerify from 'vue-drag-verify'
  export default {
    data () {
      return {
        pwdTypes:"password",
        content: '获取验证码',
			  totalTime: 3,
        canClick: true,
        timer:null,
        ifCount:true,
        formInline: {
          user: "",
          password: "",
          verifycode:""
        },
        ruleValidate: {
          user: [
          { required: true, message: "请输入手机号/用户名", trigger: "blur" }
          ],
          password: [
          { required: true, message: "请输入登录密码", trigger: "blur" }
          ],
          verifycode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
          ]
          
        },
        checked:false,
        note:{
           backgroundImage: "url(" + require("../assets/images/agree-login-background.jpg") + ")",
           backgroundRepeat: "no-repeat",
           backgroundAattachment:"fixed",
           backgroundPosition:"center",
           backgroundSize:"cover"
        }
      }
    },
    methods: {
      reLogin(){
        this.$router.push("/passwordForgetOK");
      },
      countDown(){
        if(!this.canClick) return;
        if(!this.formInline.user){
          alert("请输入手机号");
          return false;
        }else{
          this.content="3s";
          this.ifCount=false;
        }
        this.timer=setInterval(()=>{
          if(this.totalTime>0&&this.totalTime<4){
            this.totalTime--;
            this.content=this.totalTime+'s';
          }else{
            this.content="重新发送";
            clearInterval(this.timer);
            this.timer = null;
            this.ifCount=true;
          }
        },1000);
        this.totalTime=3;
      },
      showPsw(){
        //alert(this.pwdTypes);
          this.pwdTypes = this.pwdTypes === 'password'?'text':'password';
          if(this.seen==true){
            this.seen=false;
          }else{
            this.seen=true;
          }
        }
    },
    computed:{
      isClick(){
        //根据输入框决定按钮是否可点击
        if (!this.formInline.user) {
            return true;
        }else{
            return false;
        }
    },
    },
    components:{
      dragVerify
    }


  }

</script>
<style lang="less" scoped>
.bodys{

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10%;
  .login-body{
    margin-top: 6%;
    .login-body-title{
      width: 427px;
      height: 85px;
      // background: aqua;
      position: relative;

      .login-title-img{  
        display: block;
        float: left;
      }
      .login-title-text{
        display: inline;
        position: absolute;
        right: 0;
        top: 30px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        .login-register{
          display: inline-block;
          margin-right: 10px;
          color:rgba(2, 164, 175, 1);
        }
        .login-return{
          display: inline-block;
          color:rgba(2, 164, 175, 1);
        }
      }
    }
    
    .login-body-content{
      width: 427px;
      // height: 356px;
      background: white;
      box-shadow:0px 2px 40px 0px rgba(248,248,248,1);
      border-radius:4px;
      padding:40px 70px;
      
      .head-title{
        text-align: center;
        margin-bottom: 28px;
      }
      .ivu-form-item.ivu-form-item-required{
        display: block;
      }
      .login-bottom-content{
        margin-bottom: 20px;
        .saveinfo{
          display: block;
          float: left;
        }
        .forgetpsw{
          display: block;
          text-align: right;
        }
      }
      .lock {
        margin: 0px 0 24px;
      // height: 70px;
      // width: 90px;
      }
      .verifycodeInput{
        display: inline;
        
      }
      .verifycodeCount{
        
        float: right;
        .ivu-btn.ivu-btn-default.ivu-btn-large{
          background: rgba(2, 164, 175, 1);
          color: white;
          
        }
      }
      .verifycodeCount2{
         float: right;
        .ivu-btn.ivu-btn-default.ivu-btn-large{
          background:white;
        }
      }
      .passwordInput{
        position: relative;
        display: block;
        margin:0px 0 24px;
        .icon-me{
          position: absolute;
          right: 0;
          font-size:40px;
        }
      }
      .findConfirm{
        .ivu-btn.ivu-btn-primary.ivu-btn-large{
          background: rgba(2, 164, 175, 1);
        }
      }

      
      
    }
    .foot-text{
    padding-top: 28px;
    text-align: center;
    width:372px;
    height:22px;
    font-size:10px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:22px;
  }
  }
}



</style>
