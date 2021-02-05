<template>
  <div class="box global_box" :class="themeColor.cbgCard">
    <title-cards :title="'Creation entreprise'" :themeColor="themeColor"></title-cards>
    <!-- form -->
    <form class="form_create_company" @submit.prevent="createCompanyInBdd">
      <!-- block left -->
      <div class="block_input_create_company">
        <!-- name -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`Nom de l'entreprise`"
          :required="true"
          :textLabel="`Dénomination sociale * : `"
          :type="'text'"
          :value="data.name"
          v-model="data.name"
        ></input-label-sample>

        <!-- street -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`15 grande rue`"
          :required="true"
          :textLabel="`Adresse * : `"
          :type="'text'"
          :value="data.address.street"
          v-model="data.address.street"
        ></input-label-sample>

        <!-- code post -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`75000`"
          :required="true"
          :textLabel="`Code postal * : `"
          :type="'text'"
          :value="data.address.postCode"
          v-model="data.address.postCode"
        ></input-label-sample>

        <!-- city -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`Paris`"
          :required="true"
          :textLabel="`Ville * : `"
          :type="'text'"
          :value="data.address.city"
          v-model="data.address.city"
        ></input-label-sample>

        <!-- phoneNumber -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`Téléphone mobile ou bureau`"
          :required="true"
          :textLabel="`Numéro de téléphone * : `"
          :type="'text'"
          :value="data.phoneNumber"
          v-model="data.phoneNumber"
        ></input-label-sample>
      </div>

      <!-- block right -->
      <div class="block_input_create_company">
        <!-- filliale -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`Psa - Paris`"
          :required="false"
          :textLabel="`Site de production ou filliale : `"
          :type="'text'"
          :value="data.filliale"
          v-model="data.filliale"
        ></input-label-sample>

        <!-- siret -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`Numéro composé de 14 chiffres`"
          :required="true"
          :textLabel="`Numéro de siret * : `"
          :type="'text'"
          :value="data.siret"
          v-model="data.siret"
        ></input-label-sample>

        <!-- naf -->
        <input-label-sample
          :themeColor="themeColor"
          :placeholder="`85.59A`"
          :required="true"
          :textLabel="`Code NAF (ou APE) * : `"
          :type="'text'"
          :value="data.naf"
          v-model="data.naf"
        ></input-label-sample>

        <!-- sector -->
        <input-frame-add-multiple
          :themeColor="themeColor"
          :textLabel="'Ajouter un secteur'"
          :placeholder="'Nom du secteur'"
          :isAddEntity.sync="isAddEntity"
          :sendData="sendData.sectors"
        ></input-frame-add-multiple>

        <!-- see errors -->
        <error-basic :error="errors"></error-basic>

        <!-- btn for form and btn reset for clear all input -->
        <div class="box_btn_form_create_company">
          <button-sample
            :smallBtn="true"
            :textBtn="'Effacer'"
            v-on:click="resetInput"
            :themeColor="themeColor"
          ></button-sample>
          <button-app :mini="true" :textBtn="'Créer'" :themeColor="themeColor"></button-app>
        </div>
      </div>
    </form>

    <!-- text info for form -->
    <text-info-form :text="'* Champs obligatoire'" :themeColor="themeColor"></text-info-form>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/Buttons/ButtonApp.vue";
import ErrorBasic from "../../../Elements/ErrorBasic.vue";
import InputFrameAddMultiple from "../../../Elements/Inputs/InputFrameAddMultiple.vue";
import InputLabelSample from "../../../Elements/Inputs/Input-label-sample.vue";
import ButtonSample from "../../../Elements/Buttons/ButtonSample.vue";
import TextInfoForm from "../../../Elements/TextInfoForm";
import { AlertQuickly } from "../../../../lib/SwalAlert";
import TitleCards from "../../../Elements/TitleCards.vue";

export default {
  components: {
    ButtonApp,
    ErrorBasic,
    InputLabelSample,
    InputFrameAddMultiple,
    ButtonSample,
    TextInfoForm,
    TitleCards,
  },
  name: "CreateCompanyForm",
  props: {
    cbgBox: String,
    themeColor: Object,
    errors: Array,
    btnm: String,
    stateActif: String,
    idCurrentUser: String,
  },
  data() {
    return {
      isAddEntity: false,
      //data for send api for create company
      sendData: {
        company: Object,
        sectors: [],
      },
      //for company
      data: {
        name: "",
        filliale: "",
        siret: "",
        naf: "",
        phoneNumber: "",
        address: {
          street: "",
          postCode: "",
          city: "",
        },
        state: this.stateActif,
        admin: this.idCurrentUser,
      },
    };
  },
  watch: {
    //observable for check new error
    errors(value) {
      this.errors = value;
    },
  },
  methods: {
    //data in input send in api for create entreprise
    async createCompanyInBdd() {
      try {
        //create one object for send and affect idUser and id state "actif"
        this.sendData.company = this.data;
        await this.$store.dispatch("Companies/createCompany", this.sendData);
        if (this.$store.getters["Error/errors"].length > 0)
          throw "Une Erreur est survenue au moment de la création d'une entreprise";
        this.resetInput();

        //if success show alert custom
        this.$swal.fire(AlertQuickly("center", "success", `Entreprise créé avec succès`, 2000));
      } catch (e) {
        //add error
        this.$store.commit("Error/addError", e);

        //if error pop up for see error
        this.$swal.fire(AlertQuickly("center", "error", this.errors[0], 2000));
      }
    },

    //reset input and clear capture user
    resetInput() {
      //reset error if exist error
      this.isAddEntity = true;
      this.$store.commit("Error/resetError");
      this.nbrInputSector = [];
      this.countSector = 0;
      this.sendData.company = null;
      this.sendData.sectors = [];
      this.data.name = "";
      this.data.address.street = "";
      this.data.address.postCode = "";
      this.data.address.city = "";
      this.data.filliale = "";
      this.data.siret = "";
      this.data.naf = "";
      this.data.state = this.stateActif;
      this.data.admin = this.idCurrentUser;
      this.data.phoneNumber = "";
    },
  },

  destroyed() {
    //reset error if exist error
    this.$store.commit("Error/resetError");
  },
};
</script>

<style></style>
