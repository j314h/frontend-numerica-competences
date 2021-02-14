export default {
  //return competence of appellation selected
  competenceOfAppellationSelected: (state) => state.competenceOfAppellationSelected,

  //return competence of basic of appellation selected
  competenceBasic: (state) => state.competenceOfAppellationSelected.competencesDeBase,
};
