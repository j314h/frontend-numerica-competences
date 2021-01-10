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
    state.currentUser = {};
    localStorage.setItem("currentUser", JSON.stringify(data));
    state.currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    localStorage.removeItem("imgs");
    localStorage.removeItem("currentUser");
  },
  //update user current in front
  updateUserCurrent(state, user) {
    state.currentUser = {};
    localStorage.setItem("currentUser", JSON.stringify(user));
    state.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  },
  //add error
  addError(state, error) {
    state.errors = [...state.errors, error];
  },
  //reset errors of UserConnect store
  resetErrors(state) {
    state.errors = [];
  },
};
