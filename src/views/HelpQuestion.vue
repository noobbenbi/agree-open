<template>
  <div class = "HelpQuestion" :style="{ height: documentHeight }">
    <Header></Header>
    <QsnBreadcrumb 
    :Breadcrumblist = "Breadcrumblist"
    :question = 'question'
    ></QsnBreadcrumb>
    <div class="content">
        <SelectQuestion 
        :forms = "forms" 
        @selectedDoc = "selectedDoc"
        @selectedDocId = "selectedDocId"
        @backs = "backs"
        class="sideNavBar"
        ></SelectQuestion>

        <div class = "mainContent">
            <HotQuestion 
            :questions = "questions"
            @changeshow = "changeshow"
            :qsntitle="qsntitle"
            v-show="question"
            ></HotQuestion>
            <QsnContent :qsncontent = "qsncontent"
            v-show="!question"
            ></QsnContent>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import SelectQuestion from '../components/HelpQns/SelectQuestion';
import QsnBreadcrumb from '../components/HelpQns/QsnBreadcrumb';
import QsnContent from '../components/HelpQns/QsnContent';
import HotQuestion from '../components/HelpQns/HotQuestion';
import Footer from '../components/Footer';
export default {
    name:'MsgCenter',
    data() {
        return {
            forms: [
                {
                    QsnName: "快速入门",
                    QsnType: "hot",
                    QsnId: 1,
                    childList: [
                        {
                            QsnId: 11,
                            QsnName: "1入驻平台是否收费？",
                            QsnContent: '目前入驻开放银行平台不会收取任何费用，所有服务功能和开放API均免费。开放银行后续将逐步开放更多的的服务功能和API，后面懒得打，test1',
                        },
                        {
                            QsnId: 12,
                            QsnName: "1如何上线应用？",
                            QsnContent: '暂时咱也不知道怎么上线，图里没说，好像是通过git上线的？',
                        },
                        {
                            QsnId: 13,
                            QsnName: "1如何使用API浏览器？",
                            QsnContent: '你去点一下API沙箱看看就知道了',
                        },
                        {
                            QsnId: 14,
                            QsnName: "1如何创建应用？",
                            QsnContent: '你猜咱知不知道？',
                        },
                        {
                            QsnId: 15,
                            QsnName:"1如何注册成为开放银行平台用户？",
                            QsnContent: "这个咱知道，你点右上角，有一个注册，然后按照流程走就可以了。"
                        },
                        {
                            QsnId: 16,
                            QsnName: "1入驻平台是sssss否收费？",
                            QsnContent: '目前入驻开放ssssss银行平台不会收取任何费用，所有服务功能和开放API均免费。开放银行后续将逐步开放更多的的服务功能和API，后面懒得打，test1',
                        },
                    ]
                },
                {
                    QsnName: "接入开发",
                    QsnType: "hot",
                    QsnId: 2,
                    childList: [
                        {
                            QsnId: 21,
                            QsnName: "2入驻平台是否收费？",
                            QsnContent: '目前入驻开放银行平台不会收取任何费用，所有服务功能和开放API均免费。开放银行后续将逐步开放更多的的服务功能和API，后面懒得打，test1',
                        },
                        {
                            QsnId: 22,
                            QsnName: "2如何上线应用？",
                            QsnContent: '暂时咱也不知道怎么上线，图里没说，好像是通过git上线的？',
                        },
                        {
                            QsnId: 23,
                            QsnName: "2如何使用API浏览器？",
                            QsnContent: '你去点一下API沙箱看看就知道了',
                        },
                        {
                            QsnId: 24,
                            QsnName: "2如何创建应用？",
                            QsnContent: '你猜咱知不知道？',
                        },
                        {
                            QsnId: 25,
                            QsnName:"2如何注册成为开放银行平台用户？",
                            QsnContent: "这个咱知道，你点右上角，有一个注册，然后按照流程走就可以了。"
                        }
                    ]
                },
                {
                    QsnName: "沙箱测试",
                    QsnType: "hot",
                    QsnId: 3,
                    childList: [
                        {
                            QsnId: 31,
                            QsnName: "3入驻平台是否收费？",
                            QsnContent: '目前入驻开放银行平台不会收取任何费用，所有服务功能和开放API均免费。开放银行后续将逐步开放更多的的服务功能和API，后面懒得打，test1',
                        },
                        {
                            QsnId: 32,
                            QsnName: "3如何上线应用？",
                            QsnContent: '暂时咱也不知道怎么上线，图里没说，好像是通过git上线的？',
                        },
                        {
                            QsnId: 33,
                            QsnName: "3如何使用API浏览器？",
                            QsnContent: '你去点一下API沙箱看看就知道了',
                        },
                        {
                            QsnId: 34,
                            QsnName: "3如何创建应用？",
                            QsnContent: '你猜咱知不知道？',
                        },
                        {
                            QsnId: 35,
                            QsnName:"3如何注册成为开放银行平台用户？",
                            QsnContent: "这个咱知道，你点右上角，有一个注册，然后按照流程走就可以了。"
                        }
                    ]
                },
                {
                    QsnName: "快速入厂",
                    QsnType: "product",
                    QsnId: 4,
                    childList: [
                        {
                            QsnId: 41,
                            QsnName: "4入驻平台是否收费？",
                            QsnContent: '目前入驻开放银行平台不会收取任何费用，所有服务功能和开放API均免费。开放银行后续将逐步开放更多的的服务功能和API，后面懒得打，test1',
                        },
                        {
                            QsnId: 42,
                            QsnName: "4如何上线应用？",
                            QsnContent: '暂时咱也不知道怎么上线，图里没说，好像是通过git上线的？',
                        },
                        {
                            QsnId: 43,
                            QsnName: "4如何使用API浏览器？",
                            QsnContent: '你去点一下API沙箱看看就知道了',
                        },
                        {
                            QsnId: 44,
                            QsnName: "4如何创建应用？",
                            QsnContent: '你猜咱知不知道？',
                        },
                        {
                            QsnId: 45,
                            QsnName:"4如何注册成为开放银行平台用户？",
                            QsnContent: "这个咱知道，你点右上角，有一个注册，然后按照流程走就可以了。"
                        }
                    ]
                },
                {
                    QsnName: "随便瞎起",
                    QsnType: "product",
                    QsnId: 5,
                    childList: [
                        {
                            QsnId: 51,
                            QsnName: "5入驻平台是否收费？",
                            QsnContent: '目前入驻开放银行平台不会收取任何费用，所有服务功能和开放API均免费。开放银行后续将逐步开放更多的的服务功能和API，后面懒得打，test1',
                        },
                        {
                            QsnId: 52,
                            QsnName: "5如何上线应用？",
                            QsnContent: '暂时咱也不知道怎么上线，图里没说，好像是通过git上线的？',
                        },
                        {
                            QsnId: 53,
                            QsnName: "5如何使用API浏览器？",
                            QsnContent: '你去点一下API沙箱看看就知道了',
                        },
                        {
                            QsnId: 54,
                            QsnName: "5如何创建应用？",
                            QsnContent: '你猜咱知不知道？',
                        },
                        {
                            QsnId: 55,
                            QsnName:"5如何注册成为开放银行平台用户？",
                            QsnContent: "这个咱知道，你点右上角，有一个注册，然后按照流程走就可以了。"
                        }
                    ]
                },
            ],
            documentHeight: '570px',
            Breadcrumblist: [],
            question: true,
            questions: [],
            qsntitle:'',
            qsncontent: {},
        }
    },
    mounted() {

    },
    methods: {
        backs(params) {
            this.question = true;
        },
        selectedDocId(params) {
            this.forms.forEach((item, index) => {
                if(item.QsnId == params) {
                    // console.log('title',item);
                    this.questions = item.childList;
                    this.qsntitle = item.QsnName;
                }
            })
        },
        selectedDoc(params) {
            
            this.Breadcrumblist = params;
        },
        changeshow(params) {
            console.log('入子',params);
            this.question = false;
            this.qsncontent = params;
        },
    },
    components: {
        Header,
        Footer,
        SelectQuestion,
        QsnBreadcrumb,
        QsnContent,
        HotQuestion,
    }
}
</script>

<style lang="less" scoped>
// @import url("../assets/styles/font/font.css");
.HelpQuestion{
     
    .content{
        display: flex;
        padding: 0 5%;
       
    }
}



</style>