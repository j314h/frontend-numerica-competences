import Vue from "vue";
import store from "../index";

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
};
