import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  //recover sectors of company seleted
  async getSectorsCompanySelected(context, idCompany) {
    try {
      //call api and add sector company selected in store
      const sectors = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors/${idCompany}`);
      context.commit("addSectorsCompanySelected", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //create sectors
  createSectors: async (context, data, string) => {
    try {
      //call api for create sector return array sector
      const sectors = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors-create`,
        data,
        headers
      );
      //add sectors company current user if write in argument
      if (string === "currentUser") store.commit("CurrentUser/addSectorsCompanyCurrentUser", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //update sectors of company
  updateSectors: async (context, data, string) => {
    try {
      //call api for create sector return array sector
      const sectors = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors-update`,
        data,
        headers
      );
      //add sectors company current user if write in argument
      if (string === "currentUser") store.commit("CurrentUser/addSectorsCompanyCurrentUser", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },
};
