<template>
    <div>
        <Header></Header>
        <div class="sandbox">                
            <SandboxSider></SandboxSider>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import SandboxSider from '../components/sandbox/SandboxSider';
export default {
    name:'sandbox',
    data (){
        return {
            title:[
                '文档管理',
                '开放数据',
                '支付',
                '账户'
            ],
        }
    },
    components:{
        Header,
        Footer,
        SandboxSider
    }
}
</script>

<style  scoped>
.sandbox {
    width: 100%;
    height: 3000px;
    height:auto;
    min-height:500px;
    display: flex;
    flex-direction: row;
}
</style>