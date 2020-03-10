<template>
  <div class="cat-navbar">
    <h2 class="title">本文目录</h2>
    <ul class="anchor-list">
      <li
        class="anchor-item"
        v-for="(item,index) in catNavbarList"
        :key="index"
        :class="item.class + ' ' + item.isActive"
        :title="item.text"
        @click="scrollAnchor(item.id,index)"
      >{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyCatNavBar',
  props: {
    anchorList: { type: Array },
    activeAnchor: { type: String }
  },
  data() {
    return {
      beforeActiveCat: 0 // 保存前一个active的目录索引，从0开始
    }
  },
  computed: {
    catNavbarList() {
      let res = this.anchorList
      res.forEach(element => {
        if (element.id === this.activeAnchor) {
          this.$set(element, 'isActive', 'active')
          if (element.id === 'anchor0') {
            document
              .querySelector('.header')
              .scrollIntoView({ behavior: 'smooth' }) //回到顶部
          } else {
            document
              .getElementById(this.activeAnchor)
              .scrollIntoView({ behavior: 'smooth' })
          }
        } else {
          this.$set(element, 'isActive', 'normal')
        }
      })
      return res
    }
  },
  watch: {
    anchorList() {
      this.beforeActiveCat = 0
    }
  },
  methods: {
    //  滚动到指定位置,动态修改路由hash
    scrollAnchor(id, index) {
      this.catNavbarList[index].isActive = 'active'
      this.catNavbarList[this.beforeActiveCat].isActive = 'normal'
      this.$router.push({
        query: { docName: this.$route.query.docName },
        hash: id
      })
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
      this.beforeActiveCat = index
      this.$emit('getHash', id)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/variables.less';
@deep: ~'>>>';
.cat-navbar {
  position: sticky;
  top: 0px;
  background: @themeColorOpacity;
  width: 190px;
  min-height: 200px;
  max-height: 100vh;
  height: calc(100% - 180px);
  padding: 20px 14px;
  overflow: auto;
  color: @secondTextColor;
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
  .title {
    margin-bottom: 10px;
    font-size: 20px;
    color: @firstTextColor;
  }
  .anchor-list {
    list-style: none;
    .anchor-item {
      cursor: pointer;
      line-height: 28px;
      /*完成字符串太长省略显示为...的功能*/
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover {
        color: @themeColor;
      }
    }
    .active {
      color: @themeColor;
    }
    .H1 {
      font-weight: 600;
    }
    .H3 {
      padding-left: 14px;
    }
  }
}
</style>