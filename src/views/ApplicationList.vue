<template>
<div>
    <Header></Header>
    <div class="applicationlist">
        <AccountHeader></AccountHeader>
        <div class="formal-app">
            <span>正式应用列表</span>
            <Divider class="c-line"/>
        </div>
        <div class="sandbox-app">
            <span>沙箱测试应用</span>
            <Divider class="c-line"/>
        </div>
        <div class="summary">API调用情况</div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import AccountHeader from '../components/AccountHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'ApplicationList',
    data() {
        return {
            appInfo:''
        }
    },
    // mounted(){
    //     this.$ajax({
    //         method:'get',
    //         url:'/api/applications'
    //     })
    //     .then(res => {
    //         this.appInfo = res.data.data;
    //         console.log(this.appInfo);
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // },
    components:{
        AccountHeader,
        Header,
        Footer
    }
}
</script>

<style  scoped>
.applicationlist {
    display: flex;
    flex-direction: column;
}
.formal-app,
.sandbox-app,
.summary {
    width: 70%;
    height: 300px;
    margin: 30px 0;
    position: relative;
    left: 15%;
    box-shadow: 0 0 20px 15px rgba(241, 235, 235, 0.3);
}
.summary {
    height: 500px;
}
</style>