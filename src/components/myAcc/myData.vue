<template>
  <div class="body">
    <div class="title">
      <h1>基本资料</h1>
    </div>
    <div class="longline"></div>
    <div class="head-skin">
      <div class="headpic" ></div>
      <div class="acc-data">
        <p class="ac-font" v-if="ifhide">{{accountName}}</p>
        <input class="hide-input" id="accname" type="text" v-if="!ifhide" value="用户名"  @blur="confirmAccname()" @keyup.13="confirmAccname()" v-model="accountName">
        <div class="imgg" @click="changeAccname()" v-if="ifhide"></div>
      </div>
    </div>
    <div class="content">
      <div class="line1">注册信息</div>
      <div class="line2">
        注册账号：<input type="text" class="inputstyle" v-model="accountId">
      </div>
      <div class="line2">
        <p class="confirmStyle">认证状态：</p> 
        <p class="confirmStyle2">{{confirmStatu}}</p>
        <a class="confirmStyle3" @click="confirmWindow()" v-if="confirmhide" href="/accountcenter/acc/accf">认证</a>
      </div>
      <div class="line2">
        登陆密码：<input type="text" class="inputstyle" v-model="password">
      </div>
      <div class="button-skin" v-if="buttonhide">
        <i-button type="primary" class="saveButton" @click="saveData()">保存</i-button>
      </div>
    </div>
    
  </div>
  
</template>
<script>
import comfirmStep from './myData/comfirmStep';
import Bus from '../../bus.js';
export default {
    name:'myData',
    data(){
      return {
        ifhide:true,
        accountName:"用户名",
        confirmStatu:"未认证",
        confirmhide:"true",
        buttonhide:"true",
        password:"",
        accountId:""
      }
    },
    components:{
      comfirmStep
    },
    methods:{
      changeAccname(){
        this.ifhide=false;
      },
      confirmAccname(){
        this.ifhide=true; 
        // this.accountName="";
      },
      confirmWindow(){
        this.confirmhide=false;
        this.buttonhide=false;
      },
      saveData(){
        sessionStorage.setItem("ID",this.accountId);
        sessionStorage.setItem("psw",this.password);
        var a=sessionStorage.getItem("ID");
        console.log(a);
      }

    }
}
</script>
<style lang="less"  scoped>
.body{
  width: 900px;
  .title{
    padding:0 40px 0;
    height:50px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
  }
  .longline{
          margin:5px 20px 40px;
          margin-bottom: px;
          width:900px;
          height:1px;
          background:rgba(240,240,240,1);
        }
  .head-skin{
    height: 200px;
    padding: 0px 370px 0;

    .headpic{
      height: 160px;
      background-color: black;
    }
    .acc-data{
      text-align: center;
      margin-top: 5px;
    }
    .ac-font{
      font-size:20px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(29,31,49,1);
      line-height:28px;
      display: inline-block;

    }

    .hide-input{
      display: inline-block;
      width: 80px;
    }
    
    .imgg{
      display: inline-block;
      height: 16px;
      width: 20px;
      background-color: black;
      margin-left: 15px;
      cursor:pointer;
    }
  }
  .content{
    padding: 20px 40px 0;
    overflow: hidden;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:22px;
    .line1{
      margin: 10px 0 0px;
      color:rgba(29,31,49,1);
    }
    .line2{
      
      margin: 40px 0 40px;
      color:rgba(155,155,155,1);
      .confirmStyle{
        width: 200px; 
        display: inline-block;
      }
      .confirmStyle2{
        width: 200px; 
        display: inline-block;
        color: rgba(255, 179, 0, 1)
      }
      .confirmStyle3{
        width: 200px; 
        display: inline-block;
        color: rgba(2, 164, 175, 1);
        cursor:pointer;
      }
    }
    .button-skin{
      
      padding: 0px 120px 0;
      .saveButton{
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

    
    .inputstyle{
      width:320px;
      height:40px;
      background:rgba(248,248,248,1);
      border-radius:2px;
      border:1px solid rgba(213,213,213,1);
      margin: 0 40px 0;
    }
  }
}

        

</style>



