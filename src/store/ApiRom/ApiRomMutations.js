export default {
  //add all appelations of trades in store
  addAppelation(state, listAppellation) {
    state.appellations = listAppellation;
  },

  //add appellation selected and with all competence her
  addCompetenceOfAppellation(state, competence) {
    state.competenceOfAppellationSelected = competence;
  },

  //change name of file work current
  changeNameOfTradeCurrent(state, name) {
    state.nameTrade = name;
  },

  //add competence savoir selected of current user
  selectedCompetenceSavoir(state, competence) {
    competence === false ? (state.competenceSavoir = []) : (state.competenceSavoir = competence);
  },

  //add competence savoir faire selected of current user
  selectedCompetenceSavoirFaire(state, competence) {
    competence === false ? (state.competenceSavoirFaire = []) : (state.competenceSavoirFaire = competence);
  },

  //add competence transverse selected of current user
  selectedCompetenceTransverse(state, competence) {
    competence === false
      ? (state.competenceTransverseSelected = [])
      : (state.competenceTransverseSelected = competence);
  },

  //add new competences in competence of basic in competenceOfAppellationSelected
  addNewCompetenceSavoir(state, newCompetence) {
    state.competenceOfAppellationSelected.competencesDeBase.push(newCompetence);
  },

  //add new competences transver in competence of basic in competenceOfAppellationSelected
  addNewCompetenceTransverse(state, newCompetence) {
    const obj = { competences: [newCompetence] };
    state.competenceOfAppellationSelected.groupesCompetencesSpecifiques.push(obj);
  },
};
