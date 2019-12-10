<template>
<!-- 产品能力 -->
<div class="productcapability">
  <div class="center">
    <span class="center-title">产品能力</span>
    <span class="center-line"></span>
  </div>
    <div class="payment-settlement" >
      <img  src="@/assets/images/productCapability_icon1.png" />
      <img class="background-img" src="@/assets/images/productCapability1.png" alt="">
      <p class="itemTitie" href="#">支付结算</p>
      <span></span>
      <div class="mouseenter">
      <a href="" class="detail-title">支付结算</a>
      <a href="" class="detail-content">线上实时转账，赋能本地中小微企业</a>
      </div>
    </div>
    <div class="investment">
      <img  src="@/assets/images/productCapability_icon2.png" />
      <img class="background-img" src="@/assets/images/productCapability2.png" />
      <p  class="itemTitie" href="#">投资理财</p>
      <span></span>
      <div class="mouseenter">
      <a href="" class="detail-title">投资理财</a>
      <a href="" class="detail-content">支付结算支付结算支付结算支付结算支付结算支付结算支付结算</a>
      </div>
    </div>
    <div class="account-management">
      <img src="@/assets/images/productCapability_icon3.png" />
      <img class="background-img" src="@/assets/images/close-up-photo-of-man-wearing-black-suit-jacket-doing-thumbs-684385.png" />
      <p class="itemTitie" href="#">账户管理</p>
      <span></span>
      <div class="mouseenter">
      <a href="" class="detail-title">账户管理</a>
      <a href="" class="detail-content">支付结算支付结算支付结算支付结算支付结算支付结算支付结算</a>
      </div>
    </div>
    <div class="loan-financing">
      <img src="@/assets/images/productCapability_icon4.png" />
      <img class="background-img" src="@/assets/images/productCapability4.png" />
      <p class="itemTitie" href="#">贷款融资</p>
      <span></span>
      <div class="mouseenter">
      <a href="" class="detail-title">贷款融资</a>
      <a href="" class="detail-content">支付结算支付结算支付结算支付结算支付结算支付结算支付结算</a>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "ProductCapability",
  data() {
    return {
      visible:false
    }
  },
  methods:{
    show() {
      this.visible = true;
      // console.log('aaa');
    },
    hide() {
      this.visible = false;
    }
  },
  components: {
  }
};
</script>
<style  scoped>
@import url("../../assets/styles/font/font.css");
.productcapability {
  width:100%;
  min-width: 1200px;
  height:736px;
  background:rgba(46,47,63,1);
  position:relative;
}
.center-title {
  font-size:1.56em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:50px;
  position: absolute;
  top: 11.6%;
  left: 46.25%;
}
.center-line {
  width:60px;
  height:3px;
  background:rgba(2,164,175,1);
  position: absolute;
  top: 18.38%;
  left: 48.1%;
}
.payment-settlement,
.investment,
.account-management,
.loan-financing{
  position: absolute;
  top: 25.34%;
  width:20%;
  height:455px;
  background:rgba(29,31,49,1);
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
.payment-settlement img:nth-of-type(1),
.investment img:nth-of-type(1),
.account-management img:nth-of-type(1),
.loan-financing img:nth-of-type(1){
  opacity:1;
  position: absolute;
  width: 121px;
  height: 121px;
  top: 24.5%;
  left: 27.8%;
}
.background-img {
  width:100%;
  height:100%;
  background:rgba(29,31,49,0.1);
  opacity: 0.5;
}
.payment-settlement p,
.investment p,
.account-management p,
.loan-financing p{
  position: absolute;
  top: 55.78%;
  left: 33.25%;
  font-size:1.3em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:42px;
}
.payment-settlement span,
.investment span,
.account-management span,
.loan-financing span {
  width:45px;
  height:4px;
  background:rgba(2,164,175,1);
  position: absolute;
  top: 66%;
  left: 42.34%;
}
.mouseenter {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  display: none;
}
.payment-settlement:hover .mouseenter {
  background-image: url(../../assets/images/shopping-business-money-pay-50987.png);
  display: block;
}
.investment:hover .mouseenter {
  background-image: url(../../assets/images//productCapability2.png);
  display: block;
}
.account-management:hover .mouseenter {
  background-image: url(../../assets/images/close-up-photo-of-man-wearing-black-suit-jacket-doing-thumbs-684385.png);
  display: block;
}
.loan-financing:hover .mouseenter {
  background-image: url(../../assets/images/productCapability4.png);
  display: block;
}
.detail-title {
  position: absolute;
  left: 30.25%;
  top: 23.43%;
  height:42px;
  font-size:1.44em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:600;
  color:black;
  line-height:42px;
}
.detail-content {
  position: absolute;
  top: 39%;
  left: 20.77%;
  right: 20.77%;
  font-size:1em;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:black;
}
</style>
