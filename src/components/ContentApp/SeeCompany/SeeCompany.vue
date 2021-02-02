<template>
  <div>
    <transition appear name="fade" mode="out-in">
      <!-- view home -->
      <router-view
        :idCompaniesSelected="idCompaniesSelected"
        :companySelected="companySelected"
        :sectorsCompanySelected="sectorsCompanySelected"
        :currentUser="currentUser"
        :employeesCompanySelected="employeesCompanySelected"
        :imageUpdateCompany="imageUpdateCompany"
        :imageCloseUpdateCompany="imageCloseUpdateCompany"
        :authorization="authorization"
        :errors="errors"
        :states="states"
        :trades="trades"
        name="SeeCompanyHome"
      ></router-view>

      <!-- view create user -->
      <router-view
        :idCompaniesSelected="idCompaniesSelected"
        :currentUser="currentUser"
        :sectorsCompanySelected="sectorsCompanySelected"
        :employeesCompanySelected="employeesCompanySelected"
        :roles="roles"
        :civ="civ"
        :trades="trades"
        :errors="errors"
        name="SeeCompanyCreateUser"
      ></router-view>

      <!-- view create file work -->
      <router-view name="SeeCompanyCreateFileWork"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SeeCompany",
  data() {
    return {
      idCompaniesSelected: String,
      currentUser: Object,
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      nameImageUpdate: "logoUpdateElement",
      nameImageCloseUpdate: "logoCloseUpdateElement",
      roles: Array,
      civ: ["M.", "Mme"],
      authorization: ["root", "administrateur", "Référent"],
      trades: Array,
    };
  },
  created() {
    this.loadData();
  },
  beforeMount() {
    this.loadData();
  },
  updated() {
    this.loadData();
  },
  computed: {
    //this variable for change image pencil and X for update user and company
    imageUpdateCompany() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === this.nameImageUpdate);
        return `${this.urlApiImg}${fieldName}`;
      }
    },

    //this variable for change image pencil and X for update user and company
    imageCloseUpdateCompany() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === this.nameImageCloseUpdate);
        return `${this.urlApiImg}${fieldName}`;
      }
    },

    //recover employee of company selected
    employeesCompanySelected() {
      return this.$store.getters["Employees/employeesCompanySelected"];
    },

    //recover company selected
    companySelected() {
      return this.$store.getters["Companies/companySelected"];
    },

    //recover sector of company selected
    sectorsCompanySelected() {
      return this.$store.getters["Sectors/sectorsCompanySelected"];
    },

    //recover state
    states() {
      return this.$store.getters["States/states"];
    },

    //recover error
    errors() {
      return this.$store.getters["Error/errors"];
    },
  },
  methods: {
    //loading data for component
    loadData() {
      //load data for company selected
      this.idCompaniesSelected = this.$store.getters["Companies/idCompaniesSelected"];
      this.currentUser = this.$store.getters["CurrentUser/currentUser"];
      this.trades = this.$store.getters["Trades/tradesCompanySelected"];
      this.roles = this.$store.getters["Roles/roles"];
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}
</style>
