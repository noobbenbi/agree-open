import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ViewUI from 'view-design'
import iviewArea from 'iview-area'
import i18n from './language'
import VueClipboard from 'vue-clipboard2'
import Echarts from 'echarts'

Vue.use(VueClipboard);
Vue.use(Echarts);
Vue.use(iviewArea);
Vue.prototype.$echarts = Echarts;
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
