import Vue from "vue";
import VueCookies from "vue-cookies";
import "./lib/axios.config"; // axios config
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Sweet from "vue-sweetalert2"; // alert custom bibliotheque

//instancie axios in VUE
Vue.use(VueAxios, axios);

Vue.use(VueCookies); // function access cookies in instance vue
Vue.use(Sweet); //sweet alert in instance of vue
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
