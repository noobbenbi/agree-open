<template>
<div class="beforedevread">
    <span class="content-title">{{docDetail[0].title}}</span>
    <div class="part-one text-part">
        <span class="title-line"></span>
        <span class="childTtitle">{{docDetail[0].childTtitle1}}</span>
        <p>{{docDetail[0].childContent1}}</p>
    </div>
    <div class="part-two text-part">
        <span class="title-line"></span>
        <span class="childTtitle">{{docDetail[0].childTtitle2}}</span>
        <p>{{docDetail[0].childContent2}}</p>
    </div>
    <div class="part-three text-part">
        <span class="title-line"></span>
        <span class="childTtitle">{{docDetail[0].childTtitle3}}</span>
        <p>{{docDetail[0].childContent3}}</p>
    </div>
    <div class="part-four text-part">
        <span class="title-line"></span>
        <span class="childTtitle">{{docDetail[0].childTtitle4}}</span>
        <p>{{docDetail[0].childContent4}}</p>
    </div>
</div>
</template>

<script>
export default {
    name:'BeforeDevRead',
    data(){
        return{
            docDetail:[
                {
                    title:'成为开发者',
                    childTtitle1:'开发者认证',
                    childContent1:'开放银行平台开发者分为个人开发者和企业开发者两种类型，两种类型的开发者需要上传不同的认证信息。 申请认证成为开发者之前，需要首先注册成为开放平台用户。',
                    childTtitle2:'用户注册',
                    childContent2:'访问江苏银行开放银行平台官方网址，点击导航栏右上角“注册”按钮，按照提示逐步填写信息，即可注册成为开放银行平台用户。',
                    childTtitle3:'开发者认证',
                    childContent3:`访问开放银行平台官方网址，注册成为平台用户之后，根据平台引导和提示，或者登录控制台按照引导步骤填写相关认证信息并提交审核至后台。

平台运营管理人员收到申请，根据平台开发者审核规范审核开发者信息，审核通过后即可成为平台开发者接入开放银行。

认证流程步骤如下：


1.  使用已注册用户帐户登录开放银行平台；

2.  从管理台点击进入“帐户中心”；

图

    3. 在帐户中心中点击“成为开发者”进入开发者认证流程：

图

    4. 按照认证流程页面指引完成认证过程：

图`,
                    childTtitle4:'企业开发者认证',
                    childContent4:`企业开发者相比个人开发者，可以申请更多的产品服务功能和获取更多的行内企业资源，认证资质会有更多要求，除了补充(代理)个人身份信息，还需补充企业信息、企业法人代表信息、企业营业执照信息等，后台审核会更加严格。

步骤如下：

    1. 进入开发者认证流程，设置身份信息；

    图

    2. 选择开发者类型-“企业开发者”，点击“下一步”； 

    图 

    3. 补充填写开发者的企业详细信息，点击“提交审核”；

    图

    4. 提交审核之后，等待后台运营管理人员审核，开发者可在帐户中心中，查看申请认证状态；

    图

    5. 开放银行平台运营管理人员根据开发者认证规范审查开发者信息，审批通过后会发送站内信给用户，开发者认证成功。

    图`
                },
            ],
        }
    },
}
</script>

<style  scoped>
.beforedevread {
    width: 80%;
}
.content-title {
    font-size:2em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
}
.beforedevread p {
    position: relative;
    left: 20px;
    top: 10px;
}
.part-one {
    height: 180px;
    top: 50px;
}
.part-two {
    height: 150px;
}
.text-part {
    position: relative;
    padding-bottom: 40px
}
.text-part p {
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:28px;
    position: relative;
    left: 20px;
    white-space: pre-wrap;
}
.title-line {
    width:4px;
    height:15px;
    background:rgba(2,164,175,1);
    position: absolute;
    left: 0px;
    top: 0px;
}
.childTtitle {
    font-size:1.3em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    position: relative;
    left: 20px;
    top: -5px;
}
</style>