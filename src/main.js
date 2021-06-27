import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js' 

Vue.use(router);
Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  VueMeta,
  render: h => h(App),
}).$mount('#app')