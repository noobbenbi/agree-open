<template>
  <div>
    <div class="document" >
      <Breadcrumb class="bread" separator="/">
        <BreadcrumbItem to="/">应用中心</BreadcrumbItem>
        <BreadcrumbItem>应用详情</BreadcrumbItem>
        <BreadcrumbItem>生活服务</BreadcrumbItem>
        <BreadcrumbItem>{{activeName}}</BreadcrumbItem>
      </Breadcrumb>
      <div class="guide">
        <div class="select-lab">
          <Menu class='menu' :theme="theme3" :active-name="activeName" @on-select="choose">
            <MenuItem name="概况" class="menuitem"  v-bind:style="{width: myWidth}">
              <p>概况</p>
            </MenuItem>
            <MenuItem name="数据统计" class="menuitem"  v-bind:style="{width: myWidth}">
              <p>数据统计</p>
            </MenuItem>
            <MenuItem name="账单详情" class="menuitem"  v-bind:style="{width: myWidth}">
              <p>账单详情</p>
            </MenuItem>
            <MenuItem name="测试验收" class="menuitem"  v-bind:style="{width: myWidth}">
              <p>测试验收</p>
            </MenuItem>
          </Menu>
        </div>
        <div class="mainContent">
          <GeneralSituation v-show="activeName=='概况'"></GeneralSituation>
          <Charts v-show="activeName=='数据统计'"></Charts>
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Charts from "@/components/application/Charts";
import GeneralSituation from "@/components/application/GeneralSituation";

export default {
  name: "DocumentCenter",
  data() {
    return {
        theme3:'light',
        documentHeight:window.innerHeight -70 + 'px',
        activeName: '概况',
        Num: 1,
        myWidth: '',
    };
  },
  components: {
    Header,
    Footer,
    Charts,
    GeneralSituation
  },
  computed: {

  },
  watch: {
    $route() {
        this.activeName = this.$route.query.docName;
    },
  },
  created() {
    this.myWidth = window.innerWidth/1920*200*1.42 + 'px';
  },
  methods: {
    choose(name) {
        this.activeName = name;
    }
  }
};
</script>
<style lang="less" scoped>
.document {
  
  margin-bottom: 100px;
  .mainContent {
    flex: 1;
    overflow-x: hidden;
    margin-bottom: 10px;
  }
}
.select-lab{
    display: flex;
    height: 404px;
    margin-top: 4%;
    margin-right: 5%;

}
.ivu-menu-vertical.ivu-menu-light:after {
    content: '';
    display: block;
    width: 0px;
    height: 100%;
    background: #dcdee2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}
.menuitem {
    height: 101px;
}
.menuitem p{
    margin-top: 15px;
    height: 100%;
    text-align: center;
    font-size:26px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(74,74,74,1);
}
.guide{
    margin-left: 8%;
    display: flex;
}
.bread {
    margin-top: 4%;
    font-size: 20px;
    margin-left: 8.5%;
    width: 450px;
}
// .footer{  
//   margin:0 auto;
// }  
</style>