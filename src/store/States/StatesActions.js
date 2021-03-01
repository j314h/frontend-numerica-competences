import Vue from "vue";
import store from "../index";

export default {
  //call api for recover all state
  async getAllState(context) {
    try {
      //reset error and call api for recover all state
      store.commit("Loading/stateLoading", true);

      store.commit("Error/resetError");
      const states = await Vue.prototype.$http.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}states`);

      //add all state in store
      context.commit("addAllState", states.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },
};
