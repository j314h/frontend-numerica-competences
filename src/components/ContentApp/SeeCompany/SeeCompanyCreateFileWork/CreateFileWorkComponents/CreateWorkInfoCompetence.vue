<template>
  <div v-if="isTradeSelected" class="cwic_box_info_create_trade_competence">
    <p :class="thColor.textBasic">
      Métier choisis :
      <span class="stxm-m" :class="thColor.textImportant">{{ competenceOfAppellationSelected.libelle }}</span>
    </p>

    <!-- competence savoir -->
    <p :class="thColor.textBasic" @click="goCompetenceSavoir" class=" cwic_btn_go">
      Compétences Savoir :
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f84210"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-link-2"
      >
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </p>
    <div v-if="competenceSavoir.length > 0">
      <div :class="thColor.textImportant" v-for="(item, i) in competenceSavoir" :key="i">- {{ item }}</div>
    </div>
    <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>

    <!-- competence savoir faire -->
    <p :class="thColor.textBasic" @click="goCompetenceSavoirFaire" class=" cwic_btn_go">
      Compétences Savoir Faire :
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f84210"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-link-2"
      >
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </p>
    <div v-if="competenceSavoirFaire.length > 0">
      <div :class="thColor.textImportant" v-for="(item, i) in competenceSavoirFaire" :key="i">- {{ item }}</div>
    </div>
    <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>

    <!-- competence transverse -->
    <p :class="thColor.textBasic" @click="goCompetenceTransverse" class=" cwic_btn_go">
      Compétences transverse :
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f84210"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-link-2"
      >
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </p>
    <div v-if="competenceTransverse.length > 0">
      <div :class="thColor.textImportant" v-for="(item, i) in competenceTransverse" :key="i">- {{ item }}</div>
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
    isSavoir: Boolean,
    isSavoirFaire: Boolean,
    isTransversal: Boolean,
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),

    //recover appellation selection from user
    ...mapState("ApiRom", [
      "competenceOfAppellationSelected",
      "competenceSavoir",
      "competenceSavoirFaire",
      "competenceTransverse",
    ]),
  },
  methods: {
    //go in competence savoir
    goCompetenceSavoir() {
      this.$emit("update:isSavoir", true);
      this.$emit("update:isSavoirFaire", false);
      this.$emit("update:isTransversal", false);
    },

    //go in competence savoir faire
    goCompetenceSavoirFaire() {
      this.$emit("update:isSavoir", false);
      this.$emit("update:isSavoirFaire", true);
      this.$emit("update:isTransversal", false);
    },

    //go in competence transverse
    goCompetenceTransverse() {
      this.$emit("update:isSavoir", false);
      this.$emit("update:isSavoirFaire", false);
      this.$emit("update:isTransversal", true);
    },
  },
};
</script>

<style></style>
