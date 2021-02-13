import Vue from "vue";
import store from "../index";

export default {
  //get trades of company selected
  async getTradesOfCompanySelected(context, idCompany) {
    try {
      store.commit("Error/resetError");
      const trades = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}trades/${idCompany}`);
      context.commit("addTradesOfCompanySelected", trades.data);
    } catch (error) {
      //add error
      store.commit("Error/addError", error);
    }
  },

  //get acces api ROM recover token and get all appellation
  async getAccesApiRom(context) {
    try {
      //loading + reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for recover token api rom and save in store token
      const tokenApi = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}access-token-api-rome`);
      context.commit("addTokenApiRom", tokenApi.data.tokenApiRome);

      //call api for recover appellation of trades in api rom and stop loading
      await store.dispatch("ApiRom/getAppelationsOfTrade", tokenApi.data.tokenApiRome);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },
};
