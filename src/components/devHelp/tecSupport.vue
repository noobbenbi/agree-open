<template>
  <div class="Size">
   <div class="block-section">
     <div class="lineT">
      <div class="centerP">
        <h3 class="textP">技术支持</h3>
        <div class="line-box"></div>
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
    background:rgba(255,255,255,1);
    height: 535px;
    width:1920px;
    top: 0;
    left: 0;
    z-index: 10;
    .block-section{
      height: 535px;
      width:1600px;
      margin-left: 162px;
      margin-right: 157px;
      .lineT{
        height: 273px;
        width: 1920px;
        padding-top:120px;
        .centerP{
          margin-left: 726px;
          margin-right: 731px;
          .textP{
            width:144px;
            height:50px;
            font-size:36px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(29,31,49,1);
            line-height:50px;
          }
          .line-box{
            margin-top: 20px;
            margin-left: 0px;
            
              width: 70px;
              height: 4px;
              margin-left: 37px;
              background: rgba(2,164,175,1);
            
          }
        }
      }
    }
  .list{
    list-style: none;
    width:100%;
    height: 222px;
    display: flex;
    justify-content: space-between;
    bottom: 30px;

    .ill{
      width: 522px;
      float: left;
      position: relative;
      height: 222px;
      box-sizing: border-box;
      overflow: hidden;
      
      .background-style{
      margin: 47px 33px;
      }
      
      .imgg{
        height: 126px;
        width: 126px;
        background-color: aqua;
        display: inline-block;
        float: left;
      }
      .textt{
        display: inline-block;
        height: 126px;
        width: 300px;
        margin-left: 30px;

        .title-style{
          width:200px;
          height:45px;
          font-size:32px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(29,31,49,1);
          line-height:45px;
        }
        .content-style{
          margin-top: 7px;
          width:300px;
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
  .back-pic01{
    background: url("../../assets/images/help-background01.png")
  }
  .back-pic02{
    background: url("../../assets/images/help-background02.png")
  }
  .back-pic03{
    background: url("../../assets/images/help-background01.png")
  }


}

</style>



