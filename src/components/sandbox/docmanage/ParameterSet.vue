<template>
    <div class="parameterset">
        <p class="text-title">
            全局参数设置
        </p>
        <Button class="btn-add" type="success" @click="toShow">添加参数</Button>
        <Divider class="d-line"/>
        <Table class="tb-parameter" :columns="columns1" :data="data1"></Table>
        <div class="input-add" v-if="show">
            <Input v-model="newParamName" placeholder="参数名称" style="width: 100px" />
            <Input v-model="newParamValue" placeholder="参数值" style="width: 100px" />
            <Select v-model="newParamType" style="width:100px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button  type="success" @click="addParameter">添加</Button>
        </div>
    </div>
</template>

<script>
export default {
    name:'ParameterSet',
    data () {
            return {
                newParamName:'',
                newParamValue:'',
                newParamType:'',
                show:false,
                error:'',
                columns1: [
                    {
                        title: '参数名称',
                        key: 'name',
                    },
                    {
                        title: '参数值',
                        key: 'paramvalue'
                    },
                    {
                        title: '参数类型',
                        key: 'paramtype'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        paramvalue: 18,
                        paramtype: 'New York No. 1 Lake Park',
                    },
                    {
                        name: 'Jim Green',
                        paramvalue: 24,
                        paramtype: 'London No. 1 Lake Park',
                    },
                    {
                        name: 'Joe Black',
                        paramvalue: 30,
                        paramtype: 'Sydney No. 1 Lake Park',
                    },
                    {
                        name: 'Jon Snow',
                        paramvalue: 26,
                        paramtype: 'Ottawa No. 2 Lake Park',
                    }
                ],
                cityList: [
                    {
                        value: 'NaN',
                        label: 'NaN'
                    },
                    {
                        value: 'String',
                        label: 'String'
                    },
                    {
                        value: 'Number',
                        label: 'Number'
                    },
                    {
                        value: 'int',
                        label: 'int'
                    },
                    {
                        value: 'float',
                        label: 'float'
                    },
                    {
                        value: 'boolean',
                        label: 'boolean'
                    }
                ],
            }
        },
        
         methods: {
             //删除参数操作
            remove (index) {
                this.data1.splice(index, 1);
            },
            //显示参数输入框
            toShow(){
                this.show = !this.show;
            },
            //错误提示弹出
            showError(){
            this.$Message.error(this.error);
            },
            //添加参数
            addParameter() {
                if(this.newParamName == ''){
                    this.error = '请输入参数名称！';
                    this.showError();
                    console.log(this.newParamName);
                } else if(this.newParamValue == '') {
                    this.error = '请输入正确的参数值！';
                    this.showError();
                } else if(this.newParamType == '') {
                    this.error = '请选择参数类型！';
                    this.showError();
                } else {
                    this.data1.push(
                    {
                        name:this.newParamName,
                        paramvalue:this.newParamValue,
                        paramtype:this.newParamType
                    }
                );
                this.toShow();
                }
            }
        }
}
</script>

<style  scoped>
@import url("../../../assets/styles/font/font.css");
.parameterset {
    height: 100%;
}
.text-title {
    font-size:2em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:50px;
    position: relative;
    top: -35px;
    left: 20px;
}
.btn-add {
    position: relative;
    top: -75px;
    left: 730px;
}
.d-line {
    position: relative;
    top: -50px;
}
.tb-parameter {
    position: relative;
    top: -50px;
    left: 20px;
    font-size:1em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    line-height:22px;
}
.input-add {
    position: relative;
    left: 20px;
    top: -40px;
}
</style>