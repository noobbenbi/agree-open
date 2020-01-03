<template>
  <div class="page">
    <Header></Header>
    <div class="banner"></div>
    <div class="devAccess">
     <tecSupport></tecSupport>
      <noobStart></noobStart>
    <serviceSecure></serviceSecure>
    
    </div>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import noobStart from "@/components/devHelp/noobStart";
import serviceSecure from "@/components/devHelp/serviceSecure";
import tecSupport from "@/components/devHelp/tecSupport";
export default {
  name: "devhelp",
  
  components: {
    Header,
    Footer,
    noobStart,
    tecSupport,
    serviceSecure
  }
};
</script>
<style lang="less" scoped>
.body{
   height: 100%;
  min-height: 100%;

}
.banner{
    //控制子内容宽度
    // width: 48%;
    height: 450px;
    background: url("../assets/images/banner.jpg");
    background-size: cover; 
    }
html,body{
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 1280px;
}
.devAccess {
  .ivu-carousel {
    height: 400px;
  }
}
</style>
