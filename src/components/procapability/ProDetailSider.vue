<template>
    <div class="detail-menu">
            <Breadcrumb class="breadcrumbitem" >
                <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="/productintro">产品介绍</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" >产品详情</BreadcrumbItem>
            </Breadcrumb>
             <Menu class="menu-box"  :open-names="['1']" :active-name="'1-1'" width="240px"  @on-select="choosed">
                <Submenu class="select-box" name="1" >
                    <template slot="title">
                        <Icon class="title-icon" type="ios-folder-outline" size="25"/>
                        <span>{{title[0]}}</span>
                    </template>
                        <MenuItem name="1-1" class="dh-title-son" ><p>e享账户</p></MenuItem>
                        <MenuItem name="1-2" class="dh-title-son" ><p>账户管理(MD)</p></MenuItem>
                        <MenuItem name="1-3" class="dh-title-son"><p>贷款融资</p></MenuItem>
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
</template>
<script>
export default {
    name:'SandboxSider',
     data() {
        return {
            title:[
                '支付结算',
                '投资理财',
                '账户管理',
                '贷款融资'
            ],
            showDoc: true,
            docMenuId:'1',
            faId:''
        }
    },
    methods:{
        choosed(name) {
            this.docMenuId = name.charAt(2);
            this.faId = name.charAt(0);
            console.log(this.faId);
        },
        toShow(path) {
            this.$router.push(path);
            console.log('aaa');
        },
    },
}
</script>
<style lang="less" scoped>
@import url("../../assets/styles/menu.less");
.detail-menu {
    width: 240px;
    position: relative;
    top: 70px;
    margin-left: 10%;
    padding-bottom: 100px;
    display: table;
}
.breadcrumbitem {
    width: 240px;
    position: relative;
    top: -20px;
    font-size:1em;
    font-family:PingFangSC-Regular,PingFang SC;
    line-height:28px;
}
.title-icon {
    position: relative;
    top: 7px;
}
.select-box /deep/ .ivu-menu-submenu-title{
    height: 70px;
    background-color: #F5FCFC
}
.dh-title-son /deep/ .ivu-menu-item{
    width: 100%;
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