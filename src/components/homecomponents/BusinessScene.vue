<template>
<!-- 商业场景 -->
<div class="businessscene">
  <div class="center">
    <span class="center-title">商业场景</span>
    <span class="center-line"></span>
  </div>
    <div class="payment-settlement">
      <img src="@/assets/images/business1.png" />
      <a class="itemTitie" href="#">金融理财</a>
      <p>{{msg}}</p>
    </div>
    <div class="investment">
      <img src="@/assets/images/business2.png" />
      <a class="itemTitie" href="#">惠民社区</a>
      <p>{{msg}}</p>
    </div>
    <div class="account-management">
      <img src="@/assets/images/business3.png" />
      <a class="itemTitie" href="#">移动医疗</a>
      <p>{{msg}}</p>
    </div>
    <div class="loan-financing">
      <img src="@/assets/images/business4.png" />
      <a class="itemTitie" href="#">品牌零售</a>
      <p>{{msg}}</p>
    </div>
</div>
</template>
<script>
export default {
  name: "BusinessScene",
  data() {
    return {
        msg:'金融场景化业务产品和多种 理财产品，为客户流动资金创造更大价值'
    }
  },
  components: {
  }
};
</script>
<style  scoped>
@import url("../../assets/styles/font/font.css");
.businessscene {
  width:100%;
  min-width: 1200px;
  height: 0px;
  padding-bottom: 53%;
  background-color:rgba(255,255,255,1);
  position: relative;
}
.center-title {
  font-size:1.625em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(29,31,49,1);
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
.payment-settlement,
.investment,
.account-management,
.loan-financing{
  position: absolute;
  top: 25.6%;
  width:20.05%;
  height:54.8%;
  background:rgba(255,255,255,1);
  border:1px solid rgba(213,213,213,1);
  text-align: center;
}
.payment-settlement {
  left: 8.38%;
}
.investment {
  left: 29.48%;
}
.account-management {
  left: 50.57%;
}
.loan-financing {
  left: 71.66%;
}
.payment-settlement img,
.investment img,
.account-management img,
.loan-financing img{
  position: relative;
  width: 100%;
  height: 60%;
  top: 256px;
}
.payment-settlement a,
.investment a,
.account-management a,
.loan-financing a{
  position: relative;
  display: table;
  margin: -80% auto;
  font-size:1.3em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:700;
  color:rgba(29,31,49,1);
  line-height:42px;
}
.payment-settlement p,
.investment p,
.account-management p,
.loan-financing p {
  font-size:1em;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:550;
  color:rgba(29,31,49,1);
  line-height:28px;
  margin: 100% auto;
}
</style>
