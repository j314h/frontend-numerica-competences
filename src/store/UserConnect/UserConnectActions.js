import Vue from "vue";
import VueCookies from "vue-cookies";
import router from "../../router";

export default {
  //connect user with back end
  async signIn(context, options) {
    try {
      //see page loading
      context.commit("isloading");
      const user = await Vue.prototype.$http.post("http://localhost:5000/sign-in", options.data, options.headers);
      //if success request execute mutation
      context.commit("signInSuccess", user.data);
      //check cookies jwt exist
      context.commit("checkedJwt", VueCookies.isKey("jwt"));
      //go roads
      router.push({ name: "DashbordPage" });
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
      const user = await Vue.prototype.$http.get("http://localhost:5000/auth/verification");
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
      await Vue.prototype.$http.get("http://localhost:5000/sign-out");
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
};
