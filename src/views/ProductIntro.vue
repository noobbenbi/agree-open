<template>
<!-- 产品能力/产品介绍 -->
<div>
    <Header></Header>
    <div class="productintro">
        <img src="@/assets/images/beige-queen-folder-1181776.png">
        <div class="productintro-title">
            <Breadcrumb>
                <BreadcrumbItem class="breadcrumbitem" to="/procapability">产品能力</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem" to="" >产品介绍</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="select-lab">
             <Menu 
                :theme="theme3" 
                active-name="1" 
                width="240px" 
                class="menu" 
                :active-name="menuId"
                @on-select="selected"
              >
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
            <img :src="imgsrc[contentItem]" >
            <p>{{proTitle[contentItem]}}</p>
            <Table class="pro-table"
            :show-header="showHeader" 
            :columns="msgColumns" 
            :data="msgData" 
            :width="tableWidth"
            :height="tableHeight"
            :size="tableSize"
            ></Table>
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
            theme3: 'light',
            menuId:'',
            tableSize:'large',
            showHeader:false,
            tableWidth:'900',
            tableHeight:'400',
            contentItem:'',
            proTitle: [
                '支付结算',
                '投资理财',
                '账户管理',
                '贷款融资'
            ],
            imgsrc: [
                require('@/assets/images/proImg1.png'),
                require('@/assets/images/proImg2.png'),
                require('@/assets/images/proImg3.png'),
                require('@/assets/images/proImg4.png')
            ],
            msgColumns:[
                {
                    title: ' ',
                    key: 'msgtitle',
                    width:'350',
                },
                {
                    title: ' ',
                    key: 'look',
                    width:'400'
                    
                },
                {
                    title: ' ',
                    key: 'time',
                    width:'100',
                    render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                    },
                                    on: {
                                        click: () => {
                                            
                                        }
                                    }
                                }, '立即加入'),
                            ]);
                        }
                },
            ],
            msgData: [
                {
                    msgtitle: '电子账户',
                    look: '电子账户是通过互联网、移动...',
                    time: '2019-12-02  12:00:00'
                },
                {
                    msgtitle: '电子账户',
                    look: '电子账户是通过互联网、移动...',
                    time: '2019-12-02  12:00:00'
                },
                {
                    msgtitle: '电子账户',
                    look: '电子账户是通过互联网、移动...',
                    time: '2019-12-02  12:00:00'
                },
            ],
            
        }
    },
    created(){
        this.getParams();
    },
    mounted(){
        this.contentItem = 0;
    },
    watch: {
        '$route':'getParams'
    },
    methods: {
        getParams() {
           this.menuId  = this.$route.query.nameId;
           this.contentItem = this.$route.query.nameId - 1;
        },
        selected(name) {
            this.contentItem = name - 1;
        },
    },
    components: {
        Header,
        Footer
    }
}
</script>


<style lang="less" scoped>
@import url("../assets/styles/menu.less");
.productintro {
    width: 100%;
    min-width: 1200px;
    height: 1409px;
    position: relative;
}
.productintro img {
    width: 100%;
    height: 450px;
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
    top: 500px;
    left: 160px;
}
.select-lab {
    position: absolute;
    top: 550px;
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
.productintro-content {
    position: absolute;
    top: 550px;
    left: 400px;
}
.productintro-content img{
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0px;
    left: 0px;
}
.productintro-content p{
    position: relative;
    left: 50px;
    top: 0px;
    font-size:25px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
}
.pro-table {
    position: absolute;
    top: 90px;
    left: 30px;
}

</style>