import actions from "./CurrentUserActions";
import mutations from "./CurrentUserMutations";
import getters from "./CurrentUserGetters";

export default {
  namespaced: true,
  state: {
    //info for current user
    currentUser: null,
    //info for company of current user
    currentUserCompany: null,
    //for sectors of company current user
    sectorsCompanyCurrentUser: null,
    // connected
    isSignIn: false,
  },
  actions,
  mutations,
  getters,
};
