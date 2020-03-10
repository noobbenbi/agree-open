<template>
  <div>
    <Header></Header>
    <div class="doc-center-wrapper">
      <MyDocSideNavBar
        class="side-navbar"
        :menuList="menuList"
        :activeAnchor="activeAnchor"
        @getDocId="getDocId"
        @getBreadCrumb="getBreadCrumb"
        @getHash2="getHash2"
      ></MyDocSideNavBar>
      <div class="doc-center">
        <MyBreadcrumb :breadCrumbList="breadCrumbList"></MyBreadcrumb>
        <MyContent class="doc-content" :docContent="docContent" @getAnchorList="getAnchorList"></MyContent>
      </div>
      <MyCatNavBar
        class="cat-navbar-wrapper"
        :anchorList="anchorList"
        :activeAnchor="activeAnchor"
        @getHash="getHash"
      ></MyCatNavBar>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MyDocSideNavBar from '../components/DocumentCenter/MYDocSideNavBar'
import MyBreadcrumb from '../components/DocumentCenter/MyBreadcrumb'
import MyContent from '../components/DocumentCenter/MyContent'
import MyCatNavBar from '../components/DocumentCenter/MyCatNavBar'
import Footer from '@/components/Footer'
import { GetDocList, GetDocDetail } from '@/request/api.js'
export default {
  data() {
    return {
      breadCrumbList: [], //  面包屑导航栏数据
      menuList: [], //  左侧菜单栏数据
      docContent: '', //  文章内容
      anchorList: [], //  右侧目录导航数据
      activeAnchor: 'anchor0' //  当前活跃路由hash，即跳转到的元素id
    }
  },
  components: {
    Header,
    MyDocSideNavBar,
    MyBreadcrumb,
    MyContent,
    MyCatNavBar,
    Footer
  },
  methods: {
    //  获取文档列表
    getDocList() {
      GetDocList().then(res => {
        if (res.code === 200) {
          this.menuList = res.data
        } else {
          this.$Message.error(res.message)
        }
      })
    },
    //  获取文档详情
    GetDocDetail(docId) {
      GetDocDetail({}, docId).then(res => {
        if (res.code === 200) {
          this.docContent = res.data.docContent
        } else {
          this.$Message.error(res.message)
        }
      })
    },
    //  获取文档id
    getDocId(docId) {
      this.GetDocDetail(docId)
    },
    //  获取文档父目录，设置面包屑导航栏
    getBreadCrumb(catList) {
      this.breadCrumbList = catList
    },
    //  获取文档目录列表，设置导航
    getAnchorList(anchorList) {
      this.anchorList = anchorList
    },
    //  获取当前路由hash
    getHash(activeAnchor) {
      this.activeAnchor = activeAnchor
    },
    //  获取当前路由hash
    getHash2(activeAnchor) {
      this.activeAnchor = activeAnchor
    }
  },
  mounted() {
    if (this.$route.hash) {
      this.activeAnchor = this.$route.hash.split('#')[1]
    }
    this.getDocList()
  }
}
</script>
<style lang="less" scoped>
// .header {
//   position: sticky;
//   top: 0;
//   z-index: 2;
// }
.doc-center-wrapper {
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  * {
    box-sizing: border-box;
  }
  .side-navbar {
    width: 240px;
  }
  .doc-center {
    width: calc(100% - 430px);
    padding: 0 0 67px 67px;
  }
}
</style>