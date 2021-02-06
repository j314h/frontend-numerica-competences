<template>
  <div class="box array_companie" :class="themeColor.cbgCard">
    <title-cards :title="'Vos clients'" :themeColor="themeColor"></title-cards>

    <!-- head array search -->
    <head-sample-array
      :themeColor="themeColor"
      :textLines="textLines"
      :valueSearch.sync="valueSearch"
      :fieldSearch.sync="fieldSearch"
    ></head-sample-array>

    <!-- ligne -->
    <div v-for="(item, i) in companiesReferents" :key="i" class="line">
      <!-- name -->
      <div class="item_line box_name_company">
        <router-link class="link_router" :to="{ name: 'SeeCompany' }">
          <div class="name_company" @click="selectedCompany(item.company)">
            <span>{{ upperFirstLetter(item.company.name) }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f84210"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-link-2"
            >
              <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
        </router-link>
      </div>

      <!-- filliale -->
      <div class="item_line" v-if="item.company.filliale">
        {{ upperFirstLetter(item.company.filliale) }}
      </div>
      <div class="item_line" v-else>
        -
      </div>

      <!-- referent -->
      <!-- referent exist -->
      <div v-if="item.employee.name.lastName !== 'référent'" class="item_line name_company">
        <router-link class="link_router name_company" :to="{ name: 'SeeUserReferentCompany' }">
          <span class="first_name_referent">{{ upperFirstLetter(item.employee.name.firstName) }}</span>
          <span class="name_referent upper">{{ item.employee.name.lastName }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f84210"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-link-2"
          >
            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </router-link>
      </div>

      <!-- referent not exist -->
      <div @click="selectedCompany(item.company)" v-else class="item_line name_company">
        <router-link
          class="link_router link_add_referent"
          :to="{ name: 'SeeCompanyCreateUser', query: { referent: true } }"
        >
          <span>
            {{ upperFirstLetter(item.employee.name.firstName) }}
            {{ item.employee.name.lastName }}
          </span>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#f84210" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeadSampleArray from "../../../Elements/Arrays/HeadSample/HeadSampleArray.vue";
import TitleCards from "../../../Elements/TitleCards.vue";

export default {
  components: { TitleCards, HeadSampleArray },
  name: "DashHomeArrayCompanies",
  props: {
    themeColor: Object,
    companiesReferents: Array,
  },
  data() {
    return {
      //for head line
      textLines: ["Dénomination", "Site/Filliale", "Référent"],
      valueSearch: "",
      fieldSearch: "",
      //
      isSearchDenomination: false,
      isSearchFilliale: false,
      isSearchReferent: false,
      captureDenomination: "",
      captureFilliale: "",
      captureReferent: "",
    };
  },
  computed: {},
  methods: {
    //active input search
    searchDenomination() {
      this.isSearchFilliale = false;
      this.isSearchReferent = false;
      this.isSearchDenomination = !this.isSearchDenomination;
    },
    searchFilliale() {
      this.isSearchReferent = false;
      this.isSearchDenomination = false;
      this.isSearchFilliale = !this.isSearchFilliale;
    },
    searchReferent() {
      this.isSearchFilliale = false;
      this.isSearchDenomination = false;
      this.isSearchReferent = !this.isSearchReferent;
    },

    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //selected company
    selectedCompany(company) {
      //add id in store currentcompany in companiesSelected
      this.$store.commit("Companies/addIdCompanySelected", company._id);
      this.$store.commit("ParamApp/changeTitleHeadBand", company.name);
    },
  },
};
</script>

<style></style>
