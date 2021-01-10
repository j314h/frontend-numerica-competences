import actions from "./UserConnectActions";
import mutations from "./UserConnectMutations";
import getters from "./UserConnectGetters";

export default {
  namespaced: true,
  state: {
    currentUser: localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : {}, //info for user connected
    isSignIn: false, // connected
    isLoading: false, //loading for user connect
    errors: [], // error user connect
  },
  actions,
  mutations,
  getters,
};
