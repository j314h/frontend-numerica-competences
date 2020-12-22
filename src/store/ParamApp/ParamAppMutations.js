export default {
  addErrors(state, error) {
    state.errors = [...state.errors, error];
  },
};
