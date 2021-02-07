<template>
  <div class="stxm-r">
    <div class="box" :class="themeColor.cbgCard">
      <title-cards :themeColor="themeColor" :title="'Création salarié'"></title-cards>
      <form @submit.prevent="createUser" class="form_create_company">
        <!-- block 1 -->
        <div class="block_input_create_company">
          <!-- roles -->
          <v-select
            :themeColor="themeColor"
            :textLabel="'Attribuer un rôle * : '"
            :options="libellesRoles"
            v-model="dataUser.role"
          ></v-select>

          <!-- civility -->
          <v-select
            :themeColor="themeColor"
            :textLabel="'Civilité * : '"
            :options="civi"
            v-model="dataUser.civility"
          ></v-select>

          <!-- lastName -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`DUPONT`"
            :required="true"
            :textLabel="`Nom * : `"
            :type="'text'"
            :value="dataUser.name.lastName"
            v-model="dataUser.name.lastName"
          ></input-label-sample>

          <!-- firstName -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Jean`"
            :required="true"
            :textLabel="`Prénom * : `"
            :type="'text'"
            :value="dataUser.name.firstName"
            v-model="dataUser.name.firstName"
          ></input-label-sample>

          <!-- email -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`jeandupond@mail.com`"
            :required="true"
            :textLabel="`Adresse e-mail * : `"
            :type="'text'"
            :value="dataUser.email"
            v-model="dataUser.email"
          ></input-label-sample>

          <!-- phone Number -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`jeandupond@mail.com`"
            :required="false"
            :textLabel="`Téléphone : `"
            :type="'text'"
            :value="dataUser.phoneNumber"
            v-model="dataUser.phoneNumber"
          ></input-label-sample>

          <!-- register number -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Matricule`"
            :required="false"
            :textLabel="`Renseigner le numéro de matricule : `"
            :type="'text'"
            :value="dataUser.registerNumber"
            v-model="dataUser.registerNumber"
          ></input-label-sample>
        </div>

        <!-- bock 2 -->
        <div class="block_input_create_company">
          <!-- street -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`15 grande rue`"
            :required="false"
            :textLabel="`Adresse : `"
            :type="'text'"
            :value="dataUser.address.street"
            v-model="dataUser.address.street"
          ></input-label-sample>

          <!-- code post -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`75000`"
            :required="false"
            :textLabel="`Code postal : `"
            :type="'text'"
            :value="dataUser.address.postCode"
            v-model="dataUser.address.postCode"
          ></input-label-sample>

          <!-- city -->
          <input-label-sample
            :themeColor="themeColor"
            :placeholder="`Paris`"
            :required="false"
            :textLabel="`Ville : `"
            :type="'text'"
            :value="dataUser.address.city"
            v-model="dataUser.address.city"
          ></input-label-sample>

          <!-- trades -->
          <v-select
            :themeColor="themeColor"
            :textLabel="'Attribuer un métier : '"
            :options="libelleTrades"
            v-model="dataUser.trade"
          ></v-select>

          <!-- leader -->
          <v-select
            :themeColor="themeColor"
            :textLabel="'Attribuer un chef de secteur : '"
            :options="employeeForLeader"
            v-model="dataUser.leader"
          ></v-select>

          <!-- sectors -->
          <v-select
            :themeColor="themeColor"
            :textLabel="'Attribuer un secteur : '"
            :options="libellesSectors"
            v-model="dataUser.sector"
          ></v-select>

          <!-- see error -->
          <error-basic :error="errors"></error-basic>

          <!-- btn -->
          <div class="box_btn_update_info_company">
            <button-app :themeColor="themeColor" :mini="true" :textBtn="'Créer'"></button-app>
          </div>
        </div>
      </form>

      <!-- text info for form -->
      <text-info-form :text="'* Champs Obligatoire'" :themeColor="themeColor"></text-info-form>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../../Elements/Buttons/ButtonApp.vue";
import ErrorBasic from "../../Elements/ErrorBasic.vue";
import TitleCards from "../../Elements/TitleCards.vue";
import VSelect from "../../Elements/vue-bootstrap-select";
import InputLabelSample from "../../Elements/Inputs/InputLabelSample";
import TextInfoForm from "../../Elements/TextInfoForm.vue";

export default {
  components: { VSelect, ButtonApp, ErrorBasic, TitleCards, InputLabelSample, TextInfoForm },
  name: "SeeCompanyCreateUser",
  props: {
    idCompaniesSelected: String,
    currentUser: Object,
    roles: Array,
    civ: Array,
    sectorsCompanySelected: Array,
    employeesCompanySelected: Array,
    trades: Array,
    errors: Array,
    themeColor: Object,
  },
  created() {
    this.$route.query.referent ? (this.dataUser.role = "référent") : (this.dataUser.role = "");
  },
  updated() {},
  data() {
    return {
      dataUser: {
        civility: "M.",
        name: {
          lastName: "",
          firstName: "",
        },
        address: {
          street: "",
          postCode: "",
          city: "",
        },
        pwd: "",
        email: "",
        phoneNumber: "",
        registerNumber: "",
        role: String,
        company: this.idCompaniesSelected,
        trade: "Choisissez un métier",
        leader: "Choisissez un chef de secteur",
        sector: "Choisissez un secteur",
      },
    };
  },
  computed: {
    //recover datas for selected
    libellesRoles() {
      const tab = this.roles.map((el) => el.libelle);
      //check if create user with role referent
      if (this.$route.query.referent) {
        this.dataUser.role = "référent";
        return tab;
      } else {
        this.dataUser.role = "Choisissez un rôle";
        return ["Choisissez un rôle", ...tab];
      }
    },
    libellesSectors() {
      const tab = this.sectorsCompanySelected.map((el) => el.libelle);
      return ["Choisissez un secteur", ...tab];
    },
    libelleTrades() {
      const tab = this.trades.map((el) => el.libelle);
      return ["Choisissez un métier", ...tab];
    },
    employeeForLeader() {
      const tab = this.employeesCompanySelected.map((el) => `${el.name.firstName} ${el.name.lastName}`);
      return ["Choisissez un chef de secteur", ...tab];
    },
    civi() {
      return this.civ.map((el) => el);
    },
  },
  methods: {
    //create new user for company selected
    createUser() {
      if (this.dataUser.role !== "Choisissez un rôle") {
        //recover all id of new user
        this.getIdLeader();
        this.getIdRole();
        this.getIdSector();
        this.getIdTrade();

        //call api
        this.$store.dispatch("Employees/createEmployeeCompanySelected", this.dataUser);

        //message succes and reset champs input
        this.$swal.fire({
          icon: "success",
          title: `Création réussis`,
          text: `Un email a été envoyé à l'adresse suivante : ${this.dataUser.email} pour validation du compte`,
        });
        this.resetInput();
      } else {
        //pop if role is not exist
        this.$swal.fire({
          icon: "error",
          title: "Veuillez renseignez un rôle",
          text: "Le rôle est obligatoire, pour le bon fonctionnement de l'application",
        });
      }
    },

    //reset champs
    resetInput() {
      this.dataUser = {
        civility: "Mr",
        name: {
          lastName: "",
          firstName: "",
        },
        address: {
          street: "",
          postCode: "",
          city: "",
        },
        pwd: "",
        email: "",
        phoneNumber: "",
        registerNumber: "",
        role: "Choisissez un rôle",
        company: this.idCompaniesSelected,
        trade: "Choisissez un métier",
        leader: "Choisissez un chef de secteur",
        sector: "Choisissez un secteur",
      };
    },

    //get id of trade of new user
    getIdTrade() {
      if (this.dataUser.trade !== "Choisissez un métier") {
        const { _id } = this.trades.find((el) => el.libelle === this.dataUser.trade);
        this.dataUser.trade = _id;
      } else {
        this.dataUser.trade = null;
      }
    },

    //get id of sector of new user
    getIdSector() {
      if (this.dataUser.sector !== "Choisissez un secteur") {
        const { _id } = this.sectorsCompanySelected.find((el) => el.libelle === this.dataUser.sector);
        this.dataUser.sector = _id;
      } else {
        this.dataUser.sector = null;
      }
    },

    //get id of role of new user
    getIdRole() {
      if (this.dataUser.role !== "Choisissez un rôle") {
        const { _id } = this.roles.find((el) => el.libelle === this.dataUser.role);
        this.dataUser.role = _id;
      } else {
        this.dataUser.role = null;
      }
    },

    //get id of user leader of new user
    getIdLeader() {
      if (this.dataUser.leader !== "Choisissez un chef de secteur") {
        const { _id } = this.employeesCompanySelected.find(
          (el) => el.name.firstName === this.dataUser.leader.split(" ")[0]
        );
        this.dataUser.leader = _id;
      } else {
        this.dataUser.leader = null;
      }
    },
  },
};
</script>

<style></style>
