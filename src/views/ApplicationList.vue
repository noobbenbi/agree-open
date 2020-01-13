<template>
<div>
    <Header></Header>
    <div class="applicationlist">
        <AccountHeader></AccountHeader>
        <div class="formal-app">
            <span>正式应用列表</span>
            <Divider class="c-line"/>
        </div>
        <div class="sandbox-app">
            <span>沙箱测试应用</span>
            <Divider class="c-line"/>
        </div>
        <div class="summary">
            <Tabs class="tab-pane" type="card">
                <TabPane label="API调用情况">
                  <div class="select-box">
                    <Select v-model="model3" style="width:200px" placeholder="API列表">
                      <Option v-for="(item,index) in apiList" :key="index" :value="item">{{ item }}</Option>
                    </Select>
                    <Select v-model="model3" style="width:120px; padding-left:10px" placeholder="调用时间">
                      <Option v-for="(item,index) in periodList" :key="index" :value="item">{{ item }}</Option>
                    </Select>
                  </div>
                    <div class="line-chart" id="linechart"></div>
                </TabPane>
                <TabPane label="交易统计"></TabPane>
            </Tabs>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import AccountHeader from '../components/AccountHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'ApplicationList',
    data() {
        return {
            appInfo:'',
            model3:'',
            apiList: [
              "生活缴费",
              "沙箱测试"
            ],
            periodList:[
              "最近24小时",
              "最近30天",
              "最近12个月"
            ],
            dataOfApiX: ["2017-2-30","2017-2-30","2017-2-30","2017-2-30","2017-2-30","2017-2-30","2017-2-30","2017-2-30","2017-2-30"],
            dataOfApiY: [20,110,270,170,140,210,250,180,300],
        }
    },
    methods:{
        toDraw() {      
            var lineChart = this.$echarts.init(document.getElementById("linechart"));
            lineChart.setOption({
        title: {
          subtext: "API调用次数",
          subtextStyle: {
          }
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            dataView: {
              readOnly: false,
              show: false
            }
          }
        },
        xAxis: {
          type: "category",
          data: this.dataOfApiX.map(function(str) {
            return str.replace(" ", "\n");
          }),
          nameTextStyle: {
            color: "rgba(155,155,155,1)",
            padding: -25,
          },
          axisLabel: {
            formatter: "{value}",
            textStyle: {
            }
          }
        },
        yAxis: {
          axisTick: { show: false },
          type: "value",
          axisLine: {
            lineStyle: {
              width: 0
            }
          },
          axisLabel: {
            formatter: "{value}",
            textStyle: {
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
            }
          }
        },
        series: [
          {
            name: "调用次数",
            type: "line",
            stack: "总量",
            data: this.dataOfApiY,
            lineStyle: {
                color: 'rgba(2,164,175,1)'
            }
          }
        ]
      });
        },
    },
    mounted(){
        this.toDraw();
    },
    components:{
        AccountHeader,
        Header,
        Footer
    }
}
</script>

<style  scoped>
.applicationlist {
    display: flex;
    flex-direction: column;
}
.formal-app,
.sandbox-app,
.summary {
    width: 70%;
    height: 300px;
    margin: 30px 0;
    position: relative;
    left: 15%;
    box-shadow: 0 0 20px 15px rgba(241, 235, 235, 0.3);
}
.summary {
    height: 530px;
    top: 30px;
    margin-bottom: 200px;
}
.tab-pane {
    position: relative;
    top: -32px;
}
.select-box {
  position: relative;
  top: 3%;
  left: 50%;
}
.select-box /deep/ .ivu-select-placeholder,
.select-box /deep/ .ivu-select-selection{
  color:rgba(2,164,175,1);
}
.summary /deep/ .ivu-tabs-bar {
    border-bottom: 0px;
}
.line-chart {
    width: 80%;
    height: 400px;
    padding-bottom: 40px;
    position: relative;
    display: table;
    margin: 0 auto;
}
</style>