<template>
  <div class="body">
    <div class=basicdata>
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
          <p class="textp">注册账号：</p> <input type="text" class="inputstyle" v-model="accountId">
        </div>
        <div class="line2">
          <p class="confirmStyle">认证状态：</p> 
          <p class="confirmStyle2">{{confirmStatu}}</p>
        </div>
        <div class="line2">
          <p class="textp">登陆密码：</p> <input type="text" class="inputstyle" v-model="password">
        </div>
        <div class="button-skin" v-if="buttonhide">
          <i-button type="primary" class="saveButton" >保存</i-button>
        </div>
      </div>
    </div>
    <div class="developerdata" v-show="nextsteps">
      <div class="title">
        <h1>开发者资料</h1>
      </div>
      <div class="longline"></div>
      <div class="content">
      <div>基础信息</div>
      <div class="line2">
        <p class="textp">开发者姓名：</p>  <input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">开发者电话：</p>  <input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">开发者邮箱：</p>  <input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">所在地区：</p>
        <i-select :model.sync="model1" style="width:200px">
        <i-option v-for="item in cityList" :value="item.value" :key="label">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" style="width:200px">
        <i-option v-for="item in cityList" :value="item.value" :key="label">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" style="width:200px">
        <i-option v-for="item in cityList" :value="item.value" :key="label">{{ item.label }}</i-option>
        </i-select>
      </div>
      <div class="line2">
        <p class="textp">身份证号码:</p><input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">身份证正面照片:</p><input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">身份证反面照片:</p><input type="text" class="inputstyle">
      </div>
      <div class="longline2"></div>
    </div>
    <div class="content"> 
      <p>紧急联系人信息</p>
      <div class="line2">
        <p class="textp">姓名:</p><input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">电话:</p><input type="text" class="inputstyle">
      </div>
      <div class="line2">
        <p class="textp">邮箱:</p><input type="text" class="inputstyle">
      </div>
      <div class="button-skin">
        <i-button type="primary" class="saveButton" @click="nextstep()">下一步</i-button>
      </div>
    </div> 
  </div>
  <div class="step2" v-if="!nextsteps">
    <div class="title">
        <h1>开发者资料</h1>
    </div>

    <div class="longline"></div>

    <div class="step2content">
      <div class="littletitle">选择开发者类型</div>
     

      <div class="agree-content">
        <div class="guidestyle">开发者类型：</div>

        <div class="agreestyle">
          <div class="agreetitle">个人开发者</div>   
          <div class="shortline"></div>   
          <div class="agreecontent">
          <p>快速接入api</p>
          <p>第三方应用开发</p>
          </div>    
        </div>

        <div class="agreestyle">
          <div class="agreetitle">企业开发者</div>   
          <div class="shortline"></div>   
          <div class="agreecontent">
            <p>快速接入api</p>
            <p>第三方应用开发</p>
            <p>快速接入行内企业资源</p>
            <p>第三方应用开发</p>
          </div>     
        </div>

      </div>

      <div class="agree-button-skin">
        <div class="text22"><input type="checkbox">允许平台为我的应用提供 <a href=“></a>《开发者入驻协议》</div>
        <i-button type="primary" class="agreebutton" @click="backstep()">上一步</i-button>
        <i-button type="primary" class="agreebutton" @click="instance()">提交</i-button>
      </div>
      <div class="testbox">0</div>
    </div>
    
  </div>
      
    
</div>
  
</template>
<script>
import Bus from '../../../bus.js';
export default {
    name:'myData',
    data(){
      return {
        ifhide:true,
        accountName:"用户名",
        confirmStatu:"未认证",
        confirmhide:"true",
        buttonhide:"true",
        accountId:"",
        password:"",
        nextsteps:true,
        cityList:[{
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }],
                  model1: ''
      }
    },
    components:{
      
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
      nextstep(){
        this.nextsteps=false;
      },
      backstep(){
        this.nextsteps=true;
      },
      model1(){

      },
      instance(){
        const title = '信息提交成功！';
        
        this.$Modal.success({
                            title: title,
                            
                        });
      }
      

    },
    mounted:function () {
      var vm=this;
      var a=sessionStorage.getItem("ID");
      var b=sessionStorage.getItem("psw");
      vm.password=b;
      vm.accountId=a;
      sessionStorage.removeItem('ID');
      sessionStorage.removeItem('psw');
    }

}
</script>
<style lang="less"  scoped>

.body{
  width: 900px;
  .ivu-select{
    width: 140px !important;
    margin-right: 10px;
  }
  
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
  .longline2{
          margin:5px -20px 40px;
          
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
    margin-bottom: 50px;
    .line1{
      margin: 10px 0 0px;
      color:rgba(29,31,49,1);
    }
    .line2{
      
      margin: 40px 0 40px;
      color:rgba(155,155,155,1);
      .textp{
        width: 140px;
        display: inline-block;
        margin-right: 20px;
        
      }
      .confirmStyle{
        width: 200px; 
        display: inline-block;
      }
      .confirmStyle2{
        width: 200px; 
        display: inline-block;
        color: rgba(255, 179, 0, 1)
      }
      
    }
    .button-skin{
      
      padding: 0px 160px 0;
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
      display: inline-block;
    }
  }

  .step2{
    width: 100%;
    .littletitle{
      margin: 0 20px 20px;
      font-size:16px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      
      color:rgba(29,31,49,1);
    }
    .agree-content{
      height: 250px;
      margin: 0 20px 0;

    }
    .guidestyle{
      color: rgba(155, 155, 155, 1);
      display: inline-block;
      float: left;
      
    }
    .agreestyle{
      margin: 20px 10px 20px;
      padding: 20px 10px 10px;
      height: 200px;
      width: 240px;
      border: rgb(92, 112, 230) 1px solid;
      display: inline-block;
      text-align: center;
      font-size:20px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(2,164,175,1);
      float: left;
      .agreecontent{
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(29,31,49,1);
        p{
          margin:10px 0 10px;
        }
      }
      .shortline{
        margin: 0 45px 0;
        width:150px;
        height:1px;
        background:rgba(240,240,240,1);
      }
      
        
        
      

    }
  }
}
.agree-button-skin{
  padding-left: 120px;
  height: 80px;
  // margin: -30px 50px 30px;
 .text22{
   margin-bottom: 20px;
 }
  .agreebutton{
  margin-right: 20px;
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
  .testbox{ 
    color: white;
    margin-left: 1900px;
  }
</style>



