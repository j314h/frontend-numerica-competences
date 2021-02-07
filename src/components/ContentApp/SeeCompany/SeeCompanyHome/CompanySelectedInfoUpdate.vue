<template>
  <div>
    <form @submit.prevent="updateCompany">
      <div class="form_update_company">
        <!-- info personel company-->
        <div class="block_input_create_company">
          <!-- name company -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Nom de l'entreprise`"
            :required="true"
            :textLabel="`Dénomination sociale * : `"
            :type="'text'"
            :value="dataForm.data.name"
            v-model="dataForm.data.name"
          ></input-label-sample>

          <!-- street -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`15 grande rue`"
            :required="true"
            :textLabel="`Adresse * : `"
            :type="'text'"
            :value="dataForm.data.address.street"
            v-model="dataForm.data.address.street"
          ></input-label-sample>

          <!-- code post -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`75000`"
            :required="true"
            :textLabel="`Code postal * : `"
            :type="'text'"
            :value="dataForm.data.address.postCode"
            v-model="dataForm.data.address.postCode"
          ></input-label-sample>

          <!-- city -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Paris`"
            :required="true"
            :textLabel="`Ville * : `"
            :type="'text'"
            :value="dataForm.data.address.city"
            v-model="dataForm.data.address.city"
          ></input-label-sample>

          <!-- phoneNumber -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Téléphone mobile ou bureau`"
            :required="true"
            :textLabel="`Numéro de téléphone * : `"
            :type="'text'"
            :value="dataForm.data.phoneNumber"
            v-model="dataForm.data.phoneNumber"
          ></input-label-sample>
        </div>

        <!-- info detail -->
        <div class="block_input_create_company">
          <!-- filliale -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Psa - Paris`"
            :required="false"
            :textLabel="`Site de production ou filliale : `"
            :type="'text'"
            :value="dataForm.data.filliale"
            v-model="dataForm.data.filliale"
          ></input-label-sample>

          <!-- siret -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Numéro composé de 14 chiffres`"
            :required="true"
            :textLabel="`Numéro de siret * : `"
            :type="'text'"
            :value="dataForm.data.siret"
            v-model="dataForm.data.siret"
          ></input-label-sample>

          <!-- naf -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`85.59A`"
            :required="true"
            :textLabel="`Code NAF (ou APE) * : `"
            :type="'text'"
            :value="dataForm.data.naf"
            v-model="dataForm.data.naf"
          ></input-label-sample>

          <!-- state for company selected-->
          <v-select
            v-if="currentUser.role.libelle === 'root' || currentUser.role.libelle === 'administrateur'"
            :themeColor="themeColor"
            :textLabel="'Etat * : '"
            :options="libellesState"
            v-model="dataForm.data.state"
          ></v-select>

          <!-- sectors -->
          <div class="box_sectors">
            <label class="label-sample stxm-m" :class="themeColor.label">Secteur : </label>
            <div class="input_sector_sample" v-for="(sector, i) in dataForm.sectors" :key="i">
              <input-sample
                :type="'text'"
                :placeholder="'Nom du secteur'"
                :required="false"
                :value="sector.libelle"
                v-model="sector.libelle"
              ></input-sample>
              <!-- btn delete input -->
              <button class="box_delete_input" @click.prevent="deleteSectorData(sector, i)">
                <svg
                  class="btn_delete_input"
                  width="20"
                  height="20"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.9999 2.22217C10.1815 2.22217 2.22217 10.1815 2.22217 19.9999C2.22217 29.8183 10.1815 37.7777 19.9999 37.7777C29.8183 37.7777 37.7777 29.8183 37.7777 19.9999C37.7777 15.285 35.9047 10.7631 32.5707 7.42916C29.2367 4.09518 24.7149 2.22217 19.9999 2.22217ZM19.9999 35.5555C11.4088 35.5555 4.44438 28.591 4.44438 19.9999C4.44438 11.4089 11.4088 4.44439 19.9999 4.44439C28.591 4.44439 35.5555 11.4089 35.5555 19.9999C35.5555 24.1255 33.9166 28.0822 30.9994 30.9994C28.0821 33.9166 24.1255 35.5555 19.9999 35.5555ZM13.3333 18.8888H26.6666C27.2803 18.8888 27.7777 19.3863 27.7777 19.9999C27.7777 20.6136 27.2803 21.1111 26.6666 21.1111H13.3333C12.7196 21.1111 12.2222 20.6136 12.2222 19.9999C12.2222 19.3863 12.7196 18.8888 13.3333 18.8888Z"
                    fill="#DB0000"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- add sectors -->
          <input-frame-add-multiple
            :themeColor="themeColor"
            :textLabel="'Ajouter un secteur'"
            :placeholder="'Nom du secteur'"
            :isAddEntity.sync="isAddEntity"
            :sendData="dataForm.newSectors"
          ></input-frame-add-multiple>

          <!-- errors -->
          <error-basic class="box_error" :error="errors"></error-basic>

          <!-- submit -->
          <div class="box_btn_update_info_company">
            <button-app :mini="true" :textBtn="'Modifier'" :themeColor="themeColor"></button-app>
          </div>
        </div>
      </div>
    </form>
    <!-- btn delete -->
    <div class="box_btn_delete_company">
      <button-delete
        :entityDelete="'Companies'"
        :idDelete="companySelected._id"
        :textBtn="'Supprimer l\'entreprise'"
      ></button-delete>
    </div>

    <!-- text info for form -->
    <text-info-form :text="'* Champs Obligatoire'" :themeColor="themeColor"></text-info-form>
  </div>
</template>

<script>
import InputLabelSample from "../../../Elements/Inputs/InputLabelSample";
import InputFrameAddMultiple from "../../../Elements/Inputs/InputFrameAddMultiple.vue";
import InputSample from "../../../Elements/Inputs/InputSample.vue";
import { AlertQuickly } from "../../../../lib/SwalAlert";

import ButtonApp from "../../../Elements/Buttons/ButtonApp";
import ButtonDelete from "../../../Elements/Buttons/ButtonDelete.vue";
import ErrorBasic from "../../../Elements/ErrorBasic";
import VSelect from "../../../Elements/vue-bootstrap-select";
import TextInfoForm from "../../../Elements/TextInfoForm.vue";

export default {
  name: "CompanySelectedInfoUpdate",
  components: {
    ButtonApp,
    ErrorBasic,
    VSelect,
    ButtonDelete,
    InputLabelSample,
    InputFrameAddMultiple,
    InputSample,
    TextInfoForm,
  },
  props: {
    currentUser: Object,
    errors: Array,
    companySelected: Object,
    sectorsCompanySelected: Array,
    states: Array,
    themeColor: Object,
    isUpdateCompany: Boolean,
  },
  data() {
    return {
      isAddEntity: false,
      nbrInputSector: [],
      countSector: 0,
      //data for request update company's user
      dataForm: {
        data: {
          name: this.companySelected.name,
          filliale: this.companySelected.filliale,
          siret: this.companySelected.siret,
          naf: this.companySelected.naf,
          phoneNumber: this.companySelected.phoneNumber,
          address: {
            street: this.companySelected.address.street,
            postCode: this.companySelected.address.postCode,
            city: this.companySelected.address.city,
          },
          state: this.companySelected.state.libelle,
        },
        _id: this.companySelected._id,
        sectors: this.sectorsCompanySelected.map((el) => ({ ...el })),
        newSectors: [],
      },
    };
  },
  computed: {
    libellesState() {
      return this.states.map((el) => el.libelle);
    },
  },
  methods: {
    //count in fack tab for simulate loop in template for created input for sectors
    //+ insert new input in template (in DOM)
    addInputSector() {
      this.countSector += 1;
      this.nbrInputSector.push(this.countSector);
    },
    //delete input in template and delete value and fack value in array
    deleteSector(i) {
      this.nbrInputSector.splice(i, 1);
      this.dataForm.newSectors.splice(i, 1);
    },

    deleteSectorData(sector, i) {
      this.dataForm.sectors.splice(i, 1);
      this.$store.dispatch("Sectors/deleteSectorCompanySelected", sector);
    },

    //call api for update company's user
    async updateCompany() {
      try {
        //reset error
        this.$store.commit("Error/resetError");

        //recover id for state selected
        const { _id } = this.states.find((el) => el.libelle === this.dataForm.data.state);
        this.dataForm.data.state = _id;

        //call api for update company
        await this.$store.dispatch("Companies/updateCompanySelected", this.dataForm);

        //if success show alert custom
        this.$swal.fire(AlertQuickly("center", "success", `Entreprise mise à jour`, 2000));
        this.$emit("update:isUpdateCompany", !this.isUpdateCompany);
      } catch (error) {
        //add error
        this.$store.commit("Error/addError", error);

        //if error pop up for see error
        this.$swal.fire(AlertQuickly("center", "error", this.errors[0], 2000));
      }
    },
  },
};
</script>

<style></style>
