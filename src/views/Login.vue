<template>
  <div>
    <!-- <div class="login_background"> -->
      
    <div class="login_body">
      <div class="login_body_title1"> 
       
        <!-- <img src="@/assets/images/head-logo.png" width="190px"> -->
        
      </div>
      <div class="login_body_title2"> 
        <a href="/" class="login-register-item">注册 | </a>
        <a href="/" class="login-register-item"> 返回首页</a>
        
      </div>
      
      
      <div class="login_body_content">
        
        
        <div class="login_container">
          
          <Form
            class="login-form"
            id="login_form"
            :rules="ruleValidate"
            ref="formInline"
            :model="formInline"
          >
            <h2 class="title">欢迎登陆</h2>
            <FormItem prop="user">
              <i class="iconfont icon-denglu"></i>
              <Input v-model="formInline.user" placeholder="请输入手机号/用户名"></Input>
            </FormItem>

            <FormItem prop="password">
              <i class="iconfont icon-mima"></i>
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="请输入登录密码"
              ></Input>
            </FormItem>

            <!-- <FormItem prop="verifycode">
              <Input
                type="text"
                v-model="formInline.verifycode"
                placeholder="请输入验证码"
                class="verifycode"
              ></Input>  
            </FormItem>  -->
            
            <FormItem>
              <Button type="dashed" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>

            <div class="f-clearfix">
              <!-- 注册 -->
              <div class="f-sm-font f-fl">
                <label><input name="Autologin" type="checkbox" value="" v-model="checked" />保存账号和密码 </label> 
              </div>
              <!-- 找回密码 -->
              <div class="f-sm-font f-fr">
                <a
                  class="link"
                  href="/retrievePassword"
                  rel="noopener noreferrer"
                  style="color:@themeColor"
                  @click="clearCookie()" 
                >忘记密码？</a>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
// import { login } from "../request/api.js"; // 导入api接口


export default {
  name: "login2",
  data() {
    return {
      checked:false,
      formInline: {
        user: "",
        password: "",
        verifycode: ""
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
      }
    };
  },
  components: {
   
    
  },
  mounted(){
    this.getCookie();

  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          alert("登陆成功");
          const self=this;
          
          //判断自动登陆是否被勾选
          if(this.checked==true){
            //若勾选自动登陆，传入账号，密码，保存时间 3个参数
            console.log(222);
            self.setCookie(self.formInline.user,self.formInline.password,30);
            console.log(111);
          }else{
            console.log("清空Cookie");
            //如果未勾选自动登陆，则清空Cookie
            self.clearCookie();
          }
          // login({
          //   memberName: this.formInline.user,
          //   password: this.formInline.password
          // }).then(res => {
          //   if (res.status.code == "200") {
          //     localStorage.setItem("ms_username", this.formInline.user);
               this.$router.push("/");
          //   } else {
          //     this.$alert("账号或密码错误！请检查后重试");
          //   }
          // });
        } else {
          this.$Message.error("请输入账号或密码!");
          return false;
        }
      });
    },
        //设置Cookie
        setCookie(name,pwd,days){
          var exdate=new Date();
          
          exdate.setTime(exdate.getTime()+24*60*60*1000*days);//计算保存的天数
          console.log(333);
          

          //字符串拼接cookie
        window.document.cookie="user"+"="+name+";path=/expires";
        
          console.log(444);
          window.document.cookie="password"+"="+pwd+";path=/expires";
        },
        //读取cookie
        getCookie:function(){
          if(document.cookie.length>0){
            var arr=document.cookie.split(';');
            for(var i=0;i<arr.length;i++){
              var arr2=arr[i].split('=')//根据“=”再次分割
            }
            //判断查找对应的值
            if(arr2[0]=='user'){
              console.log(arr2[1]);
              this.formInline.user=arr2[1];
            }else if(arr2[0]=='password'){
              console.log(arr2[1]);
              this.formInline.password=arr2[1];
            }
            this.checked=true;
          }
          
        },
        //清除cookie
        clearCookie:function(){
          this.setCookie("","",-1);
        }


  }
};
</script>
<style lang="less" scoped>
@import "../assets/styles/variables.less";

// .login_background {
//         background-image: url("../assets/images/productCapability1.png");
//         }
.login_body_title1{
  position: absolute;
  width: 190px;
  height: 120px;
  left: 630px;
  top: 159px;
}

.login_body_title2{
  position: absolute;
  width: 190px;
  height: 60px;
  top: 169px;
  left: 1128px;
}


.img{
  width: 100%
}
.login_body {
  
  width: 1920px;
  height: 1080px;
  position: absolute;
  min-width: 50%;
  background-color: rgba(29,31,49,1);
  background-color:gray;
  background-image: url(/imgupload/login/about-banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  
  .login_body_content {
    
    padding-top: 439px;
padding-left: 659px;

    height: 500px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .login_container {
      border-radius:10px;
      width: 600px;
      height: 500px;
      position: relative;
      top: 0px;
      right: 690px;
      padding: 32px 40px;
      background-color: #fff;
      box-sizing: border-box;
      min-height: 380px;
      .login-form {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        line-height: 1;
        .title {
          top: 60px;
          font-size: 24px;
          font-weight: 600;
          color: #101010;
          padding: 0;
          text-align: center;
        }
        .ivu-form-item {
          margin: 22px 0;
          display: block;
          .iconfont {
            position: absolute;
            z-index: 2;
            left: 10px;
            top: 2px;
            color: @borderColor;
            
            
          }
          /deep/.ivu-input {
            height: 37px;
            padding-left: 32px;
          }
          // .verifycode {
          //   width: 160px;
          //   display: inline-block;
          //   vertical-align: middle;
          //   height: 40px;
          //   /deep/.ivu-input {
          //     padding-left: 10px;S
          //   }
          // }
         
          /deep/.ivu-btn {
            color: @bgColor !important;
            background-color: @spanColor !important;
            background-color: yellow;
            border: none !important;
            display: block;
            margin: 0 auto;
            width: 100%;
            height: 50px;
            font-size: 16px;
            line-height: 36px;
          }
        }
        .f-clearfix {
          zoom: 1;
          .f-sm-font {
            font-size: 12px;
            a {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
