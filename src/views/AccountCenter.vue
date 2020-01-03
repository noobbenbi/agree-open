<template>
<div>
    <Header></Header>
    <div class="accountcenter">
        <div class="toppart">
            <img src="@/assets/images/accountcenter-background.png">
            <img src="@/assets/images/UserAvatar.png">
            <span class="center-title">{{userName}}</span>
            <span class="center-line"></span>
            <button class="btn-createapp">创建应用</button>
        </div>
        <div class="menu">
            <Menu mode="horizontal" :theme="theme3" active-name="1" >
                <MenuItem name="1" class="mydata"  to="/accountcenter/userinfo">
                    <p class="menu-title" >我的资料</p>
                </MenuItem>
                <MenuItem name="2" class="myapp"  to="/accountcenter/myapp">
                    <p class="menu-title">我的应用</p>
                </MenuItem>                
                <MenuItem name="3" class="myagreement"  to="/accountcenter/agreement">
                    <p class="menu-title">我的协议</p>
                </MenuItem>
            </Menu>
        </div>
        <router-view></router-view>
    </div>
    <Footer></Footer>
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
            infoVis:true,
            theme3:'light'
        }
    },
    methods: {
        
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
.body{
    display: flex;
    flex-direction: column;
}
.accountcenter {
    position: relative;
    width: 100%;
    min-width: 1200px;
    background:rgba(255,255,255,1);
    text-align: center;
}
.toppart {
    height: 356px;
}
.accountcenter img:nth-of-type(1) {
    width:100%;
    height:356px;
}
.accountcenter img:nth-of-type(2) {
    width:112px;
    height:112px;
    margin: 0 auto;
    position: relative;
    top: -300px;
    
}
.center-title {
  font-size:1.2em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  display: table;
  margin: 0 auto;
  position: relative;
  top: -280px;
}
.center-line {
  width:2.3%;
  height:2px;
  background:rgba(2,164,175,1);
  position: relative;
  display: table;
  margin: 0 auto;
  top: -270px;
}
.btn-createapp {
    width:7.3%;
    height:30px;
    background:rgba(2,164,175,1);
    position: relative;
    display: table;
    margin: 0 auto;
    top: -240px;
    border: none;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.menu {
    position:  relative;
    /* top: 43.7%; */
    width: 100%;
}
.menu-title {
    font-size:1.2em;
    font-family:PingFangSC-Medium,PingFang SC;

}
.mydata {
    position: absolute;
    left: 32%;
    top: 0;
    font-family:PingFangSC-Medium,PingFang SC;
    color:rgba(29,31,49,1);
}
.myapp {
    position: absolute;
    left: 46.6%;
}
.myagreement {
    position: absolute;
    left: 61.4%;
}
</style>