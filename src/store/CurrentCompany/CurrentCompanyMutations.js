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
};
