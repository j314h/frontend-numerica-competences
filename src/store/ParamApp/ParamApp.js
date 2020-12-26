import actions from "./PramaAppActions";
import mutations from "./ParamAppMutations";
import getters from "./ParamGetters";

export default {
  namespaced: true,
  state: {
    params: {
      //color
      bgMenuHeadband: "blue", //bgm- blue, gray * ok class *
      bgDarkContent: "bgdark-gray", // no change (it's name of class) * ok class
      bgHeadArray: "blue", // bgharray- blue, gray, lightblue, lightgray * ok class *
      colorTextPrimary: "primary", //ct-custom- primary, secondary * ok class * // no change user
      colorTextHeadArray: "blue", // ctextharray- blue, orange, white, gray
      colorTextInactive: "gray", //ctm- blue, orange, white, gray * ok class *
      colorTextActive: "blue", //ctm- blue, orange, white, gray * ok class *
      colorBtnPrimary: "blue", // cbtn- blue, orange, * ok class *
      colorBtnSecondary: "orange", // cbtnm- blue, orange, * ok class *
      colorLignArray: "blue", //clignearray- blue, orange
    },
    imgs: null, // img for app
    errors: [], // error param app
  },
  actions,
  mutations,
  getters,
};
