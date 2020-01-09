<template>
<div class="accountheader">
        <img src="@/assets/images/UserAvatar.png">
        <span class="center-title">{{userName}}</span>
        <span class="center-line"></span>
        <button class="btn-createapp" @click="$router.push('/createnewapp')">创建应用</button>
</div>
</template>

<script>
export default {
    name:'AccountHeader',
    data(){
        return{
            userName:'用户名'
        }
    }
}
</script>

<style  scoped>
.accountheader {
    position: relative;
    background-image: url(../assets/images/accountcenter-background.png);
    background-size: 100% 100%;
    height: 356px;
}
.toppart {
    width: 100%;
    height: 356px;
}
.accountheader img:nth-of-type(1) {
    width:112px;
    height:112px;
    position: relative;
    top: 80px;
    margin: 0 auto;
    display: table;
    
}
.center-title {
  font-size:1.2em;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  display: table;
  margin: 0 auto;
  position: relative;
  top: 100px;
}
.center-line {
  width:3%;
  height:2px;
  background:rgba(2,164,175,1);
  position: relative;
  display: table;
  margin: 0 auto;
  top: 105px;
}
.btn-createapp {
    width:7.3%;
    height:30px;
    background:rgba(2,164,175,1);
    position: relative;
    display: table;
    margin: 0 auto;
    top: 140px;
    border: none;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
</style>