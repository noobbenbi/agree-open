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
        <div class="body-text">
          <img class="circle" src="/images/circle.jpg" alt="">
          <h2>找回密码成功</h2>
        </div>
        <i-button type=primary @click="reLogin()" style="width:287px" size="large" >前往登陆</i-button>  
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
        this.$router.push("/login2");
      },
    },
    components:{
      dragVerify
    }
  }

</script>
<style lang="less" scoped>
.ivu-btn.ivu-btn-primary.ivu-btn-large{
    background: rgba(2, 164, 175, 1);
  }
.bodys{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30%;
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
      .body-text{
        text-align: center;
        margin-bottom: 60px;
        .circle{
          margin: 40px 0 40px;
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
