<template>
<!-- 接入指南 -->
  <div class="accessguide">
      <div class="center">
          <span class="center-title">接入指南</span>
          <span class="center-line"></span>
      </div>
      <img src="@/assets/images/person-reading-a-book-3060324.png">
      <img src="@/assets/images/blur-computer-connection-electronics-442150.png">
      <img src="@/assets/images/blue-and-yellow-graph-on-stock-market-monitor-159888.png">
      <img src="@/assets/images/adult-blur-boss-business-288477.png">
      <div class="text-part-read">
          <a class="text-part-title" @click="goDetail('1')">接入前必读</a>
          <span class="text-part-line"></span>
          <p class="text-part-content">{{msg}}</p>
      </div>
      <div class="text-part-dev">
          <a class="text-part-title" @click="goDetail('2')">接入开发</a>
          <span class="text-part-line"></span>
          <p class="text-part-content">{{msg}}</p>
      </div>
      <div class="text-part-api">
          <a class="text-part-title" @click="goDetail('4')">API接口规范</a>
          <span class="text-part-line"></span>
          <p class="text-part-content">{{msg}}</p>
      </div>
  <div class="text-part-sdk">
      <a class="text-part-title" @click="goDetail('3')">基础SDK集成</a>
      <span class="text-part-line"></span>
      <p class="text-part-content">{{msg}}</p>  
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
              path:'/devaccess/accessguidedetail',
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
    height: 702px;
    background-image: url(../../assets/images/278433d1c14890e34f12826849607864.png);
    position: relative;
}
.center-title {
  font-size:1.625em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:50px;
  position: relative;
  top: 70px;
  display: table;
  margin: 0 auto;
}
.center-line {
    width:60px;
    height:3px;
    background:rgba(2,164,175,1);
    position: relative;
    top: 75px;
    display: table;
    margin: 0 auto;
}
.accessguide img{
    width: 285px;
    height: 200px;
    position: absolute;
}
.accessguide  img:nth-of-type(1){
    top: 27%;
    left: 8.4%;
}
.accessguide  img:nth-of-type(2){
    top: 27%;
    left: 50.57%;
}
.accessguide  img:nth-of-type(3){
    top: 59.43%;
    left: 8.4%;
}
.accessguide  img:nth-of-type(4){
    top: 59.43%;
    left: 50.57%;
}
.text-part-read {
    position: absolute;
    width:278px;
    height:200px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 27%;
    left: 29.2%;
}
.text-part-dev {
    position: absolute;
    width:278px;
    height:200px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 27%;
    left: 71.4%;
}
.text-part-api {
    position: absolute;
    width:278px;
    height:200px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 59.4%;
    left: 29.2%;
}
.text-part-sdk {
    position: absolute;
    width:278px;
    height:200px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,213,213,1);
    top: 59.4%;
    left: 71.4%;
}
.text-part-title {
    font-size:1.56em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:45px;
    position: absolute;
    top: 18.2%;
    left: 29.48%;
}
.text-part-line {
    width:180px;
    height:4px;
    background:rgba(2,164,175,1);
    position: absolute;
    top: 41.5%;
    left: 19.2%;
}
.text-part-content {
    width:170px;
    height:60px;
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:28px;
    position: absolute;
    left: 19.2%;
    top: 51.4%;
}
</style>
