<template>
<div>
  <Header></Header>
  <Loopautoplay></Loopautoplay>
  <div class="procapability">
  <div class="center">
    <span class="center-title">能力介绍</span>
    <span class="center-line"></span>
  </div>
    <div class="payment-settlement">
      <img src="@/assets/images/Payment-settlement.png" />
      <a class="itemTitie" @click="goIntro('1')">支付结算</a>
      <span></span>
      <p >电子账户</p>
      <p>e想账户</p> 
      <p>现金管理账户</p>
    </div>
    <div class="investment">
      <img src="@/assets/images/Investment.png" />
      <a class="itemTitie" @click="goIntro('2')">投资理财</a>
      <span></span>
      <p>电子账户</p>
      <p>e想账户</p> 
      <p>现金管理账户</p>
    </div>
    <div class="account-management">
      <img src="@/assets/images/Account-management.png" />
      <a class="itemTitie" @click="goIntro('3')">账户管理</a>
      <span></span>
      <p>电子账户</p>
      <p>e想账户</p>
      <p>现金管理账户</p>
    </div>
    <div class="loan-financing">
      <img src="@/assets/images/Loan-financing.png" />
      <a class="itemTitie" @click="goIntro('4')">贷款融资</a>
      <span></span>
      <p>电子账户</p>
      <p>e想账户</p>
      <p>现金管理账户</p>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>
<script>
import Header from "../components/Header";
import Loopautoplay from '@/components/LoopAutoplay';
import Footer from "@/components/Footer";
// import goTop from "@/components/goTop";
export default {
  name: "procapability",
  data() {
    return {
      autoplaySpeed:5000
    }
  },
  methods: {
    goIntro(id) {
      this.$router.push({
        path:'/productintro',
        query: {
          nameId:id
        }
      });
    }
  },
  components: {
    Header,
    Loopautoplay,
    Footer
  }
};
</script>
<style  scoped>
@import url("../assets/styles/font/font.css");
.procapability {
  width:100%;
  min-width: 1200px;
  /* height: 954px; */
  height: 680px;
  background-color:rgba(255,255,255,1);
  position: relative;
}
.center-title {
    font-size:1.6em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
    position: absolute;
    top: 10.27%;
    left: 46.25%;
}
.center-line {
    width:60px;
    height:3px;
    background:rgba(2,164,175,1);
    position: absolute;
    top: 19%;
    left: 48.1%;
}
.payment-settlement,
.investment,
.account-management,
.loan-financing{
  position: absolute;
  top: 28.72%;
  width:20%;
  height:60%;
  background:rgba(255,255,255,1);
  border:1px solid rgba(213,213,213,1);
  text-align: center;
}
.payment-settlement {
  left: 8.38%;
}
.investment {
  left: 29.5%;
}
.account-management {
  left: 50.6%;
}
.loan-financing {
  left: 71.67%;
}
.payment-settlement img,
.investment img,
.account-management img,
.loan-financing img{
  position: absolute;
  width: 150px;
  height: 150px;
  top: 7.14%;
  left: 60px;
}
.payment-settlement a,
.investment a,
.account-management a,
.loan-financing a{
  position: absolute;
  top: 46.43%;
  left: 93px;
  height:42px;
  font-size:1.5em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(29,31,49,1);
  line-height:42px;
}
.payment-settlement span,
.investment span,
.account-management span,
.loan-financing span {
  width:50px;
  height:3px;
  background:rgba(2,164,175,1);
  position: absolute;
  top: 59.2%;
  left: 110px;
}
.payment-settlement p,
.investment p,
.account-management p,
.loan-financing p {
  font-size:1em;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(29,31,49,1);
  line-height:28px;
  text-align: center;
  position: relative;
  top: 66.42%;
}
</style>
