import Vue from "vue";
import Vuex from "vuex";
import CurrentUser from "./CurrentUser/CurrentUser"; //info current user connected
import ParamApp from "./ParamApp/ParamApp"; // setting of app
import Sectors from "./Sectors/Sectors"; // info for sector
import Companies from "./Companies/Companies"; // info for companies
import States from "./States/States"; // info for state
import Error from "./Error/Error";
import Files from "./Files/Files";
import Loading from "./Loading/Loading";
import ValidateAccount from "./ValidateAccount/ValidateAccount";
import Employees from "./Employees/Employees";
import Roles from "./Roles/Roles";
import Trades from "./Trades/Trades";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CurrentUser,
    Loading,
    ValidateAccount,
    Files,
    ParamApp,
    Sectors,
    Companies,
    States,
    Error,
    Employees,
    Roles,
    Trades,
  },
});
