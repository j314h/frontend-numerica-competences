import mutations from "./CompaniesMutations";
import actions from "./CompaniesActions";
import getters from "./CompaniesGetters";

export default {
  namespaced: true,
  state: {
    companies: null,
    referentOfCompanies: null,
    errors: [],
  },
  mutations,
  actions,
  getters,
};
