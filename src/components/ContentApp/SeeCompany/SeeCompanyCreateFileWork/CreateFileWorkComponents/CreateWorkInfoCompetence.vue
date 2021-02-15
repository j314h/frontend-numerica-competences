<template>
  <!-- here box information of create trade current -->
  <div v-if="isTradeSelected" class="cwic_box_info_create_trade_competence">
    <p :class="thColor.textBasic">
      Métier choisis :
      <span class="stxm-m" :class="thColor.textImportant">{{ competenceOfAppellationSelected.libelle }}</span>
    </p>

    <!-- competence savoir -->
    <p :class="thColor.textBasic">
      Compétences Savoir :
    </p>
    <div v-if="competenceSavoir.length > 0">
      <div :class="thColor.textImportant" v-for="(item, i) in competenceSavoir" :key="i">- {{ item }}</div>
    </div>
    <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>

    <!-- competence savoir faire -->
    <p :class="thColor.textBasic">
      Compétences Savoir Faire :
    </p>
    <div v-if="competenceSavoirFaire.length > 0">
      <div :class="thColor.textImportant" v-for="(item, i) in competenceSavoirFaire" :key="i">- {{ item }}</div>
    </div>
    <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "CreateWorkInfoCompetence",
  props: {
    isTradeSelected: Boolean,
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),

    //recover appellation selection from user
    ...mapState("ApiRom", ["competenceOfAppellationSelected", "competenceSavoir", "competenceSavoirFaire"]),
  },
};
</script>

<style></style>
