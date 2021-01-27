export default {
  //add employee referent of companies of admin
  addEmployeesReferentCompaniesAdmin(state, referents) {
    state.employeesReferentOfCompaniesAdmin = referents;
  },

  //add employee of company selected
  addEmployeeCompanySelected(state, users) {
    state.employeesCompanySelected = users;
  },
};
