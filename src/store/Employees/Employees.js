import actions from "./EmployeesActions";
import mutations from "./EmployeesMutations";
import getters from "./EmployeesGetters";

export default {
  namespaced: true,
  state: {
    employeesReferentOfCompaniesAdmin: [],
    employeesCompanySelected: [],
  },
  actions,
  mutations,
  getters,
};
