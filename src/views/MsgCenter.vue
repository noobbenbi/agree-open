<template>
<!-- 消息中心 -->
<div class="body-body">
    <Header class="header"></Header>
    <div class="msgcenter">
        <div class="bread">
            <Breadcrumb>
                <BreadcrumbItem to="/" class="breadcrumbitem">首页</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">消息中心</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <span class="text-title">通知</span>
        <Table class="msg-table" 
        :columns="msgColumns" 
        :data="msgData" 
        :show-header="showHeader"
        :width="tableWidth"
        :height="tableHeight"
        :size="tableSize">
        </Table>
        <div class="select-lab">
             <Menu :theme="theme3" active-name="1"  class="menu">
                <MenuItem name="1" class="menuitem">
                    <p>管理员消息</p>
                </MenuItem>
                <MenuItem name="2" class="menuitem">
                    <p>系统消息</p>
                </MenuItem>
            </Menu>
        </div>
        <Page class="msg-page" :total="10" :page-size="5"/>
    </div>
    <div class="footer-test">

    </div>
    <!-- <Footer class="footer"></Footer> -->
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'MsgCenter',
    data() {
        return {
            theme3:'light',
            msgColumns:[
                {
                    title: ' ',
                    key: 'msgtitle'
                },
                {
                    title: ' ',
                    key: 'look',
                    render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show()
                                        }
                                    }
                                }, '查看'),
                            ]);
                        }
                },
                {
                    title: ' ',
                    key: 'time'
                },
            ],
            msgData: [
                {
                    msgtitle: '消息1',
                    look: '查看',
                    time: '2019-12-02  12:00:00'
                },
                {
                    msgtitle: '消息2',
                    look: '查看',
                    time: '2019-12-02  12:00:00'
                },
                {
                    msgtitle: '消息3',
                    look: '查看',
                    time: '2019-12-02  12:00:00'
                },
                {
                    msgtitle: '消息4',
                    look: '查看',
                    time: '2019-12-02  12:00:00'
                },
                {
                    msgtitle: '消息5',
                    look: '查看',
                    time: '2019-12-02  12:00:00'
                },
            ],
            tableSize:'large',
            showHeader:false,
            tableWidth:'900',
            tableHeight:'400'
        }
    },
    methods: {
        show () {
            alert('hhhhhhh');
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
.msgcenter {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 0; 
    padding-bottom: 37%;
}
.bread {
    position: absolute;
    top: 5.6%;
    left: 8.3%;
}
.breadcrumbitem{
    font-size: 1.25em;
    font-family:PingFangSC-Regular,PingFang SC;
    /* line-height:28px; */
}
.text-title {
    position: absolute;
    top: 16%;
    left: 29.1%;
    font-size:2em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
}
.msg-table {
    position: absolute;
    top: 32.7%;
    left: 29.1%;
}   
.menu {
    position: absolute;
    top: 16%;
    left: 8.3%;
    height: 28.7%;
}
.menuitem {
    height: 50%;
}
.menuitem p{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 34.3%;
    left: 34.7%;
    font-size:1.625em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(74,74,74,1);
    line-height:37px;
}
.msg-page {
    position: absolute;
    top: 100%;
    left: 26%;
}
</style>