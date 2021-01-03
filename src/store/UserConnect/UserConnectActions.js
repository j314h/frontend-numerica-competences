import Vue from "vue";
import VueCookies from "vue-cookies";
import router from "../../router";

export default {
  //connect user with back end
  async signIn(context, options) {
    try {
      //see page loading
      context.commit("isloading");
      const user = await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sign-in`,
        options.data,
        options.headers
      );
      //if success request execute mutation
      context.commit("signInSuccess", user.data);
      //check cookies jwt exist
      context.commit("checkedJwt", VueCookies.isKey("jwt"));
      //go roads
      router.push({ name: "HomeDashbord" });
      //disable page loading
      context.commit("disableLoading");
    } catch (error) {
      //add error in data
      context.commit("signInError", error.response.data.message);
      //disable page loading
      context.commit("disableLoading");
    }
  },

  //verification user connected, verification in back end
  async userConnectVerification(context, data) {
    try {
      //see page loading
      context.commit("isloading");
      const user = await Vue.prototype.$http.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}auth/verification`);
      //if success request execute mutation
      context.commit("signInSuccess", user.data);
      //check cookies jwt exist
      context.commit("checkedJwt", VueCookies.isKey("jwt"));
      //disable page loading
      context.commit("disableLoading");
    } catch (error) {
      //add error in data
      context.commit("signInError", error.response.data.message);
      //disable page loading
      context.commit("disableLoading");
    }
  },

  //disconnect user
  async logOut(context, data) {
    try {
      //see page loading
      context.commit("isloading");
      //request api
      await Vue.prototype.$http.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}sign-out`);
      //delete data user connected
      context.commit("logOutUser");
      router.push({ name: "HomeView" });
      //disable page loading
      context.commit("disableLoading");
    } catch (error) {
      //add error in data
      context.commit("signInError", error.response.data.message);
      //disable page loading
      context.commit("disableLoading");
    }
  },

  //change mode dark
  async modeDark(context, data) {
    try {
      //see page loading
      context.commit("isloading");
      //send name of mode for api and recover user with newdata
      const user = await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}cu-theme-color`,
        data,
        data.headers
      );
      //update current user
      context.commit("updateUserCurrent", user.data);
      //disable load page
      context.commit("disableLoading");
    } catch (error) {
      //add error in data
      context.commit("addError", error.response.data.message);
      //disable page loading
      context.commit("disableLoading");
    }
  },

  //update user referent minimum
  async updateUserRefMin(context, data) {
    try {
      //see page loading
      context.commit("isloading");
      //call api for update user, juste user root admin referent
      const user = await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}update-user-root`,
        data,
        data.headers
      );
      //update current user
      context.commit("updateUserCurrent", user.data);
      //disable load page
      context.commit("disableLoading");
    } catch (error) {
      //disable page loading
      context.commit("disableLoading");
      //send error
      throw error;
    }
  },
};
