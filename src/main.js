import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Message, MessageBox } from 'element-ui';
import '../src/assets/less/index.less'
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
