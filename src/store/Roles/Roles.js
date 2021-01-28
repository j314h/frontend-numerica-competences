import actions from "./RolesActions";
import mutations from "./RolesMutations";
import getters from "./RolesGetters";

export default {
  namespaced: true,
  state: {
    roles: [],
  },
  actions,
  mutations,
  getters,
};
