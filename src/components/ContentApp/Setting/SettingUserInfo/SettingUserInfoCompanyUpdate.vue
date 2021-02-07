<template>
  <div class="stxm-r">
    <form @submit.prevent="updateCompany" class="box_info_detail_user_update">
      <!-- info personel company-->
      <div class="item_user_update">
        <!-- name company -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`Nom de l'entreprise`"
          :required="true"
          :textLabel="`Dénomination sociale * : `"
          :type="'text'"
          :value="dataForm.data.name"
          v-model="dataForm.data.name"
        ></input-label-sample>

        <!-- street -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`15 Grande rue`"
          :required="true"
          :textLabel="`Adresse * : `"
          :type="'text'"
          :value="dataForm.data.address.street"
          v-model="dataForm.data.address.street"
        ></input-label-sample>

        <!-- post code -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`75000`"
          :required="true"
          :textLabel="`Code postal * : `"
          :type="'text'"
          :value="dataForm.data.address.postCode"
          v-model="dataForm.data.address.postCode"
        ></input-label-sample>

        <!-- city -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`Paris`"
          :required="true"
          :textLabel="`Ville * : `"
          :type="'text'"
          :value="dataForm.data.address.city"
          v-model="dataForm.data.address.city"
        ></input-label-sample>

        <!-- phone number -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`Téléphone mobile ou bureau`"
          :required="true"
          :textLabel="`Numéro de téléphone * : `"
          :type="'text'"
          :value="dataForm.data.phoneNumber"
          v-model="dataForm.data.phoneNumber"
        ></input-label-sample>
      </div>

      <!-- info detail -->
      <div class="item_user_update">
        <!-- siret -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`14 chiffres`"
          :required="true"
          :textLabel="`Numéro de siret * : `"
          :type="'text'"
          :value="dataForm.data.siret"
          v-model="dataForm.data.siret"
        ></input-label-sample>

        <!-- naf -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`85.7A`"
          :required="true"
          :textLabel="`Code NAF * : `"
          :type="'text'"
          :value="dataForm.data.naf"
          v-model="dataForm.data.naf"
        ></input-label-sample>

        <!-- fillale -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`85.7A`"
          :required="false"
          :textLabel="`Site de production - Filliale : `"
          :type="'text'"
          :value="dataForm.data.filliale"
          v-model="dataForm.data.filliale"
        ></input-label-sample>

        <!-- sectors -->
        <div class="box_sectors">
          <label class="label-sample stxm-m" :class="currentUser.themeColor.label">Secteur : </label>
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
          :themeColor="currentUser.themeColor"
          :textLabel="'Ajouter un secteur'"
          :placeholder="'Nom du secteur'"
          :isAddEntity.sync="isAddEntity"
          :sendData="dataForm.newSectors"
        ></input-frame-add-multiple>

        <!-- errors -->
        <error-basic :error="errors"></error-basic>

        <!-- submit -->
        <div class="box_btn_user_update">
          <button-app :themeColor="currentUser.themeColor" :mini="true" :textBtn="'Modifier'"></button-app>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/Buttons/ButtonApp.vue";
import ErrorBasic from "../../../Elements/ErrorBasic.vue";
import InputLabelSample from "../../../Elements/Inputs/InputLabelSample.vue";
import InputFrameAddMultiple from "../../../Elements/Inputs/InputFrameAddMultiple.vue";
import InputSample from "../../../Elements/Inputs/InputSample.vue";

export default {
  components: { ButtonApp, ErrorBasic, InputLabelSample, InputFrameAddMultiple, InputSample },
  name: "SettingUserInfoCompanyUpdate",
  props: {
    currentUserCompany: Object,
    sectorsCompanyCurrentUser: Array,
    currentUser: Object,
    errors: Array,
    isUpdateCompany: Boolean,
  },
  data() {
    return {
      nbrInputSector: [],
      countSector: 0,
      isAddEntity: false,
      //data for request update company's user
      dataForm: {
        data: {
          name: this.currentUserCompany.name,
          filliale: this.currentUserCompany.filliale,
          siret: this.currentUserCompany.siret,
          naf: this.currentUserCompany.naf,
          phoneNumber: this.currentUserCompany.phoneNumber,
          address: {
            street: this.currentUserCompany.address.street,
            postCode: this.currentUserCompany.address.postCode,
            city: this.currentUserCompany.address.city,
          },
          state: this.currentUserCompany.state,
        },
        _id: this.currentUserCompany._id,
        sectors: this.sectorsCompanyCurrentUser.map((el) => ({ ...el })),
        newSectors: [],
      },
    };
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
      this.$store.dispatch("Sectors/deleteSectorCurrentUser", sector);
    },

    //call api for update company's user
    async updateCompany() {
      try {
        //reset error
        this.$store.commit("Error/resetError");

        //call api for update company
        await this.$store.dispatch("CurrentUser/updateCurrentUserCompany", this.dataForm);

        //if success show alert custom and close window update
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Company is updating",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$emit("update:isUpdateCompany", !this.isUpdateCompany);
      } catch (error) {
        //add error
        this.$store.commit("Error/addError", error);

        //if error show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: e.response ? e.response.data.message : e.message, //if throw error see your error in throw
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  computed: {},
};
</script>

<style></style>
