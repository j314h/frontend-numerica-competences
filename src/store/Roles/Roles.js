import actions from "./RolesActions";
import mutations from "./RolesMutations";
import getters from "./RolesGetters";

export default {
  namespaced: true,
  state: {
    //all roles of user
    roles: [],
  },
  actions,
  mutations,
  getters,
};
