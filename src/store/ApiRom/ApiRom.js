import mutations from "./ApiRomMutations";
import actions from "./ApiRomActions";
import getters from "./ApiRomGetters";

export default {
  namespaced: true,
  state: {
    //all appelations of trades in api ROM
    appellations: [],
    competenceOfAppellationSelected: {},
    //name of metier of current trade build
    nameTrade: "",
    //competence savoir of current trade build
    competenceSavoir: [],
    //competence savoir faire of current trade build
    competenceSavoirFaire: [],
    //competence transverse of current trade build
    competenceTransverseSelected: [],
  },
  mutations,
  actions,
  getters,
};
