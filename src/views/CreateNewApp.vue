<template>
    <div>
        <Header></Header>
        <div class="createnewapp">
        <div class="bread">
            <Breadcrumb>
                <BreadcrumbItem to="/applicationlist" class="breadcrumbitem">应用中心</BreadcrumbItem>
                <BreadcrumbItem class="breadcrumbitem">创建应用</BreadcrumbItem>
            </Breadcrumb>
            <span class="bread-title">创建应用</span>
        </div>
        <div class="create-step">
            <div class="application">
                <div class="section">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :hide-required-mark="isHide" :label-width="240">
                        <FormItem label="应用平台:" prop="appType">
                            <Select v-model="formValidate.appType" placeholder="请选择应用平台">
                                <Option value="0">不限</Option>
                                <Option value="1">Web</Option>
                                <Option value="2">IOS</Option>
                                <Option value="3">Android</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="应用名称:" prop="appName">
                            <Input v-model="formValidate.appName" placeholder="不超过20个字"></Input>
                        </FormItem>
                        <FormItem label="应用标签:" prop="appTag">
                            <Input v-model="formValidate.appTag" placeholder="不超过30个字,例如:生活"></Input>
                        </FormItem>
                        <FormItem label="应用简介:" prop="appDesc">
                            <Input
                                v-model="formValidate.appDesc"
                                type="textarea"
                                :rows="4"
                                placeholder="不超过120个字"
                            ></Input>
                        </FormItem>
                        <FormItem>
                        <Button
                            type="primary"
                            @click="handleSubmit('formValidate')"
                            class="bcs-btn-large bcs-btn-red"
                        >创建</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name:'CreateNewApp',
    data() {
    var validateAppName = function(rule, value, callback) {
      var pattern = /^[\u4e00-\u9fa5]{2,15}$/;
      if (!value) {
        return callback(new Error("应用名称不能为空"));
      }else if (pattern.test(value)) {
        return callback(new Error("请输入正确的应用名称"));
      } else {
        callback();
      }
    };
    return {
      formValidate: {
        appType: "",
        appName: "",
        appTag: "",
        appDesc: "",
      },
      isHide:true,
      ruleValidate: {
        appType: [
          {
            required: true,
            message: "请选择应用平台",
            trigger: "change"
          }
        ],
        appName: [
          {
            required: true,
            validator: validateAppName,
            trigger: "blur"
          },
          {
            type: "string",
            max: 20,
            message: "应用名称不超过20个字",
            trigger: "blur"
          }
        ],
        appTag: [
          {
            required: true,
            message: "应用标签不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            max: 30,
            message: "应用标签不超过30个字",
            trigger: "blur"
          }
        ],
        appDesc: [
          {
            required: true,
            message: "应用简介不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            max: 120,
            message: "应用简介应不超过120个字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods:{
      handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  components:{
      Header,
      Footer
  }
}
</script>

<style  scoped>
.createnewapp {
    width: 100%;
    position: relative;
    top: 30px;
}
.bread {
    width: 80%;
    height: 200px;
    position: relative;
    left: 150px;
}
.breadcrumbitem {
    font-size: 1.15em;
    font-family:PingFangSC-Regular,PingFang SC;
}
.bread-title {
    position: relative;
    top: 20px;
    font-size: 1.75em;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
}
.create-step {
    width: 40%;
    font-family:PingFangSC-Regular,PingFang SC;
    display: table;
    margin: 0 40% 200px 20%;
}
.section /deep/ .ivu-form-item-label {
    font-size: 1.25em;
}
.section /deep/ .ivu-form-item-content {
    position: relative;
    left: 50px;
}
</style>