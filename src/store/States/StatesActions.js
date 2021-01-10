import Vue from "vue";
import store from "../index";

export default {
  //call api for recover all state
  async getAllState(context) {
    try {
      //recover all state in database
      const states = await Vue.prototype.$http.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}states`);
      //add all state in store
      context.commit("allState", states.data);
      context.commit("resetErrors");
    } catch (e) {
      //add error
      context.commit("addError", e.response.data.message);
    }
  },
};
