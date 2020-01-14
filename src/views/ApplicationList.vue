<template>
<div>
    <Header></Header>
    <div class="applicationlist">
        <AccountHeader></AccountHeader>
        <div class="formal-app">
            <span class="box-title">正式应用列表</span>
            <Divider class="c-line"/>
            <div class="applist">
              <div class="appdetail" v-for="(item,index) in appList" :key="index">
                <img src="@/assets/images/apptubiao.png" alt="">
                <a href="">{{item.appName}}</a>
                <p class="appid">{{item.appId}}</p>
                <p class="appstate">{{item.appState}}</p>
                <p class="apptype">{{item.appType}}</p>
                <p class="d-line"></p>
              </div>
            </div>
        </div>
        <div class="sandbox-app">
            <span class="box-title">沙箱测试应用</span>
            <Divider class="c-line"/>
            <div class="applist">
              <div class="appdetail" v-for="(item,index) in sandBoxAppList" :key="index">
                <img src="@/assets/images/apptubiao.png" alt="">
                <a href="">{{item.appName}}</a>
                <p class="appid">{{item.appId}}</p>
                <p class="" style="display:table; margin:0 auto; color:rgba(255,179,0,1);">{{item.appState}}</p>
              </div>
            </div>
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
            appList:[
              {
                appName:'生活缴费',
                appId:'4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                appState:'开发中',
                appType:'web'
              },
              {
                appName:'生活缴费',
                appId:'4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                appState:'开发中',
                appType:'web'
              },
              {
                appName:'生活缴费',
                appId:'4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                appState:'开发中',
                appType:'web'
              },
              {
                appName:'生活缴费',
                appId:'4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                appState:'开发中',
                appType:'web'
              },
            ],
            sandBoxAppList:[
              {
                appName:'沙箱测试APP',
                appId:'4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                appState:'测试中',
              },
              {
                appName:'沙箱测试APP',
                appId:'4077d5a6-c813-4ed6-a2e7-ef2054bf2564',
                appState:'测试中',
              },
            ],
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
    height: 350px;
    margin: 30px 0;
    position: relative;
    left: 15%;
    box-shadow: 0 0 20px 15px rgba(241, 235, 235, 0.3);
}
.box-title {
  position: relative;
  left: 7%;
  top: 30px;
  font-size:1.4em;
  font-family:PingFangSC-Medium,PingFang SC;
}
.c-line {
  position: relative;
  top: 30px;
}
.applist {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  font-family:PingFangSC-Regular,PingFang SC;
}
.appdetail {
  position: relative;
  width: 25%;
  top: 30px;
}
.appdetail img{
  width: 80px;
  height: 90px;
  display: table;
  margin: 3% auto;
}
.appdetail a{
  display: table;
  margin: 0 auto;
  color:rgba(29,31,49,1);
  font-size:1.7em;
  font-family:PingFangSC-Medium,PingFang SC;
}
.appid {
  font-size:0.5em;
  display: table;
  margin: 2% auto;
  text-align: center;
}
.appstate {
  color:rgba(255,179,0,1);
  position: absolute;
  left: 30%;
}
.apptype {
  position: absolute;
  right: 35%;
}
.d-line {
  width:1px;
  height:20px;
  background:rgba(213,213,213,1);
  position: relative;
  display: table;
  margin: 0 auto;
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