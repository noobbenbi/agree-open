<template>
<div class="body">
    <Header></Header>
    <div class="accessguidedetail">
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem">开发接入</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">接入指南</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">{{title}}</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="select-lab">
             <Menu :theme="theme3" active-name="1" width="340px" class="menu">
                <MenuItem name="1" class="menuitem">
                    <p>接入前必读</p>
                </MenuItem>
                <MenuItem name="2" class="menuitem">
                    <p>接入开发</p>
                </MenuItem>
                <MenuItem name="3" class="menuitem">
                    <p>基础SDK集成</p>
                </MenuItem>
                <MenuItem name="4" class="menuitem">
                    <p>API接口规范</p>
                </MenuItem>
            </Menu>
        </div>
    </div>
    <Footer class="footer"></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'AccessGuideDetail',
    data() {
        return {
            title:'接入前必读'
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.footer {
    /* position: fixed;
    bottom: 0px; */
    flex: 0 0 auto;
}
.accessguidedetail {
    width:1920px;
    height:2700px;
    background:rgba(255,255,255,1);
}
.breadcrumbitem{
    font-size:20px;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.productintro-title {
    position: absolute;
    top: 166px;
    left: 160px;
}
.select-lab {
    position: absolute;
    top: 234px;
    left: 161px;
}
.menuitem {
    width: 340px;
    height: 99px;
    /* background:#e8f6f7; */
}
.menuitem p{
    position: absolute;
    top: 32px;
    left: 120px;
    /* width:104px;
    height:37px; */
    font-size:26px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(74,74,74,1);
    line-height:37px;
}
</style>