<template>
  <div>
    <div class="cws_sub_title">
      <!-- title of card create file trade -->
      <title-cards
        :subTitle="true"
        :title="'Validez les compétences de type savoir'"
        :themeColor="thColor"
      ></title-cards>
    </div>

    <!-- list savoir -->
    <form class="cws_form" v-if="isTradeSelected" id="savoirSubmit" @submit.prevent="competenceSavoirValidate">
      <!-- competence savoir for appellation selected -->
      <div class="cws_flex" v-for="(competence, i) in competenceBasic" :key="i">
        <div v-if="competence.typeCompetence === 'Savoir'">
          <input-check-sample
            :titleLabel="competence.libelle"
            :name="competence.libelle"
            :id="competence.libelle"
            :value="competence.libelle"
            v-model="competenceSavoir"
          ></input-check-sample>
        </div>
      </div>

      <!-- add manual competence -->
      <div>
        <!-- input for create competence -->
        <div class="cws_box_input_add_competence" v-if="addSavoir === true">
          <div>
            <input-sample
              :placeholder="'Renseignez votre compétence'"
              :type="'text'"
              v-model="newCompetenceSavoir.libelle"
            ></input-sample>
          </div>

          <!-- icon for save or close new input competence -->
          <div>
            <!-- save new competences -->
            <svg
              @click.prevent="addCompetenceSavoir"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f84210"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-save"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>

            <!-- close input -->
            <svg
              @click="hiddInputCompetenceSavoir"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff4b4b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>

        <!-- btn acces create competence -->
        <div class="cws_box_btn_create_new_competence">
          <svg
            class="svg_add"
            @click.prevent="seeInputCompetenceSavoir"
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM20 37.4999C10.335 37.4999 2.5 29.6649 2.5 19.9999C2.5 10.335 10.335 2.49994 20 2.49994C29.665 2.49994 37.5 10.335 37.5 19.9999C37.5 24.6412 35.6563 29.0924 32.3744 32.3743C29.0925 35.6562 24.6413 37.4999 20 37.4999ZM21.2501 18.75H30.2126C30.903 18.75 31.4626 19.3096 31.4626 20C31.4626 20.6903 30.903 21.25 30.2126 21.25H21.2501V30.2125C21.2501 30.9028 20.6905 31.4625 20.0001 31.4625C19.3097 31.4625 18.7501 30.9028 18.7501 30.2125V21.25H9.7876C9.09724 21.25 8.5376 20.6903 8.5376 20C8.5376 19.3096 9.09724 18.75 9.7876 18.75H18.7501V9.78748C18.7501 9.09712 19.3097 8.53748 20.0001 8.53748C20.6905 8.53748 21.2501 9.09712 21.2501 9.78748V18.75Z"
              fill="#f84210"
            /></svg
          ><span @click.prevent="seeInputCompetenceSavoir" class="stxxm-r" :class="thColor.textImportant"
            >Créer une compétence</span
          >
        </div>
      </div>

      <!-- btn validate competence savoir -->
      <div class="cws_btn_validate_competence_savoir">
        <button-app :mini="true" :textBtn="'Validez'" :themeColor="thColor"></button-app>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonApp from "../../../../Elements/Buttons/ButtonApp.vue";
import InputCheckSample from "../../../../Elements/Inputs/InputCheckSample.vue";
import InputSample from "../../../../Elements/Inputs/InputSample.vue";
import TitleCards from "../../../../Elements/TitleCards.vue";

export default {
  name: "CreateWorkSavoir",
  components: {
    TitleCards,
    InputCheckSample,
    ButtonApp,
    InputSample,
  },
  props: {
    //for see create trade current selected
    isTradeSelected: Boolean,
    //for see competence savoir
    isSavoir: Boolean,
    //for change value of competence savoir faire
    isSavoirFaire: Boolean,
  },
  data() {
    return {
      //for see new input
      addSavoir: false,
      //object for create new competence savoir
      newCompetenceSavoir: { typeCompetence: "Savoir", libelle: null },
    };
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),

    //competence savoir selected by current user, save in store
    competenceSavoir: {
      get() {
        return this.$store.state.ApiRom.competenceSavoir;
      },
      set(value) {
        this.$store.commit("ApiRom/selectedCompetenceSavoir", value);
      },
    },

    //list of competenceBasic
    competenceBasic: {
      get() {
        return this.$store.getters["ApiRom/competenceBasic"];
      },
      set(value) {
        this.$store.commit("ApiRom/addNewCompetenceSavoir", value);
      },
    },
  },
  methods: {
    //for see new input for add competence
    seeInputCompetenceSavoir() {
      this.addSavoir = !this.addSavoir;
    },

    //for hidd new input
    hiddInputCompetenceSavoir() {
      this.addSavoir = !this.addSavoir;
    },

    //add competences in newCompetence
    addCompetenceSavoir() {
      if (this.newCompetenceSavoir.libelle != null) {
        this.competenceBasic = this.newCompetenceSavoir;
        this.addSavoir = !this.addSavoir;
      }
      this.newCompetenceSavoir = {
        typeCompetence: "Savoir",
        libelle: null,
      };
    },

    //valider there competences savoir
    competenceSavoirValidate() {
      //change value for go in competence savoir faire
      this.$emit("update:isSavoirFaire", !this.isSavoirFaire);
      this.$emit("update:isSavoir", !this.isSavoir);
    },
  },
};
</script>

<style></style>
