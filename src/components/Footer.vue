<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-middle-wrapper">

        <div class="box4">
          <div class="footer-menu-title">
            <img src="@/assets/images/footer-logoztkj.png" class="" /> 
          </div>
          <div class="box1">
            <p class="fontsize">客服24小时服务热线：010-64731113</p>  
            <a class="inline-block" href="">关于我们</a>|
            <a class="inline-block1" href="">联系我们</a>|
            <a class="inline-block1" href="">免责声明</a>|
            <a class="inline-block1" href="">友情链接</a>
            <p class="fontsize">推荐使用Firefox 15 | Chrome 23 | Safari 6以上版本浏览器</p>
          </div> 
        </div>

        <div class="footer-menu">
          <div class="box2">
            <h3 class="">快速入门</h3>
          </div>
          <div class="box3">
            <a class="inline-block2" href="/help">新手入门</a>
            <a class="inline-block3" href="javascript:void(0)">文档中心</a>
          </div>
          <div class="box3">
            <a class="inline-block2" href="javascript:void(0)">立即开发</a>
            <a class="inline-block3" href="/api/explorer">资源下载</a>
          </div> 
        </div>

        <div class="footer-menu">
          <div class="box2">
            <h3 class="">服务支持</h3>
          </div>
          <div class="box3">
            <a class="inline-block2" href="/help">常见问题</a>
            <a class="inline-block3" href="javascript:void(0)">在线客服</a>
          </div>
          <div class="box3">
            <a class="inline-block2" href="javascript:void(0)">产品服务</a>
            <a class="inline-block3" href="/api/explorer">如何合作</a>
          </div> 
        </div>
       
        

        <div class="footer-bar-code">
          <div class="foot-bar-code-item">
            <img
              style="margin-top:0px;height:124px"
              src="@/assets/images/csyhwyh-2code.jpg"
            />
            
          </div>
          <div class="foot-bar-code-item">
            <img
              style="margin-top:0px;height:124px"
              src="@/assets/images/eqz-2code.png"
            />
            
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>

    <!-- 白色分割线 -->
    <div class="line"></div>

    <div class="footer-bcs">
      <div class="footer-bcs-middle">
        
        <p class="text-center copyright">Copyright@ 2018赞同科技 | 京ICP备 14027589号-1</p>
        <!-- <div class="text-center browser">建议使用FireFox58.0.1、Chrome40及以上的浏览器,以获得舒适的浏览体验</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="less" scoped>
// @import "../assets/styles/variables.less";
html,body{
  height: 100%;
  min-height: 1280px;
}

.box1{
  height:66px;
  // width:429px;
  font-size:16px;
  .inline-block{
    font-size :8px; 
    display:inline-block;
    color:gray;
    padding-right: 14px;
    padding-left: 0px;
  }
  .inline-block1{
    font-size :8px; 
    display:inline-block;
    color:gray;
    padding-right: 10px;
    padding-left: 11px;
  }
}


.fontsize{
  font-size:8px;
  font-family: PingFangSC-Regular, sans-serif;
}


.line{
height:1px;
background-color:white;
}
.footer {
  height: 420px;
  // width: 1366px;
  width: 100%;
  min-width: 1280px;
  top: 0;
  left: 0;
  z-index: 10;;
  background-color: #fafafa;

  .footer-wrapper{
    height: 290px;
    width: 100%;
    min-width: 1280px;
    background-color: #373d4b;
    box-sizing: border-box;
    padding-top: 86px;
    clear: both;
    .footer-middle-wrapper{
        margin-left: 6%;
        .box4{
            float: left;
            color: #fff;
            width: 28%;
            height: 133px;
            .footer-menu-title{
              height:42px;
              // width:186px;
              margin-bottom: 25px;
            }
        }
        .footer-menu{
            float: left;
            color: #fff;
            width: 13.6%;
            margin-left: 5%;
            height: 133px;
            
            .box2{
            height:37px;
            // width:104px;
            margin-bottom:10%;
            font-size:20px;
            font-family: PingFangSC-Regular, sans-serif;
          }
          .box3{
            height:28px;
            width:320px;
            width: 100%;
            margin-bottom:10px;
            font-family: PingFangSC-Regular, sans-serif;
            font-size:15px;
            .inline-block2{
              display:inline-block;
              color:gray;
              padding-right:30%; 
            }

            .inline-block3{
              display:inline-block;
              color:gray;
              // padding-right:20px;
            }
                      }
            
        }
        
        .footer-bar-code{
            float: left;
            margin-left: 5%;
            
            .foot-bar-code-item{
                width: 124px;
                display: inline-block;
                text-align: center;
                margin-right: 30px;
                img{
                    margin-bottom: 50px;
                    height: 124px;
                    
                }
                
            }
        }
    }
  }
  .footer-bcs {
    box-sizing: border-box;
    width: 100%;
    min-width: 1280px;
    height: 130px;
    background-color: #373d4b;
    padding-left:0px;
    padding-bottom:83px;
    padding-top:24px;
    text-align: center;
    vertical-align: middle;
    .footer-bcs-middle{
        
        .copyright{
            font-size:8px;
            font-family: PingFangSC-Regular, sans-serif;
            color: #fff
  
        }
        
        
    }
}
}
</style>

