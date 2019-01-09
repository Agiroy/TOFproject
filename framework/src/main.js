// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import oBserver from "./../observer";
Vue.prototype.Observer = oBserver;
import "./common/css/reset.css";
import "./common/css/iconfont/iconfont.css";
import "./common/css/iconfontMes/iconfont.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./common/js/flexble";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
