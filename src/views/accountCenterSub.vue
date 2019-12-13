
<template>
<div class="allbody">
    <Header></Header>
    <div class="productintro">
        <div class="productintro-title">
            
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem">账户中心</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="/test">{{guide}}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>
    <div class="blook">
        <div class="select-lab">
            <Menu :theme="theme3" :active-name="this.activeNum"  class="menu1" style="width:100%"> 
                <div class="ac-box">
                    <div class="imgg"><img src="" alt=""></div>
                    <h3 class="fontww">用户名</h3>
                    <div class="line-box"></div>    
                    <i-button type="primary" class="ac-box-button">创建应用</i-button>
                </div>
                <div class="menulist" >
                    <MenuItem name="1" class="menuitem" @click.native="changeGuide(1)"> 
                        <p>我的资料</p>
                    </MenuItem>
                    <MenuItem name="2" class="menuitem" @click.native="changeGuide(2)">
                        <p>我的应用</p>
                    </MenuItem>
                    <MenuItem name="3" class="menuitem" @click.native="changeGuide(3)">
                        <p>我的协议</p>
                    </MenuItem>
                </div>
            </Menu>
        </div>
            <div class="productintro-content">
                <MyData v-if="ishow"></MyData>
                <myApp v-if="ison"></myApp>
                <myAgree v-if="isat"></myAgree>
            </div>
    </div>
    <Footer></Footer>
    
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyData from '../components/myAcc/myData';
import myAgree from '../components/myAcc/myAgreement';
import myApp from '../components/myAcc/myApp';

export default {
    name:'accountCenterSub',
    prop: "name",
    data () {
        return {
            theme3: 'light',
            guide:"我的资料",
            ishow:true,
            isat:false,
            ison:false,
            activeNum:"1",
        }
    },
    components: {
        // Header,
        Footer,
        MyData,
        myApp,
        myAgree,
        Header
    },
    methods:{
        changeGuide(a){
            switch(a){
                case 1:
                this.guide="我的资料";
                this.ishow=true;this.isat=false;this.ison=false;
                break;
                case 2:
                this.guide="我的应用";
                this.ison=true;this.ishow=false;this.isat=false;
                break;
                case 3:
                this.guide="我的协议";
                this.isat=true;this.ishow=false;this.ison=false;
                break;
            }
        }
    },
    beforeCreate () {
    document.querySelector('body').setAttribute('style', 'margin: 0 auto; width: 100%;  background:white; overflow-x: hidden;height: 100%;');
    }

}
</script>


<style  scoped>
body{
    width: 100%;
    background: white;
}
html{
    background: white;
}


.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: white;
    
    width: 100%;
    text-align: center;
}


.allbody{
    background-color: #fff;
    width: 100%;
    min-width: 1366px;
    
}
.productintro {
    /* padding: 10px; */
    margin: 0px 80px 0;  
}
.productintro-title{
    padding-top: 12px;
    margin: 10px 20px 0;
    height: 90px;
}

.breadcrumbitem{
    font-size:15px;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:50px;
}
.select-lab{
    float: left;
    width: 240px;
    display: inline-block;
    text-align: center;
    margin-left: 100px;
}

.menu1{
    width: 100%;
    background-color: #fff;
}


.ac-box{
    height: 328px;
    background-color: rgba(2,164,175,0.04);
    font-size:15px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    padding:40px 60px 0;
    text-align: center;
    
    
}
.imgg{
    height: 120px;
    width: 120px;
    background-color: blueviolet;
}
.fontww{
    margin-top: 10px;
}
.ac-box img{
    height: 120px;
    width: 120px;

}
.menulist{
    border: rgba(2,164,175,0.04) 2px solid;
}
.ac-box-button{
    background:rgba(2,164,175,1);
    text-align: center;
    height: 48px;
    font-size:15px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:28px;
}
.line-box{
    margin: 10px 40px 15px;
            
    width: 40px;
    height: 2px;
    background: rgba(2,164,175,1);
            
}


.menuitem {
    width: 240px;
    height: 99px;
    background: rgba(2,164,175,0.04);
    
}
.menuitem p{
    height:71px;
    font-size:17px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(74,74,74,1);
    line-height:71px;
}
.productintro-content{
    background-color: white;
    display: inline-block;
    padding-left: 30px;
    /* height: 1020px; */
    width: 900px;

}
</style>