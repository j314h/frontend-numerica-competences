import actions from "./PramaAppActions";
import mutations from "./ParamAppMutations";
import getters from "./ParamGetters";

export default {
  namespaced: true,
  state: {
    params: {
      //color
      bgMenuHeadband: "blue", // blue, gray
      colorText1Menu: "gray", // blue, orange, white, gray
      colorText2Menu: "blue", // blue, orange, white, gray
    },
    imgs: null, // img for app
    errors: [], // error param app
  },
  actions,
  mutations,
  getters,
};
