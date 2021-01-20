import mutations from "./CurrentCompanyMutations";
// import actions from "./CompaniesActions";
import getters from "./CurrentCompanyGetters";

export default {
  namespaced: true,
  state: {
    idCompaniesSelected: localStorage.getItem("currentCompany") ? localStorage.getItem("currentCompany") : "",
    userInCompany: [],
    errors: [],
  },
  mutations,
  //   actions,
  getters,
};
