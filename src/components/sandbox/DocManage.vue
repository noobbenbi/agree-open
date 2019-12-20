<template>
    <div class="docmanage" v-if="visiable&&faId == '1'">
        <ParameterSet v-if="1==value&&faId == '1'"></ParameterSet>
        <OfflineDoc v-if="2==value&&faId == '1'"></OfflineDoc>
        <IndiviSetting v-if="3==value&&faId == '1'"></IndiviSetting>
    </div>
</template>

<script>
import ParameterSet from './docmanage/ParameterSet';
import OfflineDoc from './docmanage/OfflineDoc';
import IndiviSetting from './docmanage/IndiviSetting';
export default {
    name:'DocManage',
    props:{
        visiable:Boolean,
        value:String,
        faId:String
    },
    data(){
        return {
            // visiable:true
        }
    },
    components:{
        ParameterSet,
        OfflineDoc,
        IndiviSetting
    }
}
</script>

<style  scoped>
.docmanage{
    position: relative;
    left: 100px;
    width: 100%;
    margin-top: 40px;
    /* top: 40px; */
}
</style>