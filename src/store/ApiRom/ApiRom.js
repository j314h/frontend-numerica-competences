import mutations from "./ApiRomMutations";
import actions from "./ApiRomActions";
import getters from "./ApiRomGetters";

export default {
  namespaced: true,
  state: {
    //all appelations of trades in api ROM
    appellations: [],
    competenceOfAppellationSelected: {},
  },
  mutations,
  actions,
  getters,
};
