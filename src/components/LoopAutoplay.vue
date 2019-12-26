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
  height: 541px;
  /* padding-bottom: 40%; */
  position: relative;
}
.demo-carousel img {
  width: 100%;
  height: 540px;
}
</style>