<template>
<!-- 消息中心 -->
<div>
    <Header></Header>
    <div class="msgcenter">
        <div class="bread">
            <Breadcrumb>
                <BreadcrumbItem to="/" class="breadcrumbitem">首页</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">消息中心</BreadcrumbItem>
            </Breadcrumb>       
             <Menu :theme="theme3" active-name="1"  class="menu" width="240px">
                <MenuItem name="1" class="menuitem">
                    <p>管理员消息</p>
                </MenuItem>
                <MenuItem name="2" class="menuitem">
                    <p>系统消息</p>
                </MenuItem>
            </Menu>
        </div>
        <div class="msg-content">
            <span class="text-title">通知</span>
            <Table  class="msg-table"  
            :columns="msgColumns" 
            :data="showmsgData" 
            :show-header="showHeader"
            :width="tableWidth"
            :height="tableHeight"
            :size="tableSize">
            </Table>
            <Page class="msg-page" 
            :total="msgDatalength" 
            :page-size="pageSize"
            @on-change="changepage"/>
        </div>
    </div>
    <Footer></Footer>
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
                    width: 500 + 'px',
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
                                            this.show(params)
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
                msgtitle: "消息1",
                look: "查看",
                admincode: 1,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息2",
                look: "查看",
                admincode: 2,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息3",
                look: "查看",
                admincode: 3,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息4",
                look: "查看",
                admincode: 4,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息5",
                look: "查看",
                admincode: 5,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息6",
                look: "查看",
                admincode: 6,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息7",
                look: "查看",
                admincode: 7,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息8",
                look: "查看",
                admincode: 8,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息9",
                look: "查看",
                admincode: 9,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息10",
                look: "查看",
                admincode: 10,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息11",
                look: "查看",
                admincode: 11,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息12",
                look: "查看",
                admincode: 12,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息13",
                look: "查看",
                admincode: 13,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息14",
                look: "查看",
                admincode: 14,
                time: "2019-12-02  12:00:00"
                },
                {
                msgtitle: "消息15",
                look: "查看",
                admincode: 15,
                time: "2019-12-02  12:00:00"
                }
            ],
            tableSize:'large',
            showHeader:false,
            tableWidth:'900',
            tableHeight:'300',
            showmsgData: [],
            msgDatanow: [],
            msgDatalength: '',
            pageSize: 5,
            currentPage: 1,
            msgcode: 1222,
        }
    },
    mounted() {
        this.do();
    },
    created(){
        this.do();
    },
    methods: {
        do() {
            // console.log('数据',this.msgData);
            let lenn = this.msgData.length;
            this.msgDatalength = Number(lenn);
            for(var i =0 ;i < this.msgData.length;i++){
                this.msgDatanow[i] = this.msgData[i];
            }
            // console.log('now',this.msgDatanow);
            this.showmsgData = this.msgDatanow.slice(0, 5);
            console.log('show', this.showmsgData);
        },
        show (params) {
            // console.log('传入',params.row);
            sessionStorage.setItem('code',params.row.admincode);
            sessionStorage.setItem('title',params.row.msgtitle);
            sessionStorage.setItem('content',params.row.look);
            sessionStorage.setItem('time',params.row.time);
            this.$router.push('/msgDetail');
        },
        changepage(index) {
            this.currentPage = index;
            let _start = (index - 1) * this.pageSize;
            let _end = index * this.pageSize;
            // console.log(_start,_end);
            this.showmsgData = this.msgDatanow.slice(_start, _end);
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
.msgcenter {
    width: 100%;
    min-width: 1200px;
    height: 1700px;
    height: auto;
    min-height:580px; 
    position: relative; 
    top: 30px;
    display: flex;
    flex-direction: row;
}
.bread {
    position: relative;
    left: 10%;
}
.breadcrumbitem{
    font-size: 1.25em;
    font-family:PingFangSC-Regular,PingFang SC;
}
.text-title {
    font-size:2em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
}
.msg-table {
    position: relative;
}   
.menu {
    position: relative;
    top: 30px;
}
.menuitem {
    width: 100%;
    height: 75px;
    position: relative;
    display: table;
    margin: 0 auto;
}
.menuitem p{
    display: table;
    margin: 5% auto;
    font-size:1.625em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(74,74,74,1);
}
.msg-content {
    position: relative;
    left: 15%;
    top: 50px;
}
.msg-page {
    position: relative;
    top: 20px;
}
</style>