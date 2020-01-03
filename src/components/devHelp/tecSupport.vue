<template>
  <div class="Size">
   <div class="block-section">
     <div class="lineT">
        <div class="textP">技术支持</div>
        <div class="center-line">
          <div class="line-box">
          </div>
        </div> 
    </div> 


    <ul class="list">
      <li class="back-pic01">
        <div class="ill" >
          <div class="background-style">
            <img src="@/assets/images/帮助与支持1.png" style="imgg">
            <div class="textt">
              <a href="" class="title-style">沙箱测试</a>
              <p class="content-style">支持开发者在模拟测试环境中调用api服务功能接口</p>
            </div>
          </div>
        </div>  
      </li>

      <li class="back-pic02">
        <div class="ill" >
          <div class="background-style">
            <img src="@/assets/images/帮助与支持2.png" style="imgg">
            <div class="textt">
              <a href="" class="title-style">在线调用</a>
              <p class="content-style">新版api浏览器优雅地定义了标准
api，开发者可以轻松的体验</p>
            </div>
          </div>
        </div>  
      </li>

      <li class="back-pic03">
        <div class="ill" >
          <div class="background-style">
            <img src="@/assets/images/帮助与支持3.png" style="imgg">
            <div class="textt">
              <a href="" class="title-style">密钥&签名</a>
              <p class="content-style">协助开发者应用在接入api网关时安全便捷生成国密标准的密钥和提供签名工具</p>
            </div>
          </div>
        </div>  
      </li>

      




    </ul>   
   </div>

  </div>
</template>
<script>
export default {
    name:'noobStart'
}
</script>
<style lang="less"  scoped>
.Size{
    min-width: 1280px;
    background:rgba(255,255,255,1);
    height: 535px;
    width: 100%;
    position: static;
    min-width: 1200px;
    top: 0;
    left: 0;
    z-index: 10;
    .block-section{
      height: 535px;
      margin:0 8%;
      .lineT{
        height: 273px;
        padding-top:120px;
        text-align: center;
        .center-line{
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
          .textP{
            font-size:36px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(29,31,49,1);
            line-height:50px;
          }
          .line-box{
            width: 70px;
            height: 4px;
            background: rgba(2,164,175,1);
          }
        
      }
    }
  .list{
    width:100%;
    height: 260px;
    display: flex;
    justify-content: space-between;
    bottom: 30px;
    list-style: none;
    .back-pic01{
      width: 31%;
      background: url("../../assets/images/help-background01.png");
      background-size: cover; 
    }
    .back-pic02{
      width: 33%;
      background: url("../../assets/images/help-background02.png");
      background-size: cover; 
    }
    .back-pic03{
      width: 33%;
      background: url("../../assets/images/help-background01.png");
      background-size: cover; 
    }

    .ill{
      width: 100%;
      height: 260px;
      padding: 50px 30px;
      .background-style{
        display: flex;
        justify-content: space-between;
      }
      .imgg{
        height: 126px;
        width: 126px;
        background-color: aqua;
        float: left;
      }
      .textt{
        text-align: left;;
        height: 126px;
        
        .title-style{
          
          height:45px;
          font-size:32px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(29,31,49,1);
          line-height:45px;
        }
        .content-style{
          margin-top: 7px;
          
          height:56px;
          font-size:20px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(29,31,49,1);
          line-height:28px;
        }
        


      }
      
    }

  }


}

</style>



