import Vue from "vue";
import store from "../index";
//import router from "../../router";

export default {
  //change logo accueil numerica
  async changeLogoNumerica(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/logo-numerica`, options, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      context.commit("resetErrors");
      context.dispatch("getFilesImg");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },

  //change logo personne ou identifiant
  async changeLogoIdentifiant(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/logo-identifiant`,
        options,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      context.commit("resetErrors");
      context.dispatch("getFilesImg");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },

  //change logo menu principal
  async changeLogoMenu(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/logo-menu`, options, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      context.commit("resetErrors");
      context.dispatch("getFilesImg");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },

  //change logo menu principal
  async changeLogoFooterNumerica(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/logo-numerica-footer`,
        options,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      context.commit("resetErrors");
      context.dispatch("getFilesImg");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },

  //change logo update element
  async changeLogoUpdateElement(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/logo-update-element`,
        options,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      context.commit("resetErrors");
      context.dispatch("getFilesImg");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },

  //change logo close update element
  async changelogoCloseUpdateElement(context, options) {
    try {
      store.commit("UserConnect/isloading");
      await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}file/logo-close-update-element`,
        options,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      context.commit("resetErrors");
      context.dispatch("getFilesImg");
      store.commit("UserConnect/disableLoading");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
      store.commit("UserConnect/disableLoading");
    }
  },

  //get all file of database
  async getFilesImg(context, options) {
    try {
      const files = await Vue.prototype.$http.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}files-i`);
      context.commit("getImgsFiles", files.data);
      context.commit("resetErrors");
    } catch (e) {
      context.commit("addErrors", e.response.data.message);
    }
  },
};
