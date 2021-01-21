import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  async getSelectedCompany(context, idCompany) {
    try {
      const company = await Vue.prototype.$http.get(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company/${idCompany}`
      );
      context.commit("resetErrors");
      context.commit("addCurrentCompany", company.data);
    } catch (error) {
      context.commit("addError", e.response.data.message);
    }
  },
};
