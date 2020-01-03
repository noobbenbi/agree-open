<template>
  <div class="general-situation">
    <h1 class="title1">生活服务</h1>
    <div class='strone'>
      <span class = 'span1'>
        <span class="span2">1</span>
      </span>
      <span class = 'span3'>
        <span class="span4">2</span>
      </span>
      <span class = 'span5'>
        <span class="span4">3</span>
      </span>
      <span class="stronefree1"></span>
      <span class="stronefree2"></span>
    </div>
    <div class="bodys">
      <h2 class="title2">
      <span class="glass"></span>
        基础信息</h2>
      <div class="divline">
          <span class="content1">APPID：</span>
          <span  class="content2">{{appid}}</span>
          <div  class="content3"><button type="text" size="medium" v-clipboard:copy="appid">复制</button></div>
        
      </div>
      <div class="divline">
        <span class="content1">APP Secret:</span>
        <span class="content2">{{appserveid}}</span>
        <a @click="birth" class="content3">生成</a>
      </div>
      <div class="divline">
        <span  class="content1">应用名称:</span>
        <input v-model="appname" v-show="!updatename"  class="content2"/>
        <span class="content2" v-show="updatename">{{appname}}</span>
        <a @click="updatename=!updatename" v-show="updatename"  class="content3">修改</a>
        <a @click="updatename=!updatename" v-show="!updatename" class="content3">完成</a>
      </div>
      <div class="divline">
        <span  class="content1">应用类型:</span>
        <span class="content2">WEB</span>
        <span class="content3"></span>
      </div>
      <div class="divline">
        <span  class="content1">应用标签:</span>
        <input v-model="applabel" v-show="!updatelab" class="content2"/>
        <span v-show="updatelab" class="content2">{{applabel}}</span>
        <a @click="updatelab=!updatelab" v-show="updatelab" class="content3">修改</a>
        <a @click="updatelab=!updatelab" v-show="!updatelab" class="content3">完成</a>
      </div>
      <div class="divline">
        <span class="content1">应用简介:</span>
        <input v-model="appintroduce" v-show="!updateint" class="content2"/>
        <span v-show="updateint" class="content2">{{appintroduce}}</span>
        <a @click="updateint=!updateint" class="content3" v-show="updateint">修改</a>
        <a @click="updateint=!updateint" class="content3" v-show="!updateint">完成</a>
      </div>
      <div class="imgline">
        <span  class="content1">应用图标:</span>
        <div class="content2">
          <div v-if="allowAddImg">
            <input
              type="file"
              accept="image/*"
              v-show="!updateimg && !used"
              @change="changeImg($event)"
            />
            <div>
              <img src="@/assets/images/havenothing.png" v-show="ss" class="img"/>
            </div>
          </div>
          <div v-for="(item,index) in imgArr" :key="index">
            <div>
              <div>
                <img :src="item" alt v-show="!ss && updateimg"  class="img" />
              </div>
              <i class="img_delete" @click="deleteImg(index)"></i>
            </div>
          </div>
        </div>
        <a @click="updateimgstart" v-show="updateimg"  class="content3">修改</a>
      </div>
      <h2 class="title2">
        <span class="glass"></span>
        收费模式</h2>
      <div class="divline">
        <span  class="content1">按API调用次数</span>
        <span  class="content2"> 按接入的服务功能</span>
        <span class="content3"></span>
      </div>
      <h2 class="title2">
        <span class="glass"></span>
        服务功能</h2>
      <div class="divline">
        <span  class="content1">APP调用详情</span>
        <div>
          <form action></form>
        </div>
      </div>
      <h2 class="title2">
        <span class="glass"></span>
        环境配置</h2>
      <div class="divline">
        <span  class="content1">网关访问地址:</span>
        <span class="content2">{{netaddress}}</span>
        <div  class="content3"><button type="text" size="medium" v-clipboard:copy="appid">复制</button></div>
      </div>
      <div class="divline">
        <span  class="content1">应用网关地址:</span>
        <input v-model="appaddress" v-show="!updateadd" class="content2"/>
        <span class="content2" v-show="updateadd">{{appaddress}}</span>
        <a @click="updateadd=!updateadd" v-show="updateadd" class="content3">设置</a>
        <a @click="updateadd=!updateadd" v-show="!updateadd" class="content3">完成</a>
      </div>
      <div class="divline">
        <span  class="content1">授权回调地址:</span>
        <input v-model="appaddresses" v-show="!updateadr"  class="content2"/>
        <span v-show="updateadr" class="content2">{{appaddresses}}</span>
        <a @click="updateadr=!updateadr" v-show="updateadr" class="content3">设置</a>
        <a @click="updateadr=!updateadr" v-show="!updateadr" class="content3">完成</a>
      </div>
      <h2 class="title2">
        <span class="glass"></span>
        密匙配置</h2>
      <div class="divline">
        <span class="content1">如何生成应用rsa密匙？</span>
        <a class="content2"></a>
        <a href class="content3">查看</a>
      </div>
      <div class="divline">
        <span  class="content1">RSA2(SHA256)密匙:</span>
        <div class="content6">
          <a href class="" >查看平台公匙</a>
          <a href class="">上传/查看应用公匙</a>
        </div>
        
      </div>
      <div class="divline">
        <span  class="content1">AES密匙:</span>
        <span class="content4"></span>
        <a href class="content5">修改/查看AES公匙</a>
      </div>
      <div class="divline">
        <div class="content1">
          <button href @click="submit" class="botton1">
            <span class="bottonword">提交上线审核</span>
          </button>
        </div>
        <div class="content2">
          <button href @click="delecte" class= 'botton2'>
            <span class="bottonword">删除此应用</span>
          </button>
        </div>
        <span class="content3"></span>
      </div>
   </div>
  </div>
</template>


<script>
export default {
  name: "GeneralSituation",
  data() {
    return {
      appid: "40775a6-c813-4ed6-a2e7-ef2054bf2564",
      netaddress: "40775a6-c813-4ed6-a2e7-ef2054bf2564",
      updatename: true,
      updateint: true,
      updateimg: true,
      updatelab: true,
      updateadd: true,
      updateadr: true,
      appserveid: "",
      appimg: "",
      used: false,
      ss: true,
      appaddresses: "",
      appaddress: "",
      applabel: "应用标签",
      appname: "应用名称",
      appintroduce: "应用简介",
      imgData: "",
      imgArr: [],
      imgSrc: "",
      allowAddImg: true,
      end: false,
      timer2: '',
    };
  },
  watch: {
  },
  methods: {
    updateimgstart() {
        this.used = false;
        this.imgArr = [];
        this.updateimg=false;
        this.ss=false;
    },
    updateimgend() {
        if(this.imgArr.length == '0' || this.imgArr == null) {
            return;
        } else {
            clearInterval(this.timer2);
            this.updateimg = true;
        }
    },
    birth() {
      this.appserveid = '暂无';
      //后端交互
    },
    delecte() {
    },
    submit() {
    },
    changeImg: function(e) {
      var _this = this;
      var imgLimit = 1024;
      var files = e.target.files;
      var image = new Image();
      if (files.length > 0) {
        this.used = true;
        var dd = 0;
        var timer = setInterval(function() {
          if (
            files.item(dd).type != "image/png" &&
            files.item(dd).type != "image/jpeg" &&
            files.item(dd).type != "image/gif"
          ) {
            return false;
          }
          if (files.item(dd).size > imgLimit * 102400) {
            //to do sth
          } else {
            image.src = window.URL.createObjectURL(files.item(dd));
            image.onload = function() {
              // 默认按比例压缩
              var w = image.width,
                h = image.height,
                scale = w / h;
              w = 200;
              h = w / scale;
              // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
              var quality = 0.7;
              //生成canvas
              var canvas = document.createElement("canvas");
              var ctx = canvas.getContext("2d");
              // 创建属性节点
              var anw = document.createAttribute("width");
              anw.nodeValue = w;
              var anh = document.createAttribute("height");
              anh.nodeValue = h;
              canvas.setAttributeNode(anw);
              canvas.setAttributeNode(anh);
              ctx.drawImage(image, 0, 0, w, h);
              var ext = image.src
                .substring(image.src.lastIndexOf(".") + 1)
                .toLowerCase(); //图片格式
              var base64 = canvas.toDataURL("image/" + ext, quality);
              // 回调函数返回base64的值
              if (_this.imgArr.length <= 4) {
                _this.imgArr.unshift("");
                _this.imgArr.splice(0, 1, base64); //替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                if (_this.imgArr.length >= 5) {
                  _this.allowAddImg = false;
                }
              }
            };
          }
          if (dd < files.length - 1) {
            dd++;
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
      if (files.length > 0) {
        this.timer2 = setInterval(function() {
          _this.updateimgend();
        },1000);
      }
    },
  }
};
</script>
<style lang="less" scoped>
.bodys{
  padding: 0 14% 0 3%;
}
.title1{
  font-size: 36px;
  margin-top: 6.3%;
  margin-left: 3%;
}
.bottonword{
  color:rgba(255,255,255,1);
  font-size: 20px;
  line-height: 28px;
}

.glass{
  // margin-left:3%;
  width: 4px;
  height: 20px;
  margin-top: 10px;
  margin-right: 10px;
  background: rgba(2,164,175,1);
}
.title2{
  display: flex;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 26px;
}
.img{
  width:140px;
  height:140px;
}
.botton2{
  font-size: 20px;
  width:152px;height:48px;
  background:rgba(2,164,175,1);
  border-radius: 2px;
}
.botton1{
  font-size: 20px;
  width:152px;
  height:48px;
  background:rgba(2,164,175,1);
  border-radius: 2px;
}
.content1 {
  // width:210px;
  // margin-left:3%;
  margin-bottom: 7%;
}
.content2{
  margin-bottom: 7%;
  width:440px;
}
.content3{
  width: 200px;
  text-align: right;
  margin-bottom: 7%;
  // margin-left:23%;
}
.content4{
  margin-bottom: 7%;
  // width: 123px;
  // margin-left:3%;
}
.content5{
  margin-bottom: 7%;
  
}
.content6{
  margin-bottom: 7%;
  width: 500px;
  display: flex;
  justify-content: space-between;

}
.divline{
  font-size: 20px;
  display:flex;
  justify-content: space-between;
}
.imgline{
  font-size: 20px;
  display:flex;
  width: 100%;
  justify-content: space-between;

}
.strone {
  margin-top: 40px;
  margin-bottom: 100px;
}
.stronefree1,
.stronefree2{
  position: relative;
  display: flex;
  height: 2px;
}
.stronefree1 {
  width:15%;
  margin-top: -22px;
  margin-left: 10%;
  background: rgba(2,164, 175, 1);
  z-index:-99;
}
.stronefree2 {
  width: 47%;
  margin-top:-1px;
  margin-left:25%;
  background: rgba(216,216, 216, 1);
  z-index:-100;
}
.span1,
.span3,
.span5{
  vertical-align: top;
  display: inline-block;
  border-radius: 50%;
}
.span1 {
  height: 46px;
  width: 46px;
  margin-left: 22%;
  margin-top: 77px;
  background:rgba(2, 164, 175, 1);
}
.span3{
  z-index:100;
  height: 30px;
  width: 30px;
  margin-left: 14%;
  margin-top: 86px;
  background: rgba(216, 216, 216, 1);
}
.span5{
  z-index:100;
  height: 30px;
  width: 30px;
  margin-left: 15%;
  margin-top: 86px;
  background: rgba(216, 216, 216, 1);
}
.span2,
.span4{
  z-index:100px;
  text-align: center;
  display: block;
  height: 20px;
}
.span2 {
  line-height: 46px;
  font-size: 32px;
  color: #FFFFFF;
}
.span4 {
  line-height: 30px;
  font-size: 20px;
  color: rgba(155, 155, 155, 1);
}
</style>