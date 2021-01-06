import actions from "./PramaAppActions";
import mutations from "./ParamAppMutations";
import getters from "./ParamGetters";

export default {
  namespaced: true,
  state: {
    imgs: null, // img for app
    errors: [], // error param app
    titleHeadBand: "",
    isSubMenu: false,
  },
  actions,
  mutations,
  getters,
};
