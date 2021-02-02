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
        :trades="trades"
      ></company-selected-employees>
    </div>

    <!-- informations company -->
    <div class="box stxm-r" :class="currentUser.themeColor.cbgBox">
      <div class="header">
        <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Informations</h3>
        <img
          @click="isUpdateCompany = !isUpdateCompany"
          v-if="!isUpdateCompany && authorization.includes(currentUser.role.libelle)"
          :src="imageUpdateCompany"
        />
        <img
          class="close_img"
          @click="isUpdateCompany = !isUpdateCompany"
          v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
          :src="imageCloseUpdateCompany"
        />
      </div>
      <transition name="fade" mode="out-in">
        <!-- update company -->
        <company-selected-info-update
          :currentUser="currentUser"
          :errors="errors"
          :companySelected="companySelected"
          :sectorsCompanySelected="sectorsCompanySelected"
          :states="states"
          v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
        ></company-selected-info-update>

        <!-- see info company -->
        <company-selected-info
          v-else
          :companySelected="companySelected"
          :currentUser="currentUser"
          :sectorsCompanySelected="sectorsCompanySelected"
          :employeesCompanySelected="employeesCompanySelected"
        ></company-selected-info>
      </transition>
    </div>
  </div>
</template>

<script>
import CompanySelectedEmployees from "./SeeCompanyComponent/CompanySelectedEmployees.vue";
import CompanySelectedInfo from "./SeeCompanyComponent/CompanySelectedInfo.vue";
import CompanySelectedInfoUpdate from "./SeeCompanyComponent/CompanySelectedInfoUpdate.vue";

export default {
  components: { CompanySelectedInfo, CompanySelectedEmployees, CompanySelectedInfoUpdate },
  name: "SeeCompanyHome",
  props: {
    idCompaniesSelected: String,
    companySelected: Object,
    sectorsCompanySelected: Array,
    currentUser: Object,
    employeesCompanySelected: Array,
    imageUpdateCompany: String,
    imageCloseUpdateCompany: String,
    authorization: Array,
    errors: Array,
    states: Array,
    trades: Array,
  },
  created() {
    this.$store.commit("ParamApp/seeSubMenu", true);
  },
  data() {
    return {
      isUpdateCompany: false,
    };
  },
  computed: {},
  methods: {
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    updateCompany() {
      this.isUpdateCompany = !this.isUpdateCompany;
    },
  },
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
  margin-bottom: 40px;
}
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
.close_img {
  width: 15px;
  height: 15px;
}
</style>
