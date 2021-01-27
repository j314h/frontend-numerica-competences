//import actions from "./PramaAppActions";
import mutations from "./ParamAppMutations";
import getters from "./ParamGetters";

export default {
  namespaced: true,
  state: {
    //title of head band
    titleHeadBand: "",
    //booleen for sub menu appear or not
    isSubMenu: false,
  },
  //actions,
  mutations,
  getters,
};
