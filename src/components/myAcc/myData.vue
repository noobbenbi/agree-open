<template>
  <div class="myData">
    <div v-show="comfirmswitch">
      <div class="head-picure"><img src="@/assets/images/UserAvatar.png" alt=""></div>
      <div class="acc-data">
        <div class="acfont" v-if="ifhide">{{name}}</div>
        <input v-if="!ifhide" class="editnameinput" id="1"  type="text" v-model="name" @blur="confirmAccname()" @keyup.13="confirmAccname()" placeholder="请输入用户名">
        <div class="editicon" v-if="ifhide" @click="editname()"><Icon type="ios-eye-outline" size=30 color="#02A4AF"></Icon></div>
      </div>
      <div class="mydata-content">
        <Form class="register-form"  id="login_form"  :rules="ruleValidate"  ref="formInline"  :model="formInline" label-position="left" >
          <div class="form-title">注册信息</div>
          <FormItem prop="user">
            <div class="inputstyle">
              <div>注册账号：</div><i-input v-model="formInline.user" placeholder="请输入手机号/用户名" size="large" style="width: 320px" ></i-input>
            </div>
          </FormItem>
          <div class="inputstyle">
            <p>认证状态：</p>  <p style="color:orange">未认证</p>  <div class="confirm" @click="comfirmswitch=!comfirmswitch">认证 </div>
          </div>
          <FormItem prop="password" >
            <div class="inputstyle">
              <p>登录密码：</p><i-input type="password" v-model="formInline.password" placeholder="请输入密码" size="large"  style="width: 320px"></i-input>
            </div>
          </FormItem>
          <FormItem >
            <div class="savebutton-father">
              <Button type="primary" class="savebutton" @click="handleSubmit('formInline')" middl  size="large">保存</Button>
            </div>
          </FormItem>
        </Form>
      </div>
    </div>
    <comfirmStep v-show="!comfirmswitch"></comfirmStep>
  </div> 
</template>
<script>
import comfirmStep from './myData/comfirmStep';
export default {
    name:'myData',
    data(){
      return {
        name:"用户名",
        comfirmswitch:true,
        ifhide:true,
        formInline: {
          user: "",
          password: "",
        },
        ruleValidate: {
           user: [
          { required: true, message: "请输入手机号/用户名", trigger: "blur" }
          ],
          password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
          ]
        },
    
      }
    },
    components:{
      comfirmStep
    },
    methods:{
      editname(){
        this.ifhide=false;
      },
      confirmAccname(){
        this.ifhide=true; 
      },

    }
}
</script>
<style lang="less"  scoped>
.myData{
  padding: 0 5%;
  min-height: 700px;
  width: 80%;
  .head-picure{
    img{
      width: auto;
      height: 160px;
    }
  }
  .acc-data{
    display: flex;
    justify-content: center;
      .acfont{
        width: 108px;
        font-size: 20px;
      }
      .editnameinput{
        width: 100px;
        margin-right: 20px;
        font-size: 16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(29,31,49,1);
      }
      .editicon{
        cursor: pointer;
        height: 30px;
        width: 30px;
        // margin-top: 8px;
        // padding: 0 0 10px 0;
        border:1px solid rgba(2,164,175,1);
      }
    }
  .mydata-content{
    margin-top: 40px;
    padding-left: 1px;
    
    
    display: flex;
    
    .register-form{
      width: 500px;
      
      .form-title{
        display: flex;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(29,31,49,1);
      }
      .inputstyle{
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        margin: 20px 0;
        display: flex;
        justify-content:space-between ;
        .confirm{
          cursor: pointer;
          color: #02A4AF;
        }
      }
      .savebutton-father{
        width: 450px;
        .savebutton{
          width:90px;
          height:36px;
          background:rgba(2,164,175,1);
          border-radius:2px;
          font-size:16px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:22px;
        }

      }
      
    }


    

  }
  

}
</style>



