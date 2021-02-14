<template>
  <div>
    <!-- search trades -->
    <div class="box" :class="thColor.cbgCard">
      <!-- title -->
      <title-cards :title="'Sélection métier'" :themeColor="thColor"></title-cards>

      <!-- search input and accessoires -->
      <create-file-work-component :isTradeSelected.sync="isTradeSelected"></create-file-work-component>
    </div>

    <!-- display trade selected -->
    <div class="box cfw_box_trade_selected" :class="thColor.cbgCard">
      <!-- trade not selected -->
      <div v-if="!isTradeSelected">
        <title-cards :title="'Aucun métier'" :themeColor="thColor"></title-cards>
        <p class="stm-r">Pour accèder à la partie creation.</p>
        <p class="stm-r">Veuillez saisir un métier dans le champs de recherche ci-dessus</p>
      </div>

      <!-- trade selected -->
      <div v-else>
        <title-cards :title="'Création de la fiche métier :'" :themeColor="thColor"></title-cards>
      </div>

      <!-- create file work with choice competence "savoir, savoir etre, transversal" -->
      <transition appear name="fade" mode="out-in">
        <!-- here competence savoir -->
        <create-work-savoir
          v-if="isTradeSelected && isSavoir && !isSavoirFaire"
          :isTradeSelected="isTradeSelected"
          :isSavoir.sync="isSavoir"
          :isSavoirFaire.sync="isSavoirFaire"
        ></create-work-savoir>

        <!-- here competence savoir -->
        <create-work-savoir-faire v-if="isSavoirFaire && !isSavoir"></create-work-savoir-faire>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TitleCards from "../../../Elements/TitleCards.vue";
import CreateFileWorkComponent from "./CreateFileWorkComponents/CreateFileWorkComponent";
import CreateWorkSavoir from "./CreateFileWorkComponents/CreateWorkSavoir.vue";
import CreateWorkSavoirFaire from "./CreateFileWorkComponents/CreateWorkSavoirFaire.vue";

export default {
  name: "CreateFileWork",
  components: {
    TitleCards,
    CreateFileWorkComponent,
    CreateWorkSavoir,
    CreateWorkSavoirFaire,
  },
  data() {
    return {
      //trade is selected or not
      isTradeSelected: false,
      //see competences savoir
      isSavoir: true,
      //see competence savoir faire
      isSavoirFaire: false,
    };
  },
  created() {
    //load token api rom and recover all appellation in API ROM
    this.$store.dispatch("Trades/getAccesApiRom");
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),

    //recover appellation selection from user
    ...mapState("ApiRom", ["competenceOfAppellationSelected"]),
  },
};
</script>

<style></style>
