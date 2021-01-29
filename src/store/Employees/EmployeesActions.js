import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  //create employee for company selected
  async createEmployeeCompanySelected(context, data) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      const employees = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}user-create`,
        data,
        headers
      );

      //continuer le code ici

      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },
};
