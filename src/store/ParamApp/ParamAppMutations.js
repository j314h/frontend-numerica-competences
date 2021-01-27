export default {
  //see sub menu
  seeSubMenu(state, bool) {
    state.isSubMenu = bool;
  },
  //change title in headband
  changeTitleHeadBand(state, text) {
    state.titleHeadBand = text;
  },
};
