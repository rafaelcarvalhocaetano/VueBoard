import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/global.scss';

Vue.config.productionTip = false
Vue.config.devtools = true;

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')