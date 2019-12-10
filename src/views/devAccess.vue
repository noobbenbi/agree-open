<template>
<div>
    <Header></Header>
    <LoopAutoplay></LoopAutoplay>
    <div class="devaccess">
        <CapabilityIntro></CapabilityIntro>
        <AccessGuide></AccessGuide>
        <VideoTutorial></VideoTutorial>
        <QuickAccess></QuickAccess>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import LoopAutoplay from '../components/LoopAutoplay';
import Footer from '../components/Footer';
import CapabilityIntro from '../components/devaccess/CapabilityIntro';
import AccessGuide from '../components/devaccess/AccessGuide';
import VideoTutorial from '../components/devaccess/VideoTutorial';
import QuickAccess from '../components/devaccess/QuickAccess';
export default {
    name:'devAccess',
    components:{
        Header,
        LoopAutoplay,
        Footer,
        CapabilityIntro,
        AccessGuide,
        VideoTutorial,
        QuickAccess
    }
}
</script>

<style  scoped>
</style>