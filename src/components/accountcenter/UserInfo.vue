<template>
<!-- 我的资料 -->
<div class="userinfo">
        <div class="userinfo-some">
            <span class="head-text">基本资料</span>
            <Divider class="c-line"/>
            <button class="btn-Certification">认证</button>
            <router-link to="/accountcenter/acc"><button class="btn-modify">修改</button></router-link>
            <p class="account-title">{{agreementInfo.index1}}</p><span class="user-account">{{agreementInfo.title1}}</span>
            <p class="state-title">{{agreementInfo.index2}}</p><span class="state-text">{{agreementInfo.title2}}</span>
            <p class="pwd-title">{{agreementInfo.index3}}</p><span class="password">{{agreementInfo.title3}}</span>
        </div>
        <!-- 已认证 -->
        <div class="userinfodetail" v-if="recoState">
            <p class="detail-title">
                开发者资料
            </p>
            <Divider class="d-line"/>
            <Table class="tb-userinfo" :columns="columns1" :data="data1" :show-header="showHeader" ></Table>
        </div>
</div>
</template>

<script>
export default {
    name:'UserInfo',
    data() {
        return {
            state:false,
            showHeader:false,
            recoState:true,
            // tableHeight:'700',
            agreementInfo: {
                index1: '注册帐号',
                title1: '17765343546',
                index2: '认证状态',
                title2: '未认证',
                index3: '登录密码',
                title3: '**********'
            },
            columns1:[
                {
                    title:'title',
                    key:'title',
                    width:'200px'
                },
                {
                    title:'info',
                    key:'info'
                },
            ],
            data1:[
                {
                    title:'姓名：',
                    info:'李老师'
                },
                {
                    title:'身份证号码：',
                    info:'*********'
                },
                {
                    title:'所在地区：',
                    info:'*********'
                },
                {
                    title:'联系电话：',
                    info:'*********'
                },
                {
                    title:'邮箱地址：',
                    info:'*********'
                },

                {
                    title:'开发者类型：',
                    info:'*********'
                },
                {
                    title:'开发者能力：',
                    info:'*********'
                },
                {
                    title:'紧急联系人姓名：',
                    info:'*********'
                },
                {
                    title:'紧急联系人电话：',
                    info:'*********'
                },
            ],
        }
    }
}
</script>

<style  scoped>
@import url("../../assets/styles/font/font.css");
.userinfo {
    width: 62.5%;
    height: 3000px;
    height:auto;
    min-height:400px;
    position: relative;
    left: 18.75%;
    text-align: center;
}
.userinfo-some {
    width: 100%;
    height: 285px;
    position: relative;
}
.head-text {
    font-size: 1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:28px;
    position: absolute;
    left: 5%;
    top: 10%;
}
.c-line {
    position: relative;
    top: 70px;
}
.userinfo button {
    width:6%;
    height:9%;
    background:rgba(2,164,175,1);
    border-radius:2px;
    position: absolute;
    top: 8%;
    border: none;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.btn-Certification {
    left: 82.5%;
}
.btn-modify {
    left: 89.16%;
}
.account-title,
.state-title,
.pwd-title {
    font-size:1.15em;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    position: absolute;
    left: 5%;
}
.account-title {
    top: 32%;
}
.state-title {
    top: 49%;
}
.pwd-title {
    top: 66%;
}
.user-account {
    position: absolute;
    top: 31.75%;
    left: 16.7%;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
    font-size: 1.25em;
}
.state-text {
    position: absolute;
    top: 49%;
    left: 16.7%;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,179,0,1);
    font-size: 1.25em;
}
.password {
    position: absolute;
    top: 67%;
    left: 16.7%;
}
.userinfodetail{
    position: relative;
    height: 800px;
}
.detail-title {
    font-size:1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:28px;
    position: absolute;
    left: 5%;
    top: 0px;
}
.d-line {
    position: relative;
    top: 50px;
}
.tb-userinfo {
    position:relative;
    top: 50px;
    left:3%;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:28px;
}
.tb-userinfo /deep/ .ivu-table td{
    border-bottom: none !important;
    border-right-color:honeydew;
    height: 70px;
    font-size:1.15em;
}
</style>