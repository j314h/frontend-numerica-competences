export default {
  addErrors(state, error) {
    state.errors = [...state.errors, error];
  },
  getImgsFiles(state, files) {
    state.imgs = files;
  },
  resetErrors(state, data) {
    state.errors = [];
  },
};
