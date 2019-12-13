<template>
  <div class="aSize">
   <div class="block-section">
     <div class="lineT">
      <div class="centerP">
        <h3 class="textP">新手入门</h3>
        <div class="line-box">
        </div>
      </div>  
     </div> 


    <ul class="list">
      <li class="back-pic01">
        <div class="ill" >
          <div class="background-style">
            <div class="textt">
              <p class="title-style">热门问题</p>
              <div class="longline"></div>
              <ul class="inlistsize">
                <li class="inliststyle">
                  <a href="" class="content-text-style">一、快速入门</a>
                </li>
                <li class="inliststyle">
                  <a href="" class="content-text-style">二、接入开发</a>
                </li>
                <li class="inliststyle">
                  <a href="" class="content-text-style">三、沙箱测试</a>
                </li>
              </ul>
              <div class="href-size-style"><a href="" class="href-text-style">查看更多</a></div>
            </div>
          </div>
        </div>  
      </li>

      <li class="back-pic01">
        <div class="ill" >
          <div class="background-style">
            <div class="textt">
              <p class="title-style">产品问题</p>
              <div class="longline"></div>
              <ul class="inlistsize">
                <li class="inliststyle">
                  <a href="" class="content-text-style">一、快速入门</a>
                </li>
                <li class="inliststyle">
                  <a href="" class="content-text-style">二、接入开发</a>
                </li>
                <li class="inliststyle">
                  <a href="" class="content-text-style">三、沙箱测试</a>
                </li>
              </ul>
              <div class="href-size-style"><a href="" class="href-text-style">查看更多</a></div>
            </div>
          </div>
        </div>  
      </li>

      <li class="">
        <div class="showpic" >
          <img src="@/assets/images/showpic.png" alt="">
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
.showpic{
  width: 650px;
  float: left;
  position: relative;
  height: 260px;
  box-sizing: border-box;
  overflow: hidden;
      

}

.aSize{
    background:rgba(255,255,255,1);
    height: 535px;
    width: 1920px;
    position: static;
    min-width: 1200px;
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
    width:100%;
    height: 260px;
    display: flex;
    justify-content: space-between;
    bottom: 30px;
    list-style: none;

    .ill{
      width: 455px;
      float: left;
      position: relative;
      height: 260px;
      box-sizing: border-box;
      overflow: hidden;
      
      .background-style{
      padding: 40px 60px 35px 57px;
      width: 455px;
      height: 260px;
      }
      
      
      .textt{
        
        height: 185px;
        width: 338px;
        

        .title-style{
          width:128px;
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
        .longline{
          width:338px;
          height:2px;
          background:rgba(2,164,175,1);
          margin-bottom: 14px;

        }
        .inlistsize{
          height: 115px;
          width: 120px;
          float: left;
          display: inline-block;
          margin-right: 138px;
          

        
          .inliststyle{
            margin-top: 10px;
            .content-text-style{
              width:120px;
              height:28px;
              font-size:20px;
              font-family:PingFangSC-Regular,PingFang SC;
              font-weight:400;
              color:rgba(29,31,49,1);
              line-height:28px;
            }
          }
        }
        .href-size-style{
          margin-top:86px;
          width:80px;
          height:28px;
          display: inline-block;
          border: 200px;
          float: left;
          .href-text-style{
          
          font-size:20px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(2,164,175,1);
          line-height:28px;
        }
        }
        
        


      }
      
    }

  }
  .back-pic01{
    // background-size: 455px 260px;
    // height: 260px%;
    // width: 455px;
    background: url("../../assets/images/noobstart-back.png")   
  }
  
}

</style>



