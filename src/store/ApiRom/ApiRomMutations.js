export default {
  //add all appelations of trades in store
  addAppelation(state, listAppellation) {
    state.appellations = listAppellation;
  },

  addCompetenceOfAppellation(state, competence) {
    state.competenceOfAppellationSelected = competence;
  },
};
