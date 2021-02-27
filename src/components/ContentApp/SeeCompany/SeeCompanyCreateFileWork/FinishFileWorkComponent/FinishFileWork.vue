<template>
  <div class="ffw">
    <div class="ffw_box_title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        @click="goBackSelectedCompetence"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f84210"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 8 8 12 12 16"></polyline>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
      <p>Retour sélection des compétences</p>
    </div>
    <TitleCards :title="'Votre fiche métier'" :themeColor="thColor" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import TitleCards from "../../../../Elements/TitleCards.vue";

export default {
  name: "FinishFileWork",
  components: {
    TitleCards,
  },
  props: {
    seeFileTrade: Boolean,
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),
  },
  methods: {
    //return in selected competences
    goBackSelectedCompetence() {
      this.$emit("update:seeFileTrade", false);
    },
  },
};
</script>
