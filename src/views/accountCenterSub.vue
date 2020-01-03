<template>
<div class="AccCenter">
    <Header></Header>
    <div class="productintro-title">
        <!-- 面包屑 -->
        <accBreadcrumb
        :BreadcrumbList="BreadcrumbList"
        ></accBreadcrumb>
    </div>
    <div class="select-lab">
        <accNavBar
        @selectedTitleName="selectedTitleName"
        @selectedTitleID="selectedTitleID">
        </accNavBar>
        <MyData  v-if="BreadcrumbList=='我的资料'">
        </MyData>
        <myApp v-if="BreadcrumbList=='我的应用'">
        </myApp>
        <myAgree v-if="BreadcrumbList=='我的协议'">
        </myAgree>
    </div>
    <div><Footer></Footer></div>
</div>
</template>
<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyData from '../components/myAcc/myData';
import myAgree from '../components/myAcc/myAgreement';
import myApp from '../components/myAcc/myApp';
import accNavBar from '../components/myAcc/accNavBar';
import accBreadcrumb from '../components/myAcc/accBreadcrumb'
export default {
    name:'accountCenterSub',
    prop: "name",
    data () {
        return {
            activeTitle:"",
            BreadcrumbList:"我的资料",
        }
    },
    components: {
        Header,
        accNavBar,
        accBreadcrumb,
        MyData,
        myApp,
        myAgree,
        Footer
    },
    methods:{
        selectedTitleName(params) {
            this.BreadcrumbList = params;
        }, 
        selectedTitleID(params) {
            this.ifshow = params;   
        }, 
    },
}
</script>
<style lang="less"  scoped>
    .AccCenter{
        background-color: white;
        width: 100%;
        min-width: 1280px;
        .productintro-title{
            margin: 50px 5% 40px;
        }
        .select-lab{
            text-align: center;
            margin:0 0 0 5%;
            display: flex;
        } 
    }
</style>