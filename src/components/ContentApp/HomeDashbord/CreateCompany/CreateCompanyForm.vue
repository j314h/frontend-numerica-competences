<template>
  <div class="box global_box" :class="user.themeColor.cbgBox">
    <h3 class="stxxm-m title" :class="user.themeColor.colorTextTab">Creation entreprise</h3>
    <!-- form -->
    <form @submit.prevent="createCompanyInBdd">
      <!-- block left -->
      <div class="block_left">
        <!-- name -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez la dénomination sociale *</label>
          <input class="input" type="text" v-model="data.name" required />
        </div>
        <!-- street -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez le numéro et la rue *</label>
          <input class="input" type="text" v-model="data.address.street" required />
        </div>
        <!-- code post -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez le code postal *</label>
          <input class="input" type="text" v-model="data.address.codePost" required />
        </div>
        <!-- city -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez la ville *</label>
          <input class="input" type="text" v-model="data.address.city" required />
        </div>
        <!-- phoneNumber -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez le numéro de téléphone *</label>
          <input class="input" type="text" v-model="data.phoneNumber" required />
        </div>
      </div>
      <!-- block right -->
      <div class="block_right">
        <!-- filliale -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez le site de production ou la filliale *</label>
          <input class="input" type="text" v-model="data.filliale" required />
        </div>
        <!-- siret -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez le numéro de siret *</label>
          <input class="input" type="text" v-model="data.siret" required />
        </div>
        <!-- naf -->
        <div>
          <label :class="user.themeColor.colorTextTab">Renseignez le code NAF (ou APE) *</label>
          <input class="input" type="text" v-model="data.naf" required />
        </div>
        <!-- sector -->
        <div>
          <div class="box_btn_add_input">
            <label :class="user.themeColor.colorTextTab">Ajoutez un secteur</label>
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
            <input class="input" v-model="sendData.sectors[i]" />
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
        <!-- gestion errors -->
        <div>
          <error-content v-for="(error, i) in errors" :key="i" :error="error"></error-content>
        </div>
        <!-- btn for form -->
        <div class="btn_submit">
          <!-- btn reset for clear all input -->
          <button @click.prevent="resetInput" :class="user.themeColor.btnm">Effacer</button>
          <button-app class="btn_sub" :mini="true" :textBtn="'Créer'"></button-app>
        </div>
      </div>
    </form>
    <div>
      <p class="stxs-r text_info">* ce champs est obligatoire</p>
      <!-- <p></p> version 2 if you need to add a specific info -->
    </div>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/ButtonApp.vue";
import ErrorContent from "../../../Elements/ErrorContent.vue";

export default {
  components: { ButtonApp, ErrorContent },
  name: "CreateCompanyForm",
  data() {
    return {
      nbrInputSector: [],
      countSector: 0,
      //for see input add sector
      isAddSector: false,
      //data for send api for create company
      sendData: {
        company: null,
        sectors: [],
      },
      //for company
      data: {
        name: "",
        address: {
          street: "",
          codePost: "",
          city: "",
        },
        filliale: "",
        siret: "",
        naf: "",
        state: "",
        admin: "",
        phoneNumber: "",
        state: "",
      },
    };
  },
  computed: {
    user() {
      return (this.data.admin = this.$store.getters["UserConnect/currentUser"]);
    },
    //recover id for current user
    idUser() {
      return (this.data.admin = this.$store.getters["UserConnect/currentUser"]._id);
    },
    //recover object state of bdd with libelle actif
    stateActif() {
      if (this.$store.getters["States/states"]) {
        const stateActif = this.$store.getters["States/states"].find((el) => el.libelle === "actif");
        return (this.data.state = stateActif._id);
      }
    },
    //recover error in company store
    errors() {
      return this.$store.getters["Companies/errors"];
    },
  },
  methods: {
    //data in input send in api for create entreprise
    async createCompanyInBdd() {
      try {
        //create one object for send and affect idUser and id state "actif"
        this.sendData.company = this.data;
        this.sendData.company.admin = this.idUser;
        this.sendData.company.state = this.stateActif;
        const response = await this.$store.dispatch("Companies/createCompany", this.sendData);
        if (this.$store.getters["Companies/errors"].length > 0)
          throw "Une Erreur est survenue au moment de la création d'une entreprise";
        this.resetInput();
        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "L'entreprise à bien été enregistré",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (e) {
        //for debug
        console.log("createCompanyInBdd ~ e", e);
        //if error pop up for see error
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$store.getters["Companies/errors"][0],
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    //count in fack tab for simulate loop in template for created input for sectors
    //+ insert new input in template (in DOM)
    addInputSector() {
      this.countSector += 1;
      this.nbrInputSector.push(this.countSector);
    },
    //delete input in template and delete value and fack value in array
    deleteSector(i) {
      this.nbrInputSector.splice(i, 1);
      this.sendData.sectors.splice(i, 1);
    },
    //reset input and clear capture user
    resetInput() {
      //reset error if exist error
      this.$store.commit("Companies/resetErrors");
      this.nbrInputSector = [];
      this.countSector = 0;
      this.isAddSector = false;
      this.sendData.company = null;
      this.sendData.sectors = [];
      this.sendData.idUser = null;
      this.data.name = "";
      this.data.address.street = "";
      this.data.address.codePost = "";
      this.data.address.city = "";
      this.data.filliale = "";
      this.data.siret = "";
      this.data.naf = "";
      this.data.state = this.stateActif;
      this.data.admin = this.idUser;
      this.data.phoneNumber = "";
    },
  },
  destroyed() {
    //reset error if exist error
    this.$store.commit("Companies/resetErrors");
  },
};
</script>

<style lang="scss" scoped>
label {
  display: block;
}
form {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
input {
  margin-top: 10px;
}
.global_box {
  max-width: 1000px;
  margin: 0 auto;
}
.title {
  margin-bottom: 30px;
}
.block_left {
  width: 450px;
}
.block_left div {
  margin-bottom: 20px;
}
.block_right {
  width: 450px;
}
.block_right div {
  margin-bottom: 20px;
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
/**btn submit */
.btn_submit {
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin-top: 100px;
}
.btn_sub {
  margin-left: 20px;
  margin-bottom: 0px !important;
}
/********************* */
.text_info {
  margin: 100px 0 0 0;
}
</style>
