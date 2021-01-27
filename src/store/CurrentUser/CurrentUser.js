import actions from "./CurrentUserActions";
import mutations from "./CurrentUserMutations";
import getters from "./CurrentUserGetters";

export default {
  namespaced: true,
  state: {
    //info for current user
    currentUser: {},
    //info for company of current user
    currentUserCompany: {},
    // connected
    isSignIn: false,
  },
  actions,
  mutations,
  getters,
};
