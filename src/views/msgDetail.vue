<template>
  <div class="msgDetail">
    <Header></Header>
    <div class="breadcrumb">
      <Breadcrumb separator="<">
        <span>当前位置：</span>
        <Breadcrumb-item href="/">首页</Breadcrumb-item>
        <Breadcrumb-item href="/msg">系统消息</Breadcrumb-item>
        <Breadcrumb-item>消息详情</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <info-detail :infoDetail="msgDetail"></info-detail>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import infoDetail from "@/components/info/infoDetail";
export default {
  name: "msgDetail",
  data() {
    return {
      msgId: "",
      msgDetail: {},
      time: '',
      look: '',
      code: '',
      title: '',
    };
  },
  components: {
    Header,
    Footer,
    infoDetail
  },
  created() {
    this.newsId = this.$route.query.id;
    this.time = sessionStorage.getItem('time');
    this.look =  sessionStorage.getItem('content');
    this.code = sessionStorage.getItem('code');
    this.title = sessionStorage.getItem('title');
    console.log('接收', this.time,this.look,this.title,this.code);
     //this.getNewsDetail();
    this. msgDetail = {
        msgTitle: this.title,
        msgContent: this.look,
        msgPublisher: this.code,
        createTimeStr: this.time,
    }
    //此处可增加方法通过code判断是管理员消息还是系统消息进行不同显示。
  },
  methods: {
    getNewsDetail() {
      getNewsDetail({ msgId: this.msgId}).then(res => {
        if (res.status.code == "200") {
          this.msgDetail = res.data.msgDetail;
        } else {
          this.$alert(res.status.statusMsg);
        }
      });
    }
  },
  destroyed() {
    sessionStorage.setItem('time','');
    sessionStorage.setItem('content','');
    sessionStorage.setItem('code','');
    sessionStorage.setItem('title','');
  }
};
</script>