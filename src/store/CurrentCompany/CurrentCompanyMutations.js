export default {
  //add id company
  addCompaniesSelected(state, idCompany) {
    state.idCompaniesSelected = idCompany;
    localStorage.setItem("currentCompany", idCompany);
  },
  deleteCompaniesSelected(state) {
    state.idCompaniesSelected = "";
    localStorage.removeItem("currentCompany");
  },
  addCurrentCompany(state, company) {
    state.currentCompany = company;
  },
  resetErrors(state) {
    state.errors = [];
  },
  addError(state, error) {
    state.errors = [...state.errors, error];
  },
};
