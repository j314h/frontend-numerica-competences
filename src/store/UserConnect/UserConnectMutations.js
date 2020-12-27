export default {
  //loading in progress for connect user
  isloading(state) {
    state.isLoading = true;
  },
  //disable page loading for connect user
  disableLoading(state) {
    state.isLoading = false;
  },
  //request connect user succes
  signInSuccess(state, data) {
    state.currentUser = data;
    state.errors = [];
  },
  //request connect user error
  signInError(state, error) {
    state.currentUser = {};
    state.isSignIn = false;
    state.errors = [...state.errors, error];
  },
  //check exist token
  checkedJwt(state, cookie) {
    state.isSignIn = cookie;
    cookie ? (state.errors = []) : null;
  },
  //delete data user connected for logout
  logOutUser(state) {
    state.currentUser = {};
    state.isSignIn = false;
    state.errors = [];
  },
  //update user current in front
  updateUserCurrent(state, user) {
    state.currentUser = user;
  },
  //reset errors of UserConnect store
  resetErrors(state) {
    state.errors = [];
  },
};
