<template>
<!-- 合作伙伴(缺图片) -->
<div class="partner">
    <div class="center">
        <span class="center-title">合作伙伴</span>
        <span class="center-line"></span>
    </div>
    <div class="img-box">
        
    </div>
    <Button :size="buttonSize" type="primary">快速加入</Button>
    
</div>
</template>

<script>
export default {
    name:'Partner'
}
</script>

<style scoped>
@import url("../../assets/styles/font/font.css");
.partner {
    position: relative;
    width:100%;
    min-width: 1200px;
    height:736px;
}
.partner Button {
    position: absolute;
    top: 80.66%;
    left: 44.8%;
    width:180px;
    height:70px;
    font-size:30px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:42px;
}
.center-title {
    font-size:25px;
    font-family:"Times New Roman",Georgia,Serif;
    font-weight:500;
    color:black;
    line-height:50px;
    position: relative;
    top: 70px;
    display: table;
    margin: 0 auto;
}
.center-line {
    width:55px;
    height:3px;
    background:rgba(2,164,175,1);
    position: relative;
    top: 75px;
    display: table;
    margin: 0 auto;
}
</style>