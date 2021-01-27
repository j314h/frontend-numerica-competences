//import actions from "./FilesActions";
import mutations from "./LoadingMutations";
import getters from "./LoadingGetters";

export default {
  namespaced: true,
  state: {
    //for loading activate page
    isLoading: false,
  },
  //actions,
  mutations,
  getters,
};
