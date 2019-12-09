<template>
<div class="body">
    <Header></Header>
    <LoopAutoplay></LoopAutoplay>
    <div class="devaccess">
        <CapabilityIntro></CapabilityIntro>
        <AccessGuide></AccessGuide>
        <VideoTutorial></VideoTutorial>
        <QuickAccess></QuickAccess>
    </div>
<Footer class="footer" ></Footer>
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
.devaccess {
    width:1920px;
    height:3610px;
    background:rgba(255,255,255,1);
    position: absolute;
    top: 870px;
}
.footer {
    position: absolute;
    top: 4480px;
}
</style>