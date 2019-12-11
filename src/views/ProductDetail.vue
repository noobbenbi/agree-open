<template>
<div>
    <Header></Header>
    <div class="productdetail">
        <!-- <Divider class="cut-line"/> -->
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="/productintro">产品介绍</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" >产品详情</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="detail-menu">
            <Menu class="menu-box" active-name="1-2" :open-names="['1']" width="240px">
                <Submenu class="select-box" name="1">
                    <template slot="title" class="dh-title-fa">
                        <!-- <img src="@/assets/images/proImg1.png"> -->
                        <span>支付结算</span>
                    </template>
                        <MenuItem name="1-1" class="dh-title-son">Option 1</MenuItem>
                        <MenuItem name="1-2" class="dh-title-son">Option 2</MenuItem>
                        <MenuItem name="1-3" class="dh-title-son">Option 3</MenuItem>
                        <MenuItem name="1-4" class="dh-title-son">Option 4</MenuItem>
                </Submenu>
                <Submenu class="select-box" name="2">
                    <template slot="title">
                        <span>投资理财</span>
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
    width: 100%;
    min-width: 1200px;
    height: 922px;
    position: relative;
}
.cut-line {
    position: absolute;
    top: 0;
}
.breadcrumbitem{
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.productintro-title {
    position: absolute;
    top: 20px;
    left: 160px;
}
.detail-menu {
    position: absolute;
    top: 80px;
    left: 151px;
    /* background-color: aquamarine; */
}
.select-box {
    /* height: 250px; */
    background-color: #F5FCFC
}
</style>