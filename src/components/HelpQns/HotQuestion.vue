<template>
  <!-- 消息中心 -->
  <div class="newscenter">
    <div class="msgcenter">        
      <span class="text-title">{{head}}</span>
      <Table
        class="msg-table"
        :columns="msgColumns"
        :data="showmsgData"
        :show-header="showHeader"
        :width="tableWidth"
        :height="tableHeight"
        :size="tableSize"
      ></Table>
      <Page class="msg-page" :total="msgDatalength" :page-size="pageSize" @on-change="changepage" />
    </div>
    <div class="footer-test"></div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array
    },
    qsntitle: {
      type: String
    }
  },
  name: "MsgCenter",
  data() {
    return {
      head:"",
      theme3: "light",
      //表格样式处
      msgColumns: [
        {
          title: " ",
          width: 500 + "px",
          key: "QsnName"
        },{
          title: " ",
          width: '300px',
          key: "Qsncontent",
        },
        {
          title: " ",
          key: "",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params);
                    }
                  }
                },
                "查看详情"
              )
            ]);
          }
        },
      ],
      tableSize: "large",
      showHeader: false,
      tableWidth: "900",
      tableHeight: "300",
      showmsgData: [],
      msgDatanow: [],
      msgDatalength:4,
      pageSize: 5,
      currentPage: 1,
      msgcode: 1222
    };
  },
  mounted() {
    this.msgData = this.questions;
    this.do();
    
  },
  watch:{
    questions(curVal,oldVal){
      if(curVal){
        this.msgData=curVal;
        }
        this.do();
    },
    qsntitle(curVal,oldVal) {
      if(curVal){
        this.head=curVal;
        }
    }
  },
  methods: {
    do() {
      let lenn = this.msgData.length;
      this.msgDatalength = Number(lenn);
      // for (var i = 0; i < this.msgData.length; i++) {
      //   this.msgDatanow[i] = this.msgData[i];
      // }
      this.msgDatanow = JSON.parse(JSON.stringify(this.msgData));
      for (var i = 0; i < this.msgData.length; i++) {
        this.msgDatanow[i].Qsncontent = this.part(this.msgDatanow[i].QsnContent);
      }
      this.showmsgData = this.msgDatanow.slice(0, 5);
    },
    show(params) {
      this.$emit("changeshow",params.row);
    },
    changepage(index) {
      this.currentPage = index;
      let _start = (index - 1) * this.pageSize;
      let _end = index * this.pageSize;
      this.showmsgData = this.msgDatanow.slice(_start, _end);
    },
    choose(name) {
      if (name == "1") {
      } else {
      }
    },
    part(content) {
      let part = content;
      if (part.length > 13) {
        part = part.substring(0, 12)+ '...';
      }
      // console.log('msgData',this.msgData);
      // console.log('showmsgData',this.msgDatanow);
      return part;
    }
  },
  components: {}
};
</script>

<style lang="less"  scoped>
.newscenter{
  padding: 0 5%;
  .msgcenter{
    .text-title{
      font-size:36px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(29,31,49,1);
      margin-bottom: 20px;
    }
  }
}

</style>
