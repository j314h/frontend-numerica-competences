<template>
  <div>
    <div class="box" :class="thColor.cbgCard">
      <!-- title -->
      <title-cards :title="'Sélection métier'" :themeColor="thColor"></title-cards>
      <create-file-work-component :isTradeSelected.sync="isTradeSelected"></create-file-work-component>
    </div>
    <div class="box cfw_box_trade_selected" :class="thColor.cbgCard">
      <title-cards v-if="!isTradeSelected" :title="'Aucun métier selectionné'" :themeColor="thColor"></title-cards>
      <div v-else>
        <span class="cfw_info_title_create_work">Création de la fiche métier :</span>
        <title-cards :title="competenceOfAppellationSelected.libelle" :themeColor="thColor"></title-cards>
      </div>
      <create-work-savoir v-if="isTradeSelected" :isTradeSelected="isTradeSelected"></create-work-savoir>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TitleCards from "../../../Elements/TitleCards.vue";
import CreateFileWorkComponent from "./CreateFileWorkComponents/CreateFileWorkComponent";
import CreateWorkSavoir from "./CreateFileWorkComponents/CreateWorkSavoir.vue";

export default {
  name: "CreateFileWork",
  components: {
    TitleCards,
    CreateFileWorkComponent,
    CreateWorkSavoir,
  },
  data() {
    return {
      //trade is selected or not
      isTradeSelected: false,
      newCompetenceSavoir: {
        typeCompetence: "Savoir",
        libelle: null,
      },
    };
  },
  created() {
    this.$store.dispatch("Trades/getAccesApiRom");
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),
    ...mapState("ApiRom", ["competenceOfAppellationSelected"]),
  },
};
</script>

<style></style>
