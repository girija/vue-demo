import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAxios, axios)
const router = new VueRouter({routes});
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
