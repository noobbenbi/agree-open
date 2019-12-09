<template>
<div>
    <Header></Header>
    <div class="accountcenter">
        <img src="@/assets/images/accountcenter-background.png">
        <!-- 切图缺失需替换 -->
        <img src="@/assets/images/UserAvatar.png">
        <span class="center-title">{{userName}}</span>
        <span class="center-line"></span>
        <button class="btn-createapp">创建应用</button>
        <div class="menu">
            <Menu mode="horizontal" :theme="light" active-name="1" >
                <MenuItem name="1" class="mydata" @click.native="infoToShow">
                    <p class="menu-title" >我的资料</p>
                </MenuItem>
                <MenuItem name="2" class="myapp" @click.native="appToShow">
                    <p class="menu-title">我的应用</p>
                </MenuItem>                
                <MenuItem name="3" class="myagreement" @click.native="agreementToShow">
                    <p class="menu-title">我的协议</p>
                </MenuItem>
            </Menu>
        </div>
        <Agreement v-show="agreeVis" ></Agreement>
        <Application v-show="appVis" ></Application>
        <UserInfo v-show="infoVis" ></UserInfo>
    </div>
    <!-- <Footer></Footer> -->
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Agreement from '../components/accountcenter/Agreement';
import Application from '../components/accountcenter/Application';
import UserInfo from '../components/accountcenter/UserInfo';
export default {
    name:'AccountCenter',
    data () {
        return {
            userName:'测试帐号',
            agreeVis:false,
            appVis:false,
            infoVis:true
        }
    },
    methods: {
        agreementToShow() {
            this.agreeVis = true;
            this.appVis = false;
            this.infoVis = false;
        },
        appToShow() {
            this.agreeVis = false;
            this.appVis = true;
            this.infoVis = false;
        },
        infoToShow() {
            this.agreeVis = false;
            this.appVis = false;
            this.infoVis = true;
        }
    },
    components: {
        Header,
        Footer,
        Agreement,
        Application,
        UserInfo
    }
}
</script>

<style  scoped>
@import url("../assets/styles/font/font.css");
.accountcenter {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 814px;
    background:rgba(255,255,255,1);
}
.accountcenter img:nth-of-type(1) {
    width:100%;
    height:43.7%;
    position: absolute;
    top: 0%;
}
.accountcenter img:nth-of-type(2) {
    width:8.3%;
    height:14%;
    background:rgba(74,74,74,1);
    position: absolute;
    top: 10.1%;
    left: 45.8%;
}
.center-title {
  width:7.5%;
  height:4.4%;
  /* font-size:26px; */
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  /* line-height:50px; */
  position: absolute;
  top: 25.6%;
  left: 48%;
}
.center-line {
  width:2.3%;
  height:2px;
  background:rgba(2,164,175,1);
  position: absolute;
  top: 30%;
  left: 48.6%;
}
.btn-createapp {
    width:7.3%;
    height:4.2%;
    background:rgba(2,164,175,1);
    /* border-radius:2px; */
    position: absolute;
    top: 33.5%;
    left: 46.4%;
    border: none;
    /* font-size:20px; */
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.menu {
    position: absolute;
    top: 43.7%;
    width: 100%;
}
.menu-title {
    /* font-size:1.375em; */
    font-family:PingFangSC-Medium,PingFang SC;
    /* font-weight:500; */

}
.mydata {
    position: absolute;
    left: 35%;
    top: 0;
    font-family:PingFangSC-Medium,PingFang SC;
    /* font-weight:500; */
    color:rgba(29,31,49,1);
}
.myapp {
    position: absolute;
    left: 47.6%;
    /* top: 679px; */
}
.myagreement {
    position: absolute;
    left: 60.4%;
    /* top: 679px; */
}
</style>