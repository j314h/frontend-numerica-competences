import mutations from "./CompaniesMutations";
import actions from "./CompaniesActions";
import getters from "./CompaniesGetters";

export default {
  namespaced: true,
  state: {
    //all companies
    companiesAdmin: [],
    //id of company selected and save in localstorage to persist data in case of recharging
    idCompaniesSelected: localStorage.getItem("idCompanySelected")
      ? JSON.parse(localStorage.getItem("idCompanySelected"))
      : "",
    //company selected by current user
    companySelected: {},
  },
  mutations,
  actions,
  getters,
};
