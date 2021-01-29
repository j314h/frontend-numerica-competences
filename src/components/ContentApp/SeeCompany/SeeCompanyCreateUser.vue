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
            <label>Attribuer un rôle *</label>
            <v-select class="select" :options="libellesRoles" v-model="dataUser.role"></v-select>
          </div>

          <!-- civility -->
          <div>
            <label>Renseigner la civilité *</label>
            <v-select class="select" :options="civi" v-model="dataUser.civility"></v-select>
          </div>

          <!-- lastName -->
          <div>
            <label>Renseigner le nom *</label>
            <input class="input" v-model="dataUser.name.lastName" placeholder="Nom" required />
          </div>

          <!-- firstName -->
          <div>
            <label>Renseigner le prénom *</label>
            <input class="input" v-model="dataUser.name.firstName" placeholder="Prénom" required />
          </div>

          <!-- email -->
          <div>
            <label>Renseigner l'adresse e-mail *</label>
            <input class="input" v-model="dataUser.email" placeholder="Email" required />
          </div>

          <!-- phone Number -->
          <div>
            <label>Renseigner le numéro de téléphone</label>
            <input class="input" v-model="dataUser.phoneNumber" placeholder="Téléphone mobile ou bureau" />
          </div>

          <!-- register number -->
          <div>
            <label>Renseigner le numéro de matricule</label>
            <input class="input" v-model="dataUser.registerNumber" placeholder="Téléphone mobile ou bureau" />
          </div>
        </div>

        <!-- bock 2 -->
        <div class="block_right">
          <!-- street -->
          <div>
            <label>Renseigner le numéro et la rue</label>
            <input class="input" v-model="dataUser.address.street" placeholder="Adresse (ex: 15 grande rue)" />
          </div>

          <!-- code post -->
          <div>
            <label>Renseigner le code postal</label>
            <input class="input" v-model="dataUser.address.postCode" placeholder="Code postal" />
          </div>

          <!-- city -->
          <div>
            <label>Renseigner la ville</label>
            <input class="input" v-model="dataUser.address.city" placeholder="Ville" />
          </div>

          <!-- trades -->
          <div>
            <label>Attribuer un métier</label>
            <v-select class="select" :options="libelleTrades" v-model="dataUser.trade"></v-select>
          </div>

          <!-- leader -->
          <div>
            <label>Attribuer un chef de secteur</label>
            <v-select class="select" :options="employeeForLeader" v-model="dataUser.leader"></v-select>
          </div>

          <!-- sectors -->
          <div>
            <label>Attribuer un secteur</label>
            <v-select class="select" :options="libellesSectors" v-model="dataUser.sector"></v-select>
          </div>

          <!-- btn -->
          <div class="btn_submit">
            <button-app class="btn_sub" :mini="true" :textBtn="'Créer'"></button-app>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../../Elements/ButtonApp.vue";
import vSelect from "../../Elements/vue-bootstrap-select";

export default {
  components: { vSelect, ButtonApp },
  name: "SeeCompanyCreateUser",
  props: {
    idCompaniesSelected: String,
    currentUser: Object,
    roles: Array,
    civ: Array,
    sectorsCompanySelected: Array,
    employeesCompanySelected: Array,
    trades: Array,
  },
  data() {
    return {
      dataUser: {
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
      },
    };
  },
  computed: {
    //recover datas for selected
    libellesRoles() {
      const tab = this.roles.map((el) => el.libelle);
      return ["Choisissez un rôle", ...tab];
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
      //recover id of new user
      this.getIdLeader();
      this.getIdRole();
      this.getIdSector();
      this.getIdTrade();
      this.$store.dispatch("Employees/createEmployeeCompanySelected", this.dataUser);
      console.log(this.dataUser);
      this.resetInput();
    },

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

    //get id of sector of new leader
    getIdTrade() {
      if (this.dataUser.trade !== "Choisissez un métier") {
        const { _id } = this.trades.find((el) => el.libelle === this.dataUser.trade);
        this.dataUser.trade = _id;
      } else {
        this.dataUser.trade = null;
      }
    },

    //get id of sector of new leader
    getIdSector() {
      if (this.dataUser.sector !== "Choisissez un secteur") {
        const { _id } = this.sectorsCompanySelected.find((el) => el.libelle === this.dataUser.sector);
        this.dataUser.sector = _id;
      } else {
        this.dataUser.sector = null;
      }
    },

    //get id of role of new leader
    getIdRole() {
      if (this.dataUser.role !== "Choisissez un rôle") {
        const { _id } = this.roles.find((el) => el.libelle === this.dataUser.role);
        this.dataUser.role = _id;
      } else {
        this.dataUser.role = null;
      }
    },

    //get id of user leader of new leader
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
  margin-top: 30px;
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
  margin-top: 100px;
}
.btn_sub {
  margin-left: 20px;
  margin-bottom: 0px !important;
}
</style>
