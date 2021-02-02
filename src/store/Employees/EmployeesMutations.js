export default {
  //add employee referent of companies of admin
  addEmployeesReferentCompaniesAdmin(state, referents) {
    state.employeesReferentOfCompaniesAdmin = referents;
  },

  //add employee of company selected
  addEmployeeCompanySelected(state, employees) {
    state.employeesCompanySelected = employees;
  },

  //add new employee in company selected
  addNewEmployeeInCompanySelected(state, employee) {
    state.employeesCompanySelected = [...state.employeesCompanySelected, employee];
  },

  //replace employee with employee updated
  updateArrayEmployeeInCompanySelected(state, employee) {
    const index = state.employeesCompanySelected.findIndex((el) => el._id === employee._id);
    state.employeesCompanySelected.splice(index, 1, employee);
  },
};
