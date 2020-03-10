<template>
  <div class="side-navbar-wrapper">
    <div class="search-wrapper">
      <Input
        class="search-input"
        icon="ios-search"
        placeholder="输入关键字搜索"
        v-model="searchInput"
        @on-click="searchDocByName"
        @on-enter="searchDocByName"
      />
    </div>
    <div class="menu-null" v-show="menuNull">没有找到相关文档……</div>
    <!-- 左侧菜单渲染，暂时只支持三级目录 -->
    <Menu
      class="menu-list"
      ref="menuListRef"
      v-show="!menuNull"
      :active-name="activeName"
      :open-names="openNames"
      @on-select="getDetail"
    >
      <Submenu class="cat1" v-for="doc1 in myarr" :key="doc1.docId" :name="doc1.docName">
        <template slot="title">
          <Icon class="menu-icon" type="md-clipboard" />
          {{doc1.docName}}
        </template>
        <Submenu
          class="cat2"
          v-for="doc2 in getCatDocList(doc1.childMenu,1)"
          :key="doc2.docId"
          :name="doc2.docName"
        >
          <template slot="title">{{doc2.docName}}</template>
          <MenuItem
            class="doc3 item-doc"
            v-for="doc3 in getCatDocList(doc2.childMenu,0)"
            :key="doc3.docId"
            :name="doc3.docName"
          >{{doc3.docName}}</MenuItem>
        </Submenu>
        <MenuItem
          class="doc2 item-doc"
          v-for="doc2 in getCatDocList(doc1.childMenu,0)"
          :key="doc2.docId"
          :name="doc2.docName"
        >{{doc2.docName}}</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  props: {
    menuList: { type: Array },
    activeAnchor: { type: String }
  },
  data() {
    return {
      searchInput: '', // 搜索框文字
      menuNull: false,
      activeName: '', // 当前被选择的文档名称
      catList: {}, // 所有文档的名称和其父目录
      docList: {}, // 所有文档的名称和ID'
      myarr: this.menuList, // 当前左侧菜单列表
      routerDocName: '',
      beforeActiveAnchor: 0
    }
  },
  computed: {
    // 计算当前被选中文档的父目录
    openNames: {
      get: function() {
        this.$nextTick(() => {
          this.$refs.menuListRef.updateOpened() //  手动更新展开的子目录
          this.$refs.menuListRef.updateActiveName() //  手动更新当前选择项
        })
        return this.catList[this.activeName]
      },
      set: function() {
        return this.catList[Object.keys(this.catList)[0]]
      }
    },
    // 计算当前被选中文档的docId
    activeDocId: {
      get: function() {
        return this.docList[this.activeName]
      },
      set: function() {
        return this.docList[Object.keys(this.docList)[0]]
      }
    }
  },
  mounted() {
    this.routerDocName = this.$route.query.docName
  },
  watch: {
    menuList() {
      this.myarr = this.menuList
    },
    myarr() {
      this.getCatList()
      this.getActiveName()
      this.getDetail(this.activeName)
    },
    activeName() {
      this.$emit('getHash2','anchor0') 
    },
    activeAnchor() {
      this.$router.push({
        query: { docName: this.activeName },
        hash: this.activeAnchor
      })
    }
  },
  methods: {
    //  检索名称包含关键字的菜单项
    searchDocByName() {
      let value = this.searchInput.trim().toUpperCase()
      if (value) {
        // 输入框不为空时，显示搜索结果
        let docList = JSON.parse(JSON.stringify(this.menuList))
        let resultArray = this.filterList(docList, value)
        if(resultArray.length) {
          this.menuNull = false
          this.myarr = resultArray
        } else {  //  检索结果为空
          this.menuNull = true
        }
      } else {
        // 输入框为空时，恢复原始数组
        this.menuNull = false
        this.myarr = this.menuList
      }
    },
    //根据关键字搜索树形数据，通过递归实现
    filterList(arr, value) {
      let _this = this
      let result = arr.reduce(function(pre, item) {
        let name = item.docName.toUpperCase()
        if (name.includes(value)) {
          pre.push(item)
        } else if (item.childMenu) {
          let child = _this.filterList(item.childMenu, value)
          if (child.length > 0) {
            var newItem = JSON.parse(JSON.stringify(item))
            newItem.childMenu = child
            pre.push(newItem)
          }
        }
        return pre
      }, [])
      return result
    },
    //  选择菜单（MenuItem）时触发
    getDetail(name) {
      this.activeName = name
      this.$emit('getDocId', this.activeDocId) // 获取当前选中文档的docId
      this.$emit('getBreadCrumb', this.openNames) //  获取当前选中文档的父目录，改变面包屑导航栏
      this.$emit('getHash2',this.activeAnchor)
      this.$router.push({
        query: { docName: this.activeName },
        hash: this.activeAnchor
      })
    },
    //  判断搜索输入框是否为空、路由中是否携带docName参数
    getActiveName() {
      if (this.searchInput) {
        //  搜索输入框不为空
        this.activeName = Object.keys(this.catList)[0] //  当前选中菜单项赋值为第一层目录下的第一个文档
        this.$emit('getHash2','anchor0')
      } else if (this.routerDocName) {
        //  初始路由参数不为空
        this.activeName = this.routerDocName
      } else {
        //  其他情况
        this.activeName = Object.keys(this.catList)[0]
      }
    },
    //  目录和文档类型分类
    getCatDocList(params, type) {
      let newList = []
      if (!params) {
        return
      }
      params.forEach((item, index) => {
        if (item.isDirectory === type) {
          newList.push(item)
        }
      })
      return newList
    },
    //  获取下列两个对应关系：文档名称-父目录，文档名称-docId，尚未完成，要支持n层目录
    getCatList() {
      let newList = this.myarr
      let _catList = {}
      let _docList = {}
      newList.forEach((item, index) => {
        if (item.childMenu != []) {
          let newList2 = item.childMenu
          newList2.forEach((item2, index) => {
            if (item2.isDirectory == 0) {
              _catList[item2.docName] = [item.docName, item2.docName]
              _docList[item2.docName] = item2.docId
            } else {
              let newList3 = item2.childMenu
              newList3.forEach((item3, index) => {
                if (item3.isDirectory == 0) {
                  _catList[item3.docName] = [item.docName,item2.docName, item3.docName]
                  _docList[item3.docName] = item3.docId
                }
              })
            }
          })
        } else {
          _catList[item.docName] = [item.docName]
          _docList[item.docName] = item.docId
        }
      })
      this.catList = _catList
      this.docList = _docList
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/variables.less';
@deep: ~'>>>';
.side-navbar-wrapper {
  position: sticky;
  top: 0px;
  background: @firstBackground;
  height: 100vh;
  padding: 24px 0 0 0;
  overflow: auto;
  //修改滚动条下面的宽度
  &::-webkit-scrollbar {
    width: 3px;
  }
  //修改滚动条的下面的样式
  &::-webkit-scrollbar-track {
    background-color: @secondBackground;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }
  //修改滑块样式
  &::-webkit-scrollbar-thumb {
    background-color: @thirdTextColor;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }
  .search-wrapper {
    margin: 0 auto;
    width: 187px;
    height: 32px;
    line-height: 32px;
    @{deep} .ivu-input {
      border:1px solid rgba(213,213,213,1);
      height: 30px;
      line-height: 30px;
    }
    @{deep} .ivu-input::-webkit-input-placeholder {
      font-size: 12px;
      color: @thirdTextColor;
    }
  }
  .menu-null {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
  }
  @{deep} .ivu-menu {
    color: @thirdTextColor;
  }
  .menu-list {
    background: transparent;
    width: 100% !important;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    background: @secondBackground;
    .cat1 {
      .menu-icon {
        font-size: 24px;
      }
      @{deep} .ivu-menu-submenu-title {
        padding: 12px 30px 12px 43px !important;
        line-height: 20px;
      }
      @{deep}>.ivu-menu-submenu-title  {
        background: @firstBackground;
        padding: 14px 30px 14px 20px !important;
      }
      .cat2 {
        .doc3 {
          padding-left: 67px !important;
        }
      }
      .item-doc {
        &:hover {
          background: @activeTextColor;
          color: #fff;
        }
      }
      @{deep} .ivu-menu-item {
        padding: 12px 24px 12px 43px !important;
        line-height: 21px;
      }
      @{deep} .ivu-menu-submenu-title:hover {
        color: @activeTextColor;
      }
      @{deep} .ivu-menu-item-active:not(.ivu-menu-submenu) {
        background: @activeTextColor;
        color: #fff;
      }
    }
    @{deep} .ivu-menu-item-active {
      >.ivu-menu-submenu-title {
        color: @activeTextColor;
      }
    }
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    background: none;
  }
  .ivu-menu-light.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    display: none;
  }
  @{deep} .ivu-menu-vertical {
    .ivu-menu-submenu-title-icon {
      right: 22px !important;
    }
  }
}
</style>