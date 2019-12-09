<template>
  <div>
    <div class="home">
    <Header></Header>
    <Loopautoplay></Loopautoplay>
    <BusinessScene class="businessscene-box"></BusinessScene>
    <ProductCapability></ProductCapability>
    <Partner></Partner>
    <SupportingServices></SupportingServices>
    <News></News>
    <Footer class="footer"></Footer>
    </div>
    
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loopautoplay from '../components/LoopAutoplay';
import BusinessScene from '../components/homecomponents/BusinessScene';
import ProductCapability from '../components/homecomponents/ProductCapability';
import Partner from '../components/homecomponents/Partner';
import SupportingServices from '../components/homecomponents/SupportingServices';
import News from '../components/homecomponents/News';
export default {
  name: 'home',
  components: {
    Header,
    Loopautoplay,
    Footer,
    BusinessScene,
    ProductCapability,
    Partner,
    SupportingServices,
    News
  }
}
</script>
<style  scoped>
</style>