<template>
  <div class="aSize">
    <div class="block-section">
      <div class="lineT">
        <div class="textP">新手入门</div>
        <div class="center-line">
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
              <div class="inlistsize">
                <div class="inliststyle">
                  <a href="" class="content-text-style">一、快速入门</a>
                </div>
                <div class="inliststyle">
                  <a href="" class="content-text-style">二、接入开发</a>
                </div>
                <div class="inliststyle">
                  <a href="" class="content-text-style">三、沙箱测试</a>
                </div>
              </div>
              <div class="checkmore-position"><a href="" class="href-size-style" >查看更多</a></div>
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
                <div class="inliststyle">
                  <a href="" class="content-text-style">一、快速入门</a>
                </div>
                <div class="inliststyle">
                  <a href="" class="content-text-style">二、接入开发</a>
                </div>
                <div class="inliststyle">
                  <a href="" class="content-text-style">三、沙箱测试</a>
                </div>
              </ul>
              <div class="checkmore-position"><a href="" class="href-size-style">查看更多</a></div>
            </div>
          </div>
        </div>  
      </li>

      <!-- <li class="pic-size">
        <div class="showpic" >
          <img src="@/assets/images/showpic.png" >
        </div>  
      </li> -->
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
// .pic-size{
//   width: 31%;
//   .showpic{
//     width: 100%;
//     height: 260px;
//     overflow: hidden;
//     img{
//     width:auto;
//     height:100%;
//     }
//   }
// }
.aSize{
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
        .line-box{
            width: 70px;
            height: 4px;
            background: rgba(2,164,175,1);
          }
        // .centerP{
          
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
    width:100%;
    height: 260px;
    display: flex;
    justify-content: space-between;
    // bottom: 30px;
    list-style: none;
    .back-pic01{
    //控制子内容宽度
    width: 49%;
    background: url("../../assets/images/noobstart-back.png");
    background-size: cover; 
    }
    .ill{
      width: 100%;
      height: 260px;
      .background-style{
      padding: 40px 60px;
      height: 260px;
      }
      .textt{   
        position: relative; 
        height: 185px;
        .title-style{
          height:45px;
          font-size:32px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(29,31,49,1);
          
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
          height:2px;
          background:rgba(2,164,175,1);
          margin-bottom: 14px;
        }
        .inlistsize{
          height: 115px;
          float: left;
          .inliststyle{
            margin-top: 10px;
            .content-text-style{
              height:28px;
              font-size:20px;
              font-family:PingFangSC-Regular,PingFang SC;
              font-weight:400;
              color:rgba(29,31,49,1);
              line-height:28px;
            }
          }
        }
        .checkmore-position{
          position: absolute;
          right: 0;
          bottom: 10px;
          .href-size-style{
          font-size:20px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(2,164,175,1);
          } 
        }
      }
    }
  }
}
</style>



