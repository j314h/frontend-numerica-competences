<template>
  <div class="stxm-r" :class="currentUser.themeColor.colorTextTab">
    <form @submit.prevent="updateCompany">
      <div class="box_info_company">
        <!-- info personel company-->
        <div class="info_company">
          <!-- name company -->
          <div>
            <label>Dénomination sociale * :</label>
            <input class="input" type="text" v-model="dataForm.data.name" required />
          </div>

          <!-- street -->
          <div>
            <label>Adresse * :</label>
            <input class="input" type="text" v-model="dataForm.data.address.street" required />
          </div>
          <div>
            <label>Code postal * :</label>
            <input class="input" type="text" v-model="dataForm.data.address.postCode" required />
          </div>
          <div>
            <label>Ville * :</label>
            <input class="input" type="text" v-model="dataForm.data.address.city" required />
          </div>

          <!-- phone number -->
          <div>
            <label>Numero de téléphone * :</label>
            <input class="input" type="text" v-model="dataForm.data.phoneNumber" required />
          </div>
        </div>
        <!-- info detail -->
        <div class="info_company">
          <!-- siret -->
          <div>
            <label>Numéro de Siret * :</label>
            <input class="input" type="text" v-model="dataForm.data.siret" required />
          </div>

          <!-- naf -->
          <div>
            <label>Code NAF * :</label>
            <input class="input" type="text" v-model="dataForm.data.naf" required />
          </div>

          <!-- fillale -->
          <div>
            <label>Site de production - Filliale :</label>
            <input class="input" type="text" v-model="dataForm.data.filliale" />
          </div>

          <!-- state for company selected-->
          <div v-if="currentUser.role.libelle === 'root' || currentUser.role.libelle === 'administrateur'">
            <label>Etat * :</label>
            <v-select class="select" :options="libellesState" v-model="dataForm.data.state"></v-select>
          </div>

          <!-- sectors -->
          <div class="box_sectors">
            <label>Secteur : </label>
            <div class="input_sector" v-for="(sector, i) in dataForm.sectors" :key="i">
              <input class="input" v-model="sector.libelle" />
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
          <div>
            <div class="box_btn_add_input">
              <label>Ajoutez un secteur</label>
              <!-- btn for add input -->
              <button class="btn_add_input" @click.prevent="addInputSector">
                <svg
                  class="addbtn"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.7499C5.16751 18.7499 1.25 14.8324 1.25 9.99994C1.25 5.16745 5.16751 1.24994 10 1.24994C14.8325 1.24994 18.75 5.16745 18.75 9.99994C18.75 12.3206 17.8281 14.5462 16.1872 16.1871C14.5462 17.8281 12.3206 18.7499 10 18.7499ZM10.625 9.37493H15.1063C15.4515 9.37493 15.7313 9.65475 15.7313 9.99993C15.7313 10.3451 15.4515 10.6249 15.1063 10.6249H10.625V15.1062C10.625 15.4514 10.3452 15.7312 10 15.7312C9.65487 15.7312 9.37505 15.4514 9.37505 15.1062V10.6249H4.8938C4.54862 10.6249 4.2688 10.3451 4.2688 9.99993C4.2688 9.65475 4.54862 9.37493 4.8938 9.37493H9.37505V4.89368C9.37505 4.5485 9.65487 4.26868 10 4.26868C10.3452 4.26868 10.625 4.5485 10.625 4.89368V9.37493Z"
                    fill="#4c39e9"
                  />
                </svg>
              </button>
            </div>
            <div class="input_sector" v-for="(input, i) in nbrInputSector" :key="i">
              <input class="input" v-model="dataForm.newSectors[i]" />
              <!-- btn delete input -->
              <button class="box_delete_input" @click.prevent="deleteSector(i)">
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

          <!-- errors -->
          <error-basic class="box_error" :error="errors"></error-basic>

          <!-- submit -->
          <div class="box_btn">
            <button-app :mini="true" :textBtn="'Modifier'"></button-app>
          </div>
        </div>
      </div>
      <div>
        <p class="stxs-r text_info">* Champs obligatoire</p>
        <!-- <p></p> version 2 if you need to add a specific info -->
      </div>
    </form>
    <div class="box_btn_delete">
      <button-delete
        :entityDelete="'Companies'"
        :idDelete="companySelected._id"
        :textBtn="'Supprimer l\'entreprise'"
      ></button-delete>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/Buttons/ButtonApp";
import ButtonDelete from "../../../Elements/Buttons/ButtonDelete.vue";
import ErrorBasic from "../../../Elements/ErrorBasic";
import VSelect from "../../../Elements/vue-bootstrap-select";

export default {
  name: "CompanySelectedInfoUpdate",
  components: { ButtonApp, ErrorBasic, VSelect, ButtonDelete },
  props: {
    currentUser: Object,
    errors: Array,
    companySelected: Object,
    sectorsCompanySelected: Array,
    states: Array,
  },
  data() {
    return {
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

        //if success show alert custom and close window update
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Company is updating",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$parent.updateCompany();
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
};
</script>

<style lang="scss" scoped>
label {
  display: block;
}
p {
  margin: 7px 0;
}
.subscrite_title {
  padding-bottom: 30px;
}
.box_info_company {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box_info_company input {
  margin: 10px 0 20px 0;
}
.box_info_company .info_company:nth-child(1) {
  min-width: 300px;
  flex: 1;
  padding: 0 30px;
}
.box_info_company .info_company:nth-child(2) {
  min-width: 300px;
  flex: 1;
  padding: 0 30px;
}
.box_sectors {
  margin: 10px 0 20px 0;
}
.select {
  margin: 10px 0 30px 0;
  width: 80%;
}
/**btn add input */
.btn_add_input {
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 20px;
}
.addbtn:hover path {
  background-color: #f84210;
  fill: #f84210;
}
.box_btn_add_input {
  display: flex;
}
.input_sector {
  display: flex;
  align-items: center;
}
.box_delete_input {
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  display: block;
}
.btn_delete_input:hover path {
  fill: #db0000;
}

/********************* */
.box_btn {
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin-top: 0px;
}
.box_error {
  margin: 10px 0;
}
.text_info {
  color: #000;
  margin: 10px 0 40px 0;
}
.box_btn_delete {
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
}
</style>
