<template>
  <div class="bodys" :style="note">
    <div class="login-body">
      <div class="login-body-title">
        <div class="login-title-img">
          <img src="/images/ztkj.png" style="width:185px" />
        </div>
        <div class="login-title-text">
          <a href="/register" class="login-register">注册</a>|
          <a href="/" class="login-return">返回首页</a>
        </div>
      </div>

      <div class="login-body-content">
        <h2 class="head-title">欢迎登陆</h2>

        <Form
          class="login-form"
          id="login_form"
          :rules="ruleValidate"
          ref="formInline"
          :model="formInline"
        >
          <FormItem prop="user">
            <i class="iconfont icon-denglu"></i>
            <Input v-model="formInline.user" placeholder="请输入手机号/用户名" size="large"></Input>
          </FormItem>

          <div class="icon-father">
            <FormItem prop="password">
              <i-input
                :type="pwdTypes"
                v-model="formInline.password"
                placeholder="请输入登录密码"
                size="large"
              ></i-input>
              <Icon type="ios-eye-outline" class="icon-me" @click="showPsw()"></Icon>
              <!-- <Icon type="eye" class="icon-me"></Icon> -->
            </FormItem>
          </div>

          <div class="login-bottom-content">
            <div class="saveinfo">
              <label>
                <input type="checkbox" v-model="checked" />保存账号和密码
              </label>
            </div>
            <div class="forgetpsw">
              <a href="/passwordForget" @click="clearCookie()" class="fptext">忘记密码？</a>
            </div>
          </div>
          <FormItem class="loginButton">
            <Button type="primary" @click="handleSubmit('formInline')" long size="large">登录</Button>
          </FormItem>
        </Form>
      </div>
      <div class="foot-text">Copyright© 2018赞同科技 | 京ICP备 14027589号-1</div>
    </div>
  </div>
</template>
<script>
import { Login } from "../request/api.js"; // 导入api接口

export default {
  data() {
    return {
      pwdTypes: "password", //密码类型
      // openeye: require('@/assets/icon-visible.png'),
      // nopeneye: require('@/assets/icon-invisible.png'),
      seen: true,
      formInline: {
        user: "",
        password: ""
      },
      ruleValidate: {
        user: [
          { required: true, message: "请输入手机号/用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      },
      checked: false,
      note: {
        backgroundImage:
          "url(" + require("../assets/images/agree-login-background.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundAattachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    };
  },
  methods: {
    // handleSubmit(name) {
    //   this.$refs[name].validate((valid) => {
    //       if (valid) {
    //         this.$Message.success('提交成功!');
    //       } else {
    //         this.$Message.error('表单验证失败!');
    //       }
    //   })
    // },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          const loginer = {
            userName: this.formInline.user,
            password: this.formInline.password
          };
          Login(loginer)
            .then(res => {
              if (res.code == 200) {
                //判断自动登陆是否被勾选
                if (this.checked == true) {
                  //若勾选自动登陆，传入账号，密码，保存时间 3个参数
                  this.setCookie(
                    this.formInline.user,
                    this.formInline.password,
                    30
                  );
                } else {
                  //如果未勾选自动登陆，则清空Cookie
                  this.clearCookie();
                }
                if (res.data.imgHref == null) {
                  let headImg =
                    "776e98af5b30473693f6f186e155dcac.";
                  sessionStorage.setItem("headImg", headImg);
                } else {
                  sessionStorage.setItem("headImg", res.data.imgHref);
                }
                sessionStorage.setItem("user", this.formInline.user);
                sessionStorage.setItem("oldpsd", this.formInline.password);
                this.$Message.success("登录成功!");
                this.$router.push("/");
              }
            })
            .catch(err => {
              this.$Message.error(err);
            });
        } else {
          this.$Message.error("请输入账号或密码!");
          return false;
        }
      });
    },
    //设置Cookie
    setCookie(name, pwd, days) {
      var exdate = new Date();

      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * days); //计算保存的天数

      //字符串拼接cookie
      window.document.cookie = "user" + "=" + name + ";path=/expires";
      window.document.cookie = "password" + "=" + pwd + ";path=/expires";
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split(";");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //根据“=”再次分割
        }
        //判断查找对应的值
        if (arr2[0] == "user") {
          this.formInline.user = arr2[1];
        } else if (arr2[0] == "password") {
          this.formInline.password = arr2[1];
        }
        this.checked = true;
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1);
    },
    showPsw() {
      //alert(this.pwdTypes);
      this.pwdTypes = this.pwdTypes === "password" ? "text" : "password";
      if (this.seen == true) {
        this.seen = false;
      } else {
        this.seen = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.pwdeye {
  width: 100px;
  height: 100px;
}
.bodys {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10%;
  .login-body {
    margin-top: 10%;
    .login-body-title {
      width: 427px;
      height: 85px;
      position: relative;
      .login-title-img {
        padding-bottom: -30px;
        display: block;
        float: left;
      }
      .login-title-text {
        display: inline;
        position: absolute;
        right: 0;
        top: 30px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        .login-register {
          text-decoration: none;
          display: inline-block;
          margin-right: 10px;
          color: rgba(2, 164, 175, 1);
        }
        .login-return {
          text-decoration: none;
          display: inline-block;
          color: rgba(2, 164, 175, 1);
        }
      }
    }

    .login-body-content {
      width: 427px;
      height: 356px;
      background: white;
      box-shadow: 0px 2px 40px 0px rgba(248, 248, 248, 1);
      border-radius: 4px;
      padding: 60px 70px;
      .head-title {
        text-align: center;
        margin-bottom: 28px;
      }
      .ivu-form-item.ivu-form-item-required {
        display: block;
      }
      .icon-father {
        position: relative;
        display: block;
        .icon-me {
          position: absolute;
          right: 0;
          font-size: 40px;
        }
      }
      .login-bottom-content {
        margin-bottom: 14px;
        .saveinfo {
          display: block;
          float: left;
        }
        .forgetpsw {
          display: block;
          text-align: right;
          .fptext {
            text-decoration: none;
            color: rgba(2, 164, 175, 1);
          }
        }
      }
    }
  }
  .loginButton {
    .ivu-btn.ivu-btn-primary.ivu-btn-long.ivu-btn-large {
      background: rgba(2, 164, 175, 1);
    }
  }
  .foot-text {
    padding-top: 28px;
    text-align: center;
    width: 372px;
    height: 22px;
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 22px;
  }
}
</style>
