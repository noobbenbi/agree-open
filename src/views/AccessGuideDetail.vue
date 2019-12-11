<template>
<div class="body">
    <Header></Header>
    <div class="accessguidedetail">
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem">开发接入</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">接入指南</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">{{title[breadId]}}</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="select-lab">
             <Menu :theme="theme3" active-name="1" width="240px" class="menu" :active-name="menuId" @on-select="selected">
                <MenuItem name="1" class="menuitem">
                    <p>{{title[0]}}</p>
                </MenuItem>
                <MenuItem name="2" class="menuitem">
                    <p>{{title[1]}}</p>
                </MenuItem>
                <MenuItem name="3" class="menuitem">
                    <p>{{title[2]}}</p>
                </MenuItem>
                <MenuItem name="4" class="menuitem">
                    <p>{{title[3]}}</p>
                </MenuItem>
            </Menu> 
        </div>
    </div>
    <!-- <Footer class="footer"></Footer> -->
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'AccessGuideDetail',
    data() {
        return {
            theme3:'light',
            title:[
                '接入前必读',
                '接入开发',
                '基础SDK集成',
                'API接口规范'
            ],
            menuId:'',
            breadId:'',
        }
    },
    created(){
        this.getParams();
    },
    watch:{
        '$route':'getParams'
    },
    methods:{
        getParams(){
            this.menuId = this.$route.query.nameId;
            this.breadId  = this.$route.query.nameId -1;
        },
        selected(name) {
            this.breadId = name - 1;
        },
    },
    components:{
        Header,
        Footer
    }
}
</script>

<style scoped>
@import url("../assets/styles/font/font.css");
.footer {
    position: relative;
}
.accessguidedetail {
    width:100%;
    /* height:2700px; */
    position: relative;
    height: auto;
    background:rgba(255,255,255,1);
}
.breadcrumbitem{
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.productintro-title {
    position: absolute;
    top: 32px;
    left: 160px;
}
.select-lab {
    position: absolute;
    top: 85px;
    left: 151px;
}
.menuitem {
    width: 240px;
    height: 75px;
}
.menuitem p{
    text-align: center;
    position: relative;
    top: 5px;
    height:37px;
    font-size:1.32em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:37px;
}
</style>