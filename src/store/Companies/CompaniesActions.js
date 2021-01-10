import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  //recover all companies in database
  getAllCompanies(context) {},

  //create company
  async createCompany(context, data) {
    try {
      store.commit("UserConnect/isloading");
      //send data in api and recover all companies
      await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}create-company`,
        data,
        headers.headers
      );
      context.commit("resetErrors");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addError", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },
};
