import mutations from "./CurrentCompanyMutations";
import actions from "./CurrentCompanyActions";
import getters from "./CurrentCompanyGetters";

export default {
  namespaced: true,
  state: {
    idCompaniesSelected: localStorage.getItem("currentCompany") ? localStorage.getItem("currentCompany") : "",
    currentCompany: {},
    userInCompany: [],
    errors: [],
  },
  mutations,
  actions,
  getters,
};
