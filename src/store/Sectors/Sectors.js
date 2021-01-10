import mutations from "./SectorsMutations";
// import actions from './SectorsActions';
import getters from "./SectorsGetters";

export default {
  namespaced: true,
  state: {
    sectors: null,
    errors: [],
  },
  mutations,
  //   actions,
  getters,
};
