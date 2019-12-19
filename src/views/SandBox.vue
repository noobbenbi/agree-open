<template>
<div class="body">
    <Header></Header>
    <div class="sandbox">
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem" to="/">API沙箱</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" >{{title[breadId]}}</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="detail-menu">
            <Menu class="menu-box"  :open-names="['1']" :active-name="'1-1'" width="240px" @on-open-change="selected" @on-select="choosed">
                <Submenu class="select-box" name="1">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-folder-outline" size="25"/>
                        <span>{{title[0]}}</span>
                    </template>
                        <MenuItem name="1-1" class="dh-title-son" ><p>全局参数设置</p></MenuItem>
                        <MenuItem name="1-2" class="dh-title-son"><p>离线文档(MD)</p></MenuItem>
                        <MenuItem name="1-3" class="dh-title-son"><p>个性化设置</p></MenuItem>
                </Submenu>
                <Submenu class="select-box" name="2">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-pie-outline" size="25"/>
                        <span>{{title[1]}}</span>
                    </template>
                        <MenuItem name="2-1" class="dh-title-son"><p>Option 5</p></MenuItem>
                        <MenuItem name="2-2" class="dh-title-son"><p>Option 6</p></MenuItem>
                        <MenuItem name="2-3" class="dh-title-son"><p>Option 7</p></MenuItem>
                </Submenu>
                <Submenu class="select-box" name="3">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-card" size="25"/>
                        <span>{{title[2]}}</span>
                    </template>
                    <MenuItem name="3-1" class="dh-title-son"><p>Option 9</p></MenuItem>
                    <MenuItem name="3-2" class="dh-title-son"><p>Option 10</p></MenuItem>
                    <MenuItem name="3-3" class="dh-title-son"><p>Option 11</p></MenuItem>
                </Submenu>
                 <Submenu class="select-box" name="4">
                    <template slot="title">
                        <Icon class="title-icon" type="ios-contacts-outline" size="25"/>
                        <span>{{title[3]}}</span>
                    </template>
                    <MenuItem name="4-1" class="dh-title-son"><p>Option 9</p></MenuItem>
                    <MenuItem name="4-2" class="dh-title-son"><p>Option 10</p></MenuItem>
                    <MenuItem name="4-3" class="dh-title-son"><p>Option 11</p></MenuItem>
                </Submenu>
            </Menu>
            
        </div>
        <DocManage  :visiable="showDoc" :value="docMenuId" :faId="faId"></DocManage>
    </div>
    <Footer class="footer"></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocManage from '../components/sandbox/DocManage';
export default {
    name:'ApiSandBox',
    data() {
        return {
            title:[
                '文档管理',
                '开放数据',
                '支付',
                '账户'
            ],
            breadId:'0',
            showDoc: true,
            docMenuId:'1',
            faId:''
        }
    },
    methods:{
        selected(name){
            this.breadId = name - 1;
            // console.log(name);
        },
        //给文档管理组件传菜单栏参数来切换页面
        choosed(name) {
            this.docMenuId = name.charAt(2);
            this.faId = name.charAt(0);
            console.log(this.faId);
        },
    },
    components: {
        Header,
        Footer,
        DocManage,
    }
}
</script>

<style  scoped>
.body{
    display: flex;
    flex-direction: column;
}
.sandbox {
    width: 100%;
    min-width: 1200px;
    /* position: relative; */
    height: 3000px;
    height:auto;
    min-height:600px;
    /* height: auto;
    max-height: 2000px; */
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
    overflow-y: auto;
    max-height: 2000px;
}
.title-icon {
    position: relative;
    top: 7px;
}
.select-box /deep/ .ivu-menu-submenu-title{
    height: 70px;
    /* margin-bottom: 70px; */
    background-color: #F5FCFC
}
.dh-title-son /deep/ .ivu-menu-item{
    height: 45px;
}
.select-box span {
    font-size:1.25em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    position: absolute;
    left: 23.3%;
    top: 20px;
}
.dh-title-son p {
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:28px;
    position: relative;
    left: 13px;
}
</style>