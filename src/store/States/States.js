import mutations from "./StatesMutations";
import actions from "./StatesActions";
import getters from "./StatesGetters";

export default {
  namespaced: true,
  state: {
    states: null,
    errors: [],
  },
  mutations,
  actions,
  getters,
};
