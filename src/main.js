import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont
import './assets/iconfont.css'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
