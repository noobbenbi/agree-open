<template>
  <!-- 消息中心 -->
  <div class="charts">
    <h1 class="title1">API调用统计</h1>
    <span class="line"></span>
    <Row :gutter="32">
      <i-col  class="demo-tabs-style2">
        <Tabs type="card">
          <Tab-pane class="tab" label="交易统计">
            <div class="selecta" id="selecta" style="margin-top:40px;">
              <div class="myLine" id="myLine" v-bind:style="{width: myWidth,height:myHeight}"></div>
            </div>
          </Tab-pane>
          <Tab-pane class="tab" label="API调用情况">
            <div class="selectb" id="selectb" style="margin-top:34px;">
              <div class="selectb1">
                <span v-bind:style="{width: myWidth2}"></span>
                <select class="selecttype" v-model="ChooseType" name="fruit">
                  <option class="option" v-for="(item,index) in Types" :key="index">{{ item }}</option>
                </select>
                <select class="selecttime" v-model="ChooseTime" name="fruit">
                  <option
                    class="option"
                    v-for="(item,index) in Times"
                    :key="index"
                    style="margin-left: 10px;"
                  >{{ item }}</option>
                </select>
              </div>
              <div class="myLine" id="myLine2" v-bind:style="{width: myWidth,height:myHeight}"></div>
            </div>
          </Tab-pane>
        </Tabs>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { fdatasync } from "fs";
import Header from "@/components/Header";

export default {
  name: "MsgCenter",
  data() {
    return {
      data1x: [],
      data1y1: [],
      data1y2: [],
      ChooseTime: "最近24小时",
      Times: ["最近24小时", "一个月内", "最近12个月"],
      ChooseType: "API列表",
      Types: ["API列表", "question列表"],
      res: false,
      myWidth:'',           //59%,1132px;
      myHeight:'',        //1132的53%.横纵一比二大概
      myWidth2:'',
      myfontsize:20,
    };
  },
  components: {
    Header
  },
  methods: {
    initChart() {
      this.data1y1 = [120, 132, 101, 134, 90, 230, 210];
      this.data1y2 = [6, 5, 3, 4, 6, 9, 3];
      this.data1x = [
        "2017 11-12",
        "2017 11-13",
        "2017 11-14",
        "2017 11-15",
        "2017 11-16",
        "2017 11-17",
        "2017 11-18"
      ];
      var myLine = this.$echarts.init(document.getElementById("myLine"));
      myLine.setOption({
        title: {
          color: "#0DB9F2",
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
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              fontSize: this.myfontsize
            }
          },
          data: this.data1x.map(function(str) {
            return str.replace(" ", "\n");
          })
        },
        yAxis: [
          {
            name: "          交易金额统计  单位：元\n\n\n\n",
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                width: 0
              }
            },
            nameTextStyle: {
            color: "rgba(155,155,155,1)",
            fontSize: this.myfontsize,
            padding: -55
          },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                fontSize: this.myfontsize
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dotted" //使用虚线
              }
            }
          },
          {
            name: "小时交易数量统计 单位：笔                \n\n\n\n",
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                width: 0
              }
            },
            nameTextStyle: {
            color: "rgba(155,155,155,1)",
            fontSize: this.myfontsize,
            padding: -55
          },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dotted"
              }
            },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                fontSize: this.myfontsize
              }
            }
          }
        ],
        series: [
          {
            name: "交易金额统计  单位：元",
            type: "line",
            data: this.data1y1
          },
          {
            name: "小时交易数量统计 单位：笔",
            yAxisIndex: 1,
            type: "line",
            data: this.data1y2,
            lineStyle: {
              type: "dotted" //使用虚线
            }
          }
        ]
      });
    },
    initChart2() {
      //根据选择内容进行查询，再根据查询结果进行赋值
      this.data2y = [120, 132, 101, 134, 90, 230, 210];
      this.data2x = [
        "2017 11-12",
        "2017 11-12",
        "2017 11-12",
        "2017 11-12",
        "2017 11-12",
        "2017 11-12",
        "2017 11-12"
      ];
      var myLine2 = this.$echarts.init(document.getElementById("myLine2"));
      myLine2.setOption({
        title: {
          subtext: "API调用次数",
          subtextStyle: {
            fontSize: this.myfontsize
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
          name: "\n\n 调用时间",
          type: "category",
          data: this.data2x.map(function(str) {
            return str.replace(" ", "\n");
          }),
          nameTextStyle: {
            color: "rgba(155,155,155,1)",
            fontSize: this.myfontsize,
            padding: -55
          },
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              fontSize: this.myfontsize
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
              fontSize: this.myfontsize
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              // 使用深浅的间隔色
              type: "dotted",
              color: ["red"]
            }
          }
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: this.data2y
          }
        ]
      });
    }
  },
  created() {
    this.myWidth2 = window.innerWidth*0.62 -570 + 'px';
    this.myWidth = window.innerWidth*0.59 + 'px';
    this.myHeight = window.innerWidth*0.3127 + 'px';
    this.myfontsize = window.innerWidth/1920*20;
    console.log(this.myWidth,this.myHeight);
  },
  mounted() {
    this.initChart();
    this.initChart2();
  },
  watch: {
    ChooseType() {
      this.initChart2();
    },
    ChooseTime() {
      this.initChart2();
    }
  },
};
</script>

<style  lang="less" >

.title1 {
  font-size: 36px;
  margin-top: 6.3%;
  margin-left: 3%;
}
.line {
  margin-top: 19px;
  margin-bottom: 40px;
  margin-left: 40px;
  display: flex;
  width: 50%;
  height: 1px;
  background: rgba(240, 240, 240, 1);
}
.selecttype {
  width: 260px;
  height: 40px;
  border-radius: 2px;
  background-color: rgba(249, 249, 249, 1);
}
.selecttime {
  width: 260px;
  height: 40px;
  margin-left: 10px;
  border-radius: 2px;
  background-color: rgba(249, 249, 249, 1);
}
.selectb1 {
  margin-left: 3%;
  display: flex;
}
.option {
  background-color: rgb(255, 255, 255);
  text-align:center;
  text-align-last:center;
}
.tabs{
  margin-left:3%;
  display: flex;
  margin-top: 30px;
}
.tab {
  display: flex;
}
.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-nav-container {
    height: 50px;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
  width: 140px;
  height: 50px;
  // bottom: 30px;
  font-size: 20px;
  line-height:40px;
  text-align: center;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
  background: white;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
  background: white;
  border: 1px  solid  rgba(213,213,213,1);
  border-radius: 4px 4px 0px 0px;
  top: 0;
  left: 0;
}
</style>
