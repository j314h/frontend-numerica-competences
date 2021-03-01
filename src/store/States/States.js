import mutations from "./StatesMutations";
import actions from "./StatesActions";
import getters from "./StatesGetters";

export default {
  namespaced: true,
  state: {
    //all states
    states: null,
  },
  mutations,
  actions,
  getters,
};
