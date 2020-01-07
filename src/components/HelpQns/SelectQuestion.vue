<template>
  <div class="SideNavBarWrapper">
    <Menu
      class="navList"
      width="240px"
      :active-name="activeName"
      :open-names="openNames"
      @on-select="getDocListInfo"
      id="menu"
    >
      <Submenu class="cat1" name="1">
        <template slot="title">
          <Icon type="md-list-box" />热门问题
        </template>
        <MenuItem
          class="cat2"
          v-for="Qsn in getCatDocList(myarr, 'hot')"
          :key="Qsn.QsnId"
          :name="Qsn.QsnName"
        > - {{Qsn.QsnName}}</MenuItem>
      </Submenu>
      <Submenu class="cat1" name="2">
        <template slot="title">
          <Icon type="md-list-box" />产品问题
        </template>
        <MenuItem
          class="cat2"
          v-for="Qsn in getCatDocList(myarr, 'product')"
          :key="Qsn.QsnId"
          :name="Qsn.QsnName"
        > - {{Qsn.QsnName}}</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { log } from "util";
export default {
  props: {
    forms: {
      type: Array
    }
  },
  data() {
    return {
      searchInput: "", // 搜索框文字
      // docSideNavBarList: this.SideNavBarList,
      activeName: "", // 当前被选择的文档名称
      catList: {}, // 所有文档的名称和其父目录
      docList: {}, // 所有文档的名称和ID
      myarr: this.forms
    };
  },
  computed: {
    openNames: {
      // 计算当前被选中文档的父目录
      get: function() {
        // getter
        return this.catList[this.activeName];
      },
      set: function() {
        // setter
        return ["规则文档", "应用创建审核规范"];
      }
    },
  },
  watch: {
    //监听路由变化
    $route() {
      this.activeName = this.$route.query.QsnName;
    },
    activeName() {
      this.selectedInfo(); // 向父组件传递当前展开的目录和文档id，用来更新面包屑导航栏和文档内容
    }
  },
  activated() {
    this.getDocName();
  },
  created() {
    this.getCatList();
    this.getDocName();
  },
  methods: {
    getDocListInfo(name) {
      this.$emit("backs", 'backs');
      // 获取当前选中文档的名称，改变路由
      this.activeName = name;
      this.$router.push({
        query: { QsnName: this.activeName },
        hash: "anchor0"
      });
    },
    getDocName() {
      //获取当前被选中的文档名称
      let _QsnName = this.$route.query.QsnName;
      if (!_QsnName) {
        //若其他页面跳转过来没有带参数，默认打开第一个文档,可以修改
        this.$router.push({ query: { QsnName: "快速入门" } });
        this.activeName = "快速入门";
      } else {
        // 若其他页面跳转过来带参数，打开相应的文档，这里还未验证，暂且空出
        this.$router.push({ query: { QsnName: _QsnName } });
        this.activeName = _QsnName;
      }
    },
    getCatDocList(params, type) {
      //两类问题分开
      let newList = [];
      if (!params) {
        return;
      }
      params.forEach((item, index) => {
        if (item.QsnType === type) {
          newList.push(item);
        }
      });
      return newList;
    },
    selectedInfo() {
      //更新面包屑栏
      this.$emit("selectedDoc", this.openNames);
      //更新问题栏
      this.$emit("selectedDocId", this.docList[this.activeName]);
    },
    getCatList() {
      let newList = this.myarr;
      let _catList = {};
      let _docList = {};

      newList.forEach((item, index) => {
        if (item.QsnType == "hot") {
          _catList[item.QsnName] = ['热门问题', item.QsnName,];
          _docList[item.QsnName] = item.QsnId;
        } else {
          _catList[item.QsnName] = ['产品问题', item.QsnName];
          _docList[item.QsnName] = item.QsnId;
        }
      });
      this.catList = _catList;
      this.docList = _docList;
    }
  }
};
</script>

<style lang="less" scoped>

// .SideNavBarWrapper {

//   .navList{

//     .cat1{
//        #menu /deep/.ivu-menu{
//         font: 30px;
//        }
//     }
//   }
//   .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
//       /* 选中时候的按钮的背景色和字体颜色 */
//       background:#fff;
//       color: rgba(2,164,175,1);
//       box-shadow:0px 0px 10px 0px rgba(203,250,255,1);
//   }
 .ivu-menu-light{
  //第一层menu背景色
  //第一层menu的字体
  background:rgba(2,164,175,0.04);
    font-size: 26px;
  }
      
  /* 文档中心和问题中心左侧导航栏样式覆盖 */
  // .ivu-menu-light.ivu-menu-vertical>.ivu-menu-submenu.ivu-menu-item-active.ivu-menu-opened.ivu-menu-child-item-active>.ivu-menu-submenu-title {
  //     // color: #02A4AF;
  //     color: red;
  // }
  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    //hover时的样式
      color: #02A4AF;
      font-size: 25px;
     
  }
  .ivu-menu-item{
    //第二层menu的样式
    font-size: 20px;
    color: #9B9B9B;
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
      /* 选中时候的按钮的背景色和字体颜色 */
      background:#fff;
      color: rgba(2,164,175,1);
      box-shadow:0px 0px 10px 0px rgba(203,250,255,1);
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
      background: none;
  }
// }

</style>