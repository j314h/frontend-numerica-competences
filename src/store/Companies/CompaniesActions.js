import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  //recover all companies in database
  async getAllCompanies(context) {
    try {
      const companies = await Vue.prototype.$http.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}companies`);
      context.commit("resetErrors");
      context.commit("addAllCompanies", companies.data.companies);
      context.commit("addAllReferentOfCompanies", companies.data.tabReferent);
    } catch (e) {
      context.commit("addError", e.response.data.message);
    }
  },

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
