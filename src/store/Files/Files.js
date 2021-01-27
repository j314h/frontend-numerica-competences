import actions from "./FilesActions";
import mutations from "./FilesMutations";
import getters from "./FilesGetters";

export default {
  namespaced: true,
  state: {
    //imgs of this app
    imgs: localStorage.getItem("imgs") ? JSON.parse(localStorage.getItem("imgs")) : [],
  },
  actions,
  mutations,
  getters,
};
