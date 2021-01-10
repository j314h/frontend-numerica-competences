import Vue from "vue";
import Vuex from "vuex";
import UserConnect from "./UserConnect/UserConnect"; //info current user connected
import ParamApp from "./ParamApp/ParamApp"; // setting of app
import Sectors from "./Sectors/Sectors"; // info for sector
import Companies from "./Companies/Companies"; // info for companies
import States from "./States/States"; // info for state

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserConnect,
    ParamApp,
    Sectors,
    Companies,
    States,
  },
});
