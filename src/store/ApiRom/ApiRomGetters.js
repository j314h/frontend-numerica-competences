export default {
  //return competence of appellation selected
  competenceOfAppellationSelected: (state) => state.competenceOfAppellationSelected,

  //return competence of basic of appellation selected
  competenceBasic: (state) => state.competenceOfAppellationSelected.competencesDeBase,

  //return competence transverse of appellation selected
  competenceTransverse: (state) => {
    const competences = [];
    const tab = state.competenceOfAppellationSelected.groupesCompetencesSpecifiques.map((el) => el.competences);
    for (const item of tab) {
      for (const competence of item) {
        competences.push(competence);
      }
    }
    return competences;
  },
};
