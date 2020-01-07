<template>
<!-- 接入指南 -->
  <div class="accessguide">
      <div class="center">
          <span class="center-title">接入指南</span>
          <span class="center-line"></span>
      </div>  
      <div class="text-part-read text-part">
          <img class="box-left" src="@/assets/images/person-reading-a-book-3060324.png">
          <div class="box-right">
              <a class="text-part-title" @click="goDetail('1')">接入前必读</a>
              <span class="text-part-line"></span>
              <p class="text-part-content">{{msg}}</p>
          </div>
      </div>
      <div class="text-part-dev text-part">
          <img class="box-left" src="@/assets/images/blur-computer-connection-electronics-442150.png">
          <div class="box-right">
            <a class="text-part-title" @click="goDetail('2')">接入开发</a>
            <span class="text-part-line"></span>
            <p class="text-part-content">{{msg}}</p>
          </div>
      </div>
      <div class="text-part-api text-part">
          <img class="box-left" src="@/assets/images/blue-and-yellow-graph-on-stock-market-monitor-159888.png">
         <div class="box-right">
            <a class="text-part-title" @click="goDetail('4')">API接口规范</a>
            <span class="text-part-line"></span>
            <p class="text-part-content">{{msg}}</p>
         </div>
      </div>
  <div class="text-part-sdk text-part">
      <img class="box-left" src="@/assets/images/adult-blur-boss-business-288477.png">
      <div class="box-right">
        <a class="text-part-title" @click="goDetail('3')">基础SDK集成</a>
        <span class="text-part-line"></span>
        <p class="text-part-content">{{msg}}</p>  
      </div>
  </div>
  </div>
  
</template>
<script>
export default {
  name:'AccessGuide',
  data() {
      return {
          msg:'金融场景化业务产品和多种理财产品，为客户流动资金创造更大价值'
      }
  },
  methods:{
      goDetail(id){
          this.$router.push({
              path:'/accessguidedetail',
              query: {
                  nameId: id
              }
          });
      },
  },
}
</script>
<style scoped>
@import url("../../assets/styles/font/font.css");
.accessguide {
    width: 100%;
    min-width: 1200px;
    height: 0px;
    padding-bottom: 51%;
    background-image: url(../../assets/images/278433d1c14890e34f12826849607864.png);
    position: relative;
}
.center {
    position: relative;
    top: 80px;
}
.center-title {
  font-size:1.625em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:50px;
  display: table;
  margin: 0% auto;
}
.center-line {
    width:60px;
    height:3px;
    background:rgba(2,164,175,1);
    display: table;
    margin: 0 auto;
}
.text-part {
    width:40%;
    height:28.4%;
    background:rgba(255,255,255,1);
    position: absolute; 
}
.text-part-read {      
    top: 27%;
    right: 51%;
}
.text-part-dev {
    top: 27%;
    left: 51%;
}
.text-part-api {
    top: 59.4%;
    right: 51%;
}
.text-part-sdk {
    top: 59.4%;
    left: 51%;
}
.box-left {
    position: absolute;
    left: 0px;
    width: 50%;
    height: 100%;
}
.box-right {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0px;
    right: 0px;
    text-align: center;
}
.text-part-title {
    font-size:1.56em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    display: table;
    margin: 15% auto;
}
.text-part-line {
    width:180px;
    height:4px;
    background:rgba(2,164,175,1);
    position: relative;
    top: 25%;
    display: table;
    margin: -35% auto;
}
.text-part-content {
    width:170px;
    height:60px;
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:28px;
    display: table;
    margin: 60% auto;
}
</style>
