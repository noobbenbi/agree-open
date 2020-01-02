<template>
<div>
    <router-view></router-view>
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
      <p @click="goDetail">电子账户
        <br/>
        e想账户
        <br/>
        现金管理账户
      </p>
    </div>
    <div class="investment">
      <img src="@/assets/images/Investment.png" />
      <a class="itemTitie" @click="goIntro('2')">投资理财</a>
      <span></span>
     <p>电子账户
        <br/>
        e想账户
        <br/>
        现金管理账户
      </p>
    </div>
    <div class="account-management">
      <img src="@/assets/images/Account-management.png" />
      <a class="itemTitie" @click="goIntro('3')">账户管理</a>
      <span></span>
      <p>电子账户
        <br/>
        e想账户
        <br/>
        现金管理账户
      </p>
    </div>
    <div class="loan-financing">
      <img src="@/assets/images/Loan-financing.png" />
      <a class="itemTitie" @click="goIntro('4')">贷款融资</a>
      <span></span>
      <p>电子账户
        <br/>
        e想账户
        <br/>
        现金管理账户
      </p>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>
<script>
import Header from "../components/Header";
import Loopautoplay from '@/components/LoopAutoplay';
import Footer from "@/components/Footer";
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
    },
    goDetail() {
      this.$router.push('/productdetail');
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
  height: 0px;
  padding-bottom: 50%;
  background-color:rgba(255,255,255,1);
  position: relative;
  text-align: center;
}
.center-title {
    font-size:1.6em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
    display: table;
    margin: 5% auto;
}
.center-line {
    width:60px;
    height:3px;
    background:rgba(2,164,175,1);
    display: table;
    margin: -4.5% auto;
}
.payment-settlement,
.investment,
.account-management,
.loan-financing{
  position: absolute;
  top: 18.72%;
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
  width: 52%;
  height: 36%;
  display: table;
  margin: 0 auto;
  position: relative;
  top: 5%;
}
.payment-settlement a,
.investment a,
.account-management a,
.loan-financing a{
  display: table;
  margin: 19% auto;
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
  display: table;
  margin: 0 auto;
  position: relative;
  top: -12%;
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
  margin: 0 auto;
  cursor: pointer;
}
</style>
