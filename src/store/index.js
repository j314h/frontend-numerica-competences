import Vue from "vue";
import Vuex from "vuex";
import UserConnect from "./UserConnect/UserConnect"; //info current user connected
import ParamApp from "./ParamApp/ParamApp"; // setting of app

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserConnect,
    ParamApp,
  },
});
