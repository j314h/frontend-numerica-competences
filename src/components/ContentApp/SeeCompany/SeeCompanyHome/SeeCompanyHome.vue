<template>
  <div>
    <!-- tab employee -->
    <div class="box array_companie stxm-r" :class="themeColor.cbgCard">
      <title-cards :themeColor="themeColor" :title="'Salariés'"></title-cards>

      <!-- head array search -->
      <head-sample-array
        :themeColor="themeColor"
        :textLines="textLines"
        :valueSearch.sync="valueSearch"
        :fieldSearch.sync="fieldSearch"
      ></head-sample-array>

      <!-- employees companiy selected -->
      <company-selected-employees
        :employeesCompanySelected="employeesCompanySelected"
        :currentUser="currentUser"
        :trades="trades"
      ></company-selected-employees>
    </div>

    <!-- informations company -->
    <div class="box box_second stxm-r" :class="themeColor.cbgCard">
      <!-- title -->
      <title-cards
        :themeColor="themeColor"
        :title="'Informations'"
        :isImage="true"
        :imageCloseUpdateCompany="imageCloseUpdateCompany"
        :imageUpdateCompany="imageUpdateCompany"
        :authorization="authorization"
        :currentUser="currentUser"
        :isUpdateCompany.sync="isUpdateCompany"
      ></title-cards>

      <!-- info and update company -->
      <transition name="fade" mode="out-in">
        <!-- update company -->
        <company-selected-info-update
          :themeColor="themeColor"
          :currentUser="currentUser"
          :errors="errors"
          :companySelected="companySelected"
          :sectorsCompanySelected="sectorsCompanySelected"
          :states="states"
          :isUpdateCompany.sync="isUpdateCompany"
          v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
        ></company-selected-info-update>

        <!-- see info company -->
        <company-selected-info
          v-else
          :themeColor="themeColor"
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
import TitleCards from "../../../Elements/TitleCards.vue";
import HeadSampleArray from "../../../Elements/Arrays/HeadSample/HeadSampleArray";

import CompanySelectedEmployees from "./CompanySelectedEmployees.vue";
import CompanySelectedInfo from "./CompanySelectedInfo.vue";
import CompanySelectedInfoUpdate from "./CompanySelectedInfoUpdate.vue";

export default {
  components: { CompanySelectedInfo, CompanySelectedEmployees, CompanySelectedInfoUpdate, TitleCards, HeadSampleArray },
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
    themeColor: Object,
  },
  created() {
    this.$store.commit("ParamApp/seeSubMenu", true);
  },
  updated() {
    this.$store.commit("ParamApp/seeSubMenu", true);
    this.$store.commit("ParamApp/changeTitleHeadBand", this.companySelected.name);
  },
  data() {
    return {
      //for head line
      textLines: ["Nom", "Métier", "Status", "Secteur"],
      valueSearch: "",
      fieldSearch: "",
      //
      isUpdateCompany: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
