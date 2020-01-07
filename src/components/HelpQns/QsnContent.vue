<template>
  <!-- 消息中心 -->
  <div class="news">
    <h1>{{msgcontent.QsnName}}</h1>
    <h2>{{msgcontent.QsnContent}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    qsncontent: {
      type: Object
    },
  },
  name: "QsnContent",
  data() {
    return {
      msgcontent:{}
    };
  },
  mounted() {
    this.msgcontent = this.qsncontent;
  },
  watch:{
    qsncontent(curVal,oldVal){
      if(curVal){
        this.msgcontent=curVal;
      }
    },
  },
  methods: {

  },
  components: {}
};
</script>
<style lang="less"  scoped>

</style>
