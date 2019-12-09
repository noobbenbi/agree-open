<template>
<!-- 轮播图组件 -->
<div class="autoplayimg">
    <Carousel loop autoplay :autoplay-speed="autoplaySpeed" class="loop-autoplay" height="auto">
    <Carousel-item>
      <div class="demo-carousel">
        <img src="@/assets/images/banner.jpg" alt />
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="@/assets/images/banner.png" alt />
      </div>
    </Carousel-item>
  </Carousel>
</div>
</template>
<script>
export default {
    name:'Loopautoplay',
    data() {
        return {
            autoplaySpeed:5000
        }
    }
}
</script>
<style scoped>
.loop-autoplay {
  width:100%;
  min-width: 1200px;
  /* padding-bottom: 39%; */
  /* height:0; */
  background:linear-gradient(180deg,rgba(255,218,0,0) 0%,rgba(255,179,0,1) 100%);
  /* opacity:0.1; */
  position: relative;
}
.loop-autoplay img {
  width:100%;
  height:100%;
}
</style>