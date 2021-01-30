export default {
  //see sub menu
  seeSubMenu(state, bool) {
    state.isSubMenu = bool;
  },
  //change title in headband
  changeTitleHeadBand(state, text) {
    state.titleHeadBand = text;
  },
  //for exit company selected
  getOutCompanySelected(state, bool) {
    state.outCompanySelected = bool;
  },
};
