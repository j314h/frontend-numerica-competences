import mutations from "./ApiRomMutations";
import actions from "./ApiRomActions";
import getters from "./ApiRomGetters";

export default {
  namespaced: true,
  state: {
    //all appelations of trades in api ROM
    appellations: [],
    competenceOfAppellationSelected: {},
    //competence savoir of current trade build
    competenceSavoir: [],
    newCompetenceSavoir: {
      typeCompetence: "Savoir",
      libelle: null,
    },
  },
  mutations,
  actions,
  getters,
};
