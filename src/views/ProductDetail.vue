<template>
<div>
    <Header></Header>
    <div class="productdetail">
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="/productintro">产品介绍</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" >产品详情</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <Content :style="{padding: '40px 0 80px 0', minHeight: '280px', background: '#fff'}">
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
            <Menu class="menu-box"  :open-names="['1']" width="240px">
                <Submenu class="select-box" name="1">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-card" size="25"/>
                        <span>支付结算</span>
                    </template>
                    <MenuItem name="1-1" class="dh-title-son"><p>e享账户</p></MenuItem>
                    <MenuItem name="1-2" class="dh-title-son"><p>账户管理</p></MenuItem>
                    <MenuItem name="1-3" class="dh-title-son"><p>贷款融资</p></MenuItem>
                </Submenu>
                <Submenu class="select-box" name="2">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-sync" size="25"/>
                        <span>投资理财</span>
                    </template>
                    <MenuItem name="2-1" class="dh-title-son"><p>Option 5</p></MenuItem>
                    <MenuItem name="2-2" class="dh-title-son"><p>Option 6</p></MenuItem>
                    <MenuItem name="2-3" class="dh-title-son"><p>Option 7</p></MenuItem>
                </Submenu>
                <Submenu class="select-box" name="3">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-contacts-outline" size="25"/>
                        <span>账户管理</span>
                    </template>
                    <MenuItem name="3-1" class="dh-title-son"><p>Option 9</p></MenuItem>
                    <MenuItem name="3-2" class="dh-title-son"><p>Option 10</p></MenuItem>
                    <MenuItem name="3-3" class="dh-title-son"><p>Option 11</p></MenuItem>
                </Submenu>
                <Submenu class="select-box" name="4">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-color-filter-outline" size="25"/>
                        <span>贷款融资</span>
                    </template>
                    <MenuItem name="4-1" class="dh-title-son"><p>Option 9</p></MenuItem>
                    <MenuItem name="4-2" class="dh-title-son"><p>Option 10</p></MenuItem>
                    <MenuItem name="4-3" class="dh-title-son"><p>Option 11</p></MenuItem>
                </Submenu>
            </Menu>
            </Sider>
                <Content class="content" :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
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
                </Content>
            </Layout>
        </Content>        
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        Footer
    }
}
</script>

<style scoped>
@import url("../assets/styles/font/font.css");
.body{
     display: flex;
     flex-direction: column;
}
.productdetail {
    width: 100%;
    min-width: 1200px;
    height: 1700px;
    height: auto;
    min-height:580px; 
    position: relative;
    top: 30px;
}
.cut-line {
    position: absolute;
    top: 0;
}
.breadcrumbitem{
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.productintro-title {
    position: absolute;
    top: 20px;
    left: 110px;
}
.menu-box {
    position: relative;
    left: 110px;
    top: 40px;
}
.title-icon {
    position: relative;
    top: 7px;
}
.select-box /deep/ .ivu-menu-submenu-title{
    height: 70px;
    background-color: #F5FCFC
}
.dh-title-son /deep/ .ivu-menu-item{
    height: 45px;
}
.select-box span {
    font-size:1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    position: absolute;
    left: 23.3%;
    top: 20px;
}
.dh-title-son p {
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:28px;
    position: relative;
    left: 13px;
}
.detail-text {
    width: 65%;
    height: 600px;
    position: relative;
    left: 150px;
    top: 0px;
}
.cut-line {
    position: absolute;
    top: 35px;
}
.product-title {
    position: absolute;
    top: 0px;
    left: 20px;
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