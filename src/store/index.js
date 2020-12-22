import Vue from "vue";
import Vuex from "vuex";
import UserConnect from "./UserConnect/UserConnect";
import ParamApp from "./ParamApp/ParamApp";

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
