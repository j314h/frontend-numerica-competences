import Vue from "vue";
import store from "../index";
import { headers } from "../../lib/axios.config";
import router from "../../router";

export default {
  //last step for create new user
  async verificationCreateNewUser(context, data) {
    try {
      //activate page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api and if account is not validate
      const response = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}confirme-account`,
        data,
        headers
      );
      if (!response.data.activated) throw new Error("Erreur pendant la procédure d'activation");

      //disabled loading and redirect user in page home connect
      store.commit("Loading/stateLoading", false);
      router.push({ name: "DashbordPage" });
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/disabledLoading", false);
    }
  },
};
