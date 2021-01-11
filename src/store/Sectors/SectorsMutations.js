export default {
  //save sector in store sector that comes from database
  addAllSectors(state, sectors) {
    state.sectors = sectors;
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
