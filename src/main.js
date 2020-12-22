import Vue from "vue";
import VueCookies from "vue-cookies";
import axios from "axios";
import "./lib/axios.config"; // axios config
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.prototype.$http = axios;
Vue.use(VueCookies);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
