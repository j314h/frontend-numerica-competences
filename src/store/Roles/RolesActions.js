import Vue from "vue";
import store from "../index";

export default {
  //recover all role of app for user
  async getRoles(context) {
    try {
      //reset errors and call api for roles and add roles in store
      store.commit("Error/resetError");
      const roles = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}roles`);
      context.commit("addRoles", roles.data);
    } catch (error) {
      store.commit("Error/addError", error);
    }
  },
};
