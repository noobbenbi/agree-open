<template>
<!-- 产品能力 -->
<div class="productcapability">
  <div class="center">
    <span class="center-title">产品能力</span>
    <span class="center-line"></span>
  </div>
    <div class="payment-settlement" >
      <img  src="@/assets/images/productCapability_icon1.png" />
      <p class="itemTitie" href="#">支付结算</p>
      <span class="center-line-out"></span>
      <div class="mouseenter">
      <div class="content-enter">
        <a href="#" class="detail-title">支付结算</a>
        <span class="center-line-enter"></span>
        <p class="detail-content">{{enterText}}</p>
        <div class="btn-box">
            <button class="btn-enter">查看更多</button>
          </div>
      </div>
      </div>
    </div>
    <div class="investment">
      <img  src="@/assets/images/productCapability_icon2.png" />
      <p  class="itemTitie" href="#">投资理财</p>
      <span class="center-line-out"></span>
      <div class="mouseenter">
        <div class="content-enter">
          <a href="#" class="detail-title">投资理财</a>
          <span class="center-line-enter"></span>
          <p class="detail-content">{{enterText}}</p>
          <div class="btn-box">
            <button class="btn-enter">查看更多</button>
          </div>
        </div>
      </div>
    </div>
    <div class="account-management">
      <img src="@/assets/images/productCapability_icon3.png" />
      <p class="itemTitie" href="#">账户管理</p>
      <span class="center-line-out"></span>
      <div class="mouseenter">
        <div class="content-enter">
          <a href="#" class="detail-title">账户管理</a>
          <span class="center-line-enter"></span>
          <p class="detail-content">{{enterText}}</p>
          <div class="btn-box">
            <button class="btn-enter">查看更多</button>
          </div>
        </div>
      </div>
    </div>
    <div class="loan-financing">
      <img src="@/assets/images/productCapability_icon4.png" />
      <p class="itemTitie" href="#">贷款融资</p>
      <span class="center-line-out"></span>
      <div class="mouseenter">
        <div class="content-enter">
          <a href="#" class="detail-title">贷款融资</a>
          <span class="center-line-enter"></span>
          <p class="detail-content">{{enterText}}</p>
          <div class="btn-box">
            <button class="btn-enter">查看更多</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "ProductCapability",
  data() {
    return {
      visible:false,
      enterText:'赞同科技API开放平台是一款基于OpenAPI的服务管控、运行和开放平台'
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
  height: 0px;
  padding-bottom: 54%;
  background:rgba(46,47,63,1);
  position:relative;
}
.center-title {
  font-size:1.56em;
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
.payment-settlement,
.investment,
.account-management,
.loan-financing{
  position: absolute;
  top: 25.34%;
  width:20%;
  height:62%;
  background:rgba(29,31,49,1);
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
.payment-settlement img:nth-of-type(1),
.investment img:nth-of-type(1),
.account-management img:nth-of-type(1),
.loan-financing img:nth-of-type(1){
  opacity:1;
  width: 121px;
  height: 121px;
  margin: 40% auto 30%;
}

.itemTitie
{
  margin: -20% auto;
  font-size:1.3em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:42px;
}

.center-line-out
{
  width:15%;
  height:4px;
  background:rgba(2,164,175,1);
  display: table;
  margin: 0 auto;
  position: relative;
  top: 12%;
}
.mouseenter {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  display: none;
  /* cursor: pointer; */
}
.payment-settlement {
  background-image: url(../../assets/images/productCapability1.png);
  background-size: 100% 100%;
}
.investment {
  background-image: url(../../assets/images/productCapability2.png);
  background-size: 100% 100%;
}
.account-management {
  background-image: url(../../assets/images/close-up-photo-of-man-wearing-black-suit-jacket-doing-thumbs-684385.png);
  background-size: 100% 100%;
}
.loan-financing {
  background-image: url(../../assets/images/productCapability4.png);
  background-size: 100% 100%;
}
.payment-settlement:hover .mouseenter {
  background-image: url(../../assets/images/productCapability1-mohu.png);
  background-size: 100% 100%;
  display: block;
  top: 0px;
}
.investment:hover .mouseenter {
  background-image: url(../../assets/images//productCapability2-mohu.png);
  background-size: 100% 100%;
  display: block;
}
.account-management:hover .mouseenter {
  background-image: url(../../assets/images/productCapability3-mohu.png);
  background-size: 100% 100%;
  display: block;
}
.loan-financing:hover .mouseenter {
  background-image: url(../../assets/images/productCapability4-mohu.png);
  background-size: 100% 100%;
  display: block;
}
.content-enter {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 25%;
  transition:all 0.2s  ease-in-out;
}
.mouseenter:hover .content-enter {
  position: absolute;
  top: 0px;
}
.detail-title {
  position: relative;
  margin: 45% auto 0%;
  display: table;
  height:42px;
  font-size:1.64em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:42px;
}
.center-line-enter{
  width: 15%;
  height: 4px;
  background:rgba(255,255,255,1);
  display: table;
  margin: 5% auto;
  position: relative;
}
.detail-content {
  display: table;
  margin: 10% 10% 0%;
  font-size:1.25em;
  text-indent: 1em;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.btn-box {
  position: relative;
  width: 90px;
  height: 30px;
  border:solid 1px white;
  border-radius: 3px;
  margin: 10% auto;
}
.btn-enter {
  width: 90px;
  height: 30px;
  background-color: transparent;
  border-width: 3px;
  border: white;
  color:#FFFFFFFF;
  font-family:PingFangSC-Regular,PingFang SC;
}
</style>
