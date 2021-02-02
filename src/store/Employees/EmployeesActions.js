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

      //call api for create new employee of company selected
      const employee = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}user-create`,
        data,
        headers
      );

      //add in array new employee and stop page loading
      context.commit("addNewEmployeeInCompanySelected", employee.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //update employe of company selected
  async updateEmployeeCompanySelected(context, userData) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for update employe of company selected
      const employee = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}user-update`,
        userData,
        headers
      );

      //update employe of company selected and disable load page
      context.commit("updateArrayEmployeeInCompanySelected", employee.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },
};
