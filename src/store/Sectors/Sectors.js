import mutations from "./SectorsMutations";
import actions from "./SectorsActions";
import getters from "./SectorsGetters";

export default {
  namespaced: true,
  state: {
    //for sectors company selected
    sectorsCompanySelected: [],
  },
  mutations,
  actions,
  getters,
};
