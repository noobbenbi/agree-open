<template>
  <div class="ASize">
   <div class="block-section">
     <div class="lineT">
      <div class="centerP">
        <h3 class="textP">服务保障</h3>
        <div class="line-box"></div>
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
              <a href="" class="subtitle">7*12</a>
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
              <a href="" class="subtitle">开发者至上</a>
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
              <a href="" class="subtitle">金融级保障</a>
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
    width:1920px;
    .block-section{
      height: 742px;
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
    height: 468px;
    display: flex;
    justify-content: space-between;
    bottom: 30px;

    .ill{
      width: 522px;
      float: left;
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
        margin-left: 112px;
        background-color: aqua;
        display: inline-block;
        float: left;
      }
      
      .textt{
        display: inline-block;
        height: 162px;
        width: 422px;
        text-align: center;
        
        .subtitle{
        width:422px;
        height:42px;
        font-size:30px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(29,31,49,1);
        line-height:42px;
        
      }
        .sub-linebox{
          width:60px;
          height:6px;
          background:rgba(2,164,175,1); 
          margin: 30px 181px 34px;
        }
        .content-style{
          width:422px;
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
  .back-pic01{
    background: url("../../assets/images/servicescure-back02.png")
  }
  .back-pic02{
    background: url("../../assets/images/servicescure-back01.png")
  }
  .back-pic03{
    background: url("../../assets/images/servicescure-back01.png")
  }


}

</style>



