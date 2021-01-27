<template>
  <div>
    <!-- tab employee -->
    <div class="salarie box stxm-r" :class="currentUser.themeColor.cbgBox">
      <div class="header">
        <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Salariés</h3>
      </div>
      <company-selected-employees
        :employeesCompanySelected="employeesCompanySelected"
        :currentUser="currentUser"
      ></company-selected-employees>
    </div>

    <!-- informations company -->
    <div class="box stxm-r" :class="currentUser.themeColor.cbgBox">
      <div class="header">
        <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Informations</h3>
        <img :src="imageUpdateCompany" />
      </div>
      <company-selected-info
        :companySelected="companySelected"
        :currentUser="currentUser"
        :sectorsCompanySelected="sectorsCompanySelected"
      ></company-selected-info>
    </div>
  </div>
</template>

<script>
import CompanySelectedEmployees from "./SeeCompanyComponent/CompanySelectedEmployees.vue";
import CompanySelectedInfo from "./SeeCompanyComponent/CompanySelectedInfo.vue";

export default {
  components: { CompanySelectedInfo, CompanySelectedEmployees },
  name: "SeeCompanyHome",
  props: {
    idCompaniesSelected: String,
    companySelected: Object,
    sectorsCompanySelected: Array,
    currentUser: Object,
    employeesCompanySelected: Array,
    imageUpdateCompany: String,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
img:hover {
  cursor: pointer;
}
.salarie {
  margin-bottom: 20px;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding-bottom: 20px;
}
</style>
