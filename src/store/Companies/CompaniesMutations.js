export default {
  //save companies in store companies that comes from database
  addAllCompanies(state, companies) {
    state.companies = companies;
  },
  //add error in tab errors store companies
  addError(state, error) {
    state.errors = [...state.errors, error];
  },
  //reset error in store companies
  resetErrors(state) {
    state.errors = [];
  },
};
