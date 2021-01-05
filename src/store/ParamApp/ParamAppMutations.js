export default {
  changeTitleHeadBand(state, text) {
    state.titleHeadBand = text;
  },
  //recover files in store
  getImgsFiles(state, files) {
    state.imgs = files;
  },
  //add error in store ParamApp
  addErrors(state, error) {
    state.errors = [...state.errors, error];
  },
  //reset tab error in store
  resetErrors(state, data) {
    state.errors = [];
  },
};
