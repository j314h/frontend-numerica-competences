export default {
  //retrun info user connected
  currentUser: (state) => state.currentUser,

  //recover id current user
  idCurrentUser: (state) => state.currentUser._id,

  //return info company of user connected
  currentUserCompany: (state) => state.currentUserCompany,

  //return sectors company
  sectorsCompanyCurrentUser: (state) => state.sectorsCompanyCurrentUser,

  //theme color
  thColor: (state) => state.currentUser.themeColor,
  bgContent: (state) => state.currentUser.themeColor.bgContent,
  colorText: (state) => state.currentUser.themeColor.colorText,
  bgSubMenu: (state) => state.currentUser.themeColor.bgSubMenu,
  colorMenuActive: (state) => state.currentUser.themeColor.colorMenuActive,
  bgLayout: (state) => state.currentUser.themeColor.bgLayout,
  cbgBox: (state) => state.currentUser.themeColor.cbgBox,
  colorTextTab: (state) => state.currentUser.themeColor.colorTextTab,
  btnm: (state) => state.currentUser.themeColor.btnm,
  btn: (state) => state.currentUser.themeColor.btn,

  //return bool for know if user is connected
  isSignIn: (state) => state.isSignIn,
};
