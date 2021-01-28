import Vue from "vue";
import VueCookies from "vue-cookies";
import router from "../../router";
import store from "../index";
import { headers } from "../../lib/axios.config";

export default {
  //connect user with back end
  async signIn(context, data) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for recover current user and recover company of current user
      //call api for verification and call api for company of current user
      //call api and add sector company selected in store
      const user = await Vue.axios.post(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sign-in`, data, headers);
      const company = await Vue.axios.get(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company/${user.data.company}`
      );
      const sectors = await Vue.axios.get(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors/${company.data._id}`
      );

      //add user in store and add company and check cookies jwt exist and update isSignIn
      context.commit("signInSuccess", user.data);
      context.commit("addCompanyOfCurrentUser", company.data);
      context.commit("addSectorsCompanyCurrentUser", sectors.data);
      context.commit("checkedJwt", VueCookies.isKey("jwt"));

      //go roads and disable page loading
      router.push({ name: "HomeDashbord" });
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //verification user connected, verification in back end
  async verificationUserConnect(context) {
    try {
      //see page loading and reset error
      //store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for verification and call api for company of current user
      //call api and add sector company selected in store
      const user = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}verification-connect`);
      const company = await Vue.axios.get(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company/${user.data.company}`
      );
      const sectors = await Vue.axios.get(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sectors/${company.data._id}`
      );

      //update user in store and update currentCompany of currentUser disabled loading page
      context.commit("signInSuccess", user.data);
      context.commit("addCompanyOfCurrentUser", company.data);
      context.commit("addSectorsCompanyCurrentUser", sectors.data);
      //store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      //store.commit("Loading/stateLoading", false);
    }
  },

  //disconnect user
  async logOut(context) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for disconnect
      await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sign-out`);

      //delete data user connected and return in page home connect and disable loading
      context.commit("logOutUser");
      router.push({ name: "HomeView" });
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //change mode dark
  async modeDark(context, nameMode) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //send name of mode for api and recover user with newdata
      const user = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}cu-theme-color`,
        nameMode,
        headers
      );

      //update current user and disable load page
      context.commit("signInSuccess", user.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //update user referent minimum
  async updateCurrentUser(context, userData) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for update current user
      const user = await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}user-update`,
        userData,
        headers
      );
      const company = await Vue.axios.get(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company/${user.data.company}`
      );

      //update current user and recover company and disable load page
      context.commit("signInSuccess", user.data);
      context.commit("addCompanyOfCurrentUser", company.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //update company's user referent minimum
  async updateCurrentUserCompany(context, companyData) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for update user, juste user root admin referent
      const company = await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company-update`,
        companyData,
        headers
      );

      //add update company in store and disable page loading
      context.commit("addCompanyOfCurrentUser", company.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },
};
