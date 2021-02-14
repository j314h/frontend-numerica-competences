export default {
  //add all appelations of trades in store
  addAppelation(state, listAppellation) {
    state.appellations = listAppellation;
  },

  //add appellation selected and with all competence her
  addCompetenceOfAppellation(state, competence) {
    state.competenceOfAppellationSelected = competence;
  },

  //add competence savoir selected of current user
  selectedCompetenceSavoir(state, competence) {
    state.competenceSavoir = competence;
  },

  //add new competences in competence of basic in competenceOfAppellationSelected
  addNewCompetenceSavoir(state, newCompetence) {
    state.competenceOfAppellationSelected.competencesDeBase.push(newCompetence);
  },
};