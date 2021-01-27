export default {
  //save companies in store companies that comes from database
  addAllCompaniesUserConnected(state, companies) {
    state.companiesAdmin = companies;
  },

  //add id company selected
  addIdCompanySelected(state, idCompany) {
    state.idCompaniesSelected = idCompany;
    localStorage.setItem("idCompanySelected", JSON.stringify(idCompany));
  },

  //add info of company selected
  addCompanySelected(state, company) {
    state.companySelected = company;
  },

  //delete company selected for user
  deleteCompaniesSelected(state) {
    state.companySelected = {};
    state.idCompaniesSelected = "";
    localStorage.removeItem("idCompanySelected");
  },
};
