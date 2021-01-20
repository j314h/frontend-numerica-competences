export default {
  //save companies in store companies that comes from database
  addAllCompanies(state, companies) {
    state.companies = companies;
  },
  //save user referent of companies
  addAllReferentOfCompanies(state, referent) {
    state.referentOfCompanies = referent;
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
