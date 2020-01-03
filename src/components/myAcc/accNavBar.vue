<template>
  <div class="accNavBar">
    <div class="headbox">
        <img src="@/assets/images/UserAvatar.png" alt="">
        <h3 class="username">用户名</h3>
        <div class="linebox"><div class="lineboxstyle"></div></div> 
        <i-button type="primary" class="ac-box-button">创建应用</i-button>
      </div>
    
    <Menu 
      class="menu1" 
      theme="light"
      :active-name="this.activeTitle"  
      @on-select="changeRoute"
      style="width:340px"
    > 
      
      <div class="menulist" >
          <MenuItem class="menuitem" v-for="a in title" :key="a.titleID" :name="a.titleName"> 
              {{a.titleName}}
          </MenuItem>
      </div>
    </Menu>
  </div>
</template>
<script>
export default {
    name:'myData',
    data(){
      return {
        title:[
          {
            titleID:'1',
            titleName:'我的资料'
          },
          {
            titleID:'2',
            titleName:'我的应用'
          },
          {
            titleID:'3',
            titleName:'我的协议'
          }
        ],
        activeTitle:"我的资料",
        asq:[
          {
            titleID:'1',
            titleName:'我的资料'
          }
        ]
      }
    },
    
    methods:{
      as(){
        console.log(this.asq[0].titleID);
      },
      changeRoute(name) {
        // 获取当前选中文档的名称，改变路由
       this.activeTitle = name;
        this.$router.push({
          query: { titleName: this.activeTitle },
          hash: "anchor0"
        });
      },
      selectedInfo() {
        // 调用父组件的方法传值
        this.$emit("selectedTitleName",this.activeTitle);
        var a=this.title;
        var b=this.activeTitle;
        var activeTitleID=a.filter(function(item){
          return item.titleName==b;
        })
        // console.log(activeTitleID[0].titleID);
        this.$emit("selectedTitleID",activeTitleID[0].titleID);
      },
    },
    watch:{
      //监听路由，路由改变时，调用方法
      activeTitle(){
        this.selectedInfo();
      }
    },

}
</script>
<style lang="less"  scoped>
.accNavBar{
  .headbox{
    background:rgba(2,164,175,0.04);
    font-size:20px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(29,31,49,1);
    padding: 40px 0;
    .ac-box-button.ivu-btn.ivu-btn-primary{
      //按钮样式
      width:140px;
      height:48px;
      background:rgba(2,164,175,1);
      border-radius:2px;
      font-size:20px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
    }
    img{
      width: auto;
      height: 120px;
    }
    .username{
      margin: 10px 10px;
    }
    .linebox{
      height: 2px;
      margin: 20px 0;
      display: flex;
      justify-content: center;
      .lineboxstyle{
        width:44px;
        height:2px;
        background:rgba(2,164,175,1);
      }
    }
  }
  .menu1{
    .menulist{
      .menuitem{
        //iview导航栏单个按钮内部样式
        font-size: 26px;
        height: 90px;
        line-height: 64px;
      }
    }
  }


  .ivu-menu-light{
  //整体导航栏背景色
  background:rgba(2,164,175,0.04);
  }
      
  /* 文档中心和问题中心左侧导航栏样式覆盖 */
  .ivu-menu-light.ivu-menu-vertical>.ivu-menu-submenu.ivu-menu-item-active.ivu-menu-opened.ivu-menu-child-item-active>.ivu-menu-submenu-title {
      color: #02A4AF;
  }
  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
      color: #02A4AF;
     
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
  
}

</style>







