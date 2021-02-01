<template>
  <div>
    <transition appear name="fade" mode="out-in">
      <!-- views home in home dashbord -->
      <router-view :thColor="themeColor" :companiesReferents="companiesReferents" name="DashHome"></router-view>
      <!-- views create company in dashbord -->
      <router-view
        :thColor="themeColor"
        name="CreateCompany"
        :errors="errors"
        :idCurrentUser="idCurrentUser"
        :btnm="btnm"
        :stateActif="stateActif"
      ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HomeDashbord",
  data() {
    return {
      themeColor: Object,
      companiesAdmin: Array,
      errors: Array,
      idCurrentUser: String,
      btnm: String,
      stateActif: String,
    };
  },
  components: {},
  beforeMount() {
    this.loadData();
  },
  updated() {
    this.loadData();
  },
  computed: {
    //create array of object with companies and referent's
    companiesReferents() {
      //create tab for companies and referent of current user
      const companiesReferents = [];
      for (const company of this.companiesAdmin) {
        //check and recover employee in company
        const employee = this.$store.getters["Employees/employeesReferentOfCompaniesAdmin"].find(
          (el) => el.company === company._id
        );

        //object if employee is not defined create object final
        const data = { name: { firstName: "ajouter un", lastName: "référent" } };
        const object = { company, employee: !employee ? data : employee };

        //add new object in tab companiesReferents
        companiesReferents.push(object);
      }
      return companiesReferents;
    },
  },
  methods: {
    //load data for components
    loadData() {
      //setting headband and sub menu
      this.$store.commit("ParamApp/changeTitleHeadBand", "Tableau de bord");
      this.$store.commit("ParamApp/seeSubMenu", true);

      //recover _id of state actif
      if (this.$store.getters["States/states"]) {
        this.$store.getters["States/states"].find((el) => (el.libelle === "actif" ? (this.stateActif = el._id) : null));
      }

      //setting props for components
      this.themeColor = this.$store.getters["CurrentUser/thColor"];
      this.idCurrentUser = this.$store.getters["CurrentUser/idCurrentUser"];
      this.companiesAdmin = this.$store.getters["Companies/companiesAdmin"];
      this.btnm = this.$store.getters["CurrentUser/btnm"];
      this.errors = this.$store.getters["Error/errors"];

      //test if user close company selected or not
      if (this.$store.getters["ParamApp/outCompanySelected"]) {
        this.$store.commit("Companies/deleteCompaniesSelected");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
</style>
