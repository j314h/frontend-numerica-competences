export default {
  currentUser: (state) => state.currentUser,
  bgContent: (state) => state.currentUser.themeColor.bgContent,
  colorText: (state) => state.currentUser.themeColor.colorText,
  bgSubMenu: (state) => state.currentUser.themeColor.bgSubMenu,
  colorMenuActive: (state) => state.currentUser.themeColor.colorMenuActive,
  bgLayout: (state) => state.currentUser.themeColor.bgLayout,
  cbgBox: (state) => state.currentUser.themeColor.cbgBox,
  colorTextTab: (state) => state.currentUser.themeColor.colorTextTab,
  isSignIn: (state) => state.isSignIn,
  isLoading: (state) => state.isLoading,
  errors: (state) => state.errors,
};
