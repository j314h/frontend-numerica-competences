<template>
  <div>
    <!-- search trades -->
    <div v-if="!seeFileTrade">
      <div class="box" :class="thColor.cbgCard">
        <!-- title -->
        <title-cards :title="'Sélection métier'" :themeColor="thColor"></title-cards>

        <!-- search input and accessoires -->
        <create-file-work-component :isTradeSelected.sync="isTradeSelected"></create-file-work-component>
      </div>

      <!-- display trade selected -->
      <div class="cfw_box_create_trade_info_trade">
        <div class="box cfw_box_trade_selected" :class="thColor.cbgCard">
          <!-- trade not selected -->
          <div v-if="!isTradeSelected">
            <title-cards :title="'Aucune Compétence'" :themeColor="thColor"></title-cards>
            <p class="stm-r">Pour accèder à la partie creation.</p>
            <p class="stm-r">Veuillez saisir un métier dans le champs de recherche ci-dessus</p>
          </div>

          <!-- trade selected -->
          <div v-else class="cfw_title_trade_selected">
            <title-cards :title="'Compétences du métier : '" :themeColor="thColor"></title-cards>
            <span :class="thColor.textBasic" class="stxxm-b">{{ competenceOfAppellationSelected.libelle }}</span>
          </div>

          <!-- box for create trade competence -->
          <div v-if="isTradeSelected" class="cwf_box_create_trade_competence" :class="thColor.bgContent">
            <!-- menu competences -->
            <create-file-work-menu
              :isSavoir.sync="isSavoir"
              :isSavoirFaire.sync="isSavoirFaire"
              :isTransversal.sync="isTransversal"
            ></create-file-work-menu>

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
              <create-work-savoir-faire
                v-if="isSavoirFaire && !isSavoir"
                :isTradeSelected="isTradeSelected"
                :isSavoir.sync="isSavoir"
                :isSavoirFaire.sync="isSavoirFaire"
                :isTransversal.sync="isTransversal"
              ></create-work-savoir-faire>

              <!-- here competence transverse -->
              <create-work-transverse
                v-if="isTransversal && !isSavoirFaire && !isSavoir"
                :isTradeSelected="isTradeSelected"
                :isSavoir.sync="isSavoir"
                :isSavoirFaire.sync="isSavoirFaire"
                :isTransversal.sync="isTransversal"
              ></create-work-transverse>
            </transition>
          </div>
        </div>

        <!-- here box information of create trade current and btn of create file work-->
        <div class="box cfw_box_create_trade_info cfw_box_fixed" :class="thColor.cbgCard">
          <title-cards :title="'Votre métier'" :themeColor="thColor" class="cfw_title_name_trade"></title-cards>
          <div v-if="!isTradeSelected">
            <p class="cfw_text_info_name_trade" :class="thColor.textBasic">Aucune création en cours.</p>
          </div>
          <div v-else>
            <input-sample
              class="cfw_input_name_trade"
              :placeholder="'Attribuez un nom à votre métier'"
              :type="'text'"
              :required="true"
              v-model="nameOfTradeBuild"
            ></input-sample>
          </div>

          <div class="cfw_title_box_info_store_competence">
            <title-cards
              :title="'Magasin de compétences'"
              :themeColor="thColor"
              class="cfw_title_name_trade"
            ></title-cards>
            <!-- icon trash -->
            <svg
              v-if="isTradeSelected"
              xmlns="http://www.w3.org/2000/svg"
              @click="resetStoreCompetence"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff4b4b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>

          <!-- trade is selected -->
          <div v-if="isTradeSelected">
            <create-work-info-competence
              :isTradeSelected="isTradeSelected"
              :isSavoir.sync="isSavoir"
              :isSavoirFaire.sync="isSavoirFaire"
              :isTransversal.sync="isTransversal"
            ></create-work-info-competence>

            <!-- btn validate file trade or back in competence savoir faire -->
            <div v-if="isTradeSelected" class="cws_btn_validate_competence_savoir">
              <button-sample
                @click="displayFileTrade"
                :smallBtn="true"
                :textBtn="'Accèdez à la fiche métier'"
                :themeColor="thColor"
              ></button-sample>
            </div>
          </div>

          <!-- trade is not selected -->
          <div v-else>
            <p :class="thColor.textBasic">Votre magasin est vide</p>
          </div>
        </div>
      </div>
    </div>

    <!-- see finish file trade -->
    <div v-else class="box cfw_file_trade_finish" :class="thColor.cbgCard">
      <finish-file-work :seeFileTrade.sync="seeFileTrade"></finish-file-work>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { AlertQuickly } from "../../../../lib/SwalAlert";
import TitleCards from "../../../Elements/TitleCards.vue";
import ButtonApp from "../../../Elements/Buttons/ButtonApp";
import ButtonSample from "../../../Elements/Buttons/ButtonSample";
import CreateFileWorkComponent from "./CreateFileWorkComponents/CreateFileWorkComponent";
import CreateWorkInfoCompetence from "./CreateFileWorkComponents/CreateWorkInfoCompetence.vue";
import CreateWorkSavoir from "./CreateFileWorkComponents/CreateWorkSavoir.vue";
import CreateWorkSavoirFaire from "./CreateFileWorkComponents/CreateWorkSavoirFaire.vue";
import CreateWorkTransverse from "./CreateFileWorkComponents/CreateWorkTransverse.vue";
import InputSample from "../../../Elements/Inputs/InputSample.vue";
import FinishFileWork from "./FinishFileWorkComponent/FinishFileWork.vue";
import CreateFileWorkMenu from "./CreateFileWorkComponents/CreateFileWorkMenu.vue";

export default {
  name: "CreateFileWork",
  components: {
    TitleCards,
    CreateFileWorkComponent,
    CreateWorkSavoir,
    CreateWorkSavoirFaire,
    CreateWorkInfoCompetence,
    CreateWorkTransverse,
    ButtonApp,
    ButtonSample,
    InputSample,
    FinishFileWork,
    CreateFileWorkMenu,
  },
  data() {
    return {
      //trade is selected or not
      isTradeSelected: false,
      //see competences savoir
      isSavoir: true,
      //see competence savoir faire
      isSavoirFaire: false,
      //see transversal
      isTransversal: false,
      //see file trade finish config
      seeFileTrade: false,
    };
  },
  created() {
    //load token api rom and recover all appellation in API ROM
    this.$store.dispatch("Trades/getAccesApiRom");
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),

    //recover appellation selection from user
    ...mapState("ApiRom", ["competenceOfAppellationSelected", "competenceSavoir"]),

    //name of trade build current
    nameOfTradeBuild: {
      get() {
        return this.$store.state.ApiRom.nameTrade;
      },
      set(value) {
        this.$store.commit("ApiRom/changeNameOfTradeCurrent", value);
      },
    },
  },
  methods: {
    //valider there competences savoir
    competenceSavoirValidate() {
      //change value for go in competence savoir faire
      this.isSavoirFaire = true;
      this.isSavoir = false;
    },

    //valider there competences savoir
    competenceSavoirFaireValidate() {
      //change value for go in competence savoir faire
      this.isSavoir = false;
      this.isSavoirFaire = false;
      this.isTransversal = true;
    },

    //back in competences savoir
    backCompetenceSavoir() {
      this.isSavoir = true;
      this.isSavoirFaire = false;
      this.isTransversal = false;
    },

    //back in competence savoir faire
    backCompetenceSavoirFaire() {
      this.isSavoir = false;
      this.isSavoirFaire = true;
      this.isTransversal = false;
    },

    //go for see file trade finished
    displayFileTrade() {
      if (this.nameOfTradeBuild !== "") {
        this.seeFileTrade = true;
      } else {
        console.log("salut");
        this.$swal.fire(AlertQuickly("center", "error", `Vous devez renseigner un nom de métier`, 2000));
      }
    },

    //clear store competence
    resetStoreCompetence() {
      this.$store.commit("ApiRom/selectedCompetenceSavoir", false);
      this.$store.commit("ApiRom/selectedCompetenceSavoirFaire", false);
      this.$store.commit("ApiRom/selectedCompetenceTransverse", false);
    },
  },
};
</script>

<style></style>
