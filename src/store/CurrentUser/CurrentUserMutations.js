export default {
  //request connect user succes
  signInSuccess(state, data) {
    state.currentUser = data;
  },

  //check exist token
  checkedJwt(state, cookie) {
    state.isSignIn = cookie;
  },

  //add company of current user
  addCompanyOfCurrentUser(state, company) {
    state.currentUserCompany = company;
  },

  //delete data user connected for logout
  logOutUser(state) {
    state.currentUser = {};
    state.isSignIn = false;
  },
};
