import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  //recover sectors of company seleted
  async getSectorsCompanySelected(context, idCompany) {
    try {
      //add error in store
      store.commit("Loading/stateLoading", true);

      store.commit("Error/resetError");

      //call api and add sector company selected in store
      const sectors = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors/${idCompany}`);
      context.commit("addSectorsCompanySelected", sectors.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //create sectors
  createSectorsCompanySelected: async (context, data) => {
    try {
      //add error in store
      store.commit("Error/resetError");

      //call api for create sector return array sector
      const sectors = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors-create`,
        data,
        headers
      );
      //add sectors company current user if write in argument
      context.commit("addSectorsCompanySelected", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //update sectors of company
  updateSectorsCompanySelected: async (context, data) => {
    try {
      //add error in store
      store.commit("Error/resetError");

      //call api for create sector return array sector
      const sectors = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors-update`,
        data,
        headers
      );
      //add sectors company current user if write in argument
      context.commit("addSectorsCompanySelected", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //delete sectors
  deleteSectorCompanySelected: async (context, data) => {
    try {
      //add error in store
      store.commit("Error/resetError");

      //call api for delete sector
      const sectors = await Vue.axios.delete(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sector/${data._id}`);

      //recover all sector of company and add sectors in store
      context.commit("addSectorsCompanySelected", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //create sectors
  createSectorsCurrentUser: async (context, data) => {
    try {
      //add error in store
      store.commit("Error/resetError");

      //call api for create sector return array sector
      const sectors = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors-create`,
        data,
        headers
      );
      //add sectors company current user if write in argument
      store.commit("CurrentUser/addSectorsCompanyCurrentUser", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //update sectors of company
  updateSectorsCurrentUser: async (context, data) => {
    try {
      //add error in store
      store.commit("Error/resetError");

      //call api for create sector return array sector
      const sectors = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors-update`,
        data,
        headers
      );
      //add sectors company current user if write in argument
      store.commit("CurrentUser/addSectorsCompanyCurrentUser", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },

  //relier sector company selected

  //delete sectors
  deleteSectorCurrentUser: async (context, data) => {
    try {
      //add error in store
      store.commit("Error/resetError");

      //call api for delete sector
      const sectors = await Vue.axios.delete(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sector/${data._id}`);

      //recover all sector of company and add sectors in store
      store.commit("CurrentUser/addSectorsCompanyCurrentUser", sectors.data);
    } catch (error) {
      //add error in store
      store.commit("Error/addError", error);
    }
  },
};
