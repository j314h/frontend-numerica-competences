export default {
  //add new error
  addError(state, error) {
    error.response
      ? (state.errors = [...state.errors, error.response.data.message])
      : (state.errors = [...state.errors, error]);
  },

  //reset tab error
  resetError(state) {
    state.errors = [];
  },
};
