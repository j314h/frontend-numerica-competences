<template>
  <div class="stxm-r">
    <div class="box" :class="currentUser.themeColor.cbgBox">
      <div class="header">
        <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Création salarié</h3>
      </div>
      <form @submit.prevent="createUser">
        <!-- block 1 -->
        <div class="block_left">
          <!-- roles -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Attribuer un rôle * : </label>
            <v-select class="select" :options="libellesRoles" v-model="dataUser.role"></v-select>
          </div>

          <!-- civility -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Civilité * : </label>
            <v-select class="select" :options="civi" v-model="dataUser.civility"></v-select>
          </div>

          <!-- lastName -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Nom * : </label>
            <input class="input" v-model="dataUser.name.lastName" placeholder="JEAN" required />
          </div>

          <!-- firstName -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Prénom * : </label>
            <input class="input" v-model="dataUser.name.firstName" placeholder="Dupont" required />
          </div>

          <!-- email -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Adresse e-mail * : </label>
            <input class="input" v-model="dataUser.email" placeholder="jeandupond@mail.com" required />
          </div>

          <!-- phone Number -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Téléphone :</label>
            <input class="input" v-model="dataUser.phoneNumber" placeholder="Téléphone mobile ou bureau" />
          </div>

          <!-- register number -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Renseigner le numéro de matricule : </label>
            <input class="input" v-model="dataUser.registerNumber" placeholder="Matricule" />
          </div>
        </div>

        <!-- bock 2 -->
        <div class="block_right">
          <!-- street -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Adresse : </label>
            <input class="input" v-model="dataUser.address.street" placeholder="15 grande rue" />
          </div>

          <!-- code post -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Code postal :</label>
            <input class="input" v-model="dataUser.address.postCode" placeholder="75000" />
          </div>

          <!-- city -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Ville :</label>
            <input class="input" v-model="dataUser.address.city" placeholder="Paris" />
          </div>

          <!-- trades -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Attribuer un métier :</label>
            <v-select class="select" :options="libelleTrades" v-model="dataUser.trade"></v-select>
          </div>

          <!-- leader -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Attribuer un chef de secteur :</label>
            <v-select class="select" :options="employeeForLeader" v-model="dataUser.leader"></v-select>
          </div>

          <!-- sectors -->
          <div>
            <label :class="currentUser.themeColor.colorTextTab">Attribuer un secteur :</label>
            <v-select class="select" :options="libellesSectors" v-model="dataUser.sector"></v-select>
          </div>

          <error-content :error="errors"></error-content>

          <!-- btn -->
          <div class="btn_submit">
            <button-app class="btn_sub" :mini="true" :textBtn="'Créer'"></button-app>
          </div>
        </div>
      </form>

      <!-- text info formulaire -->
      <div>
        <p class="stxs-r text_info">* Champs obligatoire</p>
        <!-- <p></p> version 2 if you need to add a specific info -->
      </div>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../../Elements/ButtonApp.vue";
import ErrorContent from "../../Elements/ErrorContent.vue";
import vSelect from "../../Elements/vue-bootstrap-select";

export default {
  components: { vSelect, ButtonApp, ErrorContent },
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
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
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

<style lang="scss" scoped>
label {
  display: block;
  margin-bottom: 10px;
}
form {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.select {
  margin: 10px 0 30px 0;
  width: 80%;
}
.block_left {
  width: 450px;
}
.block_left div {
  margin-bottom: 40px;
}
.block_right {
  width: 450px;
}
.block_right div {
  margin-bottom: 40px;
}
.btn_submit {
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin-top: 0px;
}
.btn_sub {
  margin-left: 20px;
  margin-bottom: 0px !important;
}
.text_info {
  margin: 100px 0 0 0;
}
</style>
