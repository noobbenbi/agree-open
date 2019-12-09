<template>
<div>
    <Header></Header>
    <div class="productintro">
        <img src="@/assets/images/beige-queen-folder-1181776.png">
        <div class="productintro-title">
            <Breadcrumb>
                <!-- <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem> -->
                <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="" >产品介绍</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="select-lab">
             <Menu :theme="theme3" active-name="1" width="280px" class="menu">
                <MenuItem name="1" class="menuitem">
                    <p>支付结算</p>
                </MenuItem>
                <MenuItem name="2" class="menuitem">
                    <p>投资理财</p>
                </MenuItem>
                <MenuItem name="3" class="menuitem">
                    <p>账户管理</p>
                </MenuItem>
                <MenuItem name="4" class="menuitem">
                    <p>贷款融资</p>
                </MenuItem>
            </Menu>
        </div>
        <div class="productintro-content">
            
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'ProductIntro',
    data () {
        return {
            theme3: 'light'
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>


<style  scoped>
@import url("../assets/styles/font/font.css");
.productintro {
    width: 100%;
    min-width: 1200px;
    height: 2409px;
    position: relative;
}
.productintro img {
    width: 100%;
    height: 450px;
    position: absolute;
    top: 0;
}
.breadcrumbitem{
    font-size:15px;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.productintro-title {
    position: absolute;
    top: 500px;
    left: 160px;
}
.select-lab {
    position: absolute;
    top: 550px;
    left: 121px;
}
.menuitem {
    /* width: 340px; */
    height: 99px;
}
.menuitem p{
    position: absolute;
    top: 32px;
    left: 120px;
    width:104px;
    height:37px;
    font-size:26px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:37px;
}
</style>