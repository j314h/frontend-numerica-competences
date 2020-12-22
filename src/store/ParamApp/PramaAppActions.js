import Vue from "vue";
import store from "../index";
//import router from "../../router";

export default {
  async changeLogoNumerica(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post("http://localhost:5000/file/logo-numerica", options, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },
};
