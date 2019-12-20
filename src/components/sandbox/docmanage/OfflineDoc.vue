<template>
    <div class="offlinedoc">
        <div class="title">
            <span>赞同开放银行沙箱环境</span>
        </div>
        <div class="synopsis">
            <span class="line"></span>
            <span class="detail-title">简介</span>          
                <p class="detail"  v-for="(item,index) in synopsisList" :value="item.value" :key="item.index">
                   {{item.name}}{{item.value}}
                </p>           
        </div>
        <div class="tb-atmselect" >
            <span class="line"></span>
            <span class="detail-title">开放数据查询ATM列表</span>
            <p class="detail"  v-for="(item,index) in atmselectList" :value="item.value" :key="item.index">
                   {{item.name}} {{item.value}}
            </p>
            <Table class="tb-parameter" :columns="columns1" :data="data1" :width="tableWidth"></Table>
        </div>
        <div class="developer-certifi">
            <span class="line"></span>
            <span class="detail-title">企业开发者认证</span>
            <div class="certificode">
                <pre>{{certificode}}</pre>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OfflineDoc',
    data(){
        return {
            tableWidth:'830',
            synopsisList:[
                {
                    name:'HOST：',
                    value:'192.9.200.238:18080'
                },
                {
                    name:'联系人：',
                    value:'renpei@agree.com.cn'
                },
                {
                    name:'Version：',
                    value:'1.0'
                },
                {
                    name:'接口路径：',
                    value:'/v2/api-docs'
                }
            ],
            atmselectList:[
                {
                    name:'接口说明：',
                    value:'查询ATM列表'
                },
                {
                    name:'接口地址：',
                    value:'/aob/V1.0/atms'
                },
                {
                    name:'请求方式：',
                    value:'GET'
                },
                {
                    name:'consumes：',
                    value:'["*/*"]'
                },
                {
                    name:'produces：',
                    value:'["application/json"]'
                },
                {
                    name:'请求参数：',
                    value:''
                }
            ],
            columns1:[
                {
                    title:'参数名称',
                    key:'name',
                    width:'150px'
                },
                {
                    title:'说明',
                    key:'desc',
                    width:'340px'
                },
                {
                    title:'in',
                    key:'in',
                },
                {
                    title:'是否必须',
                    key:'YorN',
                },
                {
                    title:'类型 ',
                    key:'type',
                },
                {
                    title:'schema',
                    key:'schema',
                },
            ],
            data1:[
                {
                    name:'Authorization',
                    desc:'允许根据请求的资源类型向授权/资源服务器提供凭据',
                    in:'header',
                    YorN:'false',
                    type:'string',
                    schema:''
                },
                {
                    name:'Authorization',
                    desc:'允许根据请求的资源类型向授权/资源服务器提供凭据',
                    in:'header',
                    YorN:'false',
                    type:'string',
                    schema:''
                },
                {
                    name:'Authorization',
                    desc:'允许根据请求的资源类型向授权/资源服务器提供凭据',
                    in:'header',
                    YorN:'false',
                    type:'string',
                    schema:''
                },
            ],
            certificode:`{
    "meta": {
        "lastUpdated": 20190101,
        "totalResults": 0,
        "agreement": "",
        "license": "",
        "termsOfUse": ""
    },
    "data": {
        "brand": [
            {
                "atm": [
                    {
                        "access24HoursIndicator": true,
                        "accessibility": [],
                        "atmServices": [],
                        "identification": "",
                        "minimumPossibleAmount": "",
                        "note": "",
                        "supportedCurrencies": [],
                        "supportedLanguages": []
                    }
                ],
                "brandName": ""
            }
        ]
    },
    "links": []
}`,
        }
    }
}
</script>

<style  scoped>
@import url("../../../assets/styles/font/font.css");
.offlinedoc{
    width: 100%;
    height: 1700px;
}
.title {
    position: relative;
    left: 60px;
    top: -30px;
    font-size:1.8em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
}
.synopsis {
    position: relative;
    left: 60px;
}
.line {
    position:absolute;
    top: 5px;
    width:3px;
    height:20px;
    background:rgba(2,164,175,1);
}
.detail-title {
    position: absolute;
    left: 10px;
    top: 0px;
    font-size:1.5em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    /* line-height:37px; */
}
.detail {
    position: relative;
    top: 50px;
    left: 10px;
    width: 200px;
    height: 50px;
}
.tb-parameter {
    position: relative;
    top: 30px;
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    /* line-height:22px; */
}
.tb-parameter /deep/ .ivu-table td{
    height: 50px;
    font-size:0.8em;
}
.tb-parameter /deep/ .ivu-table-header{
    height: 50px;
    font-size:0.8em;
}
.tb-parameter /deep/ .ivu-table-header th{
    background:#F1FAFB;
    height: 50px;
}
.tb-atmselect {
    position: relative;
    left: 60px;
    top: 70px;
}
.developer-certifi {
    position: relative;
    left: 60px;
    top: 120px;
}
.certificode {
    position: absolute;
    top: 50px;
    width: 830px;
    height: 625px;
    background:#F1FAFB;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(29,31,49,1);
}
</style>