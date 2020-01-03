<template>
  <div class="ASize">
   <div class="block-section">
     <div class="lineT">
        <div class="textP">服务保障</div>
        <div class="center-line">
          <div class="line-box">
          </div>
        </div>  
     </div> 

    <ul class="list">
      <li class="back-pic01">
        <div class="ill" >
          <div class="background-style">
            <div class="imgg">
              <img src="@/assets/images/serviceScText01.png" alt="">
            </div>
            
            <div class="textt">
              <div class="subtitle"><a href="" class="subtitle-text">7*12</a></div>
              
              <div class="sub-linebox"></div>
              <p class="content-style">技术支持团队7x12小时在线支持，凭借团队技能和贴心服务提供全面保障</p>
            </div>
          </div>
        </div>  
      </li>

      <li class="back-pic01">
        <div class="ill" >
          <div class="background-style">
            <div class="imgg">
              <img src="@/assets/images/serviceScText02.png" alt="">
            </div>
            
            <div class="textt">
              <div class="subtitle"><a href="" class="subtitle-text">开发者至上</a></div>
              
              <div class="sub-linebox"></div>
              <p class="content-style">开放银行平台官方以开发者和客户为中心，尽最大努力提供更好的使用服务</p>
            </div>
          </div>
        </div>  
      </li>

      <li class="back-pic01">
        <div class="ill" >
          <div class="background-style">
            <div class="imgg">
              <img src="@/assets/images/serviceScText03.png" alt="">
            </div>
            <div class="textt">
              <div class="subtitle"><a href="" class="subtitle-text">金融级保障</a></div>
              <div class="sub-linebox"></div>
              <p class="content-style">技术支持团队7x12小时在线支持，凭借团队技能和贴心服务提供全面保障</p>
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
.ASize{
    background:rgba(255,255,255,1);
    height: 862px;
    width:100%;
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
        .line-box{
            width: 70px;
            height: 4px;
            background: rgba(2,164,175,1);
          }

          .textP{
            font-size:36px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(29,31,49,1);
            line-height:50px;
          }
          

      }
    }
  .list{
    list-style: none;
    width:100%;
    height: 468px;
    display: flex;
    justify-content: space-between;
    bottom: 30px;
    .back-pic01{
      width: 31%;
      background: url("../../assets/images/servicescure-back02.png");
      background-size: cover; 
      overflow: hidden;
    }
    .back-pic02{
      width: 33%;
      background: url("../../assets/images/servicescure-back01.png");
      background-size: cover; 
      overflow: hidden;
    }
    .back-pic03{
      width: 33%;
      background: url("../../assets/images/servicescure-back01.png");
      background-size: cover; 
      overflow: hidden;
      
    }

    .ill{
      width: 100%;
      position: relative;
      height: 468px;
      box-sizing: border-box;
      overflow: hidden;
      
      .background-style{
      margin: 40px 49px 0 49px;
      height: 468px;
      }
      
      .imgg{
        height: 200px;
        width: 200px;
        margin: 0 auto;
        background-color: aqua;
      }
      
      .textt{
        // display: inline-block;
        height: 162px;
        text-align: center;
        .subtitle{
          margin-bottom: 30px;
          .subtitle-text{
          // width:422px;
          height:42px;
          font-size:30px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(29,31,49,1);
          line-height:42px;
          margin-bottom: 20px;
          }

        }

        .sub-linebox{
          width:60px;
          height:6px;
          background:rgba(2,164,175,1); 
          // margin: 30px 181px 34px;
          margin: 0 auto;
        }
        .content-style{
          margin-top: 40px;
          height:60px;
          font-size:20px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(29,31,49,1);
          line-height:28px;
          text-align: center;
        }
      }
    }
  }



}

</style>



