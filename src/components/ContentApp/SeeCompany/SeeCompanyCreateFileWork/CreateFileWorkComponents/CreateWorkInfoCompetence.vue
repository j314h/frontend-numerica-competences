<template>
  <div v-if="isTradeSelected" class="cwic_box_info_create_trade_competence">
    <!-- competence savoir -->
    <div class="cwic_box_competence">
      <p :class="thColor.textBasic" class=" cwic_btn_go">
        Compétences Savoir
      </p>
      <div v-if="competenceSavoir.length > 0">
        <div class="cwic_competence" :class="thColor.textImportant" v-for="(item, i) in competenceSavoir" :key="i">
          - {{ item }}
        </div>
      </div>
      <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>
    </div>

    <!-- competence savoir faire -->
    <div class="cwic_box_competence">
      <p :class="thColor.textBasic" class=" cwic_btn_go">
        Compétences Savoir Faire
      </p>
      <div v-if="competenceSavoirFaire.length > 0">
        <div class="cwic_competence" :class="thColor.textImportant" v-for="(item, i) in competenceSavoirFaire" :key="i">
          - {{ item }}
        </div>
      </div>
      <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>
    </div>

    <!-- competence transverse -->
    <div class="cwic_box_competence">
      <p :class="thColor.textBasic" class=" cwic_btn_go">
        Compétences transverse
      </p>
      <div v-if="competenceTransverseSelected.length > 0">
        <div
          class="cwic_competence"
          :class="thColor.textImportant"
          v-for="(item, i) in competenceTransverseSelected"
          :key="i"
        >
          - {{ item }}
        </div>
      </div>
      <div :class="thColor.textImportant" v-else>Aucune compétence selectionée</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "CreateWorkInfoCompetence",
  props: {
    //for navigate of type competence
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
      "competenceTransverseSelected",
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
