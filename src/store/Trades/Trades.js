import mutations from "./TradesMutations";
import actions from "./TradesActions";
import getters from "./TradesGetters";

export default {
  namespaced: true,
  state: {
    //all trades of company selected
    tradesCompanySelected: [],
    //api ROM
    tokenApiRom: "",
  },
  mutations,
  actions,
  getters,
};
