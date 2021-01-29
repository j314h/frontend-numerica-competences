import Vue from "vue";
import store from "../index";

export default {
  //get trades of company selected
  async getTradesOfCompany(context, idCompany) {
    try {
      const trades = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}trades/${idCompany}`);
      context.commit("addTradesOfCompanySelected", trades.data);
    } catch (error) {
      //add error
      store.commit("Error/addError", error);
    }
  },
};
