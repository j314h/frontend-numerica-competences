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
        name="SeeCompanyHome"
      ></router-view>
      <!-- view create user -->
      <router-view name="SeeCompanyCreateUser"></router-view>
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
      companySelected: Object,
      sectorsCompanySelected: Array,
      currentUser: Object,
      employeesCompanySelected: Array,
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      nameImageUpdate: "logoUpdateElement",
    };
  },
  created() {
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
  },
  methods: {
    loadData() {
      //for see or not sub menu
      this.$store.commit("ParamApp/seeSubMenu", true);

      //load data for company selected
      this.idCompaniesSelected = this.$store.getters["Companies/idCompaniesSelected"];
      this.companySelected = this.$store.getters["Companies/companySelected"];
      this.sectorsCompanySelected = this.$store.getters["Sectors/sectorsCompanySelected"];
      this.currentUser = this.$store.getters["CurrentUser/currentUser"];
      this.employeesCompanySelected = this.$store.getters["Employees/employeesCompanySelected"];
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
