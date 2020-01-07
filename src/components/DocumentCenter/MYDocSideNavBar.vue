<template>
  <div class="SideNavBarWrapper">
    <Menu
      class="navList"
      width="309px"
      :active-name="activeName"
      :open-names="openNames"
      @on-select="getDocListInfo"
    >
    <div class="searchInput">
      <Input
      class="searchInput"
        style="width:260px"
        icon="ios-search"
        placeholder="输入关键词搜索"
        v-model="searchInput"
        @on-click="test"
        @on-enter="test"
      />
    </div>
    
      <Submenu class="cat1" v-for="doc1 in myarr" :key="doc1.docId" :name="doc1.docName">
        <template slot="title">
          <Icon type="md-list-box" />
          {{doc1.docName}}
        </template>
        <!-- <Submenu
          class="cat2"
          v-for="doc2 in getCatDocList(doc1.childList,'cat')"
          :key="doc2.docId"
          :name="doc2.docName"
        >
          <template slot="title">· {{doc2.docName}}</template>
        </Submenu> -->
        <MenuItem
          class="doc3"
          v-for="doc3 in getCatDocList(doc1.childList,'doc')"
          :key="doc3.docId"
          :name="doc3.docName"
        >- {{doc3.docName}}</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  props: {
    myDatas: {
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
      myarr: this.myDatas,
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
    activeDocId: {
      // 计算当前被选中文档的docId
      get: function() {
        // getter
        return this.docList[this.activeName];
      },
      set: function() {
        // setter
        return "11"; //默认打开的文档docId，可以修改
      }
    }
  },
  watch: { //监听路由变化
    $route(){
      this.activeName = this.$route.query.docName;
    },
    activeName() {
      this.selectedInfo(); // 向父组件传递当前展开的目录和文档id，用来更新面包屑导航栏和文档内容
    },
  },
  activated() {
    this.getDocName();
  },
  created() {
    this.getCatList();
    this.getDocName();
  },
  methods: {
    test() {
      let value = this.searchInput.trim().toUpperCase();
      if (value) {
        // 输入框不为空时，显示搜索结果
        let docList = JSON.parse(JSON.stringify(this.myDatas));
        let resultArray = this.filterList(docList, value);
        this.myarr = resultArray;
      } else {
        // 输入框为空时，恢复原始数组
        this.myarr = this.myDatas;
      }
    },
    //根据关键字搜索树形数据，通过递归实现
    filterList(arr, value) {
      let _this = this;
      let result = arr.reduce(function(pre, item) {
        let name = item.docName.toUpperCase();
        if (name.includes(value)) {
          pre.push(item);
        } else if (item.childList) {
          let child = _this.filterList(item.childList, value);
          if (child.length > 0) {
            var newItem = JSON.parse(JSON.stringify(item));
            newItem.childList = child;
            pre.push(newItem);
          }
        }
        return pre;
      }, []);
      return result;
    },
    getDocListInfo(name) {
      // 获取当前选中文档的名称，改变路由
      this.activeName = name;
      this.$router.push({
        query: { docName: this.activeName },
        hash: "anchor0"
      });
    },
    getDocName() { //获取当前被选中的文档名称
      let _docName = this.$route.query.docName;
      if(!_docName) { //若其他页面跳转过来没有带参数，默认打开第一个文档,可以修改
        this.$router.push({ query:{ docName: "应用创建审核规范" } });
        this.activeName = "应用创建审核规范";
      } else { // 若其他页面跳转过来带参数，打开相应的文档，这里还未验证，暂且空出
        this.$router.push({ query:{ docName: _docName } });
        this.activeName = _docName;
      }
    },
    getCatDocList(params, type) {
      //目录和文档类型分类
      let newList = [];
      if (!params) {
        return;
      }
      params.forEach((item, index) => {
        if (item.docType === type) {
          newList.push(item);
        }
      });
      return newList;
    },
    selectedInfo() {
      this.$emit("selectedDoc", this.openNames);
      this.$emit("selectedDocId", this.docList[this.activeName]);
      this.$emit("selectedDocName",this.activeName);
    },
    getCatList() {
      console.log(this.myarr);
      let newList = this.myarr;
      let _catList = {};
      let _docList = {};
      newList.forEach((item, index) => {
        if (item.childList != null) {
          let newList2 = item.childList;
          newList2.forEach((item2, index) => {
            if (item2.docType == "doc") {
              _catList[item2.docName] = [item.docName, item2.docName];
              _docList[item2.docName] = item2.docID;
            }
          });
        } else {
          _catList[item.docName] = [item.docName];
          _docList[item.docName] = item.docID;
        }
      });
      this.catList = _catList;
      this.docList = _docList;
    }
  }
};
</script>

<style lang="less" scoped>
// @sideNavHeight : 100%;
// @bgColor:#fafafa;
// .SideNavBarWrapper{
//   // margin-left: 115px;
//   width: 315px;
//   height: @sideNavHeight;
//   background: @bgColor;
//   overflow-x: hidden;
  // border-right: 1px solid #ebebeb;
  // position: relative;
  // align-items: center;
  // visibility: middle;
  // vertical-align: center;
  // text-align: center;
  .searchInput{
    // width: 280px;
    margin-top: 30px;
    text-align: center;
  }
  .ivu-menu-light{
    //整体导航栏背景色
    background:rgba(2,164,175,0.04);
    font-size: 26px;
  }
      
  /* 文档中心和问题中心左侧导航栏样式覆盖 */
  .ivu-menu-light.ivu-menu-vertical>.ivu-menu-submenu.ivu-menu-item-active.ivu-menu-opened.ivu-menu-child-item-active>.ivu-menu-submenu-title {
      color: #02A4AF;
      
  }
  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
          //hover时的样式
      color: #02A4AF;
      font-size: 25px;
     
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
  .ivu-menu-item{
    //第二层menu的样式
    font-size: 20px;
    color: #9B9B9B;
  }
  // .cat1{
  //   font-size: 18px;
  //   font-family:PingFangSC-Medium,PingFang SC;
  //   font-weight:500;
  //   .cat2{
  //     font-size: 14px;
  //     font-family:PingFangSC-Medium,PingFang SC;
  //     font-weight:500;
  //   }
  // }
// }
</style>