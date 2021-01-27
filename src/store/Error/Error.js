//import actions from "./UserConnectActions";
import mutations from "./ErrorMutations";
import getters from "./ErrorGetters";

export default {
  namespaced: true,
  state: {
    //tab errors for all app
    errors: [],
  },
  //actions,
  mutations,
  getters,
};
