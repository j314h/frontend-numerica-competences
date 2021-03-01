import axios from "axios";
import store from "../index";

export default {
  //get all appelations of trades in API ROM
  async getAppelationsOfTrade(context, token) {
    try {
      //loading + reset error
      store.commit("Loading/stateLoading", true);

      //call api rom for recover all appellation
      const appellations = await axios.get(`${process.env.VUE_APP_URL_API_ROM}appellation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //save in store appellation
      context.commit("addAppelation", appellations.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      console.log("getAppelationsOfTrade ~ error", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //get all competence of appellation selected
  async getCompetencesOfAppellations(context, codeAppellation) {
    try {
      //loading + reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for recover competence of appellation selected
      const competences = await (
        await axios.get(`${process.env.VUE_APP_URL_API_ROM}appellation/${codeAppellation}`, {
          headers: { Authorization: `Bearer ${store.getters["Trades/tokenApiRom"]}` },
        })
      ).data;

      //stop loading and save in store there competence of appellation selected
      context.commit("addCompetenceOfAppellation", competences);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      console.log("getAppelationsOfTrade ~ error", error);
    }
  },
};
