<template>
<div>
    <Header></Header>
    <div class="accountcenter">
        <AccountHeader></AccountHeader>
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
import AccountHeader from '../components/AccountHeader';
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
        UserInfo,
        AccountHeader
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
.menu {
    position:  relative;
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