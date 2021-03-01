import store from "../index";
import Vue from "vue";
import { headersData } from "../../lib/axios.config";

export default {
  //get imgs of app
  async getFiles(context) {
    try {
      //active loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for recover files
      const files = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}files-i`);

      //add files in store and disabled loading
      context.commit("addImgs", files.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //update log, set options.targetUrl for target api url
  async updateImg(context, { data, targetUrl }) {
    try {
      //active loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for update image logo numerica
      await Vue.axios.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/${targetUrl}`, //
        data,
        headersData
      );

      //reload call api get file for update store and disable loading page
      context.dispatch("getFiles");
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/disabledLoading", false);
    }
  },
};
