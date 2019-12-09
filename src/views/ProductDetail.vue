<template>
<div>
    <Header></Header>
    <div class="productdetail">
        <Divider class="cut-line"/>
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="/productintro">产品介绍</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" >产品详情</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="detail-menu">
            <Menu class="menu-box" active-name="1-2" :open-names="['1']" width="340px">
                <Submenu class="select-box" name="1">
                    <template slot="title">
                        <span>Navigation One</span>
                    </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                        <MenuItem name="1-4">Option 4</MenuItem>
                </Submenu>
                <Submenu class="select-box" name="2">
                    <template slot="title">
                        <span>Navigation Two</span>
                    </template>
                    <MenuItem name="2-1">Option 5</MenuItem>
                    <MenuItem name="2-1">Option 6</MenuItem>
                </Submenu>
                <Submenu class="select-box" name="3">
                    <template slot="title">
                        <span>Navigation Three</span>
                    </template>
                    <MenuItem name="3-1">Option 9</MenuItem>
                    <MenuItem name="3-2">Option 10</MenuItem>
                    <MenuItem name="3-3">Option 11</MenuItem>
                    <MenuItem name="3-4">Option 12</MenuItem>
                </Submenu>
                 <Submenu class="select-box" name="4">
                    <template slot="title">
                        <span>Navigation Four</span>
                    </template>
                    <MenuItem name="4-1">Option 9</MenuItem>
                    <MenuItem name="4-2">Option 10</MenuItem>
                    <MenuItem name="4-3">Option 11</MenuItem>
                    <MenuItem name="4-4">Option 12</MenuItem>
                </Submenu>
            </Menu>
        </div>

    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'ProductDetail',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.productdetail {
    width: 1920px;
    height: 922px;
    /* -webkit-box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2); */
}
.cut-line {
    position: absolute;
    top: 100px;
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
.detail-menu {
    position: absolute;
    top: 242px;
    left: 161px;
}
    /* .detail-menu .select-box{
        width: 340px;
        height: 98px;
    } */
/* .detail-menu span {
    position: absolute;
    top: 29px;
    left: 79px;
} */
</style>