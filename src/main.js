import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import axios from "axios"

Vue.prototype.axios = axios

import './common/stylus/index.styl'
//import Router from "vue-router/types/index";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
