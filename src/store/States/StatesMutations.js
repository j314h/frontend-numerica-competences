export default {
  //get states of database and save in store states
  allState(state, data) {
    state.states = data;
  },
  //add new error in errors in store
  addError(state, data) {
    state.errors = [...state.errors, data];
  },
  //reset error in errors in store
  resetErrors(state) {
    state.errors = [];
  },
};
