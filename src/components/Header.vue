<template>
  <div class="header">
    <div class="header-logo">
      <img src="@/assets/images/head-logo.png" >
      <div class="logo-text">
        <a href="/">开放银行</a>
      <span>Open Banking</span>
      </div>
    </div>
    <div class="header-nav">
            <Menu class="header-menu" mode="horizontal" :theme="theme1" @on-select="selected" :active-name="menuId">
                <MenuItem name="1" class="procapability" to="/procapability">
                    <p class="menu-title" >产品能力</p>
                </MenuItem>
                <MenuItem name="2" class="devaccess" to="/devaccess">
                    <p class="menu-title">开发接入</p>
                </MenuItem>                
                <MenuItem name="3" class="documentcenter" to="/documentcenter">
                    <p class="menu-title">文档中心</p>
                </MenuItem>
                <MenuItem name="4" class="sandboxtest" to="/sandbox/parameterset">
                    <p class="menu-title">API沙箱</p>
                </MenuItem>
                <MenuItem name="5" class="devhelp" to="/devhelp">
                    <p class="menu-title">帮助与支持</p>
                </MenuItem>
            </Menu>
    </div>
    <div class="user-login" v-show="loginBox">
      <!-- 未登录 -->
      <a href="/login" class="login-register-item" v-if="!curr_user">登录</a>
      <a href="/register" class="register-register-item" v-if="!curr_user">注册</a>
      <!-- 已登录 -->
      <div class="userinfo" v-if="curr_user">
        <Dropdown>
          <img class="user-head" src="@/assets/images/user-head-img.png" >
          <DropdownMenu slot="list">
            <DropdownItem disabled>测试帐号</DropdownItem>
            <DropdownItem @click.native="goPush('/accountcenter/userinfo')">账户中心</DropdownItem>
            <DropdownItem @click.native="goPush('/applicationlist')">应用中心</DropdownItem>
            <DropdownItem >退出</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        <a class="msg-icon" href="/msgcenter" style="position: absolute;left:75px;top:5px;">
              <Badge :count="msgamount" size="20">
                <Icon type="ios-mail-outline" size="30"/>
              </Badge>
            </a>
      </div>
    </div>
    <img class="search-icon" v-show="searchIconShow" @click="searchShow" src="@/assets/images/hf_8.png">
    <div class="search-box" v-show="searchBox">
      <i class="iconfont  icon-searchicon"></i>
          <i-input
            ref="search"
            class="search-val"
            placeholder="输入关键词搜索"
            autocomplete="off"
            name="keywords-header"
            id="keywords-header"
            v-model="keywords"
            @on-blur="searchBlur"
            @keyup.13.native="handleSearch"
          />
    </div>
  </div>
</template>

<script>
import 'view-design/dist/styles/iview.css';
export default {
  name:'Header',
  data() {
    return {
      theme1:'light',
      curr_user:true,
      msgamount:999,
      loginBox: true,
      searchBox: false,
      searchIconShow: true,
      keywords: '',
      menuId:'',
    }
  },
  methods: {
    searchShow() {
      this.searchBox = true;
      this.loginBox = false;
      this.searchIconShow = false;
      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    },
    searchBlur() {
      this.searchBox = false;
      this.loginBox = true;
      this.searchIconShow = true;
    },
    goPush(path) {
      this.$router.push(path);
    },
    selected(name) {
      this.menuId = name;
      // console.log(this.menuId);
    },
  },
}
</script>

<style  scoped>
.header {
  width: 100%;
  min-width: 1280px;
  height: 80px;
  position: relative;
  background:rgba(255,255,255,1);
  box-shadow: 0 0 20px 15px rgba(241, 235, 235, 0.3);
}
.header-logo {
  width: 280px;
  height: 60px;
  position: absolute;
  left: 8%;
  top: 10px;
}
.header-logo img {
  width: 180px;
}
.logo-text {
  width: 90px;
  height: 40px;
  position: absolute;
  top: 12px;
  left:180px ;
  border-style:solid;
  border-width:0 0 0 1px;
  border-right-color:#000;
  font-family:PingFangSC-Regular,PingFang SC;
  
}
.logo-text a {
  position: absolute;
  left: 8px;
  font-size:1em;
  font-weight:400;
  color:rgba(29,31,49,1);
  text-decoration:none;
}
.logo-text span {
  position: absolute;
  top: 20px;
  left: 8px;
  font-size:0.7em;
  font-weight:400;
  color:rgba(29,31,49,1);
}
.header-nav {
  height: 80px;
  width: 52%;
  position: relative;
  left: 28%;
  top: 0px; 
  font-size:1.175em;
  font-weight: 600;
  font-family:PingFangSC-Medium,PingFang SC;
}
.header-menu {
  width: 100%;
  position:absolute;
  /* left: 25%; */
}
.procapability {
  position: absolute;
  left: 0%;
}
.devaccess {
  position: absolute;
  left: 15%;
}
.documentcenter {
  position: absolute;
  left: 30%;
}
.sandboxtest {
  position: absolute;
  left: 45%;
}
.devhelp {
  position: absolute;
  left: 60%;
}
.header-nav ul {
  height: 80px;
  line-height: 80px;
}
.ivu-menu a {
  width: 110px;
}
.ivu-menu-item p {
  position: relative;
  left: 10px;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0px;
}
.user-login {
  width: 120px;
  position: relative;
  left: 80%;
  top: -65px;
}
.login-register-item,
.register-register-item {
  position: relative;
  top: 5px;
  font-size:1em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(29,31,49,1);
  line-height:30px;
}
.register-register-item {
  left: 20px;
}
.search-icon {
  position: absolute;
  right: 8%;
  top: 35px;
  width: 25px;
  height: 25px;
}
.user-head{
  width: 40px;
  height: 40px;
}
.search-box {
  position: absolute;
  left: 82%;
  top: 30px;
}

</style>
