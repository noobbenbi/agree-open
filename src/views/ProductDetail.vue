<template>
<div>
    <Header></Header>
    <div class="productdetail">
        <ProDetailSider></ProDetailSider>
        <div class="detail-text">
            <p class="product-title">{{proDetail[0].proName}}</p>
            <Divider class="cut-line"/>
            <div class="pro-definition">
                <span></span>
                <p class="title-text">产品定义与介绍</p>
                <p class="content-text">{{proDetail[0].proDefinition}}</p>
            </div>
            <div class="scenes-des">
                <span></span>
                <p class="title-text">应用场景描述</p>
                <p class="content-text">{{proDetail[0].scenes}}</p>
            </div>
            <div class="contact-info">
                <span></span>
                <p class="title-text">联系人与联系方式</p>
                <p class="content-text">{{proDetail[0].contactInfo}}</p>
            </div>
        </div>        
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProDetailSider from '../components/procapability/ProDetailSider';
export default {
    name:'ProductDetail',
    data() {
        return {
            proDetail:[
                {
                    proName:'e享账户',
                    proDefinition:'e享账户是通过江苏银行手机银行app纯线上实时开立的电子二类账户。开立成功后，可通过绑定的借记卡向e享账户进行资金转入，并可使用该账户在手机银行、个人网银渠道享受理财投资、缴费支付、申请贷款等功能服务，便捷地满足了客户的日常投资消费需求。不到江苏银行网点，没有江苏银行借记卡，也可享受江苏银行的全方位服务。',
                    scenes:'通过电子银行进行投资、缴费、支付、贷款，不受渠道限制',
                    contactInfo:'张梅 ： 025-58587413'
                }
            ],
        }
    },
    components: {
        Header,
        Footer,
        ProDetailSider
    }
}
</script>

<style scoped>
@import url("../assets/styles/font/font.css");
.productdetail {
    width: 100%;
    min-width: 1200px;
    height: 1700px;
    height: auto;
    min-height:580px; 
    position: relative; 
    top: 30px;
    display: flex;
    flex-direction: row;
}
.cut-line {
    position: absolute;
    top: 0;
}
.detail-text {
    width: 65%;
    height: 600px;
    position: relative;
    padding-left: 50px;
    margin-bottom: 90px;
    top: 100px;
}
.cut-line {
    position: absolute;
    top: 35px;
}
.product-title {
    position: relative;
    font-size:1.725em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
}
.pro-definition {
    position: absolute;
    top: 100px;
}
.scenes-des {
    position: absolute;
    top: 280px;
}
.contact-info {
    position: relative;
    top: 380px;
}
.detail-text span {
    position: absolute;
    left: 0px;
    top: 5px;
    width:3px;
    height:15px;
    background:rgba(2,164,175,1);
}
.title-text {
    width: 200px;
    position: absolute;
    left: 15px;
    top: 0px;
    font-size:1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
}
.content-text {
    width: 700px;
    position: absolute;
    top: 50px;
    left: 15px;
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    line-height:25px;
}
</style>