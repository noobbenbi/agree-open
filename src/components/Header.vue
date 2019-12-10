<template>
  <div>
    <div class="header">
      <div class="section">
        <div class="header-logo">
          <img src="@/assets/images/head-logo.png" />
          <div class="divide-line"></div>
          <div class="logo-word">
            <a href="/">{{ $t("openTitle")}}</a>
            <small>Open.com</small>
          </div>
        </div>
        <div class="head_menu">
            <a href="javascript:;" @click="HandleLink('/procapability')">产品能力</a>
            <a href="javascript:;" @click="HandleLink('/devaccess')">开发接入</a>
            <a href="javascript:;" @click="HandleLink('')">文档中心</a>
            <a href="javascript:;" @click="HandleLink('')">API沙箱</a>
            <a href="javascript:;" @click="HandleLink('')">帮助与支持</a>
        </div>
        <div class="login-register" v-show="loginBox">
          <!-- 未登录 -->
          <a href="/login" class="login-register-item" v-if="!curr_user">登录</a>
          <a href="/register" class="register-register-item" v-if="!curr_user">注册</a>
          <!-- 已登录 -->
          <div class="user-info" v-if="curr_user">
            <a
              class="user-bar clear-a-color"
              href="/accountCenter"
              @mouseenter="showUserInfo"
              @mouseleave="hideUserInfo"
            >
              <transition name="fade" mode="out-in">
                <div class="user-drop">
                  <Dropdown>
                <a href="#">
                    13812345678
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem  @on-click.native="HandleLink('/accountcenter')">账户中心</DropdownItem>
                    <DropdownItem href="/appCenter">应用中心</DropdownItem>
                    <DropdownItem href="javascript:;" @click="changeLoacle('zh')">切换中文</DropdownItem>
                    <DropdownItem href="javascript:;" @click="changeLoacle('en')">切换英文</DropdownItem>
                    <DropdownItem href="/login">退出</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </div>
              </transition> 
            </a>
            <a class="clear-a-color msgcenter" href="/msgcenter" style="position: absolute;left:150px;top:-3px;">
              <Badge :count="msgamount" size="25">
                <Icon type="ios-mail-outline" href='/msgcenter' size="30"/>
              </Badge>
            </a>
          </div>
        </div>
        <img
          src="@/assets/images/hf_8.png"
          id="search-show-icon"
          class="search-show-icon"
          @click="searchShow"
          v-show="searchIconShow"
        />
        <div class="search-item" v-show="this.searchBox">
          <i class="iconfont search-icon icon-searchicon" id="search-icon"></i>
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
    </div>
  </div>
</template>
<script>
import { constants } from "crypto";
import 'view-design/dist/styles/iview.css';
export default {
  name: "Header",
  // inject:['reload'],
  data() {
    return {
      searchBox: false,
      loginBox: true,
      searchIconShow: true,
      curr_user: true,
      userInfoShow: false,
      iconTranslate: false,
      keywords: '',
      msgamount:999
    };
  },
  methods: {
    //点击搜索图标，显示搜索框
    searchShow() {
      this.searchBox = true;
      this.loginBox = false;
      this.searchIconShow = false;
      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    },
    //搜索框失焦事件
    searchBlur() {
      this.searchBox = false;
      this.loginBox = true;
      this.searchIconShow = true;
    },
    handleSearch() {
      this.$router.push({
        path:'/search',
        query:{
          from: "全部",
          keywords: this.keywords
        }
      })
    },
    HandleLink(path) {
      this.$router.push(path);
    },
    showUserInfo() {
      this.userInfoShow = true;
      this.iconTranslate = true;
    },
    hideUserInfo() {
      this.userInfoShow = false;
      this.iconTranslate = false;
    },
    changeLoacle(lang) {
      // debugger
      // if (lang == "zh") {
      //   localStorage.setItem("locale", "zh");
      //   this.$i18n.locale == "zh";
      //   // this.reload();
      // } else if (lang == "en") {
      //   localStorage.setItem("locale", "en");
      //   this.$i18n.locale == "en";
        
      // }
      localStorage.setItem("locale", lang);
      this.$i18n.locale =localStorage.getItem("locale");
      this.reload();
    }
  },
  computed: {
    activeClass() {
      let path = this.$route.name;
      return path;
    }
  },
  created() {
    //  this.keyupEnter()
  }
};
</script>
<style  scoped>
@import url("../assets/styles/font/font.css");
.header {
    width:100%;
    min-width: 1200px;
    height: 90px;
    background:rgba(255,255,255,1);
    position: relative;
    top: 0%;
}
.header-logo img{
    height: 66.67%;
    width: 12.5%;
    position: absolute;
    top: 15%;
    /* top: 23px; */
    left: 8.3%;
}
.logo-word {
    height: 100%;
}
.logo-word a{
    position: absolute;
    top: 20.2%;
    /* top: 35px; */
    left: 21.4%;
    font-size:1.25em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    text-decoration:none;
}
.logo-word small {
    position: absolute;
    /* top: 72.5%; */
    bottom: 29.2%;
    /* bottom: 35px; */
    left: 21.4%;
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
}
.head_menu {
    font-size:1.175em;
    /* font-size: 22px; */
}
.head_menu a {
    color: black;
    position: absolute;
    text-decoration:none;
    top: 36.7%;
    font-weight: 500;
    font-family:PingFangSC-Medium,PingFang SC;
}
.head_menu a:nth-of-type(1) {
    left:30.3%;
}
.head_menu a:nth-of-type(2) {
    left: 38.1%;
}
.head_menu a:nth-of-type(3) {
    left: 46%;
}
.head_menu a:nth-of-type(4) {
    left: 53.8%;
}
.head_menu a:nth-of-type(5) {
    left: 61.1%;
}
.login-register-item {
    position: absolute;
    left: 82%;
    top: 35.3%;
    font-size:1.375em;
    font-weight:400;
    font-family:PingFangSC-Regular,PingFang SC;
    /* font-weight:400; */
    color:rgba(29,31,49,1);
}
.register-register-item {
    position: absolute;
    left: 86%;
    top: 35.3%;
    font-size:1.375em;
    font-weight:400;
    font-family:PingFangSC-Regular,PingFang SC;
    /* font-weight:400; */
    color:rgba(29,31,49,1);
}
.user-info {
    position: absolute;
    left: 75.7%;
    top: 40.3%;
}
.search-item {
    position: absolute;
    left: 82.8%;
    top: 30.3%;
}
#search-show-icon {
    position: absolute;
    top: 40.3%;
    left: 92%;
    height: 26px;
}
</style>
